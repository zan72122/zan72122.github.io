/**
 * hud.js — ゲーム中の DOM オーバーレイ。
 * 特に入水角ゲージは「一番むずかしい読み」を学習可能にするための中核 UI。
 */

import { SHAPES, ENTRY_GRADES, RUN } from './config.js';

const $ = (id) => document.getElementById(id);
const R = 100;

function arc(a) {
  const rad = (d) => (d * Math.PI) / 180;
  const x = (d) => R * Math.sin(rad(d));
  const y = (d) => -R * Math.cos(rad(d));
  const a1 = Math.min(90, a);
  return `M ${x(-a1).toFixed(2)} ${y(-a1).toFixed(2)} A ${R} ${R} 0 0 1 ${x(a1).toFixed(2)} ${y(a1).toFixed(2)}`;
}

export class Hud {
  constructor() {
    this.el = {
      hud: $('hud'), spotName: $('spotName'), pips: $('divePips'),
      runScore: $('runScore'), variety: $('varietyChip'), coins: $('coinCount').querySelector('b'),
      air: $('airPanel'), rotNum: $('rotNum'), shape: $('shapeChip'), pos: $('posChip'), live: $('liveScore'),
      hm: $('heightMeter'), hmFill: $('hmFill'), hmMark: $('hmMark'), hmText: $('hmText'),
      gauge: $('entryGauge'), needle: $('needle'), angle: $('entryAngle'), entryHint: $('entryHint'),
      charge: $('chargeBar'), cbFill: $('cbFill'),
      popups: $('popups'), banner: $('banner'),
      bGrade: $('bannerGrade'), bTrick: $('bannerTrick'), bScore: $('bannerScore'), bBreak: $('bannerBreak'),
      hint: $('controlHint'), tip: $('tutorTip'),
      mute: $('btnMute'), pause: $('btnPause'),
    };
    // 判定バンドを描画
    $('bandSloppy').setAttribute('d', arc(ENTRY_GRADES[3].maxAngle));
    $('bandOk').setAttribute('d', arc(ENTRY_GRADES[2].maxAngle));
    $('bandClean').setAttribute('d', arc(ENTRY_GRADES[1].maxAngle));
    $('bandRip').setAttribute('d', arc(ENTRY_GRADES[0].maxAngle));

    this._shownScore = 0;
    this._targetScore = 0;
    this._popId = 0;
  }

  show(on) { this.el.hud.classList.toggle('hidden', !on); }

  setSpot(name) { this.el.spotName.textContent = name; }

  setPips(diveIndex, done) {
    const n = RUN.dives;
    let html = '';
    for (let i = 0; i < n; i++) {
      const big = i === RUN.bigOneIndex ? ' big' : '';
      const cls = i < done ? ' done' : i === diveIndex ? ' now' : '';
      html += `<div class="pip${big}${cls}"></div>`;
    }
    this.el.pips.innerHTML = html;
  }

  setRunScore(v, instant = false) {
    this._targetScore = v;
    if (instant) { this._shownScore = v; this.el.runScore.textContent = Math.round(v).toLocaleString(); }
  }

  setVariety(m) {
    const on = m > 1.001;
    this.el.variety.classList.toggle('hidden', !on);
    if (on) this.el.variety.textContent = `VARIETY ×${m.toFixed(1)}`;
  }

  setCoins(c) { this.el.coins.textContent = Math.round(c).toLocaleString(); }

  showCharge(on) { this.el.charge.classList.toggle('hidden', !on); }
  setCharge(v) { this.el.cbFill.style.width = (v * 100).toFixed(1) + '%'; }

  showAir(on) {
    this.el.air.classList.toggle('hidden', !on);
    this.el.hm.classList.toggle('hidden', !on);
  }

  setAir(rotations, shapeKey, live, braking, posMult, held) {
    this.el.rotNum.textContent = rotations.toFixed(2);
    const s = SHAPES[shapeKey];
    this.el.shape.textContent = braking ? 'BRAKE' : s.label;
    this.el.shape.style.color = braking ? '#ff7a3d' : s.color;
    // 「保った姿勢」で確定している倍率。伸型で 1/4 回転耐えると跳ね上がる。
    let col = SHAPES.tuck.color;
    if (held && held.layout) col = SHAPES.layout.color;
    else if (held && held.pike) col = SHAPES.pike.color;
    this.el.pos.textContent = `POSITION ×${posMult.toFixed(2)}`;
    this.el.pos.style.color = col;
    this.el.live.textContent = '≈ ' + Math.round(live).toLocaleString();
  }

  setHeight(cur, max) {
    const f = Math.max(0, Math.min(1, cur / Math.max(1, max)));
    this.el.hmFill.style.height = (f * 100).toFixed(1) + '%';
    this.el.hmText.textContent = cur.toFixed(0) + ' m';
    this.el.hmMark.style.bottom = (f * 100).toFixed(1) + '%';
  }

  showEntryGauge(on) { this.el.gauge.classList.toggle('hidden', !on); this.el.gauge.classList.toggle('on', on); }

  setEntryGauge(signed, headFirst) {
    const a = Math.max(-92, Math.min(92, signed));
    this.el.needle.setAttribute('transform', `rotate(${a.toFixed(1)})`);
    const abs = Math.abs(signed);
    this.el.angle.textContent = abs.toFixed(0) + '°';
    let col = '#ff7a3d';
    if (abs <= ENTRY_GRADES[0].maxAngle) col = '#5ff0ff';
    else if (abs <= ENTRY_GRADES[1].maxAngle) col = '#4fe08a';
    else if (abs <= ENTRY_GRADES[2].maxAngle) col = '#ffd24a';
    this.el.angle.style.color = col;
    this.el.entryHint.textContent = headFirst ? 'HEAD FIRST' : 'FEET FIRST';
  }

  /** 画面上に一瞬出る加点表示 */
  popup(text, color = '#fff', xPct = 50, yPct = 46) {
    const d = document.createElement('div');
    d.className = 'pop';
    d.innerHTML = text;
    d.style.color = color;
    d.style.left = xPct + '%';
    d.style.top = yPct + '%';
    this.el.popups.appendChild(d);
    setTimeout(() => d.remove(), 1200);
  }

  banner(grade, trickName, score, chips) {
    const e = this.el;
    e.banner.classList.remove('hidden');
    e.bGrade.textContent = grade.label;
    e.bGrade.style.color = `hsl(${grade.hue} 95% 62%)`;
    e.bTrick.textContent = trickName;
    e.bScore.textContent = '+' + Math.round(score).toLocaleString();
    e.bBreak.innerHTML = chips.map((c, i) =>
      `<span style="animation-delay:${(0.24 + i * 0.06).toFixed(2)}s;color:${c.color || '#fff'}">${c.text}</span>`).join('');
    // 再アニメーション
    for (const n of [e.bGrade, e.bTrick, e.bScore]) { n.style.animation = 'none'; void n.offsetWidth; n.style.animation = ''; }
  }

  hideBanner() { this.el.banner.classList.add('hidden'); }

  tip(text) {
    if (!text) { this.el.tip.classList.add('hidden'); return; }
    this.el.tip.innerHTML = text;
    this.el.tip.classList.remove('hidden');
    this.el.tip.style.animation = 'none'; void this.el.tip.offsetWidth; this.el.tip.style.animation = '';
  }

  controlHint(on) { this.el.hint.classList.toggle('hidden', !on); this.el.hint.classList.toggle('on', on); }

  setMuted(m) { this.el.mute.classList.toggle('off', m); this.el.mute.textContent = m ? '✕' : '♪'; }

  /** スコアのカウントアップ */
  tick(dt) {
    if (Math.abs(this._targetScore - this._shownScore) < 0.5) {
      this._shownScore = this._targetScore;
    } else {
      this._shownScore += (this._targetScore - this._shownScore) * Math.min(1, dt * 9);
    }
    this.el.runScore.textContent = Math.round(this._shownScore).toLocaleString();
  }
}
