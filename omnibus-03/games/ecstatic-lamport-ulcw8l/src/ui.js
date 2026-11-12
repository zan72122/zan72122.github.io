/**
 * ui.js — タイトル / スポット選択 / ダイバー選択 / 結果 / ポーズ。
 */

import { SPOTS, CHARACTERS, RUN } from './config.js';
import { totalStars } from './save.js';

const $ = (id) => document.getElementById(id);
const SCREENS = ['title', 'spots', 'shop', 'howto', 'runResult', 'pause'];

function starStr(n, total = 3) {
  let s = '';
  for (let i = 0; i < total; i++) s += i < n ? '★' : `<span class="off">★</span>`;
  return s;
}

export class UI {
  constructor(state, cb) {
    this.state = state;   // セーブデータ(参照を共有)
    this.cb = cb;
    this._bind();
  }

  _bind() {
    $('btnPlay').onclick = () => { this.cb.sfx(); this.cb.play(this.state.lastSpot || 'dock'); };
    $('btnSpots').onclick = () => { this.cb.sfx(); this.openSpots(); };
    $('btnShop').onclick = () => { this.cb.sfx(); this.openShop(); };
    $('btnHowto').onclick = () => { this.cb.sfx(); this.show('howto'); };
    for (const b of document.querySelectorAll('[data-close]')) {
      b.onclick = () => { this.cb.sfx(); this.hide(b.dataset.close); if (!this.cb.inGame()) this.show('title'); };
    }
    $('btnRetry').onclick = () => { this.cb.sfx(); this.hide('runResult'); this.cb.play(this.state.lastSpot); };
    $('btnNextSpot').onclick = () => { this.cb.sfx(); this.hide('runResult'); this.openSpots(); };
    $('btnHome').onclick = () => { this.cb.sfx(); this.hide('runResult'); this.cb.home(); this.show('title'); };
    $('btnResume').onclick = () => { this.cb.sfx(); this.hide('pause'); this.cb.resume(); };
    $('btnQuit').onclick = () => { this.cb.sfx(); this.hide('pause'); this.cb.home(); this.show('title'); };
    $('btnGhost').onclick = () => {
      this.cb.sfx();
      this.state.ghostOn = !this.state.ghostOn;
      $('btnGhost').innerHTML = `ゴースト: ${this.state.ghostOn ? 'ON' : 'OFF'}<small>GHOST</small>`;
      this.cb.saveNow();
    };
  }

  show(name) { $(name).classList.remove('hidden'); if (name === 'title') this.refreshTitle(); }
  hide(name) { $(name).classList.add('hidden'); }
  hideAll() { for (const s of SCREENS) this.hide(s); }
  isOpen() { return SCREENS.some((s) => !$(s).classList.contains('hidden')); }

  refreshTitle() {
    $('tCoins').textContent = `${Math.round(this.state.coins).toLocaleString()} コイン`;
    $('tStars').textContent = `★ ${totalStars(this.state)}`;
    $('tDives').textContent = `${this.state.totalDives} ダイブ`;
    $('btnGhost').innerHTML = `ゴースト: ${this.state.ghostOn === false ? 'OFF' : 'ON'}<small>GHOST</small>`;
  }

  // ---------------- スポット ----------------
  openSpots() {
    if (this.cb.syncUnlocks) this.cb.syncUnlocks();
    const stars = totalStars(this.state);
    const list = $('spotList');
    list.innerHTML = '';
    for (const s of SPOTS) {
      const owned = this.state.ownedSpots.includes(s.id);
      const gated = stars < s.starsToUnlock;
      const affordable = this.state.coins >= s.cost;
      const got = this.state.stars[s.id] || 0;
      const best = this.state.best[s.id] || 0;
      const locked = !owned && (gated || !affordable);

      const card = document.createElement('button');
      card.className = 'card' + (locked ? ' lock' : '') + (this.state.lastSpot === s.id ? ' sel' : '');
      card.innerHTML = `
        <div class="en">${s.en}</div>
        <h3>${s.name}</h3>
        <div class="meta">
          <span class="tag h">高さ ${s.height} m</span>
          ${s.wind ? `<span class="tag">風 ${s.wind.toFixed(1)}</span>` : ''}
          ${s.wallKick ? `<span class="tag">壁蹴り可</span>` : ''}
        </div>
        <p>${s.desc}</p>
        <div class="meta">
          <span class="stars">${starStr(got)}</span>
          ${best ? `<span class="best">ベスト ${best.toLocaleString()}</span>` : ''}
        </div>
        <div class="meta">${
          owned ? `<span class="tag own">解放済み</span>`
          : gated ? `<span class="tag">★${s.starsToUnlock} で解放</span>`
          : `<span class="tag buy">${s.cost.toLocaleString()} コインで購入</span>`}</div>`;
      card.onclick = () => {
        if (owned) { this.cb.sfx(); this.hide('spots'); this.cb.play(s.id); return; }
        if (gated) { this.cb.sfx(); return; }
        if (!affordable) { this.cb.sfx(); return; }
        this.cb.buySpot(s);
        this.openSpots();
      };
      list.appendChild(card);
    }
    this.show('spots');
  }

  // ---------------- ダイバー ----------------
  openShop() {
    $('shopCoins').textContent = Math.round(this.state.coins).toLocaleString();
    const list = $('charList');
    list.innerHTML = '';
    const stat = (label, v) => {
      const pct = Math.max(4, Math.min(100, v * 50));
      const col = v >= 1.2 ? '#4fe08a' : v <= 0.85 ? '#ff7a3d' : '#3fe0ff';
      return `<span class="tag" style="color:${col}">${label} ${v.toFixed(2)}</span>`;
    };
    for (const c of CHARACTERS) {
      const owned = this.state.owned.includes(c.id);
      const sel = this.state.character === c.id;
      const afford = this.state.coins >= c.cost;
      const card = document.createElement('button');
      card.className = 'card' + (sel ? ' sel' : '') + (!owned && !afford ? ' lock' : '');
      card.innerHTML = `
        <div class="en">${c.en}</div>
        <h3>${c.name}</h3>
        <p>${c.desc}</p>
        <div class="meta">
          ${stat('跳躍', c.power)}${stat('回転', c.spin)}${stat('慣性', 2 - c.inertia)}
          ${c.coinMult > 1 ? `<span class="tag" style="color:#ffcf34">コイン ×${c.coinMult}</span>` : ''}
          ${c.gravityMult ? `<span class="tag" style="color:#ff5fa8">重力 ×${c.gravityMult}</span>` : ''}
        </div>
        <div class="meta">${
          owned ? (sel ? `<span class="tag own">使用中</span>` : `<span class="tag">選択する</span>`)
          : `<span class="tag buy">${c.cost.toLocaleString()} コイン</span>`}</div>`;
      card.onclick = () => {
        if (owned) { this.cb.sfx(); this.cb.selectChar(c.id); this.openShop(); return; }
        if (!afford) { this.cb.sfx(); return; }
        this.cb.buyChar(c);
        this.openShop();
      };
      list.appendChild(card);
    }
    this.show('shop');
  }

  // ---------------- ラン結果 ----------------
  showResult({ spot, run, earnedStars, prevStars, coins, isBest, unlocks }) {
    $('resStars').innerHTML = starStr(earnedStars);
    $('resTotal').textContent = Math.round(run.total).toLocaleString();
    $('resBest').textContent = isBest ? '自己ベスト更新!' :
      (this.state.best[spot.id] ? `ベスト ${this.state.best[spot.id].toLocaleString()}` : '');
    const rows = run.dives.map((d, i) => `
      <div class="res-row${i === RUN.bigOneIndex ? ' big' : ''}">
        <span class="n">${i + 1}</span>
        <span class="t">${d.trickName || '—'}</span>
        <span class="g" style="color:hsl(${d.grade.hue} 95% 65%)">${d.grade.label}</span>
        <span class="s">${d.total.toLocaleString()}</span>
      </div>`).join('');
    $('resList').innerHTML = rows;
    $('resCoins').textContent = Math.round(coins).toLocaleString();
    const un = $('resUnlock');
    if (unlocks && unlocks.length) { un.classList.remove('hidden'); un.innerHTML = unlocks.join('<br/>'); }
    else un.classList.add('hidden');
    const next = spot.thresholds[earnedStars];
    if (next) {
      $('resBest').innerHTML += `<br/><span style="color:#bfe9ff;opacity:.8">次の★まで あと ${Math.max(0, Math.round(next - run.total)).toLocaleString()}</span>`;
    }
    this.show('runResult');
  }
}
