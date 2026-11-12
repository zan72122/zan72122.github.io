// audio.js — Web Audio による効果音とBGM(すべて実行時合成)
// 初回のユーザー操作(はじめるボタン)で init() を呼んで解錠する。

function midi(n) {
  return 440 * Math.pow(2, (n - 69) / 12);
}

class AudioSys {
  constructor() {
    this.ctx = null;
    this.bgmTimer = null;
  }

  init() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.5;
      this.master.connect(this.ctx.destination);
      this.sfx = this.ctx.createGain();
      this.sfx.gain.value = 1;
      this.sfx.connect(this.master);
      this.music = this.ctx.createGain();
      this.music.gain.value = 0.4;
      this.music.connect(this.master);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }

  tone({ type = 'square', f0, f1 = 0, at = 0, dur = 0.12, vol = 0.2, dest = null }) {
    if (!this.ctx) return;
    const t0 = this.ctx.currentTime + at;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f0, t0);
    if (f1 && f1 !== f0) o.frequency.exponentialRampToValueAtTime(f1, t0 + dur);
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g);
    g.connect(dest || this.sfx);
    o.start(t0);
    o.stop(t0 + dur + 0.02);
  }

  noise({ at = 0, dur = 0.12, vol = 0.2, freq = 1800 }) {
    if (!this.ctx) return;
    const t0 = this.ctx.currentTime + at;
    const len = Math.max(1, Math.floor(this.ctx.sampleRate * dur));
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    const flt = this.ctx.createBiquadFilter();
    flt.type = 'lowpass';
    flt.frequency.value = freq;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(flt);
    flt.connect(g);
    g.connect(this.sfx);
    src.start(t0);
  }

  coin() {
    this.tone({ f0: 988, dur: 0.07, vol: 0.15 });
    this.tone({ f0: 1319, at: 0.07, dur: 0.2, vol: 0.15 });
  }

  jump(chain) {
    this.tone({ f0: 240 + chain * 120, f1: 520 + chain * 260, dur: 0.18, vol: 0.13 });
  }

  stomp() {
    this.noise({ dur: 0.1, vol: 0.22, freq: 1200 });
    this.tone({ type: 'sine', f0: 190, f1: 55, dur: 0.16, vol: 0.3 });
  }

  hurt() {
    this.tone({ type: 'sawtooth', f0: 420, f1: 130, dur: 0.3, vol: 0.18 });
  }

  star() {
    const seq = [523, 659, 784, 1047, 1319];
    seq.forEach((f, i) => {
      this.tone({ f0: f, at: i * 0.09, dur: 0.16, vol: 0.16 });
      this.tone({ type: 'triangle', f0: f * 2, at: i * 0.09, dur: 0.16, vol: 0.08 });
    });
  }

  clearJingle() {
    const seq = [72, 76, 79, 84, 83, 84, 88];
    const dur = [0.14, 0.14, 0.14, 0.3, 0.14, 0.14, 0.7];
    let t = 0;
    seq.forEach((n, i) => {
      this.tone({ f0: midi(n), at: t, dur: dur[i] + 0.08, vol: 0.16 });
      this.tone({ type: 'triangle', f0: midi(n - 12), at: t, dur: dur[i] + 0.08, vol: 0.12 });
      t += dur[i];
    });
  }

  gameover() {
    const seq = [67, 63, 60, 55];
    seq.forEach((n, i) => {
      this.tone({ type: 'triangle', f0: midi(n), at: i * 0.32, dur: 0.4, vol: 0.18 });
    });
  }

  startBGM() {
    if (!this.ctx || this.bgmTimer) return;
    const STEP = 60 / 132 / 2; // 132BPM の8分音符
    // 明るいループ(MIDIノート番号、null=休符)
    const melody = [
      72, 76, 79, 76, 72, 76, 79, 81,
      79, 76, 72, 74, 76, 74, 72, 67,
      69, 72, 76, 72, 69, 72, 77, 76,
      74, 72, 71, 74, 72, null, 67, null,
    ];
    const bass = [48, 55, 52, 55, 53, 57, 55, 52, 45, 52, 50, 53, 48, 52, 43, 48];
    let step = 0;
    let nextT = this.ctx.currentTime + 0.1;
    const schedule = () => {
      while (nextT < this.ctx.currentTime + 0.3) {
        const m = melody[step % melody.length];
        if (m !== null) {
          this.tone({
            type: 'square', f0: midi(m),
            at: nextT - this.ctx.currentTime,
            dur: STEP * 0.9, vol: 0.06, dest: this.music,
          });
        }
        if (step % 2 === 0) {
          const b = bass[(step / 2) % bass.length];
          this.tone({
            type: 'triangle', f0: midi(b),
            at: nextT - this.ctx.currentTime,
            dur: STEP * 1.7, vol: 0.14, dest: this.music,
          });
        }
        if (step % 2 === 1) {
          this.noise({ at: nextT - this.ctx.currentTime, dur: 0.03, vol: 0.025, freq: 6000 });
        }
        nextT += STEP;
        step++;
      }
    };
    schedule();
    this.bgmTimer = setInterval(schedule, 120);
  }

  stopBGM() {
    if (this.bgmTimer) {
      clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
  }
}

export const audio = new AudioSys();
