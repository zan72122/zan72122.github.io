/**
 * main.js — 全体の統合とゲームループ。
 *
 * ラン構成: 1ラン = 5ダイブ。5本目は "THE BIG ONE" で得点3倍。
 * ダイブごとに技のバリエーションが倍率を育て、同じ技の繰り返しは価値が落ちる。
 * → 「安定した1本」ではなく「5本の構成力」を問う設計。
 */

import * as THREE from 'three';
import { SPOTS, CHARACTERS, RUN, SCORE, TIME, SHAPES } from './config.js';
import { Input } from './input.js';
import { Audio } from './audio.js';
import { World } from './world.js';
import { Diver } from './diver.js';
import { Player, STATE } from './player.js';
import { CameraRig } from './camera.js';
import { Ghost } from './ghost.js';
import { Hud } from './hud.js';
import { UI } from './ui.js';
import * as Save from './save.js';
import { nameTrick, trickKey, scoreDive, starsFor, RunState } from './tricks.js';

const MODE = { MENU: 'menu', PLAY: 'play', PAUSE: 'pause', BETWEEN: 'between', RESULT: 'result' };

class Game {
  constructor() {
    this.canvas = document.getElementById('gl');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.06;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.camera = new THREE.PerspectiveCamera(58, 1, 0.1, 1400);
    this.world = new World(this.renderer);
    this.diver = new Diver(this.world.scene);
    this.ghost = new Ghost(this.world.scene);
    this.audio = new Audio();
    this.player = new Player(this.diver, this.world, this.audio);
    this.rig = new CameraRig(this.camera);
    this.hud = new Hud();
    this.input = new Input(this.canvas);

    this.save = Save.load();
    this.mode = MODE.MENU;
    this.spot = SPOTS[0];
    this.run = null;
    this.betweenTimer = 0;
    this.bestGhostCandidate = null;
    this.tutorStage = 0;
    this.lastT = performance.now();
    this._prevState = STATE.READY;

    this.ui = new UI(this.save, {
      sfx: () => this.audio.ui(),
      play: (id) => this.startRun(id),
      home: () => this.toMenu(),
      resume: () => this.resume(),
      inGame: () => this.mode !== MODE.MENU,
      buySpot: (s) => this.buySpot(s),
      syncUnlocks: () => this.syncUnlocks(),
      buyChar: (c) => this.buyChar(c),
      selectChar: (id) => this.selectChar(id),
      saveNow: () => Save.save(this.save),
    });

    this.syncUnlocks();
    this.setCharacter(this.save.character);
    this.audio.setMuted(!!this.save.muted);
    this.hud.setMuted(!!this.save.muted);
    this.hud.setCoins(this.save.coins);

    this._bindChrome();
    this.rig.setAspect(1);
    this._resize();
    addEventListener('resize', () => this._resize());

    this.world.loadSpot(this.spot, this.char);
    this.player.reset(this.spot);
    this.rig.reset(this.player);

    document.getElementById('boot').classList.add('hidden');
    this.ui.show('title');
    window.__game = this;   // デバッグ / 自動テスト用
    requestAnimationFrame((t) => this._loop(t));
  }

  _bindChrome() {
    const start = () => { this.audio.init(); this.audio.resume(); };
    addEventListener('pointerdown', start, { once: true });
    addEventListener('keydown', start, { once: true });
    this.hud.el.mute.onclick = (e) => {
      e.stopPropagation();
      this.save.muted = !this.save.muted;
      this.audio.setMuted(this.save.muted);
      this.hud.setMuted(this.save.muted);
      Save.save(this.save);
    };
    this.hud.el.pause.onclick = (e) => { e.stopPropagation(); this.pause(); };
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.mode === MODE.PLAY) this.pause(); });
  }

  _resize() {
    const w = innerWidth, h = innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.rig.setAspect(this.camera.aspect);
  }

  // ---------------- 進行管理 ----------------

  setCharacter(id) {
    const c = CHARACTERS.find((x) => x.id === id) || CHARACTERS[0];
    this.char = c;
    this.player.setCharacter(c);
    this.ghost.setCharacter(c);
  }

  selectChar(id) {
    this.save.character = id;
    this.setCharacter(id);
    Save.save(this.save);
    this.audio.uiBig();
  }

  buyChar(c) {
    if (this.save.coins < c.cost || this.save.owned.includes(c.id)) return;
    this.save.coins -= c.cost;
    this.save.owned.push(c.id);
    this.save.character = c.id;
    this.setCharacter(c.id);
    this.hud.setCoins(this.save.coins);
    Save.save(this.save);
    this.audio.fanfare();
  }

  buySpot(s) {
    if (this.save.coins < s.cost || this.save.ownedSpots.includes(s.id)) return;
    this.save.coins -= s.cost;
    this.save.ownedSpots.push(s.id);
    this.hud.setCoins(this.save.coins);
    Save.save(this.save);
    this.audio.fanfare();
  }

  /** ★の数で自動解放されるスポット(cost 0)を常に同期する。取りこぼしを防ぐ。 */
  syncUnlocks() {
    const stars = Save.totalStars(this.save);
    const added = [];
    for (const s of SPOTS) {
      if (this.save.ownedSpots.includes(s.id)) continue;
      if (s.cost === 0 && stars >= s.starsToUnlock) { this.save.ownedSpots.push(s.id); added.push(s); }
    }
    return added;
  }

  startRun(spotId) {
    const s = SPOTS.find((x) => x.id === spotId) || SPOTS[0];
    if (!this.save.ownedSpots.includes(s.id)) return;
    this.spot = s;
    this.save.lastSpot = s.id;
    this.world.loadSpot(s, this.char);
    this.run = new RunState(s, RUN.bigOneIndex);
    this.bestGhostCandidate = null;
    this.ui.hideAll();
    this.hud.show(true);
    this.hud.setSpot(`${s.name} · ${s.height}m`);
    this.hud.setRunScore(0, true);
    this.hud.setVariety(1);
    this.hud.setCoins(this.save.coins);
    this.audio.init();
    this.audio.resume();
    this.audio.startMusic(!!s.night);
    this.audio.duckMusic(false);
    this.mode = MODE.PLAY;
    this.tutorStage = this.save.totalDives < 3 ? 1 : 0;
    this.beginDive();
  }

  beginDive() {
    this.player.reset(this.spot);
    this.rig.side = 1;
    this.rig.reset(this.player);
    this.hud.setPips(this.run.diveIndex, this.run.diveIndex);
    this.hud.hideBanner();
    this.hud.showAir(false);
    this.hud.showCharge(false);
    this.hud.showEntryGauge(false);
    const coarse = this.input.hasTouch ||
      (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
    this.hud.controlHint(coarse && this.save.totalDives < 6);
    this.hud.setVariety(this.run.varietyMult);
    const g = this.save.ghosts[this.spot.id];
    if (this.save.ghostOn !== false && g) this.ghost.play(g); else this.ghost.stop();
    this.mode = MODE.PLAY;
    this._prevState = STATE.READY;
    if (this.tutorStage === 1) this.hud.tip('押しっぱなしで<b>溜める</b> → 離して<b>ジャンプ</b>');
    else if (this.run.isBigOne) this.hud.tip('<b>THE BIG ONE</b> — この1本だけ得点 <b>×3</b>');
    else if (this.save.totalDives < 8 && this.run.diveIndex === 1)
      this.hud.tip('回りながら <b>Shift / S</b>(画面中央)で<b>えび型 ×1.7</b>');
    else if (this.save.totalDives < 14 && this.run.diveIndex === 2)
      this.hud.tip('<b>早めに手を離す</b>と伸型のまま回れる。1/4回転耐えれば <b>×2.3</b>');
    else if (this.save.totalDives < 20 && this.run.diveIndex === 3)
      this.hud.tip('毎回<b>ちがう技</b>を出すと <b>VARIETY 倍率</b>が伸びる');
    else this.hud.tip(null);
  }

  finishDive() {
    const p = this.player, t = p.tracker, run = this.run;
    const grade = p.entryResult.grade;
    const key = trickKey(t);
    const repeat = run.keyCount(key);
    const res = scoreDive(t, grade, {
      fallHeight: t.fallHeight,
      bigOne: run.isBigOne,
      varietyMult: run.varietyMult,
      repeatCount: repeat,
    });
    const name = nameTrick(t);
    res.trickName = name.jp;
    res.trickEn = name.en;

    const isNewBestDive = res.total > (this.save.bestDive[this.spot.id] || 0);
    if (isNewBestDive) this.bestGhostCandidate = { score: res.total, frames: p.ghostFrames.slice() };

    run.commit(key, res);
    this.hud.setRunScore(run.total);
    this.hud.setVariety(run.varietyMult);
    this.hud.setPips(run.diveIndex, run.diveIndex);
    this.save.totalDives++;
    if (grade.key === 'rip') this.save.totalRips++;

    const chips = [];
    chips.push({ text: `${t.rotations.toFixed(2)} 回転`, color: '#fff' });
    chips.push({ text: `姿勢 ×${res.shapeMult.toFixed(2)}`, color: '#7ee0ff' });
    if (t.twists >= 0.4) chips.push({ text: `ひねり ${t.twists.toFixed(1)}`, color: '#ff8fd0' });
    chips.push({ text: `落差 ×${res.heightMult.toFixed(2)}`, color: '#cfeaff' });
    chips.push({ text: `入水 ×${grade.mult.toFixed(1)}`, color: `hsl(${grade.hue} 95% 66%)` });
    if (t.rings) chips.push({ text: `リング ×${t.rings}`, color: '#6ff0ff' });
    if (t.coins) chips.push({ text: `コイン ×${t.coins}`, color: '#ffcb2e' });
    if (t.wallKicks) chips.push({ text: `壁蹴り ×${t.wallKicks}`, color: '#ffd24a' });
    if (t.perfectTakeoff) chips.push({ text: 'パーフェクト踏切', color: '#4fe08a' });
    if (res.varietyMult > 1.001) chips.push({ text: `バラエティ ×${res.varietyMult.toFixed(1)}`, color: '#ff5fa8' });
    if (repeat > 0) chips.push({ text: `同じ技 ×${res.repeatFactor.toFixed(2)}`, color: '#ff7a3d' });
    if (res.bigOne) chips.push({ text: 'BIG ONE ×3', color: '#ff5fa8' });

    this.hud.banner(grade, name.jp, res.total, chips);
    this.audio.duckMusic(true);
    if (grade.key === 'rip') { this.audio.cheer(1); this.rig.shake(0.5); }
    else if (grade.key === 'clean') this.audio.cheer(0.55);
    else if (grade.key === 'flop') this.rig.shake(1.1);

    this.mode = MODE.BETWEEN;
    this.betweenTimer = 0;
  }

  nextStep() {
    this.audio.duckMusic(false);
    if (this.run.finished) this.endRun();
    else this.beginDive();
  }

  endRun() {
    const run = this.run, spot = this.spot;
    const earned = starsFor(spot, run.total);
    const prev = this.save.stars[spot.id] || 0;
    this.save.stars[spot.id] = Math.max(prev, earned);
    const isBest = run.total > (this.save.best[spot.id] || 0);
    if (isBest) this.save.best[spot.id] = run.total;
    if (run.bestDive > (this.save.bestDive[spot.id] || 0)) {
      this.save.bestDive[spot.id] = run.bestDive;
      if (this.bestGhostCandidate) this.save.ghosts[spot.id] = this.bestGhostCandidate.frames;
    }
    const coins = Math.round(run.total * SCORE.coinsPerPoint * (this.char.coinMult || 1));
    this.save.coins += coins;

    // 解放されたもの
    const starsNow = Save.totalStars(this.save);
    const starsBefore = starsNow - Math.max(0, earned - prev);
    const unlocks = [];
    for (const s of this.syncUnlocks()) unlocks.push(`新スポット解放: <b>${s.name}</b>`);
    for (const s of SPOTS) {
      if (this.save.ownedSpots.includes(s.id)) continue;
      if (s.cost > 0 && starsBefore < s.starsToUnlock && starsNow >= s.starsToUnlock) {
        unlocks.push(`<b>${s.name}</b> が購入可能に(${s.cost.toLocaleString()} コイン)`);
      }
    }
    Save.save(this.save);
    this.hud.setCoins(this.save.coins);
    this.hud.show(false);
    this.ghost.stop();
    this.audio.stopMusic();
    this.audio.fanfare();
    this.mode = MODE.RESULT;
    this.ui.showResult({ spot, run, earnedStars: earned, prevStars: prev, coins, isBest, unlocks });
  }

  toMenu() {
    this.mode = MODE.MENU;
    this.run = null;
    this.hud.show(false);
    this.ghost.stop();
    this.audio.stopMusic();
    this.player.reset(this.spot);
    this.rig.reset(this.player);
  }

  pause() {
    if (this.mode !== MODE.PLAY && this.mode !== MODE.BETWEEN) return;
    this._resumeMode = this.mode;
    this.mode = MODE.PAUSE;
    this.audio.duckMusic(true);
    this.ui.show('pause');
  }

  resume() {
    if (this.mode !== MODE.PAUSE) return;
    this.mode = this._resumeMode || MODE.PLAY;
    this.audio.duckMusic(this.mode === MODE.BETWEEN);
    this.audio.resume();
  }

  // ---------------- ループ ----------------

  _loop(now) {
    requestAnimationFrame((t) => this._loop(t));
    let dtReal = (now - this.lastT) / 1000;
    this.lastT = now;
    if (!(dtReal > 0)) dtReal = 1 / 60;
    dtReal = Math.min(dtReal, 0.05);

    const playing = this.mode === MODE.PLAY || this.mode === MODE.BETWEEN;
    const scale = (this.mode === MODE.PLAY) ? this.player.timeScale : 1;
    const dt = dtReal * scale;

    if (this.input.pausePressed) {
      if (this.mode === MODE.PAUSE) { this.ui.hide('pause'); this.resume(); }
      else if (playing) this.pause();
    }

    if (this.mode !== MODE.PAUSE) {
      if (playing) {
        if (this.input.restart && (this.player.state === STATE.READY || this.player.state === STATE.CHARGE)) {
          this.beginDive();
        }
        this.player.update(dt, this.input);
        this._reactToEvents();
        this._syncHud(dt);
        this.ghost.update(dt);
      }
      this.world.update(dt, this.world.water.time);
      this.rig.update(dtReal, this.player, this.world);
    }

    if (this.mode === MODE.BETWEEN) {
      this.betweenTimer += dtReal;
      const ready = this.betweenTimer > 1.35 && this.player.state === STATE.DONE;
      if (ready && (this.betweenTimer > 2.6 || this.input.anyPressed)) this.nextStep();
    }

    this.hud.tick(dtReal);
    this.input.endFrame();
    this.renderer.render(this.world.scene, this.camera);
  }

  _reactToEvents() {
    for (const e of this.player.events) {
      if (e.type === 'ring') {
        this.hud.popup(`RING ×${e.n}  +${SCORE.ringBonus}`, '#6ff0ff', 50, 40);
        this.rig.shake(0.12);
      } else if (e.type === 'coin') {
        this.save.coins += SCORE.coinCurrency;
        this.hud.setCoins(this.save.coins);
        this.hud.popup(`+${SCORE.coinValue}  <span style="opacity:.8">◎${SCORE.coinCurrency}</span>`, '#ffcb2e', 58, 44);
      } else if (e.type === 'wallKick') {
        this.hud.popup('WALL KICK!', '#ffd24a', 50, 38);
        this.rig.shake(0.3);
      } else if (e.type === 'perfectTakeoff') {
        this.hud.popup('PERFECT TAKEOFF!', '#4fe08a', 50, 52);
      } else if (e.type === 'shapeHeld') {
        const S = { tuck: ['TUCK', '#7ee0ff'], pike: ['PIKE 確定', '#ffd166'], layout: ['LAYOUT 確定!', '#ff8fd0'] }[e.shape];
        if (e.shape !== 'tuck') { this.hud.popup(`${S[0]} ×${SHAPES[e.shape].mult.toFixed(1)}`, S[1], 50, 34); this.audio.ring(2); }
      } else if (e.type === 'twist') {
        this.hud.popup('TWIST', '#ff8fd0', 42, 50);
      } else if (e.type === 'takeoff') {
        this.hud.showCharge(false);
        this.hud.showAir(true);
        if (this.tutorStage === 1) { this.tutorStage = 2; this.hud.tip('押している間<b>まわる</b>。離すと<b>伸びて</b>回転が落ちる'); }
      } else if (e.type === 'slowMoOn') {
        this.hud.showEntryGauge(true);
        if (this.tutorStage === 2) { this.tutorStage = 3; this.hud.tip('針を<b>真上</b>に合わせて着水 → <b>RIP ENTRY</b>'); }
      } else if (e.type === 'entry') {
        this.hud.showEntryGauge(false);
        this.hud.showAir(false);
        this.hud.tip(null);
        this.rig.shake(e.style === 'flop' ? 0.9 : e.style === 'rip' ? 0.35 : 0.5);
        this.finishDive();
      }
    }
  }

  _syncHud(dt) {
    const p = this.player;
    if (p.state === STATE.CHARGE) { this.hud.showCharge(true); this.hud.setCharge(p.charge); }
    if (p.state === STATE.AIR) {
      const t = p.tracker;
      const live = this._liveEstimate();
      this.hud.setAir(t.rotations, p.shape, live,
        this.input.pike && !(this.input.front || this.input.back), t.shapeMult, t.heldShapes());
      this.hud.setHeight(Math.max(0, p.heightAboveWater), Math.max(1, this.spot.height));
      if (p.slowMo > 0.05) {
        const r = p.entryReadout();
        this.hud.setEntryGauge(r.signed, r.headFirst);
      }
    }
  }

  /** 空中で表示する見積もり点。RIP を取れた場合の値を出して欲を煽る。 */
  _liveEstimate() {
    const t = this.player.tracker;
    const base = Math.pow(t.rotations, SCORE.rotationExp) * SCORE.rotationBase * t.shapeMult
      + t.twists * SCORE.twistBonus + t.rings * SCORE.ringBonus + t.coins * SCORE.coinValue
      + t.wallKicks * SCORE.wallKickBonus + (t.perfectTakeoff ? SCORE.perfectTakeoff : 0);
    const hm = 1 + this.player.fallHeight / 40;
    const key = trickKey(t);
    const rep = Math.pow(SCORE.repeatDecay, this.run ? this.run.keyCount(key) : 0);
    const vm = this.run ? this.run.varietyMult : 1;
    const big = this.run && this.run.isBigOne ? 3 : 1;
    return base * hm * 3.4 * vm * rep * big;   // 3.4 = RIP 倍率
  }
}

new Game();
