// 🚀 しまロケット はっしゃ(W-10)
//
// かざんが噴射口になり、島ごと y = 220 の宇宙へ上がる。
// 惑星8個(🪙3 / ⭐1 / 🌀2 / 🍩2)を1人1回ずつ選んで往復し、4色のパラシュートで着水して帰る。
//
// islandGroup.position.y の **剛体移動** だけで、TERRAIN も頂点も1つも触らない(設計書 9.4 結論2)。
// sky.js(W-01)が 46 で実証ずみの方式で、220 でも rig.setFollow(char) は
// char.root.position(ワールド)を読むので正しく追従する。
// world.sea / foamRings / 遠景の雲は scene 直下なので置き去りになり、
// これが狙いどおり「海が小さくなる」絵になる。**収束で必ず y = 0 に戻す**(2.1 の不変条件)。
//
// 遠景のひらけかたは WEATHERS.space の near/far だけで作る(設計書 9.4 結論3)。
// _updateWeather がすでに far / near を lerp しているので、gfx.js も main.js も触らない。
// 天気の復帰は entry.weatherOverride と board.js の finally が自動でやる。
//
// くらやみ禁止(0.3 #7)。space は hemi 0.6 / sun 0.55 だが それだけでは足りないので、
// 惑星8個を emissive で自発光させ、星屑を常時まいて 画面の30%以上を光らせる(設計書 9.4)。
//
// 🌀ぐるぐる星は順位を完全に反転する最大の逆転札である。4歳児に「⭐を取られた」と
// 見せないため、**演出は「みんなでシャッフル」** にして、取られた子にも 🎉 を出す(設計書 9.4 リスク欄)。

import * as THREE from '../../vendor/three.module.min.js';
import { toonMat, toonMatUnique, starGeometry } from '../gfx.js';
import { CONFIG } from '../config.js';
import { buildPlanets, planetPickWeight, swapRanks } from '../rules.js';
import { easeInOut, easeOut } from '../tween.js';
import { dbg } from '../debug.js';
import { WorldEventBase } from './base.js';

const TAU = Math.PI * 2;
const COUNTDOWN = ['3️⃣', '2️⃣', '1️⃣'];
const PLANET_LOOK = {
  coin: { color: 0xffd23e, glow: 0xffaa00, emoji: '🪙' },
  star: { color: 0xfff1b0, glow: 0xffcf4d, emoji: '⭐' },
  swap: { color: 0xb08fff, glow: 0x7f4fff, emoji: '🌀' },
  donut: { color: 0xffb3d9, glow: 0xff6fae, emoji: '🍩' },
};
const COIN_PLANET_GAIN = 6;
const DONUT_GAIN = 3;

export class RocketEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.planets = [];          // { group, mat, kind, local, used }
    this.kinds = [];            // buildPlanets の戻り値
    this.flameRing = null;
    this.chutes = [];
    this.lift = 0;
    this.flying = new Set();    // いま飛んでいる子(無重力 sin を かけない)
    this.picked = new Map();    // char → 選んだ惑星
    this.playing = false;
    this._t = 0;
    this._pickResolve = null;   // 惑星タップ待ちの解決関数
    this._raycaster = new THREE.Raycaster();
  }

  async run() {
    await this._trigger();   // ① きっかけ 10秒
    await this._launch();    // ② 変化 12秒
    await this._play();      // ③ 遊び 46秒
    await this._land();      // ④ 収束 20秒
  }

  // ---------- 毎フレーム ----------
  update(dt) {
    this._t += dt;
    // 惑星は ゆっくり自転して、明るさが 脈打つ(画面を光で満たす)
    this.planets.forEach((p, i) => {
      p.group.rotation.y += dt * (0.3 + i * 0.05);
      p.group.position.y = p.local.y + Math.sin(this._t * 0.7 + i) * 0.5;
      if (p.mat) p.mat.emissiveIntensity = 0.6 + Math.sin(this._t * 2 + i) * 0.15;
    });
    if (this.flameRing) {
      this.flameRing.rotation.y += dt * 1.6;
      this.flameRing.children.forEach((f, i) => {
        f.scale.y = 1 + Math.sin(this._t * 9 + i) * 0.35;
      });
    }
    // 無重力。飛んでいない子だけ ふわふわ浮かせる(飛行中は tween が hopHeight を書く)
    if (!this.playing) return;
    this.ctx.chars.forEach((c, i) => {
      if (this.flying.has(c)) return;
      c.setHopHeight(0.35 * Math.sin(this._t * 1.4 + i));
    });
  }

  // ---------- ① きっかけ(約10秒) ----------
  async _trigger() {
    this.stage = 'trigger';
    const { rig, audio, tweens, wait } = this.ctx;
    audio.stopBgm();
    rig.setOverview();
    audio.rumble();

    this._buildFlameRing();
    // 炎リングが ふわっと出る
    tweens.add(6, (k) => {
      const e = easeOut(k);
      if (this.flameRing) {
        this.flameRing.scale.setScalar(Math.max(0.001, e));
        this.flameRing.children.forEach((f) => {
          if (f.material) f.material.opacity = 0.9 * e;
        });
      }
    });

    for (let i = 0; i < COUNTDOWN.length; i++) {
      audio.countTick(3 - i);
      this.ctx.punch(1.3);
      await this.ctx.banner(
        `<span class="icon">${COUNTDOWN[i]}</span>しまロケット はっしゃ!`, 1700,
      );
    }
    dbg.push({ kind: 'state', id: 'rocket', from: 'idle', to: 'trigger', why: 'countdown=3' });
    await wait(300);
  }

  // ---------- ② 変化(約12秒) ----------
  async _launch() {
    this.stage = 'change';
    const { world, rig, audio, tweens, wait } = this.ctx;
    audio.startBgm('space');
    audio.noise({ dur: 4.5, vol: 0.2, filterFreq: 700 });
    audio.rise(9);

    const lift = CONFIG.ROCKET_LIFT;
    let punches = 0;
    dbg.push({ kind: 'state', id: 'rocket', from: 'trigger', to: 'change', why: `lift=${lift}` });

    await tweens.add(12, (k) => {
      // 加速度カーブ。はじめは ゆっくり、あとで ぐんと伸びる
      const accel = k * k * (3 - 2 * k) * 0.35 + k * k * k * 0.65;
      this.lift = lift * accel;
      world.islandGroup.position.y = this.lift;
      rig.setManual(
        new THREE.Vector3(0, this.lift + 30, 52 - accel * 10),
        new THREE.Vector3(0, this.lift - 6 * accel, 0),
      );
      this.ctx.rideIsland();
      if (k > 0.2 && k > 0.2 + punches * 0.05) { this.ctx.punch(0.35); punches++; }
    });
    world.islandGroup.position.y = lift;
    this.lift = lift;
    this.ctx.rideIsland();

    await this.ctx.banner(
      '<span class="icon">🚀</span>うちゅうに ついた!<span class="sub">わくせいへ とんで みよう</span>',
      2200,
    );
    await wait(200);
  }

  // ---------- ③ 遊び(約46秒) ----------
  async _play() {
    this.stage = 'play';
    const { chars, rig } = this.ctx;
    this._buildPlanets();
    this.playing = true;

    // 手番は 下位から。いちばん うしろの子が いちばん先に ⭐星をえらべる。
    const order = chars
      .map((c, i) => ({ c, i, stars: c.stars, coins: c.coins }))
      .sort((a, b) => (a.stars - b.stars) || (a.coins - b.coins) || (a.i - b.i))
      .map((e) => e.c);

    dbg.push({
      kind: 'state', id: 'rocket', from: 'change', to: 'play',
      why: `planets=${this.kinds.join(',')} order=${order.map((c) => c.def.id).join('>')}`,
    });

    await this.ctx.banner(
      '<span class="icon">🪐</span>すきな わくせいを タップ!<span class="sub">したの こ から えらべるよ</span>',
      2200,
    );

    for (let rank = 0; rank < order.length; rank++) {
      const char = order[rank];
      if (!chars.includes(char)) continue;
      rig.setFollow(char);
      // rank は「下位から数えた順」なので、順位(0 = 1位)へ直してから重みを引く
      const planet = await this._choosePlanet(char, order.length - 1 - rank);
      await this._flyTo(char, planet);
      await this._planetEffect(char, planet);
      await this._flyBack(char);
    }

    this.playing = false;
    chars.forEach((c) => { c.setHopHeight(0); c.land(); });
    rig.setOverview();
  }

  // プレイヤーはタップ、CPU は planetPickWeight の重み。時間で必ず抜ける。
  async _choosePlanet(char, rank) {
    const { ui, chars, wait } = this.ctx;
    const free = this.planets.filter((p) => !p.used);
    const pool = free.length ? free : this.planets;

    if (!char.isPlayer) {
      await wait(900);
      const weights = pool.map((p) => planetPickWeight(p.kind, rank, chars.length));
      const total = weights.reduce((a, b) => a + b, 0) || 1;
      let r = Math.random() * total;
      let picked = pool[pool.length - 1];
      for (let i = 0; i < pool.length; i++) {
        r -= weights[i];
        if (r <= 0) { picked = pool[i]; break; }
      }
      dbg.push({ kind: 'state', id: 'rocket', from: 'play', to: 'pick', why: `cpu=${char.def.id} kind=${picked.kind}` });
      return picked;
    }

    // プレイヤー: 惑星をタップして選ぶ。5秒で自動選択へ落ちる。
    ui.showTapLayer(true);
    const picked = await new Promise((resolve) => {
      let done = false;
      const finish = (p, why) => {
        if (done) { dbg.push({ kind: 'input-reject', id: 'rocket', why: 'already-picked' }); return; }
        done = true;
        clearTimeout(timer);
        this._pickResolve = null;
        this.ctx.setTapHandler(null);
        ui.showTapLayer(false);
        dbg.push(p
          ? { kind: 'input-accept', id: 'rocket', to: char.def.id, why }
          : { kind: 'input-reject', id: 'rocket', why: 'timeout-pick' });
        resolve(p || pool[Math.floor(Math.random() * pool.length)]);
      };
      const timer = setTimeout(() => finish(null, 'timeout'), 5000);
      this._pickResolve = finish;
      this.ctx.setTapHandler((ndc, px) => this._onPickTap(ndc, px, pool, finish));
    });
    return picked;
  }

  _onPickTap(ndc, px, pool, finish) {
    const { rig, ui } = this.ctx;
    this._raycaster.setFromCamera(ndc, rig.camera);
    const hits = this._raycaster.intersectObjects(pool.map((p) => p.group), true);
    let picked = null;
    if (hits.length) {
      let o = hits[0].object;
      while (o && !pool.some((p) => p.group === o)) o = o.parent;
      picked = pool.find((p) => p.group === o) || null;
    }
    // 外したら、タップした向きに いちばん近い惑星を選ぶ(4歳児にやさしく)
    if (!picked) {
      const dir = this._raycaster.ray.direction;
      const origin = this._raycaster.ray.origin;
      let best = Infinity;
      for (const p of pool) {
        const w = p.group.getWorldPosition(new THREE.Vector3()).sub(origin);
        const along = w.dot(dir);
        if (along <= 0) continue;
        const d = w.sub(dir.clone().multiplyScalar(along)).length();
        if (d < best) { best = d; picked = p; }
      }
    }
    if (!picked) { dbg.push({ kind: 'input-reject', id: 'rocket', why: 'no-hit' }); return; }
    if (px) ui.emojiBurst(px.x, px.y, PLANET_LOOK[picked.kind]?.emoji || '👉');
    finish(picked, picked.kind);
  }

  // ロープウェイと同じ QuadraticBezierCurve3 で飛ぶ(設計書 9.4 結論1)。
  // rides から借りず自前で new する ── rides.ropewayCurve は島の2駅に固定されているため。
  async _flyTo(char, planet) {
    const { audio, tweens } = this.ctx;
    const from = char.root.position.clone();
    const to = planet.group.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 2.2, 0));
    this.flying.add(char);
    this.picked.set(char, planet);
    planet.used = true;
    char.setMode('hop');
    audio.whoosh();
    const curve = this._arc(from, to);
    await tweens.add(1.5, (k) => {
      const e = easeInOut(k);
      char.root.position.copy(curve.getPoint(e));
      char.setHopHeight(0);
      char.faceTowards(to);
    });
    char.land();
    char.setMode('idle');
  }

  async _flyBack(char) {
    const { world, audio, tweens } = this.ctx;
    const from = char.root.position.clone();
    const to = world.tileAnchor(char.tileIndex).add(this.ctx.charOffset(char));
    audio.whoosh();
    char.setMode('hop');
    const curve = this._arc(from, to);
    await tweens.add(1.4, (k) => {
      const e = easeInOut(k);
      char.root.position.copy(curve.getPoint(e));
      char.faceTowards(to);
    });
    char.setHopHeight(0);
    char.land();
    char.setMode('idle');
    this.flying.delete(char);
  }

  // 2点をむすぶ ゆるい放物線。mid は中点 +14(設計書 9.4 結論1)。
  _arc(a, b) {
    const mid = a.clone().lerp(b, 0.5).add(new THREE.Vector3(0, 14, 0));
    return new THREE.QuadraticBezierCurve3(a.clone(), mid, b.clone());
  }

  // 止まった惑星の こうか
  async _planetEffect(char, planet) {
    const { chars, ui, fx, audio } = this.ctx;
    const kind = planet.kind;
    fx.sparkleBurst(char.root.position, 14, PLANET_LOOK[kind].glow, 1.8);

    if (kind === 'coin') {
      char.coins += COIN_PLANET_GAIN;
      for (let i = 0; i < 4; i++) audio.coin(i);
      fx.coinBurst(char.root.position, 10);
      ui.updatePlayer(char);
      char.setMode('cheer');
      dbg.push({
        kind: 'result', id: 'rocket', why: 'rocket-coin', to: char.def.id,
        chars: [{ id: char.def.id, gain: COIN_PLANET_GAIN, coins: char.coins }],
      });
      await this.ctx.banner(
        `<span class="icon">🪙</span>コインの ほし!<span class="sub">🪙${COIN_PLANET_GAIN}まい</span>`, 1600,
      );
      char.setMode('idle');
      return;
    }

    if (kind === 'star') {
      char.stars += 1;
      audio.starGet();
      fx.burstConfetti(char.root.position, 40, 4, 6);
      ui.updatePlayer(char);
      char.setMode('cheer');
      dbg.push({
        kind: 'result', id: 'rocket', why: 'rocket-star', to: char.def.id,
        chars: [{ id: char.def.id, stars: char.stars }],
      });
      await this.ctx.banner(
        `<span class="icon">⭐</span>ほしの ほし!<span class="sub">⭐1こ ゲット!</span>`, 1900,
      );
      if (char.stars >= CONFIG.SUPER_STARS && char.form !== 'super') {
        audio.transform();
        char.setForm('super');
        fx.sparkleBurst(char.root.position.clone().add(new THREE.Vector3(0, 1, 0)), 20, 0xfff6a8, 2);
        await this.ctx.banner(
          `<span class="icon">${char.def.emoji}✨</span>スーパー${char.def.name}に へんしん!`, 1800,
        );
      }
      char.setMode('idle');
      this.ctx.moveStar();
      return;
    }

    if (kind === 'donut') {
      chars.forEach((c) => { c.coins += DONUT_GAIN; ui.updatePlayer(c); });
      for (let i = 0; i < 4; i++) audio.coin(i);
      audio.chime(2);
      chars.forEach((c) => { fx.coinBurst(c.root.position, 5); c.setMode('cheer'); });
      dbg.push({
        kind: 'result', id: 'rocket', why: 'rocket-donut', to: char.def.id,
        chars: chars.map((c) => ({ id: c.def.id, gain: DONUT_GAIN, coins: c.coins })),
      });
      await this.ctx.banner(
        `<span class="icon">🍩</span>ドーナツの ほし!<span class="sub">みんなに 🪙${DONUT_GAIN}まい</span>`, 1800,
      );
      chars.forEach((c) => c.setMode('idle'));
      return;
    }

    // 🌀 ぐるぐる星。順位を完全に反転する。**総量は保存される**(rules.swapRanks)。
    // 「取られた」ではなく「みんなで シャッフル」に見せるのが 4歳児向けの要である。
    await this._swirl(char);
  }

  async _swirl(char) {
    const { chars, ui, fx, audio, tweens } = this.ctx;
    const before = chars.map((c) => ({ id: c.def.id, coins: c.coins, stars: c.stars }));
    audio.warp();
    await this.ctx.banner(
      '<span class="icon">🌀</span>ぐるぐる ほし!<span class="sub">みんなで シャッフル!</span>', 1900,
    );

    // 4人が いっせいに くるくる回る(色の帯が入れかわって見える)
    chars.forEach((c) => c.setMode('cheer'));
    await tweens.add(2.2, (k) => {
      chars.forEach((c, i) => {
        c.root.rotation.y = k * TAU * 2 + i;
        c.setHopHeight(0.6 + Math.sin(k * Math.PI * 4 + i) * 0.4);
      });
    });
    chars.forEach((c, i) => { c.root.rotation.y = 0; c.setHopHeight(0.35 * Math.sin(this._t * 1.4 + i)); });

    const next = swapRanks(chars);
    chars.forEach((c, i) => {
      c.coins = next.coins[i];
      c.stars = next.stars[i];
      ui.updatePlayer(c);
      // 取られた子にも おまつりを出す(かなしませない)
      fx.burstConfetti(c.root.position, 24, 3.5, 5);
      ui.emojiBurst(
        window.innerWidth * (0.25 + i * 0.16), window.innerHeight * 0.45, '🎉',
      );
    });
    audio.fanfare();

    dbg.push({
      kind: 'result', id: 'rocket', why: 'rocket-swap', to: char.def.id,
      chars: chars.map((c, i) => ({
        id: c.def.id,
        fromCoins: before[i].coins, toCoins: c.coins,
        fromStars: before[i].stars, toStars: c.stars,
      })),
    });

    await this.ctx.banner(
      '<span class="icon">🎉</span>じゅんばんが かわった!<span class="sub">こんどは きみの ばん かも</span>', 1900,
    );
    chars.forEach((c) => c.setMode('idle'));
  }

  // ---------- ④ 収束(約20秒) ----------
  async _land() {
    this.stage = 'settle';
    const { world, chars, rig, audio, fx, tweens, wait } = this.ctx;
    dbg.push({
      kind: 'state', id: 'rocket', from: 'play', to: 'settle',
      why: `picked=${chars.map((c) => `${c.def.id}:${this.picked.get(c)?.kind || 'none'}`).join(',')}`,
    });

    // 惑星が しぼんで消える
    await tweens.add(1.2, (k) => {
      this.planets.forEach((p) => p.group.scale.setScalar(Math.max(0.001, 1 - k)));
    });
    this.planets.forEach((p) => { p.group.visible = false; });

    // 4色のパラシュートが ひらく
    this._buildChutes();
    audio.pop();
    await this.ctx.banner(
      '<span class="icon">🪂</span>パラシュート!<span class="sub">しまへ かえろう</span>', 1800,
    );
    await tweens.add(1.4, (k) => {
      const e = easeOut(k);
      this.chutes.forEach((c) => c.scale.setScalar(Math.max(0.001, e)));
    });

    // 島が ゆっくり降りる
    const lift = CONFIG.ROCKET_LIFT;
    audio.noise({ dur: 5, vol: 0.12, filterFreq: 500 });
    await tweens.add(12, (k) => {
      const e = easeInOut(k);
      this.lift = lift * (1 - e);
      world.islandGroup.position.y = this.lift;
      rig.setManual(
        new THREE.Vector3(0, this.lift + 30, 42 + e * 6),
        new THREE.Vector3(0, this.lift - 6 * (1 - e), 0),
      );
      this.ctx.rideIsland();
      if (this.flameRing) {
        this.flameRing.children.forEach((f) => {
          if (f.material) f.material.opacity = 0.9 * (1 - e);
        });
      }
    });

    // 着水。島は かならず 単位変換へ戻す(2.1 の不変条件)。
    world.islandGroup.position.set(0, 0, 0);
    this.lift = 0;
    this.ctx.rideIsland();
    audio.splash();
    this.ctx.punch(1.3);
    fx.rainConfetti(new THREE.Vector3(0, 6, 0), 20, 70, 16);
    rig.setOverview();

    // パラシュートを たたむ
    await tweens.add(1.2, (k) => {
      this.chutes.forEach((c) => c.scale.setScalar(Math.max(0.001, 1 - k)));
    });
    this.chutes.forEach((c) => { c.visible = false; });
    if (this.flameRing) this.flameRing.visible = false;

    audio.fanfare();
    chars.forEach((c) => { c.setHopHeight(0); c.land(); c.setMode('dance'); });
    await this.ctx.banner(
      '<span class="icon">🌊</span>ちゃくすい!<span class="sub">おかえりなさーい</span>', 2000,
    );
    chars.forEach((c) => c.setMode('idle'));

    dbg.push({
      kind: 'state', id: 'rocket', from: 'settle', to: 'landed',
      why: `groundedMax=${Math.max(...chars.map((c) => {
        const a = world.tileAnchor(c.tileIndex);
        const p = c.root.position;
        return Math.max(Math.hypot(p.x - a.x, p.z - a.z), Math.abs(p.y - a.y));
      })).toFixed(3)} islandY=${world.islandGroup.position.y.toFixed(3)}`,
    });
    await wait(300);
  }

  // ---------- 小道具 ----------

  // 島の下の炎リング(噴射口)。島グループの子にするので島といっしょに上がる。
  _buildFlameRing() {
    const { world } = this.ctx;
    const g = new THREE.Group();
    g.position.y = -1.2;
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * TAU;
      const flame = new THREE.Mesh(
        new THREE.ConeGeometry(1.5, 6.5, 8),
        toonMatUnique(i % 2 ? 0xffd23e : 0xff9d3c, {
          emissive: i % 2 ? 0xffaa00 : 0xff6f2c, emissiveIntensity: 0.9,
          transparent: true, opacity: 0,
        }),
      );
      flame.position.set(Math.cos(a) * 12, -3.5, Math.sin(a) * 12);
      flame.rotation.x = Math.PI;
      g.add(flame);
    }
    g.scale.setScalar(0.001);
    world.islandGroup.add(g);
    this.flameRing = this._own(g);
  }

  // 惑星8個。islandGroup の子にするので、島といっしょに上がって まわりに散らばる。
  _buildPlanets() {
    const { world } = this.ctx;
    this.kinds = buildPlanets(Math.random, CONFIG.PLANET_COUNT);
    for (let i = 0; i < CONFIG.PLANET_COUNT; i++) {
      const kind = this.kinds[i];
      const look = PLANET_LOOK[kind] || PLANET_LOOK.coin;
      const g = new THREE.Group();
      // 自発光。くらやみ禁止(0.3 #7)の主力である。
      const mat = toonMatUnique(look.color, { emissive: look.color, emissiveIntensity: 0.6 });
      const body = new THREE.Mesh(new THREE.SphereGeometry(3.4, 20, 16), mat);
      g.add(body);

      // 顔(4歳児に「いきもの」として伝える)
      const eyeMat = toonMat(0x2a2a3a);
      for (const sx of [-1, 1]) {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.4, 10, 8), eyeMat);
        eye.position.set(sx * 1.2, 0.7, 3.1);
        g.add(eye);
      }
      const smile = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.14, 6, 14, Math.PI), eyeMat);
      smile.position.set(0, -0.2, 3.05);
      smile.rotation.z = Math.PI;
      g.add(smile);

      // 種類のしるし(文字は使わない)
      if (kind === 'star') {
        const s = new THREE.Mesh(starGeometry(1.5, 0.7, 0.4),
          toonMatUnique(0xfff1b0, { emissive: 0xffcf4d, emissiveIntensity: 1.0 }));
        s.position.y = 4.6;
        g.add(s);
      } else if (kind === 'swap') {
        for (let k = 0; k < 3; k++) {
          const ring = new THREE.Mesh(
            new THREE.TorusGeometry(4.2 - k * 0.5, 0.18, 6, 26),
            toonMatUnique(0xdcc8ff, { emissive: 0x9b5cff, emissiveIntensity: 0.8 }),
          );
          ring.rotation.x = Math.PI / 2 + k * 0.3;
          g.add(ring);
        }
      } else if (kind === 'donut') {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(4.4, 0.7, 8, 28),
          toonMatUnique(0xfff0b8, { emissive: 0xffc46f, emissiveIntensity: 0.7 }),
        );
        ring.rotation.x = Math.PI / 2.4;
        g.add(ring);
      } else {
        const coin = new THREE.Mesh(
          new THREE.CylinderGeometry(1.4, 1.4, 0.3, 18),
          toonMatUnique(0xffe58f, { emissive: 0xffaa00, emissiveIntensity: 0.9 }),
        );
        coin.position.y = 4.6;
        coin.rotation.x = Math.PI / 2;
        g.add(coin);
      }

      const a = (i / CONFIG.PLANET_COUNT) * TAU + 0.35;
      const r = CONFIG.ROCKET_PLANET_RADIUS;
      const local = new THREE.Vector3(
        Math.cos(a) * r, 8 + ((i * 5) % 15), Math.sin(a) * r,
      );
      g.position.copy(local);
      world.islandGroup.add(g);
      this.planets.push({ group: this._own(g), mat, kind, local, used: false });
    }
  }

  // 4色のパラシュート。島グループの子にして いっしょに降りる。
  _buildChutes() {
    const { world, chars } = this.ctx;
    chars.forEach((c, i) => {
      const a = (i / chars.length) * TAU + 0.6;
      const g = new THREE.Group();
      const canopy = new THREE.Mesh(
        new THREE.SphereGeometry(6.5, 18, 12, 0, TAU, 0, Math.PI / 2),
        toonMatUnique(c.def.color, { emissive: c.def.color, emissiveIntensity: 0.25 }),
      );
      g.add(canopy);
      for (let k = 0; k < 4; k++) {
        const la = (k / 4) * TAU;
        const line = new THREE.Mesh(
          new THREE.CylinderGeometry(0.06, 0.06, 6, 5), toonMat(0xffffff),
        );
        line.position.set(Math.cos(la) * 4.2, -3, Math.sin(la) * 4.2);
        g.add(line);
      }
      g.position.set(Math.cos(a) * 17, 26, Math.sin(a) * 17);
      g.scale.setScalar(0.001);
      world.islandGroup.add(g);
      this.chutes.push(this._own(g));
    });
  }

  onTap(ndc, px) {
    if (!this._pickResolve) { dbg.push({ kind: 'input-reject', id: 'rocket', why: 'not-waiting' }); }
  }

  dispose() {
    const { world, ui, chars } = this.ctx;
    // 途中で止まっても、島は かならず 海面へ もどす(2.1 の不変条件)
    world.islandGroup.position.set(0, 0, 0);
    this.lift = 0;
    this.playing = false;
    this._pickResolve = null;
    ui.showTapLayer(false);
    ui.showDice(false);
    this.ctx.rideIsland();
    chars.forEach((c) => { c.setHopHeight(0); c.root.rotation.y = 0; });
    this.flying.clear();
    this.picked.clear();
    super.dispose();
    this.planets.forEach((p) => p.mat?.dispose?.());
    this.planets = [];
    this.chutes = [];
    this.flameRing = null;
  }
}
