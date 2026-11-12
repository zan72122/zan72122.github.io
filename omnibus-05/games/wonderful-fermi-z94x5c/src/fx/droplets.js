// Free-flying water droplets (splashes, flung from the mane, shaken from grass).
// Each droplet is integrated ballistically with air drag; its colour comes from
// the angle between the view ray and the antisolar direction, so a dense spray in
// sunlight shows a real rainbow arc at ~42 degrees.
import * as THREE from '../../lib/three.module.js';
import { shared, GLSL_SPECTRUM, LAYER_MAIN } from '../core/env.js';

const VERT = /* glsl */ `
  attribute float aSize;
  attribute float aBright;
  uniform vec3 uSunDir;
  uniform float uPxScale;
  uniform float uPx;
  uniform float uWiden;
  uniform float uGain;
  varying vec3 vCol;
  varying float vA;
  ${GLSL_SPECTRUM}
  void main(){
    vec4 mv = viewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    vec3 view = normalize(position - cameraPosition);
    float ang = degrees(acos(clamp(dot(view, -uSunDir), -1.0, 1.0)));
    vec3 c = rainbowOptics(ang, uWiden) * 1.25;
    c += vec3(0.16); // sun glint on the droplet surface
    c += vec3(1.0, 0.95, 0.86) * pow(max(dot(view, uSunDir), 0.0), 8.0) * 2.2; // forward scatter
    vCol = c * aBright * uGain;
    float depth = max(-mv.z, 0.05);
    float px = aSize * uPxScale / depth;
    gl_PointSize = clamp(px * 3.0, 1.6 * uPx, 14.0 * uPx);
    vA = clamp(px * 3.0 / (1.6 * uPx), 0.25, 1.0);
  }`;
const FRAG = /* glsl */ `
  uniform vec3 uSunColor;
  varying vec3 vCol;
  varying float vA;
  void main(){
    vec2 c = gl_PointCoord - 0.5;
    float r2 = dot(c, c);
    float a = exp(-r2 * 16.0) + 0.6 * exp(-r2 * 60.0);
    if (a < 0.02) discard;
    gl_FragColor = vec4(vCol * uSunColor * 0.35 * a * vA, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

export function makeDropletMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uSunDir: shared.uSunDir,
      uSunColor: shared.uSunColor,
      uPxScale: { value: 800 },
      uPx: { value: 1 },
      uWiden: { value: 0.8 },
      uGain: { value: 1 },
    },
    vertexShader: VERT,
    fragmentShader: FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
}

export class Droplets {
  constructor(max = 6000) {
    this.max = max;
    this.n = 0;
    this.p = new Float32Array(max * 3);
    this.v = new Float32Array(max * 3);
    this.size = new Float32Array(max);
    this.life = new Float32Array(max);
    this.kind = new Uint8Array(max);
    this.bright = new Float32Array(max);
    this.born = new Float32Array(max);
    this.clock = 0;
    const g = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(this.p, 3).setUsage(THREE.DynamicDrawUsage);
    this.sizeAttr = new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage);
    this.brightAttr = new THREE.BufferAttribute(this.bright, 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.posAttr);
    g.setAttribute('aSize', this.sizeAttr);
    g.setAttribute('aBright', this.brightAttr);
    g.setDrawRange(0, 0);
    this.material = makeDropletMaterial();
    this.mesh = new THREE.Points(g, this.material);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 5;
    this.mesh.name = 'droplets';
    this.mesh.layers.set(LAYER_MAIN);
    // droplets clinging to hair / horn (re-filled every frame)
    this.clingMax = 600;
    this.cling = 0;
    const cg = new THREE.BufferGeometry();
    this.cp = new Float32Array(this.clingMax * 3);
    this.cs = new Float32Array(this.clingMax);
    this.cb = new Float32Array(this.clingMax).fill(1);
    this.cpAttr = new THREE.BufferAttribute(this.cp, 3).setUsage(THREE.DynamicDrawUsage);
    this.csAttr = new THREE.BufferAttribute(this.cs, 1).setUsage(THREE.DynamicDrawUsage);
    cg.setAttribute('position', this.cpAttr);
    cg.setAttribute('aSize', this.csAttr);
    cg.setAttribute('aBright', new THREE.BufferAttribute(this.cb, 1));
    cg.setDrawRange(0, 0);
    this.clingMesh = new THREE.Points(cg, this.material);
    this.clingMesh.frustumCulled = false;
    this.clingMesh.renderOrder = 5;
    this.clingMesh.layers.set(LAYER_MAIN);
    this.ground = () => 0;
    this.onLand = null; // (x,y,z, speed, kind) => absorbed?
    this.interceptors = []; // fn(i, x,y,z, vx,vy,vz) -> true if consumed
    this.landEvents = 0;
  }

  spawn(x, y, z, vx, vy, vz, sizeMul = 1, kind = 0) {
    if (this.n >= this.max) return -1;
    const i = this.n++;
    this.p[i * 3] = x;
    this.p[i * 3 + 1] = y;
    this.p[i * 3 + 2] = z;
    this.v[i * 3] = vx;
    this.v[i * 3 + 1] = vy;
    this.v[i * 3 + 2] = vz;
    this.size[i] = (0.0012 + Math.random() * 0.0022) * sizeMul;
    this.life[i] = 4 + Math.random() * 2;
    this.kind[i] = typeof kind === 'number' ? kind : kind === 'mane' ? 1 : kind === 'road' ? 2 : 0;
    this.bright[i] = 0.7 + Math.random() * 0.6;
    this.born[i] = this.clock;
    return i;
  }

  // Crown splash: water thrown radially and up from an impact.
  splash(x, y, z, energy, dirX = 0, dirZ = 0, count = null) {
    const n = count ?? Math.round(40 + energy * 220);
    for (let k = 0; k < n; k++) {
      const a = Math.random() * Math.PI * 2;
      const sp = (0.6 + Math.random() * 1.6) * (0.6 + energy * 1.4);
      const up = (1.2 + Math.random() * 2.6) * (0.55 + energy * 1.1);
      this.spawn(
        x + Math.cos(a) * 0.06,
        y + 0.01,
        z + Math.sin(a) * 0.06,
        Math.cos(a) * sp + dirX * (0.4 + Math.random() * 0.8),
        up,
        Math.sin(a) * sp + dirZ * (0.4 + Math.random() * 0.8),
        0.8 + Math.random() * 1.3
      );
    }
  }

  update(dt) {
    this.clock += dt;
    const p = this.p, v = this.v;
    const g = 9.81;
    let landed = 0;
    for (let i = 0; i < this.n; i++) {
      let vx = v[i * 3], vy = v[i * 3 + 1], vz = v[i * 3 + 2];
      // drag ~ quadratic for mm droplets
      const sp = Math.sqrt(vx * vx + vy * vy + vz * vz);
      const kd = 0.08 * sp / (this.size[i] * 600);
      const f = 1 / (1 + kd * dt);
      vx *= f;
      vz *= f;
      vy = (vy - g * dt) * f;
      v[i * 3] = vx;
      v[i * 3 + 1] = vy;
      v[i * 3 + 2] = vz;
      const ox = p[i * 3], oy = p[i * 3 + 1], oz = p[i * 3 + 2];
      p[i * 3] = ox + vx * dt;
      p[i * 3 + 1] = oy + vy * dt;
      p[i * 3 + 2] = oz + vz * dt;
      this.life[i] -= dt;
      let dead = this.life[i] <= 0;
      if (!dead) {
        for (const ic of this.interceptors) {
          if (ic(i, p[i * 3], p[i * 3 + 1], p[i * 3 + 2], vx, vy, vz, oy)) {
            dead = true;
            break;
          }
        }
      }
      if (!dead) {
        const gy = this.ground(p[i * 3], p[i * 3 + 2]);
        if (p[i * 3 + 1] < gy) {
          dead = true;
          landed++;
          if (this.onLand) this.onLand(p[i * 3], gy, p[i * 3 + 2], -vy, this.size[i]);
        }
      }
      if (dead) {
        this._kill(i);
        i--;
      }
    }
    this.landEvents = landed;
    this.posAttr.needsUpdate = true;
    this.sizeAttr.needsUpdate = true;
    this.brightAttr.needsUpdate = true;
    this.posAttr.clearUpdateRanges();
    this.posAttr.addUpdateRange(0, this.n * 3);
    this.sizeAttr.clearUpdateRanges();
    this.sizeAttr.addUpdateRange(0, this.n);
    this.brightAttr.clearUpdateRanges();
    this.brightAttr.addUpdateRange(0, this.n);
    this.mesh.geometry.setDrawRange(0, this.n);
  }

  _kill(i) {
    const j = --this.n;
    if (i !== j) {
      this.p[i * 3] = this.p[j * 3];
      this.p[i * 3 + 1] = this.p[j * 3 + 1];
      this.p[i * 3 + 2] = this.p[j * 3 + 2];
      this.v[i * 3] = this.v[j * 3];
      this.v[i * 3 + 1] = this.v[j * 3 + 1];
      this.v[i * 3 + 2] = this.v[j * 3 + 2];
      this.size[i] = this.size[j];
      this.life[i] = this.life[j];
      this.kind[i] = this.kind[j];
      this.bright[i] = this.bright[j];
      this.born[i] = this.born[j];
    }
  }

  // clinging droplets (hair, horn, grass held in hand)
  beginCling() {
    this.cling = 0;
  }
  addCling(x, y, z, w) {
    if (this.cling >= this.clingMax) return;
    const i = this.cling++;
    this.cp[i * 3] = x;
    this.cp[i * 3 + 1] = y;
    this.cp[i * 3 + 2] = z;
    this.cs[i] = 0.0016 + w * 0.0018;
  }
  endCling() {
    this.cpAttr.needsUpdate = true;
    this.csAttr.needsUpdate = true;
    this.clingMesh.geometry.setDrawRange(0, this.cling);
  }

  setViewport(heightPx, fovDeg, dpr) {
    this.material.uniforms.uPxScale.value = heightPx / (2 * Math.tan((fovDeg * Math.PI) / 360));
    this.material.uniforms.uPx.value = dpr;
  }
}
