// DOM 側の UI(HUD・バナー・タイマー・スコア表示)をまとめて管理する。
// 4歳児向けなので文字は最小限、アイコンと数字と音で伝える。

import { CONFIG } from './config.js';
import { teamScore } from './rules.js';

const $ = (id) => document.getElementById(id);

// ✂️ しまが まっぷたつ(W-04)のチーム色。文字は使わず、この2色と絵文字だけで伝える。
const TEAM_COLORS = ['#ff5c5c', '#5cb8ff'];
const TEAM_EMOJI = ['🔴', '🔵'];

export class UI {
  constructor() {
    this.hud = $('hud');
    this.roundPips = $('round-pips');
    this.playerStrip = $('player-strip');
    this.diceBtn = $('btn-dice');
    this.banner = $('banner');
    this.bannerInner = $('banner-inner');
    this.timerWrap = $('timer-wrap');
    this.timerBar = $('timer-bar');
    this.mgScore = $('mg-score');
    this.tapLayer = $('tap-layer');
    this.cards = new Map();
    // チーム制(W-04)。null のあいだは これまでどおり個人だけを出す。
    this.teams = null;
    this.teamChars = null;
  }

  /**
   * チーム分けを覚えて、プレイヤーストリップを2色で作り直す。
   * board.js の updatePlayer(c) の呼び出し(12か所)を変えずに合算を出すため、
   * チームの状態は ui が持つ。teams に null を渡すと個人表示へ戻る。
   * @param {number[][]|null} teams [[i,j],[k,l]] chars の index
   * @param {object[]} chars
   */
  setTeams(teams, chars) {
    this.teams = teams && teams.length ? teams : null;
    this.teamChars = this.teams ? chars : null;
    this.buildPlayerStrip(chars);
    chars.forEach((c) => this.updatePlayer(c));
  }

  // キャラ c が何チーム目か。チーム制でなければ -1。
  teamIndexOf(c) {
    if (!this.teams || !this.teamChars) return -1;
    const i = this.teamChars.indexOf(c);
    return this.teams.findIndex((t) => t.includes(i));
  }

  showHud(show = true) { this.hud.classList.toggle('hidden', !show); }

  buildRoundPips(rounds) {
    this.roundPips.innerHTML = '';
    for (let i = 0; i < rounds; i++) {
      const s = document.createElement('span');
      s.className = 'pip';
      s.textContent = '⭐';
      this.roundPips.appendChild(s);
    }
  }

  setRound(n) {
    [...this.roundPips.children].forEach((p, i) => p.classList.toggle('on', i < n));
  }

  buildPlayerStrip(chars) {
    this.playerStrip.innerHTML = '';
    this.cards.clear();
    // チーム制のときは 相棒どうしが となりに来るように ならべかえる
    const order = this.teams ? this.teams.flat().map((i) => chars[i]) : chars;
    order.forEach((c) => {
      const team = this.teamIndexOf(c);
      const card = document.createElement('div');
      card.className = 'pcard' + (c.isPlayer ? ' me' : '');
      card.innerHTML = `
        <div class="face" style="background:${c.def.ui}">${c.def.emoji}</div>
        <div class="counts">
          <span class="stars">⭐0</span>
          <span class="coins">🪙0</span>
        </div>
        ${team >= 0 ? '<div class="team-sum"></div>' : ''}`;
      if (team >= 0) {
        // css を足さずに すむよう、チーム色は インラインで乗せる
        card.style.boxShadow = `0 0 0 3px ${TEAM_COLORS[team]}`;
        card.style.borderRadius = '10px';
        const sum = card.querySelector('.team-sum');
        sum.style.cssText = 'font-size:11px;text-align:center;line-height:1.1;'
          + `color:${TEAM_COLORS[team]};font-weight:700;`;
      }
      this.playerStrip.appendChild(card);
      this.cards.set(c.def.id, card);
    });
  }

  updatePlayer(c) {
    const card = this.cards.get(c.def.id);
    if (!card) return;
    card.querySelector('.stars').textContent = `⭐${c.stars}`;
    card.querySelector('.coins').textContent = `🪙${c.coins}`;
    const team = this.teamIndexOf(c);
    if (team < 0) return;
    // 相棒のぶんも合わせた チームの合計(表示だけ。順位づけは個人のまま)。
    // 同じチームの2枚とも書きかえて、相棒のカードを ぽんと はねさせる
    // ── これが「いっしょだ!」の合図になる(設計書 4.8)。
    const totals = teamScore(this.teamChars, this.teams)[team];
    const label = `${TEAM_EMOJI[team]}⭐${totals.stars} 🪙${totals.coins}`;
    for (const i of this.teams[team]) {
      const mate = this.teamChars[i];
      const mateCard = this.cards.get(mate?.def?.id);
      const sum = mateCard?.querySelector('.team-sum');
      if (!sum) continue;
      sum.textContent = label;
      if (mate === c) continue;
      mateCard.style.transform = 'scale(1.08)';
      clearTimeout(mateCard._teamPop);
      mateCard._teamPop = setTimeout(() => { mateCard.style.transform = ''; }, 260);
    }
  }

  setActivePlayer(id) {
    this.cards.forEach((card, cid) => card.classList.toggle('active', cid === id));
  }

  showDice(show, face = '🎲') {
    this.diceBtn.classList.toggle('hidden', !show);
    this.diceBtn.querySelector('.dice-face').textContent = face;
  }

  // 大きな中央バナー。durationMs 後に自動で消える Promise を返す
  showBanner(html, durationMs = 1600) {
    this.bannerInner.innerHTML = html;
    this.banner.classList.remove('hidden', 'out');
    // ?turbo= のときだけ表示時間を縮める(既定の TURBO=1 では従来と同じ)。
    return new Promise((res) => {
      setTimeout(() => {
        this.banner.classList.add('out');
        setTimeout(() => {
          this.banner.classList.add('hidden');
          res();
        }, 300 / CONFIG.TURBO);
      }, durationMs / CONFIG.TURBO);
    });
  }

  showTimer(show) { this.timerWrap.classList.toggle('hidden', !show); }
  setTimer(ratio) { this.timerBar.style.width = `${Math.max(0, ratio * 100)}%`; }

  showScore(show) {
    this.mgScore.classList.toggle('hidden', !show);
    if (show) this.mgScore.textContent = '0';
  }
  setScore(n) {
    this.mgScore.textContent = String(n);
    this.mgScore.classList.remove('pop');
    void this.mgScore.offsetWidth; // アニメ再トリガー
    this.mgScore.classList.add('pop');
  }

  showTapLayer(show) { this.tapLayer.classList.toggle('hidden', !show); }

  setMinigameMode(on) { this.hud.classList.toggle('mg-mode', on); }

  // 画面座標に絵文字をぽんっと出す
  emojiBurst(x, y, emoji = '✨') {
    const el = document.createElement('div');
    el.className = 'fx-emoji';
    el.textContent = emoji;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    document.getElementById('app').appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }
}
