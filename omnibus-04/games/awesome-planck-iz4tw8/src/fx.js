// Particles: water that pours sideways, dust puffs, falling leaves.
import * as THREE from 'three';
import { T, rand } from './textures.js';

const G = 9.8;

// Water droplets rendered as small glossy stretched spheres (instanced).
export class Water {
  constructor(scene, w2d, max = 700) {
    this.w2d = w2d;
    const geo = new THREE.SphereGeometry(1, 8, 6);
    this.mat = new THREE.MeshStandardMaterial({ color: 0xd6e6ee, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.4, envMapIntensity: 2.5, depthWrite: false });
    this.mesh = new THREE.InstancedMesh(geo, this.mat, max);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    scene.add(this.mesh);
    this.max = max;
    this.p = []; this.sources = [];
    this.m4 = new THREE.Matrix4(); this.q = new THREE.Quaternion(); this.s = new THREE.Vector3(); this.v = new THREE.Vector3();
    this.puddles = [];
    this.scene = scene;
  }
  // continuous stream: pos, vel (m/s), rate (drops/s), spread
  source(pos, vel, rate = 60, spread = 0.15, size = 0.02, life = 3) { const s = { pos, vel, rate, spread, size, acc: 0, on: true, life }; this.sources.push(s); return s; }
  burst(pos, n, speed = 2) {
    for (let i = 0; i < n && this.p.length < this.max; i++) {
      const a = rand() * Math.PI * 2, b = rand() * Math.PI;
      this.p.push({ x: pos.x, y: pos.y, z: pos.z, vx: Math.cos(a) * Math.sin(b) * speed - speed * 0.5, vy: Math.cos(b) * speed, vz: Math.sin(a) * Math.sin(b) * speed, life: 1.5, size: 0.015 + rand() * 0.015 });
    }
  }
  update(dt) {
    for (const s of this.sources) {
      if (!s.on) continue;
      s.acc += dt * s.rate;
      while (s.acc >= 1 && this.p.length < this.max) {
        s.acc -= 1;
        this.p.push({ x: s.pos.x, y: s.pos.y, z: s.pos.z, vx: s.vel.x + (rand() - 0.5) * s.spread, vy: s.vel.y + (rand() - 0.5) * s.spread, vz: s.vel.z + (rand() - 0.5) * s.spread, life: s.life * (0.6 + rand() * 0.6), size: s.size * (0.7 + rand() * 0.6) });
      }
    }
    const w = this.w2d;
    let n = 0;
    for (let i = this.p.length - 1; i >= 0; i--) {
      const d = this.p[i];
      d.vx += G * dt; d.life -= dt;
      const nx = d.x + d.vx * dt;
      // hit a west face near the gameplay plane: splash & stop
      if (Math.abs(d.z) < 1.5 && d.vx > 0) {
        const hit = w.castEast(d.x, nx, d.y - 0.01, d.y + 0.01);
        if (hit) {
          if (!d.splashed && d.vx > 2 && this.p.length < this.max - 2) {
            for (let k = 0; k < 2; k++) this.p.push({ x: hit.x0 - 0.02, y: d.y, z: d.z, vx: -d.vx * (0.15 + rand() * 0.2), vy: (rand() - 0.5) * 2, vz: (rand() - 0.5) * 2, life: 0.5, size: d.size * 0.6, splashed: true });
          }
          d.life = 0;
        }
      }
      d.x = nx; d.y += d.vy * dt; d.z += d.vz * dt;
      if (d.life <= 0 || d.y < -0.2 || d.x > 120) { this.p[i] = this.p[this.p.length - 1]; this.p.pop(); continue; }
    }
    for (const d of this.p) {
      if (n >= this.max) break;
      this.v.set(d.vx, d.vy, d.vz);
      const sp = this.v.length();
      this.q.setFromUnitVectors(Y, this.v.normalize());
      this.s.set(d.size, d.size * (1 + Math.min(2.2, sp * 0.12)), d.size);
      this.m4.compose(this.v.set(d.x, d.y, d.z), this.q, this.s);
      this.mesh.setMatrixAt(n++, this.m4);
    }
    this.mesh.count = n;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}
const Y = new THREE.Vector3(0, 1, 0);

// Dust puffs & leaves as soft billboards (points)
export class Dust {
  constructor(scene, max = 300) {
    this.max = max;
    this.geo = new THREE.BufferGeometry();
    this.pos = new Float32Array(max * 3); this.alpha = new Float32Array(max); this.size = new Float32Array(max);
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.geo.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1));
    this.geo.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    this.mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: T.soft }, scale: { value: 400 } },
      vertexShader: `attribute float alpha; attribute float size; varying float vA; uniform float scale;
        void main(){ vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform sampler2D map; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vec3(0.82,0.78,0.72), t.a * vA * 0.5); }`,
      transparent: true, depthWrite: false,
    });
    this.points = new THREE.Points(this.geo, this.mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
    this.p = [];
  }
  puff(x, y, z, k = 1) {
    const n = Math.floor(6 + k * 10);
    for (let i = 0; i < n && this.p.length < this.max; i++) {
      this.p.push({ x, y: y + (rand() - 0.5) * 0.5, z: z + (rand() - 0.5) * 0.6, vx: -rand() * 1.2 * k, vy: (rand() - 0.5) * 2 * k, vz: (rand() - 0.5) * 2, life: 0.9 + rand() * 0.6, max: 1.5, s: 0.25 + rand() * 0.3 });
    }
  }
  update(dt) {
    for (let i = this.p.length - 1; i >= 0; i--) {
      const d = this.p[i];
      d.life -= dt; d.x += d.vx * dt; d.y += d.vy * dt; d.z += d.vz * dt;
      d.vx *= 0.95; d.vy *= 0.95; d.vz *= 0.95; d.vx += 0.6 * dt; d.s += dt * 0.4;
      if (d.life <= 0) { this.p[i] = this.p[this.p.length - 1]; this.p.pop(); }
    }
    let n = 0;
    for (const d of this.p) { this.pos.set([d.x, d.y, d.z], n * 3); this.alpha[n] = Math.min(1, d.life / d.max * 2); this.size[n] = d.s; n++; }
    this.geo.setDrawRange(0, n);
    this.geo.attributes.position.needsUpdate = true; this.geo.attributes.alpha.needsUpdate = true; this.geo.attributes.size.needsUpdate = true;
  }
}

// Leaves drifting sideways from the trees.
export class Leaves {
  constructor(scene, trees, max = 120) {
    this.trees = trees.filter(t => t.crownCenter);
    const geo = new THREE.PlaneGeometry(0.07, 0.045);
    const mat = new THREE.MeshStandardMaterial({ color: 0xb9a24a, side: THREE.DoubleSide, roughness: 0.8 });
    this.mesh = new THREE.InstancedMesh(geo, mat, max);
    this.mesh.frustumCulled = false; this.mesh.castShadow = false;
    scene.add(this.mesh);
    this.p = []; this.max = max; this.t = 0;
    this.m4 = new THREE.Matrix4(); this.e = new THREE.Euler(); this.q = new THREE.Quaternion(); this.one = new THREE.Vector3(1, 1, 1); this.v = new THREE.Vector3();
    const cols = [0xc9a441, 0xd97a2b, 0x9fae4a, 0xb85a2a, 0xe0c060];
    for (let i = 0; i < max; i++) this.mesh.setColorAt(i, new THREE.Color(cols[i % cols.length]));
  }
  update(dt) {
    this.t += dt;
    if (this.p.length < this.max && rand() < dt * 6) {
      const tr = this.trees[Math.floor(rand() * this.trees.length)];
      const c = tr.crownCenter;
      this.p.push({ x: c.x + (rand() - 0.5) * 2, y: c.y + (rand() - 0.5) * 2, z: c.z + (rand() - 0.5) * 2, vx: 0, vy: 0, vz: 0, r: rand() * 6, w: 2 + rand() * 4, ph: rand() * 6 });
    }
    let n = 0;
    for (let i = this.p.length - 1; i >= 0; i--) {
      const d = this.p[i];
      // leaves: heavy drag, flutter across the fall direction
      d.vx += (G * 0.35 - d.vx * 1.2) * dt;
      d.vy = Math.sin(this.t * 3 + d.ph) * 0.6;
      d.vz = Math.cos(this.t * 2.3 + d.ph) * 0.4 + 0.2;
      d.x += d.vx * dt; d.y += d.vy * dt; d.z += d.vz * dt; d.r += d.w * dt;
      if (d.x > 150) { this.p[i] = this.p[this.p.length - 1]; this.p.pop(); }
    }
    for (const d of this.p) {
      this.e.set(d.r, d.r * 0.7, d.r * 1.3); this.q.setFromEuler(this.e);
      this.m4.compose(this.v.set(d.x, d.y, d.z), this.q, this.one);
      this.mesh.setMatrixAt(n++, this.m4);
    }
    this.mesh.count = n;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

// A continuous water jet: a tube along the sideways-ballistic path, with droplets
// breaking off its end. p(t) = o + v t + (g t^2 / 2, 0, 0)
export class Stream {
  constructor(scene, water, o, v, T = 0.7, r = 0.012) {
    this.o = o; this.v = v; this.T = T; this.r = r; this.water = water; this.t = Math.random() * 10;
    const pts = [];
    for (let i = 0; i <= 24; i++) { const t = T * i / 24; pts.push(new THREE.Vector3(o.x + v.x * t + 0.5 * G * t * t, o.y + v.y * t, o.z + v.z * t)); }
    this.curve = new THREE.CatmullRomCurve3(pts);
    const geo = new THREE.TubeGeometry(this.curve, 48, r, 8, false);
    // taper & roughen towards the end where the jet breaks up
    const pos = geo.attributes.position, n = 9;
    const cp = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      const seg = Math.floor(i / n) / 48;
      this.curve.getPointAt(Math.min(1, seg), cp);
      const d = new THREE.Vector3().fromBufferAttribute(pos, i).sub(cp);
      d.multiplyScalar(1 + seg * 1.2 + Math.sin(i * 1.7) * 0.15 * seg);
      pos.setXYZ(i, cp.x + d.x, cp.y + d.y, cp.z + d.z);
    }
    geo.computeVertexNormals();
    // flowing streaks: an alpha texture scrolled along the jet
    if (!Stream.tex) {
      const c = document.createElement('canvas'); c.width = 128; c.height = 16;
      const g = c.getContext('2d');
      for (let x = 0; x < 128; x++) { const a = 0.35 + 0.65 * Math.abs(Math.sin(x * 0.21) * Math.sin(x * 0.047 + 1.3)); g.fillStyle = `rgba(255,255,255,${a})`; g.fillRect(x, 0, 1, 16); }
      Stream.tex = new THREE.CanvasTexture(c); Stream.tex.wrapS = Stream.tex.wrapT = THREE.RepeatWrapping;
    }
    this.tex = Stream.tex.clone(); this.tex.needsUpdate = true; this.tex.repeat.set(6, 1);
    this.mat = new THREE.MeshStandardMaterial({ color: 0xc9dde6, roughness: 0.0, metalness: 0.0, transparent: true, opacity: 0.3, alphaMap: this.tex, envMapIntensity: 3, depthWrite: false });
    this.mesh = new THREE.Mesh(geo, this.mat);
    scene.add(this.mesh);
    const end = pts[pts.length - 1];
    const tEnd = T;
    this.src = water.source(end.clone(), new THREE.Vector3(v.x + G * tEnd, v.y, v.z), 40, 1.1, r * 0.9, 0.45);
  }
  update(dt) {
    this.t += dt;
    this.tex.offset.x -= dt * 2.5;
    this.mat.opacity = 0.28 + Math.sin(this.t * 31) * 0.04;
  }
}
