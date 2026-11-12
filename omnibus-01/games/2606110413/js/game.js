import { CONFIG } from './config.js';
import * as THREE from 'three';

const FINALE_WORDS = ['すごーい!', 'てんさい!', 'やったね!'];

// LOADING → TITLE → COUNTDOWN → PLAYING → FINALE → RESULT → COUNTDOWN …
export class Game {
  constructor({ targets, projectiles, effects, audio, ui, input, debris, camDir, lightshow }) {
    this.targets = targets;
    this.projectiles = projectiles;
    this.effects = effects;
    this.audio = audio;
    this.ui = ui;
    this.input = input;
    this.debris = debris;
    this.camDir = camDir;
    this.lightshow = lightshow;

    this.state = 'TITLE';
    this.stateTime = 0;
    this.score = 0;
    this.timeLeft = CONFIG.playTime;
    this.combo = 0;
    this.fever = false;
    this._countdownStep = -1;
    this._fireworkTimer = 0;
    this._finaleWord = 0;
    this._tmpVec = new THREE.Vector3();

    // --- 入力の配線 ---
    input.onFire = (point, assistTarget) => {
      this.projectiles.fire(point, assistTarget);
      this.audio.shoot();
    };

    projectiles.onHit = (target, point) => this.handleHit(target, point);

    // タイトル画面: どこをタップしてもスタート(iOSオーディオアンロックを兼ねる)
    document.addEventListener('pointerdown', (e) => {
      if (e.target === this.ui.muteBtn) return;
      this.audio.unlock();
      if (this.state === 'TITLE') this.enterCountdown();
    });

    this.ui.retryBtn.addEventListener('click', () => {
      if (this.state === 'RESULT') {
        this.ui.hideResult();
        this.effects.setConfetti(false);
        this.enterCountdown();
      }
    });

    this.ui.muteBtn.addEventListener('click', () => {
      this.ui.setMuted(this.audio.toggleMute());
    });

    this.ui.onStarLit = () => this.audio.bonus();

    this.ui.showTitle(true);
  }

  setState(s) {
    this.state = s;
    this.stateTime = 0;
  }

  enterCountdown() {
    this.ui.showTitle(false);
    this.ui.hideResult();
    this.ui.showHud(true);
    this.ui.setScore(0);
    this.ui.setTime(CONFIG.playTime);
    this.ui.setFever(false);
    this.score = 0;
    this.combo = 0;
    this.fever = false;
    this.timeLeft = CONFIG.playTime;
    this.targets.reset();
    this.projectiles.clear();
    this.audio.setFever(false);
    this.effects.setConfetti(false);
    if (this.debris) this.debris.clear();
    if (this.camDir) this.camDir.setShot('sweep');
    if (this.lightshow) this.lightshow.setFever(false);
    this._countdownStep = -1;
    this.setState('COUNTDOWN');
  }

  enterPlaying() {
    this.ui.hideCountdown();
    this.input.enabled = true;
    this.audio.startBgm();
    if (this.camDir) this.camDir.setShot('play');
    if (this.lightshow) this.lightshow.setPlaying(true);
    this.setState('PLAYING');
  }

  enterFinale() {
    this.input.enabled = false;
    this.audio.stopBgm();
    this.audio.fanfare();
    this.ui.setFever(false);
    // 夕焼けは維持したまま(花火が映える)、ズームだけ戻して見上げる
    if (this.camDir) {
      this.camDir.setFever(false);
      this.camDir.setShot('finale');
    }
    this.ui.showFinale(true);
    this.ui.setFinaleText(FINALE_WORDS[0]);
    this.effects.setConfetti(true);
    this._fireworkTimer = 0;
    this._finaleWord = 0;
    this.setState('FINALE');
  }

  enterResult() {
    this.ui.showFinale(false);
    const stars = this.score >= 3500 ? 3 : this.score >= 1500 ? 2 : 1;
    this.ui.showResult(this.score, stars);
    this.setState('RESULT');
  }

  handleHit(target, point) {
    const gain = target.score * (this.fever ? 2 : 1);
    this.score += gain;
    this.combo += 1;
    this.ui.setScore(this.score);
    this.audio.hit(this.combo);

    const isStar = target.type === 'star';
    this.effects.flash(point, isStar ? 0xffd24d : 0xffffff, isStar ? 7 : 3.5);
    // 光の粒(burst)+物理破片(debris)の二層
    this.effects.burst(point, target.burstColor, {
      count: isStar ? 24 : 10,
      speed: isStar ? 7 : 4.5,
      size: isStar ? 1.4 : 1,
      life: isStar ? 1.2 : 0.8,
      rainbow: isStar,
    });
    if (this.debris) this.debris.spawnFor(target, point);
    if (this.camDir) this.camDir.shake(isStar ? CONFIG.camera.starShake : CONFIG.camera.hitShake);
    this.effects.popup(point, gain);
    if (isStar) {
      this.audio.bonus();
      this._tmpVec.copy(point).y += 1.4;
      this.effects.popup(this._tmpVec, 'bonus');
    }
  }

  update(t, dt) {
    this.stateTime += dt;

    switch (this.state) {
      case 'COUNTDOWN': {
        // 3 → 2 → 1 → すたーと!
        const step = Math.floor(this.stateTime);
        if (step !== this._countdownStep) {
          this._countdownStep = step;
          if (step < 3) {
            this.ui.showCountdown(String(3 - step));
            this.audio.countdown(false);
          } else {
            this.ui.showCountdown('すたーと!', true);
            this.audio.countdown(true);
          }
        }
        if (this.stateTime >= 3.8) this.enterPlaying();
        break;
      }

      case 'PLAYING': {
        this.timeLeft -= dt;
        this.ui.setTime(this.timeLeft);
        if (!this.fever && this.timeLeft <= CONFIG.feverTime) {
          this.fever = true;
          this.targets.setFever(true);
          this.audio.setFever(true);
          this.ui.setFever(true);
          this.effects.flash(new THREE.Vector3(0, 4, 0), 0xfff35e, 12);
          if (this.lightshow) this.lightshow.setFever(true); // 夕焼けへ
          if (this.camDir) this.camDir.setFever(true);
        }
        if (this.timeLeft <= 0) this.enterFinale();
        break;
      }

      case 'FINALE': {
        // 花火を連発しながら大絶賛
        this._fireworkTimer -= dt;
        if (this._fireworkTimer <= 0) {
          this._fireworkTimer = 0.45;
          this.effects.firework();
          this.audio.pop();
        }
        const word = Math.floor(this.stateTime / 1.4) % FINALE_WORDS.length;
        if (word !== this._finaleWord) {
          this._finaleWord = word;
          this.ui.setFinaleText(FINALE_WORDS[word]);
        }
        if (this.stateTime >= CONFIG.finaleDuration) this.enterResult();
        break;
      }

      case 'RESULT': {
        // 余韻の花火をぽつぽつ
        this._fireworkTimer -= dt;
        if (this._fireworkTimer <= 0) {
          this._fireworkTimer = 1.6;
          this.effects.firework();
          this.audio.pop();
        }
        break;
      }
    }
  }

  get playing() { return this.state === 'PLAYING'; }
}
