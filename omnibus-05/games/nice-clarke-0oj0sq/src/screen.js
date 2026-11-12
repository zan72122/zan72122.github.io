// The register's monitor and the customer pole display.
// Nothing to read: pictures of what you scanned, and numbers that grow.
import { drawIcon } from './icons.js';
import { drawSeg } from './textures.js';
import { clamp, easeOutBack } from './util.js';

const W = 512;
const H = 384;

function fmt(n) {
  return Math.round(n).toLocaleString('ja-JP');
}

export class PosScreen {
  constructor(checkout) {
    this.co = checkout;
    this.g = checkout.screenCtx;
    this.tex = checkout.screenTex;
    this.vg = checkout.vfdCanvas.getContext('2d');
    this.vtex = checkout.vfdTex;
    this.mode = 'off';
    this.t = 0;
    this.modeT = 0;
    this.rows = [];
    this.total = 0;
    this.shown = 0;
    this.count = 0;
    this.err = 0;
    this.errKind = '';
    this.hero = null; // big icon of the latest item
    this.heroT = 0;
    this.weight = 0;
    this.dirty = true;
    this.drawOff();
    this.drawVfd();
  }

  setMode(m) {
    this.mode = m;
    this.modeT = 0;
    this.dirty = true;
  }

  boot() {
    this.setMode('boot');
  }

  addItem(p) {
    this.rows.push({ icon: p.icon, price: p.price, t: 0 });
    if (this.rows.length > 60) this.rows.shift();
    this.total += p.price;
    this.count++;
    this.hero = p.icon;
    this.heroT = 0;
    this.err = 0;
    this.dirty = true;
  }

  error(kind) {
    this.err = 1;
    this.errKind = kind;
    this.dirty = true;
  }

  showWeight(kg) {
    this.weight = kg;
    this.dirty = true;
  }

  update(dt) {
    this.t += dt;
    this.modeT += dt;
    this.heroT += dt;
    this.err = Math.max(0, this.err - dt * 0.8);
    for (const r of this.rows) r.t += dt;
    const before = this.shown;
    if (this.shown < this.total) {
      this.shown = Math.min(this.total, this.shown + Math.max(3, (this.total - this.shown) * dt * 7));
    }
    const animating = this.mode === 'boot' || this.mode === 'total' || this.mode === 'paid' || this.shown !== before || this.heroT < 0.8 || this.err > 0 || this.rows.some((r) => r.t < 0.6);
    if (this.mode === 'off') return;
    if (animating || this.dirty) {
      this.dirty = false;
      this.draw();
      this.tex.needsUpdate = true;
      this.drawVfd();
    }
  }

  drawOff() {
    const g = this.g;
    g.fillStyle = '#050608';
    g.fillRect(0, 0, W, H);
    const gr = g.createLinearGradient(0, 0, W, H);
    gr.addColorStop(0, 'rgba(255,255,255,0.05)');
    gr.addColorStop(0.5, 'rgba(255,255,255,0)');
    g.fillStyle = gr;
    g.fillRect(0, 0, W, H);
    this.tex.needsUpdate = true;
  }

  draw() {
    const g = this.g;
    if (this.mode === 'boot') return this.drawBoot();
    if (this.mode === 'total' || this.mode === 'paid') return this.drawTotal();
    // background
    g.fillStyle = '#fbf7ee';
    g.fillRect(0, 0, W, H);
    // header band
    g.fillStyle = '#d9573e';
    g.fillRect(0, 0, W, 46);
    drawIcon(g, 'basket', 10, 4, 38);
    // night: a little moon and a clock-ish row of dots
    g.fillStyle = '#ffe9a8';
    g.beginPath();
    g.arc(W - 30, 23, 12, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#d9573e';
    g.beginPath();
    g.arc(W - 24, 18, 11, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = 'rgba(255,255,255,0.85)';
    g.font = 'bold 22px system-ui, sans-serif';
    g.textAlign = 'right';
    g.textBaseline = 'middle';
    g.fillText('21:47', W - 52, 24);
    // list
    const listX = 10;
    const listW = 300;
    const rowH = 42;
    const top = 56;
    const maxRows = 6;
    g.fillStyle = '#ffffff';
    g.fillRect(listX, top, listW, rowH * maxRows + 6);
    g.strokeStyle = '#e6dccb';
    g.lineWidth = 2;
    g.strokeRect(listX, top, listW, rowH * maxRows + 6);
    const vis = this.rows.slice(-maxRows);
    vis.forEach((r, i) => {
      const slide = clamp(1 - r.t / 0.25, 0, 1);
      const y = top + 3 + i * rowH + slide * rowH;
      if (i === vis.length - 1) {
        g.fillStyle = `rgba(255,211,74,${0.25 + 0.5 * Math.max(0, 1 - r.t / 1.2)})`;
        g.fillRect(listX + 2, y, listW - 4, rowH - 2);
      } else if (i % 2) {
        g.fillStyle = '#f7f2e8';
        g.fillRect(listX + 2, y, listW - 4, rowH - 2);
      }
      drawIcon(g, r.icon, listX + 8, y + 3, rowH - 6);
      g.fillStyle = '#c9bca6';
      for (let d = 60; d < 180; d += 9) g.fillRect(listX + d, y + rowH / 2, 3, 3);
      g.fillStyle = '#3a2a22';
      g.font = 'bold 26px system-ui, sans-serif';
      g.textAlign = 'right';
      g.fillText('¥' + fmt(r.price), listX + listW - 10, y + rowH / 2 + 1);
    });
    // hero panel: the newest thing, bouncing in
    const hx = 322;
    const hw = W - hx - 10;
    g.fillStyle = this.err > 0 ? `rgba(255,${150 - 60 * this.err},40,1)` : '#fff3d6';
    g.fillRect(hx, top, hw, 190);
    if (this.err > 0) {
      const s = 120 + Math.sin(this.t * 30) * 6 * this.err;
      drawIcon(g, this.errKind === 'sticker' ? 'watermelon' : 'chips', hx + (hw - s) / 2, top + 20, s);
      g.strokeStyle = '#ffffff';
      g.lineWidth = 10;
      g.beginPath();
      for (let x = 0; x <= hw - 30; x += 6) g.lineTo(hx + 15 + x, top + 160 + Math.sin(x * 0.2 + this.t * 20) * 6);
      g.stroke();
    } else if (this.weight > 0) {
      drawIcon(g, 'watermelon', hx + 30, top + 10, 120);
      g.fillStyle = '#3a2a22';
      g.font = 'bold 30px system-ui, sans-serif';
      g.textAlign = 'center';
      g.fillText(this.weight.toFixed(2) + ' kg', hx + hw / 2, top + 165);
    } else if (this.hero) {
      const k = clamp(this.heroT / 0.5, 0, 1);
      const s = 130 * easeOutBack(k, 2.2);
      drawIcon(g, this.hero, hx + (hw - s) / 2, top + 10 + (130 - s) / 2, s);
      // count badge
      g.fillStyle = '#d9573e';
      g.beginPath();
      g.arc(hx + hw - 26, top + 162, 22, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = '#fff';
      g.font = 'bold 24px system-ui, sans-serif';
      g.textAlign = 'center';
      g.fillText(String(this.count), hx + hw - 26, top + 163);
    }
    // total band
    g.fillStyle = '#2a2d33';
    g.fillRect(0, H - 104, W, 104);
    g.fillStyle = '#ffd34a';
    g.font = 'bold 76px system-ui, sans-serif';
    g.textAlign = 'right';
    g.textBaseline = 'middle';
    const pulse = this.shown < this.total ? 1.04 : 1;
    g.save();
    g.translate(W - 18, H - 50);
    g.scale(pulse, pulse);
    g.fillText('¥' + fmt(this.shown), 0, 0);
    g.restore();
    drawIcon(g, 'basket', 14, H - 86, 66);
    if (this.err > 0) {
      g.strokeStyle = `rgba(255,140,40,${this.err})`;
      g.lineWidth = 14;
      g.strokeRect(7, 7, W - 14, H - 14);
    }
  }

  drawBoot() {
    const g = this.g;
    const t = this.modeT;
    g.fillStyle = '#050608';
    g.fillRect(0, 0, W, H);
    if (t < 0.6) {
      const y = (t / 0.6) * H;
      g.fillStyle = '#ff3a2a';
      g.fillRect(0, y - 2, W, 4);
      g.fillStyle = 'rgba(255,60,40,0.2)';
      g.fillRect(0, y - 20, W, 40);
    } else {
      const k = clamp((t - 0.6) / 0.6, 0, 1);
      g.globalAlpha = k;
      g.fillStyle = '#d9573e';
      g.beginPath();
      g.arc(W / 2, H / 2 - 10, 80 * easeOutBack(k), 0, Math.PI * 2);
      g.fill();
      drawIcon(g, 'basket', W / 2 - 55, H / 2 - 65, 110);
      g.globalAlpha = 1;
      g.strokeStyle = '#ffd34a';
      g.lineWidth = 6;
      g.beginPath();
      g.arc(W / 2, H / 2 - 10, 96, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * clamp((t - 0.8) / 1.0, 0, 1));
      g.stroke();
    }
    if (t > 2.2) this.setMode('main');
  }

  drawTotal() {
    const g = this.g;
    const t = this.modeT;
    const paid = this.mode === 'paid';
    g.fillStyle = paid ? '#1f9a55' : '#d9573e';
    g.fillRect(0, 0, W, H);
    // rays
    g.save();
    g.translate(W / 2, H / 2);
    g.rotate(t * 0.3);
    g.fillStyle = 'rgba(255,255,255,0.1)';
    for (let i = 0; i < 12; i++) {
      g.rotate((Math.PI * 2) / 12);
      g.beginPath();
      g.moveTo(0, 0);
      g.lineTo(W, -60);
      g.lineTo(W, 60);
      g.fill();
    }
    g.restore();
    const k = easeOutBack(clamp(t / 0.6, 0, 1), 2);
    g.save();
    g.translate(W / 2, H / 2 + 50);
    g.scale(k, k);
    g.fillStyle = '#ffffff';
    g.font = 'bold 92px system-ui, sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText('¥' + fmt(this.total), 0, 0);
    g.restore();
    drawIcon(g, paid ? 'star' : 'basket', W / 2 - 60, 28, 120);
    // twinkles
    for (let i = 0; i < 10; i++) {
      const a = i * 0.63 + t;
      const x = W / 2 + Math.cos(a * 1.3) * 210;
      const y = H / 2 + Math.sin(a) * 150;
      const s = 6 + 5 * Math.sin(t * 5 + i);
      g.fillStyle = '#ffd34a';
      g.beginPath();
      for (let j = 0; j < 8; j++) {
        const r = j % 2 ? s * 0.35 : s;
        const ang = (j / 8) * Math.PI * 2;
        g.lineTo(x + Math.cos(ang) * r, y + Math.sin(ang) * r);
      }
      g.fill();
    }
  }

  drawVfd() {
    const g = this.vg;
    g.fillStyle = '#031208';
    g.fillRect(0, 0, 256, 64);
    if (this.mode === 'off') {
      this.vtex.needsUpdate = true;
      return;
    }
    const s = String(Math.round(this.shown)).padStart(7, ' ');
    for (let i = 0; i < 7; i++) drawSeg(g, s[i], 30 + i * 31, 10, 24, 44, '#46ffb0', '#0a2a18');
    this.vtex.needsUpdate = true;
  }
}
