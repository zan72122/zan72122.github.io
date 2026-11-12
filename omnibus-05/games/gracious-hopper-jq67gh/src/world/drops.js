// 露のしずく: 花びらの内壁を転がる小さな滴と、世界を逆さに映す大きな朝露
import * as THREE from '../vendor/three.module.min.js';
import { makeMaterial } from '../core/shared.js';
import { clamp, lerp, damp, smooth, Spring } from '../core/util.js';
import { FLOOR_Y, RIM } from './flower.js';

const _p = new THREE.Vector3(), _n = new THREE.Vector3(), _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3();

// 水滴らしい見た目 (透明・縁の反射・つや・レンズの明るみ)
function makeDropMaterial(G) {
  return makeMaterial(G, {
    uniforms: {},
    transparent: true, depthWrite: false,
    vertexShader: /* glsl */`
      varying vec3 vW; varying vec3 vN; varying vec3 vL;
      void main(){
        mat4 m = modelMatrix * instanceMatrix;
        vec4 w = m * vec4(position, 1.0);
        vW = w.xyz; vL = position;
        vN = normalize(mat3(m) * normal);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */`
      varying vec3 vW; varying vec3 vN; varying vec3 vL;
      void main(){
        vec3 n = normalize(vN);
        vec3 V = normalize(cameraPosition - vW);
        float ndv = max(dot(n, V), 0.0);
        float fres = 0.03 + 0.97 * pow(1.0 - ndv, 4.0);
        float ins = budInside(vW);
        vec3 env = mix(hemi(reflect(-V, n)), uBudGlow * 2.2, ins);
        vec3 lens = mix(vec3(1.0), uBudTint * 1.6, ins) * 0.5;
        vec3 col = lens * (1.0 - fres) + env * fres;
        // 縁の暗い帯 (全反射)
        float rim = smoothstep(0.15, 0.32, ndv) * (1.0 - smoothstep(0.32, 0.6, ndv));
        col *= 1.0 - (1.0 - smoothstep(0.0, 0.28, ndv)) * 0.5;
        vec3 H = normalize(normalize(uSunDir + vec3(0.0, ins * 1.5, 0.0)) + V);
        float sp = pow(max(dot(n, H), 0.0), 220.0);
        float sp2 = pow(max(dot(n, normalize(V + vec3(-0.3, 0.6, 0.0))), 0.0), 90.0);
        col += vec3(1.0) * (sp * 3.0 + sp2 * 0.9);
        float a = clamp(0.28 + fres * 0.7 + sp + sp2 * 0.5, 0.0, 1.0);
        gl_FragColor = finish(col, a);
      }`,
  });
}

export function createInteriorDrops(G, flower) {
  const MAX = 14;
  const geo = new THREE.SphereGeometry(1, 20, 14);
  const mesh = new THREE.InstancedMesh(geo, makeDropMaterial(G), MAX);
  mesh.frustumCulled = false;
  mesh.renderOrder = 6;
  G.scene.add(mesh);
  const drops = [];
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  const sys = {
    mesh, drops,
    active: false,
    spawnT: 1,
    autoRate: 9,        // 自然に結露する間隔 (s)
    onAbsorb: null,
    held: null,
    spawn(i, x, v, r = 0.02) {
      if (drops.length >= MAX) return null;
      const d = { i, x, v, r, rT: r, vx: 0, vv: 0, mode: 'wall', fx: 0, fz: 0, fvx: 0, fvz: 0, wob: new Spring(0, 120, 6), stretch: 0, absorbT: 0, held: false, target: null, id: Math.random() };
      drops.push(d);
      return d;
    },
    // 花びら上のパラメータ (x,v) から接平面上の重力加速度
    gravity(d) {
      const fr = flower.petals[d.i].frame;
      const sc = flower.head.scale.x;
      flower.petalWorld(d.i, d.x, d.v, _p, _n);
      flower.petalWorld(d.i, clamp(d.x + 0.02, -1, 1), d.v, _a);
      flower.petalWorld(d.i, d.x, clamp(d.v + 0.02, 0, 1), _b);
      const ex = _a.sub(_p).divideScalar(0.02), ev = _b.sub(_p).divideScalar(0.02);
      const g = _c.set(0, -9.8, 0);
      // 2x2 の最小二乗
      const a11 = ex.dot(ex), a12 = ex.dot(ev), a22 = ev.dot(ev);
      const b1 = ex.dot(g), b2 = ev.dot(g);
      const det = a11 * a22 - a12 * a12 || 1e-6;
      return { ax: (b1 * a22 - b2 * a12) / det, av: (a11 * b2 - a12 * b1) / det, ex: ex.length(), ev: ev.length(), sc };
    },
    worldPos(d, out) {
      if (d.mode === 'wall') {
        flower.petalWorld(d.i, d.x, d.v, out, _n);
        out.addScaledVector(_n, d.r * 0.55 * flower.head.scale.x);
      } else {
        out.set(d.fx, FLOOR_Y + d.r * 0.5 + floorBowl(d.fx, d.fz), d.fz);
        flower.head.localToWorld(out);
      }
      return out;
    },
    update(dt) {
      if (!this.active) { mesh.count = 0; return; }
      // 結露: 新しいしずくが少しずつ生まれて育つ
      this.spawnT -= dt;
      if (this.spawnT < 0 && drops.length < 8) {
        this.spawnT = this.autoRate * (0.7 + Math.random() * 0.6);
        const i = this.pickPetal();
        this.spawn(i, (Math.random() - 0.5) * 1.1, 0.16 + Math.random() * 0.22, 0.025);
      }
      const sc = flower.head.scale.x;
      for (let k = drops.length - 1; k >= 0; k--) {
        const d = drops[k];
        d.r = damp(d.r, d.rT, 1.5, dt);
        if (d.rT < 0.075 && d.mode === 'wall') d.rT += dt * 0.004; // ゆっくり育つ
        d.wob.update(dt);
        if (d.mode === 'wall') {
          const gr = this.gravity(d);
          // 小さいしずくは張りつき、大きくなると滑り出す (接触角のヒステリシス)
          const stick = d.r < 0.055 ? 1 : 0;
          if (d.held && d.target) {
            const kx = (d.target.x - d.x), kv = (d.target.v - d.v);
            d.vx = damp(d.vx, kx * 6, 10, dt); d.vv = damp(d.vv, kv * 6, 10, dt);
          } else if (!stick || d.pushed > 0) {
            d.vx += gr.ax * dt * 0.06; d.vv += gr.av * dt * 0.06;
            const drag = Math.exp(-3.0 * dt);
            d.vx *= drag; d.vv *= drag;
          } else {
            d.vx *= Math.exp(-8 * dt); d.vv *= Math.exp(-8 * dt);
          }
          d.pushed = Math.max(0, (d.pushed || 0) - dt);
          d.x = clamp(d.x + d.vx * dt, -0.9, 0.9);
          d.v = clamp(d.v + d.vv * dt, 0, 0.8);
          d.stretch = damp(d.stretch, clamp(Math.hypot(d.vx * gr.ex, d.vv * gr.ev) * 1.2, 0, 0.8), 6, dt);
          // 付け根まで来たら床へ
          if (d.v <= 0.015) {
            const fr = flower.petals[d.i].frame;
            const a = flower.petals[d.i].phi + d.x * 0.5;
            d.mode = 'floor';
            d.fx = Math.cos(a) * (RIM - 0.08); d.fz = Math.sin(a) * (RIM - 0.08);
            d.fvx = -Math.cos(a) * 0.3; d.fvz = -Math.sin(a) * 0.3;
            G.audio && G.audio.play('drop', { vol: 0.6 });
          }
        } else if (d.mode === 'floor') {
          // 花床はゆるいお椀: 中心へ転がる
          const r = Math.hypot(d.fx, d.fz) || 1e-4;
          const slope = 0.6;
          if (d.held && d.target && d.target.floor) {
            d.fvx = damp(d.fvx, (d.target.fx - d.fx) * 5, 10, dt); d.fvz = damp(d.fvz, (d.target.fz - d.fz) * 5, 10, dt);
          } else {
            d.fvx += -d.fx / r * slope * dt; d.fvz += -d.fz / r * slope * dt;
          }
          // 雄しべの輪の間をすり抜けるように
          d.fvx *= Math.exp(-0.6 * dt); d.fvz *= Math.exp(-0.6 * dt);
          d.fx += d.fvx * dt; d.fz += d.fvz * dt;
          d.stretch = damp(d.stretch, clamp(Math.hypot(d.fvx, d.fvz) * 0.8, 0, 0.6), 6, dt);
          if (Math.hypot(d.fx, d.fz) < 0.26) { d.mode = 'absorb'; d.absorbT = 0; G.audio && G.audio.play('gulp'); this.onAbsorb && this.onAbsorb(d); }
        } else if (d.mode === 'absorb') {
          d.absorbT += dt;
          d.fx = damp(d.fx, 0, 4, dt); d.fz = damp(d.fz, 0, 4, dt);
          d.rT = 0; d.r = damp(d.r, 0, 3, dt);
          if (d.absorbT > 1.2) { drops.splice(k, 1); continue; }
        }
      }
      // 合体
      for (let a = 0; a < drops.length; a++) for (let b = a + 1; b < drops.length; b++) {
        const A = drops[a], B = drops[b];
        if (A.mode !== B.mode || A.mode === 'absorb') continue;
        if (A.mode === 'wall' && A.i !== B.i) continue;
        const pa = this.worldPos(A, new THREE.Vector3()), pb = this.worldPos(B, new THREE.Vector3());
        if (pa.distanceTo(pb) < (A.r + B.r) * sc * 0.9) {
          const big = A.r >= B.r ? A : B, small = big === A ? B : A;
          big.rT = Math.cbrt(Math.pow(big.r, 3) + Math.pow(small.r, 3)) * 1.05;
          big.r = big.rT * 0.9;
          big.wob.kick(3);
          big.pushed = 1.0;
          if (small.held) { big.held = true; big.target = small.target; if (this.held === small) this.held = big; }
          drops.splice(drops.indexOf(small), 1);
          G.audio && G.audio.play('merge');
          break;
        }
      }
      // 描画
      let n = 0;
      for (const d of drops) {
        this.worldPos(d, _p);
        if (d.mode === 'wall') {
          flower.petalWorld(d.i, d.x, d.v, _a, _n);
          q.setFromUnitVectors(up, _n);
        } else {
          q.setFromUnitVectors(up, _n.set(0, 1, 0).transformDirection(flower.head.matrixWorld));
        }
        const r = d.r * sc;
        const w = d.wob.x * 0.25;
        s.set(r * (1 + w + d.stretch * 0.4), r * 0.62 * (1 - w), r * (1 + w - d.stretch * 0.2));
        m4.compose(_p, q, s);
        mesh.setMatrixAt(n++, m4);
      }
      mesh.count = n;
      mesh.instanceMatrix.needsUpdate = true;
    },
    pickPetal() {
      // 見えている側の花びらを選ぶ
      const cam = G.camera.position;
      let best = 0, bd = -1e9;
      for (let i = 0; i < 5; i++) {
        const p = flower.petals[i];
        flower.petalWorld(i, 0, 0.3, _a);
        const dist = _a.distanceTo(cam);
        const score = dist + Math.random() * 1.2;
        if (score > bd) { bd = score; best = i; }
      }
      return best;
    },
    // 指に近いしずく
    pick(ptr) {
      let best = null, bd = Infinity;
      for (const d of drops) {
        if (d.mode === 'absorb') continue;
        const sd = G.input.screenDist(this.worldPos(d, _p), ptr);
        if (sd < bd) { bd = sd; best = d; }
      }
      return best && bd < G.input.fingerR * 1.1 ? { d: best, dist: bd } : null;
    },
  };
  return sys;
}

function floorBowl(x, z) {
  const r = Math.hypot(x, z) / RIM;
  return 0.06 * Math.pow(r, 2.5) - 0.03;
}

// ------------------------------------------------------------
// 大きな朝露 (屈折で庭と家が逆さまに映る)
// ------------------------------------------------------------
export function createBigDrop(G) {
  const rt = new THREE.WebGLRenderTarget(320, 320, { type: THREE.UnsignedByteType, colorSpace: THREE.SRGBColorSpace, samples: 0 });
  const dropCam = new THREE.PerspectiveCamera(100, 1, 0.1, 6000);
  const mat = makeMaterial(G, {
    uniforms: {
      uRT: { value: rt.texture },
      uCamDir: { value: new THREE.Vector3(0, -1, 0) },
      uCamUp: { value: new THREE.Vector3(0, 0, 1) },
      uCamRight: { value: new THREE.Vector3(1, 0, 0) },
      uTanHalf: { value: Math.tan(THREE.MathUtils.degToRad(50)) },
      uWob: { value: new THREE.Vector4() },
      uStretch: { value: 0 },
    },
    transparent: true, depthWrite: true,
    vertexShader: /* glsl */`
      uniform vec4 uWob; uniform float uStretch; uniform float uTime;
      varying vec3 vW; varying vec3 vN;
      void main(){
        vec3 p = position;
        vec3 n = normal;
        // 表面張力の揺れ (低次のモード)
        float w = uWob.x * (3.0 * n.y * n.y - 1.0) * 0.5 + uWob.y * n.x * n.y + uWob.z * n.z * n.y;
        p *= 1.0 + w * 0.12;
        // 落ちる直前に下へ伸びる
        p.y -= uStretch * max(0.0, -n.y) * 0.9;
        vec4 wp = modelMatrix * vec4(p, 1.0);
        vW = wp.xyz; vN = normalize(mat3(modelMatrix) * n);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,
    fragmentShader: /* glsl */`
      uniform sampler2D uRT; uniform vec3 uCamDir, uCamUp, uCamRight; uniform float uTanHalf;
      varying vec3 vW; varying vec3 vN;
      void main(){
        vec3 n = normalize(vN);
        vec3 V = normalize(cameraPosition - vW);
        float ndv = max(dot(n, V), 0.0);
        // 球レンズ: 法線の接線成分を反転させて背後の景色を引く → 上下左右が逆さま
        vec3 D = uCamDir;
        vec3 tang = n - D * dot(n, D);
        vec3 dir = normalize(D + tang * 1.15);
        float x = dot(dir, uCamRight) / max(dot(dir, D), 0.05);
        float y = dot(dir, uCamUp) / max(dot(dir, D), 0.05);
        vec2 uv = vec2(x, y) / uTanHalf * 0.5 + 0.5;
        vec3 img = texture2D(uRT, uv).rgb;
        img = img * img * 1.05; // sRGB→おおよそリニア
        float fres = 0.03 + 0.97 * pow(1.0 - ndv, 4.5);
        vec3 R = reflect(-V, n);
        vec3 sky = mix(uSkyHorizon, uSkyTop, clamp(R.y, 0.0, 1.0)) * 1.1;
        vec3 col = mix(img * 1.08, sky, fres);
        // 縁の暗い輪
        col *= 0.55 + 0.45 * smoothstep(0.05, 0.35, ndv);
        vec3 H = normalize(uSunDir + V);
        col += uSunColor * pow(max(dot(n, H), 0.0), 500.0) * 6.0;
        col += vec3(1.0) * pow(max(dot(n, normalize(V + vec3(0.3, 0.8, 0.2))), 0.0), 160.0) * 0.8;
        // 内側の集光
        col += vec3(1.0, 0.95, 0.85) * pow(1.0 - ndv, 1.5) * max(dot(n, -uSunDir), 0.0) * 0.4;
        gl_FragColor = finish(col, 0.96);
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = 7;
  mesh.visible = false;
  G.scene.add(mesh);
  // 集光の明るい斑点 (花びらの上)
  const causticMat = new THREE.MeshBasicMaterial({ color: 0xfff1d0, transparent: true, opacity: 0.0, blending: THREE.AdditiveBlending, depthWrite: false });
  const caustic = new THREE.Mesh(new THREE.CircleGeometry(1, 24), causticMat);
  caustic.renderOrder = 5;
  caustic.visible = false;
  G.scene.add(caustic);

  const wob = [new Spring(0, 70, 2.5), new Spring(0, 90, 2.5), new Spring(0, 90, 2.5)];
  const bd = {
    mesh, rt, dropCam, mat, caustic,
    radius: 0.3,
    visible: false,
    pos: new THREE.Vector3(),
    stretch: 0,
    kick(a = 1) { wob[0].kick(a * (Math.random() < 0.5 ? 1 : -1) * 4); wob[1].kick((Math.random() - 0.5) * a * 6); wob[2].kick((Math.random() - 0.5) * a * 6); },
    update(dt) {
      for (const w of wob) w.update(dt);
      mat.uniforms.uWob.value.set(wob[0].x, wob[1].x, wob[2].x, 0);
      mat.uniforms.uStretch.value = this.stretch;
      mesh.visible = this.visible;
      caustic.visible = this.visible && this.causticOn;
      if (!this.visible) return;
      mesh.position.copy(this.pos);
      const sq = 1 - wob[0].x * 0.05;
      mesh.scale.set(this.radius * (1 + wob[0].x * 0.06), this.radius * 0.86 * sq, this.radius * (1 + wob[0].x * 0.06));
    },
    // 主描画の前に、しずくの位置から背後を描く
    renderRT(renderer, scene, mainCam) {
      if (!this.visible) return;
      const D = new THREE.Vector3().subVectors(this.pos, mainCam.position).normalize();
      // 見下ろしの時は真下 (庭) へ寄せる
      const down = new THREE.Vector3(0, -1, 0);
      D.lerp(down, this.downBias ?? 0.45).normalize();
      dropCam.position.copy(this.pos);
      dropCam.up.set(0, 1, 0);
      if (Math.abs(D.y) > 0.98) dropCam.up.set(0, 0, -1);
      dropCam.lookAt(this.pos.clone().add(D));
      dropCam.updateMatrixWorld();
      const right = new THREE.Vector3().setFromMatrixColumn(dropCam.matrixWorld, 0);
      const up = new THREE.Vector3().setFromMatrixColumn(dropCam.matrixWorld, 1);
      mat.uniforms.uCamDir.value.copy(D);
      mat.uniforms.uCamRight.value.copy(right);
      mat.uniforms.uCamUp.value.copy(up);
      mesh.visible = false; caustic.visible = false;
      const hidden = [];
      for (const o of this.hide || []) { if (o.visible) { o.visible = false; hidden.push(o); } }
      renderer.setRenderTarget(rt);
      renderer.clear();
      renderer.render(scene, dropCam);
      renderer.setRenderTarget(null);
      for (const o of hidden) o.visible = true;
      mesh.visible = true; caustic.visible = this.causticOn;
    },
  };
  return bd;
}
