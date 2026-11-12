// hud.js — DOMベースのHUDと画面遷移の表示制御
export const hud = {
  els: {},

  init(maxHp, totalStars) {
    this.els = {
      hud: document.getElementById('hud'),
      hearts: document.getElementById('hearts'),
      coins: document.getElementById('coin-count'),
      stars: document.getElementById('star-count'),
      title: document.getElementById('screen-title'),
      clear: document.getElementById('screen-clear'),
      over: document.getElementById('screen-over'),
      clearCoins: document.getElementById('clear-coins'),
      vignette: document.getElementById('vignette'),
      whiteout: document.getElementById('whiteout'),
      touchUi: document.getElementById('touch-ui'),
    };
    this.els.hearts.innerHTML = '';
    for (let i = 0; i < maxHp; i++) {
      const h = document.createElement('span');
      h.className = 'heart';
      h.textContent = '♥';
      this.els.hearts.appendChild(h);
    }
    this.totalStars = totalStars;
    this.setStars(0);
  },

  setHp(n) {
    const hearts = this.els.hearts.children;
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].classList.toggle('off', i >= n);
    }
  },

  setCoins(n) {
    this.els.coins.textContent = n;
  },

  setStars(n) {
    this.els.stars.textContent = `${n} / ${this.totalStars}`;
  },

  // 'title' | 'clear' | 'over' | 'play'
  showScreen(name) {
    this.els.title.classList.toggle('hidden', name !== 'title');
    this.els.clear.classList.toggle('hidden', name !== 'clear');
    this.els.over.classList.toggle('hidden', name !== 'over');
    const inPlay = name === 'play';
    this.els.hud.classList.toggle('hidden', !inPlay);
    this.els.touchUi.classList.toggle('inactive', !inPlay);
  },

  setClearStats(coins) {
    this.els.clearCoins.textContent = coins;
  },

  _flash(el) {
    el.classList.remove('show');
    void el.offsetWidth; // アニメーション再始動
    el.classList.add('show');
  },

  flashDamage() {
    this._flash(this.els.vignette);
  },

  flashWhite() {
    this._flash(this.els.whiteout);
  },
};
