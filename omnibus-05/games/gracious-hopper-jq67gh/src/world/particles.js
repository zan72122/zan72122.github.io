// 粒子: 水滴・土くれ・花粉・きらめき
import * as THREE from '../vendor/three.module.min.js';
import { makeMaterial } from '../core/shared.js';

export function createParticles(G, cap = 1500) {
  const make = (additive) => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(cap * 3), col = new Float32Array(cap * 4), size = new Float32Array(cap);
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aCol', new THREE.BufferAttribute(col, 4).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1).setUsage(THREE.DynamicDrawUsage));
    const mat = makeMaterial(G, {
      uniforms: { uScale: { value: 400 } },
      transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      vertexShader: /* glsl */`
        attribute vec4 aCol; attribute float aSize; uniform float uScale;
        varying vec4 vCol; varying vec3 vW;
        void main(){
          vCol = aCol; vW = position;
          vec4 mv = viewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(aSize * uScale / max(0.05, -mv.z), 0.0, 220.0);
        }`,
      fragmentShader: additive ? /* glsl */`
        varying vec4 vCol; varying vec3 vW;
        void main(){
          vec2 d = gl_PointCoord - 0.5; float r = length(d) * 2.0;
          float a = exp(-r * r * 4.0) + exp(-r * 18.0) * 0.6;
          float star = max(0.0, 1.0 - abs(d.x * d.y) * 220.0) * (1.0 - r) * 0.6;
          vec3 c = vCol.rgb * (a + star);
          gl_FragColor = vec4(c * vCol.a, 1.0);
        }` : /* glsl */`
        varying vec4 vCol; varying vec3 vW;
        void main(){
          vec2 d = gl_PointCoord - 0.5; float r = length(d) * 2.0;
          if (r > 1.0) discard;
          // 球っぽい陰影
          vec3 n = normalize(vec3(d.x * 2.0, -d.y * 2.0, sqrt(max(0.0, 1.0 - r * r))));
          vec3 c = shadeLambert(vCol.rgb, n, vW, 0.4, 1.0);
          c += vec3(1.0) * pow(max(dot(n, normalize(vec3(-0.4, 0.5, 0.8))), 0.0), 30.0) * 0.6 * step(0.5, vCol.a);
          gl_FragColor = finish(applyFog(c, vW), smoothstep(1.0, 0.75, r) * min(1.0, vCol.a * 1.5));
        }`,
    });
    const pts = new THREE.Points(geo, mat);
    pts.frustumCulled = false;
    pts.renderOrder = additive ? 9 : 4;
    G.scene.add(pts);
    return { geo, mat, pts, pos, col, size, n: 0 };
  };
  const solid = make(false), glow = make(true);
  const list = [];
  const sys = {
    solid, glow, list,
    // p: {x,y,z, vx,vy,vz, life, size, color:[r,g,b], alpha, glow, drag, grav, kind, onGround(p,y)}
    emit(p) {
      if (list.length >= cap * 2 - 2) list.shift();
      p.age = 0; p.vx = p.vx || 0; p.vy = p.vy || 0; p.vz = p.vz || 0;
      p.drag = p.drag ?? 0.2; p.grav = p.grav ?? 9.8; p.alpha = p.alpha ?? 1; p.size = p.size || 0.02;
      p.color = p.color || [1, 1, 1];
      list.push(p);
      return p;
    },
    groundY: (x, z) => 0,
    update(dt) {
      let ns = 0, ng = 0;
      for (let i = list.length - 1; i >= 0; i--) {
        const p = list[i];
        p.age += dt;
        if (p.age >= p.life) { list.splice(i, 1); continue; }
        if (p.update) p.update(p, dt);
        p.vy -= p.grav * dt;
        const k = Math.exp(-p.drag * dt);
        p.vx *= k; p.vy *= k; p.vz *= k;
        if (p.wind) { p.vx += p.wind[0] * dt; p.vz += p.wind[1] * dt; }
        p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
        if (p.collide !== false && !p.glow) {
          const gy = (p.ground || sys.groundY)(p.x, p.z, p);
          if (p.y < gy) {
            p.y = gy;
            if (p.onGround && p.onGround(p, gy)) { list.splice(i, 1); continue; }
            p.vy = Math.abs(p.vy) * (p.bounce ?? 0.25); p.vx *= 0.6; p.vz *= 0.6;
          }
        }
        const fade = Math.min(1, (p.life - p.age) / Math.min(0.4, p.life * 0.5)) * Math.min(1, p.age / (p.fadeIn || 0.0001));
        const b = p.glow ? glow : solid;
        const j = p.glow ? ng++ : ns++;
        if (j >= cap) continue;
        b.pos[j * 3] = p.x; b.pos[j * 3 + 1] = p.y; b.pos[j * 3 + 2] = p.z;
        const tw = p.twinkle ? (0.6 + 0.4 * Math.sin(G.time * p.twinkle + p.seed * 10)) : 1;
        b.col[j * 4] = p.color[0]; b.col[j * 4 + 1] = p.color[1]; b.col[j * 4 + 2] = p.color[2]; b.col[j * 4 + 3] = p.alpha * fade * tw;
        b.size[j] = p.size * (p.grow ? 1 + p.age * p.grow : 1);
      }
      for (const [b, n] of [[solid, ns], [glow, ng]]) {
        b.n = Math.min(cap, n);
        b.geo.setDrawRange(0, b.n);
        b.geo.attributes.position.needsUpdate = true;
        b.geo.attributes.aCol.needsUpdate = true;
        b.geo.attributes.aSize.needsUpdate = true;
      }
      const sc = G.viewH * G.pixelRatio / (2 * Math.tan(THREE.MathUtils.degToRad(G.camera.fov) / 2));
      solid.mat.uniforms.uScale.value = sc; glow.mat.uniforms.uScale.value = sc;
    },
    // 便利な放出
    burst(x, y, z, n, opt) {
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2, s = (opt.speed || 1) * (0.4 + Math.random() * 0.6);
        const up = opt.up ?? 1;
        sys.emit(Object.assign({
          x: x + (Math.random() - 0.5) * (opt.spread || 0), y, z: z + (Math.random() - 0.5) * (opt.spread || 0),
          vx: Math.cos(a) * s, vy: (opt.vy ?? 1) * up * (0.5 + Math.random() * 0.8), vz: Math.sin(a) * s,
          life: (opt.life || 1) * (0.6 + Math.random() * 0.6), seed: Math.random(),
        }, opt.p || {}, { size: (opt.size || 0.02) * (0.6 + Math.random() * 0.8) }));
      }
    },
  };
  return sys;
}
