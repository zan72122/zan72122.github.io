import * as THREE from 'three';
import { GLSL_NOISE, GLSL_SPECTRAL, clamp, damp, lerp, smoothstep, wrapAngle, mulberry32, spectral } from './util.js';
import { resolveObstacles, circles, boxes, insideBox, PARK_R } from './layout.js';

// Everything in the world that invites a small player to go somewhere:
// a rolling ball, sparrows, a flock high up, drifting soap bubbles, a giant
// tethered balloon, and slow far-away giants (a hot-air balloon, an airship).

const _v = new THREE.Vector3();
const _w = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _s = new THREE.Vector3();
const _e = new THREE.Euler();
const _c = new THREE.Color();
const UP = new THREE.Vector3(0, 1, 0);

// ---------------------------------------------------------------------------
// soap film material (bubbles and the catching bubble)
export function soapMaterial(uTime, strength = 1) {
  const mat = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { uStrength: { value: strength } }]),
    vertexShader: /* glsl */ `
      varying vec3 vW;
      varying vec3 vN;
      varying float vSeed;
      #ifdef USE_INSTANCING
        attribute float aSeed;
      #endif
      #include <fog_pars_vertex>
      void main() {
        vec4 w = vec4(position, 1.0);
        vec3 n = normal;
        #ifdef USE_INSTANCING
          w = instanceMatrix * w;
          n = mat3(instanceMatrix) * n;
          vSeed = aSeed;
        #else
          vSeed = 0.3;
        #endif
        w = modelMatrix * w;
        vW = w.xyz;
        vN = normalize(mat3(modelMatrix) * n);
        vec4 mvPosition = viewMatrix * w;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform float uStrength;
      varying vec3 vW;
      varying vec3 vN;
      varying float vSeed;
      #include <fog_pars_fragment>
      ${GLSL_NOISE}
      ${GLSL_SPECTRAL}
      void main() {
        vec3 V = normalize(cameraPosition - vW);
        vec3 N = normalize(vN);
        float facing = dot(N, V);
        if (facing < 0.0) N = -N;
        float ndv = abs(facing);
        // swirling film thickness, thinner on top (drains downward)
        vec3 ln = normalize(vN);
        float swirl = fbm3(vec2(atan(ln.z, ln.x) * 1.6 + uTime * 0.25 + vSeed * 9.0, ln.y * 2.5 - uTime * 0.12));
        float thick = mix(180.0, 820.0, clamp(0.5 - ln.y * 0.35 + (swirl - 0.5) * 0.9, 0.0, 1.0));
        vec3 film = thinFilm(thick, ndv);
        vec3 R = reflect(-V, N);
        vec3 sky = atmoSky(R, fogColor);
        float fres = 0.05 + 0.95 * pow(1.0 - ndv, 3.0);
        float sunS = pow(max(dot(R, ATMO_SUN), 0.0), 350.0) * 14.0;
        // mostly clear; colour lives in the reflection, strongest at the rim
        vec3 col = film * sky * (0.04 + 1.1 * fres) + film * sunS + vec3(sunS * 0.25);
        float a = (0.01 + 0.16 * fres) * uStrength;
        gl_FragColor = vec4(col * uStrength, a);
        #ifdef USE_FOG
          gl_FragColor *= 1.0 - atmoFogAmount(vW);
        #endif
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    transparent: true,
    premultipliedAlpha: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    fog: true,
  });
  mat.uniforms.uTime = uTime;
  return mat;
}

// ---------------------------------------------------------------------------
// The bubble that catches a falling child.
export class CatchBubble {
  constructor(scene, uTime) {
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(0.66, 40, 28), soapMaterial(uTime, 1));
    this.mesh.renderOrder = 7;
    this.mesh.visible = false;
    scene.add(this.mesh);
    this.s = 0;
    this.sv = 0;
    this.active = false;
    this.squashV = 0;
    this.squashA = 0;
    this.t = 0;
  }
  appear(pos) {
    this.active = true;
    this.mesh.visible = true;
    this.s = 0.05;
    this.sv = 6;
    this.mesh.position.set(pos.x, pos.y + 0.55, pos.z);
  }
  squash(k) { this.squashV -= 7 * k; }
  pop(particles) {
    if (!this.active) return;
    this.active = false;
    this.mesh.visible = false;
    const p = this.mesh.position;
    for (let i = 0; i < 26; i++) {
      const a = Math.random() * Math.PI * 2, b = Math.acos(Math.random() * 2 - 1);
      const dx = Math.sin(b) * Math.cos(a), dy = Math.cos(b), dz = Math.sin(b) * Math.sin(a);
      spectral(Math.random(), _c);
      particles.spawn(p.x + dx * 0.6, p.y + dy * 0.6, p.z + dz * 0.6, dx * 1.6, dy * 1.6 + 0.6, dz * 1.6, 0.6 + Math.random() * 0.4, 0.02, 3, _c.r * 0.5 + 0.5, _c.g * 0.5 + 0.5, _c.b * 0.5 + 0.5);
    }
    for (let i = 0; i < 6; i++) {
      spectral(Math.random(), _c);
      particles.mist(p.x, p.y, p.z, _c, 0.9);
    }
  }
  follow(pos, dt, on) {
    this.t += dt;
    if (!this.active) return;
    if (!on && this.active) {
      // lingering if the mode changed without landing
    }
    this.sv += ((1 - this.s) * 60 - this.sv * 7) * dt;
    this.s += this.sv * dt;
    this.squashV += (-this.squashA * 120 - this.squashV * 8) * dt;
    this.squashA += this.squashV * dt;
    const w = Math.sin(this.t * 5.3) * 0.03, w2 = Math.sin(this.t * 4.1 + 1) * 0.03;
    this.mesh.scale.set(this.s * (1 + w - this.squashA * 0.35), this.s * (1 - w + this.squashA), this.s * (1 + w2 - this.squashA * 0.35));
    this.mesh.position.set(pos.x, pos.y + 0.55 + this.squashA * 0.3, pos.z);
  }
}

// ---------------------------------------------------------------------------
class Ball {
  constructor(scene) {
    const r = 0.19;
    this.r = r;
    const g = new THREE.SphereGeometry(r, 32, 20);
    const col = new Float32Array(g.attributes.position.count * 3);
    const cols = [[0.85, 0.08, 0.05], [0.95, 0.95, 0.92], [0.05, 0.25, 0.75], [0.95, 0.95, 0.92], [0.98, 0.72, 0.02], [0.95, 0.95, 0.92]];
    const pos = g.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
      let c;
      if (Math.abs(y) > r * 0.9) c = [0.95, 0.95, 0.92];
      else {
        const a = (Math.atan2(z, x) / (Math.PI * 2) + 1) % 1;
        c = cols[Math.floor(a * 6) % 6];
      }
      const lin = new THREE.Color().setRGB(c[0], c[1], c[2], THREE.SRGBColorSpace);
      col.set([lin.r, lin.g, lin.b], i * 3);
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    this.mesh = new THREE.Mesh(g, new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.28, clearcoat: 0.6, clearcoatRoughness: 0.2 }));
    this.mesh.castShadow = true;
    scene.add(this.mesh);
    this.pos = new THREE.Vector3(-3.4, r, 4.4);
    this.vel = new THREE.Vector3(0, 0, 0);
    this.vy = 0;
    this.kickCool = 0;
    this.q = new THREE.Quaternion();
    this.bumps = [];
  }
  canKick() { return this.kickCool <= 0; }
  kick(fx, fz, sp) {
    this.vel.x = fx * sp + (Math.random() - 0.5) * 0.4;
    this.vel.z = fz * sp + (Math.random() - 0.5) * 0.4;
    this.vy = 1.4;
    this.kickCool = 0.5;
  }
  push(vx, vz) { this.vel.x += vx; this.vel.z += vz; }
  update(dt, audio) {
    this.kickCool -= dt;
    const sp = Math.hypot(this.vel.x, this.vel.z);
    if (sp > 0) {
      const dec = (this.pos.y > this.r + 0.01 ? 0.1 : 0.55) * dt;
      const k = Math.max(0, sp - dec) / sp;
      this.vel.x *= k; this.vel.z *= k;
    }
    const oldX = this.pos.x, oldZ = this.pos.z;
    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;
    // bounce vertically after a kick
    this.vy -= 9.8 * dt;
    this.pos.y += this.vy * dt;
    if (this.pos.y < this.r) {
      if (this.vy < -0.8) {
        audio && audio.ballBounce(this.pos, -this.vy);
        this.vy = -this.vy * 0.55;
      } else this.vy = 0;
      this.pos.y = this.r;
    }
    _v.copy(this.pos);
    resolveObstacles(_v, this.r, 0, 0.1);
    if (Math.abs(_v.x - this.pos.x) + Math.abs(_v.z - this.pos.z) > 1e-4) {
      // reflect off whatever pushed us
      const nx = _v.x - this.pos.x, nz = _v.z - this.pos.z;
      const nl = Math.hypot(nx, nz);
      const ux = nx / nl, uz = nz / nl;
      const dot = this.vel.x * ux + this.vel.z * uz;
      if (dot < 0) {
        this.vel.x -= 1.7 * dot * ux;
        this.vel.z -= 1.7 * dot * uz;
        if (-dot > 0.4) audio && audio.ballBounce(this.pos, -dot);
      }
      this.pos.x = _v.x; this.pos.z = _v.z;
    }
    // roll
    const dx = this.pos.x - oldX, dz = this.pos.z - oldZ;
    const d = Math.hypot(dx, dz);
    if (d > 1e-6) {
      _w.set(dz, 0, -dx).normalize();
      _q.setFromAxisAngle(_w, d / this.r);
      this.q.premultiply(_q);
    }
    this.mesh.position.copy(this.pos);
    this.mesh.quaternion.copy(this.q);
  }
}

// ---------------------------------------------------------------------------
function birdGeometry() {
  // body + two wings, with a per-vertex wing weight used to flap in the shader
  const pos = [], wing = [];
  const tri = (a, b, c, wa, wb, wc) => { pos.push(...a, ...b, ...c); wing.push(wa, wb, wc); };
  // body (a thin diamond)
  const nose = [0, 0, 0.5], tail = [0, 0.02, -0.55], top = [0, 0.1, 0], bot = [0, -0.08, 0.05], l = [-0.08, 0, 0], r = [0.08, 0, 0];
  tri(nose, l, top, 0, 0, 0); tri(nose, top, r, 0, 0, 0); tri(nose, bot, l, 0, 0, 0); tri(nose, r, bot, 0, 0, 0);
  tri(tail, top, l, 0, 0, 0); tri(tail, r, top, 0, 0, 0); tri(tail, l, bot, 0, 0, 0); tri(tail, bot, r, 0, 0, 0);
  // tail fan
  tri([0, 0.02, -0.45], [-0.16, 0.02, -0.72], [0.16, 0.02, -0.72], 0, 0, 0);
  // wings: inner and outer panels
  for (const s of [-1, 1]) {
    const root0 = [s * 0.06, 0.03, 0.2], root1 = [s * 0.06, 0.03, -0.12];
    const mid0 = [s * 0.55, 0.03, 0.16], mid1 = [s * 0.55, 0.03, -0.14];
    const tip = [s * 1.05, 0.03, -0.18];
    tri(root0, mid0, root1, 0, 0.5, 0); tri(root1, mid0, mid1, 0, 0.5, 0.5);
    tri(mid0, tip, mid1, 0.5, 1, 0.5);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aWing', new THREE.Float32BufferAttribute(wing, 1));
  g.computeVertexNormals();
  return g;
}

function birdMaterial(uTime, color) {
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.8, side: THREE.DoubleSide });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = uTime;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
uniform float uTime;
attribute float aWing;
attribute vec2 aFlap; // phase, amount
`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
float fl = sin(uTime * 13.0 + aFlap.x) * aFlap.y;
transformed.y += fl * aWing * abs(transformed.x) * 0.9 + aFlap.y * 0.04;
transformed.x *= 1.0 - abs(fl) * aWing * 0.15;
`);
  };
  return mat;
}

// ---------------------------------------------------------------------------
export class Critters {
  constructor(scene, world, particles, uTime) {
    this.scene = scene;
    this.world = world;
    this.particles = particles;
    this.uTime = uTime;
    this.rng = mulberry32(77);
    this.time = 0;
    this.ball = new Ball(scene);
    this.buildFlock();
    this.buildSparrows();
    this.buildBubbles();
    this.buildBalloon();
    this.buildFarGiants();
  }

  // --- flock high above --------------------------------------------------------
  buildFlock() {
    const n = 11;
    const g = birdGeometry();
    const flap = new Float32Array(n * 2);
    g.setAttribute('aFlap', new THREE.InstancedBufferAttribute(flap, 2));
    this.flockMesh = new THREE.InstancedMesh(g, birdMaterial(this.uTime, '#2a2826'), n);
    this.flockMesh.frustumCulled = false;
    this.flockMesh.castShadow = true;
    this.scene.add(this.flockMesh);
    this.flock = [];
    for (let i = 0; i < n; i++) {
      this.flock.push({
        a: (i / n) * 0.9, r: 34 + this.rng() * 12, h: 40 + this.rng() * 14,
        ph: this.rng() * 10, flapPh: this.rng() * 6, scared: 0, cx: -6, cz: -18,
        pos: new THREE.Vector3(), prev: new THREE.Vector3(),
      });
    }
    this.flockFlap = flap;
  }

  buildSparrows() {
    const n = 4;
    const g = birdGeometry();
    const flap = new Float32Array(n * 2);
    g.setAttribute('aFlap', new THREE.InstancedBufferAttribute(flap, 2));
    this.sparrowMesh = new THREE.InstancedMesh(g, birdMaterial(this.uTime, '#6b5040'), n);
    this.sparrowMesh.frustumCulled = false;
    this.sparrowMesh.castShadow = true;
    this.scene.add(this.sparrowMesh);
    this.sparrows = [];
    const spots = [[-5.5, -3.5], [-4.6, -2.8], [-6.2, -2.4], [-5.1, -4.4]];
    for (let i = 0; i < n; i++) {
      this.sparrows.push({
        pos: new THREE.Vector3(spots[i][0], 0, spots[i][1]), yaw: this.rng() * 6.28, state: 'ground',
        hopT: this.rng() * 2, peck: 0, from: new THREE.Vector3(), to: new THREE.Vector3(), t: 0, dur: 1, hop: 0,
      });
    }
    this.sparrowFlap = flap;
  }

  // --- bubbles drifting up from the hall's balcony ----------------------------
  buildBubbles() {
    const n = 22;
    const g = new THREE.SphereGeometry(1, 24, 16);
    const seeds = new Float32Array(n);
    for (let i = 0; i < n; i++) seeds[i] = this.rng();
    g.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seeds, 1));
    this.bubbleMesh = new THREE.InstancedMesh(g, soapMaterial(this.uTime, 1), n);
    this.bubbleMesh.frustumCulled = false;
    this.bubbleMesh.renderOrder = 7;
    this.scene.add(this.bubbleMesh);
    this.bubbleSource = new THREE.Vector3(-19.5, 4.2, -22.5);
    this.bubbles = [];
    for (let i = 0; i < n; i++) {
      const b = { pos: new THREE.Vector3(), vel: new THREE.Vector3(), r: 0, age: 0, life: 0, alive: false, seed: seeds[i] };
      this.respawnBubble(b, true);
      this.bubbles.push(b);
    }
  }

  respawnBubble(b, initial) {
    b.alive = true;
    b.age = initial ? this.rng() * 40 : 0;
    b.life = 45 + this.rng() * 40;
    b.r = 0.12 + this.rng() * 0.3;
    b.pos.copy(this.bubbleSource).add(_v.set((this.rng() - 0.5) * 0.4, 0, (this.rng() - 0.5) * 0.4));
    b.vel.set(0.4 + this.rng() * 0.4, 0.25 + this.rng() * 0.2, 0.5 + this.rng() * 0.3);
    if (initial) {
      // pre-simulate so the sky already has bubbles at all heights
      const steps = Math.floor(b.age / 0.25);
      for (let k = 0; k < steps; k++) this.stepBubble(b, 0.25, k * 0.25);
    }
  }

  stepBubble(b, dt, t) {
    const s = b.seed * 20;
    b.vel.x = damp(b.vel.x, 0.55 + Math.sin(t * 0.21 + s) * 0.5, 0.5, dt);
    b.vel.z = damp(b.vel.z, 0.35 + Math.cos(t * 0.17 + s) * 0.55, 0.5, dt);
    b.vel.y = damp(b.vel.y, 0.42 + Math.sin(t * 0.5 + s) * 0.15, 0.5, dt);
    b.pos.addScaledVector(b.vel, dt);
    b.age += dt;
  }

  popBubble(b, audio) {
    if (!b.alive) return;
    b.alive = false;
    const p = b.pos;
    const n = Math.round(6 + b.r * 30);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, e = Math.acos(Math.random() * 2 - 1);
      const dx = Math.sin(e) * Math.cos(a), dy = Math.cos(e), dz = Math.sin(e) * Math.sin(a);
      spectral(Math.random(), _c);
      this.particles.spawn(p.x + dx * b.r, p.y + dy * b.r, p.z + dz * b.r, dx * 0.8, dy * 0.8, dz * 0.8, 0.5, 0.012, 3, _c.r * 0.4 + 0.6, _c.g * 0.4 + 0.6, _c.b * 0.4 + 0.6);
    }
    audio && audio.bubblePop(p, b.r * 3);
    b.respawnIn = 1 + this.rng() * 3;
  }

  // --- giant red balloon on a long string ------------------------------------
  buildBalloon() {
    const anchor = new THREE.Vector3(-9.5, 0, -24);
    this.balloonAnchor = anchor;
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 1.1, 8), new THREE.MeshStandardMaterial({ color: '#555', roughness: 0.5, metalness: 0.5 }));
    post.position.set(anchor.x, 0.55, anchor.z);
    post.castShadow = true;
    this.scene.add(post);
    circles.push({ x: anchor.x, z: anchor.z, r: 0.1 });
    const prof = [];
    for (let i = 0; i <= 24; i++) {
      const t = i / 24;
      const a = t * Math.PI;
      const r = Math.sin(a) * (1 - 0.18 * Math.pow(1 - t, 3)) * 2.2;
      const y = -Math.cos(a) * 2.5 - 0.35 * Math.pow(1 - t, 4);
      prof.push(new THREE.Vector2(Math.max(r, 0.001), y));
    }
    const g = new THREE.LatheGeometry(prof, 40);
    const mat = new THREE.MeshPhysicalMaterial({ color: '#d61f1a', roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.08, sheen: 0.3, transmission: 0, envMapIntensity: 1.3 });
    this.balloon = new THREE.Mesh(g, mat);
    this.balloon.castShadow = true;
    this.scene.add(this.balloon);
    const knot = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.3, 10), mat);
    knot.position.y = -2.95;
    knot.rotation.x = Math.PI;
    this.balloon.add(knot);
    this.balloonPos = new THREE.Vector3(anchor.x + 3, 27, anchor.z - 2);
    this.balloonVel = new THREE.Vector3();
    this.balloonR = 2.3;
    // string as a verlet chain
    const N = 40;
    this.rope = [];
    for (let i = 0; i < N; i++) {
      const t = i / (N - 1);
      this.rope.push({ p: new THREE.Vector3().lerpVectors(anchor, this.balloonPos, t), o: new THREE.Vector3().lerpVectors(anchor, this.balloonPos, t) });
    }
    this.ropeGeo = new THREE.BufferGeometry();
    this.ropeGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
    const line = new THREE.Line(this.ropeGeo, new THREE.LineBasicMaterial({ color: '#e8e4dc', transparent: true, opacity: 0.8 }));
    line.frustumCulled = false;
    this.scene.add(line);
    this.balloonSquash = 0;
    this.balloonSquashV = 0;
  }

  buildFarGiants() {
    // hot-air balloon drifting far away
    const g = new THREE.Group();
    const prof = [];
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      const a = t * Math.PI;
      const r = Math.sin(a * 0.92 + 0.12) * 9 * (t < 0.2 ? 0.55 + t * 2.25 : 1);
      prof.push(new THREE.Vector2(Math.max(0.5, r), -Math.cos(a) * 11));
    }
    const eg = new THREE.LatheGeometry(prof, 24);
    const col = new Float32Array(eg.attributes.position.count * 3);
    const cc = [new THREE.Color('#e8b32a'), new THREE.Color('#c93b2b'), new THREE.Color('#f2efe6'), new THREE.Color('#2a6fa8')];
    for (let i = 0; i < eg.attributes.position.count; i++) {
      const x = eg.attributes.position.getX(i), z = eg.attributes.position.getZ(i);
      const seg = Math.floor(((Math.atan2(z, x) / (Math.PI * 2) + 1) % 1) * 24 + 0.5) % 24;
      const c = cc[seg % 4];
      col.set([c.r, c.g, c.b], i * 3);
    }
    eg.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const env = new THREE.Mesh(eg, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.75 }));
    g.add(env);
    const basket = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.2, 1.6), new THREE.MeshStandardMaterial({ color: '#6a4a2a', roughness: 0.9 }));
    basket.position.y = -14;
    g.add(basket);
    this.hotAir = g;
    this.hotAirFlame = new THREE.Mesh(new THREE.ConeGeometry(0.5, 2.4, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 2.2, 0.8), transparent: true, opacity: 0.9 }));
    this.hotAirFlame.position.y = -11.6;
    this.hotAirFlame.visible = false;
    g.add(this.hotAirFlame);
    this.scene.add(g);
    this.hotAirA = 2.4;

    // an airship crossing very slowly, very far
    const ship = new THREE.Group();
    const hull = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), new THREE.MeshStandardMaterial({ color: '#d9dcdf', roughness: 0.4, metalness: 0.2 }));
    hull.scale.set(7, 7, 34);
    ship.add(hull);
    for (let i = 0; i < 4; i++) {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.4, 7, 7), hull.material);
      fin.position.set(0, 0, -28);
      fin.rotation.z = (i * Math.PI) / 2;
      fin.geometry.translate(0, 5, 0);
      ship.add(fin);
    }
    const gond = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2, 9), new THREE.MeshStandardMaterial({ color: '#555', roughness: 0.6 }));
    gond.position.set(0, -7.6, 4);
    ship.add(gond);
    this.airship = ship;
    this.scene.add(ship);
    this.airshipT = 0;
  }

  // --- picking -------------------------------------------------------------------
  pick(ray) {
    let best = null;
    const test = (center, r, critter) => {
      _v.subVectors(center, ray.origin);
      const t = _v.dot(ray.direction);
      if (t < 0) return;
      const d2 = _v.lengthSq() - t * t;
      // widen with distance so small things stay touchable
      const rr = r + t * 0.025;
      if (d2 < rr * rr && (!best || t < best.t)) best = { t, critter, point: center.clone() };
    };
    test(this.ball.pos, 0.45, { type: 'ball' });
    test(this.balloonPos, this.balloonR * 1.3, { type: 'balloon' });
    for (const b of this.bubbles) if (b.alive) test(b.pos, b.r + 0.35, { type: 'bubble', b });
    for (const f of this.flock) test(f.pos, 1.8, { type: 'bird', f });
    for (const s of this.sparrows) test(s.pos, 0.45, { type: 'sparrow', s });
    return best;
  }

  poke(c, audio, kidPos) {
    if (c.type === 'bubble') this.popBubble(c.b, audio);
    else if (c.type === 'balloon') this.bumpBalloon(_v.subVectors(this.balloonPos, kidPos).normalize(), 2.2, audio);
    else if (c.type === 'bird') { c.f.scared = 3; audio && audio.birdCall(c.f.pos, 1); }
    else if (c.type === 'sparrow') this.scareSparrows(kidPos, audio, true);
  }

  bumpBalloon(dir, k, audio) {
    this.balloonVel.addScaledVector(dir, k);
    this.balloonVel.y += k * 0.3;
    this.balloonSquashV += 3 * k;
    audio && audio.balloonSqueak(this.balloonPos, k);
  }

  scareSparrows(kidPos, audio, force = false) {
    for (const s of this.sparrows) {
      if (s.state !== 'ground') continue;
      const d = Math.hypot(s.pos.x - kidPos.x, s.pos.z - kidPos.z);
      if (d < 3.2 || force) {
        const trees = this.world.treeSpots.filter((t) => Math.hypot(t.x, t.z) < 50);
        const t = trees[Math.floor(this.rng() * trees.length)];
        s.state = 'fly';
        s.from.copy(s.pos);
        s.to.set(t.x + (this.rng() - 0.5) * t.r, t.top - 0.5, t.z + (this.rng() - 0.5) * t.r);
        s.t = 0;
        s.dur = s.from.distanceTo(s.to) / 7 + 0.4;
        s.rest = 6 + this.rng() * 8;
        audio && audio.flutter(s.pos);
      }
    }
  }

  // --- update ----------------------------------------------------------------------
  update(dt, time, kid, audio) {
    this.time = time;
    this.ball.update(dt, audio);

    // flock circling above the park
    for (let i = 0; i < this.flock.length; i++) {
      const f = this.flock[i];
      f.prev.copy(f.pos);
      f.a += dt * (0.075 + f.scared * 0.05);
      f.scared = Math.max(0, f.scared - dt);
      const r = f.r + Math.sin(time * 0.3 + f.ph) * 4;
      const a = f.a + i * 0.08;
      f.pos.set(f.cx + Math.cos(a) * r + Math.sin(time * 0.7 + f.ph) * 1.5,
        f.h + Math.sin(time * 0.5 + f.ph) * 2.5 + f.scared * 2,
        f.cz + Math.sin(a) * r);
      // birds near the child veer away a little
      const dk = f.pos.distanceTo(kid);
      if (dk < 6) f.scared = Math.max(f.scared, 1.5);
      _v.subVectors(f.pos, f.prev);
      const yaw = Math.atan2(_v.x, _v.z);
      const bank = 0.35;
      _e.set(-_v.y * 2, yaw, bank, 'YXZ');
      _q.setFromEuler(_e);
      _m.compose(f.pos, _q, _s.set(0.42, 0.42, 0.42));
      this.flockMesh.setMatrixAt(i, _m);
      const glide = Math.sin(time * 0.4 + f.ph) > 0.2 && f.scared <= 0 ? 0.08 : 0.55;
      this.flockFlap[i * 2] = f.flapPh;
      this.flockFlap[i * 2 + 1] = damp(this.flockFlap[i * 2 + 1], glide + f.scared * 0.2, 3, dt);
    }
    this.flockMesh.instanceMatrix.needsUpdate = true;
    this.flockMesh.geometry.attributes.aFlap.needsUpdate = true;
    if (Math.random() < dt * 0.25) {
      const f = this.flock[Math.floor(Math.random() * this.flock.length)];
      audio && audio.birdCall(f.pos, 0.5);
    }

    // sparrows: hop and peck; flee when approached; come back later
    if (kid.y < 1.5) this.scareSparrows(kid, audio);
    for (let i = 0; i < this.sparrows.length; i++) {
      const s = this.sparrows[i];
      let flap = 0;
      let pitch = 0;
      if (s.state === 'ground') {
        s.hopT -= dt;
        s.peck = Math.max(0, s.peck - dt * 3);
        if (s.hopT <= 0) {
          if (this.rng() < 0.5) {
            s.yaw += (this.rng() - 0.5) * 2;
            s.pos.x += Math.sin(s.yaw) * 0.12;
            s.pos.z += Math.cos(s.yaw) * 0.12;
            s.hop = 1;
          } else s.peck = 1;
          s.hopT = 0.4 + this.rng() * 1.4;
          if (this.rng() < 0.15) audio && audio.chirp(s.pos);
        }
        s.hop = Math.max(0, s.hop - dt * 6);
        s.pos.y = Math.sin(s.hop * Math.PI) * 0.05;
        pitch = s.peck * 0.6;
      } else if (s.state === 'fly') {
        s.t += dt / s.dur;
        const u = Math.min(s.t, 1);
        s.pos.lerpVectors(s.from, s.to, u);
        s.pos.y += Math.sin(u * Math.PI) * 2;
        s.yaw = Math.atan2(s.to.x - s.from.x, s.to.z - s.from.z);
        flap = 1;
        if (s.t >= 1) { s.state = 'perch'; }
      } else if (s.state === 'perch') {
        s.rest -= dt;
        if (s.rest < 0 && Math.hypot(kid.x - (-5.5), kid.z - (-3.5)) > 8 && kid.y < 1.5) {
          s.state = 'return';
          s.from.copy(s.pos);
          const a = this.rng() * Math.PI * 2;
          s.to.set(-5.5 + Math.cos(a) * 1.2, 0, -3.5 + Math.sin(a) * 1.2);
          s.t = 0;
          s.dur = s.from.distanceTo(s.to) / 6 + 0.5;
        }
      } else if (s.state === 'return') {
        s.t += dt / s.dur;
        const u = Math.min(s.t, 1);
        s.pos.lerpVectors(s.from, s.to, u);
        s.pos.y += Math.sin(u * Math.PI) * 1.2;
        s.yaw = Math.atan2(s.to.x - s.from.x, s.to.z - s.from.z);
        flap = 1;
        if (s.t >= 1) { s.state = 'ground'; s.pos.y = 0; }
      }
      _e.set(pitch, s.yaw, 0, 'YXZ');
      _q.setFromEuler(_e);
      _m.compose(_v.copy(s.pos).add(_w.set(0, 0.06, 0)), _q, _s.set(0.11, 0.11, 0.11));
      this.sparrowMesh.setMatrixAt(i, _m);
      this.sparrowFlap[i * 2] = i * 1.7;
      this.sparrowFlap[i * 2 + 1] = flap ? 1.1 : 0;
    }
    this.sparrowMesh.instanceMatrix.needsUpdate = true;
    this.sparrowMesh.geometry.attributes.aFlap.needsUpdate = true;

    // bubbles
    const headY = kid.y + 0.9;
    for (let i = 0; i < this.bubbles.length; i++) {
      const b = this.bubbles[i];
      if (b.alive) {
        this.stepBubble(b, dt, time);
        const dx = b.pos.x - kid.x, dy = b.pos.y - headY, dz = b.pos.z - kid.z;
        if (dx * dx + dy * dy * 0.5 + dz * dz < (b.r + 0.45) ** 2) this.popBubble(b, audio);
        else if (b.age > b.life || b.pos.y > 75 || Math.hypot(b.pos.x, b.pos.z) > 140) this.popBubble(b, null);
        const wob = 1 + Math.sin(time * 6 + b.seed * 30) * 0.04;
        _m.compose(b.pos, _q.identity(), _s.set(b.r * wob, b.r / wob, b.r * wob));
      } else {
        b.respawnIn -= dt;
        if (b.respawnIn <= 0) this.respawnBubble(b, false);
        _m.makeScale(0, 0, 0);
      }
      this.bubbleMesh.setMatrixAt(i, _m);
    }
    this.bubbleMesh.instanceMatrix.needsUpdate = true;

    // giant balloon: buoyant, pulled by its string, pushed by wind
    const bp = this.balloonPos, bv = this.balloonVel;
    const wind = _v.set(Math.sin(time * 0.13) * 0.9 + 0.6, 0, Math.cos(time * 0.11) * 0.7);
    bv.x += (wind.x - bv.x) * 0.25 * dt;
    bv.z += (wind.z - bv.z) * 0.25 * dt;
    bv.y += 0.9 * dt;
    bv.multiplyScalar(1 - 0.35 * dt);
    bp.addScaledVector(bv, dt);
    const L = 28.5;
    _w.subVectors(bp, this.balloonAnchor);
    const dl = _w.length();
    if (dl > L) {
      _w.multiplyScalar(1 / dl);
      bp.copy(this.balloonAnchor).addScaledVector(_w, L);
      const rv = bv.dot(_w);
      if (rv > 0) bv.addScaledVector(_w, -rv);
    }
    // the child can bump it from a rainbow
    const kdx = bp.x - kid.x, kdy = (bp.y - 1.5) - (kid.y + 0.6), kdz = bp.z - kid.z;
    const kd = Math.hypot(kdx, kdy, kdz);
    if (kd < this.balloonR + 0.5) {
      this.bumpBalloon(_w.set(kdx, kdy, kdz).normalize(), 1.5, audio);
    }
    this.balloonSquashV += (-this.balloonSquash * 60 - this.balloonSquashV * 4) * dt;
    this.balloonSquash += this.balloonSquashV * dt;
    this.balloon.position.copy(bp);
    this.balloon.rotation.set(Math.sin(time * 0.5) * 0.08 + bv.z * 0.05, time * 0.05, -bv.x * 0.05);
    const sq = this.balloonSquash * 0.08;
    this.balloon.scale.set(1 + sq, 1 - sq, 1 + sq);

    // rope
    const rope = this.rope;
    const N = rope.length;
    for (let i = 1; i < N - 1; i++) {
      const p = rope[i];
      _v.subVectors(p.p, p.o);
      p.o.copy(p.p);
      p.p.addScaledVector(_v, 0.97);
      p.p.y -= 2.5 * dt * dt;
      p.p.x += wind.x * 0.4 * dt * dt;
    }
    rope[0].p.copy(this.balloonAnchor).y = 1.1;
    _w.set(0, -2.95, 0).applyEuler(this.balloon.rotation);
    rope[N - 1].p.copy(bp).add(_w);
    const seg = (L * 1.02) / (N - 1);
    for (let it = 0; it < 6; it++) {
      for (let i = 0; i < N - 1; i++) {
        const a = rope[i].p, b = rope[i + 1].p;
        _v.subVectors(b, a);
        const d = _v.length() || 1e-6;
        const diff = (d - seg) / d;
        if (i === 0) b.addScaledVector(_v, -diff);
        else if (i + 1 === N - 1) a.addScaledVector(_v, diff);
        else { a.addScaledVector(_v, diff * 0.5); b.addScaledVector(_v, -diff * 0.5); }
      }
    }
    const arr = this.ropeGeo.attributes.position.array;
    for (let i = 0; i < N; i++) { arr[i * 3] = rope[i].p.x; arr[i * 3 + 1] = rope[i].p.y; arr[i * 3 + 2] = rope[i].p.z; }
    this.ropeGeo.attributes.position.needsUpdate = true;

    // far giants
    this.hotAirA += dt * 0.0022;
    const ha = this.hotAirA;
    this.hotAir.position.set(Math.cos(ha) * 260, 95 + Math.sin(time * 0.05) * 6, -Math.abs(Math.sin(ha)) * 260 - 60);
    this.hotAir.rotation.y = time * 0.01;
    const burn = Math.sin(time * 0.13) > 0.93;
    this.hotAirFlame.visible = burn;
    if (burn) this.hotAirFlame.scale.setScalar(0.8 + Math.random() * 0.4);
    this.airshipT += dt;
    const as = ((this.airshipT * 1.6) % 1800) - 900;
    this.airship.position.set(as, 170, -720 + as * 0.15);
    this.airship.rotation.y = Math.PI / 2 - 0.15;
  }
}
