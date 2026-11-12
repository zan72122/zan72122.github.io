// 世界：空、地面、道路、柔らかいガード、標識、木々、川と青い橋、スタート地点
import * as THREE from '../vendor/three.module.min.js';
import { RoundedBoxGeometry } from '../vendor/addons/RoundedBoxGeometry.js';
import { mergeGeometries } from '../vendor/addons/BufferGeometryUtils.js';
import {
  grassTexture, roadTexture, stripeTexture, signTexture, plankTexture, pavingTexture, waterTexture, rng,
  awningTexture, asphaltTexture, shadowBlobTexture,
} from './textures.js';
import { BRIDGE, bridgeProfile, ROAD_HW, STOP_LINE_1, SIGNAL } from './course.js';
import { mergeStatic } from './util.js';

export function makeEnvironment(renderer) {
  const envScene = new THREE.Scene();
  const geo = new THREE.SphereGeometry(10, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {},
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: `varying vec3 vP;
      void main(){
        float y = vP.y;
        vec3 sky = mix(vec3(0.92,0.97,1.0), vec3(0.35,0.62,0.98), smoothstep(0.0,0.7,y));
        vec3 ground = mix(vec3(0.75,0.82,0.7), vec3(0.32,0.52,0.28), smoothstep(0.0,-0.5,y));
        vec3 c = y > 0.0 ? sky : ground;
        vec3 sd = normalize(vec3(0.45,0.75,-0.35));
        c += vec3(6.0,5.5,4.5) * pow(max(dot(vP, sd),0.0), 220.0);
        c += vec3(0.6,0.55,0.45) * pow(max(dot(vP, sd),0.0), 8.0);
        gl_FragColor = vec4(c,1.0);
      }`,
  });
  envScene.add(new THREE.Mesh(geo, mat));
  // 柔らかい白い面光源をいくつか（塗装に映り込む）
  const panel = new THREE.MeshBasicMaterial({ color: 0xffffff });
  for (const [x, y, z, s] of [[0, 8, 0, 6], [-8, 3, 4, 3], [7, 2, -6, 3]]) {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(s, s * 0.5), panel);
    p.position.set(x, y, z);
    p.lookAt(0, 0, 0);
    envScene.add(p);
  }
  const pm = new THREE.PMREMGenerator(renderer);
  const rt = pm.fromScene(envScene, 0.02);
  pm.dispose();
  return rt.texture;
}

function makeSky() {
  const g = new THREE.SphereGeometry(700, 32, 16);
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); vec4 p = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position = p.xyww; }',
    fragmentShader: `varying vec3 vP;
      void main(){
        float y = max(vP.y, 0.0);
        vec3 c = mix(vec3(0.86,0.94,1.0), vec3(0.42,0.7,1.0), pow(smoothstep(0.0,0.6,y),0.8));
        vec3 sd = normalize(vec3(0.45,0.75,-0.35));
        float s = max(dot(vP, sd), 0.0);
        c += vec3(1.0,0.95,0.8) * (pow(s, 400.0) * 3.0 + pow(s, 12.0) * 0.18);
        gl_FragColor = vec4(c,1.0);
        #include <colorspace_fragment>
      }`,
  });
  const mesh = new THREE.Mesh(g, m);
  mesh.renderOrder = -10;
  mesh.frustumCulled = false;
  return mesh;
}

function riverDepth(x, z) {
  // 川：z=80 付近を東西に流れ、x=84 付近の池で終わる
  const d = Math.abs(z - 80);
  let k = 1 - THREE.MathUtils.smoothstep(d, 5.5, 9.5);
  const endFade = 1 - THREE.MathUtils.smoothstep(x, 80, 90);
  k *= endFade;
  const pond = 1 - THREE.MathUtils.smoothstep(Math.hypot(x - 82, z - 84), 7, 11);
  return Math.max(k, pond) * 1.6;
}

export class World {
  constructor(scene, course, renderer, quality) {
    this.scene = scene;
    this.course = course;
    this.quality = quality;
    this.pickables = [];
    this.anim = [];
    this.group = new THREE.Group();
    scene.add(this.group);

    scene.background = new THREE.Color(0xa8d8ff);
    scene.fog = new THREE.Fog(0xcfe8ff, 90, 420);
    scene.add(makeSky());

    // 光
    const hemi = new THREE.HemisphereLight(0xd6ecff, 0x7aa860, 1.15);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xfff0d8, 2.4);
    sun.castShadow = true;
    const sm = quality.high ? 2048 : 1024;
    sun.shadow.mapSize.set(sm, sm);
    const sc = sun.shadow.camera;
    sc.left = -16; sc.right = 16; sc.top = 16; sc.bottom = -16; sc.near = 1; sc.far = 90;
    sun.shadow.bias = -0.0006;
    sun.shadow.normalBias = 0.03;
    scene.add(sun);
    scene.add(sun.target);
    this.sun = sun;
    this.sunOffset = new THREE.Vector3(18, 34, -15);

    this.mats = {
      grass: new THREE.MeshStandardMaterial({ map: grassTexture(), roughness: 0.95 }),
      road: new THREE.MeshStandardMaterial({ map: roadTexture(), roughness: 0.85 }),
      asphalt: new THREE.MeshStandardMaterial({ map: asphaltTexture(), roughness: 0.85 }),
      guard: new THREE.MeshStandardMaterial({ map: stripeTexture('#ff3b4a', '#ffffff', 2), roughness: 0.55 }),
      white: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 }),
      paint: new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.5 }),
      yellowLine: new THREE.MeshStandardMaterial({ color: 0xffd21f, roughness: 0.5 }),
      pole: new THREE.MeshStandardMaterial({ color: 0xc8ccd2, metalness: 0.6, roughness: 0.35 }),
      blue: new THREE.MeshStandardMaterial({ color: 0x2f7fe0, metalness: 0.3, roughness: 0.35 }),
      planks: new THREE.MeshStandardMaterial({ map: plankTexture(), roughness: 0.8 }),
      water: new THREE.MeshStandardMaterial({ map: waterTexture(), color: 0xbfe6ff, roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.92 }),
      trunk: new THREE.MeshStandardMaterial({ color: 0x8a5a35, roughness: 0.9 }),
      leaf: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85 }),
      fence: new THREE.MeshStandardMaterial({ color: 0xfffaf0, roughness: 0.7 }),
      stone: new THREE.MeshStandardMaterial({ color: 0xd9d4cc, roughness: 0.9 }),
    };
    this.mats.water.map.repeat.set(20, 2);

    this._ground();
    this._roads();
    this._guards();
    this._markings();
    this._signs();
    this._bridge();
    this._startArea();
    this._trees();
    this._hills();
    this._clouds();
    this._boom();
    this._decor();
    mergeStatic(this.group, new Set([this.boomArm, this.windmill, ...this.balloons, ...this.bunting]));
  }

  _ground() {
    const size = 520, seg = quality(this.quality, 200, 120);
    const g = new THREE.PlaneGeometry(size, size, seg, seg);
    g.rotateX(-Math.PI / 2);
    const p = g.attributes.position;
    const uv = g.attributes.uv;
    const cx = 50, cz = 80;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i) + cx, z = p.getZ(i) + cz;
      p.setX(i, x); p.setZ(i, z);
      let y = -riverDepth(x, z);
      if (x > 41.5 && x < 66.5 && z > 112.5 && z < 135.9) y = -0.6; // 広場の下（機械の穴が見えるように）
      if (x > 67.8 && x < 75.2 && z > 104 && z < 180) y = -1.5; // お城の堀
      p.setY(i, y);
      uv.setXY(i, x / 7, z / 7);
    }
    g.computeVertexNormals();
    const mesh = new THREE.Mesh(g, this.mats.grass);
    mesh.receiveShadow = true;
    this.group.add(mesh);
    // 水面
    const w = new THREE.Mesh(new THREE.PlaneGeometry(190, 15), this.mats.water);
    w.rotation.x = -Math.PI / 2;
    w.position.set(-10, -0.55, 80);
    this.group.add(w);
    const pond = new THREE.Mesh(new THREE.CircleGeometry(10, 32), this.mats.water);
    pond.rotation.x = -Math.PI / 2;
    pond.position.set(82, -0.55, 84);
    this.group.add(pond);
    this.water = [w, pond];
  }

  roadStrip(pts, hws, mat, yOff = 0.02, vScale = 1 / 6, heightFn = null) {
    const pos = [], uvs = [], idx = [];
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      const lx = Math.cos(p.h), lz = -Math.sin(p.h);
      const hw = hws[i];
      for (const side of [1, -1]) {
        const x = p.x + lx * hw * side, z = p.z + lz * hw * side;
        const y = (heightFn ? heightFn(x, z, p) : this.course.groundHeight(x, z)) + yOff;
        pos.push(x, y, z);
        uvs.push(side > 0 ? 0 : 1, p.s * vScale);
      }
      if (i > 0) {
        const a = (i - 1) * 2;
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, mat);
    m.receiveShadow = true;
    return m;
  }

  _roads() {
    const c = this.course;
    const A = c.routeA;
    const inBridge = (p) => Math.abs(p.x - BRIDGE.x) < 1 && p.z > BRIDGE.z0 + 0.01 && p.z < BRIDGE.z1 - 0.01;
    const pre = [], post = [];
    let mode = 0;
    A.forEach((p, i) => {
      if (inBridge(p)) { if (mode === 0) { pre.push(p); mode = 1; } return; }
      if (mode === 0) pre.push(p); else { if (post.length === 0) post.push(A[i - 1]); post.push(p); }
    });
    const hwOf = (arr) => arr.map((p) => c.rA.hw[A.indexOf(p)] ?? ROAD_HW);
    this.group.add(this.roadStrip(pre, hwOf(pre), this.mats.road));
    this.group.add(this.roadStrip(post, hwOf(post), this.mats.road));
    this.group.add(this.roadStrip(c.routeB, c.routeB.map(() => ROAD_HW), this.mats.road, 0.021));
    this.group.add(this.roadStrip(c.routeR, c.routeR.map(() => ROAD_HW), this.mats.road, 0.019));
  }

  // 柔らかいガード（赤白のスポンジ）
  guardTube(points3, radius = 0.17) {
    if (points3.length < 2) return null;
    const curve = new THREE.CatmullRomCurve3(points3, false, 'centripetal');
    const len = curve.getLength();
    const g = new THREE.TubeGeometry(curve, Math.max(4, Math.ceil(len / 0.6)), radius, 8, false);
    // u 方向にストライプが並ぶように UV を調整
    const uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setX(i, uv.getX(i) * len / 1.2);
    const m = new THREE.Mesh(g, this.mats.guard);
    m.castShadow = true;
    m.receiveShadow = true;
    return m;
  }

  guardAlong(pts, s0, s1, side, offset, y = 0.2) {
    const arr = [];
    for (const p of pts) {
      if (p.s < s0 - 1e-6 || p.s > s1 + 1e-6) continue;
      const lx = Math.cos(p.h), lz = -Math.sin(p.h);
      const x = p.x + lx * offset * side, z = p.z + lz * offset * side;
      arr.push(new THREE.Vector3(x, this.course.groundHeight(x, z) + y, z));
    }
    const m = this.guardTube(arr);
    if (m) this.group.add(m);
    return m;
  }

  _guards() {
    const c = this.course;
    const off = ROAD_HW + 0.2;
    const A = c.routeA;
    const bs = A.find((p) => p.z >= BRIDGE.z0 - 2 && Math.abs(p.x - BRIDGE.x) < 1).s;
    const be = A.find((p) => p.z >= BRIDGE.z1 + 2 && Math.abs(p.x - BRIDGE.x) < 1).s;
    const plazaS = A.find((p) => p.z >= 112 && Math.abs(p.x - 54) < 1).s;
    for (const side of [1, -1]) {
      this.guardAlong(A, 4, bs, side, off);
      this.guardAlong(A, be, plazaS, side, off);
    }
    const B = c.routeB;
    const bEnd = B[B.length - 1].s;
    for (const side of [1, -1]) this.guardAlong(B, 13.5, bEnd - 1.5, side, off);
    const R = c.routeR;
    const rEnd = R[R.length - 1].s;
    for (const side of [1, -1]) this.guardAlong(R, 2.2, rEnd - 1.2, side, off);

    // 広場の縁（入口・城門・東の出口は開けておく）
    const ring = [];
    const P = c.plaza;
    const x0 = P.cx - P.hx - 0.2, x1 = P.cx + P.hx + 0.2, z0 = P.cz - P.hz - 0.2, z1 = P.cz + P.hz + 0.2;
    const pathRect = (pts) => this.guardTube(pts.map(([x, z]) => new THREE.Vector3(x, 0.2, z)));
    ring.push(pathRect([[50.8, z0], [x0 + 3, z0], [x0, z0 + 3], [x0, z1 - 3], [x0 + 3, z1], [50.8, z1]]));
    ring.push(pathRect([[57.2, z0], [x1 - 3, z0], [x1, z0 + 3], [x1, 120.8]]));
    ring.push(pathRect([[x1, 127.2], [x1, z1 - 3], [x1 - 3, z1], [57.2, z1]]));
    ring.forEach((m) => m && this.group.add(m));

    // お菓子屋さんの前庭（円）
    const F = c.forecourt;
    const arc = (a0, a1) => {
      const pts = [];
      for (let a = a0; a <= a1 + 1e-6; a += 0.12) pts.push(new THREE.Vector3(F.cx + Math.sin(a) * (F.r + 0.2), 0.2, F.cz + Math.cos(a) * (F.r + 0.2)));
      return this.guardTube(pts);
    };
    // 角度 a は +Z から +X へ。南（a=π）と東（a=π/2）に開口
    const gapS = Math.asin((ROAD_HW + 0.3) / (F.r + 0.2));
    [arc(Math.PI / 2 + gapS, Math.PI - gapS), arc(Math.PI + gapS, Math.PI * 2.5 - gapS)].forEach((m) => m && this.group.add(m));
  }

  _markings() {
    const add = (w, d, x, z, rotY = 0, mat = this.mats.paint, y = 0.035) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat);
      m.rotation.x = -Math.PI / 2;
      m.rotation.z = rotY;
      m.position.set(x, y, z);
      m.receiveShadow = true;
      this.group.add(m);
      return m;
    };
    // 最初の停止線
    add(5.6, 0.45, STOP_LINE_1.x, STOP_LINE_1.z);
    // 信号の停止線と横断歩道
    add(0.45, 5.6, SIGNAL.stopX, SIGNAL.z);
    for (let i = -2; i <= 2; i++) add(2.0, 0.55, SIGNAL.stopX + 2.2, SIGNAL.z + i * 1.1);
    // 広場の駐車スペース（黄色い線）
    const px = 54, pz = 127;
    add(0.16, 3.9, px - 1.35, pz, 0, this.mats.yellowLine);
    add(0.16, 3.9, px + 1.35, pz, 0, this.mats.yellowLine);
    add(2.86, 0.16, px, pz - 1.95, 0, this.mats.yellowLine);
    // 隣にも駐車枠（飾り）
    for (const ox of [-4.2, 4.2]) {
      add(0.14, 3.6, px + ox - 1.3, pz, 0, this.mats.yellowLine);
      add(0.14, 3.6, px + ox + 1.3, pz, 0, this.mats.yellowLine);
    }
    // 前庭
    const fpave = new THREE.MeshStandardMaterial({ map: pavingTexture('#fff0b8', '#ffe28a', '#e9c35a'), roughness: 0.8 });
    fpave.map.repeat.set(6, 6);
    const F = this.course.forecourt;
    const fc = new THREE.Mesh(new THREE.CircleGeometry(F.r + 0.3, 40), fpave);
    fc.rotation.x = -Math.PI / 2;
    fc.position.set(F.cx, 0.026, F.cz);
    fc.receiveShadow = true;
    this.group.add(fc);
  }

  makeSign(kind, x, z, faceH, side = 0) {
    const g = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 1.9, 8), this.mats.pole);
    pole.position.y = 0.95;
    pole.castShadow = true;
    g.add(pole);
    this.signMats = this.signMats || {};
    if (!this.signMats[kind]) this.signMats[kind] = new THREE.MeshStandardMaterial({ map: signTexture(kind), transparent: true, alphaTest: 0.5, roughness: 0.4, metalness: 0.1 });
    const face = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 0.95), this.signMats[kind]);
    face.position.set(0, 1.85, 0.05);
    face.castShadow = true;
    g.add(face);
    this.signBack = this.signBack || new THREE.MeshStandardMaterial({ color: 0x9aa0a6, roughness: 0.5, metalness: 0.4 });
    const back = new THREE.Mesh(new THREE.PlaneGeometry(0.66, 0.66), this.signBack);
    back.rotation.z = Math.PI / 4;
    back.rotation.y = Math.PI;
    back.position.set(0, 1.85, 0.04);
    g.add(back);
    g.position.set(x, 0, z);
    g.rotation.y = faceH;
    void side;
    this.group.add(g);
    return g;
  }

  _signs() {
    // 第一幕：沿道に黄色い標識が並ぶ（流れる景色の目印）
    for (let i = 0; i < 5; i++) {
      const z = 9 + i * 4.5;
      const side = i % 2 ? -1 : 1;
      this.makeSign(i === 4 ? 'curve' : 'car', side * (ROAD_HW + 1.1), z, Math.PI, side);
    }
    // 信号の手前
    this.makeSign('signal', 20, 42 - ROAD_HW - 1.1, -Math.PI / 2);
    this.makeSign('duck', 25, 42 + ROAD_HW + 1.1, -Math.PI / 2);
    // 橋の手前
    this.makeSign('hump', 54 - ROAD_HW - 1.1, 56, Math.PI);
    this.makeSign('hump', 54 + ROAD_HW + 1.1, 53, Math.PI);
  }

  _bridge() {
    const c = this.course;
    const A = c.routeA;
    const pts = A.filter((p) => Math.abs(p.x - BRIDGE.x) < 1 && p.z >= BRIDGE.z0 - 0.01 && p.z <= BRIDGE.z1 + 0.01);
    const hw = BRIDGE.hw + 0.25;
    const deck = this.roadStrip(pts, pts.map(() => hw), this.mats.planks, 0.025, 1 / 3);
    this.group.add(deck);
    // 橋桁の側面（青）
    const sideGeo = [];
    const N = 80;
    const prof = (t) => bridgeProfile(t);
    for (const sx of [-1, 1]) {
      const pos = [], idx = [];
      for (let i = 0; i <= N; i++) {
        const t = i / N;
        const z = BRIDGE.z0 + t * (BRIDGE.z1 - BRIDGE.z0);
        const y = prof(t);
        const bottom = Math.min(y - 0.45, y * 0.6 - 0.4);
        pos.push(BRIDGE.x + sx * hw, y + 0.06, z, BRIDGE.x + sx * hw, bottom, z);
        if (i > 0) {
          const a = (i - 1) * 2;
          if (sx > 0) idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
          else idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
        }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setIndex(idx);
      g.computeVertexNormals();
      sideGeo.push(g);
    }
    const sides = new THREE.Mesh(mergeGeometries(sideGeo), this.mats.blue);
    sides.material = this.mats.blue.clone();
    sides.material.side = THREE.DoubleSide;
    sides.castShadow = true;
    this.group.add(sides);
    // 欄干とアーチ
    const rails = [];
    for (const sx of [-1, 1]) {
      const top = [], arch = [];
      for (let i = 0; i <= 40; i++) {
        const t = i / 40;
        const z = BRIDGE.z0 + t * (BRIDGE.z1 - BRIDGE.z0);
        const y = prof(t);
        top.push(new THREE.Vector3(BRIDGE.x + sx * (hw + 0.05), y + 0.85, z));
      }
      const tc = new THREE.CatmullRomCurve3(top);
      rails.push(new THREE.TubeGeometry(tc, 60, 0.07, 8, false));
      // 支柱
      for (let i = 0; i <= 20; i++) {
        const t = i / 20;
        const z = BRIDGE.z0 + t * (BRIDGE.z1 - BRIDGE.z0);
        const y = prof(t);
        const g = new THREE.CylinderGeometry(0.05, 0.05, 0.85, 6);
        g.translate(BRIDGE.x + sx * (hw + 0.05), y + 0.43, z);
        rails.push(g);
      }
      // 青いアーチ（川の上）
      const a0 = 70, a1 = 90;
      for (let i = 0; i <= 30; i++) {
        const t = i / 30;
        const z = a0 + t * (a1 - a0);
        const y = prof((z - BRIDGE.z0) / (BRIDGE.z1 - BRIDGE.z0)) + 0.8 + Math.sin(t * Math.PI) * 3.2;
        arch.push(new THREE.Vector3(BRIDGE.x + sx * (hw + 0.1), y, z));
      }
      rails.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(arch), 40, 0.16, 10, false));
      for (let i = 1; i < 10; i++) {
        const t = i / 10;
        const z = a0 + t * (a1 - a0);
        const yb = prof((z - BRIDGE.z0) / (BRIDGE.z1 - BRIDGE.z0)) + 0.8;
        const h = Math.sin(t * Math.PI) * 3.2;
        const g = new THREE.CylinderGeometry(0.04, 0.04, h, 6);
        g.translate(BRIDGE.x + sx * (hw + 0.1), yb + h / 2, z);
        rails.push(g);
      }
    }
    // アーチの間の梁
    for (const z of [76, 80, 84]) {
      const y = prof((z - BRIDGE.z0) / (BRIDGE.z1 - BRIDGE.z0)) + 0.8 + Math.sin(((z - 70) / 20) * Math.PI) * 3.2;
      const g = new THREE.CylinderGeometry(0.1, 0.1, (hw + 0.1) * 2, 8);
      g.rotateZ(Math.PI / 2);
      g.translate(BRIDGE.x, y, z);
      rails.push(g);
    }
    const railMesh = new THREE.Mesh(mergeGeometries(rails), this.mats.blue);
    railMesh.castShadow = true;
    this.group.add(railMesh);
    // 橋脚
    for (const z of [72, 88]) {
      const y = prof((z - BRIDGE.z0) / (BRIDGE.z1 - BRIDGE.z0));
      const pier = new THREE.Mesh(new THREE.BoxGeometry(hw * 2 - 0.6, y + 1.6, 0.8), this.mats.stone);
      pier.position.set(BRIDGE.x, (y - 1.6) / 2 - 0.4, z);
      pier.castShadow = true;
      this.group.add(pier);
    }
  }

  _startArea() {
    // 施設の建物（青白のひさし）
    const bld = new THREE.Group();
    const wall = new THREE.Mesh(new RoundedBoxGeometry(7, 3.4, 5, 3, 0.3), new THREE.MeshStandardMaterial({ color: 0xfff6e8, roughness: 0.8 }));
    wall.position.y = 1.7;
    wall.castShadow = true; wall.receiveShadow = true;
    bld.add(wall);
    const roof = new THREE.Mesh(new RoundedBoxGeometry(7.6, 0.5, 5.6, 3, 0.2), new THREE.MeshStandardMaterial({ color: 0x3b8de0, roughness: 0.5 }));
    roof.position.y = 3.6;
    roof.castShadow = true;
    bld.add(roof);
    const aw = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 6.4, 20, 1, true, 0, Math.PI), new THREE.MeshStandardMaterial({ map: awningTexture('#3b8de0', '#ffffff', 14), side: THREE.DoubleSide, roughness: 0.6 }));
    aw.rotation.z = Math.PI / 2;
    aw.rotation.y = Math.PI / 2;
    aw.position.set(3.6, 2.6, 0);
    aw.scale.set(1, 1, 0.6);
    bld.add(aw);
    for (const z of [-1.2, 1.2]) {
      const win = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.1), new THREE.MeshStandardMaterial({ color: 0x9fd4f5, roughness: 0.1, metalness: 0.2 }));
      win.rotation.y = Math.PI / 2;
      win.position.set(3.52, 1.7, z);
      bld.add(win);
    }
    bld.position.set(-10, 0, 14);
    this.group.add(bld);

    // コースを外から隔てる白い柵（家族の車は柵の外）
    const posts = [];
    const fenceLine = (x0, z0, x1, z1) => {
      const len = Math.hypot(x1 - x0, z1 - z0);
      const n = Math.ceil(len / 0.5);
      for (let i = 0; i <= n; i++) {
        const t = i / n;
        const g = new RoundedBoxGeometry(0.1, 0.9, 0.06, 1, 0.03);
        g.translate(x0 + (x1 - x0) * t, 0.45, z0 + (z1 - z0) * t);
        posts.push(g);
      }
      for (const y of [0.3, 0.7]) {
        const g = new THREE.BoxGeometry(0.05, 0.08, len).toNonIndexed();
        g.rotateY(Math.atan2(x1 - x0, z1 - z0));
        g.translate((x0 + x1) / 2, y, (z0 + z1) / 2);
        posts.push(g);
      }
    };
    fenceLine(-4.4, 2.2, -4.4, 26);
    fenceLine(-4.4, -6, -4.4, -0.6);
    fenceLine(-4.4, -6, -24, -6);
    const fence = new THREE.Mesh(mergeGeometries(posts), this.mats.fence);
    fence.castShadow = true;
    fence.receiveShadow = true;
    this.group.add(fence);

    // 柵の外の駐車場と一般道路
    const lot = new THREE.Mesh(new THREE.PlaneGeometry(9, 26), this.mats.asphalt);
    lot.material = this.mats.asphalt.clone();
    lot.material.map = this.mats.asphalt.map.clone();
    lot.material.map.repeat.set(2, 6);
    lot.material.map.needsUpdate = true;
    lot.rotation.x = -Math.PI / 2;
    lot.position.set(-9.3, 0.015, 7);
    lot.receiveShadow = true;
    this.group.add(lot);
    for (const z of [-4.2, -0.6, 3.0, 6.6]) {
      const l = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 0.12), this.mats.paint);
      l.rotation.x = -Math.PI / 2;
      l.position.set(-7.3, 0.03, z);
      this.group.add(l);
    }
    const pub = new THREE.Mesh(new THREE.PlaneGeometry(7, 300), this.mats.road);
    pub.material = this.mats.road.clone();
    pub.material.map = this.mats.road.map.clone();
    pub.material.map.repeat.set(1, 50);
    pub.material.map.needsUpdate = true;
    pub.rotation.x = -Math.PI / 2;
    pub.position.set(-17.5, 0.016, 60);
    pub.receiveShadow = true;
    this.group.add(pub);

    // スタート地点の旗の飾り
    const bunting = [];
    const cols = [0xff5a5a, 0xffd23f, 0x5fb8ff, 0x7be07b, 0xff8fd0];
    const flagMats = cols.map((c) => new THREE.MeshStandardMaterial({ color: c, side: THREE.DoubleSide, roughness: 0.7 }));
    const polesG = [];
    for (const sx of [-1, 1]) {
      const g = new THREE.CylinderGeometry(0.07, 0.07, 4.2, 8);
      g.translate(sx * (ROAD_HW + 0.9), 2.1, 17);
      polesG.push(g);
    }
    const poles = new THREE.Mesh(mergeGeometries(polesG), this.mats.pole);
    poles.castShadow = true;
    this.group.add(poles);
    for (let i = 0; i < 13; i++) {
      const t = i / 12;
      const x = -(ROAD_HW + 0.9) + t * (ROAD_HW + 0.9) * 2;
      const y = 4.0 - Math.sin(t * Math.PI) * 0.6;
      const tri = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.5, 3, 1), flagMats[i % 5]);
      tri.rotation.x = Math.PI;
      tri.scale.set(1, 1, 0.12);
      tri.position.set(x, y - 0.3, 17);
      this.group.add(tri);
      bunting.push(tri);
    }
    this.bunting = bunting;
  }

  _trees() {
    const r = rng(42);
    const spots = [];
    const c = this.course;
    const ok = (x, z) => {
      for (const reg of c.regions) if (reg.sd(x, z) < 3.2) return false;
      if (riverDepth(x, z) > 0.05) return false;
      if (x > 30 && x < 80 && z > 108 && z < 190) return false; // お城
      if (x > 74 && x < 104 && z > 140 && z < 180) return false; // お菓子屋さん
      if (x < -3 && x > -26 && z > -8 && z < 30) return false; // 駐車場・建物
      if (x < -14 && x > -21) return false; // 一般道路
      return true;
    };
    let tries = 0;
    while (spots.length < quality(this.quality, 230, 150) && tries < 6000) {
      tries++;
      const x = -60 + r() * 200, z = -50 + r() * 260;
      if (!ok(x, z)) continue;
      spots.push([x, z, 0.7 + r() * 0.7]);
    }
    // スタートとカーブの間に意図的に木を置く（曲がった先を隠す）
    for (const [x, z] of [[8, 34], [10, 30], [5.8, 38], [16, 34]]) if (ok(x, z)) spots.push([x, z, 1.1]);
    const n = spots.length;
    const trunkG = new THREE.CylinderGeometry(0.16, 0.24, 1.6, 7);
    trunkG.translate(0, 0.8, 0);
    const leafG = new THREE.IcosahedronGeometry(1, 1);
    const trunks = new THREE.InstancedMesh(trunkG, this.mats.trunk, n);
    const leaves = new THREE.InstancedMesh(leafG, this.mats.leaf, n * 3);
    leaves.receiveShadow = false;
    // 木の影は、軽い影の円で表す
    const blobG = new THREE.PlaneGeometry(1, 1);
    blobG.rotateX(-Math.PI / 2);
    const blobs = new THREE.InstancedMesh(blobG, new THREE.MeshBasicMaterial({ map: shadowBlobTexture(), transparent: true, depthWrite: false, opacity: 0.8 }), n);
    blobs.renderOrder = -1;
    const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), S = new THREE.Vector3(), P = new THREE.Vector3();
    const col = new THREE.Color();
    const greens = [0x5cb85c, 0x4caf50, 0x6cc96a, 0x3f9e4a, 0x7ad070];
    let li = 0;
    spots.forEach(([x, z, s], i) => {
      M.compose(P.set(x + 0.4 * s, 0.03, z - 0.3 * s), Q.identity(), S.set(3.6 * s, 1, 3.6 * s));
      blobs.setMatrixAt(i, M);
      M.compose(P.set(x, 0, z), Q.identity(), S.set(s, s, s));
      trunks.setMatrixAt(i, M);
      const base = greens[(r() * greens.length) | 0];
      for (let k = 0; k < 3; k++) {
        const ox = (r() - 0.5) * 1.2 * s, oz = (r() - 0.5) * 1.2 * s;
        const oy = (1.9 + k * 0.55 + r() * 0.3) * s;
        const ls = (1.15 - k * 0.22 + r() * 0.2) * s;
        M.compose(P.set(x + ox * (k === 2 ? 0.3 : 1), oy, z + oz * (k === 2 ? 0.3 : 1)), Q.identity(), S.set(ls, ls * 0.9, ls));
        leaves.setMatrixAt(li, M);
        col.setHex(base).offsetHSL(0, 0, (r() - 0.5) * 0.08 + k * 0.03);
        leaves.setColorAt(li, col);
        li++;
      }
    });
    this.group.add(trunks, leaves, blobs);

    // 花畑
    const fn = quality(this.quality, 700, 400);
    const flowerG = new THREE.SphereGeometry(0.12, 6, 4);
    const fl = new THREE.InstancedMesh(flowerG, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7 }), fn);
    const fcols = [0xff6f91, 0xffd23f, 0xffffff, 0xb78cff, 0xff9f43];
    let fi = 0, ft = 0;
    while (fi < fn && ft < 20000) {
      ft++;
      const cx = -30 + r() * 150, cz = -30 + r() * 200;
      if (!ok(cx, cz)) continue;
      const cc = fcols[(r() * fcols.length) | 0];
      for (let k = 0; k < 10 && fi < fn; k++) {
        const x = cx + (r() - 0.5) * 3, z = cz + (r() - 0.5) * 3;
        M.compose(P.set(x, 0.12, z), Q.identity(), S.set(1, 0.7, 1));
        fl.setMatrixAt(fi, M);
        fl.setColorAt(fi, col.setHex(cc));
        fi++;
      }
    }
    fl.count = fi;
    this.group.add(fl);
  }

  _hills() {
    const r = rng(7);
    const mat = new THREE.MeshStandardMaterial({ color: 0x8fd17a, roughness: 1 });
    const geos = [];
    for (let i = 0; i < 26; i++) {
      const a = (i / 26) * Math.PI * 2;
      const d = 260 + r() * 60;
      const g = new THREE.SphereGeometry(40 + r() * 40, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2);
      g.scale(1.6, 0.35 + r() * 0.3, 1);
      g.translate(50 + Math.sin(a) * d, -2, 80 + Math.cos(a) * d);
      geos.push(g);
    }
    const hills = new THREE.Mesh(mergeGeometries(geos), mat);
    this.group.add(hills);
  }

  _clouds() {
    const r = rng(99);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, emissive: 0xffffff, emissiveIntensity: 0.35, fog: false });
    this.clouds = new THREE.Group();
    for (let i = 0; i < 14; i++) {
      const geos = [];
      const n = 4 + ((r() * 4) | 0);
      for (let k = 0; k < n; k++) {
        const g = new THREE.SphereGeometry(5 + r() * 5, 12, 8);
        g.translate((k - n / 2) * 6 + r() * 3, r() * 3, r() * 4);
        geos.push(g);
      }
      const m = new THREE.Mesh(mergeGeometries(geos), mat);
      const a = r() * Math.PI * 2;
      const d = 150 + r() * 200;
      m.position.set(50 + Math.sin(a) * d, 70 + r() * 40, 80 + Math.cos(a) * d);
      m.scale.y = 0.55;
      this.clouds.add(m);
    }
    this.scene.add(this.clouds);
  }

  _boom() {
    // 戻り道の合流点の遮断機（開門まで閉じている）
    const b = this.course.boomPos;
    const g = new THREE.Group();
    g.position.set(b.x, 0, b.z);
    g.rotation.y = b.h;
    const lx = 1;
    const post = new THREE.Mesh(new RoundedBoxGeometry(0.4, 1.1, 0.4, 2, 0.08), new THREE.MeshStandardMaterial({ color: 0xffcc1a, roughness: 0.5 }));
    post.position.set(-lx * (ROAD_HW + 0.6), 0.55, 0);
    post.castShadow = true;
    g.add(post);
    this.boomArm = new THREE.Group();
    this.boomArm.position.set(-lx * (ROAD_HW + 0.6), 1.0, 0);
    g.add(this.boomArm);
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, ROAD_HW * 2 + 1, 10), this.mats.guard);
    arm.rotation.z = Math.PI / 2;
    arm.position.x = ROAD_HW + 0.5;
    arm.castShadow = true;
    this.boomArm.add(arm);
    this.group.add(g);
    this.boomOpen = 0;
    this.boomTarget = 0;
  }

  _decor() {
    // 風車（戻り道の脇）
    const wm = new THREE.Group();
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 2, 9, 12), new THREE.MeshStandardMaterial({ color: 0xfff3e0, roughness: 0.8 }));
    tower.position.y = 4.5;
    tower.castShadow = true;
    wm.add(tower);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(1.6, 2, 12), new THREE.MeshStandardMaterial({ color: 0xff7a59, roughness: 0.6 }));
    cap.position.y = 10;
    wm.add(cap);
    this.windmill = new THREE.Group();
    this.windmill.position.set(0, 8.4, 1.6);
    wm.add(this.windmill);
    for (let i = 0; i < 4; i++) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.7, 4.6, 0.08), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7 }));
      blade.position.y = 2.4;
      const h = new THREE.Group();
      h.rotation.z = (i / 4) * Math.PI * 2;
      h.add(blade);
      this.windmill.add(h);
    }
    wm.position.set(116, 0, 70);
    wm.rotation.y = -Math.PI / 2;
    this.group.add(wm);

    // 風船
    this.balloons = [];
    const bc = [0xff5a7a, 0xffd23f, 0x5fb8ff, 0x9b7bff, 0x6be07b];
    for (let i = 0; i < 5; i++) {
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 12), new THREE.MeshStandardMaterial({ color: bc[i], roughness: 0.25 }));
      b.scale.set(1, 1.2, 1);
      b.position.set(70 + i * 1.3, 10 + i * 0.7, 108 - i);
      this.group.add(b);
      this.balloons.push(b);
    }
  }

  update(dt, time, focus) {
    // 太陽の影をプレイヤーの周りに集中させる
    this.sun.position.copy(focus).add(this.sunOffset);
    this.sun.target.position.copy(focus);
    this.windmill.rotation.z += dt * 0.6;
    for (const [i, b] of this.balloons.entries()) b.position.y = 10 + i * 0.7 + Math.sin(time * 0.7 + i) * 0.4;
    for (const [i, f] of this.bunting.entries()) f.rotation.z = Math.sin(time * 3 + i * 0.7) * 0.25;
    this.clouds.rotation.y += dt * 0.002;
    for (const w of this.water) w.material.map.offset.x = time * 0.02;
    this.boomOpen += (this.boomTarget - this.boomOpen) * Math.min(1, dt * 1.5);
    this.boomArm.rotation.z = this.boomOpen * 1.45;
  }
}

function quality(q, hi, lo) { return q.high ? hi : lo; }
