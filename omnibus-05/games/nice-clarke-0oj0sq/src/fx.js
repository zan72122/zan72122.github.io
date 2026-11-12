// Small visual effects: sparkles, rings, and sound-wave pulses.
import * as THREE from 'three';
import { makeCanvas } from './textures.js';

function sparkTex() {
  const c = makeCanvas(64, 64);
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)');
  gr.addColorStop(0.2, 'rgba(255,255,255,0.8)');
  gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr;
  g.fillRect(0, 0, 64, 64);
  g.fillStyle = 'rgba(255,255,255,0.9)';
  g.fillRect(30, 4, 4, 56);
  g.fillRect(4, 30, 56, 4);
  const t = new THREE.CanvasTexture(c);
  return t;
}

export class Fx {
  constructor(scene) {
    this.scene = scene;
    const N = 600;
    this.N = N;
    this.pos = new Float32Array(N * 3);
    this.col = new Float32Array(N * 3);
    this.size = new Float32Array(N);
    this.vel = new Float32Array(N * 3);
    this.life = new Float32Array(N);
    this.max = new Float32Array(N);
    this.grav = new Float32Array(N);
    this.next = 0;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    this.mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: sparkTex() }, scale: { value: 300 } },
      vertexShader: /* glsl */ `
        attribute vec3 color; attribute float size; varying vec3 vC; uniform float scale;
        void main(){ vC=color; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_Position=projectionMatrix*mv; gl_PointSize = size*scale/(-mv.z); }`,
      fragmentShader: /* glsl */ `
        uniform sampler2D map; varying vec3 vC;
        void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vC*t.a, 1.0); }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    scene.add(this.points);

    // rings
    this.rings = [];
    const ringGeo = new THREE.RingGeometry(0.85, 1, 48);
    for (let i = 0; i < 24; i++) {
      const m = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
      m.visible = false;
      m.renderOrder = 4;
      scene.add(m);
      this.rings.push({ m, t: 0, dur: 1, r0: 0.05, r1: 0.3 });
    }
    this.ringNext = 0;
  }

  burst(p, color = '#ffd34a', n = 14, speed = 1, size = 0.03, grav = 2.5) {
    const c = new THREE.Color(color);
    for (let k = 0; k < n; k++) {
      const i = this.next;
      this.next = (this.next + 1) % this.N;
      this.pos[i * 3] = p.x;
      this.pos[i * 3 + 1] = p.y;
      this.pos[i * 3 + 2] = p.z;
      const a = Math.random() * Math.PI * 2;
      const u = Math.random() * 0.9 + 0.1;
      const s = speed * (0.4 + Math.random() * 0.8);
      this.vel[i * 3] = Math.cos(a) * Math.sqrt(1 - u * u) * s;
      this.vel[i * 3 + 1] = u * s * 1.2;
      this.vel[i * 3 + 2] = Math.sin(a) * Math.sqrt(1 - u * u) * s;
      this.col[i * 3] = c.r;
      this.col[i * 3 + 1] = c.g;
      this.col[i * 3 + 2] = c.b;
      this.size[i] = size * (0.6 + Math.random() * 0.8);
      this.life[i] = 0.5 + Math.random() * 0.5;
      this.max[i] = this.life[i];
      this.grav[i] = grav;
    }
  }

  ring(p, color = '#ffffff', { r0 = 0.05, r1 = 0.4, dur = 0.6, up = true, opacity = 0.8, face = null } = {}) {
    const r = this.rings[this.ringNext];
    this.ringNext = (this.ringNext + 1) % this.rings.length;
    r.m.position.copy(p);
    r.m.material.color.set(color);
    r.m.visible = true;
    r.t = 0;
    r.dur = dur;
    r.r0 = r0;
    r.r1 = r1;
    r.op = opacity;
    if (face) r.m.lookAt(face);
    else if (up) r.m.rotation.set(-Math.PI / 2, 0, 0);
    else r.m.rotation.set(0, 0, 0);
  }

  update(dt) {
    const N = this.N;
    for (let i = 0; i < N; i++) {
      if (this.life[i] <= 0) {
        if (this.size[i] !== 0) this.size[i] = 0;
        continue;
      }
      this.life[i] -= dt;
      this.vel[i * 3 + 1] -= this.grav[i] * dt;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      const k = Math.max(0, this.life[i] / this.max[i]);
      this.size[i] *= 0.985 + 0.015 * k;
      if (this.life[i] <= 0) this.size[i] = 0;
    }
    const g = this.points.geometry;
    g.attributes.position.needsUpdate = true;
    g.attributes.size.needsUpdate = true;
    g.attributes.color.needsUpdate = true;
    for (const r of this.rings) {
      if (!r.m.visible) continue;
      r.t += dt;
      const k = r.t / r.dur;
      if (k >= 1) {
        r.m.visible = false;
        continue;
      }
      const s = r.r0 + (r.r1 - r.r0) * (1 - Math.pow(1 - k, 2));
      r.m.scale.set(s, s, s);
      r.m.material.opacity = r.op * (1 - k);
    }
  }
}
