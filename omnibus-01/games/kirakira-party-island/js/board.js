// すごろくボードゲームの進行(ターン制・サイコロ・マスイベント・優勝発表)。
// 48マス・4ゾーンの島を舞台に、天気・のりもの・どうくつ・ボスなど
// 波瀾万丈のイベントを async/await のシーケンスで駆動する。

import * as THREE from '../vendor/three.module.min.js';
import { CONFIG, ZONES, zoneOfTile, weatherForRound, DEBUG } from './config.js';
import {
  diceFaceTexture, minusDiceFaceTexture, bombDiceFaceTexture,
  starGeometry, toonMat, toonMatUnique,
} from './gfx.js';
import { islandHeight } from './world.js';
import { audio } from './audio.js';
import { bossCoinReward, chooseWorldEvent, iceSlide, reverseRoundSteps } from './rules.js';
import { Tweens, easeOut, easeInOut, wait } from './tween.js';
import { WORLD_EVENTS } from './worldevents/index.js';
import { rand } from './rng.js';
import { applyScenario, dbg, snapshot } from './debug.js';

const TAU = Math.PI * 2;

export class BoardGame {
  /**
   * ctx: { scene, world, chars, ui, fx, rig, runMinigame(), setTimeScale(s) }
   */
  constructor(ctx) {
    this.ctx = ctx;
    this.tweens = new Tweens();
    this.round = 1;
    this.running = false;
    this.diceSpin = false;
    this._diceResolver = null;
    this.tapHandler = null;   // ボス・コースター中のタップ受け口(main が呼ぶ)
    this.dragHandler = null;  // 島変貌イベント中のよこドラッグ受け口(main が呼ぶ)

    // そのラウンドだけ効く移動修飾。_worldEvent が毎ラウンド既定値へ戻す。
    this.moveMods = {
      iceSlide: false, reversed: false, coinPickupAll: false, coinDouble: false,
    };
    this._usedWorldEvents = new Set();  // 同じ島変貌は1ゲームに1回だけ
    this._activeWorldEvent = null;      // update(dt) を回す相手
    // ラウンド末(ミニゲームの直前)に1回だけ await するコールバック。
    // ラウンド全体に効くイベント(❄️解氷・🙃反転もどし)が ctx.onRoundEnd へ代入する。
    this._pendingRoundEnd = null;
    this._deferredEvent = null;         // dispose と天気の復帰を ラウンド末まで待つ相手
    this._deferredEntry = null;
    // ✂️ しまが まっぷたつ(W-04)のチーム分け。[[i,j],[k,l]] か null。
    // 表示だけに効き、_finale の順位づけ(設計書 0.3 #3)は個人のままである。
    this.teams = null;
    // けっか発表の紙ふぶきを止める。main.js の「もういっかい」と pagehide から呼ばれる。
    this._finaleRaining = false;
    this.finaleCleanup = () => { this._finaleRaining = false; };
    this._buildDice();

    ctx.ui.diceBtn.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      if (this._diceResolver) {
        const r = this._diceResolver;
        this._diceResolver = null;
        r();
      }
    });
  }

  _buildDice() {
    this.diceMats = {
      normal: [], minus: [], bomb: [],
    };
    for (let n = 1; n <= 6; n++) {
      this.diceMats.normal.push(new THREE.MeshBasicMaterial({ map: diceFaceTexture(n) }));
      this.diceMats.minus.push(new THREE.MeshBasicMaterial({ map: minusDiceFaceTexture(n) }));
    }
    const bombTex = bombDiceFaceTexture();
    for (let i = 0; i < 6; i++) {
      this.diceMats.bomb.push(new THREE.MeshBasicMaterial({ map: bombTex }));
    }
    this.diceMesh = new THREE.Mesh(new THREE.BoxGeometry(1.05, 1.05, 1.05), this.diceMats.normal);
    this.diceMesh.visible = false;
    this.ctx.scene.add(this.diceMesh);
  }

  update(dt) {
    this.tweens.update(dt);
    this._activeWorldEvent?.update?.(dt);
    if (this.diceSpin) {
      this.diceMesh.rotation.x += dt * 9;
      this.diceMesh.rotation.y += dt * 12.5;
      this.diceMesh.rotation.z += dt * 5.2;
    }
  }

  // ============ ゲーム全体の進行 ============
  async start() {
    const { ui, chars, world } = this.ctx;
    this.running = true;
    ui.showHud(true);
    ui.buildRoundPips(CONFIG.ROUNDS);
    ui.buildPlayerStrip(chars);
    // 🫧 ちっちゃく(W-19)のあいだ world.tileCount は 24 になる。
    // ゾーンの判定は 4等分なので、マス数を渡さないと 24マス時に はまべ/ジャングルへ寄る。
    chars.forEach((c) => { c.lastZone = zoneOfTile(c.tileIndex, world.tileCount); });
    world.placeStarForPlayers(chars);
    this._zoneBgm(chars[0]);

    await ui.showBanner('<span class="icon">🏝️</span>パーティー スタート!', 1800);

    // デバッグ:イベントを即時再生(?event=boss など)
    if (DEBUG.forceEvent) await this._debugEvent(DEBUG.forceEvent);

    // ?scenario= … 既知の整合状態を用意するだけ。ここから先の _worldEvent(0) も
    // _finale() も「もういっかい」も、下の本番コードが そのまま通る。
    if (DEBUG.scenario) applyScenario(DEBUG.scenario, this);

    for (this.round = this._scenarioStartRound ?? 1; this.round <= CONFIG.ROUNDS; this.round++) {
      ui.setRound(this.round);
      const weather = weatherForRound(this.round, CONFIG.ROUNDS);
      world.setWeather(weather);
      audio.yay();
      this.ctx.rig.setOverview();
      if (this.round === CONFIG.ROUNDS && CONFIG.ROUNDS > 1) {
        audio.fanfare();
        await ui.showBanner('<span class="icon">🌇</span>さいごの しょうぶ!', 2000);
      } else {
        const wIcon = { sunny: '☀️', cloudy: '☁️', squall: '🌧️', rainbowy: '🌈', sunset: '🌇' }[weather];
        await ui.showBanner(`<span class="icon">${wIcon}</span>ラウンド ${this.round}`, 1500);
        if (weather === 'squall') {
          await ui.showBanner('<span class="icon">💦</span>スコール!みずたまりで すべって 1マス おまけ!', 1600);
        }
      }

      // 島変貌イベント(天気のあと、1人目のターンより前)
      await this._worldEvent(this.round);

      // 毎ラウンド先手を1人ずつ回し、固定順によるスター取得の偏りを抑える。
      const firstPlayer = (this.round - 1) % chars.length;
      for (let offset = 0; offset < chars.length; offset++) {
        await this._takeTurn(chars[(firstPlayer + offset) % chars.length]);
      }

      // ラウンド全体に効いていた島変貌の後始末(❄️解氷・🙃反転もどし)
      await this._runPendingRoundEnd();

      await this._minigamePhase();

      // なかばに ボス「タコすけ」があらわれる
      if (this.round === Math.ceil(CONFIG.ROUNDS / 2) && !this._bossDone) {
        this._bossDone = true;
        await this._bossEvent();
      }
      this._zoneBgm(chars[0]);
    }

    // フィナーレ枠(round=0 は だいルーレット 固定)
    await this._worldEvent(0);

    await this._finale();
  }

  _zoneBgm(char) {
    const isFinal = this.round >= CONFIG.ROUNDS && CONFIG.ROUNDS > 1;
    const zone = ZONES[zoneOfTile(char.tileIndex, this.ctx.world.tileCount)].id;
    audio.startBgm(isFinal ? 'board:final' : `board:${zone}`);
  }

  // ============ 1キャラのターン ============
  async _takeTurn(char) {
    const { ui, rig } = this.ctx;
    this._activeChar = char;          // snapshot の turn が読む
    dbg.push({ kind: 'turn', id: char.def.id, from: `round ${this.round}`, to: 'start' });
    ui.setActivePlayer(char.def.id);
    rig.setFollow(char);
    this._zoneBgm(char);

    // ゾーンが変わっていたら ひとこと(プレイヤーだけ)
    const zone = zoneOfTile(char.tileIndex, this.ctx.world.tileCount);
    if (char.isPlayer && zone !== char.lastZone) {
      const z = ZONES[zone];
      await ui.showBanner(`<span class="icon">${z.emoji}</span>${z.name}ゾーン!`, 1100);
    }
    char.lastZone = zone;
    await wait(600);

    // サイコロの種類(のろい→マイナス、ばくだん→1〜12)
    const kind = char.pendingDice || 'normal';
    char.pendingDice = null;
    const die = this.diceMesh;
    die.material = this.diceMats[kind];
    die.visible = true;
    this.diceSpin = true;
    audio.dice();
    const diePos = () => {
      die.position.copy(char.root.position).add(new THREE.Vector3(0, 2.9, 0));
    };
    diePos();
    const keepAbove = setInterval(diePos, 50);

    if (char.isPlayer) {
      // さかさま島のラウンドは 🔁(うしろへ すすむ)を見せる
      ui.showDice(true, this.moveMods.reversed ? '🔁'
        : kind === 'minus' ? '🌩️' : kind === 'bomb' ? '💣' : '🎲');
      await this._waitPlayerTap();
      ui.showDice(false);
    } else {
      await wait(900 + rand() * 600);
    }
    clearInterval(keepAbove);
    this.diceSpin = false;

    let n;
    if (kind === 'minus') {
      n = -(1 + Math.floor(rand() * 6));
      this._orientDice(-n);
      audio.thunder();
      audio.sadTrombone();
      this.ctx.fx.sparkleBurst(die.position, 8, 0x8878c0, 1.2);
      // さかさま島では マイナス × 逆走 = 前進。絵と結果が食い違わないように言いかえる。
      await this.ctx.ui.showBanner(this.moveMods.reversed
        ? `<span class="icon">🔁</span>${n} だ!<span class="sub">さかさまだから まえへ すすむ!</span>`
        : `<span class="icon">🌩️</span>${n} だ!うしろへ もどる〜!`, 1500);
    } else if (kind === 'bomb') {
      n = 1 + Math.floor(rand() * 12);
      // ドカン!とはじけて数字が出る
      audio.boom();
      this.ctx.rig.punch(0.75);
      this.ctx.fx.burstConfetti(die.position, 40, 5, 5);
      this.ctx.fx.sparkleBurst(die.position, 16, 0xff9d3c, 2);
      die.visible = false;
      if (n >= 7) audio.fanfare(); else audio.diceResult(n);
      await this.ctx.ui.showBanner(
        `<span class="icon">💥</span>${n} だ!!${n >= 7 ? '<span class="sub">すっごーい!</span>' : ''}`,
        1500,
      );
    } else {
      n = 1 + Math.floor(rand() * 6);
      this._orientDice(n);
      audio.diceResult(n);
      this.ctx.fx.sparkleBurst(die.position, 10, 0xfff6a8, 1.2);
      if (n >= 5) {
        // おおきい目はドラマチックに
        this.ctx.rig.punch(0.7);
        audio.yay();
        await this.ctx.ui.showBanner(
          `<span class="icon">${['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣'][n - 1]}</span>${n} だ!すごーい!`, 1100,
        );
      } else {
        await this.ctx.ui.showBanner(
          `<span class="icon">${['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣'][n - 1]}</span>${n} だ!`, 950,
        );
      }
    }
    die.visible = false;
    char.land();

    // さかさま島のラウンドは 目を反転する(マイナスサイコロ × 逆走 = 前進)
    const steps = reverseRoundSteps(n, this.moveMods.reversed);
    const collectedStarOnLanding = await this._moveCharacter(char, steps);

    // のろいが解けたら すがたを戻す
    if (kind === 'minus') {
      char.setForm(char.stars >= CONFIG.SUPER_STARS ? 'super' : 'normal');
    }

    if (!collectedStarOnLanding) await this._tileEvent(char);
    await wait(300);
  }

  _waitPlayerTap() {
    return new Promise((res) => { this._diceResolver = res; });
  }

  // 出た目がカメラ側を向くように回す
  _orientDice(n) {
    const rots = {
      1: [0, -Math.PI / 2, 0],
      2: [0, Math.PI / 2, 0],
      3: [Math.PI / 2, 0, 0],
      4: [-Math.PI / 2, 0, 0],
      5: [0, 0, 0],
      6: [0, Math.PI, 0],
    };
    const [x, y, z] = rots[n];
    const cam = this.ctx.rig.camera.position;
    const d = new THREE.Vector3().subVectors(cam, this.diceMesh.position);
    const yaw = Math.atan2(d.x, d.z);
    const base = new THREE.Quaternion().setFromEuler(new THREE.Euler(x, y, z));
    const yawQ = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
    this.diceMesh.quaternion.copy(yawQ).multiply(base);
  }

  // n マスぶんホップ移動(nが負なら うしろへ。とちゅうのコインは ひろえる)
  async _moveCharacter(char, n) {
    const { world, fx, ui } = this.ctx;
    const dir = n >= 0 ? 1 : -1;
    const steps = Math.abs(n);
    let collectedStarOnLanding = false;
    // このターンかぎりの目じるし。持ち越すと あとのターンで まちがって効いてしまう。
    char._pickedUpHere = false;    // 着地マスで コインを2回とらない
    char._slidIntoStorm = false;   // 氷ですべって入った くろくもを1回だけ とばす
    char.setMode('hop');
    for (let s = 0; s < steps; s++) {
      const count = world.tileCount;
      const next = ((char.tileIndex + dir) % count + count) % count;
      await this._hopCharTo(char, next, CONFIG.HOP_TIME, { hopIndex: s });
      const reachedStar = world.tiles[next].type === 'STAR';
      if (reachedStar) {
        await this._starEvent(char, world.tiles[next]);
        this.ctx.rig.setFollow(char);
        char.setMode('hop');
        collectedStarOnLanding = s === steps - 1;
      }
      // うしろに もどるとちゅうでも コインは ひろえる(けがのこうみょう)。
      // さかさま島(coinPickupAll)のあいだは 着地マスも ふくめて ぜんぶ ひろえる。
      const pickupAll = this.moveMods.coinPickupAll;
      const canPickup = (dir < 0 || pickupAll) && (pickupAll || s < steps - 1);
      if (canPickup && !reachedStar && world.tiles[next].type === 'COIN') {
        char.coins += 1;
        audio.coin(0);
        fx.sparkleBurst(char.root.position, 4, 0xffe066);
        ui.updatePlayer(char);
        // 着地マスで ひろったときは _tileEvent の コイン分岐を1回だけ とばす
        if (s === steps - 1) char._pickedUpHere = true;
      }
      // スーパーすがたは キラキラをまき散らす
      if (char.form === 'super') fx.sparkleBurst(char.root.position, 2, 0xfff6a8, 0.8);
    }

    // スコールの日は みずたまりで ツルッと 1マス おまけ
    if (this.ctx.world.weatherName === 'squall' && dir > 0 && steps > 0) {
      const next = (char.tileIndex + 1) % world.tileCount;
      const from = char.root.position.clone();
      const to = world.tileAnchor(next).add(this._charOffset(char));
      char.faceTowards(to);
      audio.slip();
      await this.tweens.add(0.32, (k) => {
        char.root.position.lerpVectors(from, to, k);
        char.setHopHeight(0.05 * Math.sin(Math.PI * k));
        char.inner.rotation.z = Math.sin(k * Math.PI * 2) * 0.25;
      });
      char.inner.rotation.z = 0;
      char.land();
      audio.splash();
      fx.dustPuff(char.root.position, 4);
      char.tileIndex = next;
      if (world.tiles[next].type === 'STAR') {
        await this._starEvent(char, world.tiles[next]);
        this.ctx.rig.setFollow(char);
        collectedStarOnLanding = true;
      }
    }

    // ❄️ こおった島では、とまりきれずに 0〜3マス ツーッと すべる。
    // コインが多い子ほど よくすべる(「おもちだから」)。スコールのブロックと同じ形。
    if (this.moveMods.iceSlide && dir > 0 && steps > 0) {
      const slide = iceSlide(n, char.coins, rand, { maxSlide: CONFIG.ICE_SLIDE_MAX });
      for (let s = 0; s < slide; s++) {
        const next = (char.tileIndex + 1) % world.tileCount;
        const from = char.root.position.clone();
        const to = world.tileAnchor(next).add(this._charOffset(char));
        char.faceTowards(to);
        audio.slip();
        await this.tweens.add(0.32, (k) => {
          char.root.position.lerpVectors(from, to, k);
          char.setHopHeight(0.04 * Math.sin(Math.PI * k));
          char.inner.rotation.z = Math.sin(k * Math.PI * 2) * 0.22;
        });
        char.inner.rotation.z = 0;
        char.land();
        fx.sparkleBurst(char.root.position, 4, 0xdff2ff);
        char.tileIndex = next;
        if (world.tiles[next].type === 'STAR') {
          await this._starEvent(char, world.tiles[next]);
          this.ctx.rig.setFollow(char);
          char.setMode('hop');
          collectedStarOnLanding = s === slide - 1;
        }
      }
      // すべって くろくもに 入ってしまったときは、マイナスサイコロを1回だけ なかったことにする
      // (自分でとまった わけではないので)
      if (slide > 0 && world.tiles[char.tileIndex].type === 'STORM') {
        char.pendingDice = null;
        char._slidIntoStorm = true;
      }
      if (slide > 0) char._pickedUpHere = false;
    }

    char.setMode('idle');
    return collectedStarOnLanding;
  }

  _charOffset(char) {
    const i = this.ctx.chars.indexOf(char);
    const a = (i / 4) * TAU + 0.6;
    return new THREE.Vector3(Math.cos(a) * 0.42, 0, Math.sin(a) * 0.42);
  }

  // マスに ひもづかないホップ。ワールド座標へ跳ぶだけで tileIndex は変えない。
  // そらとぶ島(W-01)が くもリングへ跳ぶのに使う(ctx.hopFree)。
  async _hopCharFree(char, to, seconds = 0.7, opts = {}) {
    const { fx } = this.ctx;
    const { hopHeight = 1.4, silent = false, dust = 0 } = opts;
    const from = char.root.position.clone();
    char.faceTowards(to);
    char.setMode('hop');
    if (!silent) audio.hop(0);
    await this.tweens.add(seconds, (k) => {
      const e = easeInOut(k);
      char.root.position.lerpVectors(from, to, e);
      char.setHopHeight(Math.sin(Math.PI * k) * hopHeight);
    });
    char.setHopHeight(0);
    char.land();
    char.setMode('idle');
    if (!silent) audio.landing();
    if (dust) fx.dustPuff(char.root.position, dust);
  }

  // 1マスぶんのホップ。着地まで待って char.tileIndex を進める。
  // 島変貌イベントがキャラを任意のマスへ跳ばすのにも使う(ctx.hopTo)。
  async _hopCharTo(char, tileIndex, seconds = CONFIG.HOP_TIME, opts = {}) {
    const { world, fx } = this.ctx;
    const { hopHeight = 0.85, hopIndex = 0, silent = false, dust = 3 } = opts;
    const from = char.root.position.clone();
    const to = world.tileAnchor(tileIndex).add(this._charOffset(char));
    char.faceTowards(to);
    if (!silent) audio.hop(hopIndex);
    await this.tweens.add(seconds, (k) => {
      const e = easeInOut(k);
      char.root.position.lerpVectors(from, to, e);
      char.setHopHeight(Math.sin(Math.PI * k) * hopHeight);
    });
    char.setHopHeight(0);
    char.land();
    if (!silent) audio.landing();
    if (dust) fx.dustPuff(char.root.position, dust);
    char.tileIndex = tileIndex;
  }

  // マスでもらうコイン。🐢 いきものの せなか(W-06)のあとは そのラウンドだけ2倍になる。
  _coinGain(base) {
    return this.moveMods.coinDouble ? base * 2 : base;
  }

  // ============ マスイベント ============
  async _tileEvent(char, allowWarp = true) {
    const { world, ui, fx } = this.ctx;
    const tile = world.tiles[char.tileIndex];
    const type = tile.type;
    const pos = char.root.position;

    if (type === 'STAR') {
      await this._starEvent(char, tile);
      return;
    }
    if (type === 'COIN' || (type === 'RAINBOW' && !allowWarp)) {
      // さかさま島で 着地マスの コインを もう ひろっていたら、二重取りにしない
      if (char._pickedUpHere) { char._pickedUpHere = false; return; }
      char.coins += this._coinGain(CONFIG.COIN_TILE_GAIN);
      for (let i = 0; i < 3; i++) audio.coin(i);
      fx.coinBurst(pos.clone().add(new THREE.Vector3(0, 0.8, 0)), 5);
      fx.sparkleBurst(pos, 6, 0xffe066);
      char.setMode('cheer');
      ui.updatePlayer(char);
      await wait(850);
      char.setMode('idle');
      return;
    }
    if (type === 'HEART') {
      audio.yay();
      await ui.showBanner('<span class="icon">💗</span>みんなに コイン!', 1100);
      this.ctx.chars.forEach((c) => {
        c.coins += this._coinGain(CONFIG.HEART_TILE_GAIN);
        c.setMode('cheer');
        fx.sparkleBurst(c.root.position, 5, 0xff9dbe);
        ui.updatePlayer(c);
      });
      for (let i = 0; i < 2; i++) audio.coin(i);
      await wait(950);
      this.ctx.chars.forEach((c) => c.setMode('idle'));
      return;
    }
    if (type === 'RAINBOW') {
      // あめあがり(にじ)の日は 2ばい とぶ!
      const dist = this.ctx.world.weatherName === 'rainbowy' ? 8 : 4;
      audio.warp();
      await ui.showBanner(
        `<span class="icon">🌈</span>にじの ワープ!${dist === 8 ? '<span class="sub">あめあがりパワーで 2ばい!</span>' : ''}`,
        1200,
      );
      char.setMode('hop');
      for (let s = 0; s < dist; s++) {
        const next = (char.tileIndex + 1) % world.tileCount;
        const from = char.root.position.clone();
        const to = world.tileAnchor(next).add(this._charOffset(char));
        char.faceTowards(to);
        audio.hop(s + 3);
        fx.sparkleBurst(char.root.position, 4, [0xff5c5c, 0xffe45c, 0x6fdd6f, 0x5cb8ff][s % 4]);
        await this.tweens.add(0.2, (k) => {
          char.root.position.lerpVectors(from, to, easeInOut(k));
          char.setHopHeight(Math.sin(Math.PI * k) * 1.0);
        });
        char.setHopHeight(0);
        char.tileIndex = next;
      }
      char.land();
      char.setMode('idle');
      fx.burstConfetti(char.root.position, 24, 2.5, 4);
      await this._tileEvent(char, false);
      return;
    }
    if (type === 'EVENT') {
      await ui.showBanner('<span class="icon">🎆</span>はなび だいすき!', 1000);
      for (let i = 0; i < 5; i++) {
        const p = new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          11 + Math.random() * 6,
          (Math.random() - 0.5) * 20,
        );
        audio.firework(i);
        const col = [0xff5c8d, 0xffe45c, 0x6fdd6f, 0x5cb8ff, 0xc19bff][i];
        setTimeout(() => {
          fx.sparkleBurst(p, 14, col, 2.6);
          fx.burstConfetti(p, 20, 5, 1);
        }, i * 260);
      }
      this.ctx.chars.forEach((c) => c.setMode('cheer'));
      await wait(1600);
      this.ctx.chars.forEach((c) => c.setMode('idle'));
      return;
    }
    if (type === 'STORM') {
      // 氷ですべって 入ってしまったときは、くろくもは おやすみ(1回だけ)
      if (char._slidIntoStorm) {
        char._slidIntoStorm = false;
        audio.sparkle();
        char.setMode('cheer');
        await ui.showBanner(
          '<span class="icon">❄️</span>つるーん!<span class="sub">くろくもは おやすみ ちゅう</span>',
          1500,
        );
        char.setMode('idle');
        return;
      }
      await this._stormEvent(char);
      return;
    }
    if (type === 'BOMB') {
      audio.boing();
      audio.sparkle();
      char.pendingDice = 'bomb';
      char.setMode('cheer');
      await ui.showBanner(
        '<span class="icon">💣</span>ばくだんサイコロ ゲット!<span class="sub">つぎは 1〜12 の だいばくはつ!</span>',
        1900,
      );
      char.setMode('idle');
      return;
    }
    if (type === 'HOLE') {
      await this._caveEvent(char);
      return;
    }
    if (type === 'TURTLE') {
      await this._turtleEvent(char);
      return;
    }
    if (type === 'ROPEWAY') {
      await this._ropewayEvent(char);
      return;
    }
    if (type === 'COASTER') {
      await this._coasterEvent();
      return;
    }
  }

  // ---------- ⚡ くろくもマス ----------
  async _stormEvent(char) {
    const { ui, fx } = this.ctx;
    audio.thunder();
    this.ctx.rig.punch(1.25);
    fx.sparkleBurst(char.root.position.clone().add(new THREE.Vector3(0, 2, 0)), 10, 0xffe45c, 1.6);
    char.land();
    char.setForm('chibi');
    char.pendingDice = 'minus';
    await ui.showBanner(
      '<span class="icon">🌩️</span>くろくもに つかまった!<span class="sub">つぎは マイナスサイコロ…</span>',
      2000,
    );
  }

  // ---------- ⭐ スターマス ----------
  async _starEvent(char, tile) {
    const { world, ui, fx, rig } = this.ctx;
    audio.starGet();
    char.stars += 1;
    char.setMode('cheer');
    ui.updatePlayer(char);

    // スローモーション+きらびやかに(ドラマ演出)
    this.ctx.setTimeScale(0.35);
    setTimeout(() => this.ctx.setTimeScale(1), 950);

    const star = new THREE.Mesh(
      starGeometry(0.9, 0.42, 0.3),
      toonMatUnique(0xffe066, { emissive: 0xffb300, emissiveIntensity: 0.7 }),
    );
    star.position.copy(char.root.position).add(new THREE.Vector3(0, 2.4, 0));
    this.ctx.scene.add(star);
    fx.sparkleBurst(star.position, 16, 0xffe066, 1.6);
    [0xff5c5c, 0xffb03c, 0xffe45c, 0x6fdd6f, 0x5cb8ff, 0xb06ce0].forEach((c, i) => {
      setTimeout(() => fx.sparkleBurst(star.position, 5, c, 1.4), i * 120);
    });
    fx.burstConfetti(char.root.position, 50, 4, 6);
    await ui.showBanner(`<span class="icon">⭐</span>${char.def.name} スターゲット!`, 1800);
    await this.tweens.add(0.5, (k) => {
      star.rotation.y = k * 6;
      star.scale.setScalar(1 - easeOut(k) * 0.95);
      star.position.y = char.root.position.y + 2.4 - easeOut(k) * 1.4;
    });
    this.ctx.scene.remove(star);
    char.setMode('idle');

    // スーパーすがたに へんしん!
    if (char.stars >= CONFIG.SUPER_STARS && char.form !== 'super') {
      audio.transform();
      char.setMode('dance');
      fx.sparkleBurst(char.root.position.clone().add(new THREE.Vector3(0, 1, 0)), 20, 0xfff6a8, 2);
      char.setForm('super');
      await ui.showBanner(
        `<span class="icon">${char.def.emoji}✨</span>スーパー${char.def.name}に へんしん!`,
        2000,
      );
      char.setMode('idle');
    }

    const newTile = world.moveStar(this.ctx.chars);
    const newAnchor = world.tileAnchor(newTile.index);
    rig.setLookAt(newAnchor);
    audio.sparkle();
    await ui.showBanner('<span class="icon">🌟</span>つぎの ほしは あっち!', 1200);
    fx.sparkleBurst(newAnchor.clone().add(new THREE.Vector3(0, 1, 0)), 10, 0xffe066, 1.5);
    await wait(400);
  }

  // ---------- 🐢 カメさんの遊覧 ----------
  async _turtleEvent(char) {
    const { ui, fx, rig, world } = this.ctx;
    const rides = world.rides;
    audio.splash();
    await ui.showBanner('<span class="icon">🐢</span>カメさんに のろう!', 1400);

    const fromTile = char.tileIndex;
    const toTile = (fromTile + CONFIG.TURTLE_DIST) % world.tileCount;
    rides.turtleBusy = true;

    // カメのせなかへ ぴょーん
    const seat = () => rides.turtle.position.clone().add(new THREE.Vector3(0, 0.85, 0));
    const from = char.root.position.clone();
    char.setMode('hop');
    audio.boing();
    await this.tweens.add(0.6, (k) => {
      char.root.position.lerpVectors(from, seat(), easeInOut(k));
      char.setHopHeight(Math.sin(Math.PI * k) * 2.2);
    });
    char.setHopHeight(0);
    audio.splash();
    fx.dustPuff(rides.turtle.position, 4);

    // すいすい遊覧
    const curve = rides.turtleCurve(fromTile, toTile);
    const camOff = new THREE.Vector3();
    await this.tweens.add(3.6, (k) => {
      const e = easeInOut(k);
      const p = curve.getPoint(e);
      const ahead = curve.getPoint(Math.min(1, e + 0.03));
      rides.turtle.position.copy(p);
      rides.turtle.lookAt(ahead.x, p.y, ahead.z);
      char.root.position.copy(p).add(new THREE.Vector3(0, 0.85, 0));
      char.faceTowards(ahead);
      // カメラは海側から
      camOff.set(p.x, 0, p.z).normalize();
      rig.setManual(
        p.clone().add(camOff.multiplyScalar(7)).add(new THREE.Vector3(0, 3.4, 0)),
        p.clone().add(new THREE.Vector3(0, 0.8, 0)),
      );
      if (Math.random() < 0.12) fx.dustPuff(p.clone().add(new THREE.Vector3(0, 0.1, 0)), 2);
    });

    // とうちゃく!
    const landPos = world.tileAnchor(toTile).add(this._charOffset(char));
    const seatEnd = char.root.position.clone();
    audio.boing();
    await this.tweens.add(0.6, (k) => {
      char.root.position.lerpVectors(seatEnd, landPos, easeInOut(k));
      char.setHopHeight(Math.sin(Math.PI * k) * 2.2);
    });
    char.setHopHeight(0);
    char.land();
    char.setMode('cheer');
    char.tileIndex = toTile;
    rig.setFollow(char);
    audio.yay();
    fx.sparkleBurst(landPos, 8, 0x4fd0c0, 1.4);
    await ui.showBanner(`<span class="icon">🐢</span>${CONFIG.TURTLE_DIST}マス すいすい!ありがとう カメさん!`, 1500);
    char.setMode('idle');

    // カメはおうちへ(裏でゆっくり)
    const back = rides.turtle.position.clone();
    this.tweens.add(2.5, (k) => {
      rides.turtle.position.lerpVectors(back, rides.turtleHome, easeInOut(k));
      const ahead = rides.turtleHome;
      rides.turtle.lookAt(ahead.x, 0.1, ahead.z);
    }).then(() => { rides.turtleBusy = false; });

    await this._tileEvent(char);
  }

  // ---------- 🚠 ロープウェイ ----------
  async _ropewayEvent(char) {
    const { ui, fx, rig, world } = this.ctx;
    const rides = world.rides;
    audio.sparkle();
    await ui.showBanner('<span class="icon">🚠</span>ロープウェイで そらのたび!', 1400);

    const toTile = (char.tileIndex + CONFIG.ROPEWAY_DIST) % world.tileCount;

    // ゴンドラへ ぴょーん
    const gonSeat = () => rides.gondola.position.clone().add(new THREE.Vector3(0, -1.9, 0));
    const from = char.root.position.clone();
    char.setMode('hop');
    audio.boing();
    await this.tweens.add(0.7, (k) => {
      char.root.position.lerpVectors(from, gonSeat(), easeInOut(k));
      char.setHopHeight(Math.sin(Math.PI * k) * 2.6);
    });
    char.setHopHeight(0);

    // そらのたび(島ぜんたいが見える)
    audio.whoosh();
    const side = new THREE.Vector3();
    await this.tweens.add(5.0, (k) => {
      const e = easeInOut(k);
      const p = rides.ropewayCurve.getPoint(e);
      rides.gondola.position.copy(p);
      char.root.position.copy(p).add(new THREE.Vector3(0, -1.9, 0));
      const ahead = rides.ropewayCurve.getPoint(Math.min(1, e + 0.03));
      char.faceTowards(ahead);
      // よこから ついていく
      side.subVectors(ahead, p).normalize();
      const perp = new THREE.Vector3(-side.z, 0, side.x).multiplyScalar(9);
      rig.setManual(
        p.clone().add(perp).add(new THREE.Vector3(0, 1.5, 0)),
        p.clone().add(new THREE.Vector3(0, -1, 0)),
      );
      if (Math.random() < 0.1) fx.sparkleBurst(p.clone().add(new THREE.Vector3(0, -2.6, 0)), 2, 0xbfe8ff, 0.8);
    });

    // とうちゃく
    const landPos = world.tileAnchor(toTile).add(this._charOffset(char));
    const seatEnd = char.root.position.clone();
    audio.boing();
    await this.tweens.add(0.7, (k) => {
      char.root.position.lerpVectors(seatEnd, landPos, easeInOut(k));
      char.setHopHeight(Math.sin(Math.PI * k) * 1.6);
    });
    char.setHopHeight(0);
    char.land();
    char.tileIndex = toTile;
    char.setMode('cheer');
    char.coins += 3;
    ui.updatePlayer(char);
    rig.setFollow(char);
    audio.yay();
    audio.coin(0);
    fx.sparkleBurst(landPos, 10, 0xffb03c, 1.5);
    await ui.showBanner(`<span class="icon">🚠</span>${CONFIG.ROPEWAY_DIST}マスも とんだ!ながめ さいこう!`, 1600);
    char.setMode('idle');

    // ゴンドラはそっと駅へもどる
    this.tweens.add(3, (k) => {
      rides.gondola.position.copy(rides.ropewayCurve.getPoint(1 - easeInOut(k)));
    });

    await this._tileEvent(char);
  }

  // ---------- 🕳️ おとしあな → 地下どうくつ ----------
  async _caveEvent(char) {
    const { ui, fx, rig, world } = this.ctx;
    const rides = world.rides;
    const holeTile = char.tileIndex;

    audio.whoosh();
    await ui.showBanner('<span class="icon">🕳️</span>おとしあな〜〜!', 1200);

    // くるくるまわって あなに すいこまれる
    const from = char.root.position.clone();
    const startYaw = char.inner.rotation.y;
    char.setMode('hop');
    await this.tweens.add(0.8, (k) => {
      char.inner.rotation.y = startYaw + k * TAU * 2;
      char.root.position.y = from.y - k * k * 2.2;
      const s = 1 - k * 0.75;
      char.root.scale.setScalar(s);
    });

    // どうくつへ
    char.root.scale.setScalar(1);
    char.root.position.copy(rides.caveWorldPos(rides.caveEntry));
    const caveCam = () => {
      const center = rides.cave.position;
      rig.setManual(
        center.clone().add(new THREE.Vector3(0, 7, 12.5)),
        char.root.position.clone().add(new THREE.Vector3(0, 1, 0)),
      );
    };
    caveCam();
    audio.startBgm('cave');
    audio.sparkle();
    await ui.showBanner('<span class="icon">💎</span>キラキラ どうくつに とうちゃく!', 1600);

    // 5マスの ちかみちを ぴょんぴょん(コインひろい)
    for (let i = 1; i < rides.caveTiles.length; i++) {
      const to = rides.caveWorldPos(rides.caveTiles[i]);
      const f = char.root.position.clone();
      char.faceTowards(to);
      audio.hop(i);
      await this.tweens.add(0.34, (k) => {
        char.root.position.lerpVectors(f, to, easeInOut(k));
        char.setHopHeight(Math.sin(Math.PI * k) * 0.8);
        caveCam();
      });
      char.setHopHeight(0);
      char.land();
      char.coins += 2;
      audio.coin(0);
      fx.sparkleBurst(char.root.position, 5, 0x9fd8ff, 1.2);
      ui.updatePlayer(char);
    }

    // たからのま!
    const tPos = rides.caveWorldPos(rides.caveTreasurePos);
    const f2 = char.root.position.clone();
    await this.tweens.add(0.4, (k) => {
      char.root.position.lerpVectors(f2, tPos, easeInOut(k));
      char.setHopHeight(Math.sin(Math.PI * k) * 0.8);
      caveCam();
    });
    char.setHopHeight(0);
    char.setMode('cheer');
    char.coins += 6;
    for (let i = 0; i < 4; i++) audio.coin(i);
    fx.coinBurst(tPos.clone().add(new THREE.Vector3(0, 1, 0)), 10);
    fx.sparkleBurst(tPos, 14, 0xffe066, 1.8);
    ui.updatePlayer(char);
    await ui.showBanner('<span class="icon">💰</span>たからの ま だ〜!コイン ざっくざく!', 1900);
    char.setMode('idle');

    // かんけつせんで ぽかぽか ふきあがる!
    const gPos = rides.caveWorldPos(rides.caveGeyserPos);
    const f3 = char.root.position.clone();
    await this.tweens.add(0.4, (k) => {
      char.root.position.lerpVectors(f3, gPos, easeInOut(k));
      char.setHopHeight(Math.sin(Math.PI * k) * 0.7);
      caveCam();
    });
    char.setHopHeight(0);
    audio.geyser();
    rides.geyserColumn.visible = true;
    rides.geyserColumn.position.copy(rides.caveGeyserPos);

    const exitTile = (holeTile + CONFIG.HOLE_EXIT_DIST) % world.tileCount;
    const exitPos = world.tileAnchor(exitTile).add(this._charOffset(char));
    const upStart = char.root.position.clone();
    char.setMode('hop');
    await this.tweens.add(1.4, (k) => {
      // みずのはしらが のびる
      const colH = Math.min(1, k * 3) * 8;
      rides.geyserColumn.scale.set(1, colH, 1);
      rides.geyserColumn.position.y = rides.caveGeyserPos.y + colH / 2;
      // キャラは ぐんぐん上へ → 島の上の出口へ
      const e = easeInOut(k);
      char.root.position.lerpVectors(upStart, exitPos, e);
      char.root.position.y = upStart.y + (exitPos.y - upStart.y) * e + Math.sin(Math.PI * e) * 14;
      rig.setFollow(char);
    });
    rides.geyserColumn.visible = false;
    rides.geyserColumn.scale.set(1, 1, 1);
    char.setHopHeight(0);
    char.land();
    char.tileIndex = exitTile;
    char.setMode('cheer');
    audio.splash();
    audio.yay();
    fx.dustPuff(exitPos, 6);
    fx.sparkleBurst(exitPos, 12, 0x6fd0ff, 1.8);
    this._zoneBgm(char);
    await ui.showBanner('<span class="icon">♨️</span>ぽかぽか〜!ちじょうに もどってきた!', 1600);
    char.setMode('idle');

    await this._tileEvent(char);
  }

  // ---------- 🐙 ボス「タコの タコすけ」 ----------
  async _bossEvent() {
    const { ui, fx, rig, chars, world } = this.ctx;
    const rides = world.rides;
    const octo = rides.octopus;

    audio.stopBgm();
    audio.rumble();
    rig.punch(1.3);
    await ui.showBanner('<span class="icon">🌊</span>うみが ゴゴゴゴ…!?', 1700);

    // カメラをうみへ
    const octoXZ = new THREE.Vector3(octo.position.x, 0, octo.position.z);
    const dir = octoXZ.clone().normalize();
    const camPos = octoXZ.clone().sub(dir.clone().multiplyScalar(24)).add(new THREE.Vector3(0, 8.5, 0));
    const camLook = octoXZ.clone().add(new THREE.Vector3(0, 3, 0));
    rig.setManual(camPos, camLook);
    audio.startBgm('boss');

    // ざばーん!と登場
    const fromY = octo.position.y;
    await this.tweens.add(2.2, (k) => {
      const e = easeOut(k);
      octo.position.y = fromY + (rides.octopusUpY - fromY) * e;
      if (Math.random() < 0.3) {
        fx.dustPuff(octoXZ.clone().add(new THREE.Vector3((Math.random() - 0.5) * 6, 0.3, (Math.random() - 0.5) * 6)), 3);
      }
    });
    rides.octopusActive = true;
    audio.splash();
    audio.boing();
    await ui.showBanner('<span class="icon">🐙</span>タコの タコすけ、あらわれた!', 2000);
    await ui.showBanner('<span class="icon">🪶</span>みんなで こしょこしょして わらわせよう!', 1900);

    // こしょこしょタイム(タップれんだ・きょうりょくプレイ)
    let tickles = 0;
    ui.setMinigameMode(true);
    ui.showScore(true);
    ui.showTimer(true);
    ui.showTapLayer(true);
    this.tapHandler = (ndc, px) => {
      if (tickles >= CONFIG.BOSS_TICKLE_GOAL) return;
      tickles++;
      ui.setScore(`${tickles}/${CONFIG.BOSS_TICKLE_GOAL}`);
      audio.giggle();
      const tent = rides.tentacles[Math.floor(rand() * rides.tentacles.length)];
      const wp = new THREE.Vector3();
      tent.getWorldPosition(wp);
      fx.sparkleBurst(wp.add(new THREE.Vector3(0, -1, 0)), 5, 0xffc9e0, 1.4);
      rides.tickleOctopus();
      if (px) ui.emojiBurst(px.x, px.y, '🤭');
    };
    ui.setScore(`0/${CONFIG.BOSS_TICKLE_GOAL}`);
    const tickleTime = 11;
    for (let s = 0; s < tickleTime * 4 && tickles < CONFIG.BOSS_TICKLE_GOAL; s++) {
      ui.setTimer(1 - s / (tickleTime * 4));
      await wait(250);
    }
    this.tapHandler = null;
    ui.showTimer(false);
    ui.showTapLayer(false);
    ui.showScore(false);
    ui.setMinigameMode(false);

    const reward = bossCoinReward(
      tickles,
      CONFIG.BOSS_TICKLE_GOAL,
      CONFIG.BOSS_REWARD_COINS,
    );
    rig.setOverview();
    if (reward > 0) {
      // わっはっは!コインのあめ!
      audio.yay();
      audio.giggle();
      await this.tweens.add(1.2, (k) => {
        const s = 1 + Math.sin(k * Math.PI * 4) * 0.12;
        octo.scale.set(s, 2 - s, s);
      });
      octo.scale.set(1, 1, 1);
      audio.fanfare();
      fx.rainConfetti(new THREE.Vector3(0, 6, 0), 16, 120, 10);
      chars.forEach((c) => {
        c.coins += reward;
        c.setMode('dance');
        ui.updatePlayer(c);
      });
      for (let i = 0; i < 4; i++) audio.coin(i);
      await ui.showBanner(
        `<span class="icon">🐙</span>わっはっは!<span class="sub">おれいに みんなに 🪙${reward}まい!(こしょこしょ ${tickles}かい)</span>`,
        2600,
      );
    } else {
      audio.sadTrombone();
      await ui.showBanner(
        `<span class="icon">🐙</span>もうちょっと だったね!<span class="sub">こんどは ${CONFIG.BOSS_TICKLE_GOAL}かい タップしよう!</span>`,
        2200,
      );
    }
    chars.forEach((c) => c.setMode('idle'));

    // うみへ かえっていく
    const backY = octo.position.y;
    rides.octopusActive = false;
    this.tweens.add(2.2, (k) => {
      octo.position.y = backY + (rides.octopusHomeY - backY) * easeInOut(k);
    });
    await wait(600);
  }

  // ---------- 🎢 コースターで 島いっしゅう! ----------
  async _coasterEvent() {
    const { ui, fx, rig, chars, world } = this.ctx;
    const rides = world.rides;

    audio.fanfare();
    await ui.showBanner('<span class="icon">🎢</span>コースターの じかん だ〜!<span class="sub">みんなで しゅっぱつ!</span>', 2200);
    audio.startBgm('coaster');

    // みんなを座席へ
    const saved = chars.map((c) => ({
      c, pos: c.root.position.clone(), yaw: c.inner.rotation.y,
    }));
    chars.forEach((c, i) => {
      rides.coasterSeats[i].add(c.root);
      c.root.position.set(0, 0, 0);
      c.root.rotation.set(0, 0, 0);
      c.root.scale.setScalar(0.82);
      c.inner.rotation.y = 0;
      c.targetYaw = 0;
      c.setMode('idle');
    });
    rides.coasterRiding = true;

    // タップで やっほー!(+1コイン、さいだい12)
    let yahoo = 0;
    ui.showTapLayer(true);
    const player = chars[this.ctx.chars.findIndex((c) => c.isPlayer)] || chars[0];
    this.tapHandler = (ndc, px) => {
      if (yahoo >= 12) return;
      yahoo++;
      audio.yahoo();
      player.setMode('cheer');
      setTimeout(() => player.setMode('idle'), 400);
      if (px) ui.emojiBurst(px.x, px.y, '🙌');
    };

    // しゅっぱつ→島を一周
    const t0 = rides.coasterStationT;
    const train = rides.coasterTrain;
    const camPos = new THREE.Vector3();
    let coinsGot = 0;
    await this.tweens.add(24, (k) => {
      // さいしょゆっくり→ぐんぐん
      const sp = k < 0.12 ? easeInOut(k / 0.12) * 0.12 : k;
      const t = (t0 + sp) % 1;
      const p = rides.coasterCurve.getPoint(t);
      const ahead = rides.coasterCurve.getPoint((t + 0.012) % 1);
      train.position.copy(p);
      train.lookAt(ahead);
      // コインあつめ
      rides.trackCoins.forEach((coin) => {
        if (coin.userData.taken) return;
        let d = Math.abs(coin.userData.t - t);
        d = Math.min(d, 1 - d);
        if (d < 0.012) {
          coin.userData.taken = true;
          coin.visible = false;
          coinsGot++;
          audio.coin(0);
          fx.sparkleBurst(coin.position, 4, 0xffe066, 1.2);
        }
      });
      // カメラはトレインのうしろから
      const back = rides.coasterCurve.getPoint((t - 0.035 + 1) % 1);
      camPos.copy(back).add(new THREE.Vector3(0, 2.4, 0));
      rig.setManual(camPos, p.clone().add(new THREE.Vector3(0, 0.9, 0)));
    });
    this.tapHandler = null;
    ui.showTapLayer(false);

    // とうちゃく!みんなに ごほうび
    audio.stopBgm();
    audio.fanfare();
    chars.forEach((c, i) => {
      // せきから おろして もとの場所へ
      this.ctx.scene.add(c.root);
      c.root.scale.setScalar(1);
      c.root.position.copy(saved[i].pos);
      c.root.rotation.set(0, 0, 0);
      c.inner.rotation.y = saved[i].yaw;
      c.targetYaw = saved[i].yaw;
      c.setMode('dance');
      const gain = 6 + (c.isPlayer ? yahoo : 4);
      c.coins += gain;
      ui.updatePlayer(c);
    });
    rides.coasterRiding = false;
    rides.resetTrackCoins();
    rig.setOverview();
    fx.rainConfetti(new THREE.Vector3(0, 6, 0), 14, 90, 8);
    await ui.showBanner(
      `<span class="icon">🎢</span>いっしゅう だいせいこう!<span class="sub">🪙いっぱい ひろった!(やっほー ${yahoo}かい)</span>`,
      2600,
    );
    chars.forEach((c) => c.setMode('idle'));
    this._zoneBgm(chars[0]);
  }

  /**
   * チーム分けを立てる/やめる。プレイヤーストリップを2色で作り直す。
   * @param {number[][]|null} teams splitTeams の戻り値。null で個人表示へ戻す
   */
  setTeams(teams) {
    const { ui, chars } = this.ctx;
    this.teams = teams && teams.length ? teams : null;
    ui.setTeams(this.teams, chars);
  }

  // ============ 島変貌イベント ============
  // ラウンドの先頭で1本だけ抽選して走らせる。round === 0 はフィナーレ枠(だいルーレット固定)。
  async _worldEvent(round) {
    // 前のラウンドの後始末が残っていたら、演出なしで捨てる(保険)。
    this._pendingRoundEnd = null;
    this._finishDeferredEvent();

    // そのラウンドだけ効く移動修飾を必ずリセットする。
    // イベントの効果がラウンドをまたいで残る事故を、構造的に防ぐ。
    this.moveMods = {
      iceSlide: false, reversed: false, coinPickupAll: false, coinDouble: false,
    };

    // 抽選するのは CONFIG.WORLD_EVENT_ROUNDS([2 .. ROUNDS-1])のラウンドだけ。
    // ラウンド1は島を覚える回、最終ラウンドは既存の大一番を邪魔しない。
    if (round !== 0 && !CONFIG.WORLD_EVENT_ROUNDS.includes(round)) return;

    let id = round === 0
      ? 'wheel'                                    // フィナーレは固定
      : chooseWorldEvent(WORLD_EVENTS, round, this._worldEventState(), rand);
    // ?scenario=round:<id> … 抽選の結果だけを1回さしかえる(debug.js が入れる)。
    // エントリ検索・usedIds・context・weatherOverride・try/finally・dispose は下の本番経路を通る。
    if (this._scenarioForceEvent) { id = this._scenarioForceEvent; this._scenarioForceEvent = null; }
    if (!id) return;

    const entry = WORLD_EVENTS.find((e) => e.id === id);
    if (!entry) return;

    this._usedWorldEvents.add(id);
    const ev = entry.create(this._worldEventContext());
    ev.id = entry.id;                              // snapshot の event.id
    this._activeWorldEvent = ev;                   // board.update から update(dt) を回す
    dbg.push({ kind: 'event-start', id, from: `_worldEvent(${round})`, to: 'run' });
    try {
      if (entry.weatherOverride) this.ctx.world.setWeather(entry.weatherOverride);
      await ev.run();
    } finally {
      this.tapHandler = null;
      this.dragHandler = null;
      if (this._pendingRoundEnd) {
        // ラウンド全体に効くイベント(❄️こおった・🙃さかさま)。
        // dispose も天気の復帰も、ラウンド末の後始末が済むまで待つ。
        // update(dt) は回しつづける(ラウンド中の常駐演出のため)。
        this._deferredEvent = ev;
        this._deferredEntry = entry;
      } else {
        this._activeWorldEvent = null;
        ev.dispose();
        if (entry.weatherOverride) {
          this.ctx.world.setWeather(weatherForRound(this.round, CONFIG.ROUNDS));
        }
      }
      // 片づけ直後の状態を そのまま ログへ。イベント終了の瞬間は外から
      // ポーリングで捉えられないので、ここで1枚だけ写す。
      dbg.push({
        kind: 'event-end', id, from: 'run',
        to: this._deferredEvent === ev ? 'deferred' : 'disposed',
        snap: dbg.on ? snapshot() : null,
      });
    }
  }

  // ミニゲームの直前に1回だけ呼ぶ。ctx.onRoundEnd を await し、繰り延べた後始末を終わらせる。
  async _runPendingRoundEnd() {
    const fn = this._pendingRoundEnd;
    this._pendingRoundEnd = null;
    if (!fn) { this._finishDeferredEvent(); return; }
    try {
      await fn();
    } finally {
      this._finishDeferredEvent();
    }
  }

  // 繰り延べていた dispose と天気の復帰を、ここでまとめて行う。
  _finishDeferredEvent() {
    const ev = this._deferredEvent;
    const entry = this._deferredEntry;
    this._deferredEvent = null;
    this._deferredEntry = null;
    if (!ev) return;
    if (this._activeWorldEvent === ev) this._activeWorldEvent = null;
    this.tapHandler = null;
    this.dragHandler = null;
    ev.dispose();
    if (entry?.weatherOverride) {
      this.ctx.world.setWeather(weatherForRound(this.round, CONFIG.ROUNDS));
    }
  }

  // 抽選の純関数へ渡す、DOM も Three.js も含まないプレーンオブジェクト。
  _worldEventState() {
    const chars = this.ctx.chars;
    return {
      rounds: CONFIG.ROUNDS,
      usedIds: [...this._usedWorldEvents],
      bossRound: Math.ceil(CONFIG.ROUNDS / 2),
      bossDone: !!this._bossDone,
      weather: this.ctx.world.weatherName,
      totalCoins: chars.reduce((s, c) => s + c.coins, 0),
      maxStars: Math.max(...chars.map((c) => c.stars)),
    };
  }

  // イベントに渡す唯一の窓口。イベントは board インスタンスを直接は受け取らない。
  _worldEventContext() {
    const b = this;
    const { scene, world, chars, ui, fx, rig } = this.ctx;
    const ctx = {
      scene, world, chars, ui, fx, rig, audio,
      rides: world.rides,
      tweens: b.tweens,                            // board.update が駆動する唯一のキュー
      wait,
      round: b.round,
      rounds: CONFIG.ROUNDS,

      // 進行の書き換え
      moveMods: b.moveMods,
      charOffset: (c) => b._charOffset(c),
      tileAnchorOf: (i) => world.tileAnchor(i),
      rideIsland: () => world.rideIsland(chars, (c) => b._charOffset(c)),
      hopTo: (c, tileIndex, sec) => b._hopCharTo(c, tileIndex, sec),
      runTileEvent: (c) => b._tileEvent(c),
      moveStar: () => world.moveStar(chars),
      // ✂️ チーム分け(表示だけ)。_finale は無改造のまま個人順位を出す。
      get teams() { return b.teams; },
      setTeams: (t) => b.setTeams(t),
      // マスに ひもづかない自由な1ホップ(🏝️ くもリングへ跳ぶのに使う)。
      // char.tileIndex は動かさないので、島へ もどすときは hopTo を使う。
      hopFree: (c, to, sec, opts) => b._hopCharFree(c, to, sec, opts),

      // ===== Phase 5 / 5a ここから =====
      // 🫧 ちっちゃく(W-19)だけが使う、4人の tileIndex の一括ふりなおし。
      // 48マス系 ⇔ 24マス系 の変換は rules.remapTileIndex / restoreTileIndex が持つ。
      remapTiles: (fn) => { for (const c of chars) c.tileIndex = fn(c.tileIndex); },
      // ===== Phase 5 / 5a ここまで =====

      // 入力(設定したら必ず解除される:_worldEvent の finally が保証する)
      setTapHandler: (fn) => { b.tapHandler = fn; },
      setDragHandler: (fn) => { b.dragHandler = fn; },

      // 演出
      setTimeScale: (s) => b.ctx.setTimeScale(s),
      punch: (a) => rig.punch(a),
      banner: (html, ms) => ui.showBanner(html, ms),
    };

    // ctx.onRoundEnd = () => this._thaw() の代入を board へ転送する。
    // 代入されているあいだ、board は dispose と天気の復帰を ラウンド末まで待つ。
    Object.defineProperty(ctx, 'onRoundEnd', {
      get: () => b._pendingRoundEnd,
      set: (fn) => { b._pendingRoundEnd = fn; },
      enumerable: true,
    });
    return ctx;
  }

  // ---------- デバッグ用 ----------
  async _debugEvent(name) {
    const { chars, world } = this.ctx;
    const player = chars.find((c) => c.isPlayer) || chars[0];
    const jumpTo = (tile) => {
      player.tileIndex = tile;
      player.root.position.copy(world.tileAnchor(tile)).add(this._charOffset(player));
    };
    const TABLE = {
      boss: () => this._bossEvent(),
      coaster: () => this._coasterEvent(),
      cave: () => { jumpTo(15); return this._caveEvent(player); },
      turtle: () => { jumpTo(6); return this._turtleEvent(player); },
      ropeway: () => { jumpTo(18); return this._ropewayEvent(player); },
      storm: () => { jumpTo(10); return this._stormEvent(player); },
    };
    if (TABLE[name]) { await TABLE[name](); return; }

    // 島変貌イベント(WORLD_EVENTS の id で引く)。のりものとは名前が重ならない。
    const entry = WORLD_EVENTS.find((e) => e.id === name);
    if (!entry) return;
    const ev = entry.create(this._worldEventContext());
    ev.id = entry.id;
    this._activeWorldEvent = ev;
    dbg.push({ kind: 'event-start', id: name, from: '_debugEvent', to: 'run' });
    try {
      if (entry.weatherOverride) world.setWeather(entry.weatherOverride);
      await ev.run();
      // ラウンド全体に効くイベント(❄️こおった・🙃さかさま)は、
      // ここで解氷・反転もどしまで走らせてから完走シグナルを立てる。
      await this._runPendingRoundEnd();
    } finally {
      this.tapHandler = null;
      this.dragHandler = null;
      this._pendingRoundEnd = null;
      this._finishDeferredEvent();          // 繰り延べていたら ここで dispose と天気の復帰
      if (this._activeWorldEvent === ev) {  // 繰り延べていなければ ここで片づける
        this._activeWorldEvent = null;
        ev.dispose();
      }
      this.moveMods = {
        iceSlide: false, reversed: false, coinPickupAll: false, coinDouble: false,
      };
      // E2E への完走シグナル。?event= のときだけ main.js が board を公開する。
      this._debugEventDone = name;
      dbg.push({ kind: 'event-end', id: name, from: '_debugEvent', to: 'done' });
    }
  }

  // ============ ミニゲームフェーズ ============
  async _minigamePhase() {
    const { ui, chars, fx, rig } = this.ctx;
    audio.stopBgm();
    audio.fanfare();
    await ui.showBanner('<span class="icon">🎮</span>ミニゲームの じかん!', 1700);

    const result = await this.ctx.runMinigame();

    rig.setOverview();
    const winner = chars[result[0].charIndex];
    result.forEach((r, place) => {
      const c = chars[r.charIndex];
      c.coins += place === 0 ? CONFIG.MINIGAME_WIN_COINS : 1;
      ui.updatePlayer(c);
    });
    audio.yay();
    winner.setMode('cheer');
    fx.burstConfetti(winner.root.position, 40, 3, 6);
    await ui.showBanner(
      `<span class="icon">${winner.def.emoji}</span>${winner.def.name} の かち!<span class="sub">🪙コイン ゲット!</span>`,
      1800,
    );
    winner.setMode('idle');
  }

  // ============ 優勝発表 ============
  async _finale() {
    const { ui, chars, fx, world, rig } = this.ctx;
    audio.stopBgm();
    ui.showDice(false);
    ui.setActivePlayer('');

    await ui.showBanner('<span class="icon">🏆</span>けっか はっぴょう!', 1800);

    const order = [...chars].sort((a, b) => (b.stars - a.stars) || (b.coins - a.coins));
    const winner = order[0];

    rig.setFinale();
    await Promise.all(chars.map((c, i) => {
      const a = (i / chars.length) * TAU + Math.PI / 4;
      const rank = order.indexOf(c);
      const r = 5.4;
      const target = new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r);
      target.y = islandHeight(target.x, target.z) + 0.05;
      const from = c.root.position.clone();
      c.setMode('hop');
      return this.tweens.add(1.1, (k) => {
        const e = easeInOut(k);
        c.root.position.lerpVectors(from, target, e);
        c.setHopHeight(Math.abs(Math.sin(k * Math.PI * 3)) * 0.7);
      }).then(() => {
        c.setHopHeight(0);
        c.setMode(rank === 0 ? 'dance' : 'cheer');
        c.faceTowards(new THREE.Vector3(Math.cos(a) * 30, 0, Math.sin(a) * 30));
      });
    }));

    const crown = new THREE.Mesh(
      new THREE.ConeGeometry(0.3, 0.4, 8),
      toonMat(0xffd23e),
    );
    crown.position.y = 1.75;
    winner.inner.add(crown);

    audio.fanfare();
    // 紙ふぶきの雨。setInterval は使わず、board.update(dt) が駆動する tweens で回す
    // (設計書 3.3)。finaleCleanup() がフラグを倒すと止まり、
    // 誰も呼ばなくても 200回(約3分)で自然に終わる。
    this._finaleRaining = true;
    (async () => {
      for (let i = 0; i < 200 && this._finaleRaining; i++) {
        fx.rainConfetti(new THREE.Vector3(0, 4, 0), 9, 40, 8);
        audio.firework(0);
        await this.tweens.add(0.9, () => {});
      }
      this._finaleRaining = false;
    })();
    fx.burstConfetti(winner.root.position, 80, 5, 8);

    await ui.showBanner(
      `<span class="icon">${winner.def.emoji}👑</span>${winner.def.name} の ゆうしょう!` +
      `<span class="sub">⭐${winner.stars} 🪙${winner.coins}</span>`,
      3600,
    );
    await ui.showBanner(
      '<span class="icon">🎉</span>みんな よく がんばりました!',
      2600,
    );
    // ここで戻る。main 側が「タップでもういっかい」を出す。
    // finaleCleanup は main.js の リロード経路と pagehide から呼ばれる。
  }
}
