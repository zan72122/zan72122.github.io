// 横型の信号機、柔らかいバー、横断するアヒルの親子
import * as THREE from '../vendor/three.module.min.js';
import { RoundedBoxGeometry } from '../vendor/addons/RoundedBoxGeometry.js';
import { stripeTexture } from './textures.js';
import { SIGNAL, ROAD_HW } from './course.js';

export class TrafficSignal {
  constructor(scene, course, sound) {
    this.course = course;
    this.sound = sound;
    this.state = 'green';
    this.timer = 0;
    this.redTime = 0;
    this.stoppedTime = 0;
    this.cooldown = 0;
    this.passes = 0;
    this.pickables = [];
    const g = new THREE.Group();
    this.group = g;
    scene.add(g);

    const pole = new THREE.MeshStandardMaterial({ color: 0xb8bec6, metalness: 0.6, roughness: 0.35 });
    const housing = new THREE.MeshStandardMaterial({ color: 0x3b4048, roughness: 0.5, metalness: 0.3 });
    const zL = SIGNAL.z - ROAD_HW - 0.9; // 道路の左側（進行方向 +X に対して左は -Z）
    const px = SIGNAL.stopX + 3.2;
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 5, 12), pole);
    p.position.set(px, 2.5, zL);
    p.castShadow = true;
    g.add(p);
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 3.6, 10), pole);
    arm.rotation.x = Math.PI / 2;
    arm.position.set(px, 4.7, zL + 1.8);
    g.add(arm);
    const box = new THREE.Mesh(new RoundedBoxGeometry(0.5, 0.6, 1.8, 3, 0.12), housing);
    box.position.set(px, 4.5, SIGNAL.z - 1.4);
    box.castShadow = true;
    g.add(box);
    // 左から 青・黄・赤（運転者から見て）
    const cols = [0x10d0a0, 0xffc21a, 0xff2a2a];
    this.lamps = [];
    for (let i = 0; i < 3; i++) {
      const m = new THREE.MeshStandardMaterial({ color: 0x222222, emissive: cols[i], emissiveIntensity: 0.05, roughness: 0.2 });
      const lamp = new THREE.Mesh(new THREE.CircleGeometry(0.2, 24), m);
      lamp.rotation.y = -Math.PI / 2;
      lamp.position.set(px - 0.26, 4.5, SIGNAL.z - 1.4 - 0.55 + i * 0.55);
      g.add(lamp);
      const visor = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.22, 16, 1, true, 0, Math.PI), housing);
      visor.material = housing.clone();
      visor.material.side = THREE.DoubleSide;
      visor.rotation.z = Math.PI / 2;
      visor.rotation.y = 0;
      visor.position.set(px - 0.36, 4.52, lamp.position.z);
      g.add(visor);
      this.lamps.push(m);
      lamp.userData.kind = 'signal';
      this.pickables.push(lamp);
    }

    // 柔らかいバー（赤の間だけ下りる。ぶつかっても跳ね返るだけ）
    const bx = SIGNAL.stopX + 4.0;
    const post = new THREE.Mesh(new RoundedBoxGeometry(0.35, 1.0, 0.35, 2, 0.08), new THREE.MeshStandardMaterial({ color: 0xffcc1a, roughness: 0.5 }));
    post.position.set(bx, 0.5, SIGNAL.z + ROAD_HW + 0.6);
    post.castShadow = true;
    g.add(post);
    this.bar = new THREE.Group();
    this.bar.position.set(bx, 0.85, SIGNAL.z + ROAD_HW + 0.6);
    g.add(this.bar);
    const foam = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, ROAD_HW * 2 + 0.8, 12), new THREE.MeshStandardMaterial({ map: stripeTexture('#ff3b4a', '#ffffff', 2), roughness: 0.6 }));
    foam.material.map.repeat.set(1, 1);
    foam.rotation.x = Math.PI / 2;
    foam.position.z = -(ROAD_HW + 0.4);
    foam.castShadow = true;
    this.bar.add(foam);
    this.barDown = 0;

    // アヒルの親子（赤のあいだ横断歩道を渡る）
    this.ducks = [];
    const yellow = new THREE.MeshStandardMaterial({ color: 0xffd84a, roughness: 0.6 });
    const whiteM = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 });
    const orange = new THREE.MeshStandardMaterial({ color: 0xff8a1f, roughness: 0.5 });
    const black = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.3 });
    for (let i = 0; i < 4; i++) {
      const s = i === 0 ? 1.6 : 1;
      const d = new THREE.Group();
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.16, 14, 10), i === 0 ? whiteM : yellow);
      body.scale.set(1, 0.85, 1.3);
      body.position.y = 0.16;
      body.castShadow = true;
      d.add(body);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 10), i === 0 ? whiteM : yellow);
      head.position.set(0, 0.34, 0.14);
      d.add(head);
      const beak = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.1, 8), orange);
      beak.rotation.x = Math.PI / 2;
      beak.position.set(0, 0.32, 0.26);
      d.add(beak);
      for (const sx of [-1, 1]) {
        const e = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 6), black);
        e.position.set(sx * 0.055, 0.37, 0.22);
        d.add(e);
      }
      const wings = [];
      for (const sx of [-1, 1]) {
        const w = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), i === 0 ? whiteM : yellow);
        w.scale.set(0.3, 0.6, 1);
        w.position.set(sx * 0.15, 0.2, -0.02);
        d.add(w);
        wings.push(w);
      }
      d.scale.setScalar(s);
      d.visible = false;
      scene.add(d);
      body.userData.kind = 'duck';
      this.pickables.push(body);
      this.ducks.push({ g: d, wings, hop: 0, flap: 0, idx: i });
    }
    this.duckT = -1;
  }

  setLamp(i) {
    const cols = [0x10d0a0, 0xffc21a, 0xff2a2a];
    this.lamps.forEach((m, k) => { m.emissiveIntensity = k === i ? 3.2 : 0.05; });
    void cols;
  }

  flapDucks() {
    for (const d of this.ducks) { d.flap = 0.8; d.hop = 0.5; }
  }

  // car: { x, z, h, v }
  update(dt, car) {
    this.cooldown -= dt;
    const approaching = car.x > SIGNAL.stopX - 16 && car.x < SIGNAL.stopX - 7 && Math.abs(car.z - SIGNAL.z) < 4 && Math.sin(car.h) > 0.5;
    const beforeLine = car.x < SIGNAL.stopX + 0.5;
    if (this.state === 'green') {
      this.setLamp(0);
      if (approaching && this.cooldown <= 0 && car.v > 0.2) {
        this.state = 'yellow';
        this.timer = 0;
      }
    } else if (this.state === 'yellow') {
      this.setLamp(1);
      this.timer += dt;
      if (this.timer > 1.6) {
        this.state = 'red';
        this.timer = 0;
        this.redTime = 0;
        this.stoppedTime = 0;
        this.duckT = 0;
        this.sound.chime(false);
      }
    } else if (this.state === 'red') {
      this.setLamp(2);
      this.redTime += dt;
      const near = car.x > SIGNAL.stopX - 12 && car.x < SIGNAL.stopX + 4.5 && Math.abs(car.z - SIGNAL.z) < 4;
      if (near && car.v < 0.05) this.stoppedTime += dt;
      const ducksDone = this.duckT < 0 || this.duckT > 5.2;
      const passed = car.x > SIGNAL.stopX + 5 || Math.abs(car.z - SIGNAL.z) > 6;
      if (ducksDone && (this.stoppedTime > 2.2 || this.redTime > 16 || (passed && this.redTime > 3))) {
        this.state = 'green';
        this.cooldown = 25;
        this.passes++;
        this.sound.chime(true);
      }
    }
    // バー：赤のときだけ下りる。ただし車がバーの位置にいるときは下ろさない
    const carAtBar = Math.abs(car.x - (SIGNAL.stopX + 4)) < 1.6 && Math.abs(car.z - SIGNAL.z) < 4;
    const want = this.state === 'red' && !carAtBar && beforeLine ? 1 : this.state === 'red' && this.barDown > 0.5 ? 1 : 0;
    this.barDown += (want - this.barDown) * Math.min(1, dt * 2.2);
    this.bar.rotation.x = (1 - this.barDown) * 1.35;
    this.course.signalBar.enabled = this.barDown > 0.6;

    // アヒル
    if (this.duckT >= 0) {
      this.duckT += dt;
      const t = this.duckT;
      for (const d of this.ducks) {
        const lt = t - d.idx * 0.45;
        const u = Math.max(0, Math.min(1, lt / 4.2));
        d.g.visible = lt > 0 && u < 1;
        const z0 = SIGNAL.z - ROAD_HW - 1.5, z1 = SIGNAL.z + ROAD_HW + 1.8;
        d.g.position.set(SIGNAL.stopX + 2.2 + Math.sin(lt * 3) * 0.05, Math.abs(Math.sin(lt * 9)) * 0.03 + d.hop, z0 + (z1 - z0) * u);
        d.g.rotation.y = Math.sin(lt * 9) * 0.12;
        d.flap = Math.max(0, d.flap - dt);
        d.hop = Math.max(0, d.hop - dt * 1.6);
        for (const [k, w] of d.wings.entries()) w.rotation.z = (k ? -1 : 1) * Math.sin(lt * 30) * d.flap * 1.2;
      }
      if (t > 6.5) { this.duckT = -1; for (const d of this.ducks) d.g.visible = false; }
    }
  }
}
