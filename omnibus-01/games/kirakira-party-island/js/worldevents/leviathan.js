// 🐢 しまは おおきな いきものの せなか だった!(W-06)
//
// ラウンド4のクライマックス。ずっと島だと思っていた地面が、
// 実は ねむっていた 巨大なカメの背中だった。目を覚まして 島ごと泳ぎ出す。
//
// 形が変わるのは `TERRAIN.breathe`(背中のうねり)だけで、
// 泳ぎの ゆれ・ジャンプは ぜんぶ `world.islandGroup` の剛体変換である(設計書 2.2)。
// `breathe` は 0→1 に **一度上げるだけ** で、毎フレーム書き戻して reshapeIsland を
// 呼びなおすことは しない(17,689頂点のフル再評価が 1.85ms なので破綻する・設計書 4.10)。
//
// 揺れのたびに全員のタイルが ±1 ずれるが、`voyageDrift` の配分は **合計が必ず0** なので
// 総進捗は保存される。最下位だけ「カメの首につかまる」+3マスを別枠でもらう。
//
// 顔は 目・まゆ・口の3パーツだけ、牙なし、口は にっこりの弧で 大きく開けない(4歳児配慮)。
// 巨大ガメの造形は `rides.js` の `buildTurtleParts(scale, opts)` を 11倍で呼ぶ。
// こうらは「島そのもの」なので出さない(ExecPlan Decision Log)。
//
// 落ちてくるコインは ParticleFX を使わず 専用メッシュのプールで作る(設計書 8章 #9)。

import * as THREE from '../../vendor/three.module.min.js';
import { toonMat, toonMatUnique } from '../gfx.js';
import { CONFIG } from '../config.js';
import { buildTurtleParts } from '../rides.js';
import { sneezeLanding, voyageDrift, voyageUnderdogBonus } from '../rules.js';
import { dbg } from '../debug.js';
import { WorldEventBase } from './base.js';

const TAU = Math.PI * 2;
const HEAD_R = 30;             // 頭が出る沖の半径(島の半径30 のすぐ外)
const HEAD_DEEP = -14;         // 浮上まえの頭の高さ
const HEAD_UP = 5.2;           // 浮上したあとの頭の高さ
const FLIPPER_R = 29;          // ヒレが出る半径
const COIN_POOL = 16;          // 同時に降っているコインの上限(専用メッシュ)
const COIN_FALL = 9;           // コインの落ちる速さ(units/s)
const SWAY_SEC = 3.5;          // 揺れ1回の秒数
const TILT = 0.085;            // 島の かたむき(rad)。4歳児が酔わない範囲
const ROLL = 0.12;             // カメラのロール(rad)
const TAP_RADIUS = 0.17;       // コインを ひろえる 画面上の ちかさ(NDC)

export class LeviathanEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.headGroup = null;
    this.eyes = [];
    this.flippers = [];
    this.coins = [];           // { mesh, active, vy, spin }
    this.petals = [];
    this.rainbow = null;
    this.lift = 0;             // いまの島の たかさ(ゆれ・ジャンプの土台)
    this.jumpY = 0;            // ジャンプぶんの うわのせ
    // islandGroup.position.y を書くのは update() だけにする。
    // トゥイーンは lift / jumpY を動かし、update が寝息のゆらぎを足して1回で書く。
    // (board.update は tweens.update → イベントの update の順に呼ぶ)
    this.active = false;
    // ホップ中は rideIsland と 島の上下を とめる。
    // board.update は tweens.update → イベントの update の順に呼ぶので、
    // とめないと ホップで書いた位置を rideIsland が その場で 上書きしてしまう。
    this._hopping = 0;
    this.swimming = false;
    this.tapping = false;
    this.grabbed = 0;
    this.grabsByChar = new Map();   // char → このジャンプで ひろった枚数
    this._t = 0;
    this._cpuTimer = 0;
    this._v = new THREE.Vector3();   // 画面座標に なおす ための作業用
    this._w = new THREE.Vector3();
  }

  async run() {
    await this._breathe();   // ① きっかけ  約10秒
    await this._awaken();    // ② 変化      約16秒
    await this._swim();      // ③ 遊び      約32秒
    await this._sneeze();    // ④ 収束      約14秒
  }

  // ---------- 毎フレーム ----------
  update(dt) {
    this._t += dt;
    const { world } = this.ctx;

    // 寝息・泳ぎの こまかい上下。reshapeIsland は呼ばない(設計書 4.10 リスク欄)。
    // islandGroup.position.y の書き手は ここ1か所だけである。
    if (this.active && !this._hopping) {
      const breath = Math.sin(this._t * (this.swimming ? 1.6 : 0.75))
        * (this.swimming ? 0.35 : 0.22);
      world.islandGroup.position.y = this.lift + this.jumpY + breath;
      this.ctx.rideIsland();
    }

    // ヒレを こいで、海の しまもようを ながす
    if (this.swimming) {
      this.flippers.forEach((f, i) => {
        f.rotation.z = Math.sin(this._t * 1.7 + i * 1.6) * 0.42;
        f.position.y = f.userData.baseY + Math.sin(this._t * 1.7 + i * 1.6) * 0.8;
      });
      if (world.seaMat?.uniforms?.flow) world.seaMat.uniforms.flow.value += dt * 7;
    }
    if (this.headGroup) {
      this.headGroup.rotation.z = Math.sin(this._t * 0.9) * 0.05;
    }

    // 落ちてくるコイン(専用メッシュ)
    for (const c of this.coins) {
      if (!c.active) continue;
      c.mesh.position.y -= COIN_FALL * dt;
      c.mesh.rotation.y += dt * 4.5;
      c.mesh.rotation.x += dt * 2.2;
      if (c.mesh.position.y <= c.floorY) this._deactivateCoin(c);
    }
    // くしゃみの花びら。ひらひら舞いおりる。
    for (const p of this.petals) {
      p.position.y -= dt * 1.6;
      p.position.x += Math.sin(this._t * 1.4 + p.position.z) * dt * 0.9;
      p.rotation.z += dt * 1.8;
      p.rotation.x += dt * 1.1;
    }
    if (this.tapping) this._cpuPickup(dt);
  }

  // ---------- ① きっかけ(約10秒) ----------
  async _breathe() {
    this.stage = 'trigger';
    const { world, rig, audio, tweens, wait } = this.ctx;
    rig.setOverview();
    audio.stopBgm();

    // 低い寝息。最初は だれも気づかない程度に 地面がうねりだす。
    audio.snore(3);
    this.ctx.banner(
      '<span class="icon">💤</span>ん?じめんが うごいてる…?',
      2600,
    );

    // 背中のうねり(頂点)と 6m の浮上(剛体)を いっしょに走らせる
    this.active = true;
    const lift = tweens.add(4, (k) => { this.lift = CONFIG.VOYAGE_LIFT * k; });
    const shape = world.reshapeIsland({
      to: { breathe: 1 }, seconds: 6, tweens,
      onFrame: () => { world.refreshAnchors({ tiles: true }); this.ctx.rideIsland(); },
    });
    await wait(2600);
    audio.snore(3);
    await Promise.all([lift, shape]);
    world.refreshAnchors({ tiles: true, decor: true, rides: true });
    audio.snore(2.5);
    await wait(1200);
  }

  // ---------- ② 変化(約16秒) ----------
  async _awaken() {
    this.stage = 'change';
    const { world, rig, audio, fx, tweens, wait } = this.ctx;
    this._buildLeviathan();

    // 沖に 山みたいな頭が ゆっくり浮上する
    rig.setLookAt(this.headGroup.position.clone().setY(HEAD_UP));
    audio.slideRumble(3.2);
    await tweens.add(6, (k) => {
      const e = k * k * (3 - 2 * k);
      this.headGroup.position.y = HEAD_DEEP + (HEAD_UP - HEAD_DEEP) * e;
      rig.setLookAt(this.headGroup.position.clone().setY(this.headGroup.position.y + 3));
    });
    audio.splash();
    fx.sparkleBurst(this.headGroup.position.clone().setY(1), 18, 0xbfe8ff, 2.4);

    // パチッと目を開ける
    await tweens.add(1.3, (k) => {
      this.eyes.forEach((e) => { e.scale.y = 0.06 + 0.94 * k; });
    });
    audio.boing();
    this.ctx.punch(1.3);
    await this.ctx.banner(
      '<span class="icon">🐢</span>しまは おおきな いきものの せなか だった!',
      2600,
    );

    // 海の四方から ヒレが ザバッと出る
    audio.splash();
    await tweens.add(3, (k) => {
      this.flippers.forEach((f, i) => {
        const on = Math.min(1, Math.max(0, k * 2 - i * 0.22));
        f.position.y = f.userData.baseY - 6 * (1 - on);
        f.scale.setScalar(0.4 + 0.6 * on);
      });
    });
    this.flippers.forEach((f) => { f.scale.setScalar(1); f.position.y = f.userData.baseY; });
    world.foamRings.forEach((r) => r.scale.set(1, 1, 1.6));   // 航跡にひきのばす
    audio.startBgm('voyage');
    this.swimming = true;
    await this.ctx.banner(
      '<span class="icon">🌊</span>しまごと およぎ だした!',
      2200,
    );
  }

  // ---------- ③ 遊び(約32秒) ----------
  async _swim() {
    this.stage = 'play';
    const { chars, world, rig, audio, tweens, ui, wait } = this.ctx;
    dbg.push({
      kind: 'state', id: 'awake', from: 'change', to: 'play',
      why: `sways=${CONFIG.VOYAGE_SWAYS} jumps=${CONFIG.VOYAGE_JUMPS}`
        + ` breathe=${world.islandWarp.breathe} lift=${CONFIG.VOYAGE_LIFT}`,
    });

    // --- 揺れ4回。揺れるたびに全員のタイルが ±1ずれる(合計は必ず0) ---
    const swayFrom = chars.map((c) => c.tileIndex);
    const swayTotal = chars.map(() => 0);
    for (let i = 0; i < CONFIG.VOYAGE_SWAYS; i++) {
      const sx = i % 2 === 0 ? 1 : -1;
      const sz = i < 2 ? 1 : -1;
      rig.setRoll(sz * ROLL, SWAY_SEC * 0.45);
      audio.whoosh();
      await tweens.add(SWAY_SEC, (k) => {
        const s = Math.sin(k * Math.PI);
        world.islandGroup.rotation.x = sx * TILT * s;
        world.islandGroup.rotation.z = sz * TILT * s;
      });
      world.islandGroup.rotation.set(0, 0, 0);
      rig.setRoll(0, SWAY_SEC * 0.4);

      const drift = voyageDrift(chars.length, Math.random, CONFIG.VOYAGE_SLIDE_MAX);
      drift.forEach((d, k) => { swayTotal[k] += d; });
      const moves = [];
      drift.forEach((d, k) => {
        if (!d) return;
        const to = ((chars[k].tileIndex + d) % world.tileCount + world.tileCount) % world.tileCount;
        moves.push(this._hop(chars[k], to, 0.45));
      });
      if (moves.length) {
        audio.slip();
        this.ctx.banner('<span class="icon">🌀</span>ゆれた!みんな ずれちゃった!', 1200);
        await Promise.all(moves);
      }
    }

    // 揺れの配分は 1回ごとに合計0なので、4回ぶんを足しても 合計は0である。
    dbg.push({
      kind: 'result', id: 'awake', why: 'awake-sway',
      to: `sways=${CONFIG.VOYAGE_SWAYS}`,
      chars: chars.map((c, k) => ({
        id: c.def.id, drift: swayTotal[k], from: swayFrom[k], to: c.tileIndex,
      })),
    });

    // 最下位だけ カメの首につかまって +3マス(合計0の制約とは別枠)
    const bonus = voyageUnderdogBonus(chars);
    if (bonus.index >= 0 && bonus.steps > 0) {
      const c = chars[bonus.index];
      audio.yahoo();
      this.ctx.banner(
        `<span class="icon">${c.def.emoji}🐢</span>くびに つかまった!`
        + `<span class="sub">${bonus.steps}マス すすむよ</span>`,
        1600,
      );
      const underdogFrom = c.tileIndex;
      for (let s = 0; s < bonus.steps; s++) {
        await this._hop(c, (c.tileIndex + 1) % world.tileCount, 0.3);
      }
      dbg.push({
        kind: 'result', id: 'awake', why: 'awake-underdog',
        to: c.def.id,
        chars: [{ id: c.def.id, steps: bonus.steps, from: underdogFrom, to: c.tileIndex }],
      });
    }

    // --- ジャンプ3回。そのたびに コインの雨が ふる ---
    for (let j = 0; j < CONFIG.VOYAGE_JUMPS; j++) {
      audio.whoosh();
      await tweens.add(1.2, (k) => { this.jumpY = Math.sin(k * Math.PI) * 5.5; });
      this.jumpY = 0;
      audio.splash();
      this.ctx.punch(1.15);

      this._dropCoins(8);
      this.grabbed = 0;
      this.grabsByChar.clear();
      const coinsFrom = chars.map((c) => c.coins);
      this.tapping = true;
      this._cpuTimer = 0;
      ui.showTapLayer(true);
      this.ctx.setTapHandler((ndc) => this.onTap(ndc));
      if (j === 0) this.ctx.banner('<span class="icon">🪙</span>コインの あめ!タッチ!', 1500);
      await wait(3200);
      this.ctx.setTapHandler(null);
      ui.showTapLayer(false);
      this.tapping = false;
      this._clearCoins();
      // コインの雨は ジャンプ1回につき 結果1件。1枚 = 🪙2枚ちょうど。
      dbg.push({
        kind: 'result', id: 'awake', why: 'awake-coinrain',
        to: `jump=${j + 1}/${CONFIG.VOYAGE_JUMPS} grabbed=${this.grabbed}`,
        chars: chars.map((c, k) => ({
          id: c.def.id,
          got: this.grabsByChar.get(c) || 0,
          coinsFrom: coinsFrom[k],
          coinsTo: c.coins,
        })),
      });
    }
  }

  // ---------- ④ 収束(約14秒) ----------
  async _sneeze() {
    this.stage = 'settle';
    const { chars, world, rig, audio, fx, tweens, ui, wait } = this.ctx;
    dbg.push({ kind: 'state', id: 'awake', from: 'play', to: 'settle', why: 'sneeze-start' });

    // 特大のくしゃみ。虹と花びらが ふきだす。
    this.ctx.banner('<span class="icon">😤</span>ふあ…ふあ…', 1400);
    await tweens.add(1.4, (k) => {
      this.headGroup.position.y = HEAD_UP + Math.sin(k * Math.PI) * 2.2;
      this.headGroup.rotation.x = -0.25 * Math.sin(k * Math.PI);
    });
    audio.sneeze();
    this.ctx.punch(1.6);
    this._buildPetals();
    fx.burstConfetti(new THREE.Vector3(0, 6, 0), 70, 6, 9);
    await tweens.add(1.2, (k) => {
      this.headGroup.rotation.x = 0.3 * (1 - k);
      this.jumpY = Math.sin(k * Math.PI) * 2.4;
    });
    this.jumpY = 0;
    await this.ctx.banner('<span class="icon">🌈</span>ハーックション!!', 1800);

    // 全員が ランダムなマスへ 吹きとばされて着地する(重複なし)
    const landing = sneezeLanding(chars, Math.random, world.tileCount);
    dbg.push({
      kind: 'result', id: 'awake', why: 'awake-sneeze',
      to: landing.join(','),
      chars: chars.map((c, i) => ({ id: c.def.id, from: c.tileIndex, to: landing[i] })),
    });
    audio.yahoo();
    await Promise.all(chars.map((c, i) => this._hop(c, landing[i], 0.9, { hopHeight: 2.4 })));
    chars.forEach((c) => c.setMode('cheer'));

    // カメは「どっこいしょ」と もういちど目を閉じる
    this.swimming = false;
    rig.setRoll(0, 1.2);
    rig.setOverview();
    audio.stopBgm();
    world.foamRings.forEach((r) => r.scale.set(1, 1, 1));
    if (world.seaMat?.uniforms?.flow) world.seaMat.uniforms.flow.value = 0;

    const sink = tweens.add(5, (k) => {
      this.headGroup.position.y = HEAD_UP + (HEAD_DEEP - HEAD_UP) * k;
      this.eyes.forEach((e) => { e.scale.y = Math.max(0.06, 1 - k * 1.4); });
      this.flippers.forEach((f) => { f.position.y = f.userData.baseY - 8 * k; });
      this.lift = CONFIG.VOYAGE_LIFT * (1 - k);
    });
    const shape = world.reshapeIsland({
      to: { breathe: 0 }, seconds: 5, tweens,
      onFrame: () => { world.refreshAnchors({ tiles: true }); this.ctx.rideIsland(); },
    });
    audio.snore(3);
    await Promise.all([sink, shape]);
    this.lift = 0;
    this.jumpY = 0;
    this.active = false;
    world.islandGroup.position.set(0, 0, 0);
    world.islandGroup.rotation.set(0, 0, 0);
    world.refreshAnchors({ tiles: true, decor: true, rides: true });
    this.ctx.rideIsland();

    // 以降そのラウンドは コイン2倍(moveMods は次のラウンド頭で必ずリセットされる)
    this.ctx.moveMods.coinDouble = true;
    audio.fanfare();
    await this.ctx.banner(
      '<span class="icon">🐢💤</span>また ねむっちゃった…'
      + '<span class="sub">こうらの おれいに このラウンドは 🪙2ばい!</span>',
      2600,
    );
    chars.forEach((c) => c.setMode('idle'));
    ui.showTapLayer(false);
    // カメラのロールと 背中のうねりは snapshot からは見えない。ここで1件だけ記録する。
    dbg.push({
      kind: 'state', id: 'awake', from: 'settle', to: 'asleep',
      why: `roll=${(rig._roll ?? 0).toFixed(4)} breathe=${world.islandWarp.breathe}`
        + ` coinDouble=${this.ctx.moveMods.coinDouble}`
        + ` groundedMax=${Math.max(...chars.map((c) => {
          const a = world.tileAnchor(c.tileIndex);
          const p = c.root.position;
          return Math.max(Math.hypot(p.x - a.x, p.z - a.z), Math.abs(p.y - a.y));
        })).toFixed(3)}`,
    });
    await wait(200);
  }

  // ホップしているあいだ、島の上下と rideIsland をとめる包み。
  async _hop(char, tileIndex, seconds, opts) {
    this._hopping++;
    try {
      await this.ctx.hopTo(char, tileIndex, seconds, opts);
    } finally {
      this._hopping = Math.max(0, this._hopping - 1);
    }
  }

  // ---------- タップ ----------
  // 4歳児の指は ねらいが あまいので、コインの当たり判定は
  // メッシュへの レイキャストではなく **画面上の ちかさ** で見る。
  // いちばん近いコインが しきい値のなかに あれば ひろえたことにする。
  onTap(ndc) {
    if (!this.tapping) { dbg.push({ kind: 'input-reject', id: 'awake', why: 'not-raining' }); return; }
    const cam = this.ctx.rig.camera;
    let best = null;
    let bestD = TAP_RADIUS;
    for (const c of this.coins) {
      if (!c.active) continue;
      this._v.copy(c.mesh.getWorldPosition(this._w)).project(cam);
      if (this._v.z > 1) continue;                 // カメラの うしろ
      const d = Math.hypot(this._v.x - ndc.x, this._v.y - ndc.y);
      if (d < bestD) { bestD = d; best = c; }
    }
    if (!best) { dbg.push({ kind: 'input-reject', id: 'awake', why: 'no-coin-near' }); return; }
    const me = this.ctx.chars.find((ch) => ch.isPlayer) || this.ctx.chars[0];
    dbg.push({ kind: 'input-accept', id: 'awake', to: me.def.id, why: 'coin' });
    this._collect(best, me);
  }

  // CPU も ときどき 1枚ひろう(プレイヤーだけが得をしないように)
  _cpuPickup(dt) {
    this._cpuTimer -= dt;
    if (this._cpuTimer > 0) return;
    this._cpuTimer = 0.85;
    const live = this.coins.filter((c) => c.active);
    if (!live.length) return;
    const others = this.ctx.chars.filter((c) => !c.isPlayer);
    if (!others.length) return;
    const who = others[Math.floor(Math.random() * others.length)];
    this._collect(live[0], who);
  }

  _collect(coin, char) {
    const { ui, fx, audio } = this.ctx;
    this._deactivateCoin(coin);
    char.coins += 2;
    ui.updatePlayer(char);
    audio.coin(this.grabbed % 3);
    this.grabbed++;
    this.grabsByChar.set(char, (this.grabsByChar.get(char) || 0) + 1);
    fx.sparkleBurst(coin.mesh.position, 6, 0xffe066, 1.2);
    char.setMode('cheer');
    setTimeout(() => char.setMode('idle'), 500);
  }

  // ---------- 小道具 ----------
  _buildLeviathan() {
    const { world, scene } = this.ctx;
    // 造形は rides.js の1本に まとめてある。11倍の個体を作って 頭とヒレだけを使う。
    const parts = buildTurtleParts(CONFIG.VOYAGE_TURTLE_SCALE, { face: true });

    // --- 頭。顔のパーツを 頭の中心ぞろえにして、すこし前へ出す ---
    const g = new THREE.Group();
    const hp = parts.head.position.clone();
    const face = [parts.head, ...parts.eyes, ...parts.brows];
    if (parts.mouth) face.push(parts.mouth);
    for (const p of face) {
      p.position.sub(hp);
      p.position.z *= 1.22;      // 目・まゆ・口が こうらに うもれないように
      g.add(p);
    }
    this.eyes = parts.eyes;
    this.eyes.forEach((e) => { e.scale.y = 0.06; });   // 最初は 目を閉じている
    g.position.set(0, HEAD_DEEP, HEAD_R);
    g.rotation.y = Math.PI;      // 顔を島のほうへ 向ける
    scene.add(g);
    this._own(g);
    this.headGroup = g;

    // --- ヒレ4枚。島のふちの外へ 置きなおす ---
    const fg = new THREE.Group();
    this.flippers = parts.flippers.map((f, i) => {
      const a = (i / 4) * TAU + Math.PI / 4;
      const baseY = -0.4;
      f.position.set(Math.cos(a) * FLIPPER_R, baseY - 6, Math.sin(a) * FLIPPER_R);
      f.rotation.y = -a;
      f.userData.baseY = baseY;
      f.scale.setScalar(0.4);
      fg.add(f);
      return f;
    });
    // つかわない こうら・ふち・模様は 捨てる(島そのものが こうらなので出さない)
    for (const junk of [parts.shell, parts.rim, ...parts.spots]) {
      junk.geometry?.dispose?.();
      junk.material?.dispose?.();
    }
    scene.add(fg);
    this._own(fg);
    this.flipperGroup = fg;

    // --- コインのプール(ParticleFX は使わない・設計書 8章 #9) ---
    const coinGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.1, 14);
    const cg = new THREE.Group();
    for (let i = 0; i < COIN_POOL; i++) {
      const mesh = new THREE.Mesh(
        coinGeo,
        toonMatUnique(0xffd23e, { emissive: 0xffa300, emissiveIntensity: 0.35 }),
      );
      mesh.rotation.x = Math.PI / 2;
      mesh.visible = false;
      cg.add(mesh);
      this.coins.push({ mesh, active: false, floorY: 0 });
    }
    world.islandGroup.add(cg);
    this._own(cg);
    this.coinGroup = cg;
  }

  _dropCoins(n) {
    const { world } = this.ctx;
    let placed = 0;
    for (const c of this.coins) {
      if (placed >= n) break;
      if (c.active) continue;
      const a = Math.random() * TAU;
      const r = 5 + Math.random() * 13;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      c.mesh.position.set(x, 16 + Math.random() * 7, z);
      c.floorY = world.heightFn(x, z) + 0.3;
      c.mesh.visible = true;
      c.active = true;
      placed++;
    }
  }

  _deactivateCoin(c) {
    c.active = false;
    c.mesh.visible = false;
  }

  _clearCoins() {
    for (const c of this.coins) this._deactivateCoin(c);
  }

  // くしゃみで ふきだす 虹と花びら
  _buildPetals() {
    const { world } = this.ctx;
    const g = new THREE.Group();
    const COLORS = [0xff9dbe, 0xffe066, 0x9be07a, 0xbfe8ff, 0xc19bff];
    const petalGeo = new THREE.CircleGeometry(0.34, 6);
    for (let i = 0; i < 26; i++) {
      const p = new THREE.Mesh(petalGeo, toonMat(COLORS[i % COLORS.length]));
      const a = Math.random() * TAU;
      const r = 3 + Math.random() * 14;
      p.position.set(Math.cos(a) * r, 8 + Math.random() * 8, Math.sin(a) * r);
      p.rotation.set(Math.random() * TAU, Math.random() * TAU, Math.random() * TAU);
      g.add(p);
      this.petals.push(p);
    }
    const arc = new THREE.Mesh(
      new THREE.TorusGeometry(19, 0.75, 8, 40, Math.PI),
      toonMatUnique(0xffd8e8, { emissive: 0xff9dbe, emissiveIntensity: 0.45 }),
    );
    arc.position.set(0, 1.5, 0);
    arc.rotation.y = Math.PI / 2;
    g.add(arc);
    this.rainbow = arc;
    world.islandGroup.add(g);
    this._own(g);
    this.petalGroup = g;
  }

  dispose() {
    const { world, rig, ui } = this.ctx;
    // 2.1 の不変条件:run() の あとは islandGroup が単位変換へ もどっていること
    world.islandGroup.position.set(0, 0, 0);
    world.islandGroup.rotation.set(0, 0, 0);
    rig.setRoll(0, 0);
    if (world.seaMat?.uniforms?.flow) world.seaMat.uniforms.flow.value = 0;
    world.foamRings.forEach((r) => r.scale.set(1, 1, 1));
    // 背中のうねりを もどす(seconds: 0 は同期に終わるので dispose から呼べる)
    world.reshapeIsland({ to: { breathe: 0 }, seconds: 0 });
    world.refreshAnchors({ tiles: true, decor: true, rides: true });
    ui.showTapLayer(false);
    this.active = false;
    this._hopping = 0;
    this.swimming = false;
    this.tapping = false;
    this.coins.length = 0;
    this.petals.length = 0;
    this.grabsByChar.clear();
    this.eyes = [];
    this.flippers = [];
    this.headGroup = null;
    super.dispose();
  }
}
