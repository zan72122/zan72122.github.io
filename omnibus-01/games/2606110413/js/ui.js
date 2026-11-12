// DOM ベースの UI(ひらがな表記・巨大文字)

const $ = (id) => document.getElementById(id);

const PRAISES = ['すごいね!', 'とっても じょうず!', 'てんさいだね!'];

export class UI {
  constructor() {
    this.hud = $('hud');
    this.scoreValue = $('score-value');
    this.timeValue = $('time-value');
    this.feverBadge = $('hud-fever');
    this.titleScreen = $('title-screen');
    this.countdown = $('countdown');
    this.countdownNum = $('countdown-num');
    this.finale = $('finale');
    this.finaleText = $('finale-text');
    this.result = $('result');
    this.resultScore = $('result-score');
    this.resultPraise = $('result-praise');
    this.resultStars = Array.from(document.querySelectorAll('#result-stars .star'));
    this.retryBtn = $('retry-btn');
    this.muteBtn = $('mute-btn');
    this.debugHud = $('debug-hud');
    this._starTimers = [];
  }

  setScore(n) { this.scoreValue.textContent = String(n); }
  setTime(s) { this.timeValue.textContent = String(Math.max(0, Math.ceil(s))); }

  showHud(on) { this.hud.classList.toggle('hidden', !on); }
  showTitle(on) { this.titleScreen.classList.toggle('hidden', !on); }
  setFever(on) { this.feverBadge.classList.toggle('hidden', !on); }

  showCountdown(text, isGo = false) {
    this.countdown.classList.remove('hidden');
    this.countdownNum.textContent = text;
    this.countdownNum.classList.toggle('go', isGo);
    // アニメーションを再トリガー
    this.countdownNum.classList.remove('countdown-pop');
    void this.countdownNum.offsetWidth;
    this.countdownNum.classList.add('countdown-pop');
  }

  hideCountdown() { this.countdown.classList.add('hidden'); }

  showFinale(on) { this.finale.classList.toggle('hidden', !on); }
  setFinaleText(t) { this.finaleText.textContent = t; }

  showResult(score, stars) {
    this.result.classList.remove('hidden');
    this.resultScore.textContent = `${score} てん!`;
    this.resultPraise.textContent = PRAISES[Math.max(0, stars - 1)];
    this.resultStars.forEach((el) => el.classList.remove('lit'));
    this._starTimers.forEach(clearTimeout);
    this._starTimers = [];
    for (let i = 0; i < stars; i++) {
      this._starTimers.push(setTimeout(() => {
        this.resultStars[i].classList.add('lit');
        if (this.onStarLit) this.onStarLit(i);
      }, 500 + i * 450));
    }
  }

  hideResult() {
    this.result.classList.add('hidden');
    this._starTimers.forEach(clearTimeout);
    this._starTimers = [];
  }

  setMuted(muted) {
    this.muteBtn.textContent = muted ? '\u{1F507}' : '\u{1F50A}';
  }

  debug(text) {
    this.debugHud.classList.remove('hidden');
    this.debugHud.textContent = text;
  }
}
