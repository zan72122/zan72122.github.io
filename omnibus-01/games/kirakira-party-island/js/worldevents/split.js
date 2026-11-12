// ✂️ しまが まっぷたつ(W-04)
//
// TERRAIN.splitGap が islandHeight の x を割る。「高さ関数1行で島が割れる」の実体である
// (設計書 2.2)。島メッシュ・タイル・木・岩・キャラの接地が いっぺんに割れて離れ、
// あいだには 海(y=0 の海面)が そのまま見える ── わけめの内側の高さは -3.2 だからである。
//
// 変形は reshapeIsland にまかせる。頂点は「変形前」「変形後」の2本の lerp で、
// computeVertexNormals は 始点と終点の **ちょうど2回** しか呼ばない(設計書 2.2 の実測にもとづく方針)。
// 変形中は毎フレーム refreshAnchors({tiles:true}) と rideIsland() を回す。
// わけめの内側に入るマス(上下で4枚ほど)は refreshAnchors が ふちへ寄せるので、海に落ちない。
//
// チーム制は **表示だけ** である(設計書 8章 #3 の決定)。board.teams を立て、
// マントとプレイヤーストリップが2色になるが、_finale の順位づけ(設計書 0.3 #3)は個人のままである。
//
// 合体(収束)は ctx.onRoundEnd に置き、そのラウンドの末(ミニゲームの直前)に走らせる。
// チーム分けは合体後も最終ラウンドまで残る。

import * as THREE from '../../vendor/three.module.min.js';
import { toonMat, toonMatUnique, lightningGeometry } from '../gfx.js';
import { CONFIG } from '../config.js';
import { splitTeams } from '../rules.js';
import { dbg } from '../debug.js';
import { WorldEventBase } from './base.js';

const PAINT_STEPS = 50;                 // 200ms × 50 = 10秒(変形12秒のあいだ)
const RIDE_TILE_TYPES = ['TURTLE', 'ROPEWAY', 'COASTER'];
const TEAM_COLORS = [0xff5c5c, 0x5cb8ff];

export class SplitEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.crack = null;          // 光る割れ目のライン
    this.crackMat = null;
    this.bridges = [];          // わけめに かかる丸太の橋
    this.rainbow = null;        // 合体のときの虹の橋
    this.rainbowMats = [];
    this.capes = [];            // チーム色のマント(合体後も のこす)
    this.capeMats = [];
    this.savedTypes = new Map();// tileIndex → もとのマスの型
    this.teams = null;
    this.split = false;
    this._t = 0;
  }

  async run() {
    await this._trigger();      // ① きっかけ 7秒
    await this._tear();         // ② 変化 12秒
    await this._formTeams();    // ③ 遊び(チーム結成。以降そのラウンドは割れたまま)
    // ④ 収束:合体は ラウンド末(ミニゲームの直前)に board から呼んでもらう
    this.ctx.onRoundEnd = () => this._merge();
    dbg.push({
      kind: 'state', id: 'split', from: 'play', to: 'await-round-end',
      why: 'merge は ラウンド末フック(onRoundEnd)で走る。この時点では 島は割れたままが正しい',
    });
  }

  // ---------- 毎フレーム ----------
  update(dt) {
    this._t += dt;
    if (this.crackMat) {
      this.crackMat.emissiveIntensity = 0.5 + Math.sin(this._t * 4.5) * 0.35;
    }
    // マントは かるく なびく
    this.capes.forEach((cape, i) => {
      cape.rotation.x = -0.35 + Math.sin(this._t * 2.4 + i) * 0.12;
    });
  }

  // ---------- ① きっかけ(約7秒) ----------
  async _trigger() {
    this.stage = 'trigger';
    const { rig, audio, tweens, wait } = this.ctx;
    audio.stopBgm();
    // 割れ目の真上。x=0 の線が 画面の たてに走るので「左右に割れる」絵になる。
    rig.setManual(new THREE.Vector3(0, 36, 12), new THREE.Vector3(0, 0, 0));
    audio.rumble();
    this.ctx.banner(
      '<span class="icon">✂️</span>しまが まっぷたつ!<span class="sub">ふたつに わかれるよ</span>',
      2800,
    );
    await wait(1400);

    this._buildCrack();
    audio.boom();
    this.ctx.punch(1.4);
    await tweens.add(2.6, (k) => {
      // 割れ目のラインが 中央から 南北へ のびる
      this.crack.scale.z = Math.max(0.01, k);
      if (this.crackMat) this.crackMat.opacity = Math.min(1, k * 2);
    });
    audio.crack(0);
    await wait(900);
  }

  // ---------- ② 変化(約12秒) ----------
  async _tear() {
    this.stage = 'change';
    const { world, audio, tweens, wait } = this.ctx;

    // わけめをまたぐ のりもの3種は、マスの型を COIN へ退避してから かくす。
    // マスの数と並びは変わらないので chooseStarTile も既存テストも無傷である(設計書 4.8)。
    for (const t of world.tiles) {
      if (!RIDE_TILE_TYPES.includes(t.type)) continue;
      this.savedTypes.set(t.index, t.type);
      t.setType('COIN');
    }

    audio.slideRumble(4);
    audio.noise({ dur: 2.4, vol: 0.2, filterFreq: 600 });

    // 断面の地層色。17,689頂点の色計算なので 200ms に1回だけ(設計書 2.3)。
    let splashes = 0;
    const paint = (async () => {
      for (let i = 0; i < PAINT_STEPS; i++) {
        world._paintIsland('strata', { amount: (i + 1) / PAINT_STEPS, gap: CONFIG.SPLIT_GAP });
        await wait(200);
      }
    })();

    const reshape = world.reshapeIsland({
      to: { splitGap: CONFIG.SPLIT_GAP },
      seconds: 12,
      tweens,
      onFrame: (e) => {
        world.refreshAnchors({ tiles: true });
        this.ctx.rideIsland();
        if (e > splashes * 0.22) { audio.splash(); splashes++; }
      },
    });

    await Promise.all([reshape, paint]);
    this.split = true;
    world._paintIsland('strata', { amount: 1, gap: CONFIG.SPLIT_GAP });
    world.refreshAnchors({ tiles: true, decor: true, rides: true });
    this.ctx.rideIsland();
    this._buildBridges();

    // 光る割れ目のラインは 役目を終えたので消す(海が見えるほうが きれい)
    if (this.crack) this.crack.visible = false;

    this.ctx.chars.forEach((c) => { c.land(); c.setMode('idle'); });
    audio.splash();
    await this.ctx.banner(
      '<span class="icon">🌊</span>うみが ながれこんだ!<span class="sub">まるたの はしが かかったよ</span>',
      2000,
    );
  }

  // ---------- ③ 遊び(チーム結成。所要0秒・以降そのラウンド) ----------
  async _formTeams() {
    this.stage = 'play';
    const { chars, ui, fx, audio, rig, wait } = this.ctx;
    rig.setOverview();

    const coinsFrom = chars.map((c) => c.coins);
    this.teams = splitTeams(chars);
    dbg.push({
      kind: 'state', id: 'split', from: 'change', to: 'play',
      why: `gap=${CONFIG.SPLIT_GAP} hidRides=${this.savedTypes.size}`
        + ` teams=${this.teams.map((t) => t.join('+')).join('/')}`,
    });
    this.ctx.setTeams(this.teams);
    this._buildCapes();

    audio.fanfare();
    await this.ctx.banner(
      '<span class="icon">🔴🔵</span>2にんずつの チーム!<span class="sub">おなじ いろの マントだよ</span>',
      2400,
    );

    // 結成ボーナス。トップが損に見えないようにする(01_idea.md W-04)。
    for (const c of chars) {
      c.coins += CONFIG.SPLIT_TEAM_BONUS;
      audio.coin(0);
      fx.coinBurst(c.root.position, 6);
      c.setMode('cheer');
      ui.updatePlayer(c);
    }
    // 結果反映は この1件だけ。結成ボーナスは 全員おなじ枚数である。
    dbg.push({
      kind: 'result', id: 'split', why: 'split-teamform',
      to: this.teams.map((t) => t.join('+')).join('/'),
      chars: chars.map((c, i) => ({
        id: c.def.id,
        team: this.teams.findIndex((t) => t.includes(i)),
        bonus: CONFIG.SPLIT_TEAM_BONUS,
        coinsFrom: coinsFrom[i],
        coinsTo: c.coins,
        tileIndex: c.tileIndex,
      })),
    });
    await this.ctx.banner(
      `<span class="icon">🪙</span>チーム けっせい ボーナス!<span class="sub">ぜんいん 🪙${CONFIG.SPLIT_TEAM_BONUS}まい</span>`,
      2000,
    );
    chars.forEach((c) => c.setMode('idle'));
    await wait(200);
  }

  // ---------- ④ 収束(約8秒。board のラウンド末から呼ばれる) ----------
  async _merge() {
    this.stage = 'settle';
    const { world, chars, rig, audio, fx, tweens, wait } = this.ctx;
    dbg.push({ kind: 'state', id: 'split', from: 'await-round-end', to: 'settle', why: 'merge-start' });
    rig.setOverview();
    audio.yay();
    this.ctx.banner(
      '<span class="icon">🌈</span>にじの はしが かかった!<span class="sub">しまが もとどおりに なるよ</span>',
      2400,
    );

    this._buildRainbow();
    this.bridges.forEach((b) => { b.visible = false; });

    const paint = (async () => {
      for (let i = 0; i < 40; i++) {
        world._paintIsland('strata', { amount: 1 - (i + 1) / 40, gap: CONFIG.SPLIT_GAP });
        await wait(200);
      }
    })();

    const reshape = world.reshapeIsland({
      to: { splitGap: 0 },
      seconds: 8,
      tweens,
      onFrame: (e) => {
        world.refreshAnchors({ tiles: true });
        this.ctx.rideIsland();
        if (this.rainbow) this.rainbow.scale.setScalar(0.2 + Math.sin(Math.PI * e) * 0.9);
      },
    });

    await Promise.all([reshape, paint]);
    this.split = false;
    world._paintIsland('default');
    world.refreshAnchors({ tiles: true, decor: true, rides: true });
    this.ctx.rideIsland();
    this._restoreTiles();

    audio.boom();
    this.ctx.punch(1.2);
    fx.burstConfetti(new THREE.Vector3(0, 3, 0), 60, 8, 7);
    chars.forEach((c) => { c.land(); c.setMode('cheer'); });
    audio.fanfare();
    await this.ctx.banner('<span class="icon">🎉</span>がっしーん! ひとつに なった!', 2000);
    chars.forEach((c) => c.setMode('idle'));

    if (this.rainbow) this.rainbow.visible = false;
    dbg.push({
      kind: 'state', id: 'split', from: 'settle', to: 'merged',
      why: `splitGap=${world.islandWarp.splitGap} pendingRides=${this.savedTypes.size}`
        + ` groundedMax=${Math.max(...chars.map((c) => {
          const a = world.tileAnchor(c.tileIndex);
          const p = c.root.position;
          return Math.max(Math.hypot(p.x - a.x, p.z - a.z), Math.abs(p.y - a.y));
        })).toFixed(3)}`,
    });
  }

  // このイベントは プレイヤーの入力を1つも受けない(チーム分けは表示だけ)。
  // タップ面も出さないので ここへは来ないが、来たら理由つきで拒否を残す。
  onTap() { dbg.push({ kind: 'input-reject', id: 'split', why: 'no-input-phase' }); }

  // ---------- 小道具 ----------

  // 光る割れ目のライン。いなずまの形(lightningGeometry)を地面に寝かせて つなげる。
  _buildCrack() {
    const { world } = this.ctx;
    const g = new THREE.Group();
    this.crackMat = toonMatUnique(0xfff1b0, {
      emissive: 0xffc93e, emissiveIntensity: 0.6, transparent: true, opacity: 0,
    });
    for (let i = 0; i < 9; i++) {
      const z = -24 + i * 6;
      const bolt = new THREE.Mesh(lightningGeometry(7.2, 0.3), this.crackMat);
      bolt.rotation.x = -Math.PI / 2;
      bolt.rotation.z = i % 2 ? 0.08 : -0.08;
      bolt.position.set(0, Math.max(world.heightFn(0, z), 0) + 0.3, z);
      g.add(bolt);
    }
    world.islandGroup.add(g);
    this.crack = this._own(g);
  }

  // わけめに かかる丸太の橋。マスの円周が x=0 を またぐ 上下2か所に置く。
  _buildBridges() {
    const { world } = this.ctx;
    const gap = CONFIG.SPLIT_GAP;
    const span = gap * 2.6;
    for (const z of [CONFIG.BOARD_RADIUS, -CONFIG.BOARD_RADIUS]) {
      const g = new THREE.Group();
      const logMat = toonMat(0x9c6b3f);
      for (let k = 0; k < 3; k++) {
        const log = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, span, 8), logMat);
        log.rotation.z = Math.PI / 2;
        log.position.set(0, 0, (k - 1) * 0.58);
        g.add(log);
      }
      // 手すり(ロープ2本)
      for (const s of [-1, 1]) {
        const rope = new THREE.Mesh(
          new THREE.CylinderGeometry(0.06, 0.06, span, 6), toonMat(0xe8d8b0),
        );
        rope.rotation.z = Math.PI / 2;
        rope.position.set(0, 0.55, s * 0.95);
        g.add(rope);
      }
      g.position.set(0, Math.max(world.heightFn(gap * 1.2, z), 0.4) + 0.45, z);
      world.islandGroup.add(g);
      this.bridges.push(this._own(g));
    }
  }

  // チーム色のマント。合体したあとも最終ラウンドまで のこす(チーム分けは のこるため)。
  // _own には登録しない ── dispose で消してしまうと、ストリップの2色だけが残ってしまう。
  _buildCapes() {
    const { chars } = this.ctx;
    this.teams.forEach((team, t) => {
      const mat = toonMatUnique(TEAM_COLORS[t], { side: THREE.DoubleSide });
      this.capeMats.push(mat);
      for (const i of team) {
        const char = chars[i];
        if (!char) continue;
        const cape = new THREE.Mesh(new THREE.PlaneGeometry(0.78, 0.86), mat);
        cape.position.set(0, 0.62, -0.42);
        cape.rotation.x = -0.35;
        char.root.add(cape);
        this.capes.push(cape);
      }
    });
  }

  // 合体のときの虹の橋。world.rainbowGroup は天気で scale を毎フレーム lerp されるので、
  // こちらは専用メッシュで作る。
  _buildRainbow() {
    const { world } = this.ctx;
    const g = new THREE.Group();
    const cols = [0xff5c5c, 0xffb03c, 0xffe45c, 0x6fdd6f, 0x5cb8ff, 0xb98fff];
    cols.forEach((c, k) => {
      const mat = toonMatUnique(c, { emissive: c, emissiveIntensity: 0.3 });
      this.rainbowMats.push(mat);
      const arc = new THREE.Mesh(
        new THREE.TorusGeometry(9 - k * 0.7, 0.32, 8, 26, Math.PI), mat,
      );
      arc.rotation.y = Math.PI / 2;
      g.add(arc);
    });
    g.position.set(0, 1.2, 0);
    g.scale.setScalar(0.2);
    world.islandGroup.add(g);
    this.rainbow = this._own(g);
  }

  // 退避したマスの型を もどす。いまスターが乗っているマスは スターのままにする。
  _restoreTiles() {
    const { world } = this.ctx;
    for (const [index, type] of this.savedTypes) {
      if (index === world.starTileIndex) continue;
      world.tiles[index]?.setType(type);
    }
    this.savedTypes.clear();
    // 念のため スターのマスを立て直す
    if (world.tiles[world.starTileIndex]) world.tiles[world.starTileIndex].setType('STAR');
  }

  dispose() {
    const { world } = this.ctx;
    // 途中で止まっても、島の形と色とマスの型は かならず もどす。
    // seconds: 0 の reshapeIsland は同期に終わる(トゥイーンへ入らない)。
    world.reshapeIsland({ to: { splitGap: 0 }, seconds: 0 });
    world.refreshAnchors({ tiles: true, decor: true, rides: true });
    this.ctx.rideIsland();
    world._paintIsland('default');
    this._restoreTiles();
    this.split = false;
    super.dispose();
    this.crackMat?.dispose?.();
    this.rainbowMats.forEach((m) => m.dispose?.());
    this.crack = null;
    this.crackMat = null;
    this.rainbow = null;
    this.rainbowMats = [];
    this.bridges = [];
    // マントとチーム分けは のこす(チーム戦は最終ラウンドまで つづく)
  }
}
