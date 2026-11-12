// The rainbow road: a transparent sheet of droplets and dispersed light that holds the
// unicorn's weight. Only the support is magic; the rest behaves like an elastic
// membrane (wave equation with a restoring force): hoof loads press it down, ripples
// travel outward, and it springs back. Its brightness depends on how much water it
// holds and on the viewing angle to the antisolar point.
import * as THREE from '../../lib/three.module.js';
import { shared, GLSL_SPECTRUM, GLSL_NOISE, LAYER_MAIN, LAYER_REFLECT } from '../core/env.js';
import { clamp, smoothstep, lerp } from '../core/math.js';

const MAXC = 10;

export class RainbowRoad {
  constructor(track, { sparkles = null } = {}) {
    this.track = track;
    this.sparkles = sparkles;
    this.ds = 0.25;
    this.N = 400; // rows (100 m window)
    this.M = 13; // lateral samples
    this.W = 2.4;
    this.dl = this.W / (this.M - 1);
    const NM = this.N * this.M;
    this.u = new Float32Array(NM);
    this.v = new Float32Array(NM);
    this.F = new Float32Array(NM);
    this.rho = new Float32Array(this.N);
    this.k0 = 0;
    this.active = false;
    this.sBack = 0;
    this.sFront = 0;
    this.birth = 1;
    this.birthS = 0;
    this.birthLat = 0;
    this.birthT = 0;
    this.reserve = 0;
    this.stalled = false;
    this.humidityBoost = 0;
    this.contacts = [];
    this.loads = {};
    this.fade = 1; // global (for the end)
    this.absorbed = 0;
    this.acceptReserve = false; // droplets only rebuild the road ahead when the unicorn waits for them
    this.reserveSince = 0;
    this.onAbsorb = null;
    this.onContact = null;
    this._acc = 0;
    this.time = 0;
    this._buildMesh();
  }

  _buildMesh() {
    const N = this.N, M = this.M;
    const pos = new Float32Array(N * M * 3);
    const nrm = new Float32Array(N * M * 3);
    const info = new Float32Array(N * M * 4); // s, lat(-1..1), rho, disp
    const idx = [];
    for (let i = 0; i < N - 1; i++)
      for (let j = 0; j < M - 1; j++) {
        const a = i * M + j, b = a + 1, c = a + M, d = c + 1;
        idx.push(a, c, b, b, c, d);
      }
    const g = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.nrmAttr = new THREE.BufferAttribute(nrm, 3).setUsage(THREE.DynamicDrawUsage);
    this.infoAttr = new THREE.BufferAttribute(info, 4).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.posAttr);
    g.setAttribute('normal', this.nrmAttr);
    g.setAttribute('aInfo', this.infoAttr);
    g.setIndex(idx);
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e5);
    const contacts = [];
    for (let i = 0; i < MAXC; i++) contacts.push(new THREE.Vector4(0, 0, 99, 0));
    const loads = [];
    for (let i = 0; i < 4; i++) loads.push(new THREE.Vector4(0, 0, 0, 0));
    this.uContacts = contacts;
    this.uLoads = loads;
    this.uniforms = {
      uSBack: { value: 0 },
      uSFront: { value: 0 },
      uBirth: { value: 1 },
      uBirthS: { value: 0 },
      uBirthLat: { value: 0 },
      uContacts: { value: contacts },
      uLoads: { value: loads },
      uTime: shared.uTime,
      uSunDir: shared.uSunDir,
      uSunColor: shared.uSunColor,
      uFade: { value: 1 },
      uW: { value: this.W },
    };
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: /* glsl */ `
        attribute vec4 aInfo;
        varying vec4 vInfo;
        varying vec3 vW;
        varying vec3 vN;
        void main(){
          vInfo = aInfo;
          vW = position;
          vN = normal;
          gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: /* glsl */ `
        uniform float uSBack, uSFront, uBirth, uBirthS, uBirthLat, uTime, uFade, uW;
        uniform vec4 uContacts[${MAXC}];
        uniform vec4 uLoads[4];
        uniform vec3 uSunDir, uSunColor;
        varying vec4 vInfo;
        varying vec3 vW;
        varying vec3 vN;
        ${GLSL_SPECTRUM}
        ${GLSL_NOISE}
        void main(){
          float s = vInfo.x;
          float lat = vInfo.y;       // -1 .. 1 across the road (outer edge = +1)
          float rho = vInfo.z;       // water held by the road
          float disp = vInfo.w;
          // extent: dissolving tail, growing front, and the birth from the first contact
          float tail = smoothstep(uSBack, uSBack + 4.0, s);
          float n0 = vnoise2(vec2(s * 1.7, lat * 3.0 + uTime * 0.6));
          float front = smoothstep(uSFront + 0.2, uSFront - 1.8 - n0 * 1.2, s);
          float bl = abs(lat * uW * 0.5 - uBirthLat);
          float birthMask = smoothstep(uBirth * uW * 0.62 + 0.02, uBirth * uW * 0.62 - 0.12, bl)
                          * smoothstep(0.35 + uBirth * 9.0, 0.1 + uBirth * 8.0, abs(s - uBirthS));
          float extent = tail * front * mix(birthMask, 1.0, step(0.999, uBirth));
          float edge = smoothstep(1.0, 0.72, abs(lat));
          if (extent * edge < 0.002) discard;
          vec3 V = normalize(cameraPosition - vW);
          vec3 N = normalize(vN);
          if (dot(N, V) < 0.0) N = -N;
          // dispersion across the width: red on the outer side, violet inside
          float t = clamp(lat * 0.5 + 0.5, 0.0, 1.0);
          t = mix(t, 0.5, 0.06);
          vec3 band = spectral(t) * 1.15;
          // viewing angle to the antisolar point: real rainbow geometry brightens the bow
          vec3 view = -V;
          float ang = degrees(acos(clamp(dot(view, -uSunDir), -1.0, 1.0)));
          float bow = exp(-pow((ang - 41.0) / 11.0, 2.0));
          float grazing = pow(1.0 - abs(dot(N, V)), 2.0);
          // droplets: the sheet is made of countless twinkling specks
          vec2 cell = vec2(s * 9.0, lat * 22.0);
          vec2 ci = floor(cell);
          float h = hash12(ci);
          vec2 cf = fract(cell) - 0.5 - (vec2(hash12(ci + 3.7), hash12(ci + 9.1)) - 0.5) * 0.6;
          float tw = 0.5 + 0.5 * sin(uTime * (3.0 + h * 9.0) + h * 40.0);
          float speck = exp(-dot(cf, cf) * 70.0) * step(0.45, h) * tw;
          vec2 cell2 = vec2(s * 23.0 + 0.5, lat * 55.0);
          vec2 ci2 = floor(cell2);
          float h2 = hash12(ci2 + 17.0);
          vec2 cf2 = fract(cell2) - 0.5;
          float speck2 = exp(-dot(cf2, cf2) * 90.0) * step(0.6, h2) * (0.5 + 0.5 * sin(uTime * (5.0 + h2 * 7.0) + h2 * 30.0));
          float body = 0.07 + 0.3 * bow + 0.32 * grazing;
          // thin road: breaks into separate droplets
          float solid = smoothstep(0.12, 0.65, rho);
          float drops = speck * 1.6 + speck2 * 1.1;
          float lace = mix(drops * 1.6 + smoothstep(0.62, 0.88, n0) * 0.25, 1.0, solid);
          // faint flowing veils inside the sheet
          float veil = 0.75 + 0.25 * sin(s * 2.1 - uTime * 1.3 + n0 * 4.0);
          vec3 col = band * body * lace * veil;
          col += mix(band, vec3(1.0), 0.45) * drops * (0.35 + 0.8 * bow + 0.5 * (1.0 - solid));
          // ripples / deflection read as moving highlights
          vec3 H = normalize(uSunDir + V);
          float sp = pow(max(dot(N, H), 0.0), 120.0) * 2.5;
          col += uSunColor * sp * 0.25 * solid;
          col += band * clamp(-disp * 9.0, 0.0, 1.2) * 0.8;
          // contact rings
          float glow = 0.0;
          for (int i = 0; i < ${MAXC}; i++) {
            vec4 c = uContacts[i];
            float age = c.z;
            if (age > 3.0) continue;
            vec2 d = vec2(s - c.x, lat * uW * 0.5 - c.y);
            float r = length(d);
            float ring = 0.12 + age * 2.6;
            glow += exp(-pow((r - ring) / (0.05 + age * 0.12), 2.0)) * exp(-age * 2.2) * c.w * 1.6;
            // the very first touch also leaves a lasting bright knot of light
            glow += exp(-r * r / 0.03) * c.w * step(1.2, c.w) * (1.0 - smoothstep(0.0, 2.5, age)) * 2.0;
            glow += exp(-r * r / 0.012) * exp(-age * 7.0) * c.w * 2.0;
          }
          // bright pools under planted hooves (only where it bears weight)
          for (int i = 0; i < 4; i++) {
            vec4 l = uLoads[i];
            vec2 d = vec2(s - l.x, lat * uW * 0.5 - l.y);
            float r2 = dot(d, d);
            glow += exp(-r2 / 0.02) * l.z * 2.2 + exp(-r2 / 0.18) * l.z * 0.5;
          }
          col += (vec3(1.0, 0.98, 0.94) * 0.6 + band * 0.9) * glow;
          // the growing front shimmers
          float frontGlow = exp(-pow((s - uSFront + 0.8) / 0.9, 2.0)) * (0.5 + 0.5 * n0);
          col += band * frontGlow * 1.2;
          // birth: light condenses and runs outward left and right from the touch
          float nb = 1.0 - uBirth;
          if (nb > 0.0) {
            float wave = exp(-pow((bl - uBirth * uW * 0.62) / 0.06, 2.0));
            float near0 = exp(-pow((s - uBirthS) / (0.5 + uBirth * 3.0), 2.0));
            col += (band * 1.6 + vec3(0.6)) * wave * near0 * (0.4 + nb) * 2.2;
            col *= 1.0 + nb * 1.5;
          }
          float a = extent * edge;
          float alpha = clamp((0.03 + 0.09 * solid * (0.4 + grazing) + glow * 0.12 + (1.0 - uBirth) * 0.12) * a, 0.0, 0.5);
          gl_FragColor = vec4(col * a * uFade, alpha * uFade);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.CustomBlending,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
    });
    this.mesh = new THREE.Mesh(g, this.material);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 4;
    this.mesh.visible = false;
    this.mesh.name = 'rainbowRoad';
    this.mesh.layers.set(LAYER_MAIN);
    this.mesh.layers.enable(LAYER_REFLECT);
  }

  // humidity of the air along the bow (cloud layer moist, above it dry)
  humidity(s) {
    const u = this.track.u(s);
    let h = 1.0;
    h *= 1 - smoothstep(0.33, 0.362, u) * (1 - smoothstep(0.66, 0.69, u));
    return Math.max(0.1, h + this.humidityBoost);
  }

  // start: the hoof touches the air at s, lateral lat
  begin(s, lat) {
    this.active = true;
    this.mesh.visible = true;
    this.k0 = Math.floor((s - 6) / this.ds);
    this.u.fill(0);
    this.v.fill(0);
    this.rho.fill(0);
    this.birth = 0;
    this.birthS = s;
    this.birthLat = lat;
    this.birthT = 0;
    this.sBack = s - 0.6;
    this.sFront = s + 0.6;
    for (let i = 0; i < this.N; i++) this.rho[i] = 1.0;
    this.contacts.length = 0;
    this.addContact(s, lat, 1.4);
  }

  end() {
    this.active = false;
    this.mesh.visible = false;
  }

  rowOf(s) {
    return (s / this.ds) - this.k0;
  }

  addContact(s, lat, strength) {
    this.contacts.unshift({ s, lat, age: 0, str: strength });
    if (this.contacts.length > MAXC) this.contacts.length = MAXC;
    if (this.onContact) this.onContact(s, lat, strength);
  }

  setLoad(i, s, lat, load) {
    this.loads[i] = { s, lat, load };
  }

  // displacement at (s, lat) metres
  disp(s, lat) {
    const r = this.rowOf(s);
    const c = (lat + this.W / 2) / this.dl;
    if (r < 0 || r >= this.N - 1 || c < 0 || c >= this.M - 1) return 0;
    const i = Math.floor(r), j = Math.floor(c);
    const fr = r - i, fc = c - j;
    const M = this.M, u = this.u;
    const a = u[i * M + j], b = u[i * M + j + 1], cc = u[(i + 1) * M + j], d = u[(i + 1) * M + j + 1];
    return (a * (1 - fc) + b * fc) * (1 - fr) + (cc * (1 - fc) + d * fc) * fr;
  }

  rhoAt(s) {
    const r = Math.round(this.rowOf(s));
    if (r < 0 || r >= this.N) return 0;
    return this.rho[r];
  }

  exists(s, lat = 0) {
    if (!this.active) return false;
    if (s < this.sBack + 1 || s > this.sFront - 0.3) return false;
    if (this.birth < 1) {
      if (Math.abs(lat - this.birthLat) > this.birth * this.W * 0.6 + 0.1) return false;
      if (Math.abs(s - this.birthS) > 0.35 + this.birth * 8) return false;
    }
    return Math.abs(lat) < this.W / 2;
  }

  surfaceY(s, lat) {
    const h = this.track.bowHeight(s);
    if (h === null) return null;
    return h + this.disp(s, lat);
  }

  // droplets falling through the sheet are captured: the road holds more water
  intercept(x, y, z, oy, sHint, fresh = true) {
    if (!this.active) return false;
    const p = this.track.project(x, z, sHint);
    if (!this.exists(p.s, p.lat)) return false;
    const ys = this.surfaceY(p.s, p.lat);
    if (ys === null) return false;
    if (oy >= ys && y < ys + 0.02) {
      const r = Math.round(this.rowOf(p.s));
      // water spreads forward along the sheet (it is pulled toward the front)
      for (let k = -2; k < 60; k++) {
        const rr = r + k;
        if (rr < 0 || rr >= this.N) continue;
        const w = k < 0 ? 0.5 : Math.exp(-k / 30);
        this.rho[rr] = Math.min(1.2, this.rho[rr] + 0.018 * w);
      }
      if (this.acceptReserve && fresh) this.reserve += 1.1;
      this.absorbed++;
      const t = clamp(p.lat / this.W + 0.5, 0, 1);
      if (this.sparkles) {
        this.sparkles.burst(x, ys + 0.02, z, 3, 0.6, () => t, 0.7, 0.02, 1.4);
      }
      // a small dimple where it lands
      const c = Math.round((p.lat + this.W / 2) / this.dl);
      if (r > 0 && r < this.N - 1 && c > 0 && c < this.M - 1) this.v[r * this.M + c] -= 0.25;
      if (this.onAbsorb) this.onAbsorb(x, ys, z, t);
      return true;
    }
    return false;
  }

  _shift(n) {
    if (n <= 0) return;
    const M = this.M, N = this.N;
    if (n >= N) {
      this.u.fill(0);
      this.v.fill(0);
      this.rho.fill(0);
    } else {
      this.u.copyWithin(0, n * M);
      this.v.copyWithin(0, n * M);
      this.u.fill(0, (N - n) * M);
      this.v.fill(0, (N - n) * M);
      this.rho.copyWithin(0, n);
      this.rho.fill(0, N - n);
    }
    this.k0 += n;
  }

  // sHorse: unicorn progress; vHorse: speed
  update(dt, sHorse, vHorse) {
    if (!this.active) return;
    this.time += dt;
    // birth spreading
    if (this.birth < 1) {
      this.birthT += dt;
      this.birth = Math.min(1, this.birthT / 0.9);
    }
    // keep window around the unicorn
    const want = Math.floor((Math.min(this.sBack, sHorse - 20) - 4) / this.ds);
    if (want > this.k0) this._shift(want - this.k0);
    // front growth: the faster it runs, the further the light reaches ahead
    const hum = this.humidity(this.sFront);
    let rhoNew = hum;
    if (hum < 0.75 && this.reserve > 0) rhoNew = Math.min(1, hum + 0.9 * Math.min(1, this.reserve / 30));
    const leadTarget = this.birth < 1 ? 0.6 + this.birth * 8 : 3 + 34 * clamp((rhoNew - 0.2) / 0.8, 0, 1);
    const target = this.birth < 1 ? this.birthS + leadTarget : sHorse + leadTarget;
    this.stalled = rhoNew < 0.32 && target - this.sFront < 0.5;
    if (target > this.sFront) {
      const grow = Math.min(target - this.sFront, (vHorse + 7) * dt);
      if (rhoNew >= 0.32 || this.birth < 1) {
        const r0 = Math.max(0, Math.floor(this.rowOf(this.sFront)));
        this.sFront += grow;
        const r1 = Math.min(this.N - 1, Math.floor(this.rowOf(this.sFront)));
        for (let r = r0; r <= r1; r++) this.rho[r] = Math.max(this.rho[r], rhoNew);
        if (hum < 0.75) this.reserve = Math.max(0, this.reserve - grow * (0.9 - hum));
        // condensing specks rushing into the front
        if (this.sparkles && Math.random() < dt * 60) this._frontSpecks();
      } else {
        // very dry: the edge grows only a hand's width, faint
        const r0 = Math.max(0, Math.floor(this.rowOf(this.sFront)));
        this.sFront += grow * 0.05;
        if (r0 < this.N) this.rho[r0] = Math.max(this.rho[r0], rhoNew);
      }
    }
    // tail dissolves behind the unicorn
    if (this.birth >= 1) {
      const backTarget = sHorse - 16;
      if (backTarget > this.sBack) {
        const old = this.sBack;
        this.sBack = Math.min(backTarget, this.sBack + (vHorse + 2) * dt);
        if (this.sparkles) this._tailSpecks(old, this.sBack, dt);
      }
    }
    // evaporation & floor
    for (let r = 0; r < this.N; r++) {
      const s = (this.k0 + r) * this.ds;
      if (s > this.sFront) {
        this.rho[r] = 0;
        continue;
      }
      const h = this.humidity(s);
      this.rho[r] = Math.max(0.1, this.rho[r] - dt * 0.004 * (1.2 - h));
    }
    this.reserve = Math.max(0, this.reserve - dt * 0.2);
    // membrane physics
    this._acc += dt;
    let steps = 0;
    while (this._acc > 1 / 120 && steps < 6) {
      this._acc -= 1 / 120;
      steps++;
      this._step(1 / 120);
    }
    // contacts age
    for (const c of this.contacts) c.age += dt;
    this._writeMesh();
  }

  _step(h) {
    const N = this.N, M = this.M, u = this.u, v = this.v, F = this.F;
    F.fill(0);
    // hoof loads (bilinear splat)
    for (const k in this.loads) {
      const L = this.loads[k];
      if (!L || L.load <= 0) continue;
      const r = this.rowOf(L.s), c = (L.lat + this.W / 2) / this.dl;
      const i = Math.floor(r), j = Math.floor(c);
      if (i < 1 || i >= N - 2 || j < 0 || j >= M - 1) continue;
      const fr = r - i, fc = c - j;
      const rhoL = this.rho[i];
      const G = 52 * L.load / (0.6 + 0.4 * Math.min(1, rhoL));
      F[i * M + j] -= G * (1 - fr) * (1 - fc);
      F[i * M + j + 1] -= G * (1 - fr) * fc;
      F[(i + 1) * M + j] -= G * fr * (1 - fc);
      F[(i + 1) * M + j + 1] -= G * fr * fc;
    }
    const ids2 = 1 / (this.ds * this.ds), idl2 = 1 / (this.dl * this.dl);
    for (let i = 1; i < N - 1; i++) {
      const rho = this.rho[i];
      if (rho <= 0) continue;
      const c2 = 22 * (0.6 + 0.4 * Math.min(1, rho));
      const k = 140 * (0.55 + 0.45 * Math.min(1, rho));
      const g = 5.5;
      const row = i * M;
      for (let j = 0; j < M; j++) {
        const q = row + j;
        const ul = j > 0 ? u[q - 1] : u[q + 1];
        const ur = j < M - 1 ? u[q + 1] : u[q - 1];
        const lap = (u[q - M] + u[q + M] - 2 * u[q]) * ids2 + (ul + ur - 2 * u[q]) * idl2;
        const a = c2 * lap - k * u[q] - g * v[q] + F[q];
        v[q] += a * h;
      }
    }
    for (let q = M; q < (N - 1) * M; q++) u[q] += v[q] * h;
  }

  _frontSpecks() {
    const s = this.sFront + 1.5 + Math.random() * 3;
    const lat = (Math.random() - 0.5) * this.W;
    const P = new THREE.Vector3(), L = new THREE.Vector3();
    const tr = this.track;
    tr.pos(this.sFront, P);
    tr.lateral(this.sFront, L);
    const Q = new THREE.Vector3();
    tr.pos(s, Q);
    Q.addScaledVector(L, lat);
    Q.y += (Math.random() - 0.3) * 1.2;
    const tgt = P.clone().addScaledVector(L, lat);
    const v = tgt.sub(Q).multiplyScalar(1.6);
    this.sparkles.spawn(Q.x, Q.y, Q.z, v.x, v.y, v.z, clamp(lat / this.W + 0.5, 0, 1), 0.6, 0.02, 0.9);
  }

  _tailSpecks(s0, s1, dt) {
    const tr = this.track;
    const n = Math.min(12, Math.ceil((s1 - s0) * 10 + dt * 30));
    const P = new THREE.Vector3(), L = new THREE.Vector3();
    for (let k = 0; k < n; k++) {
      const s = s0 + Math.random() * Math.max(0.3, s1 - s0 + 1.5);
      const lat = (Math.random() - 0.5) * this.W * 0.9;
      tr.pos(s, P);
      tr.lateral(s, L);
      P.addScaledVector(L, lat);
      this.sparkles.spawn(P.x, P.y + 0.02, P.z, (Math.random() - 0.5) * 0.3, -0.2 - Math.random() * 0.5, (Math.random() - 0.5) * 0.3, clamp(lat / this.W + 0.5, 0, 1), 1.6 + Math.random(), 0.024, 0.9, 0.4);
    }
  }

  _writeMesh() {
    const N = this.N, M = this.M, tr = this.track;
    const pos = this.posAttr.array, nrm = this.nrmAttr.array, info = this.infoAttr.array;
    const C = new THREE.Vector3(), L = new THREE.Vector3();
    for (let i = 0; i < N; i++) {
      const s = (this.k0 + i) * this.ds;
      tr.pos(s, C);
      const bh = tr.bowHeight(s);
      // before the first touch the sheet continues level (it is hidden there anyway)
      if (bh === null && s < tr.sLand) C.y = tr.bowHeight(tr.sA + 0.01);
      tr.lateral(s, L);
      for (let j = 0; j < M; j++) {
        const q = i * M + j;
        const lat = (j / (M - 1) - 0.5) * this.W;
        pos[q * 3] = C.x + L.x * lat;
        pos[q * 3 + 1] = C.y + this.u[q] + 0.0;
        pos[q * 3 + 2] = C.z + L.z * lat;
        info[q * 4] = s;
        info[q * 4 + 1] = (j / (M - 1)) * 2 - 1;
        info[q * 4 + 2] = this.rho[i];
        info[q * 4 + 3] = this.u[q];
      }
    }
    // normals from neighbours
    const T = new THREE.Vector3(), Lx = new THREE.Vector3(), n = new THREE.Vector3();
    for (let i = 0; i < N; i++)
      for (let j = 0; j < M; j++) {
        const q = i * M + j;
        const qa = Math.max(0, i - 1) * M + j, qb = Math.min(N - 1, i + 1) * M + j;
        const qc = i * M + Math.max(0, j - 1), qd = i * M + Math.min(M - 1, j + 1);
        T.set(pos[qb * 3] - pos[qa * 3], pos[qb * 3 + 1] - pos[qa * 3 + 1], pos[qb * 3 + 2] - pos[qa * 3 + 2]);
        Lx.set(pos[qd * 3] - pos[qc * 3], pos[qd * 3 + 1] - pos[qc * 3 + 1], pos[qd * 3 + 2] - pos[qc * 3 + 2]);
        n.crossVectors(T, Lx).normalize();
        nrm[q * 3] = n.x;
        nrm[q * 3 + 1] = n.y;
        nrm[q * 3 + 2] = n.z;
      }
    this.posAttr.needsUpdate = true;
    this.nrmAttr.needsUpdate = true;
    this.infoAttr.needsUpdate = true;
    // uniforms
    const U = this.uniforms;
    U.uSBack.value = this.sBack;
    U.uSFront.value = this.sFront;
    U.uBirth.value = this.birth;
    U.uBirthS.value = this.birthS;
    U.uBirthLat.value = this.birthLat;
    U.uFade.value = this.fade;
    for (let i = 0; i < MAXC; i++) {
      const c = this.contacts[i];
      if (c) this.uContacts[i].set(c.s, c.lat, c.age, c.str);
      else this.uContacts[i].set(0, 0, 99, 0);
    }
    let li = 0;
    for (const k in this.loads) {
      if (li >= 4) break;
      const L2 = this.loads[k];
      this.uLoads[li++].set(L2.s, L2.lat, L2.load, 0);
    }
    for (; li < 4; li++) this.uLoads[li].set(0, 0, 0, 0);
  }
}
