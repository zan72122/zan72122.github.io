// 🌌 ほしぞら すごろく(W-11)
//
// 夜がきて島が夜色に沈み、タワーの星から光の柱がのびて 4人が y = +72 の星空エリアへ吸い上げられる。
// 星空エリアは 24マスの「星の輪」で、1人1回ずつサイコロを振って進む。
// **通った星が線でつながって星座になる**。最後の1本をつないだ子が ⭐ を取る。
// 手番が最後の子ほど完成担当になりやすいので、これも下位救済である。
//
// 星空グループは islandGroup の子にはせず、ctx.scene 直下の y = 72 のオフセットグループにする
// (設計書 9.5 結論1。rides.js が どうくつ・タコすけを scene 直下に置いているのと同じ方式)。
// islandGroup に入れると _paintIsland や refreshAnchors の走査対象と紛れるためである。
// 所有するのは night.js 自身で、_own() により WorldEventBase.dispose が geometry と material を解放する。
//
// gfx.js の変更は skyMaterial の uStars uniform 1つだけ(設計書 9.5 結論2)。
// 既定 0 なので分岐が走らず、Phase 0〜4 の空は1ピクセルも変わらない。
// night.js が 0→1→0 へ tween し、dispose() で必ず 0 に戻す。
//
// **くらやみ禁止が この本の設計の要である**(0.3 #7)。starrynight は sun 0.35 / hemi 0.55 と
// 下限そのものなので、月・ちょうちん・ホタル・24個の星マスを すべて emissive で光らせ、
// _paintIsland('night') の倍率は 0.55 より下げない(設計書 9.5 リスク欄)。

import * as THREE from '../../vendor/three.module.min.js';
import { toonMat, toonMatUnique, starGeometry, lightningGeometry } from '../gfx.js';
import { CONFIG } from '../config.js';
import { buildStarRing, constellationCoins, constellationFinisher } from '../rules.js';
import { easeInOut, easeOut } from '../tween.js';
import { dbg } from '../debug.js';
import { WorldEventBase } from './base.js';

const TAU = Math.PI * 2;
const PAINT_STEPS = 40;       // 250ms × 40 = 10秒。_paintIsland は毎フレーム呼ばない
const UNPAINT_STEPS = 24;     // 250ms × 24 = 6秒
const DICE_FACES = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣'];
const SHOOT_COINS = 5;        // 流れ星タップの コイン雨

export class NightEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.skyGroup = null;      // 星空エリア(scene 直下・y = NIGHT_LIFT)
    this.ringTypes = [];       // buildStarRing の戻り値
    this.stars = [];           // { group, mat, type, local }
    this.links = [];           // つないだ線のメッシュ
    this.linkedCount = 0;      // つないだ線の本数
    this.linkedPerTurn = [];   // 各手番でつないだ本数
    this.order = [];           // 手番(chars の添字)
    this.advance = new Map();  // char → のりばから進んだ枚数
    this.onRing = new Set();
    this.lanterns = [];
    this.fireflies = [];
    this.moon = null;
    this.pillar = null;
    this.shootStar = null;     // いま流れている流れ星(タップの的)
    this.shootTaken = 0;
    this._t = 0;
    this._tapHandler = null;
    this._shootHandler = null;
  }

  async run() {
    await this._trigger();   // ① きっかけ 10秒
    await this._liftUp();    // ② 変化 12秒
    await this._play();      // ③ 遊び 40秒
    await this._settle();    // ④ 収束 12秒
  }

  // ---------- 毎フレーム ----------
  update(dt) {
    this._t += dt;
    // 星マスは ゆっくり回って またたく
    this.stars.forEach((s, i) => {
      s.group.rotation.y += dt * 0.6;
      s.group.position.y = s.local.y + Math.sin(this._t * 1.2 + i * 0.5) * 0.16;
      if (s.mat) s.mat.emissiveIntensity = 0.7 + Math.sin(this._t * 2.4 + i) * 0.25;
    });
    // ホタルは ふわふわ
    this.fireflies.forEach((f, i) => {
      const a = this._t * (0.3 + (i % 5) * 0.06) + i;
      f.position.x = f.userData.cx + Math.cos(a) * f.userData.r;
      f.position.z = f.userData.cz + Math.sin(a * 1.3) * f.userData.r;
      f.position.y = f.userData.cy + Math.sin(this._t * 2 + i) * 0.4;
      if (f.material) f.material.emissiveIntensity = 0.7 + Math.sin(this._t * 4 + i) * 0.3;
    });
    // ちょうちんは ゆらゆら
    this.lanterns.forEach((l, i) => {
      l.rotation.z = Math.sin(this._t * 1.1 + i) * 0.14;
    });
    if (this.moon) this.moon.rotation.y += dt * 0.08;
    // 流れ星は 横切る
    if (this.shootStar) {
      const u = this.shootStar.userData;
      u.t += dt;
      const k = Math.min(1, u.t / u.dur);
      this.shootStar.position.lerpVectors(u.from, u.to, k);
      this.shootStar.visible = k < 1;
    }
  }

  // ---------- ① きっかけ(約10秒) ----------
  async _trigger() {
    this.stage = 'trigger';
    const { world, rig, audio, wait } = this.ctx;
    audio.stopBgm();
    rig.setOverview();
    audio.chime(0);
    audio.startBgm('night');

    this._buildNightLights();
    this.ctx.banner(
      '<span class="icon">🌌</span>よるが きた<span class="sub">ほしが ひかりだしたよ</span>',
      2800,
    );

    // 島を夜色へ。_paintIsland は 17,689頂点を なめるので 0.25秒に1回の低頻度で呼ぶ(2.3 の実装規約)。
    // 空の星(uStars)も同じループで 0 → 1 へ上げる。
    const skyMat = world.skyMat;
    for (let i = 0; i < PAINT_STEPS; i++) {
      const k = (i + 1) / PAINT_STEPS;
      world._paintIsland('night', { amount: k });
      if (skyMat?.uniforms?.uStars) skyMat.uniforms.uStars.value = k;
      // ちょうちんとホタルを だんだん点ける
      this.lanterns.forEach((l, n) => { l.visible = k > n / this.lanterns.length; });
      this.fireflies.forEach((f, n) => { f.visible = k > n / this.fireflies.length; });
      if (this.moon) this.moon.scale.setScalar(Math.max(0.001, easeOut(k)));
      if (i % 8 === 0) audio.chime(i / 8);
      await wait(250);
    }
    world._paintIsland('night');
    if (skyMat?.uniforms?.uStars) skyMat.uniforms.uStars.value = 1;
    dbg.push({ kind: 'state', id: 'night', from: 'idle', to: 'trigger', why: 'paint=night' });
  }

  // ---------- ② 変化(約12秒) ----------
  async _liftUp() {
    this.stage = 'change';
    const { world, chars, rig, audio, tweens, wait } = this.ctx;
    this._buildSkyArea();
    this._buildPillar();

    audio.sparkle();
    // タワーの星が つよく光る
    const star = world.bigStar;
    const baseEm = star?.material?.emissiveIntensity ?? 0.45;
    tweens.add(3, (k) => {
      if (star?.material) star.material.emissiveIntensity = baseEm + 1.4 * easeInOut(k);
      if (this.pillar) {
        this.pillar.scale.y = Math.max(0.001, easeOut(k));
        this.pillar.children.forEach((c) => {
          if (c.material) c.material.opacity = 0.55 * easeOut(k);
        });
      }
    });
    await this.ctx.banner(
      '<span class="icon">✨</span>ひかりの はしら!<span class="sub">ほしぞらへ のぼろう</span>', 2000,
    );

    dbg.push({
      kind: 'state', id: 'night', from: 'trigger', to: 'change',
      why: `lift=${CONFIG.NIGHT_LIFT}`,
    });

    // 4人を 順に吸い上げる
    rig.setManual(
      new THREE.Vector3(0, CONFIG.NIGHT_LIFT * 0.4, 46),
      new THREE.Vector3(0, CONFIG.NIGHT_LIFT * 0.4, 0),
    );
    for (let i = 0; i < chars.length; i++) {
      const c = chars[i];
      audio.tone({ freq: 400 + i * 70, type: 'sine', dur: 1.1, vol: 0.18, slide: 700 });
      this.onRing.add(c);
      this.advance.set(c, 0);
      await this.ctx.hopFree(c, this._starWorldPos(0, c), 1.0, { hopHeight: 12, silent: true });
    }
    rig.setManual(
      new THREE.Vector3(0, CONFIG.NIGHT_LIFT + 16, 34),
      new THREE.Vector3(0, CONFIG.NIGHT_LIFT, 0),
    );
    if (this.pillar) this.pillar.visible = false;
    await wait(200);
  }

  // ---------- ③ 遊び(約40秒) ----------
  async _play() {
    this.stage = 'play';
    const { chars, rig } = this.ctx;

    // 手番は 盤面の並び順(先手が不利 = 下位救済。設計書 9.5 のスリル欄)
    this.order = chars.map((_, i) => i);
    this.linkedPerTurn = this.order.map(() => 0);

    dbg.push({
      kind: 'state', id: 'night', from: 'change', to: 'play',
      why: `ring=${this.ringTypes.join(',')}`
        + ` order=${this.order.map((i) => chars[i].def.id).join('>')}`,
    });

    await this.ctx.banner(
      '<span class="icon">🌠</span>ほしを つないで せいざを つくろう!<span class="sub">タップで サイコロ</span>',
      2200,
    );

    for (let t = 0; t < this.order.length; t++) {
      const char = chars[this.order[t]];
      if (!char) continue;
      rig.setFollow(char);
      const n = await this._rollDice(char);
      const linked = await this._walkRing(char, n);
      this.linkedPerTurn[t] = linked;
      await this._payLinks(char, linked);
      await this._shootingStar(char);
    }
    rig.setManual(
      new THREE.Vector3(0, CONFIG.NIGHT_LIFT + 20, 36),
      new THREE.Vector3(0, CONFIG.NIGHT_LIFT, 0),
    );
  }

  // 1〜6のサイコロ。_takeTurn は通らないので ここで簡単に振る。
  async _rollDice(char) {
    const { ui, audio, wait } = this.ctx;
    audio.dice();
    ui.showDice(true, '🎲');
    if (char.isPlayer) await this._waitTap(5000, 'dice');
    else await wait(800);
    const n = 1 + Math.floor(Math.random() * 6);
    ui.showDice(true, DICE_FACES[n - 1]);
    audio.diceResult(n);
    await this.ctx.banner(`<span class="icon">${DICE_FACES[n - 1]}</span>${n} だ!`, 900);
    ui.showDice(false);
    return n;
  }

  // 出た目のぶん 星の輪を わたる。通った星のあいだに線を引く。
  async _walkRing(char, steps) {
    const { audio } = this.ctx;
    const count = CONFIG.NIGHT_RING_COUNT;
    let linked = 0;
    for (let s = 0; s < steps; s++) {
      const from = (this.advance.get(char) || 0) % count;
      const next = (this.advance.get(char) || 0) + 1;
      this.advance.set(char, next);
      audio.hop(s);
      await this.ctx.hopFree(char, this._starWorldPos(next % count, char), 0.38, {
        hopHeight: 0.9, silent: true,
      });
      // 'gap'(まだ暗い星)は線がつながらない
      if (this.ringTypes[next % count] === 'gap') continue;
      this._addLink(from, next % count);
      linked++;
      this.linkedCount++;
      audio.chime(s % 4);
    }
    return linked;
  }

  // つないだ線のぶん コインを配る
  async _payLinks(char, linked) {
    const { ui, fx, audio } = this.ctx;
    const coins = constellationCoins(linked, CONFIG.NIGHT_RING_COUNT);
    if (coins <= 0) return;
    char.coins += coins;
    for (let i = 0; i < Math.min(4, coins); i++) audio.coin(i);
    fx.coinBurst(char.root.position, 4 + coins);
    ui.updatePlayer(char);
    char.setMode('cheer');
    dbg.push({
      kind: 'result', id: 'night', why: 'night-link', to: char.def.id,
      chars: [{ id: char.def.id, linked, gain: coins, coins: char.coins }],
    });
    await this.ctx.banner(
      `<span class="icon">✨</span>${linked}ぼん つないだ!<span class="sub">🪙${coins}まい</span>`, 1500,
    );
    char.setMode('idle');
  }

  // 流れ星が横切る。タップできたら コインの雨。時間で必ず抜ける。
  async _shootingStar(char) {
    const { ui, fx, audio, wait } = this.ctx;
    if (!this.skyGroup) return;
    const shootLeft = this.ringTypes.filter((t) => t === 'shoot').length - this.shootTaken;
    if (shootLeft <= 0) { await wait(200); return; }

    this._buildShootStar();
    audio.whoosh();
    this.ctx.banner(
      '<span class="icon">🌠</span>ながれぼし!<span class="sub">タップ!</span>', 1400,
    );
    const hit = await this._waitTap(2600, 'shoot', true);
    if (this.shootStar) { this.shootStar.visible = false; }
    if (!hit) { await wait(150); return; }

    this.shootTaken++;
    char.coins += SHOOT_COINS;
    for (let i = 0; i < 4; i++) audio.coin(i);
    audio.chime(3);
    fx.rainConfetti(char.root.position.clone().add(new THREE.Vector3(0, 6, 0)), 6, 30, 8);
    fx.coinBurst(char.root.position, 10);
    ui.updatePlayer(char);
    char.setMode('cheer');
    dbg.push({
      kind: 'result', id: 'night', why: 'night-shoot', to: char.def.id,
      chars: [{ id: char.def.id, gain: SHOOT_COINS, coins: char.coins }],
    });
    await this.ctx.banner(
      `<span class="icon">🪙</span>コインの あめ!<span class="sub">🪙${SHOOT_COINS}まい</span>`, 1500,
    );
    char.setMode('idle');
  }

  // ---------- ④ 収束(約12秒) ----------
  async _settle() {
    this.stage = 'settle';
    const { world, chars, rig, audio, fx, tweens, wait } = this.ctx;

    // 星座を完成させた子が ⭐ を取る
    const fin = constellationFinisher(this.order, this.linkedPerTurn, CONFIG.NIGHT_RING_COUNT);
    const finisher = fin >= 0 ? chars[this.order[fin]] : null;
    dbg.push({
      kind: 'state', id: 'night', from: 'play', to: 'settle',
      why: `finisher=${finisher ? finisher.def.id : 'none'} linked=${this.linkedCount}`,
    });

    // 星座が いっせいに光る
    audio.sparkle();
    await tweens.add(1.8, (k) => {
      this.links.forEach((l) => {
        if (l.material) l.material.emissiveIntensity = 0.6 + Math.sin(k * Math.PI * 4) * 0.6;
      });
    });

    if (finisher) {
      finisher.stars += 1;
      audio.starGet();
      fx.burstConfetti(finisher.root.position, 40, 4, 6);
      this.ctx.ui.updatePlayer(finisher);
      finisher.setMode('cheer');
      dbg.push({
        kind: 'result', id: 'night', why: 'night-finisher', to: finisher.def.id,
        chars: [{ id: finisher.def.id, linked: this.linkedCount, stars: finisher.stars }],
      });
      await this.ctx.banner(
        `<span class="icon">⭐</span>せいざ かんせい!<span class="sub">${finisher.def.emoji} が ⭐1こ ゲット!</span>`,
        2200,
      );
      if (finisher.stars >= CONFIG.SUPER_STARS && finisher.form !== 'super') {
        audio.transform();
        finisher.setForm('super');
        fx.sparkleBurst(finisher.root.position.clone().add(new THREE.Vector3(0, 1, 0)), 20, 0xfff6a8, 2);
        await this.ctx.banner(
          `<span class="icon">${finisher.def.emoji}✨</span>スーパー${finisher.def.name}に へんしん!`, 1800,
        );
      }
      finisher.setMode('idle');
      this.ctx.moveStar();
    }

    // 星座が ほどけて降る
    audio.yay();
    fx.rainConfetti(new THREE.Vector3(0, CONFIG.NIGHT_LIFT, 0), 16, 60, 12);
    await tweens.add(1.4, (k) => {
      this.links.forEach((l) => {
        l.scale.setScalar(Math.max(0.001, 1 - k));
        if (l.material) l.material.opacity = 0.9 * (1 - k);
      });
    });

    // 全員を 本島の じぶんのマスへ おろす(tileIndex は そもそも動かしていない)
    rig.setOverview();
    audio.fanfare();
    const backs = chars.map((c) => this.ctx.hopTo(c, c.tileIndex, 1.1));
    await Promise.all(backs);
    chars.forEach((c) => { c.setHopHeight(0); c.land(); c.setMode('cheer'); });
    this.onRing.clear();

    // 朝になる。島の色と 空の星を もとへ戻す。
    const skyMat = world.skyMat;
    for (let i = 0; i < UNPAINT_STEPS; i++) {
      const k = 1 - (i + 1) / UNPAINT_STEPS;
      world._paintIsland('night', { amount: k });
      if (skyMat?.uniforms?.uStars) skyMat.uniforms.uStars.value = k;
      this.lanterns.forEach((l, n) => { l.visible = k > n / this.lanterns.length; });
      this.fireflies.forEach((f, n) => { f.visible = k > n / this.fireflies.length; });
      if (this.moon) this.moon.scale.setScalar(Math.max(0.001, k));
      await wait(250);
    }
    world._paintIsland('default');
    if (skyMat?.uniforms?.uStars) skyMat.uniforms.uStars.value = 0;

    // タワーの星を もとの明るさへ
    if (world.bigStar?.material) world.bigStar.material.emissiveIntensity = 0.45;
    chars.forEach((c) => c.setMode('idle'));
    await this.ctx.banner(
      '<span class="icon">🌅</span>あさに なった!<span class="sub">おかえりなさーい</span>', 1800,
    );

    dbg.push({
      kind: 'state', id: 'night', from: 'settle', to: 'landed',
      why: `groundedMax=${Math.max(...chars.map((c) => {
        const a = world.tileAnchor(c.tileIndex);
        const p = c.root.position;
        return Math.max(Math.hypot(p.x - a.x, p.z - a.z), Math.abs(p.y - a.y));
      })).toFixed(3)} paint=default`,
    });
    await wait(200);
  }

  // ---------- 小道具 ----------

  // 月・ちょうちん・ホタル。くらやみ禁止のための発光体である(設計書 9.5 リスク欄)。
  _buildNightLights() {
    const { scene, world } = this.ctx;

    // 月。SphereGeometry(4) の自発光。画面のいちばん明るい点にする。
    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(6, 22, 16),
      toonMatUnique(0xfff8e0, { emissive: 0xfff2c8, emissiveIntensity: 0.95 }),
    );
    moon.position.set(-46, 44, -52);
    moon.scale.setScalar(0.001);
    scene.add(moon);
    this.moon = this._own(moon);

    // ちょうちん。島のまわりに12個。島グループの子にして いっしょに動く。
    const lanternColors = [0xffb37f, 0xff9dbe, 0xffe08f, 0x9fe8ff];
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * TAU + 0.2;
      const r = 22 + (i % 3) * 2.4;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const g = new THREE.Group();
      const color = lanternColors[i % lanternColors.length];
      const body = new THREE.Mesh(
        new THREE.SphereGeometry(0.95, 14, 10),
        toonMatUnique(color, { emissive: color, emissiveIntensity: 0.9 }),
      );
      body.scale.y = 1.25;
      g.add(body);
      const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.13, 3.4, 6), toonMat(0x8a6a4a),
      );
      pole.position.y = -2.4;
      g.add(pole);
      g.position.set(x, Math.max(world.heightFn(x, z), 0.4) + 3.6, z);
      g.visible = false;
      world.islandGroup.add(g);
      this.lanterns.push(this._own(g));
    }

    // ホタル。島の上を ふわふわ。
    for (let i = 0; i < 26; i++) {
      const a = Math.random() * TAU;
      const r = 6 + Math.random() * 20;
      const cx = Math.cos(a) * r;
      const cz = Math.sin(a) * r;
      const f = new THREE.Mesh(
        new THREE.SphereGeometry(0.22, 8, 6),
        toonMatUnique(0xd8ff9f, { emissive: 0xaaff5c, emissiveIntensity: 0.9 }),
      );
      f.userData = {
        cx, cz, r: 1.6 + Math.random() * 2.4,
        cy: Math.max(world.heightFn(cx, cz), 0.4) + 1.4 + Math.random() * 2.4,
      };
      f.position.set(cx, f.userData.cy, cz);
      f.visible = false;
      world.islandGroup.add(f);
      this.fireflies.push(this._own(f));
    }
  }

  // タワーの星からのびる光の柱
  _buildPillar() {
    const { world } = this.ctx;
    const g = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const col = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6 + i * 0.9, 2.6 + i * 1.2, CONFIG.NIGHT_LIFT, 16, 1, true),
        toonMatUnique(0xdfe8ff, {
          emissive: 0xaebfff, emissiveIntensity: 0.8,
          transparent: true, opacity: 0, side: THREE.DoubleSide,
        }),
      );
      col.position.y = CONFIG.NIGHT_LIFT / 2 + 6;
      g.add(col);
    }
    g.scale.y = 0.001;
    world.islandGroup.add(g);
    this.pillar = this._own(g);
  }

  // 星空エリア。scene 直下の y = NIGHT_LIFT に置くオフセットグループ(設計書 9.5 結論1)。
  _buildSkyArea() {
    const { scene, chars } = this.ctx;
    const g = new THREE.Group();
    g.position.y = CONFIG.NIGHT_LIFT;
    scene.add(g);
    this.skyGroup = this._own(g);

    this.ringTypes = buildStarRing(chars, Math.random, CONFIG.NIGHT_RING_COUNT);
    for (let i = 0; i < CONFIG.NIGHT_RING_COUNT; i++) {
      const type = this.ringTypes[i];
      const sg = new THREE.Group();
      // 'gap' の星も まっ暗にはしない(くらやみ禁止)。うすい青でひかる。
      const color = type === 'shoot' ? 0xfff1b0 : type === 'gap' ? 0x9fb7ff : 0xdfe8ff;
      const glow = type === 'shoot' ? 0xffcf4d : type === 'gap' ? 0x5f7fd8 : 0xaebfff;
      const mat = toonMatUnique(color, { emissive: glow, emissiveIntensity: 0.7 });
      const star = new THREE.Mesh(starGeometry(0.5, 0.24, 0.16), mat);
      star.rotation.x = -Math.PI / 2;
      star.scale.setScalar(type === 'gap' ? 1.4 : 2.2);
      sg.add(star);
      // 足場(うすい円盤)。星の上に立っていると わかるようにする。
      const pad = new THREE.Mesh(
        new THREE.CylinderGeometry(1.05, 0.9, 0.16, 16),
        toonMatUnique(0x6a7fd0, {
          emissive: 0x3f56a8, emissiveIntensity: 0.5, transparent: true, opacity: 0.8,
        }),
      );
      pad.position.y = -0.28;
      sg.add(pad);

      const local = this._starLocal(i);
      sg.position.copy(local);
      g.add(sg);
      this.stars.push({ group: sg, mat, type, local });
    }
  }

  _starLocal(i) {
    const count = CONFIG.NIGHT_RING_COUNT;
    const a = (i / count) * TAU;
    const r = CONFIG.NIGHT_RING_RADIUS;
    return new THREE.Vector3(Math.cos(a) * r, Math.sin(i * 0.9) * 1.2, Math.sin(a) * r);
  }

  // 星 i の ワールド座標(キャラの ずらしぶん こみ)
  _starWorldPos(i, char) {
    const s = this.stars[i];
    const local = s ? s.local : this._starLocal(i);
    const p = local.clone();
    p.y += CONFIG.NIGHT_LIFT + 0.35;
    return char ? p.add(this.ctx.charOffset(char)) : p;
  }

  // 星 a と 星 b を 線でつなぐ。lightningGeometry を細く再利用する(設計書 9.5 結論1)。
  _addLink(a, b) {
    if (!this.skyGroup) return;
    const pa = this._starLocal(a);
    const pb = this._starLocal(b);
    const len = pa.distanceTo(pb);
    const mat = toonMatUnique(0xfff6d8, {
      emissive: 0xffe08f, emissiveIntensity: 0.6, transparent: true, opacity: 0.9,
    });
    const line = new THREE.Mesh(lightningGeometry(1, 0.03), mat);
    line.scale.set(0.5, Math.max(0.1, len), 0.5);
    line.position.copy(pa.clone().lerp(pb, 0.5));
    line.lookAt(pb);
    line.rotateX(Math.PI / 2);
    this.skyGroup.add(line);
    this.links.push(line);
  }

  // 流れ星。星空エリアの端から端へ横切る。
  _buildShootStar() {
    if (!this.skyGroup) return;
    if (!this.shootStar) {
      const mat = toonMatUnique(0xfff8e0, { emissive: 0xffcf4d, emissiveIntensity: 1.0 });
      const s = new THREE.Mesh(starGeometry(0.9, 0.42, 0.3), mat);
      s.rotation.x = -Math.PI / 2;
      this.skyGroup.add(s);
      this.shootStar = s;
    }
    const a = Math.random() * TAU;
    const r = CONFIG.NIGHT_RING_RADIUS + 9;
    this.shootStar.visible = true;
    this.shootStar.userData = {
      t: 0, dur: 2.6,
      from: new THREE.Vector3(Math.cos(a) * r, 5, Math.sin(a) * r),
      to: new THREE.Vector3(Math.cos(a + Math.PI) * r, -3, Math.sin(a + Math.PI) * r),
    };
    this.shootStar.position.copy(this.shootStar.userData.from);
  }

  // タップ1回を待つ。時間で必ず抜けるので、遊ばれなくても進行が止まらない。
  // wantsHit が true なら「タップできたか」を返す(流れ星用)。
  _waitTap(timeoutMs = 4000, why = 'tap', wantsHit = false) {
    const { ui } = this.ctx;
    ui.showTapLayer(true);
    return new Promise((resolve) => {
      let done = false;
      const finish = (byTap) => {
        if (done) { dbg.push({ kind: 'input-reject', id: 'night', why: 'already-done' }); return; }
        done = true;
        dbg.push(byTap
          ? { kind: 'input-accept', id: 'night', why }
          : { kind: 'input-reject', id: 'night', why: `timeout-${why}` });
        clearTimeout(timer);
        this._tapHandler = null;
        this.ctx.setTapHandler(null);
        ui.showTapLayer(false);
        resolve(wantsHit ? !!byTap : undefined);
      };
      const timer = setTimeout(() => finish(false), timeoutMs);
      this._tapHandler = finish;
      this.ctx.setTapHandler((ndc, px) => {
        if (px) ui.emojiBurst(px.x, px.y, wantsHit ? '🌠' : '👉');
        finish(true);
      });
    });
  }

  onTap() {
    if (!this._tapHandler) { dbg.push({ kind: 'input-reject', id: 'night', why: 'not-waiting' }); return; }
    this._tapHandler(true);
  }

  dispose() {
    const { world, ui, chars } = this.ctx;
    // 途中で止まっても、島の色・空の星・タワーの星・UI は かならず もどす
    world._paintIsland('default');
    if (world.skyMat?.uniforms?.uStars) world.skyMat.uniforms.uStars.value = 0;
    if (world.bigStar?.material) world.bigStar.material.emissiveIntensity = 0.45;
    this._tapHandler = null;
    ui.showTapLayer(false);
    ui.showDice(false);
    chars.forEach((c) => c.setHopHeight(0));
    this.onRing.clear();
    this.advance.clear();
    super.dispose();
    this.stars.forEach((s) => s.mat?.dispose?.());
    this.links.forEach((l) => l.material?.dispose?.());
    this.stars = [];
    this.links = [];
    this.lanterns = [];
    this.fireflies = [];
    this.moon = null;
    this.pillar = null;
    this.shootStar = null;
    this.skyGroup = null;
  }
}
