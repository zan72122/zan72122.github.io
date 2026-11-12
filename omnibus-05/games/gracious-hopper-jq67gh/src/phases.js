// 各場面の振る舞い (Director に取り付ける)
import * as THREE from './vendor/three.module.min.js';
import { clamp, lerp, damp, smooth, smoothstep, easeInOutSine, easeOutCubic } from './core/util.js';
import { PLOT, TUB } from './world/garden.js';
import { VINE_PETAL, FLOOR_Y, RIM, PETAL_PHI } from './world/flower.js';
import { STEM_TOP, BUD_STEM, HELIX } from './world/plant.js';

const V3 = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const SPURTS = [6, 13, 23, 37, 56, STEM_TOP];
const SLIT_A = -54 * Math.PI / 180;

// 頭部ローカルのカメラ経路を補間
function pathLerp(keys, t) {
  // keys: [{t, p:[x,y,z], q:[x,y,z]}]
  if (t <= keys[0].t) return keys[0];
  for (let i = 0; i < keys.length - 1; i++) {
    const a = keys[i], b = keys[i + 1];
    if (t <= b.t) {
      const k = easeInOutSine((t - a.t) / (b.t - a.t));
      return { p: a.p.map((v, j) => lerp(v, b.p[j], k)), q: a.q.map((v, j) => lerp(v, b.q[j], k)) };
    }
  }
  return keys[keys.length - 1];
}

export const PHASES = {
  // ============================================================
  // 1. 種: 土のくぼみへ
  // ============================================================
  SEED: {
    enter() {
      const G = this.G;
      G.seed.enabled = true;
      G.seed.onPlanted = () => { if (this.phase === 'SEED') this.go('COVER'); };
      G.seed.onTouch = () => { G.child.lookAt = G.seed.pos; G.child.lookW = 1; };
      G.can.enabled = false;
      this.childToGarden();
      G.child.pos.set(-0.72, 0, 1.32);
      G.child.yaw = G.child.targetYaw = Math.atan2(G.seed.pos.x + 0.72, G.seed.pos.z - 1.32);
      G.child.lookAt = G.seed.pos; G.child.lookW = 1;
      G.rig.setShot((w) => this.shotSeed(w), true);
      this.audioS.music = 'garden';
    },
    update(dt) {
      const G = this.G, C = G.child, S = G.seed;
      const idle = this.idle;
      // きらり: 種が光を返す
      this.glintT = (this.glintT || 0) - dt;
      if (this.glintT < 0 && !S.held) {
        this.glintT = 2.4;
        this.sparkleAt(S.pos.clone().add(V3(0.02, 0.05, 0)), 3, 0.025);
      }
      // 子どもは種とくぼみを見比べる
      if (!S.held) {
        const look = (idle > 4 && Math.floor(this.t / 1.6) % 2 === 1) ? V3(0, 0.08, 0) : S.pos;
        C.lookAt = look; C.lookW = 1;
      }
      C.set('point', idle > 6 && idle < 14 && Math.floor(this.t / 2) % 2 === 0 ? 1 : 0);
      // しばらく何もなければ、種がころりと揺れる
      if (this.cue('seedWiggle', idle > 7 && !S.held, 9)) { S.vel.set(0, 0.9, 0); S.spinV = 10; G.audio.play('seedTap'); }
      // さらに待つと、子どもが種をくぼみの方へ転がしてみせる
      if (this.cue('childNudge', idle > 15 && !S.held, 13)) {
        C.walkTo(S.pos.x - 0.28, S.pos.z + 0.12, 0.8);
        G.later(() => {
          C.set('reach', 1);
          G.later(() => { C.set('reach', 0); if (!S.held && !S.planted) { S.hopToward(0, 0, 0.75); G.audio.play('seedTap'); } }, 450);
        }, 1400);
      }
      // ちょうちょが種にとまる
      G.butterfly.target = idle > 9 && !S.held ? S.pos.clone().add(V3(0, 0.04, 0)) : null;
    },
    exit() { this.G.butterfly.target = null; this.G.child.set('point', 0); },
  },

  // ============================================================
  // 2. 覆土: 土がさらさらとくぼみを埋める (たたくと早まる)
  // ============================================================
  COVER: {
    enter() {
      const G = this.G;
      this.cover = 0;
      G.seed.enabled = false;
      G.audio.play('plop');
      this.sparkleAt(V3(0, 0.12, 0), 10, 0.03);
      G.child.set('cheer', 1);
      this.G.later(() => G.child.set('cheer', 0), 900);
      G.child.lookAt = V3(0, 0.08, 0);
    },
    update(dt) {
      const G = this.G;
      this.coverBoost = Math.max(0, (this.coverBoost || 0) - dt * 0.6);
      this.cover += dt * (0.32 + this.coverBoost);
      const f = smooth(clamp(this.cover));
      G.garden.plot.mat.uniforms.uFill.value = f;
      G.seed.group.visible = f < 0.8;
      // 縁から土の粒がこぼれ落ちる
      this.crumbT = (this.crumbT || 0) - dt;
      if (this.crumbT < 0 && this.cover < 1) {
        this.crumbT = 0.06;
        const a = Math.random() * Math.PI * 2;
        const r = PLOT.hollowR * 1.1;
        G.particles.emit({ x: Math.cos(a) * r, y: 0.15, z: Math.sin(a) * r, vx: -Math.cos(a) * 0.25, vy: 0.1, vz: -Math.sin(a) * 0.25, life: 0.9, size: 0.012 + Math.random() * 0.01, color: [0.38, 0.26, 0.16], bounce: 0.1, ground: (px, pz) => G.garden.plot.soilHeight(px, pz) });
        if (Math.random() < 0.25) G.audio.play('soil', { vol: 0.5 });
      }
      if (this.cover > 1.2) this.go('WATER');
    },
  },

  // ============================================================
  // 3. 水やり: 注いだ水の分だけ育つ
  // ============================================================
  WATER: {
    enter() {
      const G = this.G;
      G.can.enabled = true;
      G.can.magnet = V3(0, 0, 0);
      G.can.onDrop = (p, gy) => this.onWaterDrop(p, gy);
      G.can.onTouch = () => { G.child.lookAt = G.can.pos.clone().add(V3(0, 0.2, 0)); };
      G.child.lookAt = G.can.pos.clone().add(V3(0, 0.2, 0)); G.child.lookW = 1;
      this.water = this.water || 0;
      this.stageSounds = {};
      G.rig.setShot((w) => this.shotWater(w));
    },
    update(dt) {
      const G = this.G, P = G.plant, F = G.flower, C = G.child;
      const w = this.water;
      const allowS = clamp(w / 0.6), allowY = clamp((w - 0.6) / 1.3), allowB = clamp((w - 1.9) / 1.6);
      P.sprout = Math.min(allowS, P.sprout + dt * 0.34);
      if (P.sprout >= 0.999) P.young = Math.min(allowY, P.young + dt * 0.3);
      if (P.young >= 0.999) P.bud = Math.min(allowB, P.bud + dt * 0.17);
      const plot = G.garden.plot.mat.uniforms;
      plot.uBulge.value = smoothstep(0.0, 0.25, P.sprout) * (1 - smoothstep(0.3, 0.55, P.sprout));
      plot.uCrack.value = smoothstep(0.12, 0.4, P.sprout);
      // 芽が土を割る瞬間
      if (P.sprout > 0.3 && !this.stageSounds.sprout) {
        this.stageSounds.sprout = true;
        G.audio.play('sprout');
        G.particles.burst(0, 0.13, 0, 16, { speed: 0.5, vy: 1.4, size: 0.016, life: 1.0, p: { color: [0.36, 0.24, 0.15], bounce: 0.25, ground: (px, pz) => G.garden.plot.soilHeight(px, pz) } });
        C.set('awe', 1); this.G.later(() => C.set('awe', 0), 1200);
      }
      // 種の皮は芽の先にのって持ち上がり、葉が開くとはじけ落ちる
      const S = G.seed;
      if (P.sprout > 0.32 && P.sprout < 0.8) {
        S.group.visible = true;
        const tip = P.spine[P.seg];
        S.group.position.set(tip.x, tip.y + 0.01, tip.z);
        S.group.rotation.set(0, 0, 1.2);
        S.coatT = 0;
      } else if (P.sprout >= 0.8 && !this.coatOff) {
        this.coatOff = true;
        S.pos.copy(S.group.position); S.vel.set(0.4, 0.8, 0.2); S.planted = false; S.enabled = false; S.coat = true;
        G.audio.play('pick');
      }
      if (this.coatOff) {
        S.coatT = (S.coatT || 0) + dt;
        if (S.coatT > 3) S.group.visible = false;
      } else if (P.sprout < 0.3) S.group.visible = false;
      if (P.young > 0.02 && !this.stageSounds.young) { this.stageSounds.young = true; G.audio.play('grow', { note: 0 }); }
      const leafN = Math.floor(P.young * 6);
      if (leafN > (this.lastLeafN || 0)) { this.lastLeafN = leafN; G.audio.play('leaf', { vol: 0.8 }); }
      if (P.bud > 0.01 && !this.stageSounds.bud) {
        this.stageSounds.bud = true; G.audio.play('budSwell');
        // 大きくなるつぼみから少し下がって見上げる
        C.walkTo(-0.5, 2.55, 0.9);
      }
      F.sepalOpen = smoothstep(0.45, 1.0, P.bud) * 0.55;
      G.vine.reach = smoothstep(0.55, 0.9, P.bud);
      if (P.bud > 0.3) { C.lookAt = P.headPos.clone().add(V3(0, 2.2 * P.headScale, 0)); C.set('awe', smoothstep(0.3, 0.8, P.bud)); }
      // 手がかり: じょうろの注ぎ口から水が垂れる
      this.dripT = (this.dripT || 0) - dt;
      if (this.dripT < 0 && !G.can.held && G.can.pouring <= 0) {
        this.dripT = 1.8;
        const r = G.can.roseWorld(V3());
        G.particles.emit({ x: r.x, y: r.y - 0.02, z: r.z, vx: 0, vy: 0, vz: 0, life: 1.5, size: 0.014, color: [0.75, 0.88, 1.0], alpha: 0.9, onGround: () => { G.audio.play('drip', { vol: 0.5, pan: this.panOf(r) }); return true; } });
        this.sparkleAt(r, 2, 0.02);
      }
      const idle = this.idle;
      if (this.cue('canRock', idle > 9 && !G.can.held, 10)) { G.can.tilt.kick(2.5); G.audio.play('canLift'); C.lookAt = G.can.pos.clone(); }
      if (this.cue('childPour', idle > 17 && !G.can.held, 12)) {
        // 子どもがじょうろを傾けてみせる
        C.walkTo(G.can.pos.x - 0.35, G.can.pos.z + 0.25, 0.8);
        G.later(() => { C.set('reach', 1); G.can.autoPour = 1.6; G.audio.play('canTip'); G.later(() => C.set('reach', 0), 1500); }, 1500);
      }
      G.butterfly.target = idle > 12 ? G.can.roseWorld(V3()) : null;
      if (P.bud >= 0.999) this.go('BUD');
    },
    exit() { this.G.butterfly.target = null; this.G.can.onDrop = null; this.G.child.set('awe', 0); },
  },

  // ============================================================
  // 4. つぼみ: 入口が開いて、中から温かい光
  // ============================================================
  BUD: {
    enter() {
      const G = this.G;
      G.can.enabled = false;
      G.audio.play('creak');
      G.child.walkTo(0.15, 2.75, 0.9);
      G.rig.setShot((w) => this.shotBud(w));
    },
    update(dt) {
      const G = this.G, F = G.flower, C = G.child;
      F.door = smooth(clamp(this.t / 2.6));
      // 入口から光がもれる
      this.lightBoost = 0.6 + 0.4 * Math.sin(G.time * 2);
      if (!C.walkTarget) {
        C.face(Math.PI);
        // 中をのぞき、ときどき振り返る
        const k = Math.floor(this.t / 2.5) % 3;
        C.set('peek', k === 2 ? 0 : 1);
        C.lookAt = k === 2 ? G.camera.position.clone() : this.headLocal(0, 1.0, 0);
        C.lookW = 1;
      }
      // きらきらした蜜の香りがもれ出す
      this.scentT = (this.scentT || 0) - dt;
      if (this.scentT < 0 && F.door > 0.5) {
        this.scentT = 0.25;
        const p = this.headLocal((Math.random() - 0.5) * 0.4, 0.4 + Math.random() * 0.8, 1.7);
        G.particles.emit({ x: p.x, y: p.y, z: p.z, vx: (Math.random() - 0.5) * 0.2, vy: 0.15, vz: 0.35, glow: true, grav: -0.05, drag: 0.8, life: 3, size: 0.03, color: [1.0, 0.8, 0.5], alpha: 0.8, twinkle: 7, seed: Math.random() });
      }
      const idle = this.idle;
      if (this.cue('budHop', idle > 7, 8)) { C.hop(2.0); G.audio.play('giggle', { vol: 0.6 }); }
      if (idle > 16) this.go('ENTER');
    },
    exit() { this.G.child.set('peek', 0); this.lightBoost = 0; },
  },

  // ============================================================
  // 5. 入る: 花びらの合わせ目をくぐり、扉が閉じて包まれる
  // ============================================================
  ENTER: {
    enter() {
      const G = this.G, C = G.child;
      C.walkTarget = null;
      this.childToFlower();
      C.groundFn = null;
      this.enterFrom = C.pos.clone();
      G.audio.play('petal', { note: 2 });
      const head = G.flower.head;
      const camLocal = head.worldToLocal(G.camera.position.clone());
      this.enterCam = [
        { t: 0, p: camLocal.toArray(), q: [0, 1.0, 0] },
        { t: 1.3, p: [0.25, 1.15, 4.1], q: [0, 0.8, 0.6] },
        { t: 2.3, p: [0.05, 1.05, 2.25], q: [0, 0.85, -0.2] },
        { t: 3.1, p: [0.35, 1.7, 1.25], q: [0.4, 0.9, -0.8] },
        { t: 4.2, p: [1.3, 2.1, 0.7], q: [0.4, 0.95, -1.0] },
      ];
      G.rig.setShot((w) => {
        w.frame = G.flower.head;
        const k = pathLerp(this.enterCam, this.t);
        w.pos.fromArray(k.p); w.target.fromArray(k.q);
        w.fov = lerp(52, 72, smoothstep(1.8, 3.2, this.t));
        w.lp = 6; w.lt = 6; w.look = false;
      });
    },
    update(dt) {
      const G = this.G, C = G.child, F = G.flower;
      const t = this.t;
      const floorY = FLOOR_Y;
      const ground = -G.flower.head.position.y + 0.02;
      const front = V3(0, ground, 2.15), sill = V3(0, floorY, 1.05), spot = V3(0.66, floorY, -0.86);
      if (t < 1.3) {
        const k = easeInOutSine(t / 1.3);
        C.pos.lerpVectors(this.enterFrom, front, k); C.pos.y = lerp(this.enterFrom.y, ground, k);
        C.speed = 1.0; C.face(Math.PI);
      } else if (t < 1.9) {
        // ぴょんと敷居へ
        const k = (t - 1.3) / 0.6;
        C.pos.lerpVectors(front, sill, k);
        C.pos.y += Math.sin(Math.PI * k) * 0.45;
        C.speed = 0;
        if (!this.hopped) { this.hopped = true; G.audio.play('pick'); C.squash.kick(-2); }
      } else if (t < 3.6) {
        const k = easeInOutSine((t - 1.9) / 1.7);
        C.pos.lerpVectors(sill, spot, k);
        C.speed = 0.9;
        C.faceToward(spot.x, spot.z);
      } else {
        C.speed = 0;
        C.face(Math.atan2(Math.cos(SLIT_A), Math.sin(SLIT_A)));
      }
      // 花びらをくぐる瞬間: 桃色の光に包まれる
      if (t > 2.0 && t < 2.6) this.flood = Math.max(this.flood, 0.25);
      if (t > 2.0 && !this.innerSound) { this.innerSound = true; G.audio.play('petal', { note: 5 }); }
      // 扉が閉じる
      F.door = 1 - smoothstep(2.9, 4.4, t);
      if (t > 3.2 && !this.closeSound) { this.closeSound = true; G.audio.play('creak', { vol: 0.6 }); }
      if (t > 4.5) { this.hopped = this.innerSound = this.closeSound = false; this.go('INSIDE'); }
    },
  },

  // ============================================================
  // 6. つぼみの中: 露を飲むたびに茎が伸び、空へ運ばれる
  // ============================================================
  INSIDE: {
    enter() {
      const G = this.G, C = G.child;
      this.childToFlower();
      C.pos.set(0.66, FLOOR_Y, -0.86);
      G.drops.active = true;
      G.drops.onAbsorb = (d) => this.onDrink(d);
      if (!this.dropsSeeded) {
        this.dropsSeeded = true;
        // 覗き窓の近くと、正面の壁に最初のしずく
        G.drops.spawn(3, 0.35, 0.3, 0.068);
        G.drops.spawn(4, -0.4, 0.26, 0.05);
        G.drops.spawn(2, 0.1, 0.34, 0.07);
        G.drops.spawn(0, 0.2, 0.28, 0.045);
      }
      this.audioS.music = 'inside';
      this.queued = 0;
      this.lastSpurtEnd = this.t;
      G.rig.setShot((w) => this.shotInside(w));
      C.lookAt = this.headLocal(1.3, 1.1, -1.8); C.lookW = 1;
    },
    update(dt) {
      const G = this.G, C = G.child, P = G.plant;
      // スパートの終わり
      if (this.growT >= 1 && this.inSpurt) {
        this.inSpurt = false;
        this.lastSpurtEnd = this.t;
        C.set('crouch', 0);
        C.set('awe', 1); this.G.later(() => C.set('awe', 0), 1500);
        if (this.spurt >= SPURTS.length) { this.go('TOP'); return; }
        if (this.queued > 0) { this.queued--; this.G.later(() => this.startSpurt(), 600); }
      }
      // 慣性: 加速で子どもがしゃがみ、花粉が舞い落ちる
      const ay = this.headAccelY || 0;
      if (this.inSpurt) {
        C.set('crouch', clamp(ay * 0.25, 0, 1));
        if (ay > 1 && Math.random() < 0.5) {
          const s = G.flower.stamens[(Math.random() * G.flower.stamens.length) | 0];
          if (s.tip) {
            const wp = G.flower.head.localToWorld(s.tip.clone());
            G.particles.emit({ x: wp.x, y: wp.y, z: wp.z, vx: 0, vy: -0.5, vz: 0, glow: true, grav: 0.3, drag: 1.2, life: 2.5, size: 0.02, color: [1, 0.82, 0.3], alpha: 0.9, twinkle: 8, seed: Math.random(), update: (p, d) => { p.y += (this.headVel || 0) * d * 0.85; } });
          }
        }
      }
      // 露が来ないときは、大きく育った露が自分で転がり落ちる
      if (!this.inSpurt && this.t - this.lastSpurtEnd > 11 && !G.drops.held) {
        const big = G.drops.drops.filter((d) => d.mode === 'wall').sort((a, b) => b.r - a.r)[0];
        if (big) { big.rT = Math.max(big.rT, 0.075); big.pushed = 3; big.vv -= 0.05; }
        else G.drops.spawn(G.drops.pickPetal(), 0, 0.3, 0.07);
        this.lastSpurtEnd = this.t - 5;
      }
      // 子どもは覗き窓から外を見る/しずくを追う
      if (!C.walkTarget && !this.touch) {
        const near = Math.hypot(C.pos.x - 0.66, C.pos.z + 0.86) < 0.3 || Math.hypot(C.pos.x - 0.32, C.pos.z + 1.02) < 0.3;
        // 覗くときは窓の横へ寄って、カメラに外を譲る
        if (near) { const tx = this.peekT > 0 ? 0.32 : 0.66, tz = this.peekT > 0 ? -1.02 : -0.86; if (Math.hypot(C.pos.x - tx, C.pos.z - tz) > 0.05) C.walkTo(tx, tz, 0.6); }
        C.set('peek', near && !this.inSpurt ? 1 : 0);
        if (near) { C.face(Math.atan2(Math.cos(SLIT_A), Math.sin(SLIT_A))); C.lookAt = this.headLocal(2.5, 0.2, -3.2); C.lookW = 1; }
      }
      this.peekT = Math.max(0, this.peekT - dt);
      // 覗き窓 (高くなるほど少し広く)
      G.flower.slit = 0.8 + 0.2 * smoothstep(0, 1, this.peekT);
    },
    exit() { this.G.child.set('peek', 0); this.G.child.set('crouch', 0); },
  },

  // ============================================================
  // 7. 頂上: 陽を浴びて、つぼみがゆるむ
  // ============================================================
  TOP: {
    enter() {
      const G = this.G;
      G.audio.play('bloom');
      for (const p of G.flower.petals) if (p.i !== VINE_PETAL) p.open.target = 0.06;
      G.plant.windAmp = 1;
      this.windGust = 0.5;
      G.child.set('awe', 1);
      G.drops.autoRate = 25;
      G.rig.setShot((w) => this.shotInside(w));
    },
    update(dt) {
      const G = this.G;
      G.flower.shaftMat.uniforms.uI.value = smoothstep(0, 2, this.t);
      G.flower.slit = damp(G.flower.slit, 0.4, 1, dt);
      G.child.lookAt = this.headLocal(0, 4.5, 0); G.child.lookW = 1;
      if (this.t > 2.6) this.go('OPEN');
    },
    exit() { this.G.child.set('awe', 0); },
  },

  // ============================================================
  // 8. 開花: 花びらを押し広げると光と風が流れ込む
  // ============================================================
  OPEN: {
    enter() {
      const G = this.G;
      this.opened = 0;
      G.rig.setShot((w) => this.shotOpen(w));
      for (const p of G.flower.petals) { p.openReq = p.open.target; }
    },
    update(dt) {
      const G = this.G, F = G.flower, C = G.child;
      let n = 0;
      for (const p of F.petals) if (p.i !== VINE_PETAL && p.open.target >= 0.99) n++;
      this.opened = n;
      F.wind = 0.4 + n * 0.15;
      // 開いた花びらがつるから抜け、最後に残った一枚がきつく巻かれる
      const V = G.vine;
      V.bind = damp(V.bind || 0, n >= 4 ? 1 : 0, 2.5, dt);
      F.petals[VINE_PETAL].roll = V.bind;
      F.petals[VINE_PETAL].open.target = 0.08;
      F.shaftMat.uniforms.uI.value = damp(F.shaftMat.uniforms.uI.value, 0.25 * (1 - n / 4), 1, dt);
      // 継ぎ目から光がもれる: 押したくなる
      this.seamT = (this.seamT || 0) - dt;
      if (this.seamT < 0) {
        this.seamT = 1.1;
        const cand = F.petals.filter((p) => p.i !== VINE_PETAL && p.open.target < 0.99);
        if (cand.length) {
          const p = cand[(Math.random() * cand.length) | 0];
          F.petalMat.touchAt(this.headLocal(Math.cos(p.phi) * 1.85, 1.6 + Math.random() * 0.8, Math.sin(p.phi) * 1.85), 0.55);
        }
      }
      const idle = this.idle;
      if (!C.walkTarget) { C.lookAt = this.headLocal(0, 3.5, 0); C.lookW = 0.6; }
      // 子どもが押してみせる / 日差しで自然に開く
      if (this.cue('childPush', idle > 8, 9)) {
        const cand = F.petals.filter((p) => p.i !== VINE_PETAL && p.open.target < 0.99);
        if (cand.length) {
          const p = cand[0];
          C.walkTo(Math.cos(p.phi) * 1.05, Math.sin(p.phi) * 1.05, 0.8);
          this.G.later(() => { C.set('reach', 1); this.pushPetal(p.i, 0.35, this.headLocal(Math.cos(p.phi) * 1.8, 1.4, Math.sin(p.phi) * 1.8)); this.G.later(() => C.set('reach', 0), 700); }, 1300);
        }
      }
      if (this.cue('autoOpen', idle > 15, 7)) {
        const cand = F.petals.filter((p) => p.i !== VINE_PETAL && p.open.target < 0.99);
        if (cand.length) this.openPetal(cand[0].i);
      }
      if (n >= 4 && G.vine.bind > 0.97) this.go('VINE');
    },
  },

  // ============================================================
  // 9. 最後の一枚: つるをほどく
  // ============================================================
  VINE: {
    enter() {
      const G = this.G, C = G.child;
      G.rig.setShot((w) => this.shotVine(w));
      G.flower.petals[VINE_PETAL].strain = 1.5;
      G.vine.bind = 1; G.flower.petals[VINE_PETAL].roll = 1;
      C.walkTo(Math.cos(PETAL_PHI[VINE_PETAL]) * 0.55 + 0.25, Math.sin(PETAL_PHI[VINE_PETAL]) * 0.55, 0.8);
      G.audio.play('vine', { tension: 1 });
    },
    update(dt) {
      const G = this.G, V = G.vine, C = G.child, p = G.flower.petals[VINE_PETAL];
      // 引くほど巻きがほどける (近い操作は大きめに補助)
      if (V.held && V.anchor) {
        const span = V.target.distanceTo(V.anchor);
        const excess = span - V.ropeLen * 0.82;
        if (excess > 0) {
          const k = Math.min(excess, 2.4 * dt);
          V.coils = Math.max(0, V.coils - k * 1.1);
          V.ropeLen += k * 0.9;
          this.onUnwind();
        }
      }
      if (this.phase !== 'VINE') return;
      // 震える花びら
      p.strain = damp(p.strain, 1.2 * (V.coils / V.coils0) + 0.3, 2, dt);
      // つるの端がぴくりと動く
      this.vtT = (this.vtT || 0) - dt;
      if (this.vtT < 0 && !V.held) { this.vtT = 2.2; V.rope[V.rope.length - 1].p.x += 0.04; this.sparkleAt(V.endPos, 3, 0.02); }
      if (!C.walkTarget) { C.lookAt = V.endPos.clone(); C.lookW = 1; }
      const idle = this.idle;
      if (this.cue('childTug', idle > 9 && !V.held, 6)) {
        C.set('reach', 1);
        this.G.later(() => { this.vineTug(0.3); this.G.later(() => C.set('reach', 0), 500); }, 400);
      }
      if (this.cue('childTug2', idle > 22 && !V.held, 2)) { C.set('reach', 1); this.vineTug(0.45); G.later(() => C.set('reach', 0), 500); }
    },
  },

  // ============================================================
  // 10. 開花の瞬間: 光・風・音が一気に広がる
  // ============================================================
  BLOOM: {
    enter() {
      const G = this.G, F = G.flower, V = G.vine, C = G.child;
      V.released = true; V.held = false; V.windAmt = 1;
      const p = F.petals[VINE_PETAL];
      p.open.target = 1; p.open.kick(1.4); p.strain = 0;
      for (const q of F.petals) { q.open.target = 1; }
      this.flood = 0.42;
      this.exposure = Math.min(this.exposure, 1.25);
      this.windGust = 1;
      G.audio.play('vineRelease');
      this.G.later(() => G.audio.play('bloom'), 250);
      this.G.later(() => G.audio.play('wow', { vol: 0.7 }), 900);
      this.audioS.music = 'sky';
      G.flower.shaftMat.uniforms.uI.value = 0;
      C.set('cheer', 1); C.hop(2.6);
      this.G.later(() => C.set('cheer', 0), 2200);
      // 花粉が空へ舞い上がる
      const c = this.headLocal(0, 1.4, 0);
      for (let k = 0; k < 120; k++) {
        const a = Math.random() * Math.PI * 2, s = 1 + Math.random() * 3;
        G.particles.emit({ x: c.x, y: c.y, z: c.z, vx: Math.cos(a) * s, vy: 1 + Math.random() * 3, vz: Math.sin(a) * s, glow: true, grav: 0.15, drag: 0.5, life: 4 + Math.random() * 2, size: 0.03 + Math.random() * 0.04, color: [1, 0.85, 0.45], alpha: 0.9, twinkle: 7, seed: Math.random() });
      }
      // 巻物の中に溜まっていた大きな朝露が転がり出る
      this.dropX = 0.05; this.dropV = 0.97; this.dropVel = -0.2; this.dropPush = 0; this.dropFalling = false; this.dropLanded = false;
      G.bigDrop.visible = true;
      G.bigDrop.radius = 0.001;
      G.drops.active = false;
      G.child.walkTo(0, 0.2, 0.7);
      G.rig.setShot((w) => this.shotBloom(w));
    },
    update(dt) {
      const G = this.G, p = G.flower.petals[VINE_PETAL];
      p.roll = damp(p.roll, 0, 3.0, dt);
      G.flower.wind = 1;
      G.bigDrop.radius = damp(G.bigDrop.radius, 0.3, 3, dt);
      this.updateBigDrop(dt);
      if (this.t > 5.6) this.go('DROP');
    },
  },

  // ============================================================
  // 11. 朝露: 逆さまの庭を映し、落ちて、高さを知る
  // ============================================================
  DROP: {
    enter() {
      const G = this.G, C = G.child;
      if (this.dropV === undefined || !G.bigDrop.visible) {
        this.dropX = 0.05; this.dropV = 0.86; this.dropVel = 0; this.dropPush = 0; this.dropFalling = false; this.dropLanded = false;
        G.bigDrop.visible = true; G.bigDrop.radius = 0.3;
      }
      const sp = this.petalLocal(VINE_PETAL, -0.12, 0.6);
      C.walkTo(sp.x, sp.z, 1.1);
      C.groundFn = (x, z) => this.petalHeightAt(VINE_PETAL, x, z);
      G.rig.setShot((w) => this.shotDrop(w));
    },
    update(dt) {
      const G = this.G, C = G.child;
      this.updateBigDrop(dt);
      if (!this.dropFalling) {
        if (!C.walkTarget) { C.lookAt = G.bigDrop.pos.clone(); C.lookW = 1; C.set('crouch', 0.6); C.faceToward(this.petalLocal(VINE_PETAL, 0, 0.9).x, this.petalLocal(VINE_PETAL, 0, 0.9).z); }
        const idle = this.idle;
        if (this.cue('poke', idle > 8, 8)) { C.set('reach', 1); G.later(() => { this.dropPush += 0.28; G.bigDrop.kick(1); G.audio.play('wobble'); C.set('reach', 0); }, 500); }
        if (this.cue('windRoll', idle > 18, 6)) { this.dropPush += 0.7; this.windGust = 0.6; }
      } else {
        C.set('crouch', 0);
        C.set('reach', 0);
        C.lookAt = G.bigDrop.pos.clone(); C.lookW = 1;
        C.set('peek', 1);
      }
      if (this.dropLanded && this.t - this.dropLandT > 2.2) this.go('VIEW');
    },
    exit() { this.G.child.set('crouch', 0); this.G.child.set('peek', 0); },
  },

  // ============================================================
  // 12. 見下ろす: 花びらの縁に座って、世界を眺める (自由に遊ぶ)
  // ============================================================
  VIEW: {
    enter() {
      const G = this.G, C = G.child;
      this.childToFlower();
      const sp = this.petalLocal(VINE_PETAL, 0.0, 0.86);
      C.walkTo(sp.x, sp.z, 0.6);
      this.sitting = false;
      G.rig.setShot((w) => this.shotView(w));
      this.audioS.music = 'sky';
      G.bigDrop.visible = false;
      this.newDropT = 6;
      this.dropFalling = false; this.dropLanded = false;
    },
    update(dt) {
      const G = this.G, C = G.child;
      G.flower.wind = 0.8;
      // 花びらの上を歩く高さ
      const sp = this.petalLocal(VINE_PETAL, 0.0, 0.86);
      C.groundFn = (x, z) => this.petalHeightAt(VINE_PETAL, x, z);
      if (!C.walkTarget && !this.sitting) {
        this.sitting = true;
        C.clearPoses();
        C.set('dangle', 1);
        C.face(Math.atan2(sp.x, sp.z));
        G.audio.play('giggle', { vol: 0.5 });
      }
      if (this.sitting) {
        // ときどき下を指さす
        const k = Math.floor(this.t / 5) % 4;
        C.set('point', k === 2 ? 1 : 0);
        C.lookAt = k === 2 ? V3(0, 0, 0) : null; C.lookW = k === 2 ? 1 : 0;
        if (k !== 2) { C.lookAt = this.headLocal(sp.x * 3, -40, sp.z * 3); C.lookW = 0.8; }
      }
      // ときどき新しい朝露ができる: また落とせる
      if (!G.bigDrop.visible) {
        this.newDropT -= dt;
        if (this.newDropT < 0) {
          this.newDropT = 9;
          G.bigDrop.visible = true; G.bigDrop.radius = 0.001;
          this.dropX = -0.45; this.dropV = 0.7; this.dropVel = 0; this.dropPush = 0; this.dropFalling = false; this.dropLanded = false;
        }
      } else {
        G.bigDrop.radius = damp(G.bigDrop.radius, this.dropFalling ? G.bigDrop.radius : 0.2, 2, dt);
        this.updateBigDrop(dt);
        if (this.dropLanded && this.t - this.dropLandT > 1) { G.bigDrop.visible = false; this.dropLanded = false; this.dropFalling = false; }
      }
      const idle = this.idle;
      if (this.cue('viewCheer', idle > 26, 20)) { C.set('cheer', 1); C.hop(1.5); G.audio.play('giggle'); G.later(() => C.set('cheer', 0), 800); }
      if (idle > 60) this.go('SLIDE');
    },
    exit() { const C = this.G.child; C.set('dangle', 0); C.set('point', 0); C.groundFn = null; },
  },

  // ============================================================
  // 13. 滑り台: 花びらから葉のらせんを滑って庭へ
  // ============================================================
  SLIDE: {
    enter() {
      const G = this.G, C = G.child;
      C.clearPoses();
      C.set('slide', 1);
      C.walkTarget = null;
      this.buildSlide();
      C.attach(G.scene);
      C.groundFn = null;
      C.noShadow = true;
      this.slideS = 0; this.slideV = 1.2; this.slideLeaf = -1;
      G.bigDrop.visible = false;
      this.audioS.music = 'slide';
      G.audio.play('giggle');
      G.rig.setShot((w) => this.shotSlide(w));
    },
    update(dt) {
      const G = this.G, C = G.child, path = this.slidePath;
      // 花びらが重みでしなって滑り台になる
      const p3 = G.flower.petals[VINE_PETAL];
      p3.sag = damp(p3.sag || 0, this.slideS < this.petalLen ? 0.75 : 0.0, this.slideS < this.petalLen ? 3 : 1.5, dt);
      // 速度: 坂で加速、上限あり
      const i = Math.min(path.length - 2, Math.floor(this.slideS / path.step));
      const a = path[i], b = path[i + 1];
      const dir = b.p.clone().sub(a.p).normalize();
      const slope = -dir.y;
      const vmax = 9.5;
      if (a.air) this.slideV = Math.min(vmax, this.slideV + 9.8 * dt * Math.max(0.2, slope));
      else this.slideV = clamp(this.slideV + (9.8 * slope * 0.75 - 0.8) * dt, 2.5, vmax);
      this.slideS += this.slideV * dt;
      const f = clamp(this.slideS / path.step - i);
      const pos = a.p.clone().lerp(b.p, f);
      C.pos.copy(pos);
      C.faceToward(pos.x + dir.x, pos.z + dir.z);
      // 葉に乗ったら、しなって音が鳴る
      if (a.on !== this.slideLeaf) {
        this.slideLeaf = a.on;
        if (a.on >= 0) {
          const L = G.plant.helix[a.on];
          L.bend.kick(-3.5 - this.slideV * 0.2);
          G.audio.play('leafBoing', { note: a.on % 10, pan: this.panOf(pos) });
          G.particles.burst(pos.x, pos.y, pos.z, 4, { speed: 0.6, vy: 0.8, size: 0.03, life: 0.8, p: { glow: true, grav: 1, color: [0.85, 1.0, 0.7], alpha: 0.7, twinkle: 9 } });
        }
      }
      this.audioS.slide = clamp(this.slideV / vmax);
      if (this.slideS >= path.total - 0.05) {
        this.audioS.slide = 0;
        this.go('HOME');
      }
    },
    exit() { const C = this.G.child; C.set('slide', 0); C.noShadow = false; this.G.flower.petals[VINE_PETAL].sag = 0; },
  },

  // ============================================================
  // 14. 庭へ帰る: 着地して、見上げる。何度でも
  // ============================================================
  HOME: {
    enter() {
      const G = this.G, C = G.child;
      this.childToGarden();
      C.pos.y = 0;
      C.set('lie', 1);
      G.audio.play('land');
      this.G.later(() => G.audio.play('giggle'), 500);
      // 草と花びらがふわっと舞う
      G.particles.burst(C.pos.x, 0.1, C.pos.z, 30, { speed: 1.2, vy: 2, size: 0.05, life: 2.2, p: { grav: 1.5, drag: 1.2, color: [1.0, 0.6, 0.7], alpha: 1 } });
      G.garden.grass.mat.uniforms.uRustle.value.set(C.pos.x, C.pos.z, G.time, 2);
      this.audioS.music = 'garden';
      G.rig.setShot((w) => this.shotHome(w));
      this.G.later(() => { C.set('lie', 0); C.hop(1.2); C.set('cheer', 1); this.G.later(() => C.set('cheer', 0), 1200); }, 1400);
      G.can.enabled = true;
      G.can.onDrop = (p) => { if (p.y < 0.2) G.garden.grass.mat.uniforms.uRustle.value.set(p.x, p.z, G.time, 0.3); return true; };
    },
    update(dt) {
      const G = this.G, C = G.child;
      if (this.t > 2) { C.lookAt = G.plant.headPos.clone(); C.lookW = 0.8; }
      // 一番下の葉がゆれて「乗って」と誘う
      this.leafT = (this.leafT || 0) - dt;
      if (this.leafT < 0 && this.t > 3) {
        this.leafT = 3;
        const L = G.plant.helix[HELIX.n - 1];
        L.bend.kick(-1.2);
        this.sparkleAt(G.plant.leafPoint(L, 0.8, V3()), 4, 0.04);
      }
    },
  },

  // ============================================================
  // 15. もう一度: 葉から葉へ跳ね上がって花の上へ
  // ============================================================
  RIDE: {
    enter() {
      const G = this.G, C = G.child;
      C.walkTarget = null;
      C.clearPoses();
      this.buildSlide();
      this.rideK = HELIX.n - 1; // 一番下の葉から
      this.rideT = 0;
      this.rideFrom = C.pos.clone();
      C.groundFn = null;
      G.rig.setShot((w) => this.shotRide(w));
      this.audioS.music = 'slide';
      G.audio.play('giggle');
    },
    update(dt) {
      const G = this.G, C = G.child;
      // 葉は体重でしなり、ばねのように子どもを上の葉へ放り上げる
      const k = this.rideK;
      const dur = 0.62;
      this.rideT += dt;
      const target = k >= 0 ? G.plant.leafPoint(G.plant.helix[k], 0.55, V3()).add(V3(0, 0.08, 0)) : this.headLocal(0.55, FLOOR_Y, 0.45);
      const f = clamp(this.rideT / dur);
      const pos = this.rideFrom.clone().lerp(target, easeOutCubic(f));
      pos.y += Math.sin(Math.PI * f) * 1.6;
      C.pos.copy(pos);
      C.faceToward(target.x, target.z);
      C.set('cheer', 1);
      if (f >= 1) {
        if (k >= 0) {
          const L = G.plant.helix[k];
          L.bend.kick(-4);
          G.audio.play('leafBoing', { note: 9 - (k % 10), pan: this.panOf(pos) });
          C.squash.kick(-3);
        }
        this.rideFrom = target.clone();
        this.rideT = 0;
        this.rideK--;
        if (this.rideK < -1) {
          C.set('cheer', 0);
          this.childToFlower();
          C.pos.copy(G.flower.head.worldToLocal(target.clone()));
          this.go('NEST');
        }
      }
    },
  },

  // ============================================================
  // 16. もう一度、花の中へ: 帰ってくると花びらが閉じて包んでくれる
  // ============================================================
  NEST: {
    enter() {
      const G = this.G, C = G.child, F = G.flower;
      this.childToFlower();
      C.walkTarget = null;
      C.pos.set(0.66, FLOOR_Y, -0.6);
      C.clearPoses();
      for (const p of F.petals) { p.open.target = 0; p.openReq = 0; p.roll = 0; p.sag = 0; p.strain = 0; }
      F.door = 0; F.slit = 0.6; F.wind = 0.2;
      G.bigDrop.visible = false;
      G.drops.active = true; G.drops.autoRate = 6;
      G.drops.onAbsorb = (d) => this.onDrink(d);
      if (G.drops.drops.length < 2) { G.drops.spawn(2, 0.1, 0.3, 0.06); G.drops.spawn(3, 0.4, 0.28, 0.05); }
      this.opened = 0;
      G.audio.play('petal', { note: 4 });
      G.later(() => G.audio.play('giggle', { vol: 0.6 }), 600);
      this.audioS.music = 'inside';
      G.rig.setShot((w) => this.shotInside(w));
      C.lookAt = this.headLocal(0, 3.5, 0); C.lookW = 0.8;
    },
    update(dt) {
      const G = this.G, F = G.flower, C = G.child;
      let n = 0;
      for (const p of F.petals) if (p.open.target >= 0.99) n++;
      this.opened = n;
      // 風に揺れるつぼみの中: ゆりかご
      G.plant.windAmp = 0.6;
      const idle = this.idle;
      if (this.t > 2 && this.cue('nestSeam', true, 1.4)) {
        const cand = F.petals.filter((p) => p.open.target < 0.99);
        if (cand.length) { const p = cand[(Math.random() * cand.length) | 0]; F.petalMat.touchAt(this.headLocal(Math.cos(p.phi) * 1.85, 1.6 + Math.random() * 0.8, Math.sin(p.phi) * 1.85), 0.4); }
      }
      if (this.cue('nestAuto', idle > 20, 6)) {
        const cand = F.petals.filter((p) => p.open.target < 0.99);
        if (cand.length) this.openPetal(cand[0].i);
      }
      if (n >= 3) {
        for (const p of F.petals) if (p.open.target < 0.99) this.openPetal(p.i);
        this.flood = Math.max(this.flood, 0.3);
        G.drops.active = false;
        this.go('VIEW');
      }
    },
  },
};
