// WebAudio による合成効果音(外部ファイル不要)
export class Sfx {
  constructor() { this.ctx = null; this.muted = false; this.last = {}; this.bgmOn = false; }
  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      this.master = this.ctx.createGain(); this.master.gain.value = 0.9; this.master.connect(this.ctx.destination);
      const len = this.ctx.sampleRate * 1.5;
      this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const d = this.noiseBuf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      this.startBgm();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : 0.9; }
  throttle(key, ms) { const t = performance.now(); if (this.last[key] && t - this.last[key] < ms) return false; this.last[key] = t; return true; }
  noise(dur, freq, q, gain, type = 'bandpass') {
    if (!this.ctx) return;
    const s = this.ctx.createBufferSource(); s.buffer = this.noiseBuf;
    s.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = this.ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = this.ctx.createGain(); const t = this.ctx.currentTime;
    g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f).connect(g).connect(this.master); s.start(t); s.stop(t + dur + 0.05);
  }
  tone(freq, dur, gain, type = 'sine', slide = 0, delay = 0) {
    if (!this.ctx) return;
    const o = this.ctx.createOscillator(); o.type = type;
    const t = this.ctx.currentTime + delay;
    o.frequency.setValueAtTime(freq, t); if (slide) o.frequency.exponentialRampToValueAtTime(freq * slide, t + dur);
    const g = this.ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(this.master); o.start(t); o.stop(t + dur + 0.05);
  }
  rub() { if (this.throttle('rub', 140)) this.noise(0.16, 900 + Math.random() * 400, 0.8, 0.05, 'lowpass'); }
  step() { if (this.throttle('step', 260)) this.noise(0.07, 250, 2, 0.12); }
  bumpWall() { if (this.throttle('bump', 300)) { this.noise(0.12, 180, 1.2, 0.25, 'lowpass'); this.tone(110, 0.15, 0.12, 'triangle', 0.6); } }
  bumpRail() { if (this.throttle('bump', 300)) { this.tone(1750, 0.35, 0.06, 'sine', 0.98); this.tone(2640, 0.2, 0.03, 'sine'); this.noise(0.05, 3000, 1, 0.05); } }
  hmm() { if (this.throttle('hmm', 1200)) { this.tone(230, 0.22, 0.12, 'triangle', 0.85); this.tone(190, 0.28, 0.1, 'triangle', 0.9, 0.24); } }
  ok() { this.tone(330, 0.12, 0.1, 'triangle', 1.2); this.tone(440, 0.18, 0.1, 'triangle', 1.1, 0.12); }
  pose() { this.noise(0.25, 700, 0.7, 0.08, 'lowpass'); this.tone(260, 0.1, 0.05, 'triangle', 1.3); }
  success() {
    [523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.35, 0.12, 'triangle', 1, i * 0.11));
    this.tone(1568, 0.6, 0.06, 'sine', 1, 0.5);
    this.noise(0.4, 4000, 0.5, 0.05, 'highpass');
  }
  startBgm() {
    // 薄い BGM: ゆったりした2音のハミング風
    const notes = [262, 330, 392, 330, 294, 349, 440, 349];
    let i = 0;
    const tick = () => {
      if (!this.ctx) return;
      if (!this.muted) {
        const f = notes[i % notes.length]; i++;
        this.tone(f, 0.9, 0.018, 'sine');
        this.tone(f / 2, 1.2, 0.012, 'triangle');
      }
      this.bgmTimer = setTimeout(tick, 1000);
    };
    tick();
  }
}
