// Wordless hints: a soft hand that shows "press", "hold" and "let go".
export class Hint {
  constructor(canvas) {
    this.c = canvas; this.g = canvas.getContext('2d');
    this.t = 0; this.show = 0; this.mode = null; this.a = null; this.b = null;
  }
  resize(w, h, dpr) {
    this.c.width = w * dpr; this.c.height = h * dpr; this.c.style.width = w + 'px'; this.c.style.height = h + 'px';
    this.dpr = dpr; this.w = w; this.h = h;
  }
  // mode: 'tap' (press + lift at a), 'drag' (press at a, move to b, lift), 'hold' (press and keep)
  set(mode, a, b) { this.mode = mode; this.a = a; this.b = b; }
  clear() { this.mode = null; }
  hand(x, y, s, alpha, pressed) {
    const g = this.g;
    g.save(); g.translate(x, y); g.scale(s, s); g.globalAlpha = alpha;
    g.shadowColor = 'rgba(0,0,0,0.25)'; g.shadowBlur = 10; g.shadowOffsetY = 3;
    g.fillStyle = '#ffffff';
    g.strokeStyle = 'rgba(60,60,60,0.35)'; g.lineWidth = 1.5;
    // fingertip at (0,0); hand extends down-right
    g.beginPath();
    g.moveTo(-6, 4);
    g.quadraticCurveTo(-6, -2, 0, -2);
    g.quadraticCurveTo(6, -2, 6, 4);
    g.lineTo(6, 26);
    g.quadraticCurveTo(12, 22, 16, 26); g.quadraticCurveTo(22, 22, 26, 28); g.quadraticCurveTo(32, 25, 34, 32);
    g.lineTo(34, 48);
    g.quadraticCurveTo(34, 64, 18, 66);
    g.lineTo(6, 66);
    g.quadraticCurveTo(-4, 64, -10, 52);
    g.lineTo(-18, 36);
    g.quadraticCurveTo(-20, 30, -14, 30);
    g.quadraticCurveTo(-10, 30, -6, 36);
    g.closePath();
    g.fill(); g.shadowBlur = 0; g.stroke();
    g.restore();
  }
  ring(x, y, r, alpha) {
    const g = this.g;
    g.save(); g.globalAlpha = alpha; g.strokeStyle = '#ffffff'; g.lineWidth = 4;
    g.shadowColor = 'rgba(0,0,0,0.25)'; g.shadowBlur = 6;
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.stroke(); g.restore();
  }
  draw(dt) {
    const g = this.g, d = this.dpr || 1;
    g.setTransform(d, 0, 0, d, 0, 0);
    g.clearRect(0, 0, this.w, this.h);
    this.show += ((this.mode ? 1 : 0) - this.show) * Math.min(1, dt * 4);
    if (this.show < 0.02 || !this.a) return;
    this.t += dt;
    const al = this.show;
    const cyc = 2.4, k = (this.t % cyc) / cyc;
    let x = this.a.x, y = this.a.y, pressed = false, ringR = 0, ringA = 0;
    if (this.mode === 'tap') {
      if (k < 0.3) { const e = k / 0.3; y -= (1 - e) * 30; }
      else if (k < 0.6) { pressed = true; ringR = 26 - (k - 0.3) / 0.3 * 8; ringA = 0.9; }
      else { const e = (k - 0.6) / 0.4; y -= e * 40; x += e * 10; ringR = 18 + e * 40; ringA = 0.9 * (1 - e); }
    } else if (this.mode === 'hold') {
      if (k < 0.25) { y -= (1 - k / 0.25) * 30; }
      else { pressed = true; ringR = 22 + Math.sin(this.t * 6) * 4; ringA = 0.8; }
    } else if (this.mode === 'drag' && this.b) {
      if (k < 0.2) { y -= (1 - k / 0.2) * 30; }
      else if (k < 0.75) { pressed = true; const e = (k - 0.2) / 0.55; const s = e * e * (3 - 2 * e); x += (this.b.x - x) * s; y += (this.b.y - y) * s; ringR = 20; ringA = 0.7; }
      else { const e = (k - 0.75) / 0.25; x = this.b.x; y = this.b.y - e * 35; ringR = 20 + e * 30; ringA = 0.7 * (1 - e); }
    }
    if (ringA > 0) this.ring(this.mode === 'drag' ? x : this.a.x, this.mode === 'drag' ? y : this.a.y, ringR, ringA * al);
    this.hand(x + 2, y + 6, pressed ? 0.95 : 1.0, 0.92 * al, pressed);
  }
}
