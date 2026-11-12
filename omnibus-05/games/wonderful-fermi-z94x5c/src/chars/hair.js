// Strand-lock hair (mane, forelock, tail): each lock is a verlet chain anchored to a bone.
// Inertia, gravity, relative air flow and shape memory make every lock lag differently.
// Droplets cling to lock points and are flung off when local acceleration exceeds
// surface tension.
import * as THREE from '../../lib/three.module.js';
import { shared, GLSL_NOISE } from '../core/env.js';
import { rng } from '../core/math.js';

const _v = new THREE.Vector3(), _w = new THREE.Vector3(), _t = new THREE.Vector3(), _n = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _m = new THREE.Matrix4();

export class HairSystem {
  /**
   * locks: [{ bone: Object3D, anchor: Vector3 (bone local), dirs: [Vector3 bone-local unit per segment],
   *           length, segs, width, palette: [root, mid, tip] Colors, stiff, drag, outward: Vector3 bone-local }]
   */
  constructor(locks, { name = 'hair', droplets = null, wet = 0.6 } = {}) {
    this.locks = locks;
    this.dropletSys = droplets;
    this.colliders = []; // {a: Vector3, b: Vector3, r}
    this.grabs = []; // {lock, index, pos: Vector3, strength}
    this.forces = []; // {pos, vel, radius}
    this.wind = new THREE.Vector3();
    this.gravity = 9.8;
    this.viewPos = new THREE.Vector3(0, 2, 10); // camera position (tail locks face it)
    this.budget = 2;
    const r = rng(77);
    let nPts = 0;
    for (const L of locks) {
      L.seg = L.length / L.segs;
      L.p = [];
      L.pp = [];
      L.vel = [];
      for (let i = 0; i <= L.segs; i++) {
        L.p.push(new THREE.Vector3());
        L.pp.push(new THREE.Vector3());
        L.vel.push(new THREE.Vector3());
      }
      L.water = []; // droplet slots
      const nd = L.drops ?? 3;
      for (let k = 0; k < nd; k++) L.water.push({ i: 1 + Math.floor(r() * L.segs), off: r(), w: L.wetStart ?? 0.0 });
      L.seed = r();
      nPts += L.segs + 1;
    }
    this.sub = 2; // smoothing subdivisions between particles
    this._buildMesh(name);
    this.initialized = false;
  }

  _buildMesh(name) {
    let verts = 0, tris = 0;
    for (const L of this.locks) {
      const n = L.segs * this.sub + 1;
      verts += n * 2;
      tris += (n - 1) * 2;
    }
    const pos = new Float32Array(verts * 3);
    const nrm = new Float32Array(verts * 3);
    const tan = new Float32Array(verts * 3);
    const uv = new Float32Array(verts * 2);
    const col0 = new Float32Array(verts * 3);
    const col1 = new Float32Array(verts * 3);
    const seed = new Float32Array(verts);
    const idx = new Uint32Array(tris * 3);
    let vo = 0, io = 0;
    for (const L of this.locks) {
      const n = L.segs * this.sub + 1;
      L.vstart = vo;
      for (let i = 0; i < n; i++) {
        for (let s = 0; s < 2; s++) {
          const vi = vo + i * 2 + s;
          uv[vi * 2] = s;
          uv[vi * 2 + 1] = i / (n - 1);
          col0.set([L.palette[0].r, L.palette[0].g, L.palette[0].b], vi * 3);
          col1.set([L.palette[1].r, L.palette[1].g, L.palette[1].b], vi * 3);
          seed[vi] = L.seed;
        }
        if (i < n - 1) {
          const a = vo + i * 2;
          idx[io++] = a;
          idx[io++] = a + 1;
          idx[io++] = a + 2;
          idx[io++] = a + 1;
          idx[io++] = a + 3;
          idx[io++] = a + 2;
        }
      }
      vo += n * 2;
    }
    const g = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.nrmAttr = new THREE.BufferAttribute(nrm, 3).setUsage(THREE.DynamicDrawUsage);
    this.tanAttr = new THREE.BufferAttribute(tan, 3).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.posAttr);
    g.setAttribute('normal', this.nrmAttr);
    g.setAttribute('tangentDir', this.tanAttr);
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setAttribute('colRoot', new THREE.BufferAttribute(col0, 3));
    g.setAttribute('colTip', new THREE.BufferAttribute(col1, 3));
    g.setAttribute('seed', new THREE.BufferAttribute(seed, 1));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e5);
    this.material = makeHairMaterial();
    this.mesh = new THREE.Mesh(g, this.material);
    this.mesh.name = name;
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = true;
    this.mesh.customDepthMaterial = makeHairDepthMaterial(THREE.RGBADepthPacking);
  }

  // world position of lock root & segment rest directions
  _anchor(L, out) {
    return out.copy(L.anchor).applyMatrix4(L.bone.matrixWorld);
  }

  reset() {
    for (const L of this.locks) {
      L.bone.getWorldQuaternion(_q);
      this._anchor(L, L.p[0]);
      for (let i = 1; i <= L.segs; i++) {
        _v.copy(L.dirs[i - 1]).applyQuaternion(_q);
        L.p[i].copy(L.p[i - 1]).addScaledVector(_v, L.seg);
      }
      for (let i = 0; i <= L.segs; i++) {
        L.pp[i].copy(L.p[i]);
        L.vel[i].set(0, 0, 0);
      }
    }
    this.initialized = true;
  }

  // Add water to the hair (e.g. passing through cloud, splash).
  wet(amount, filter) {
    for (const L of this.locks) {
      if (filter && !filter(L)) continue;
      for (const s of L.water) s.w = Math.min(1, s.w + amount * (0.6 + 0.8 * Math.random()));
    }
  }

  totalWater() {
    let w = 0;
    for (const L of this.locks) for (const s of L.water) w += s.w;
    return w;
  }

  update(dt) {
    if (!this.initialized) this.reset();
    if (dt <= 0) {
      this._writeMesh();
      return;
    }
    const steps = Math.min(4, Math.max(1, Math.ceil(dt / (1 / 90))));
    const h = dt / steps;
    for (let s = 0; s < steps; s++) this._step(h, (s + 1) / steps);
    // touch forces live only briefly
    for (const f of this.forces) f.ttl = (f.ttl ?? 0) - dt;
    this.forces = this.forces.filter((f) => f.ttl > 0);
    this._writeMesh();
  }

  _step(h, frac) {
    const g = this.gravity;
    let budget = this.budget; // droplets that may break free in this sub-step
    for (const L of this.locks) {
      L.bone.getWorldQuaternion(_q);
      // root follows the bone (interpolated within the frame for smoothness)
      const root = this._anchor(L, _w);
      L.pp[0].copy(L.p[0]);
      L.p[0].copy(root);
      const drag = L.drag;
      for (let i = 1; i <= L.segs; i++) {
        const p = L.p[i], pp = L.pp[i];
        // velocity from verlet
        _v.subVectors(p, pp);
        const vx = _v.x / h, vy = _v.y / h, vz = _v.z / h;
        // acceleration: gravity + drag toward air velocity
        let ax = -drag * (vx - this.wind.x);
        let ay = -g - drag * (vy - this.wind.y);
        let az = -drag * (vz - this.wind.z);
        for (const f of this.forces) {
          const dx = p.x - f.pos.x, dy = p.y - f.pos.y, dz = p.z - f.pos.z;
          const d2 = dx * dx + dy * dy + dz * dz;
          if (d2 < f.radius * f.radius) {
            const k = (1 - Math.sqrt(d2) / f.radius) * f.strength;
            ax += (f.vel.x - vx) * k;
            ay += (f.vel.y - vy) * k;
            az += (f.vel.z - vz) * k;
          }
        }
        pp.copy(p);
        p.x += vx * h * 0.998 + ax * h * h;
        p.y += vy * h * 0.998 + ay * h * h;
        p.z += vz * h * 0.998 + az * h * h;
      }
      // shape memory: pull toward the styled direction in the bone frame
      for (let it = 0; it < 2; it++) {
        for (let i = 1; i <= L.segs; i++) {
          const stiff = L.stiff * Math.pow(1 - (i - 1) / L.segs, 1.6);
          _v.copy(L.dirs[i - 1]).applyQuaternion(_q);
          _t.copy(L.p[i - 1]).addScaledVector(_v, L.seg);
          L.p[i].lerp(_t, stiff);
          // length constraint
          _n.subVectors(L.p[i], L.p[i - 1]);
          const len = _n.length() || 1e-6;
          L.p[i].copy(L.p[i - 1]).addScaledVector(_n, L.seg / len);
        }
      }
      // grabs (child's fingers)
      for (const gb of this.grabs) {
        if (gb.lock !== L) continue;
        const i = gb.index;
        L.p[i].lerp(gb.pos, gb.strength);
        // re-propagate lengths outward from the grab
        for (let j = i + 1; j <= L.segs; j++) {
          _n.subVectors(L.p[j], L.p[j - 1]);
          const len = _n.length() || 1e-6;
          L.p[j].copy(L.p[j - 1]).addScaledVector(_n, L.seg / len);
        }
        for (let j = i - 1; j >= 1; j--) {
          _n.subVectors(L.p[j], L.p[j + 1]);
          const len = _n.length() || 1e-6;
          L.p[j].copy(L.p[j + 1]).addScaledVector(_n, L.seg / len);
        }
      }
      // collisions with body capsules
      for (let i = 1; i <= L.segs; i++) {
        const p = L.p[i];
        for (const c of this.colliders) {
          // closest point on segment
          _t.subVectors(c.b, c.a);
          const l2 = _t.lengthSq();
          let t = l2 > 0 ? _v.subVectors(p, c.a).dot(_t) / l2 : 0;
          t = Math.max(0, Math.min(1, t));
          _n.copy(c.a).addScaledVector(_t, t);
          _v.subVectors(p, _n);
          const d = _v.length();
          const rr = c.r + (L.thick ?? 0.012);
          if (d < rr && d > 1e-6) p.copy(_n).addScaledVector(_v, rr / d);
        }
      }
      if (this.groundFn) {
        for (let i = 1; i <= L.segs; i++) {
          const p = L.p[i];
          const gy = this.groundFn(p.x, p.z) + 0.012;
          if (p.y < gy) p.y = gy;
        }
      }
      // velocities & droplet release by inertia
      for (let i = 1; i <= L.segs; i++) {
        const v = L.vel[i];
        const nvx = (L.p[i].x - L.pp[i].x) / h, nvy = (L.p[i].y - L.pp[i].y) / h, nvz = (L.p[i].z - L.pp[i].z) / h;
        const ax = (nvx - v.x) / h, ay = (nvy - v.y) / h + g, az = (nvz - v.z) / h;
        v.set(nvx, nvy, nvz);
        const acc = Math.sqrt(ax * ax + ay * ay + az * az);
        L.acc = Math.max(L.acc || 0, acc);
        if (this.dropletSys && acc > 26 && budget > 0) {
          for (const sl of L.water) {
            if (sl.i !== i || sl.w <= 0.02 || budget <= 0) continue;
            // adhesion breaks: probability grows with acceleration
            const pr = Math.min(1, (acc - 26) / 90) * h * 60;
            if (Math.random() < pr) {
              const n = 1 + Math.floor(sl.w * 3 * Math.random());
              for (let k = 0; k < n; k++) {
                this.dropletSys.spawn(
                  L.p[i].x + (Math.random() - 0.5) * 0.02,
                  L.p[i].y + (Math.random() - 0.5) * 0.02,
                  L.p[i].z + (Math.random() - 0.5) * 0.02,
                  nvx * (0.85 + Math.random() * 0.3) + (Math.random() - 0.5) * 0.6,
                  nvy * (0.85 + Math.random() * 0.3) + (Math.random() - 0.5) * 0.6,
                  nvz * (0.85 + Math.random() * 0.3) + (Math.random() - 0.5) * 0.6,
                  0.7 + Math.random() * 0.8,
                  'mane'
                );
              }
              sl.w = Math.max(0, sl.w - 0.12 * n);
              budget -= n;
            }
          }
        }
      }
    }
  }

  // positions of clinging droplets for rendering glints
  forEachClinging(cb) {
    for (const L of this.locks)
      for (const sl of L.water) {
        if (sl.w < 0.05) continue;
        const i = sl.i;
        const a = L.p[i - 1], b = L.p[i];
        cb(a.x + (b.x - a.x) * sl.off, a.y + (b.y - a.y) * sl.off, a.z + (b.z - a.z) * sl.off, sl.w);
      }
  }

  _writeMesh() {
    const pos = this.posAttr.array, nrm = this.nrmAttr.array, tan = this.tanAttr.array;
    const P = new THREE.Vector3(), T = new THREE.Vector3(), W = new THREE.Vector3(), O = new THREE.Vector3(), N = new THREE.Vector3();
    for (const L of this.locks) {
      const n = L.segs * this.sub + 1;
      L.bone.getWorldQuaternion(_q);
      for (let k = 0; k < n; k++) {
        // outward reference (bone local -> world)
        O.copy(L.outward).applyQuaternion(_q);
        const f = k / this.sub;
        const i = Math.min(L.segs - 1, Math.floor(f));
        const t = f - i;
        // catmull-rom
        const p0 = L.p[Math.max(0, i - 1)], p1 = L.p[i], p2 = L.p[i + 1], p3 = L.p[Math.min(L.segs, i + 2)];
        const t2 = t * t, t3 = t2 * t;
        for (const c of ['x', 'y', 'z']) {
          P[c] = 0.5 * (2 * p1[c] + (-p0[c] + p2[c]) * t + (2 * p0[c] - 5 * p1[c] + 4 * p2[c] - p3[c]) * t2 + (-p0[c] + 3 * p1[c] - 3 * p2[c] + p3[c]) * t3);
          T[c] = 0.5 * ((-p0[c] + p2[c]) + 2 * (2 * p0[c] - 5 * p1[c] + 4 * p2[c] - p3[c]) * t + 3 * (-p0[c] + 3 * p1[c] - 3 * p2[c] + p3[c]) * t2);
        }
        T.normalize();
        if (L.billboard) {
          // full, round tail: each lock turns its broad side to the viewer
          N.subVectors(this.viewPos, P).normalize();
          O.lerp(N, 0.85);
        }
        W.crossVectors(T, O);
        if (W.lengthSq() < 1e-6) W.set(1, 0, 0);
        W.normalize();
        N.crossVectors(W, T).normalize();
        const v = k / (n - 1);
        // lock spreads a little toward the tip, tapers at the very end
        const wd = L.width * (0.75 + 0.5 * Math.sin(Math.min(1, v * 1.1) * Math.PI * 0.8)) * (v > 0.85 ? 1 - (v - 0.85) * 2.2 : 1);
        const vi = L.vstart + k * 2;
        for (let s = 0; s < 2; s++) {
          const o = (s - 0.5) * wd;
          pos[(vi + s) * 3] = P.x + W.x * o;
          pos[(vi + s) * 3 + 1] = P.y + W.y * o;
          pos[(vi + s) * 3 + 2] = P.z + W.z * o;
          nrm[(vi + s) * 3] = N.x;
          nrm[(vi + s) * 3 + 1] = N.y;
          nrm[(vi + s) * 3 + 2] = N.z;
          tan[(vi + s) * 3] = T.x;
          tan[(vi + s) * 3 + 1] = T.y;
          tan[(vi + s) * 3 + 2] = T.z;
        }
      }
    }
    this.posAttr.needsUpdate = true;
    this.nrmAttr.needsUpdate = true;
    this.tanAttr.needsUpdate = true;
  }
}

const HAIR_COMMON = /* glsl */ `
float strandSet(vec2 uv, float seed, float n){
  // wavy individual strands of varied width and length
  float wave = sin(uv.y * 8.0 + seed * 20.0) * 0.35 + sin(uv.y * 21.0 + seed * 7.0) * 0.12;
  float x = uv.x * n + wave * uv.y * 1.5 + seed * 31.0;
  float id = floor(x);
  float fx = fract(x);
  float h = hash11(id * 1.37 + seed * 97.0);
  float len = 0.62 + 0.38 * h;
  float w = 0.45 + 0.45 * hash11(id * 3.1 + seed * 5.0);
  float s = smoothstep(0.5 - w * 0.5, 0.5 - w * 0.5 + 0.18, fx) * smoothstep(0.5 + w * 0.5, 0.5 + w * 0.5 - 0.18, fx);
  float tip = smoothstep(len, len - 0.18, uv.y);
  return s * tip;
}
float strandAlpha(vec2 uv, float seed){
  float a = max(strandSet(uv, seed, 13.0), strandSet(uv + vec2(0.37, 0.0), seed + 0.53, 21.0) * 0.92);
  // dense near the root, airy toward the tips
  a = max(a, smoothstep(0.22, 0.0, uv.y) * 0.9);
  float edge = smoothstep(0.0, 0.1, uv.x) * smoothstep(1.0, 0.9, uv.x);
  return clamp(a * mix(0.5, 1.0, edge) * 1.25, 0.0, 1.0);
}
`;

function makeHairMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uSunDir: shared.uSunDir,
      uSunColor: shared.uSunColor,
      uAmb: shared.uAmbient,
      uWet: { value: 0.5 },
      uTime: shared.uTime,
      uLayerTint: { value: new THREE.Vector4(0, 0, 0, 0) },
      fogColor: { value: new THREE.Color() },
      fogDensity: { value: 0 },
      fogNear: { value: 1 },
      fogFar: { value: 1000 },
    },
    vertexShader: /* glsl */ `
      attribute vec3 tangentDir;
      attribute vec3 colRoot;
      attribute vec3 colTip;
      attribute float seed;
      varying vec2 vUv;
      varying vec3 vN;
      varying vec3 vT;
      varying vec3 vWorld;
      varying vec3 vCol0;
      varying vec3 vCol1;
      varying float vSeed;
      varying float vFogDepth;
      void main(){
        vUv = uv;
        vN = normal;
        vT = tangentDir;
        vWorld = position;
        vCol0 = colRoot;
        vCol1 = colTip;
        vSeed = seed;
        vec4 mv = viewMatrix * vec4(position, 1.0);
        vFogDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uSunDir;
      uniform vec3 uSunColor;
      uniform vec3 uAmb;
      uniform float uWet;
      uniform vec4 uLayerTint;
      uniform vec3 fogColor;
      uniform float fogDensity;
      varying vec2 vUv;
      varying vec3 vN;
      varying vec3 vT;
      varying vec3 vWorld;
      varying vec3 vCol0;
      varying vec3 vCol1;
      varying float vSeed;
      varying float vFogDepth;
      ${GLSL_NOISE}
      ${HAIR_COMMON}
      void main(){
        float a = strandAlpha(vUv, vSeed);
        if (a < 0.4) discard;
        vec3 T = normalize(vT);
        vec3 N = normalize(vN);
        vec3 V = normalize(cameraPosition - vWorld);
        if (dot(N, V) < 0.0) N = -N;
        vec3 L = uSunDir;
        // color along the lock + per strand variation
        float sv = hash11(floor(vUv.x * 13.0 + vSeed * 31.0) + vSeed * 13.0);
        vec3 base = mix(vCol0, vCol1, smoothstep(0.0, 0.95, vUv.y));
        base *= 0.86 + 0.28 * sv;
        base = mix(base, base * vec3(0.92, 0.9, 0.9), uWet * 0.3);
        // Kajiya-Kay style lighting
        float TL = dot(T, L);
        float sinTL = sqrt(max(0.0, 1.0 - TL * TL));
        float diff = mix(0.35, 1.0, sinTL) * (0.55 + 0.45 * max(dot(N, L), 0.0));
        vec3 H = normalize(L + V);
        float TH = dot(T, H);
        float spec1 = pow(sqrt(max(0.0, 1.0 - TH * TH)), 90.0 + uWet * 120.0);
        float TH2 = dot(T, normalize(H + N * 0.25));
        float spec2 = pow(sqrt(max(0.0, 1.0 - TH2 * TH2)), 24.0);
        float back = pow(max(dot(-V, L), 0.0), 3.0);
        vec3 col = base * (uAmb * 0.42 + uSunColor * diff * 0.3);
        col += uSunColor * (spec1 * (0.08 + uWet * 0.16) + spec2 * base * 0.06);
        col += uSunColor * base * back * 0.32 * (0.6 + 0.4 * (1.0 - abs(dot(N, V))));
        // colored light layers (rainbow summit)
        col += uLayerTint.rgb * uLayerTint.a * base;
        float fogF = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
        col = mix(col, fogColor, fogF);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    side: THREE.DoubleSide,
    alphaToCoverage: true,
    fog: true,
  });
}

function makeHairDepthMaterial() {
  const m = new THREE.ShaderMaterial({
    vertexShader: /* glsl */ `
      attribute float seed;
      varying vec2 vUv; varying float vSeed;
      void main(){ vUv = uv; vSeed = seed; gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      #include <packing>
      varying vec2 vUv; varying float vSeed;
      ${GLSL_NOISE}
      ${HAIR_COMMON}
      void main(){ if (strandAlpha(vUv, vSeed) < 0.5) discard; gl_FragColor = packDepthToRGBA(gl_FragCoord.z); }`,
    side: THREE.DoubleSide,
  });
  return m;
}
