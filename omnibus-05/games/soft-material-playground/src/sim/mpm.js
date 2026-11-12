// やわらかそざいあそび - 2D MLS-MPM core (Moving Least Squares Material
// Point Method, Hu et al. 2018 / Stomakhin et al. 2013 snow plasticity).
//
// One unified constitutive code path drives all 12 materials:
//   * fixed-corotated hyperelasticity (closed-form 2D polar/SVD)
//   * singular-value clamp plasticity with exponential hardening
//   * Maxwell stress relaxation (viscoelastic slime/mochi)
//   * APIC-based viscosity (free: MLS-MPM already carries C)
//   * pure-fluid branch (pressure from J + viscosity) for choco/honey
//
// Hot loops are allocation-free over SoA Float32Arrays; the grid is 3 flat
// arrays cleared per substep. Runs comfortably on mobile Safari.
(function () {
  'use strict';
  const GAME = window.GAME;
  const U = GAME.U;

  const Sim = {
    // --- domain -------------------------------------------------------------
    dx: 1 / 96,
    invDx: 96,
    nx: 0, ny: 0,          // grid node counts
    worldW: 1, worldH: 1,  // world size (short screen side = 1)
    // --- particles (SoA) ------------------------------------------------------
    cap: 9000,
    n: 0,
    // --- state ----------------------------------------------------------------
    material: null,      // current material def (materials.js)
    dtSub: 2e-4,
    substeps: 10,
    gravity: 52,
    running: true,
    frameCount: 0,
    // Per-frame juice/telemetry consumed by audio, face and quests.
    events: { deformRate: 0, wallImpact: 0, avgSpeed: 0, stretch: 1, touching: 0 },
    _rand: null,
  };

  // particle arrays
  let px, py, pvx, pvy;
  let pC00, pC01, pC10, pC11;
  let pF00, pF01, pF10, pF11;
  let pJp;             // plastic volume (solids) / current J (fluids)
  let pr, pg, pb;      // per-particle color (marbles when kneaded)
  let pKind;           // 0 = material, 1 = tracer topping
  // grid arrays
  let gm = null, gvx = null, gvy = null;

  const P_VOL = (Sim.dx * 0.5) * (Sim.dx * 0.5);
  const P_RHO = 1.0;
  const P_MASS = P_VOL * P_RHO;

  Sim.alloc = function () {
    const c = Sim.cap;
    px = new Float32Array(c); py = new Float32Array(c);
    pvx = new Float32Array(c); pvy = new Float32Array(c);
    pC00 = new Float32Array(c); pC01 = new Float32Array(c);
    pC10 = new Float32Array(c); pC11 = new Float32Array(c);
    pF00 = new Float32Array(c); pF01 = new Float32Array(c);
    pF10 = new Float32Array(c); pF11 = new Float32Array(c);
    pJp = new Float32Array(c);
    pr = new Float32Array(c); pg = new Float32Array(c); pb = new Float32Array(c);
    pKind = new Uint8Array(c);
    Sim.px = px; Sim.py = py; Sim.pvx = pvx; Sim.pvy = pvy;
    Sim.pr = pr; Sim.pg = pg; Sim.pb = pb; Sim.pKind = pKind;
  };

  Sim.resetParticleState = function (i) {
    pF00[i] = 1; pF01[i] = 0; pF10[i] = 0; pF11[i] = 1;
    pC00[i] = 0; pC01[i] = 0; pC10[i] = 0; pC11[i] = 0;
    pJp[i] = 1;
  };

  // World / grid sizing. Short screen side is world length 1.
  Sim.setWorld = function (worldW, worldH) {
    const changedW = Math.abs(worldW - Sim.worldW) > 1e-4 ||
                     Math.abs(worldH - Sim.worldH) > 1e-4;
    const oldTray = { ...GAME.Colliders.tray };
    Sim.worldW = worldW;
    Sim.worldH = worldH;
    const nx = Math.ceil(worldW * Sim.invDx) + 4;
    const ny = Math.ceil(worldH * Sim.invDx) + 4;
    if (nx !== Sim.nx || ny !== Sim.ny) {
      Sim.nx = nx; Sim.ny = ny;
      gm = new Float32Array(nx * ny);
      gvx = new Float32Array(nx * ny);
      gvy = new Float32Array(nx * ny);
    }
    return { changed: changedW, oldTray };
  };

  // Remap particles into the new tray after an orientation change.
  Sim.remapParticles = function (oldTray) {
    const t = GAME.Colliders.tray;
    const ow = Math.max(oldTray.x1 - oldTray.x0, 1e-4);
    const oh = Math.max(oldTray.y1 - oldTray.y0, 1e-4);
    const nw = t.x1 - t.x0, nh = t.y1 - t.y0;
    for (let i = 0; i < Sim.n; i++) {
      px[i] = t.x0 + ((px[i] - oldTray.x0) / ow) * nw;
      py[i] = t.y0 + ((py[i] - oldTray.y0) / oh) * nh;
      pvx[i] = 0; pvy[i] = 0;
      Sim.resetParticleState(i);
    }
  };

  // Choose stable dt from material stiffness (CFL on the P-wave speed,
  // including hardening headroom), then the substep count for this frame rate.
  function retime() {
    const p = Sim.material.phys;
    let stiff;
    if (p.kind === 'fluid') {
      // pressure K*J*(J-1): dp/dJ reaches ~4K within the J clamp range
      stiff = p.fluidK * 4;
    } else {
      const M = p.E * (1 - p.nu) / ((1 + p.nu) * (1 - 2 * p.nu));
      const hardHead = U.clamp(Math.exp((p.hard || 0) * 0.65), 1, 3);
      stiff = M * hardHead;
    }
    const c = Math.sqrt(Math.max(stiff, 40) / P_RHO);
    Sim.dtSub = U.clamp(0.27 * Sim.dx / c, 0.6e-4, 2.2e-4);
    const targetAdvance = 2.1e-3 * (Sim.quality === 'low' ? 0.7 : 1.0) * Sim.governor;
    Sim.substeps = Math.round(U.clamp(targetAdvance / Sim.dtSub, 6, 17));
  }
  Sim.quality = 'high';
  Sim.governor = 1.0; // perf governor multiplier set by game.js
  Sim.retime = retime;

  Sim.setMaterial = function (id, keepShape) {
    const def = GAME.Materials.byId[id] || GAME.Materials.list[0];
    Sim.material = def;
    retime();
    if (!keepShape) {
      Sim.reset();
    } else {
      for (let i = 0; i < Sim.n; i++) Sim.resetParticleState(i);
      Sim.recolor(def.palette[0]);
    }
  };

  Sim.recolor = function (hex) {
    const c = U.hexToRgb(hex);
    const rand = Sim._rand || U.rng(1);
    for (let i = 0; i < Sim.n; i++) {
      if (pKind[i]) continue;
      const shade = 0.975 + rand() * 0.05;
      pr[i] = U.clamp(c[0] * shade, 0, 1);
      pg[i] = U.clamp(c[1] * shade, 0, 1);
      pb[i] = U.clamp(c[2] * shade, 0, 1);
    }
  };

  // Respawn the blob fresh in the tray (reset button / material switch).
  Sim.reset = function () {
    const t = GAME.Colliders.tray;
    Sim.n = 0;
    const cw = t.x1 - t.x0, ch = t.y1 - t.y0;
    // particle budget sized for 60fps on phones (also leaves topping headroom)
    const budget = Sim.quality === 'low' ? 2600 : 3800;
    const perArea = 4 * Sim.invDx * Sim.invDx; // ~4 particles per cell
    const rBudget = Math.sqrt(budget / perArea / Math.PI);
    const radius = Math.min(Math.min(cw, ch) * 0.30, rBudget);
    const cx = t.x0 + cw * 0.5;
    const cy = t.y0 + Math.min(ch * 0.30, radius + 0.12);
    GAME.Shapes.spawnBlob(cx, cy, radius, Sim.material.palette, Sim._rand);
    Sim.events.deformRate = 0;
    Sim.events.wallImpact = 0;
  };

  Sim.init = function (seed, quality) {
    Sim.quality = quality;
    if (quality === 'low') Sim.cap = 5000;
    Sim._rand = U.rng(seed);
    Sim.alloc();
    Sim.material = GAME.Materials.list[0];
    retime();
  };

  // Extra tracer particles (sprinkles ride the flow, skip P2G).
  Sim.addTopping = function (x, y, rgb) {
    if (Sim.n >= Sim.cap) return false;
    const i = Sim.n++;
    px[i] = x; py[i] = y;
    pvx[i] = 0; pvy[i] = 0;
    Sim.resetParticleState(i);
    pr[i] = rgb[0]; pg[i] = rgb[1]; pb[i] = rgb[2];
    pKind[i] = 1;
    return true;
  };

  // =========================================================================
  // The substep. Follows taichi mpm99's exact formulation:
  //  P2G does (F update -> plasticity -> stress -> scatter), grid ops apply
  //  gravity/colliders/walls, G2P gathers v & C and advects.
  // =========================================================================
  function substep(dt, colliders, gravX, gravY) {
    const nx = Sim.nx, ny = Sim.ny, n = Sim.n;
    const dx = Sim.dx, invDx = Sim.invDx;
    const p = Sim.material.phys;
    const fluid = p.kind === 'fluid';

    // Lamé parameters (solids).
    const E = fluid ? 0 : p.E, nu = fluid ? 0.3 : p.nu;
    const mu0 = E / (2 * (1 + nu));
    const la0 = (E * nu) / ((1 + nu) * (1 - 2 * nu));
    const thetaC = p.thetaC, thetaS = p.thetaS;
    const plastic = !fluid && isFinite(thetaC);
    const hard = p.hard || 0;
    const relaxK = p.relax ? Math.exp(-dt * p.relax * 60) : 1; // relax rate scaled
    // Real viscous stress must respect the explicit diffusion limit
    // dt <= dx^2*rho/mu, so the material knob (0..1) maps onto a safe ceiling.
    const visc = (p.visc || 0) * 0.18 * dx * dx / dt;
    const picKeep = 1 - (p.pic || 0); // APIC->PIC blend (thickness, always stable)
    const fluidK = p.fluidK || 0;
    const stressCoef = -dt * P_VOL * 4 * invDx * invDx;

    gm.fill(0); gvx.fill(0); gvy.fill(0);

    // ---- P2G ---------------------------------------------------------------
    for (let i = 0; i < n; i++) {
      if (pKind[i]) continue;
      const xi = px[i] * invDx, yi = py[i] * invDx;
      const bx = (xi - 0.5) | 0, by = (yi - 0.5) | 0;
      if (bx < 0 || by < 0 || bx > nx - 3 || by > ny - 3) continue;
      const fx = xi - bx, fy = yi - by;
      // quadratic B-spline weights
      const wx0 = 0.5 * (1.5 - fx) * (1.5 - fx);
      const wx1 = 0.75 - (fx - 1) * (fx - 1);
      const wx2 = 0.5 * (fx - 0.5) * (fx - 0.5);
      const wy0 = 0.5 * (1.5 - fy) * (1.5 - fy);
      const wy1 = 0.75 - (fy - 1) * (fy - 1);
      const wy2 = 0.5 * (fy - 0.5) * (fy - 0.5);

      const c00 = pC00[i], c01 = pC01[i], c10 = pC10[i], c11 = pC11[i];

      // deformation gradient update: F = (I + dt C) F
      let f00, f01, f10, f11;
      let s00 = 0, s01 = 0, s10 = 0, s11 = 0; // stress * coef

      if (fluid) {
        // track volume ratio only
        let J = pJp[i] * (1 + dt * (c00 + c11));
        J = J < 0.35 ? 0.35 : J > 2.4 ? 2.4 : J;
        pJp[i] = J;
        const pres = fluidK * (J - 1) * J;
        const sc = stressCoef;
        s00 = sc * (pres + visc * (c00 + c00));
        s11 = sc * (pres + visc * (c11 + c11));
        s01 = sc * (visc * (c01 + c10));
        s10 = s01;
      } else {
        f00 = (1 + dt * c00) * pF00[i] + dt * c01 * pF10[i];
        f01 = (1 + dt * c00) * pF01[i] + dt * c01 * pF11[i];
        f10 = dt * c10 * pF00[i] + (1 + dt * c11) * pF10[i];
        f11 = dt * c10 * pF01[i] + (1 + dt * c11) * pF11[i];

        // closed-form 2D polar decomposition: F = R S
        const rx = f00 + f11, ry = f10 - f01;
        const rlen = Math.sqrt(rx * rx + ry * ry) || 1e-9;
        const rc = rx / rlen, rs = ry / rlen; // R = [[rc,-rs],[rs,rc]]
        // S = R^T F (symmetric)
        const sA = rc * f00 + rs * f10;            // S00
        const sB = rc * f01 + rs * f11;            // S01 (= S10)
        const sD = -rs * f01 + rc * f11;           // S11
        // eigen-decompose S -> singular values of F
        const tS = (sA + sD) * 0.5, dS = (sA - sD) * 0.5;
        const rrS = Math.sqrt(dS * dS + sB * sB);
        let sig0 = tS + rrS, sig1 = tS - rrS;
        // eigenvector rotation V = [[vc,-vs],[vs,vc]]
        const ang = 0.5 * Math.atan2(2 * sB, sA - sD);
        const vc = Math.cos(ang), vs = Math.sin(ang);

        // Maxwell relaxation: stretch decays toward 1 (stress "melts")
        if (relaxK < 1) {
          sig0 = 1 + (sig0 - 1) * relaxK;
          sig1 = 1 + (sig1 - 1) * relaxK;
        }
        // plastic clamp
        let h = 1;
        if (plastic) {
          const lo = 1 - thetaC, hi = 1 + thetaS;
          const n0 = sig0 < lo ? lo : sig0 > hi ? hi : sig0;
          const n1 = sig1 < lo ? lo : sig1 > hi ? hi : sig1;
          let Jp = pJp[i] * (sig0 / n0) * (sig1 / n1);
          Jp = Jp < 0.35 ? 0.35 : Jp > 2.8 ? 2.8 : Jp;
          pJp[i] = Jp;
          sig0 = n0; sig1 = n1;
          if (hard !== 0) {
            h = Math.exp(hard * (1 - Jp));
            h = h < 0.08 ? 0.08 : h > 3 ? 3 : h; // cap matches retime() headroom
          }
        } else {
          // pure elastic: keep stretches sane so nothing explodes
          sig0 = sig0 < 0.3 ? 0.3 : sig0 > 2.6 ? 2.6 : sig0;
          sig1 = sig1 < 0.3 ? 0.3 : sig1 > 2.6 ? 2.6 : sig1;
        }
        const J = sig0 * sig1;

        // reconstruct F = U diag(sig) V^T,  U = R V
        const u00 = rc * vc - rs * vs, u01 = -(rc * vs + rs * vc);
        const u10 = rs * vc + rc * vs, u11 = rc * vc - rs * vs;
        // A = U * diag
        const a00 = u00 * sig0, a01 = u01 * sig1;
        const a10 = u10 * sig0, a11 = u11 * sig1;
        // F = A * V^T,  V = [[vc,-vs],[vs,vc]] -> V^T = [[vc,vs],[-vs,vc]]
        f00 = a00 * vc + a01 * -vs;
        f01 = a00 * vs + a01 * vc;
        f10 = a10 * vc + a11 * -vs;
        f11 = a10 * vs + a11 * vc;
        pF00[i] = f00; pF01[i] = f01; pF10[i] = f10; pF11[i] = f11;

        const mu = mu0 * h, la = la0 * h;
        // stress = 2 mu (F - R) F^T + la J (J-1) I  (+ viscosity from C)
        const d00 = f00 - rc, d01 = f01 + rs, d10 = f10 - rs, d11 = f11 - rc;
        const t00 = 2 * mu * (d00 * f00 + d01 * f01) + la * J * (J - 1);
        const t01 = 2 * mu * (d00 * f10 + d01 * f11);
        const t10 = 2 * mu * (d10 * f00 + d11 * f01);
        const t11 = 2 * mu * (d10 * f10 + d11 * f11) + la * J * (J - 1);
        s00 = stressCoef * (t00 + visc * (c00 + c00));
        s01 = stressCoef * (t01 + visc * (c01 + c10));
        s10 = stressCoef * (t10 + visc * (c10 + c01));
        s11 = stressCoef * (t11 + visc * (c11 + c11));
      }

      // affine = stress + mass * C
      const A00 = s00 + P_MASS * c00, A01 = s01 + P_MASS * c01;
      const A10 = s10 + P_MASS * c10, A11 = s11 + P_MASS * c11;

      const mvx = P_MASS * pvx[i], mvy = P_MASS * pvy[i];

      // scatter to 3x3 nodes; dpos in world units
      const dpx0 = (0 - fx) * dx, dpx1 = (1 - fx) * dx, dpx2 = (2 - fx) * dx;
      const dpy0 = (0 - fy) * dx, dpy1 = (1 - fy) * dx, dpy2 = (2 - fy) * dx;
      let node = by * nx + bx;

      let w = wx0 * wy0;
      gm[node] += w * P_MASS;
      gvx[node] += w * (mvx + A00 * dpx0 + A01 * dpy0);
      gvy[node] += w * (mvy + A10 * dpx0 + A11 * dpy0);
      w = wx1 * wy0;
      gm[node + 1] += w * P_MASS;
      gvx[node + 1] += w * (mvx + A00 * dpx1 + A01 * dpy0);
      gvy[node + 1] += w * (mvy + A10 * dpx1 + A11 * dpy0);
      w = wx2 * wy0;
      gm[node + 2] += w * P_MASS;
      gvx[node + 2] += w * (mvx + A00 * dpx2 + A01 * dpy0);
      gvy[node + 2] += w * (mvy + A10 * dpx2 + A11 * dpy0);

      node += nx;
      w = wx0 * wy1;
      gm[node] += w * P_MASS;
      gvx[node] += w * (mvx + A00 * dpx0 + A01 * dpy1);
      gvy[node] += w * (mvy + A10 * dpx0 + A11 * dpy1);
      w = wx1 * wy1;
      gm[node + 1] += w * P_MASS;
      gvx[node + 1] += w * (mvx + A00 * dpx1 + A01 * dpy1);
      gvy[node + 1] += w * (mvy + A10 * dpx1 + A11 * dpy1);
      w = wx2 * wy1;
      gm[node + 2] += w * P_MASS;
      gvx[node + 2] += w * (mvx + A00 * dpx2 + A01 * dpy1);
      gvy[node + 2] += w * (mvy + A10 * dpx2 + A11 * dpy1);

      node += nx;
      w = wx0 * wy2;
      gm[node] += w * P_MASS;
      gvx[node] += w * (mvx + A00 * dpx0 + A01 * dpy2);
      gvy[node] += w * (mvy + A10 * dpx0 + A11 * dpy2);
      w = wx1 * wy2;
      gm[node + 1] += w * P_MASS;
      gvx[node + 1] += w * (mvx + A00 * dpx1 + A01 * dpy2);
      gvy[node + 1] += w * (mvy + A10 * dpx1 + A11 * dpy2);
      w = wx2 * wy2;
      gm[node + 2] += w * P_MASS;
      gvx[node + 2] += w * (mvx + A00 * dpx2 + A01 * dpy2);
      gvy[node + 2] += w * (mvy + A10 * dpx2 + A11 * dpy2);
    }

    // ---- grid ops: gravity, damping, walls, touch colliders ------------------
    const vmax = 0.5 * dx / dt;
    const dampF = Math.exp(-dt * (p.drag || 0) * 11);
    const gvxAdd = dt * gravX, gvyAdd = dt * gravY;
    const traySdf = GAME.Colliders.traySdf;
    const wallBand = dx * 2;
    const fr = p.friction;
    let wallImpact = 0;

    for (let gy = 0; gy < ny; gy++) {
      const row = gy * nx;
      const wy = gy * dx;
      for (let gx = 0; gx < nx; gx++) {
        const idx = row + gx;
        const m = gm[idx];
        if (m <= 0) continue;
        let vx = gvx[idx] / m + gvxAdd;
        let vy = gvy[idx] / m + gvyAdd;
        vx *= dampF; vy *= dampF;

        // tray wall
        const wx = gx * dx;
        const d = traySdf(wx, wy);
        if (d > -wallBand) {
          // numeric normal
          const e = dx * 0.5;
          const nxv = traySdf(wx + e, wy) - traySdf(wx - e, wy);
          const nyv = traySdf(wx, wy + e) - traySdf(wx, wy - e);
          const nl = Math.hypot(nxv, nyv) || 1e-9;
          const nX = nxv / nl, nY = nyv / nl; // points outward (d increases out)
          const vn = vx * nX + vy * nY;
          if (vn > 0) {
            vx -= nX * vn; vy -= nY * vn;
            wallImpact += m * vn;
            // tangential friction
            vx *= 1 - fr * 0.5; vy *= 1 - fr * 0.5;
          }
          if (d > 0) { // already outside: push back in
            vx -= nX * d * 30; vy -= nY * d * 30;
          }
        }

        if (vx > vmax) vx = vmax; else if (vx < -vmax) vx = -vmax;
        if (vy > vmax) vy = vmax; else if (vy < -vmax) vy = -vmax;
        gvx[idx] = vx; gvy[idx] = vy;
      }
    }

    // touch colliders (bounded node windows only)
    for (let c = 0; c < colliders.length; c++) {
      const col = colliders[c];
      applyCollider(col, dt, vmax);
    }

    Sim.events.wallImpact += wallImpact;

    // ---- G2P ----------------------------------------------------------------
    let deform = 0, speed = 0, sampled = 0;
    const trayLim = GAME.Colliders.tray;
    const lim = dx * 1.6;
    for (let i = 0; i < n; i++) {
      const xi = px[i] * invDx, yi = py[i] * invDx;
      const bx = (xi - 0.5) | 0, by = (yi - 0.5) | 0;
      if (bx < 0 || by < 0 || bx > nx - 3 || by > ny - 3) {
        // out of grid: park it back inside the tray
        px[i] = U.clamp(px[i], trayLim.x0 + lim, trayLim.x1 - lim);
        py[i] = U.clamp(py[i], trayLim.y0 + lim, trayLim.y1 - lim);
        pvx[i] = 0; pvy[i] = 0;
        continue;
      }
      const fx = xi - bx, fy = yi - by;
      const wx0 = 0.5 * (1.5 - fx) * (1.5 - fx);
      const wx1 = 0.75 - (fx - 1) * (fx - 1);
      const wx2 = 0.5 * (fx - 0.5) * (fx - 0.5);
      const wy0 = 0.5 * (1.5 - fy) * (1.5 - fy);
      const wy1 = 0.75 - (fy - 1) * (fy - 1);
      const wy2 = 0.5 * (fy - 0.5) * (fy - 0.5);

      let nvx = 0, nvy = 0;
      let b00 = 0, b01 = 0, b10 = 0, b11 = 0;
      let node = by * nx + bx;

      // row 0
      let w = wx0 * wy0, gx0 = gvx[node], gy0 = gvy[node];
      nvx += w * gx0; nvy += w * gy0;
      b00 += w * gx0 * (0 - fx); b01 += w * gx0 * (0 - fy);
      b10 += w * gy0 * (0 - fx); b11 += w * gy0 * (0 - fy);
      w = wx1 * wy0; gx0 = gvx[node + 1]; gy0 = gvy[node + 1];
      nvx += w * gx0; nvy += w * gy0;
      b00 += w * gx0 * (1 - fx); b01 += w * gx0 * (0 - fy);
      b10 += w * gy0 * (1 - fx); b11 += w * gy0 * (0 - fy);
      w = wx2 * wy0; gx0 = gvx[node + 2]; gy0 = gvy[node + 2];
      nvx += w * gx0; nvy += w * gy0;
      b00 += w * gx0 * (2 - fx); b01 += w * gx0 * (0 - fy);
      b10 += w * gy0 * (2 - fx); b11 += w * gy0 * (0 - fy);
      // row 1
      node += nx;
      w = wx0 * wy1; gx0 = gvx[node]; gy0 = gvy[node];
      nvx += w * gx0; nvy += w * gy0;
      b00 += w * gx0 * (0 - fx); b01 += w * gx0 * (1 - fy);
      b10 += w * gy0 * (0 - fx); b11 += w * gy0 * (1 - fy);
      w = wx1 * wy1; gx0 = gvx[node + 1]; gy0 = gvy[node + 1];
      nvx += w * gx0; nvy += w * gy0;
      b00 += w * gx0 * (1 - fx); b01 += w * gx0 * (1 - fy);
      b10 += w * gy0 * (1 - fx); b11 += w * gy0 * (1 - fy);
      w = wx2 * wy1; gx0 = gvx[node + 2]; gy0 = gvy[node + 2];
      nvx += w * gx0; nvy += w * gy0;
      b00 += w * gx0 * (2 - fx); b01 += w * gx0 * (1 - fy);
      b10 += w * gy0 * (2 - fx); b11 += w * gy0 * (1 - fy);
      // row 2
      node += nx;
      w = wx0 * wy2; gx0 = gvx[node]; gy0 = gvy[node];
      nvx += w * gx0; nvy += w * gy0;
      b00 += w * gx0 * (0 - fx); b01 += w * gx0 * (2 - fy);
      b10 += w * gy0 * (0 - fx); b11 += w * gy0 * (2 - fy);
      w = wx1 * wy2; gx0 = gvx[node + 1]; gy0 = gvy[node + 1];
      nvx += w * gx0; nvy += w * gy0;
      b00 += w * gx0 * (1 - fx); b01 += w * gx0 * (2 - fy);
      b10 += w * gy0 * (1 - fx); b11 += w * gy0 * (2 - fy);
      w = wx2 * wy2; gx0 = gvx[node + 2]; gy0 = gvy[node + 2];
      nvx += w * gx0; nvy += w * gy0;
      b00 += w * gx0 * (2 - fx); b01 += w * gx0 * (2 - fy);
      b10 += w * gy0 * (2 - fx); b11 += w * gy0 * (2 - fy);

      pvx[i] = nvx; pvy[i] = nvy;
      // dpos was accumulated in cell units -> C = 4 * invDx * sum(w * v (x) dpos)
      // picKeep < 1 bleeds APIC toward PIC: numerical viscosity = thickness.
      const k4 = 4 * invDx * picKeep;
      pC00[i] = k4 * b00;
      pC01[i] = k4 * b01;
      pC10[i] = k4 * b10;
      pC11[i] = k4 * b11;

      px[i] += dt * nvx;
      py[i] += dt * nvy;

      if ((i & 3) === 0 && !pKind[i]) {
        deform += Math.abs(pC00[i]) + Math.abs(pC01[i]) + Math.abs(pC10[i]) + Math.abs(pC11[i]);
        speed += Math.abs(nvx) + Math.abs(nvy);
        sampled++;
      }
    }

    if (sampled) {
      Sim.events._deformAccum += deform / sampled;
      Sim.events._speedAccum += speed / sampled;
      Sim.events._accumCount++;
    }
  }

  // Apply one touch collider to its grid neighborhood.
  function applyCollider(col, dt, vmax) {
    const nx = Sim.nx, ny = Sim.ny, dx = Sim.dx;
    const reach = col.mode === 'ring' ? col.r * 1.45 : col.r * 1.7;
    const minGx = Math.max(0, ((Math.min(col.sx, col.ex) - reach) / dx) | 0);
    const maxGx = Math.min(nx - 1, Math.ceil((Math.max(col.sx, col.ex) + reach) / dx));
    const minGy = Math.max(0, ((Math.min(col.sy, col.ey) - reach) / dx) | 0);
    const maxGy = Math.min(ny - 1, Math.ceil((Math.max(col.sy, col.ey) + reach) / dx));
    const segX = col.ex - col.sx, segY = col.ey - col.sy;
    const segLen2 = segX * segX + segY * segY;
    let cvx = U.clamp(col.vx, -vmax * 0.85, vmax * 0.85);
    let cvy = U.clamp(col.vy, -vmax * 0.85, vmax * 0.85);
    const speed = Math.hypot(cvx, cvy);
    let touched = 0;

    for (let gy = minGy; gy <= maxGy; gy++) {
      const wy = gy * dx;
      const row = gy * nx;
      for (let gx = minGx; gx <= maxGx; gx++) {
        const idx = row + gx;
        if (gm[idx] <= 0) continue;
        const wx = gx * dx;

        if (col.mode === 'ring') {
          // cookie cutter: push material away from the outline groove
          const s = GAME.Colliders.ringSdf(col.shape, col.ex, col.ey, col.r, wx, wy);
          const band = dx * 2.6;
          if (Math.abs(s) < band) {
            const e = dx * 0.5;
            const gxv = GAME.Colliders.ringSdf(col.shape, col.ex, col.ey, col.r, wx + e, wy) -
                        GAME.Colliders.ringSdf(col.shape, col.ex, col.ey, col.r, wx - e, wy);
            const gyv = GAME.Colliders.ringSdf(col.shape, col.ex, col.ey, col.r, wx, wy + e) -
                        GAME.Colliders.ringSdf(col.shape, col.ex, col.ey, col.r, wx, wy - e);
            const gl = Math.hypot(gxv, gyv) || 1e-9;
            const dir = s >= 0 ? 1 : -1;
            const push = (1 - Math.abs(s) / band) * vmax * 0.45 * dir;
            gvx[idx] = U.clamp(gvx[idx] + (gxv / gl) * push * dt * 60, -vmax, vmax);
            gvy[idx] = U.clamp(gvy[idx] + (gyv / gl) * push * dt * 60, -vmax, vmax);
            touched++;
          }
          continue;
        }

        // distance to swipe segment
        let t = 0;
        if (segLen2 > 1e-12) {
          t = ((wx - col.sx) * segX + (wy - col.sy) * segY) / segLen2;
          t = t < 0 ? 0 : t > 1 ? 1 : t;
        }
        const cx = col.sx + segX * t, cy = col.sy + segY * t;
        const ddx = wx - cx, ddy = wy - cy;
        const dist = Math.hypot(ddx, ddy);

        if (col.mode === 'cut') {
          if (dist < col.r * 3 && speed > 0.02) {
            // push away from the blade line, perpendicular to swipe direction
            const sl = Math.hypot(segX, segY) || 1e-9;
            const pxn = -segY / sl, pyn = segX / sl;
            const side = (ddx * pxn + ddy * pyn) >= 0 ? 1 : -1;
            const fall = Math.max(0, 1 - dist / (col.r * 3));
            const push = fall * fall * vmax * 0.5 * side;
            gvx[idx] = U.clamp(gvx[idx] + pxn * push, -vmax, vmax);
            gvy[idx] = U.clamp(gvy[idx] + pyn * push, -vmax, vmax);
            touched++;
          }
          continue;
        }

        // drag capsule: hard core follows finger, outer ring pulls by stickiness
        if (dist < col.r) {
          const k = 0.9;
          gvx[idx] += (cvx - gvx[idx]) * k;
          gvy[idx] += (cvy - gvy[idx]) * k;
          touched++;
        } else if (dist < col.r * 1.7 && col.stick > 0) {
          const tt = 1 - (dist - col.r) / (col.r * 0.7);
          const k = col.stick * tt * tt * 0.75;
          gvx[idx] += (cvx - gvx[idx]) * k;
          gvy[idx] += (cvy - gvy[idx]) * k;
          touched++;
        }
      }
    }
    if (touched) Sim.events.touching = Math.min(1, Sim.events.touching + touched / 60);
  }

  // =========================================================================
  // Frame driver: interpolates colliders across substeps.
  // =========================================================================
  Sim.frame = function () {
    if (!Sim.running || !gm) return;
    const M = GAME.Motion;
    const p = Sim.material.phys;
    const g = Sim.gravity * (p.gravScale == null ? 1 : p.gravScale);
    let gravX = M.gx * g, gravY = M.gy * g;
    // shake: swirl the gravity around violently for a moment
    if (M.shakeEnergy > 0.05) {
      const a = performance.now() * 0.02;
      gravX += Math.cos(a) * g * 3.5 * M.shakeEnergy;
      gravY += Math.sin(a * 1.3) * g * 3.0 * M.shakeEnergy;
    }

    const ev = Sim.events;
    ev._deformAccum = 0; ev._speedAccum = 0; ev._accumCount = 0;
    ev.wallImpact = 0;
    ev.touching = 0;

    const N = Sim.substeps;
    const dt = Sim.dtSub;
    const cols = GAME.Colliders.active;
    const tmp = Sim._colTmp || (Sim._colTmp = []);
    for (let s = 0; s < N; s++) {
      // set each collider's segment for this substep (prev->cur path slice)
      tmp.length = 0;
      const t0 = s / N, t1 = (s + 1) / N;
      for (let c = 0; c < cols.length; c++) {
        const col = cols[c];
        tmp.push({
          sx: col.ax + (col.bx - col.ax) * t0,
          sy: col.ay + (col.by - col.ay) * t0,
          ex: col.ax + (col.bx - col.ax) * t1,
          ey: col.ay + (col.by - col.ay) * t1,
          r: col.r, mode: col.mode, shape: col.shape,
          stick: col.stick, vx: col.vx, vy: col.vy,
        });
      }
      substep(dt, tmp, gravX, gravY);
    }

    if (ev._accumCount) {
      const d = ev._deformAccum / ev._accumCount;
      ev.deformRate = ev.deformRate * 0.65 + d * 0.35;
      ev.avgSpeed = ev._speedAccum / ev._accumCount;
    }
    if (ev.deformRate > GAME.DEBUG.lastDeformPeak) {
      GAME.DEBUG.lastDeformPeak = ev.deformRate;
    }
    if (ev.wallImpact > GAME.DEBUG.lastWallImpact) {
      GAME.DEBUG.lastWallImpact = ev.wallImpact;
    }

    Sim.frameCount++;
    if ((Sim.frameCount & 63) === 0) Sim.checkFinite();
  };

  // NaN watchdog: sweeps particle state; heals rather than crashes.
  Sim.checkFinite = function () {
    let bad = 0;
    const t = GAME.Colliders.tray;
    const cx = (t.x0 + t.x1) / 2, cy = (t.y0 + t.y1) / 2;
    for (let i = 0; i < Sim.n; i++) {
      const ok = isFinite(px[i]) && isFinite(py[i]) &&
                 isFinite(pvx[i]) && isFinite(pvy[i]) &&
                 isFinite(pF00[i]) && isFinite(pF11[i]) &&
                 isFinite(pC00[i]) && isFinite(pJp[i]);
      if (!ok) {
        bad++;
        px[i] = cx + (Sim._rand() - 0.5) * 0.05;
        py[i] = cy + (Sim._rand() - 0.5) * 0.05;
        pvx[i] = 0; pvy[i] = 0;
        Sim.resetParticleState(i);
      }
    }
    if (bad) console.warn('[sim] healed ' + bad + ' non-finite particles');
    return bad === 0;
  };

  GAME.Sim = Sim;
})();
