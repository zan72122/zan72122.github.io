// 🐚 うみが ごっそり ひいた(W-02)
//
// 海面がスーッと9m下がり、いつも水に隠れている島の すそ野(砂の斜面)が まるごと出てくる。
// 潮が戻るまでのあいだ、4人いっしょに貝・ヒトデ・難破船をひろう共同フェーズである。
//
// 島の頂点にも islandGroup にも触らない。動かすのは world.sea と world.foamRings の
// position.y だけで、どちらも scene 直下にある(設計書 2.1 の表)。
// world.update は foamRings の scale と opacity を毎フレーム上書きするが、
// position.y は触らないので安全である。

import * as THREE from '../../vendor/three.module.min.js';
import { toonMatUnique, starGeometry } from '../gfx.js';
import { tideTreasureValue, tideWashBackSteps } from '../rules.js';
import { easeInOut } from '../tween.js';
import { dbg } from '../debug.js';
import { WorldEventBase } from './base.js';

const TAU = Math.PI * 2;
const SEA_DROP = -9;        // 海面をここまで下げる
const PLAY_TICKS = 120;     // 250ms × 120 = 30秒
const TREASURE_COUNT = 60;
const GRAB_RADIUS = 1.15;

export class TideEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.seabed = null;
    this.treasures = [];      // { mesh, kind, color, alive }
    this.fishes = [];
    this.picked = new Map();  // char → ひろった枚数
    this.targets = new Map(); // char → 宝
    this.cpuTimer = new Map();
    this.playing = false;
    this._t = 0;
    this._raycaster = new THREE.Raycaster();
  }

  async run() {
    await this._trigger();
    await this._drain();
    await this._play();
    await this._restore();
  }

  // ---------- 毎フレーム ----------
  update(dt) {
    this._t += dt;

    // 砂のうえで ぴちぴち はねる おさかな
    for (const f of this.fishes) {
      const u = f.userData;
      const p = (this._t * 1.6 + u.phase) % 1;
      f.position.y = u.baseY + Math.abs(Math.sin(p * Math.PI)) * 0.5;
      f.rotation.z = Math.sin(this._t * 7 + u.phase) * 0.7;
    }
    // たからものは ゆっくり回ってキラキラする
    for (const t of this.treasures) {
      if (!t.alive) continue;
      t.mesh.rotation.y += dt * 1.2;
      if (t.mat) t.mat.emissiveIntensity = 0.25 + Math.sin(this._t * 3 + t.phase) * 0.2;
    }
    if (!this.playing) return;

    // 4人を それぞれの目標へ 寄せる(プレイヤーのほうが速い)
    const { chars } = this.ctx;
    for (const c of chars) {
      this._stepCpu(c, dt);
      const target = this.targets.get(c);
      if (!target || !target.alive) continue;
      const speed = c.isPlayer ? 9.2 : 6.4;
      this._walk(c, target.mesh.position, speed * dt);
      if (c.root.position.distanceTo(target.mesh.position) < GRAB_RADIUS) this._grab(c, target);
    }
  }

  // ---------- ① きっかけ(約6秒) ----------
  async _trigger() {
    this.stage = 'trigger';
    const { rig, audio, wait } = this.ctx;
    rig.setOverview();
    audio.stopBgm();
    audio.rumble();
    audio.noise({ dur: 1.8, vol: 0.18, filterFreq: 400 });   // 吸い込む音
    await this.ctx.banner(
      '<span class="icon">🐚</span>うみが ごっそり ひいた!<span class="sub">うみの そこが みえるよ</span>',
      2600,
    );
    audio.slideRumble(2.4);
    await wait(1400);
  }

  // ---------- ② 変化(約6秒) ----------
  async _drain() {
    this.stage = 'change';
    const { world, chars, rig, audio, tweens, wait } = this.ctx;
    this._buildSeabed();
    this._buildTreasures();

    // 海面と波リングを いっしょに下げる
    const foamY = world.foamRings.map((r) => r.position.y);
    let splashes = 0;
    const camFrom = rig.pos.clone();
    const camTo = new THREE.Vector3(0, 16, 40);
    rig.setManual(camFrom.clone(), new THREE.Vector3(0, 0.5, 0));

    await tweens.add(6, (k) => {
      const e = easeInOut(k);
      world.sea.position.y = SEA_DROP * e;
      world.foamRings.forEach((r, i) => { r.position.y = foamY[i] + SEA_DROP * e; });
      this.seabed.visible = true;
      this.seabed.traverse((o) => { if (o.material) o.material.opacity = Math.min(1, e * 2.5); });
      rig.setManual(camFrom.clone().lerp(camTo, e), new THREE.Vector3(0, 0.5 - 4 * e, 0));
      if (e > splashes * 0.3) { audio.splash(); splashes++; }
    });
    this._foamHomeY = foamY;

    // 4人が 砂の斜面へ おりる
    audio.startBgm('tide');
    const drops = chars.map((c, i) => {
      const a = (c.tileIndex / world.tileCount) * TAU + (i - 1.5) * 0.05;
      const r = 21.5;
      const from = c.root.position.clone();
      const to = new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r);
      to.y = world.heightFn(to.x, to.z) + 0.05;
      c.setMode('hop');
      c.faceTowards(to);
      return tweens.add(1.6, (k) => {
        const e = easeInOut(k);
        c.root.position.lerpVectors(from, to, e);
        c.setHopHeight(Math.sin(Math.PI * k) * 1.2);
      }).then(() => { c.setHopHeight(0); c.land(); c.setMode('idle'); });
    });
    await Promise.all(drops);
    rig.setOverview();
    await wait(200);
  }

  // ---------- ③ 遊び(約30秒) ----------
  async _play() {
    this.stage = 'play';
    const { chars, ui, audio, wait } = this.ctx;

    chars.forEach((c) => {
      this.picked.set(c, 0);
      this.cpuTimer.set(c, 0.4 + Math.random() * 0.6);
      c.setMode('hop');
    });

    await this.ctx.banner(
      '<span class="icon">🐚</span>タップで たからものを あつめよう!<span class="sub">じぶんの いろの ヒトデは 3ばい!</span>',
      2400,
    );

    ui.setMinigameMode(true);
    ui.showScore(true);
    ui.showTimer(true);
    ui.showTapLayer(true);
    ui.setScore(0);
    this.playing = true;
    this.ctx.setTapHandler((ndc, px) => this.onTap(ndc, px));
    dbg.push({
      kind: 'state', id: 'tide', from: 'change', to: 'play',
      why: `treasures=${this.treasures.length} ticks=${PLAY_TICKS}`,
    });

    for (let s = 0; s < PLAY_TICKS; s++) {
      ui.setTimer(1 - s / PLAY_TICKS);
      if (s === PLAY_TICKS - 12) audio.countTick(3);
      if (s === PLAY_TICKS - 8) audio.countTick(2);
      if (s === PLAY_TICKS - 4) audio.countTick(1);
      if (this.treasures.every((t) => !t.alive)) break;
      await wait(250);
    }

    this.playing = false;
    this.ctx.setTapHandler(null);
    dbg.push({
      kind: 'state', id: 'tide', from: 'play', to: 'settle',
      why: `left=${this.treasures.filter((t) => t.alive).length}`,
    });
    chars.forEach((c) => { c.setHopHeight(0); c.land(); c.setMode('idle'); });
    ui.showTimer(false);
    ui.showTapLayer(false);
    ui.showScore(false);
    ui.setMinigameMode(false);
    audio.countTick(0);
  }

  // ---------- ④ 収束(約14秒) ----------
  async _restore() {
    this.stage = 'settle';
    const { world, chars, rig, ui, fx, audio, tweens, wait } = this.ctx;
    rig.setOverview();
    await this.ctx.banner('<span class="icon">🌊</span>しおが もどってくる!', 1700);

    // 順位(ひろった枚数の多い順)ごとに 押し流される距離がちがう
    const ranked = [...chars].sort((a, b) => (this.picked.get(b) || 0) - (this.picked.get(a) || 0));
    const stepsOf = new Map();
    ranked.forEach((c, rank) => stepsOf.set(c, tideWashBackSteps(rank, chars.length)));

    // 海面を もどしながら、全員を 島へ もちあげる
    const foamY = this._foamHomeY || world.foamRings.map(() => 0.06);
    const froms = new Map(chars.map((c) => [c, c.root.position.clone()]));
    const dests = new Map();
    for (const c of chars) {
      let next = (c.tileIndex + stepsOf.get(c)) % world.tileCount;
      // スターマスに立たせない(押し流しでは取得判定が走らないため)
      if (next === world.starTileIndex) next = (next + 1) % world.tileCount;
      dests.set(c, next);
      c.setMode('hop');
    }

    // 結果反映は この1件だけ。コイン加算は _grab がすでに済ませているので、
    // picked[i] が そのまま「このイベントで増えたコイン」になる。
    dbg.push({
      kind: 'result', id: 'tide', why: 'tide-washback',
      to: ranked.map((c) => c.def.id).join(','),
      chars: chars.map((c) => ({
        id: c.def.id,
        picked: this.picked.get(c) || 0,
        rank: ranked.indexOf(c),
        steps: stepsOf.get(c),
        from: c.tileIndex,
        to: dests.get(c),
      })),
    });

    audio.splash();
    audio.slideRumble(3.2);
    await tweens.add(5, (k) => {
      const e = easeInOut(k);
      world.sea.position.y = SEA_DROP * (1 - e);
      world.foamRings.forEach((r, i) => { r.position.y = foamY[i] + SEA_DROP * (1 - e); });
      this.seabed.traverse((o) => { if (o.material) o.material.opacity = Math.max(0, 1 - e * 2); });
      for (const c of chars) {
        const to = world.tileAnchor(dests.get(c)).add(this.ctx.charOffset(c));
        c.root.position.lerpVectors(froms.get(c), to, e);
        c.setHopHeight(Math.sin(Math.PI * k) * 0.9);
      }
      if (k > 0.97) this.seabed.visible = false;
    });
    world.sea.position.y = 0;
    world.foamRings.forEach((r, i) => { r.position.y = foamY[i]; });
    for (const c of chars) {
      c.setHopHeight(0);
      c.land();
      c.setMode('idle');
      c.tileIndex = dests.get(c);
      fx.dustPuff(c.root.position, 3);
    }
    audio.splash();

    // ごほうびの見せ場
    audio.yay();
    const lines = ranked.map((c) => {
      const got = this.picked.get(c) || 0;
      return `${c.def.emoji}🪙${got}`;
    }).join('  ');
    for (let i = 0; i < 4; i++) audio.coin(i);
    chars.forEach((c) => { c.setMode('cheer'); ui.updatePlayer(c); });
    fx.rainConfetti(new THREE.Vector3(0, 6, 0), 14, 90, 9);
    await this.ctx.banner(
      `<span class="icon">🐚</span>たからもの ゲット!<span class="sub">${lines}</span>`,
      2800,
    );
    chars.forEach((c) => c.setMode('idle'));
    await wait(200);
  }

  // ---------- 入力 ----------
  onTap(ndc, px) {
    if (!this.playing) { dbg.push({ kind: 'input-reject', id: 'tide', why: 'not-playing' }); return; }
    const { chars, rig, ui } = this.ctx;
    const player = chars.find((c) => c.isPlayer) || chars[0];
    const alive = this.treasures.filter((t) => t.alive);
    if (!alive.length) { dbg.push({ kind: 'input-reject', id: 'tide', why: 'no-treasure' }); return; }

    // まず宝そのものを ねらう
    this._raycaster.setFromCamera(ndc, rig.camera);
    const hits = this._raycaster.intersectObjects(alive.map((t) => t.mesh), true);
    let picked = null;
    if (hits.length) {
      let o = hits[0].object;
      while (o && !alive.some((t) => t.mesh === o)) o = o.parent;
      picked = alive.find((t) => t.mesh === o) || null;
    }
    // 外したら、タップした向きに いちばん近い宝を選ぶ(4歳児にやさしく)
    if (!picked) {
      const dir = this._raycaster.ray.direction;
      const origin = this._raycaster.ray.origin;
      let best = Infinity;
      for (const t of alive) {
        const v = t.mesh.position.clone().sub(origin);
        const along = v.dot(dir);
        if (along <= 0) continue;
        const d = v.sub(dir.clone().multiplyScalar(along)).length();
        if (d < best) { best = d; picked = t; }
      }
    }
    if (!picked) {
      dbg.push({ kind: 'input-reject', id: 'tide', why: 'no-hit' });
      return;
    }
    // 同じ宝を もう一度ねらっても 何も変わらない(ねらい先はすでにそこ)。
    const same = this.targets.get(player) === picked;
    this.targets.set(player, picked);
    if (px) ui.emojiBurst(px.x, px.y, '👉');
    dbg.push(same
      ? { kind: 'input-reject', id: 'tide', why: 'same-target' }
      : { kind: 'input-accept', id: 'tide', to: player.def.id, why: picked.kind });
  }

  // ---------- 中身 ----------
  _stepCpu(char, dt) {
    if (char.isPlayer) return;
    let t = (this.cpuTimer.get(char) || 0) - dt;
    if (t > 0) { this.cpuTimer.set(char, t); return; }
    this.cpuTimer.set(char, 1.1 + Math.random() * 0.7);   // 1.1〜1.8秒ごとに 選びなおす
    const alive = this.treasures.filter((x) => x.alive);
    if (!alive.length) return;
    let best = null, bestD = Infinity;
    for (const x of alive) {
      const d = char.root.position.distanceToSquared(x.mesh.position);
      if (d < bestD) { bestD = d; best = x; }
    }
    this.targets.set(char, best);
  }

  _walk(char, to, step) {
    const p = char.root.position;
    const dx = to.x - p.x, dz = to.z - p.z;
    const len = Math.hypot(dx, dz);
    if (len > 0.001) {
      const k = Math.min(1, step / len);
      p.x += dx * k;
      p.z += dz * k;
      char.faceTowards(new THREE.Vector3(to.x, p.y, to.z));
    }
    p.y = this.ctx.world.heightFn(p.x, p.z) + 0.05;
    char.setHopHeight(Math.abs(Math.sin(this._t * 9)) * 0.22);
  }

  _grab(char, treasure) {
    const { ui, fx, audio, chars } = this.ctx;
    treasure.alive = false;
    treasure.mesh.visible = false;
    this.targets.delete(char);

    const isOwn = treasure.kind === 'starfish' && treasure.color === char.def.color;
    const value = tideTreasureValue(treasure.kind, isOwn);
    char.coins += value;
    this.picked.set(char, (this.picked.get(char) || 0) + value);
    ui.updatePlayer(char);

    audio.coin(0);
    if (value >= 5) audio.chime(2);
    else if (isOwn) audio.chime(1);
    fx.sparkleBurst(treasure.mesh.position, isOwn ? 10 : 5,
      isOwn ? 0xfff6a8 : 0x9fd8ff, isOwn ? 1.5 : 1);

    const player = chars.find((c) => c.isPlayer) || chars[0];
    if (char === player) ui.setScore(this.picked.get(char) || 0);
  }

  // ---------- 小道具 ----------

  // 海底ぜんたい。島の square な地面のそとに ひろがる砂の床。
  _buildSeabed() {
    const { scene, world } = this.ctx;
    const g = new THREE.Group();

    const floorMat = toonMatUnique(0xf0dcae, { transparent: true, opacity: 0 });
    const floor = new THREE.Mesh(new THREE.CircleGeometry(92, 48), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = SEA_DROP + 0.1;
    g.add(floor);

    // 沖の難破船(遠景のにぎやかし)
    for (let i = 0; i < 3; i++) {
      const a = TAU * (0.2 + i * 0.3);
      const hull = new THREE.Mesh(
        new THREE.SphereGeometry(2.6, 14, 10, 0, TAU, 0, Math.PI / 2),
        toonMatUnique(0x9c6b3f, { transparent: true, opacity: 0 }),
      );
      hull.scale.set(1, 0.55, 1.8);
      hull.rotation.set(0.3, a, 0.5);
      hull.position.set(Math.cos(a) * 52, SEA_DROP + 1.2, Math.sin(a) * 52);
      g.add(hull);
    }

    // 砂のうえで ぴちぴちする おさかな
    this.fishes = [];
    for (let i = 0; i < 8; i++) {
      const a = Math.random() * TAU;
      const r = 24 + Math.random() * 6;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const fish = new THREE.Mesh(
        new THREE.SphereGeometry(0.42, 12, 8),
        toonMatUnique([0xff7f3c, 0xffffff, 0xff5c5c, 0xffb7d0][i % 4],
          { transparent: true, opacity: 0 }),
      );
      fish.scale.set(1, 0.7, 1.5);
      const baseY = world.heightFn(x, z) + 0.3;
      fish.position.set(x, baseY, z);
      fish.userData = { phase: Math.random(), baseY };
      g.add(fish);
      this.fishes.push(fish);
    }

    g.visible = false;
    scene.add(g);
    this.seabed = this._own(g);
  }

  // 貝・ヒトデ・難破船。ParticleFX は使わず、ぜんぶ専用メッシュにする(設計書 8章 #9)。
  _buildTreasures() {
    const { chars, world } = this.ctx;
    const colors = chars.map((c) => c.def.color);
    this.treasures = [];

    for (let i = 0; i < TREASURE_COUNT; i++) {
      const a = Math.random() * TAU;
      const r = 19.5 + Math.sqrt(Math.random()) * 11;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const y = world.heightFn(x, z);
      if (y < SEA_DROP + 0.6) continue;    // 海面より下には置かない

      const roll = Math.random();
      let kind = 'shell';
      if (roll > 0.92) kind = 'wreck';
      else if (roll > 0.55) kind = 'starfish';

      let mesh, mat, color = 0xffffff;
      if (kind === 'shell') {
        mat = toonMatUnique(0xffe6f0, { emissive: 0xffc0dd, emissiveIntensity: 0.25 });
        mesh = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 8, 0, TAU, 0, Math.PI / 2), mat);
        mesh.scale.set(1, 0.55, 1);
      } else if (kind === 'starfish') {
        color = colors[i % colors.length];
        mat = toonMatUnique(color, { emissive: color, emissiveIntensity: 0.3 });
        mesh = new THREE.Mesh(starGeometry(0.5, 0.22, 0.16), mat);
        mesh.rotation.x = -Math.PI / 2;
      } else {
        mat = toonMatUnique(0xffd23e, { emissive: 0xffaa00, emissiveIntensity: 0.4 });
        mesh = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 0.6), mat);
      }
      mesh.position.set(x, y + 0.3, z);
      mesh.castShadow = true;
      this.seabed.add(mesh);
      this.treasures.push({ mesh, mat, kind, color, alive: true, phase: Math.random() * TAU });
    }
  }

  dispose() {
    const { world, ui } = this.ctx;
    // 途中で止まっても 海面と UI は かならず もどす
    world.sea.position.y = 0;
    world.foamRings.forEach((r, i) => { r.position.y = 0.06 + i * 0.02; });
    ui.showTimer(false);
    ui.showTapLayer(false);
    ui.showScore(false);
    ui.setMinigameMode(false);
    this.playing = false;
    this.treasures.length = 0;
    this.fishes.length = 0;
    this.picked.clear();
    this.targets.clear();
    super.dispose();
    this.seabed = null;
  }
}
