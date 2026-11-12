// 進行の管理：触ってはいけなかったものに触る → 自分の足で動かす → 曲がる → 使い分ける → 到着 → 世界が変わる
import * as THREE from '../vendor/three.module.min.js';
import { RedCar } from './car.js';
import { FamilyCar } from './familycar.js';
import { makeChild, makePapa, makeMama, makeStaff } from './people.js';
import { TrafficSignal } from './signal.js';
import { Castle } from './castle.js';
import { World } from './world.js';
import { Course, PLATE, STOP_LINE_1, SIGNAL, BRIDGE } from './course.js';
import { CameraRig } from './camera.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

const FOLLOW = {
  wheelP: { az: 2.72, el: 0.3, dist: 3.9, look: V(-0.05, 0.42, 0.55), ahead: 0, fov: 46, lag: 6, pitchFollow: 0 },
  wheelL: { az: 2.6, el: 0.3, dist: 3.6, look: V(-0.1, 0.42, 0.45), ahead: 0, fov: 42, lag: 6, pitchFollow: 0 },
  chaseP: { az: 0, el: 0.37, dist: 6.6, look: V(0, 0.95, 0), ahead: 4.2, fov: 54, lag: 3, pitchFollow: 0.65 },
  chaseL: { az: 0, el: 0.25, dist: 4.4, look: V(0, 1.0, 0), ahead: 3.2, fov: 52, lag: 3, pitchFollow: 0.65 },
};

export class Game {
  constructor({ scene, camera, renderer, sound, cockpit, quality }) {
    this.scene = scene;
    this.camera = camera;
    this.sound = sound;
    this.cockpit = cockpit;
    this.course = new Course();
    this.world = new World(scene, this.course, renderer, quality);
    this.castle = new Castle(scene, this.course, sound);
    this.signal = new TrafficSignal(scene, this.course, sound);

    this.car = new RedCar(this.course);
    scene.add(this.car.root);
    this.car.setPose(0, 4, 0);
    this.car.update(0.016, { steer: 0, target: 0, brake: false, wheelAngle: 0 });

    this.family = new FamilyCar(this.car.m);
    this.family.root.position.set(-7.6, 0, 1.2);
    scene.add(this.family.root);

    this.child = makeChild();
    this.papa = makePapa();
    this.mama = makeMama();
    this.staff = makeStaff();
    for (const p of [this.child, this.papa, this.mama, this.staff]) scene.add(p.root);
    this.child.root.position.set(-1.3, 0, 3.15);
    this.child.root.rotation.y = Math.PI / 2;
    this.papa.root.position.set(-5.9, 0, 3.4);
    this.papa.root.rotation.y = -Math.PI / 2;
    this.mama.root.position.set(-5.2, 0, 13.5);
    this.mama.root.rotation.y = Math.PI / 2 + 0.5;
    this.staff.root.position.set(4.1, 0, 8.6);
    this.staff.root.rotation.y = -Math.PI / 2 - 0.5;

    this.rig = new CameraRig(camera);
    this.rig.attach(this.car);
    this.rig.occluders = [
      [34, 51, -1, 7.2, 136.5, 138.1], [57, 74, -1, 7.2, 136.5, 138.1], [51, 57, 4.6, 7.2, 136.5, 138.1],
      [33.5, 36, -1, 4.6, 137, 165], [72, 74.5, -1, 4.6, 137, 165],
      [41, 67, -1, 11, 162.8, 176], [36, 41, -1, 6.5, 139.5, 163], [67, 72, -1, 6.5, 139.5, 163],
      [82.8, 93.2, -1, 7.5, 164.3, 171.7], [-13.6, -6.4, -1, 4, 11.4, 16.6],
      [40.1, 43.9, -1, 13, 135.4, 139.2], [64.1, 67.9, -1, 13, 135.4, 139.2],
    ];

    // ドアノブを光らせる小さな光（金属の反射）
    this.handleLight = new THREE.PointLight(0xffffff, 0, 1.4, 2);
    scene.add(this.handleLight);
    // お城の前のプレートにも、ときどき光が走る（同じ光を使い回す：光源の数を増やさない）
    this.plateLight = this.handleLight;

    this.pickables = [
      ...this.car.pickables, this.family.body, ...this.family.handles,
      ...this.signal.pickables, ...this.castle.pickables,
      this.papa.pickMesh, this.mama.pickMesh, this.staff.pickMesh,
    ];
    this.pickables.push(this.child.pickMesh);
    this.child.pickMesh.userData.kind = 'child';
    this.papa.pickMesh.userData.kind = 'papa';
    this.mama.pickMesh.userData.kind = 'mama';
    this.staff.pickMesh.userData.kind = 'staff';
    this.raycaster = new THREE.Raycaster();

    this.state = 'outside';
    this.t = 0;
    this.time = 0;
    this.portrait = true;
    this.power = false;
    this.tweens = [];
    this.flags = {};
    this.steerTravel = 0;
    this.steerReversals = 0;
    this.lastSteerDir = 0;
    this.firstTouchT = -1;
    this.idleT = 0;
    this.blinkT = 0;
    this.blinkOn = false;
    this.papaGlanceT = 3;
    this.papaLook = null;
    this.bridgeDist = 0;
    this.lastStopZ = -99;
    this.stopRewardCount = 0;
    this.mamaCool = 0;
    this.prevV = 0;
    this.prevState = '';
    this.wasMoving = false;
    this.stillT = 0;
    this.headT = 0;
    this.staffCool = 0;
    this.cine = false;
    this.fovBase = 50;
    this.childHold = 0;
  }

  get follow() {
    return {
      wheel: this.portrait ? FOLLOW.wheelP : FOLLOW.wheelL,
      chase: this.portrait ? FOLLOW.chaseP : FOLLOW.chaseL,
    };
  }

  introKeys() {
    // 最初の画面：白い大きな車（パパの車）→ 低い視点で小さな赤い車のドアノブへ
    const p = this.portrait;
    return [
      { t: 0, pos: p ? V(-3.6, 2.0, 10.6) : V(-3.4, 1.9, 10.4), look: V(-7.0, 1.0, 2.4), fov: p ? 58 : 46 },
      { t: 1.7, pos: p ? V(-3.7, 2.1, 10.2) : V(-3.5, 2.0, 10.0), look: V(-6.3, 1.0, 2.6), fov: p ? 56 : 46 },
      { t: 3.7, pos: p ? V(-3.4, 1.2, 7.0) : V(-3.2, 1.25, 6.6), look: p ? V(-0.85, 0.6, 3.4) : V(-0.9, 0.62, 3.6), fov: p ? 52 : 46 },
    ];
  }

  start() {
    this.rig.setCine(this.introKeys(), 0);
    this.rig.update(0.016);
    this.after(0.9, () => { this.papa.do('point', 1.4); this.papa.lookAt(V(-7.6, 1.2, 1.2)); });
    this.after(1.35, () => {
      this.family.lockBlink(2);
      this.family.foldTarget = 1;
      this.sound.beepLock();
    });
    // 鍵をかけたら、パパは赤い車のそばへ歩いてくる
    this.after(1.9, () => {
      if (this.state !== 'outside') return;
      this.papa.lookAt(null);
      this.papaWalk = this.walk(this.papa, [this.papa.root.position.clone(), V(-4.9, 0, 0.9), V(-3.2, 0, 0.9), V(-2.6, 0, 1.4)], 2.4, () => {
        this.papaWalk = null;
        this.papa.pose = 'stand';
        this.papa.root.rotation.y = 0.63;
        this.papa.lookAt(this.headOf(this.child));
      });
    });
    this.after(3.0, () => {
      // 赤い車が「目を覚ます」：ヘッドライトが 2 回まばたき
      this.blinkHeadlights(2);
    });
  }

  onResize(portrait) {
    const changed = this.portrait !== portrait;
    this.portrait = portrait;
    if (!changed) return;
    if (this.state === 'outside' && !this.flags.introDone) {
      this.rig.setCine(this.introKeys().slice(-1), 0.6);
    } else if (this.state === 'outside' || this.state === 'opening') {
      const k = this.introKeys();
      this.rig.setFixed(k[k.length - 1].pos, k[k.length - 1].look, k[k.length - 1].fov, 0.6);
    } else if (!this.cine) {
      this.rig.setFollow(this.flags.moved ? this.follow.chase : this.follow.wheel, 0.6);
    }
  }

  after(dt, fn) { this.tweens.push({ t: 0, at: dt, fn }); }
  tween(dur, fn, done) { this.tweens.push({ t: 0, dur, fn, done }); }

  headOf(p) {
    const v = V();
    p.head.getWorldPosition(v);
    return v;
  }

  blinkHeadlights(n) {
    for (let i = 0; i < n; i++) {
      this.after(i * 0.32, () => { this.car.headOn = 1; this.sound.pop(700 + i * 120); });
      this.after(i * 0.32 + 0.16, () => { this.car.headOn = 0; });
    }
  }

  // ---------------------------------------------------------------- 世界のタップ
  worldTap(x, y, W, H) {
    const ndc = new THREE.Vector2((x / W) * 2 - 1, -(y / H) * 2 + 1);
    this.raycaster.setFromCamera(ndc, this.camera);
    const hits = this.raycaster.intersectObjects(this.pickables, false);
    if (!hits.length) return;
    const obj = hits[0].object;
    const kind = obj.userData.kind;
    const S = this.sound;
    if (kind === 'handle' || kind === 'door') {
      if (this.state === 'outside') this.openDoor();
      else if (this.state !== 'opening' && this.state !== 'boarding') { this.car.handlePull = 0.6; S.click(0.6, 2000); }
    } else if (kind === 'carBody') {
      // 車体をさわると、ぷにっと揺れて、ドアノブに光が走る
      this.car.heaveV += 0.35;
      S.bonk(420);
      if (this.state === 'outside') this.headT = 0;
    } else if (kind === 'headlight') {
      this.blinkHeadlights(1);
    } else if (kind === 'wiper') {
      if (this.car.wiperT < 0) { this.car.wiperT = 0; S.doorOpen(); }
    } else if (kind === 'whiteHandle') {
      // パパの車：鍵がかかっていて動かない
      this.family.shake = 0.35;
      S.lockedRattle();
      this.after(0.3, () => { this.family.lockBlink(1); S.beepLock(); });
      if (this.state === 'outside') {
        this.child.lookAt(this.headOf(this.papa));
        this.childHold = 1.6;
        this.headT = 0;
        this.papa.lookAt(this.headOf(this.child));
        this.papa.setExpr('laugh', 1.2);
        this.after(0.2, () => S.papaLaugh());
      }
    } else if (kind === 'whiteCar') {
      this.family.lockBlink(1);
      S.beepLock();
    } else if (kind === 'child') {
      this.child.setExpr('laugh', 1.2);
      S.pop(900);
      if (this.state === 'outside') {
        this.child.lookAt(this.camera.position.clone());
        this.child.do('wave', 1.2);
        this.childHold = 1.3;
        this.headT = 0; // そのあとドアノブを見る
      }
    } else if (kind === 'papa') {
      this.papa.setExpr('laugh', 1.2);
      if (this.papa.pose === 'stand') this.papa.do('wave', 1.4);
      S.papaLaugh();
    } else if (kind === 'mama') {
      this.mama.do('wave', 1.6);
      this.mama.setExpr('laugh', 1.2);
      S.mamaYay();
    } else if (kind === 'staff') {
      this.staff.do('wave', 1.4);
      S.click(0.5, 1800);
    } else if (kind === 'duck') {
      S.quack();
      this.signal.flapDucks();
    } else if (kind === 'flower') {
      const f = obj.userData.flowers ? obj.userData.flowers[hits[0].instanceId] : null;
      if (f && f.open > 0.5) { f.bounce = 1; S.pop(1200); }
    } else if (kind === 'signal') {
      S.click(0.4, 1200);
    }
  }

  // ---------------------------------------------------------------- 第一幕
  openDoor() {
    this.state = 'opening';
    this.t = 0;
    this.flags.introDone = true;
    const k = this.introKeys();
    const last = k[k.length - 1];
    this.rig.setFixed(last.pos, last.look, last.fov, 0.5);
    this.child.lookAt(this.car.handle.getWorldPosition(V()));
    this.child.do('reach', 0.9);
    this.after(0.12, () => {
      this.sound.click(1, 2600);
      this.tween(0.25, (u) => { this.car.handlePull = u; });
    });
    this.after(0.34, () => {
      this.sound.latch();
      this.tween(0.22, (u) => { this.car.latch = u; });
    });
    this.after(0.6, () => {
      this.sound.doorOpen();
      this.tween(0.7, (u) => { this.car.doorOpen = u * u * (3 - 2 * u); });
    });
    this.after(0.9, () => this.tween(0.3, (u) => { this.car.handlePull = 1 - u; this.car.latch = 1 - u; }));
    this.after(1.25, () => this.board());
  }

  board() {
    this.state = 'boarding';
    this.t = 0;
    const car = this.car;
    const ch = this.child;
    // 子供が運転席へ
    const seatW = car.body.localToWorld(V(-0.29, 0.6, -0.2));
    const start = ch.root.position.clone();
    const h0 = ch.root.rotation.y;
    ch.lookAt(null);
    this.tween(1.1, (u) => {
      const e = u * u * (3 - 2 * u);
      ch.root.position.lerpVectors(start, seatW, e);
      ch.root.position.y += Math.sin(u * Math.PI) * 0.45;
      ch.root.rotation.y = h0 + (car.h - h0) * e;
      ch.pose = u > 0.55 ? 'sit' : 'walk';
    }, () => {
      car.body.attach(ch.root);
      ch.root.position.set(-0.29, 0.6, -0.2);
      ch.root.rotation.set(0, 0, 0);
      ch.pose = 'drive';
      this.sound.thunk(0.5);
    });
    this.after(1.2, () => this.tween(0.42, (u) => { car.doorOpen = 1 - u * u; }));
    this.after(1.55, () => this.sound.doorClose());
    // パパは車の後ろを回って助手席へ（運転はしない）
    const pa = this.papa;
    if (this.papaWalk) { this.papaWalk.dead = true; this.papaWalk = null; }
    pa.lookAt(null);
    this.walk(pa, [pa.root.position.clone(), V(-1.8, 0, 1.3), V(1.7, 0, 1.5), V(1.6, 0, 3.7)], 2.6, () => {
      const seatP = car.body.localToWorld(V(0.29, 0.47, -0.22));
      const s0 = pa.root.position.clone();
      const r0 = pa.root.rotation.y;
      this.tween(0.6, (u) => {
        const e = u * u * (3 - 2 * u);
        pa.root.position.lerpVectors(s0, seatP, e);
        pa.root.position.y += Math.sin(u * Math.PI) * 0.35;
        pa.root.rotation.y = r0 + (car.h - r0) * e;
        pa.pose = u > 0.5 ? 'sit' : 'walk';
      }, () => {
        car.body.attach(pa.root);
        pa.root.position.set(0.29, 0.47, -0.22);
        pa.root.rotation.set(0, 0, 0);
        pa.pose = 'sit';
        this.sound.thunk(0.7);
        car.heaveV -= 0.6;
        pa.setExpr('smile');
        this.papaLook = 'wheel';
      });
    });
    this.after(0.35, () => this.rig.setFollow(this.follow.wheel, 2.6));
    this.after(1.4, () => { this.cockpit.target.dash = 1; });
    this.after(2.0, () => { this.cockpit.target.wheel = 1; this.cockpit.target.meter = 1; });
    this.after(2.7, () => {
      this.cockpit.enabled.wheel = true;
      this.cockpit.setGlint('wheel', 'wheel', 1.1);
      this.state = 'steer';
      this.t = 0;
    });
  }

  walk(p, pts, speed, done) {
    let seg = 0, d = 0;
    const lens = [];
    for (let i = 0; i < pts.length - 1; i++) lens.push(pts[i].distanceTo(pts[i + 1]));
    const tw = {
      t: 0,
      dur: 1e9,
      fn: (u, dt) => {
        d += speed * dt;
        while (seg < lens.length && d > lens[seg]) { d -= lens[seg]; seg++; }
        if (seg >= lens.length) return true;
        const a = pts[seg], b = pts[seg + 1];
        p.root.position.lerpVectors(a, b, d / lens[seg]);
        const yaw = Math.atan2(b.x - a.x, b.z - a.z);
        let dy = yaw - p.root.rotation.y;
        dy = Math.atan2(Math.sin(dy), Math.cos(dy));
        p.root.rotation.y += dy * Math.min(1, dt * 10);
        p.pose = 'walk';
        return false;
      },
      done,
    };
    this.tweens.push(tw);
    return tw;
  }

  // ---------------------------------------------------------------- 第二幕：ペダルの出現と電源
  revealPedals() {
    if (this.flags.pedals) return;
    this.flags.pedals = true;
    const ck = this.cockpit;
    ck.target.pedals = 1;
    this.after(0.9, () => {
      ck.enabled.pedals = true;
      this.power = true;
      ck.power = true;
      ck.sweep = 0; // 電源が入ると針が一往復する
      this.sound.chime(true);
      this.car.headOn = 1;
      this.after(1.0, () => { this.car.headOn = 0; });
      ck.setGlint('pedals', 'accel', 0.9);
      this.papaLook = 'pedals';
      this.after(2.2, () => { if (this.papaLook === 'pedals') this.papaLook = 'child'; });
    });
  }

  revealLever() {
    if (this.flags.lever) return;
    this.flags.lever = true;
    const ck = this.cockpit;
    ck.target.lever = 1;
    this.after(0.8, () => {
      ck.enabled.lever = true;
      ck.setGlint('lever', 'lever', 1.0);
      this.papaLook = 'leverGlance';
      this.after(1.6, () => { if (this.papaLook === 'leverGlance') this.papaLook = null; });
    });
  }

  // ---------------------------------------------------------------- お城
  startCastleCine() {
    this.cine = true;
    this.cockpit.cineHide = true;
    const car = this.car;
    // 少しのずれは穏やかに吸収：プレートの皿に沿って中心へ
    const x0 = car.x, z0 = car.z, h0 = car.h;
    const ht = Math.cos(h0) >= 0 ? 0 : Math.PI;
    let dh = ht - h0;
    dh = Math.atan2(Math.sin(dh), Math.cos(dh));
    car.lockedOnPlate = true;
    this.cockpit.notch = 0;
    this.tween(1.2, (u) => {
      const e = u * u * (3 - 2 * u);
      car.x = x0 + (PLATE.x - x0) * e;
      car.z = z0 + (PLATE.z - z0) * e;
      car.h = h0 + dh * e;
    });
    // パパの顔（プレートが沈んだあとの位置）。隣の子供も一緒に映す
    const fwd = V(Math.sin(ht), 0, Math.cos(ht));
    const side = V(Math.cos(ht), 0, -Math.sin(ht));
    const plateC = V(PLATE.x, -0.22, PLATE.z);
    const papaHead = plateC.clone().add(side.clone().multiplyScalar(0.29)).add(fwd.clone().multiplyScalar(-0.2)).add(V(0, 1.2, 0));
    const childHead = plateC.clone().add(side.clone().multiplyScalar(-0.29)).add(fwd.clone().multiplyScalar(-0.2)).add(V(0, 1.0, 0));
    const faceLook = papaHead.clone().multiplyScalar(0.65).add(childHead.clone().multiplyScalar(0.35));
    const papaCam = faceLook.clone().add(fwd.clone().multiplyScalar(2.4)).add(side.clone().multiplyScalar(0.6)).add(V(0, 0.35, 0));
    const keys = [
      { t: 0.0, pos: V(57.2, 2.8, 121.8), look: V(54, -0.1, 127.6), fov: 50 },
      { t: 1.4, pos: V(55.4, 1.45, 127.4), look: V(54, -0.25, 132.2), fov: 50 },
      { t: 2.6, pos: V(55.0, 1.35, 131.6), look: V(51.4, 0.0, 135.6), fov: 50 },
      { t: 3.7, pos: V(52.8, 2.6, 130.0), look: V(51.0, 2.3, 136.6), fov: 50 },
      { t: 5.0, pos: V(54.4, 3.2, 126.6), look: V(54, 2.6, 137.6), fov: 52 },
      { t: 7.2, pos: V(54.0, 12.5, 125.0), look: V(54, 0.5, 150), fov: 54 },
      { t: 8.6, pos: V(54.5, 11.5, 126.0), look: V(52, 0.8, 152), fov: 54 },
      { t: 9.2, pos: V(57.0, 4.0, 117.5), look: V(70.5, 1.0, 124.5), fov: 52 },
      { t: 10.6, pos: papaCam, look: faceLook, fov: 40 },
      { t: 11.5, pos: papaCam, look: faceLook, fov: 40 },
    ];
    // 最後は車の横を回って、いつもの後ろからの視点へ戻る（車を突き抜けない）
    const fp = this.follow.chase;
    const back = V(0, Math.sin(fp.el) * fp.dist, -Math.cos(fp.el) * fp.dist);
    const toWorld = (v) => V(PLATE.x, 0, PLATE.z).add(side.clone().multiplyScalar(v.x)).add(V(0, v.y, 0)).add(fwd.clone().multiplyScalar(v.z));
    keys.push({ t: 12.3, pos: toWorld(V(3.4, 1.6, -0.6)), look: toWorld(V(0, 0.8, 0.6)), fov: 46 });
    keys.push({ t: 13.0, pos: toWorld(back), look: toWorld(V(0, fp.look.y, fp.ahead)), fov: fp.fov });
    this.rig.setCine(keys, 1.0);
  }

  endCastleCine() {
    this.cine = false;
    this.cockpit.cineHide = false;
    this.rig.setFollow(this.follow.chase, 1.0);
  }

  handleCastleEvents(evs) {
    const S = this.sound;
    for (const e of evs) {
      switch (e) {
        case 'trigger':
          this.state = 'castle';
          this.startCastleCine();
          this.papaLook = 'plate';
          this.papa.setExpr('surprised', 2);
          S.papaWow();
          break;
        case 'celebrate':
          this.papaLook = 'gate';
          S.papaNod();
          break;
        case 'sink': S.sink(); this.car.heaveV -= 0.4; break;
        case 'cable': S.cable(1.8); this.papaLook = 'gears'; break;
        case 'gears': break;
        case 'gearTick': S.gearTick(); break;
        case 'unlock': S.lockRelease(); break;
        case 'doors': S.creak(4.2); this.papaLook = 'gate'; break;
        case 'reveal':
          S.sparkle();
          this.course.openCastle();
          break;
        case 'bells': S.bells(); this.castle.bellSwing = 1; break;
        case 'cheer':
          S.crowdCheer(7, 1.4);
          S.claps(10, 0.8);
          S.fanfareChord();
          this.papa.setExpr('wow', 6);
          this.child.setExpr('laugh', 6);
          this.after(0.4, () => S.papaWow());
          this.mama.do('cheer', 3);
          break;
        case 'drawbridge': S.chain(3.2); this.papaLook = 'drawbridge'; break;
        case 'release':
          this.car.lockedOnPlate = false;
          if (this.cine) this.endCastleCine();
          this.papa.setExpr('laugh', 2.0);
          this.papa.do('clap', 2.0);
          S.papaLaugh();
          this.after(0.7, () => S.claps(6, 0.7));
          this.papaLook = 'child';
          this.after(2.5, () => { if (this.papaLook === 'child') this.papaLook = null; });
          if (this.state === 'castle') this.state = 'free';
          break;
        case 'bridgeDown':
          this.course.openShopRoad();
          this.world.boomTarget = 1;
          S.thunk(1);
          break;
        case 'burst':
          S.splash(); S.sparkle(); S.bells(); this.castle.bellSwing = 0.6;
          this.papa.setExpr('laugh', 1.5); S.papaLaugh();
          break;
        case 'shop':
          S.thunk(0.6);
          this.after(0.3, () => S.cable(1.4));
          this.after(1.6, () => { S.sparkle(); this.papa.setExpr('wow', 2); S.papaWow(); this.papaLook = 'shop'; });
          this.after(4.5, () => { S.claps(6, 0.7); this.papa.setExpr('laugh', 1.5); this.papa.do('clap', 1.5); });
          this.after(6, () => { if (this.papaLook === 'shop') this.papaLook = null; });
          break;
        case 'gumball': S.pop(700 + Math.random() * 600); break;
      }
    }
  }

  // ---------------------------------------------------------------- 毎フレーム
  update(dt) {
    this.time += dt;
    this.t += dt;
    const ck = this.cockpit;
    const car = this.car;
    const S = this.sound;

    // タイマー（途中で追加・取り消しされても安全なように、写しを回す）
    for (const tw of this.tweens.slice()) {
      if (tw.dead) continue;
      tw.t += dt;
      if (tw.at !== undefined) {
        if (tw.t >= tw.at) { tw.dead = true; tw.fn(); }
      } else {
        const u = Math.min(1, tw.t / tw.dur);
        const fin = tw.fn(u, dt);
        if (u >= 1 || fin === true) { tw.dead = true; if (tw.done) tw.done(); }
      }
    }
    this.tweens = this.tweens.filter((tw) => !tw.dead);

    // 操作イベント
    for (const e of ck.events) this.onCockpit(e);
    ck.events.length = 0;

    // 状態ごとの処理
    if (this.state === 'outside') {
      // ドアノブのきらめき（金属に光が走る）
      const hp = car.handle.getWorldPosition(V());
      const ph = (this.time % 3.0) / 3.0;
      this.handleLight.position.set(hp.x - 0.35, hp.y + 0.25, hp.z - 0.5 + ph * 1.0);
      this.handleLight.intensity = Math.sin(ph * Math.PI) * 1.6;
      // ときどきドアノブが「カチ」と小さく揺れる（引けそうに見える）
      const wig = (this.time % 4.5) - 3.6;
      car.handlePull = wig > 0 && wig < 0.5 ? Math.sin((wig / 0.5) * Math.PI) * 0.18 : 0;
      // 子供の視線：ドアノブ → パパ → 白い車 → ドアノブ
      if (this.childHold > 0) this.childHold -= dt;
      else {
        this.headT += dt;
        const cyc = this.headT % 9;
        if (cyc < 4) this.child.lookAt(hp);
        else if (cyc < 5.5) this.child.lookAt(this.headOf(this.papa));
        else if (cyc < 7) this.child.lookAt(V(-7.6, 1.6, 1.6));
        else this.child.lookAt(hp);
      }
      if (this.t > 3.5 && !this.flags.introDone) this.flags.introDone = true;
    } else if (this.castle.state !== 'closed' || !this.power || car.z <= 100) {
      this.handleLight.intensity = 0;
    }

    if (this.state === 'steer') {
      if (ck.wheelHeld && this.firstTouchT < 0) this.firstTouchT = this.t;
      const rate = ck.steerRate;
      if (ck.wheelHeld) {
        this.steerTravel += Math.abs(rate) * dt;
        const dir = Math.abs(rate) > 0.4 ? Math.sign(rate) : 0;
        if (dir && dir !== this.lastSteerDir) {
          if (this.lastSteerDir !== 0) this.steerReversals++;
          this.lastSteerDir = dir;
        }
        this.idleT = 0;
      } else this.idleT += dt;
      if (this.idleT > 7 && !this.flags.hinted) {
        // パパは手を出さない。ハンドルを見て、子供の顔を見るだけ
        this.flags.hinted = true;
        this.papaLook = 'wheel';
        this.papa.setExpr('smile');
        this.after(1.8, () => { this.papaLook = 'child'; });
        this.after(3.4, () => { this.papaLook = 'wheel'; this.flags.hinted = false; this.idleT = 0; });
      }
      const ready = (this.steerTravel > 4 && this.steerReversals >= 2) ||
        (this.firstTouchT >= 0 && this.t - this.firstTouchT > 14) || this.t > 24;
      if (ready && !ck.wheelHeld) {
        ck.setGlint(null);
        this.revealPedals();
        this.state = 'drive';
        this.t = 0;
      }
    }

    if (this.castle.state === 'closed' && this.power && car.z > 100) {
      const ph = (this.time % 3.4) / 3.4;
      this.plateLight.distance = 4;
      this.plateLight.position.set(PLATE.x - 1.8 + ph * 3.6, 0.9, PLATE.z - 0.4);
      this.plateLight.intensity = Math.sin(ph * Math.PI) * 5;
    }

    // 車への入力
    const input = { steer: 0, target: 0, brake: false, wheelAngle: ck.wheelAngle };
    if (ck.enabled.wheel) input.steer = ck.steerNorm();
    if (this.power && ck.enabled.pedals) {
      input.target = ck.targetSpeed();
      input.brake = ck.brakeHeld;
    }
    const impact = car.update(dt, input);
    if (impact > 0.4) {
      S.boing(Math.min(1, impact / 2));
      this.rig.shake = Math.min(1, impact * 0.5);
      this.papa.setExpr('surprised', 0.6);
      S.papaOops();
      this.papa.lean += (Math.random() - 0.5) * 0.3;
      this.after(0.7, () => { this.papa.setExpr('laugh', 1.2); S.papaLaugh(); });
      this.child.setExpr('laugh', 1.5);
    }
    car.brakeLight = ck.brakeHeld ? 1 : 0;
    car.updateVisual(dt, this.time);

    // ウインカー：メーターの矢印と車外のランプが同じリズムで点滅
    if (ck.signal !== 0) {
      this.blinkT += dt;
      const on = (this.blinkT % 0.8) < 0.42;
      if (on !== this.blinkOn) S.tick(on);
      this.blinkOn = on;
    } else {
      this.blinkT = 0;
      this.blinkOn = false;
    }
    ck.blinkOn = this.blinkOn;
    car.blinkL = ck.signal === 1 && this.blinkOn;
    car.blinkR = ck.signal === -1 && this.blinkOn;

    // 音：モーター、転がり、タイヤの擦れ
    const throttle = ck.accelHeld ? 1 : ck.notch > 0 ? 0.35 : 0;
    S.setMotor(this.power, Math.abs(car.v), throttle * (car.lockedOnPlate ? 1.4 : 1), car.load * 4 + (car.pushing > 0 ? 0.6 : 0));
    const onBridge = Math.abs(car.x - BRIDGE.x) < 3 && car.z > BRIDGE.z0 && car.z < BRIDGE.z1;
    S.setRolling(Math.abs(car.v), onBridge);
    const slow = 1 - Math.min(1, Math.abs(car.v) / 1.2);
    S.setScrub(Math.min(1, Math.abs(ck.steerRate) * 0.22) * (0.25 + slow * 0.75) * (ck.enabled.wheel ? 1 : 0));
    if (onBridge) {
      this.bridgeDist += Math.abs(car.v) * dt;
      if (this.bridgeDist > 0.6) { this.bridgeDist = 0; S.bonk(120 + Math.random() * 20); }
    }

    // 走行中の出来事
    const moving = Math.abs(car.v) > 0.05;
    if (this.power) {
      if (moving && !this.flags.moved) {
        this.flags.moved = true;
        // 初めて動いた：カメラは前輪の横から、車の後ろへ回り込む
        this.rig.setFollow(this.follow.chase, 2.4);
        ck.setGlint(null);
        this.papa.do('grip', 2.5);
        this.papa.setExpr('wow', 1.8);
        S.papaWow();
        this.child.setExpr('laugh', 2);
        this.after(1.0, () => { this.mama.do('cheer', 2.2); S.mamaYay(); });
        this.after(1.6, () => this.staff.do('wave', 2));
      }
      // 停止線で止まれた
      if (this.wasMoving && !moving && car.lockedOnPlate === false) {
        const front = car.z + Math.cos(car.h) * 1.2;
        if (Math.abs(car.x - STOP_LINE_1.x) < 3 && front > STOP_LINE_1.z - 3.5 && front < STOP_LINE_1.z + 1.5 && this.stopRewardCount < 2) {
          this.stopRewardCount++;
          this.papa.do('clap', 1.3);
          this.papa.setExpr('smile');
          S.papaNod();
          this.after(0.3, () => S.claps(4, 0.6));
          this.papaLook = 'child';
          this.after(1.6, () => { if (this.papaLook === 'child') this.papaLook = null; });
        }
        // 赤信号で止まれた → ウインカーのレバーが出てくる
        if (this.signal.state === 'red' && car.x < SIGNAL.stopX + 0.6 && car.x > SIGNAL.stopX - 14 && Math.abs(car.z - SIGNAL.z) < 4) {
          this.papa.setExpr('smile');
          S.papaNod();
          this.papaLook = 'child';
          this.after(1.2, () => { this.papaLook = 'signal'; });
          this.after(1.5, () => this.revealLever());
        }
      }
      this.wasMoving = moving;
      // 予備：信号で止まらずに橋まで来たら、ここでレバーを出す
      if (!this.flags.lever && car.z > 56 && car.x > 48) this.revealLever();
      // 止まって何もしないとき：アクセルが光る
      if (!moving && ck.notch === 0 && !ck.brakeHeld && !car.lockedOnPlate) {
        this.stillT += dt;
        if (this.stillT > 6 && !ck.glintTarget) ck.setGlint('pedals', 'accel', 0.9);
      } else {
        this.stillT = 0;
        if (moving && ck.glintTarget && ck.glintTarget.k === 'pedals' && this.flags.moved) ck.setGlint(null);
      }
      if (ck.glintTarget && ck.glintTarget.k === 'lever' && ck.signal !== 0) ck.setGlint(null);
      // 橋のてっぺん：お城が見える
      if (!this.flags.crest && car.z > 77 && Math.abs(car.x - BRIDGE.x) < 3) {
        this.flags.crest = true;
        this.papa.do('point', 2.2);
        this.papa.setExpr('wow', 2.2);
        S.papaWow();
        this.papaLook = 'castle';
        this.after(3.5, () => { if (this.papaLook === 'castle') this.papaLook = null; });
      }
      if (!this.flags.plaza && car.z > 113 && car.x > 40 && car.x < 68) {
        this.flags.plaza = true;
        this.papaLook = 'plate';
        this.after(3.5, () => { if (this.papaLook === 'plate') this.papaLook = 'gate'; });
        this.after(6, () => { if (this.papaLook === 'gate') this.papaLook = null; });
      }
      // ママ：車が近くを通ると手を振る
      this.mamaCool -= dt;
      const md = Math.hypot(car.x - this.mama.root.position.x, car.z - this.mama.root.position.z);
      if (md < 11 && this.mamaCool <= 0 && moving && this.flags.moved && this.time > 20) {
        this.mamaCool = 25;
        this.mama.do('wave', 2.5);
        S.mamaYay();
      }
      this.staffCool -= dt;
      const sd = Math.hypot(car.x - this.staff.root.position.x, car.z - this.staff.root.position.z);
      if (sd < 8 && this.staffCool <= 0 && moving && this.time > 20) { this.staffCool = 30; this.staff.do('wave', 2); }
    }

    // 信号とお城
    this.signal.update(dt, car);
    if (this.signal.state === 'red' && this.prevSignal !== 'red' && this.power) {
      this.papaLook = 'signal';
      this.after(3, () => { if (this.papaLook === 'signal') this.papaLook = null; });
    }
    this.prevSignal = this.signal.state;
    const evs = this.castle.update(dt, this.time, car);
    this.handleCastleEvents(evs);
    S.setFountain(Math.min(1, this.castle.fountain) * Math.max(0, 1 - this.castle.fountainPos.distanceTo(V(car.x, 0, car.z)) / 45));
    const cd = Math.hypot(car.x - 45.5, car.z - 156.5);
    S.setMusic(Math.min(1, this.castle.carouselSpeed * 2) * Math.max(0, 1 - cd / 50));
    S.update(dt, this.castle.carouselSpeed > 0.05);

    this.updatePeople(dt);
    this.family.update(dt);
    this.world.update(dt, this.time, V(car.x, car.y, car.z));
    this.rig.update(dt);
  }

  onCockpit(e) {
    const S = this.sound;
    if (e.type === 'horn') {
      this.signal.flapDucks();
      if (this.signal.duckT > 0) S.quack();
      this.papa.setExpr('laugh', 1);
      if (Math.random() < 0.5) this.after(0.3, () => S.papaLaugh());
      const md = Math.hypot(this.car.x - this.mama.root.position.x, this.car.z - this.mama.root.position.z);
      if (md < 25) this.after(0.4, () => { this.mama.do('wave', 2); });
    } else if (e.type === 'notch' && e.value === 3 && !this.flags.fast) {
      this.flags.fast = true;
      this.after(1.5, () => { this.papa.setExpr('wow', 1.5); S.papaYeah(); });
    } else if (e.type === 'signal' && e.value !== 0 && !this.flags.signalUsed) {
      this.flags.signalUsed = true;
      this.papa.setExpr('smile');
      S.papaNod();
    } else if (e.type === 'touch' && e.what === 'wheel') {
      this.child.setExpr('smile');
    }
  }

  updatePeople(dt) {
    const car = this.car;
    const pa = this.papa;
    // パパの視線：運転は奪わない。見守って、驚いて、笑う
    if (pa.pose === 'sit') {
      let target = null;
      const fwd = V(Math.sin(car.h), 0, Math.cos(car.h));
      const ahead = V(car.x, 1.2, car.z).add(fwd.clone().multiplyScalar(10));
      this.papaGlanceT -= dt;
      switch (this.papaLook) {
        case 'wheel': target = car.miniWheel.getWorldPosition(V()); break;
        case 'pedals': target = car.body.localToWorld(V(-0.29, 0.25, 0.35)); break;
        case 'leverGlance': target = car.body.localToWorld(V(-0.15, 0.6, 0.05)); break;
        case 'child': target = this.headOf(this.child); break;
        case 'signal': target = V(SIGNAL.stopX + 3, 4.5, SIGNAL.z - 1.4); break;
        case 'castle': target = V(54, 14, 168); break;
        case 'plate': target = V(PLATE.x, 0, PLATE.z + 1.5); break;
        case 'gate': target = V(54, 2.5, 137); break;
        case 'gears': target = V(48.9, 1.8, 136.4); break;
        case 'drawbridge': target = V(70, 2, 124); break;
        case 'shop': target = V(96, 1.5, 162); break;
        default:
          if (this.papaGlanceT < 0) {
            target = this.headOf(this.child);
            if (this.papaGlanceT < -1.3) this.papaGlanceT = 5 + Math.random() * 4;
          } else target = ahead;
      }
      if (this.state === 'steer' && this.papaLook === 'wheel' && this.t > 5 && Math.random() < dt * 0.15) this.papaLook = 'child';
      pa.lookAt(target);
      // カーブで体が外へ揺れる
      const lat = car.v * car.v / 1.5 * Math.tan(car.steer);
      pa.lean += (-lat * 0.06 - pa.lean) * Math.min(1, dt * 4);
      this.child.lean += (-lat * 0.04 - this.child.lean) * Math.min(1, dt * 4);
      // 大きくハンドルを回すと面白がる
      if (this.state === 'steer' && Math.abs(this.cockpit.steerRate) > 3 && Math.random() < dt * 1.5 && pa.expr === 'smile') {
        pa.setExpr('laugh', 0.8);
      }
    }
    if (this.child.pose === 'drive') {
      this.child.steer = this.cockpit.steerNorm();
      const fwd = V(Math.sin(car.h + car.steer * 0.8), 0, Math.cos(car.h + car.steer * 0.8));
      this.child.lookAt(V(car.x, 1.0, car.z).add(fwd.multiplyScalar(8)));
    }
    // ママはコースの外から見守る
    if (this.state !== 'outside' && this.state !== 'opening') {
      this.mama.lookAt(V(car.x, 1, car.z));
      this.staff.lookAt(V(car.x, 1, car.z));
    } else {
      this.mama.lookAt(this.headOf(this.child));
      this.staff.lookAt(V(car.x, 0.8, car.z));
    }
    for (const p of [this.child, this.papa, this.mama, this.staff]) p.update(dt, this.time);
  }
}
