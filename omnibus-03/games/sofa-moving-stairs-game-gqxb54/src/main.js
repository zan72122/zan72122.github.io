// ゲーム本体: 入力(1本指) / 衝突解決 / カメラ / 作業員 / 進行
import * as THREE from 'three';
import { OBB, satOverlap, DIRS } from './physics.js';
import { Builder, buildTextures, buildMaterials } from './world.js';
import { STAGES } from './stages.js';
import { buildSofa, Worker, POSES, POSE_NAMES } from './sofa.js';
import { Sfx } from './audio.js';

const $ = (id) => document.getElementById(id);
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const isTouch = matchMedia('(pointer: coarse)').matches;
const POSE_CYCLE = [2, 1, 0]; // ねかせる→たてる→よこだおし→ねかせる

class Game {
  constructor() {
    this.canvas = $('c');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, isTouch ? 1.6 : 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xcfd6dc);
    this.scene.fog = new THREE.Fog(0xcfd6dc, 9, 22);
    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 60);
    this.camPos = V(); this.camTarget = V();
    buildTextures(); buildMaterials();
    this.scene.environment = this.makeEnv();
    this.hemi = new THREE.HemisphereLight(0xe3ebf3, 0x8a7d6c, 0.75); this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xfff4e4, 1.7);
    this.sun.castShadow = true; this.sun.shadow.mapSize.set(isTouch ? 1024 : 2048, isTouch ? 1024 : 2048);
    this.sun.shadow.bias = -0.0008; this.sun.shadow.normalBias = 0.02;
    this.scene.add(this.sun); this.scene.add(this.sun.target);
    this.fill = new THREE.DirectionalLight(0xdfe8ff, 0.35); this.fill.position.set(-4, 3, -5); this.scene.add(this.fill);
    this.sfx = new Sfx();
    this.ray = new THREE.Raycaster();
    this.tmpObb = new OBB(); this.sat = { depth: 0, axis: V() };
    this.workers = [new Worker(0x2f6fb5), new Worker(0x3f9c6e)];
    this.workers.forEach((w) => this.scene.add(w.g));
    this.state = 'title';
    this.stageIdx = Number(localStorage.getItem('sofa.stage') || 0) % STAGES.length;
    this.cleared = JSON.parse(localStorage.getItem('sofa.cleared') || '[]');
    this.bumps = []; this.hintT = 0; this.stepAcc = 0; this.lastBumpT = -9;
    this.makeFx();
    this.bindUI();
    this.onResize();
    addEventListener('resize', () => this.onResize());
    this.loadStage(this.stageIdx);
    this.clock = new THREE.Clock();
    this.renderer.setAnimationLoop(() => this.frame());
  }
  makeEnv() {
    const faces = [];
    for (let i = 0; i < 6; i++) {
      const c = document.createElement('canvas'); c.width = c.height = 32; const g = c.getContext('2d');
      const gr = g.createLinearGradient(0, 0, 0, 32);
      const top = i === 2 ? '#e8eef4' : '#c9cfd4', bot = i === 3 ? '#6e6459' : '#8f8677';
      gr.addColorStop(0, top); gr.addColorStop(1, bot); g.fillStyle = gr; g.fillRect(0, 0, 32, 32);
      faces.push(c);
    }
    const t = new THREE.CubeTexture(faces); t.colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true;
    return t;
  }
  makeFx() {
    // 接触の光点 と 回転ヒントの矢印
    this.glow = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 10), new THREE.MeshBasicMaterial({ color: 0xffd23f, transparent: true, opacity: 0.9, depthTest: false }));
    this.glow.renderOrder = 5; this.glow.visible = false; this.scene.add(this.glow);
    this.arc = new THREE.Group();
    const arcM = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9, depthTest: false });
    const torus = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.03, 8, 24, Math.PI * 1.3), arcM); torus.rotation.x = -Math.PI / 2;
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.18, 10), arcM);
    const a = Math.PI * 1.3; cone.position.set(Math.cos(a) * 0.42, 0, -Math.sin(a) * 0.42); cone.rotation.set(0, 0, 0); cone.rotation.y = -a; cone.rotation.x = Math.PI / 2;
    this.arc.add(torus, cone); this.arc.renderOrder = 6; this.arc.visible = false; this.scene.add(this.arc);
    // 指のヒント
    const cv = document.createElement('canvas'); cv.width = cv.height = 128; const g = cv.getContext('2d');
    g.font = '96px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('👉', 64, 70);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
    this.finger = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthTest: false })); this.finger.scale.set(0.5, 0.5, 1); this.finger.renderOrder = 7; this.finger.visible = false; this.scene.add(this.finger);
    // 成功のきらきら
    const n = 90, pos = new Float32Array(n * 3); this.sparkVel = [];
    for (let i = 0; i < n; i++) this.sparkVel.push(V((Math.random() - 0.5) * 1.6, 1 + Math.random() * 1.5, (Math.random() - 0.5) * 1.6));
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.sparks = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffe680, size: 0.07, transparent: true, opacity: 0, depthWrite: false }));
    this.scene.add(this.sparks); this.sparkT = -1;
  }
  bindUI() {
    $('play').onclick = () => { this.sfx.unlock(); this.startPlay(); };
    $('pose').onclick = () => { this.sfx.unlock(); this.cyclePose(); };
    $('restart').onclick = () => { this.sfx.unlock(); this.loadStage(this.stageIdx); this.startPlay(); };
    $('mute').onclick = () => { this.sfx.unlock(); this.sfx.setMuted(!this.sfx.muted); $('mute').textContent = this.sfx.muted ? '🔇' : '🔊'; };
    $('next').onclick = () => { this.sfx.unlock(); this.loadStage((this.stageIdx + 1) % STAGES.length); this.startPlay(); };
    const dots = $('dots');
    STAGES.forEach((s, i) => { const d = document.createElement('button'); d.className = 'dot'; d.textContent = s.icon; d.title = s.name; d.onclick = () => { this.sfx.unlock(); this.loadStage(i); this.startPlay(); }; dots.appendChild(d); });
    const c = this.canvas;
    c.addEventListener('pointerdown', (e) => this.onDown(e));
    c.addEventListener('pointermove', (e) => this.onMove(e));
    c.addEventListener('pointerup', (e) => this.onUp(e));
    c.addEventListener('pointercancel', (e) => this.onUp(e));
  }
  startPlay() {
    if (this.state === 'won') this.loadStage(this.stageIdx);
    this.state = 'play';
    document.body.classList.remove('title', 'won'); document.body.classList.add('play');
  }
  onResize() {
    const w = innerWidth, h = innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.portrait = h > w;
    this.camera.fov = this.portrait ? 62 : 46;
    this.camera.updateProjectionMatrix();
  }
  // ---------- ステージ ----------
  loadStage(i) {
    this.stageIdx = i; localStorage.setItem('sofa.stage', i);
    const st = STAGES[i];
    if (this.world) { this.scene.remove(this.world.group); this.scene.remove(this.sofaG); }
    const b = new Builder(); st.build(b);
    this.world = b; this.scene.add(b.group);
    this.spec = st.sofa;
    this.half = V(st.sofa.L / 2, st.sofa.H / 2, st.sofa.D / 2);
    this.sofaG = buildSofa(st.sofa); this.scene.add(this.sofaG);
    // 当たり判定用の少し大きい透明プロキシ(指で掴みやすく)
    this.proxy = new THREE.Mesh(new THREE.BoxGeometry(st.sofa.L + 0.25, st.sofa.H + 0.25, st.sofa.D + 0.25), new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false }));
    this.sofaG.add(this.proxy);
    this.x = st.start.x; this.z = st.start.z; this.yaw = st.start.yaw; this.pose = st.start.pose;
    this.visQ = new THREE.Quaternion(); this.visPos = V();
    this.obb = null;
    this.obb = new OBB();
    this.computeTransform(this.x, this.z, this.yaw, this.pose, this.obb);
    this.visQ.copy(this.obb.q); this.visPos.copy(this.obb.c);
    this.sofaG.position.copy(this.visPos); this.sofaG.quaternion.copy(this.visQ);
    // 光源をステージ範囲に合わせる
    const c = b.bounds.getCenter(V()), s = b.bounds.getSize(V());
    this.sun.position.set(c.x + 4, c.y + 7, c.z - 3); this.sun.target.position.copy(c);
    const sc = this.sun.shadow.camera; const r = Math.max(s.x, s.z) * 0.7;
    sc.left = -r; sc.right = r; sc.top = r; sc.bottom = -r; sc.near = 1; sc.far = 25; sc.updateProjectionMatrix();
    this.camHint = this.world.ground.regionAt(this.x, this.z, this.obb.groundY)?.cam || { dir: 0, side: 1 };
    this.updateCamera(1, true);
    this.bumps = []; this.hintT = 0; this.arc.visible = false; this.glow.visible = false;
    this.fingerT = i === 0 && !this.cleared.includes(0) ? 8 : 0;
    this.moved = false; this.wonT = 0;
    this.workers.forEach((w) => { w.pos.set(this.x, this.obb.groundY, this.z); w.bubble.visible = false; });
    document.querySelectorAll('.dot').forEach((d, k) => { d.classList.toggle('on', k === i); d.classList.toggle('done', this.cleared.includes(k)); });
    $('stageName').textContent = st.name;
    this.updatePoseButton();
  }
  // ---------- 変換(床の高さ場に乗せる) ----------
  computeTransform(x, z, yaw, pose, obb) {
    const g = this.world.ground, ref = this.obb?.groundY ?? null;
    const hC = g.heightAt(x, z, ref); if (hC === null) return false;
    const m = new THREE.Matrix4().makeRotationFromQuaternion(POSES[pose]);
    const e = m.elements, h = this.half;
    const a = Math.abs(e[0]) * h.x + Math.abs(e[4]) * h.y + Math.abs(e[8]) * h.z;   // ヨー座標系 X 方向の半径
    const bb = Math.abs(e[2]) * h.x + Math.abs(e[6]) * h.y + Math.abs(e[10]) * h.z; // Z 方向
    const fx = Math.cos(yaw), fz = -Math.sin(yaw), rx = Math.sin(yaw), rz = Math.cos(yaw);
    const S = (px, pz) => { const v = g.heightAt(px, pz, hC); return v === null ? hC : v; };
    const hF = S(x + fx * a, z + fz * a), hB = S(x - fx * a, z - fz * a), hR = S(x + rx * bb, z + rz * bb), hL = S(x - rx * bb, z - rz * bb);
    let pitch = Math.atan2(hF - hB, 2 * a), roll = Math.atan2(hR - hL, 2 * bb);
    const lim = 0.7; pitch = THREE.MathUtils.clamp(pitch, -lim, lim); roll = THREE.MathUtils.clamp(roll, -lim, lim);
    let y;
    if (pose === 2) { pitch = 0; roll = 0; y = hC; } else y = (hF + hB + hR + hL + hC * 2) / 6;
    const q = new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), yaw)
      .multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 0, 1), pitch))
      .multiply(new THREE.Quaternion().setFromAxisAngle(V(1, 0, 0), -roll))
      .multiply(POSES[pose]);
    obb.q.copy(q); obb.h.copy(h); obb.update();
    obb.c.set(x, y + obb.verticalHalf() + 0.01, z);
    obb.ext = { a, b: bb }; obb.groundY = hC; obb.pitch = pitch; obb.roll = roll;
    return true;
  }
  collide(obb) {
    let best = null;
    for (const c of this.world.colliders) {
      if (satOverlap(obb, c, this.sat) && (!best || this.sat.depth > best.depth)) best = { depth: this.sat.depth, axis: this.sat.axis.clone(), col: c };
    }
    return best;
  }
  // 位置を試し、壁に沿って押し出しつつ確定。失敗時は接触情報を返す
  solve(x, z, yaw, pose, maxPush) {
    let pushed = 0, first = null;
    for (let i = 0; i < 6; i++) {
      if (!this.computeTransform(x, z, yaw, pose, this.tmpObb)) return { ok: false, contact: first };
      const c = this.collide(this.tmpObb);
      if (!c) return { ok: true, x, z, contact: first };
      if (!first) first = this.contactOf(c);
      const hl = Math.hypot(c.axis.x, c.axis.z);
      if (hl < 0.35) return { ok: false, contact: first }; // ほぼ真上/真下からの接触(天井)は押し出せない
      const d = c.depth / hl * 1.03 + 0.002;
      pushed += d; if (pushed > maxPush) return { ok: false, contact: first };
      x += c.axis.x / hl * d; z += c.axis.z / hl * d;
    }
    return { ok: false, contact: first };
  }
  contactOf(c) {
    const p = this.tmpObb.support(V().copy(c.axis).negate(), V());
    return { point: p, tag: c.col.tag, axis: c.axis.clone() };
  }
  commit(r) { this.x = r.x; this.z = r.z; this.computeTransform(this.x, this.z, this.yaw, this.pose, this.obb); }
  tryMove(dx, dz) {
    const len = Math.hypot(dx, dz); if (len < 1e-5) return true;
    const ux = dx / len, uz = dz / len, px = -uz, pz = ux;
    let contact = null;
    // 本命 → 角度を90°方向へ少し寄せる(作業員が向きを直す) → 少し横にずらす(狭い隙間へ寄る) → 軸ごとの滑り
    const snap = Math.round(this.yaw / (Math.PI / 2)) * (Math.PI / 2);
    const dyawFix = Math.abs(snap - this.yaw) > 0.01 ? Math.sign(snap - this.yaw) * Math.min(0.04, Math.abs(snap - this.yaw)) : 0;
    const cands = [[dx, dz, 0]];
    if (dyawFix) cands.push([dx, dz, dyawFix]);
    cands.push([dx + px * 0.02, dz + pz * 0.02, 0], [dx - px * 0.02, dz - pz * 0.02, 0], [dx + px * 0.05, dz + pz * 0.05, 0], [dx - px * 0.05, dz - pz * 0.05, 0], [dx, 0, 0], [0, dz, 0]);
    for (let i = 0; i < cands.length; i++) {
      const [ax, az, dy] = cands[i]; const al = Math.hypot(ax, az); if (al < 1e-5) continue;
      const r = this.solve(this.x + ax, this.z + az, this.yaw + dy, this.pose, al * 0.95 + 0.01);
      if (!contact && r.contact) contact = r.contact;
      if (!r.ok) continue;
      const progress = ((r.x - this.x) * ux + (r.z - this.z) * uz) / len; // 入力方向への実際の進み
      if (progress < 0.3) continue;
      this.yaw += dy;
      this.commit(r);
      if (i > 0 || r.contact) this.bump(contact || r.contact, 0.35);
      return true;
    }
    this.bump(contact, 1);
    return false;
  }
  tryRotate(dy) {
    if (Math.abs(dy) < 1e-4) return true;
    let contact = null;
    for (const f of [1, 0.5, 0.25]) {
      const r = this.solve(this.x, this.z, this.yaw + dy * f, this.pose, 0.05);
      if (r.ok) { this.yaw += dy * f; this.commit(r); if (contact) this.bump(contact, 0.35); return true; }
      contact = contact || r.contact;
    }
    this.bump(contact, 1);
    return false;
  }
  setPose(p) {
    if (p === this.pose) return true;
    const snap = Math.round(this.yaw / (Math.PI / 2)) * (Math.PI / 2);
    const yaws = Math.abs(snap - this.yaw) < 0.45 ? [snap, this.yaw] : [this.yaw];
    let r = null;
    for (const y of yaws) { r = this.solve(this.x, this.z, y, p, 0.35); if (r.ok) { this.yaw = y; break; } }
    if (r.ok) { this.pose = p; this.commit(r); this.sfx.pose(); this.updatePoseButton(); this.arc.visible = false; return true; }
    this.bump(r.contact, 1); this.workers[0].say('むりー'); return false;
  }
  cyclePose() { if (this.state !== 'play') return; this.setPose(POSE_CYCLE[this.pose]); }
  updatePoseButton() {
    const ic = $('poseIcon');
    ic.style.transform = ['rotate(0deg)', 'scaleY(-1)', 'rotate(-90deg)'][this.pose];
    $('poseNext').textContent = POSE_NAMES[POSE_CYCLE[this.pose]];
  }
  // 接触フィードバック
  bump(contact, strength) {
    const now = performance.now() / 1000;
    if (!contact) return;
    this.glow.position.copy(contact.point); this.glow.visible = true; this.glowT = 0.6;
    if (now - this.lastBumpT < 0.12) return;
    this.lastBumpT = now;
    if (strength >= 1) {
      contact.tag === 'rail' ? this.sfx.bumpRail() : this.sfx.bumpWall();
      this.bumps.push(now); this.bumps = this.bumps.filter((t) => now - t < 5);
      if (this.bumps.length >= 3 && this.hintT <= 0) {
        this.hintT = 4; this.bumps = [];
        this.arc.position.copy(contact.point); this.arc.position.y = this.obb.c.y + 0.05; this.arc.visible = true;
        $('pose').classList.add('pulse'); setTimeout(() => $('pose').classList.remove('pulse'), 3500);
        this.workers[1].say(this.pose === 2 ? 'まわそう' : 'たてる？', 2);
        this.sfx.hmm();
      } else if (Math.random() < 0.5) { this.workers[Math.random() < 0.5 ? 0 : 1].say('うーん'); this.sfx.hmm(); }
    } else this.sfx.rub();
  }
  // ---------- 入力 ----------
  screenRay(e) {
    const r = this.canvas.getBoundingClientRect();
    const nd = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    this.ray.setFromCamera(nd, this.camera);
    return this.ray;
  }
  planeHit(ray, y) {
    const t = (y - ray.ray.origin.y) / ray.ray.direction.y;
    if (t <= 0) return null;
    return ray.ray.origin.clone().addScaledVector(ray.ray.direction, t);
  }
  onDown(e) {
    if (this.state !== 'play' || this.drag) return;
    this.sfx.unlock();
    this.canvas.setPointerCapture?.(e.pointerId);
    const ray = this.screenRay(e);
    const hit = ray.intersectObject(this.proxy, false)[0];
    let planeY, grab;
    if (hit) { planeY = THREE.MathUtils.clamp(hit.point.y, this.obb.groundY + 0.1, this.obb.c.y + 0.4); grab = V(hit.point.x, 0, hit.point.z); }
    else { planeY = this.obb.c.y; const p = this.planeHit(ray, planeY); if (!p) return; grab = V(this.x, 0, this.z); }
    // つかんだ点をソファのヨー座標系で記憶
    const rel = grab.clone().sub(V(this.x, 0, this.z));
    rel.applyAxisAngle(V(0, 1, 0), -this.yaw);
    this.drag = { id: e.pointerId, planeY, rel, t0: performance.now(), x0: e.clientX, y0: e.clientY, moved: false, target: null };
    this.fingerT = 0;
    this.onMove(e);
  }
  onMove(e) {
    if (!this.drag || e.pointerId !== this.drag.id) return;
    const p = this.planeHit(this.screenRay(e), this.drag.planeY);
    if (p) this.drag.target = p;
    if (Math.hypot(e.clientX - this.drag.x0, e.clientY - this.drag.y0) > 12) this.drag.moved = true;
  }
  onUp(e) {
    if (!this.drag || e.pointerId !== this.drag.id) return;
    const tap = !this.drag.moved && performance.now() - this.drag.t0 < 350;
    this.drag = null;
    if (tap && this.state === 'play') this.cyclePose();
    else this.snapYaw();
  }
  snapYaw() {
    const snap = Math.round(this.yaw / (Math.PI / 2)) * (Math.PI / 2);
    if (Math.abs(snap - this.yaw) < 0.21) { const r = this.solve(this.x, this.z, snap, this.pose, 0.05); if (r.ok) { this.yaw = snap; this.commit(r); } }
  }
  applyDrag(dt) {
    const d = this.drag; if (!d || !d.target) return false;
    const gp = d.rel.clone().applyAxisAngle(V(0, 1, 0), this.yaw).add(V(this.x, 0, this.z)); // 現在のつかみ点
    const ex = d.target.x - gp.x, ez = d.target.z - gp.z;
    const k = 1 - Math.exp(-dt * 14);
    const rl = Math.hypot(d.rel.x, d.rel.z);
    // 回転: つかみ点の中心からの距離が大きいほど回りやすい
    const rx = gp.x - this.x, rz = gp.z - this.z;
    let dyaw = -(rx * ez - rz * ex) / (rl * rl + 0.3 * 0.3) * k * 0.9;
    dyaw = THREE.MathUtils.clamp(dyaw, -0.08, 0.08);
    let mx = ex * k, mz = ez * k;
    const ml = Math.hypot(mx, mz); if (ml > 0.08) { mx *= 0.08 / ml; mz *= 0.08 / ml; }
    const before = { x: this.x, z: this.z, yaw: this.yaw };
    this.tryRotate(dyaw);
    this.tryMove(mx, mz);
    const moved = Math.hypot(this.x - before.x, this.z - before.z);
    this.stepAcc += moved + Math.abs(this.yaw - before.yaw) * 0.5;
    if (this.stepAcc > 0.4) { this.stepAcc = 0; this.sfx.step(); }
    if (moved > 0.002) this.moved = true;
    return moved > 0.0005 || Math.abs(this.yaw - before.yaw) > 0.0005;
  }
  // ---------- ゴール判定 ----------
  checkGoal() {
    const g = this.world.goalRect; if (!g) return false;
    const { a, b } = this.obb.ext;
    const fx = Math.cos(this.yaw), fz = -Math.sin(this.yaw), rx = Math.sin(this.yaw), rz = Math.cos(this.yaw);
    for (const sa of [-1, 1]) for (const sb of [-1, 1]) {
      const px = this.x + fx * a * sa + rx * b * sb, pz = this.z + fz * a * sa + rz * b * sb;
      if (px < g.x0 - 0.03 || px > g.x1 + 0.03 || pz < g.z0 - 0.03 || pz > g.z1 + 0.03) return false;
    }
    return true;
  }
  win() {
    this.state = 'won'; this.wonT = 0; this.drag = null;
    if (!this.cleared.includes(this.stageIdx)) { this.cleared.push(this.stageIdx); localStorage.setItem('sofa.cleared', JSON.stringify(this.cleared)); }
    this.sfx.success();
    this.workers[0].say('やったー！', 3); this.workers[1].say('よし！', 3);
    this.sparkT = 0; this.arc.visible = false; this.glow.visible = false;
    const last = this.stageIdx === STAGES.length - 1;
    $('wonTitle').textContent = last ? 'ぜんぶ できた！' : 'できた！';
    $('next').textContent = last ? 'さいしょから' : 'つぎへ ▶';
    setTimeout(() => { document.body.classList.remove('play'); document.body.classList.add('won'); }, 1300);
    document.querySelectorAll('.dot')[this.stageIdx].classList.add('done');
  }
  // ---------- カメラ ----------
  updateCamera(dt, snap = false) {
    const reg = this.world.ground.regionAt(this.x, this.z, this.obb.groundY);
    if (reg?.cam) this.camHint = reg.cam;
    const [dx, dz] = DIRS[this.camHint.dir]; const rx = dz, rz = -dx, side = this.camHint.side;
    const dist = this.portrait ? 4.0 : 3.7, lat = this.portrait ? 0.9 : 1.6, high = this.portrait ? 2.6 : 2.2;
    const c = this.obb.c;
    const want = V(c.x - dx * dist + rx * side * lat, this.obb.groundY + high, c.z - dz * dist + rz * side * lat);
    const tgt = V(c.x + dx * 0.4, c.y + (this.portrait ? 0.3 : 0.1), c.z + dz * 0.4);
    const k = snap ? 1 : 1 - Math.exp(-dt * 2.5);
    this.camPos.lerp(want, k); this.camTarget.lerp(tgt, k);
    this.camera.position.copy(this.camPos); this.camera.lookAt(this.camTarget);
    // カメラとソファ(中心+足元の四隅)の間にある壁・天井の面を薄くする
    const hits = new Set();
    const { a, b } = this.obb.ext; const fx = Math.cos(this.yaw), fz = -Math.sin(this.yaw), rxs = Math.sin(this.yaw), rzs = Math.cos(this.yaw);
    const pts = [c.clone()];
    for (const sa of [-1, 1]) for (const sb of [-1, 1]) pts.push(V(this.x + fx * a * sa + rxs * b * sb, c.y, this.z + fz * a * sa + rzs * b * sb));
    for (const p of pts) {
      const dir = V().subVectors(p, this.camera.position); const len = dir.length(); dir.normalize();
      this.ray.set(this.camera.position, dir); this.ray.far = len - 0.15;
      for (const h of this.ray.intersectObjects(this.world.cutaway, false)) hits.add(h.object);
    }
    this.ray.far = Infinity;
    const nrm = V(), rel = V();
    for (const m of this.world.cutaway) {
      let want = hits.has(m) ? 0.15 : 1;
      if (m.userData.ceil && want === 1) {
        // カメラが天井面のすぐ下にあると画面上部を覆ってしまうので薄くする
        nrm.set(0, 0, 1).applyQuaternion(m.quaternion);
        const dpl = rel.subVectors(this.camera.position, m.position).dot(nrm);
        if (dpl > -0.2 && dpl < 0.9) want = 0.15;
      }
      m.material.opacity += (want - m.material.opacity) * (snap ? 1 : Math.min(1, dt * 8));
      m.castShadow = m.material.opacity > 0.5;
    }
  }
  // ---------- 作業員 ----------
  updateWorkers(dt, moving) {
    const o = this.obb; const { a, b } = o.ext;
    const fx = Math.cos(this.yaw), fz = -Math.sin(this.yaw), rx = Math.sin(this.yaw), rz = Math.cos(this.yaw);
    // 長い方の水平軸の両端に立つ
    const useA = a >= b; const ext = useA ? a : b;
    const ax = useA ? fx : rx, az = useA ? fz : rz, px = useA ? rx : fx, pz = useA ? rz : fz;
    const handY = THREE.MathUtils.clamp(o.c.y, o.groundY + 0.35, o.groundY + 1.05);
    const body = this.bodyObb || (this.bodyObb = new OBB().set(V(), V(0.12, 0.85, 0.12), new THREE.Quaternion()));
    const free = (sx, sz) => {
      const gy = this.world.ground.heightAt(sx, sz, o.groundY); if (gy === null || Math.abs(gy - o.groundY) > 0.7) return null;
      body.c.set(sx, gy + 0.86, sz);
      for (const c of this.world.colliders) if (c.tag !== 'ceiling' && satOverlap(body, c, this.sat)) return null;
      return gy;
    };
    this.workers.forEach((w, i) => {
      const s = i === 0 ? 1 : -1;
      const gx = this.x + ax * ext * s, gz = this.z + az * ext * s;
      // 立ち位置: 端の外側 → 端の近く → 横 の順で空いている所
      const bExt = useA ? b : a;
      const cands = [[gx + ax * s * 0.38, gz + az * s * 0.38], [gx + ax * s * 0.18, gz + az * s * 0.18]];
      for (const back of [0.1, 0.35, 0.6]) for (const sd of [1, -1]) cands.push([gx - ax * s * back + px * sd * (bExt + 0.22), gz - az * s * back + pz * sd * (bExt + 0.22)]);
      cands.push([gx - ax * s * 0.45, gz - az * s * 0.45]);
      let sx = cands[0][0], sz = cands[0][1], gy = null;
      for (const [cx, cz] of cands) { const g = free(cx, cz); if (g !== null) { sx = cx; sz = cz; gy = g; break; } }
      if (gy === null) gy = o.groundY;
      const stand = V(sx, gy, sz);
      const face = V(gx - sx, 0, gz - sz).normalize();
      const hy = THREE.MathUtils.clamp(handY, gy + 0.35, gy + 1.1);
      const hands = [V(gx + px * 0.18, hy, gz + pz * 0.18), V(gx - px * 0.18, hy, gz - pz * 0.18)];
      w.update(stand, face, hands, dt, moving, this.state === 'won');
    });
  }
  // ---------- フレーム ----------
  frame() {
    const dt = Math.min(0.05, this.clock.getDelta());
    let moving = false;
    if (this.state === 'play') {
      moving = this.applyDrag(dt);
      if (this.checkGoal()) this.win();
    }
    // 見た目の補間(ポーズ変更を滑らかに)
    this.visQ.slerp(this.obb.q, 1 - Math.exp(-dt * 9));
    this.visPos.lerp(this.obb.c, 1 - Math.exp(-dt * 14));
    this.sofaG.position.copy(this.visPos); this.sofaG.quaternion.copy(this.visQ);
    if (this.state === 'won') { this.wonT += dt; const s = 1 + Math.sin(Math.min(this.wonT, 0.6) * 10) * 0.04 * (1 - this.wonT / 0.6); this.sofaG.scale.setScalar(Math.max(1, s)); }
    else this.sofaG.scale.setScalar(1);
    this.updateWorkers(dt, moving);
    this.updateCamera(dt);
    // エフェクト
    if (this.glow.visible) { this.glowT -= dt; const s = 1 + Math.sin(performance.now() / 60) * 0.25; this.glow.scale.setScalar(s); if (this.glowT <= 0) this.glow.visible = false; }
    if (this.arc.visible) { this.hintT -= dt; this.arc.rotation.y += dt * 1.2; if (this.hintT <= 0) this.arc.visible = false; }
    else if (this.hintT > 0) this.hintT -= dt;
    if (this.fingerT > 0 && this.state === 'play') {
      this.fingerT -= dt;
      const a = this.obb.ext.a; const fx = Math.cos(this.yaw), fz = -Math.sin(this.yaw);
      this.finger.visible = true; this.finger.position.set(this.x + fx * a + 0.25, this.obb.c.y + 0.35 + Math.sin(performance.now() / 200) * 0.06, this.z + fz * a);
    } else this.finger.visible = false;
    if (this.sparkT >= 0) {
      this.sparkT += dt; const p = this.sparks.geometry.attributes.position; const c = this.obb.c;
      for (let i = 0; i < p.count; i++) { const v = this.sparkVel[i]; p.setXYZ(i, c.x + v.x * this.sparkT, c.y + v.y * this.sparkT - 1.5 * this.sparkT * this.sparkT, c.z + v.z * this.sparkT); }
      p.needsUpdate = true; this.sparks.material.opacity = Math.max(0, 1 - this.sparkT / 1.8);
      if (this.sparkT > 2) this.sparkT = -1;
    }
    this.world.goalMesh.material.opacity = 0.25 + Math.sin(performance.now() / 400) * 0.12;
    this.renderer.render(this.scene, this.camera);
  }
}

window.game = new Game();
