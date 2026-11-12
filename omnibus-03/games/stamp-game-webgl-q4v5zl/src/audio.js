// Tiny synthesised sound set (no audio assets). Unlocked on first pointer.
let ctx = null;
let master = null;

export function unlockAudio() {
  if (!ctx) {
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      master = ctx.createGain(); master.gain.value = 0.5; master.connect(ctx.destination);
    } catch (e) { ctx = null; }
  }
  if (ctx && ctx.state === 'suspended') ctx.resume();
}

function tone(freq, { type = 'sine', dur = 0.2, gain = 0.3, attack = 0.005, slide = 0, delay = 0 } = {}) {
  if (!ctx) return;
  const t0 = ctx.currentTime + delay;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t0);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t0 + dur);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(gain, t0 + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g); g.connect(master);
  o.start(t0); o.stop(t0 + dur + 0.05);
}

function noise({ dur = 0.08, gain = 0.2, lp = 1200, delay = 0 } = {}) {
  if (!ctx) return;
  const t0 = ctx.currentTime + delay;
  const len = Math.floor(ctx.sampleRate * dur);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const src = ctx.createBufferSource(); src.buffer = buf;
  const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = lp;
  const g = ctx.createGain(); g.gain.value = gain;
  src.connect(f); f.connect(g); g.connect(master);
  src.start(t0);
}

export const sfx = {
  pick() { tone(660, { dur: 0.12, gain: 0.18, slide: 220 }); tone(990, { dur: 0.16, gain: 0.10, delay: 0.05 }); },
  snap() { tone(520, { type: 'triangle', dur: 0.08, gain: 0.12 }); },
  press() { noise({ dur: 0.12, gain: 0.35, lp: 900 }); tone(110, { type: 'sine', dur: 0.22, gain: 0.5, slide: -60 }); },
  lift() { noise({ dur: 0.10, gain: 0.12, lp: 2400 }); },
  reveal() {
    [880, 1108, 1318, 1760].forEach((f, i) => tone(f, { dur: 0.35, gain: 0.14, delay: i * 0.07 }));
  },
  collect() { tone(740, { type: 'triangle', dur: 0.12, gain: 0.15, slide: 300 }); },
  slide() { noise({ dur: 0.18, gain: 0.08, lp: 1500 }); },
};
