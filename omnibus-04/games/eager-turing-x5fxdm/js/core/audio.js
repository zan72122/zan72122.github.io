/**
 * audio.js — procedural sound for "ぷにぷにシールの宝物店"
 *
 * Every sound is synthesized at runtime with the Web Audio API: no assets,
 * no imports, no build step. All public methods are safe to call at any time.
 * Before unlock() (or when Web Audio is unavailable) they simply do nothing.
 *
 * Signal graph
 *   one-shot voices ──► sfxBus ───┐
 *   music voices ─────► musicBus ─┼─► master ─► soft high-shelf ─► compressor ─► destination
 *   reverb sends ─► reverbIn ─► HP/LP ─► convolver ─► reverbOut ──┘
 *   (musicBus also feeds the reverb post-fader, so music reverb follows the music level)
 *
 * Usage
 *   import { audio } from './core/audio.js';
 *   el.addEventListener('pointerdown', () => { audio.unlock(); audio.squish(); });
 *   // every frame: audio.setBrush(level, 'fur'); audio.setMusic(0.6, mood);
 *
 * Notes
 *   - One-shots take an optional options object; numbers are 0..1 unless stated.
 *   - Frequently spammed one-shots are rate limited internally (token buckets),
 *     and there is a global cap on concurrently sounding voices.
 *   - setBrush / setPour fade to silence by themselves if they stop being
 *     refreshed for ~0.3 s; setRain / setMusic hold their last level.
 */

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const START_PAD = 0.008;      // scheduling headroom for one-shots (s)
const MASTER_BASE = 0.85;     // master gain at volume 1
const MAX_VOICES = 48;        // global cap on concurrently sounding one-shots
const MAX_CHIMES = 8;         // chime polyphony (the oldest voice is stolen)
const TICK_MS = 50;           // background scheduler interval (ms)
const LOOKAHEAD = 0.3;        // music scheduling horizon (s)
const SMOOTH_TC = 0.06;       // time constant for continuous controllers (s)
const MUSIC_GAIN = 0.16;      // music bus gain at level 1 (quiet bed)
const WATCHDOG_MS = 320;      // brush/pour fade out when not refreshed
const IDLE_TEARDOWN_MS = 900; // persistent nodes are released after this idle time
const C4 = 261.6256;
const C5 = 523.2511;
const C6 = 1046.502;
const PENTA = [0, 2, 4, 7, 9]; // major pentatonic, semitones

// Continuous controller gains at level 1
const BRUSH_FUR = 1.3;
const BRUSH_SATIN = 1.2;
const POUR_GAIN = 0.52;
const RAIN_GAIN = 0.12;

// Music: chord cycle (pitch classes) and two-voice pad voicings (semitones from C4)
const CHORDS = [[0, 4, 7], [9, 0, 4], [5, 9, 0], [7, 11, 2]]; // C, Am, F, G
const PAD_VOICING = [[4, 7], [4, 9], [5, 9], [2, 7]];
const STEPS = [-2, -1, -1, -1, 0, 1, 1, 1, 2, -3, 3];
const RHYTHM = [2, 2, 2, 2, 3, 1.5];

// ---------------------------------------------------------------------------
// Small utilities
// ---------------------------------------------------------------------------
const noop = function () {};
const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const clamp01 = (v) => (v > 1 ? 1 : v > 0 ? v : 0); // NaN -> 0
const num = (v, d) => (typeof v === 'number' && isFinite(v) ? v : d);
const def = (v, d) => (v === undefined || v === null ? d : v);
const opt = (o) => (o && typeof o === 'object' ? o : {});
const rnd = (a, b) => a + Math.random() * (b - a);
const vary = (amt) => 1 + (Math.random() * 2 - 1) * amt;
const lerp = (a, b, t) => a + (b - a) * t;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const pitchOf = (p) => clamp(num(p, 1), 0.25, 4);
const smoothstep = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const nowMs = () => (typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now());

/** Frequency of a major-pentatonic scale degree above `base` (degree 0 = base). */
function pentaFreq(deg, base) {
  deg = Math.round(deg);
  const oct = Math.floor(deg / 5);
  return base * Math.pow(2, (PENTA[deg - oct * 5] + 12 * oct) / 12);
}
function pentaPc(deg) {
  const oct = Math.floor(deg / 5);
  return PENTA[deg - oct * 5];
}

// High pentatonic notes (C7..E8, ~2–5.3 kHz) used for glitter pings.
const SPARKLE_FREQS = [];
for (let d = 10; d <= 17; d++) SPARKLE_FREQS.push(pentaFreq(d, C5));

// ---------------------------------------------------------------------------
// Engine state
// ---------------------------------------------------------------------------
const S = {
  ctx: null, failed: false, unlocked: false, silentDone: false,
  master: null, sfx: null, musicBus: null, reverbIn: null,
  white: null, pink: null,
  masterVolume: 0.8,
  resumePending: false, resumeAt: 0, hiddenSuspended: false, visHooked: false,
  voiceEnds: [], buckets: {}, chimes: [], peelNext: 0,
  brush: null, pour: null, rain: null, wantRain: 0,
  music: { level: 0, mood: 0, moodTarget: 0, next: 0, deg: 5, count: 0, chord: 3 },
  musicCtl: {}, ticker: null, lastTick: 0,
};

// ---------------------------------------------------------------------------
// Context, buffers and master chain
// ---------------------------------------------------------------------------
function ensureContext() {
  if (S.ctx) return S.ctx;
  if (S.failed || typeof window === 'undefined') return null;
  let ctx = null;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) { S.failed = true; return null; }
    try { ctx = new AC({ latencyHint: 'interactive' }); } catch (e) { ctx = new AC(); }
    buildGraph(ctx);
    S.ctx = ctx;
    hookEvents(ctx);
    return ctx;
  } catch (e) {
    S.failed = true;
    try { if (ctx && ctx.close) ctx.close().catch(noop); } catch (e2) { /* ignore */ }
    return null;
  }
}

function buildGraph(ctx) {
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -10; // gentle safety net, not a loudness maximizer
  comp.knee.value = 10;
  comp.ratio.value = 2.5;
  comp.attack.value = 0.004;
  comp.release.value = 0.25;
  comp.connect(ctx.destination);

  // A soft high shelf keeps everything round (no sharp hiss).
  const shelf = biquad(ctx, 'highshelf', 7000);
  shelf.gain.value = -4;
  shelf.connect(comp);

  const master = gainNode(ctx, S.masterVolume * MASTER_BASE);
  master.connect(shelf);

  const sfx = gainNode(ctx, 1);
  sfx.connect(master);
  const musicBus = gainNode(ctx, 0);
  musicBus.connect(master);

  // Shared reverb: procedurally generated, soft, ~1.6 s stereo tail.
  const reverbIn = gainNode(ctx, 1);
  const hp = biquad(ctx, 'highpass', 220, 0.6);
  const lp = biquad(ctx, 'lowpass', 4800, 0.5);
  const conv = ctx.createConvolver();
  conv.buffer = makeImpulse(ctx, 1.6);
  const reverbOut = gainNode(ctx, 0.5);
  reverbIn.connect(hp); hp.connect(lp); lp.connect(conv); conv.connect(reverbOut); reverbOut.connect(master);
  const musicSend = gainNode(ctx, 0.45);
  musicBus.connect(musicSend); musicSend.connect(reverbIn);

  S.white = makeWhite(ctx, 2);
  S.pink = makePink(ctx, 2);
  S.master = master; S.sfx = sfx; S.musicBus = musicBus; S.reverbIn = reverbIn;
}

function gainNode(ctx, v) { const g = ctx.createGain(); g.gain.value = v; return g; }
function biquad(ctx, type, f, Q) {
  const b = ctx.createBiquadFilter();
  b.type = type;
  b.frequency.value = f;
  if (Q !== undefined) b.Q.value = Q;
  return b;
}

function makeWhite(ctx, secs) {
  const len = Math.floor(ctx.sampleRate * secs);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * 0.9;
  return buf;
}

/** Pink noise (Paul Kellet's filter), normalized, with a seamless loop point. */
function makePink(ctx, secs) {
  const len = Math.floor(ctx.sampleRate * secs);
  const xf = 512;
  const tmp = new Float32Array(len + xf);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0, peak = 1e-6;
  for (let i = 0; i < tmp.length; i++) {
    const w = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + w * 0.0555179; b1 = 0.99332 * b1 + w * 0.0750759;
    b2 = 0.969 * b2 + w * 0.153852; b3 = 0.8665 * b3 + w * 0.3104856;
    b4 = 0.55 * b4 + w * 0.5329522; b5 = -0.7616 * b5 - w * 0.016898;
    const p = b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362;
    b6 = w * 0.115926;
    tmp[i] = p;
  }
  // Crossfade the extra tail into the head so the loop wraps without a click.
  for (let i = 0; i < xf; i++) { const k = i / xf; tmp[i] = tmp[i] * k + tmp[len + i] * (1 - k); }
  for (let i = 0; i < len; i++) { const a = Math.abs(tmp[i]); if (a > peak) peak = a; }
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  const s = 0.9 / peak;
  for (let i = 0; i < len; i++) d[i] = tmp[i] * s;
  return buf;
}

/** Soft stereo impulse response: decaying noise that gets darker over time. */
function makeImpulse(ctx, secs) {
  const rate = ctx.sampleRate;
  const len = Math.floor(rate * secs);
  const pre = Math.floor(rate * 0.012);
  const buf = ctx.createBuffer(2, len, rate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    let y = 0;
    for (let i = 0; i < len; i++) {
      if (i < pre) { d[i] = 0; continue; }
      const x = (i - pre) / (len - pre);
      const env = Math.pow(1 - x, 2.6) * Math.min(1, x / 0.015);
      y += (Math.random() * 2 - 1 - y) * lerp(0.55, 0.08, x); // one-pole lowpass, closing
      d[i] = y * env;
    }
  }
  return buf;
}

function hookEvents(ctx) {
  try {
    ctx.onstatechange = function () { if (ctx.state === 'running') S.resumePending = false; };
  } catch (e) { /* ignore */ }
  if (!S.visHooked && typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('visibilitychange', onVisibility, false);
    S.visHooked = true;
  }
}

function onVisibility() {
  try {
    const ctx = S.ctx;
    if (!ctx) return;
    if (document.hidden) {
      S.hiddenSuspended = true;
      if (ctx.state === 'running' && ctx.suspend) {
        const p = ctx.suspend();
        if (p && p.catch) p.catch(noop);
      }
    } else {
      S.hiddenSuspended = false;
      if (S.unlocked) resumeCtx();
    }
  } catch (e) { /* ignore */ }
}

function resumeCtx() {
  const ctx = S.ctx;
  if (!ctx || ctx.state === 'running' || ctx.state === 'closed' || !ctx.resume) return;
  try {
    S.resumePending = true;
    S.resumeAt = nowMs();
    const p = ctx.resume();
    if (p && typeof p.then === 'function') {
      p.then(function () { S.resumePending = false; }, function () { S.resumePending = false; });
    }
  } catch (e) { S.resumePending = false; }
}

/** iOS: a 1-sample silent buffer played inside a gesture unlocks output. */
function playSilent(ctx) {
  try {
    const b = ctx.createBuffer(1, 1, 22050);
    const s = ctx.createBufferSource();
    s.buffer = b;
    s.connect(ctx.destination);
    s.onended = function () { try { s.disconnect(); } catch (e) { /* ignore */ } };
    s.start(0);
  } catch (e) { /* ignore */ }
}

/**
 * Returns the context when sounds may be scheduled right now, else null.
 * Right after unlock() the context may still be resuming; sounds scheduled in
 * that short window play as soon as it runs (so the very first tap is heard).
 */
function live() {
  const ctx = S.ctx;
  if (!ctx || !S.unlocked || S.hiddenSuspended) return null;
  if (ctx.state === 'running') return ctx;
  if (ctx.state === 'suspended' && S.resumePending && nowMs() - S.resumeAt < 300) return ctx;
  return null;
}

// ---------------------------------------------------------------------------
// Rate limiting and voice accounting
// ---------------------------------------------------------------------------
/** Token bucket: `rate` events per second with bursts of up to `burst`. */
function allow(key, rate, burst) {
  const t = nowMs() / 1000;
  let b = S.buckets[key];
  if (!b) b = S.buckets[key] = { tokens: burst, last: t };
  b.tokens = Math.min(burst, b.tokens + (t - b.last) * rate);
  b.last = t;
  if (b.tokens < 1) return false;
  b.tokens -= 1;
  return true;
}

function hasRoom(ctx) {
  const now = ctx.currentTime, ends = S.voiceEnds;
  let w = 0;
  for (let i = 0; i < ends.length; i++) if (ends[i] > now) ends[w++] = ends[i];
  ends.length = w;
  return w < MAX_VOICES;
}

/** Common entry check for one-shots: live context, rate limit, polyphony. */
function gate(key, rate, burst) {
  const ctx = live();
  if (!ctx || !hasRoom(ctx)) return null;
  if (key && !allow(key, rate, burst)) return null;
  return ctx;
}

function disconnectAll(nodes) {
  for (let i = 0; i < nodes.length; i++) { try { nodes[i].disconnect(); } catch (e) { /* ignore */ } }
}

// ---------------------------------------------------------------------------
// Automation helpers
// ---------------------------------------------------------------------------
/**
 * Attack (linear from ~0) / optional hold / exponential decay. `d` is the time
 * to fall 40 dB; the remainder then fades to silence. Returns the end time.
 */
function envAD(param, t, a, peak, d, hold) {
  const p = Math.max(0.0002, peak);
  const ta = t + Math.max(0.0005, a);
  const th = ta + (hold > 0 ? hold : 0);
  const dd = Math.max(0.002, d);
  param.setValueAtTime(0.0001, t);
  param.linearRampToValueAtTime(p, ta);
  if (th > ta) param.setValueAtTime(p, th);
  param.exponentialRampToValueAtTime(Math.max(0.0001, p * 0.01), th + dd);
  param.exponentialRampToValueAtTime(0.0001, th + dd * 1.4);
  return th + dd * 1.4;
}

/** `f` is a number or a list of [timeOffset, value] points (exponential glides). */
function path(param, t, f, maxF) {
  if (typeof f === 'number') { param.setValueAtTime(clamp(f, 20, maxF), t); return; }
  param.setValueAtTime(clamp(f[0][1], 20, maxF), t + f[0][0]);
  for (let i = 1; i < f.length; i++) param.exponentialRampToValueAtTime(clamp(f[i][1], 20, maxF), t + f[i][0]);
}

/** Smoothly move a persistent param, skipping redundant per-frame updates. */
function setSmooth(c, key, param, value, tc) {
  const prev = c[key];
  if (prev !== undefined) {
    if (value === prev) return;
    if (value !== 0 && Math.abs(value - prev) <= Math.max(1e-4, Math.abs(prev) * 0.008)) return;
  }
  try { param.setTargetAtTime(value, S.ctx.currentTime, tc || SMOOTH_TC); c[key] = value; } catch (e) { /* ignore */ }
}

// ---------------------------------------------------------------------------
// Voice: a small group of short-lived nodes that cleans itself up
// ---------------------------------------------------------------------------
class Voice {
  constructor(ctx, o) {
    o = o || {};
    this.ctx = ctx;
    this.t = o.t !== undefined ? o.t : ctx.currentTime + START_PAD;
    this.end = this.t;
    this.srcs = [];
    this.nodes = [];
    this.maxF = ctx.sampleRate * 0.45;
    const out = gainNode(ctx, def(o.gain, 1));
    this.out = out;
    this.nodes.push(out);
    let tail = out;
    if (o.pan && ctx.createStereoPanner) {
      const p = ctx.createStereoPanner();
      p.pan.value = clamp(o.pan, -1, 1);
      out.connect(p);
      tail = p;
      this.nodes.push(p);
    }
    tail.connect(o.bus || S.sfx);
    if (o.send > 0 && S.reverbIn) {
      const s = gainNode(ctx, o.send);
      tail.connect(s);
      s.connect(S.reverbIn);
      this.nodes.push(s);
    }
  }

  node(n) { this.nodes.push(n); return n; }

  /** Oscillator with pitch path and AD envelope. */
  tone(o) {
    const ctx = this.ctx, t = def(o.t, this.t);
    const osc = ctx.createOscillator();
    osc.type = o.type || 'sine';
    path(osc.frequency, t, o.f, this.maxF);
    if (o.detune) osc.detune.value = o.detune;
    const g = ctx.createGain();
    const end = envAD(g.gain, t, def(o.a, 0.004), def(o.peak, 0.5), def(o.d, 0.1), o.hold);
    osc.connect(g);
    g.connect(o.dest || this.out);
    osc.start(t);
    this.srcs.push(osc);
    this.nodes.push(osc, g);
    if (end > this.end) this.end = end;
    return { osc: osc, g: g };
  }

  /** Noise burst through an optional filter chain, with AD envelope. */
  noise(o) {
    const ctx = this.ctx, t = def(o.t, this.t);
    const buf = o.buf === 'pink' ? S.pink : S.white;
    if (!buf) return null;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    this.srcs.push(src);
    this.nodes.push(src);
    let head = src;
    const fl = o.filters || [];
    for (let i = 0; i < fl.length; i++) {
      const b = ctx.createBiquadFilter();
      b.type = fl[i].type || 'bandpass';
      if (fl[i].Q !== undefined) b.Q.value = fl[i].Q;
      path(b.frequency, t, fl[i].f, this.maxF);
      head.connect(b);
      head = b;
      this.nodes.push(b);
    }
    const g = ctx.createGain();
    const end = envAD(g.gain, t, def(o.a, 0.003), def(o.peak, 0.5), def(o.d, 0.1), o.hold);
    head.connect(g);
    g.connect(o.dest || this.out);
    this.nodes.push(g);
    src.start(t, Math.random() * Math.max(0, buf.duration - 0.6));
    if (end > this.end) this.end = end;
    return { src: src, g: g };
  }

  /** One 3–8 ms bandpassed noise click (the atom of the peel crackle). */
  grain(t, peak, lo, hi) {
    return this.noise({
      t: t, a: 0.0006, hold: 0.0012, d: rnd(0.003, 0.008), peak: peak,
      filters: [{ type: 'bandpass', f: rnd(lo || 2000, hi || 5000), Q: rnd(2, 5) }],
    });
  }

  /** LFO / FM modulator: osc -> per-target depth (exp ramp from->to) -> params. */
  mod(o) {
    const ctx = this.ctx, t = def(o.t, this.t);
    const osc = ctx.createOscillator();
    osc.type = o.type || 'sine';
    osc.frequency.value = Math.min(o.rate, this.maxF);
    for (let i = 0; i < o.targets.length; i++) {
      const tg = o.targets[i];
      const d = ctx.createGain();
      d.gain.setValueAtTime(Math.max(1e-4, tg[1]), t);
      d.gain.exponentialRampToValueAtTime(Math.max(1e-4, tg[2]), t + o.dur);
      osc.connect(d);
      d.connect(tg[0]);
      this.nodes.push(d);
    }
    osc.start(t);
    this.srcs.push(osc);
    this.nodes.push(osc);
    if (t + o.dur > this.end) this.end = t + o.dur;
    return osc;
  }

  /** Music-box / bell note: sine + soft octave + tiny bright partial. */
  mbox(t, f, peak, decay, dest) {
    this.tone({ t: t, f: f, a: 0.003, d: decay, peak: peak, dest: dest });
    this.tone({ t: t, f: f * 2.002, a: 0.002, d: decay * 0.4, peak: peak * 0.2, dest: dest });
    if (f < 1800) this.tone({ t: t, f: f * 3.01, a: 0.001, d: decay * 0.12, peak: peak * 0.07, dest: dest });
  }

  /** Schedule stop + self-disconnect once every source has ended. */
  play() {
    const srcs = this.srcs, nodes = this.nodes;
    if (!srcs.length) { disconnectAll(nodes); return this; }
    const stopAt = this.end + 0.03;
    S.voiceEnds.push(stopAt);
    let left = srcs.length;
    const done = function () { if (--left === 0) disconnectAll(nodes); };
    for (let i = 0; i < srcs.length; i++) {
      srcs[i].onended = done;
      try { srcs[i].stop(stopAt); } catch (e) { /* ignore */ }
    }
    return this;
  }
}

// ---------------------------------------------------------------------------
// One-shot sound effects
// ---------------------------------------------------------------------------
function squish(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.6)), k = pitchOf(o.pitch) * vary(0.05);
  const ctx = gate('squish', 24, 4); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.45 + 0.55 * i });
  const len = 0.1 + 0.1 * i, glide = 0.12 + 0.05 * i;
  v.tone({ f: [[0, 520 * k], [glide, 190 * k]], a: 0.005, d: len, peak: 0.6 });
  v.tone({ type: 'triangle', f: [[0, 1040 * k], [glide, 400 * k]], a: 0.004, d: len * 0.6, peak: 0.07 });
  // Wet "squelch": resonant lowpass sweeping down over pink noise.
  v.noise({ buf: 'pink', a: 0.006, d: 0.05 + 0.1 * i, peak: 0.5 + 0.4 * i,
    filters: [{ type: 'lowpass', f: [[0, 1200 * k], [0.12, 280 * k]], Q: 2.5 }] });
  v.play();
}

function unsquish(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.5)), k = pitchOf(o.pitch) * vary(0.05);
  const ctx = gate('unsquish', 16, 3); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.3 + 0.5 * i });
  v.tone({ f: [[0, 220 * k], [0.18, 420 * k]], a: 0.035, d: 0.2, peak: 0.6 });
  v.tone({ type: 'triangle', f: [[0, 440 * k], [0.18, 840 * k]], a: 0.03, d: 0.12, peak: 0.05 });
  v.noise({ buf: 'pink', a: 0.03, d: 0.08, peak: 0.15, filters: [{ type: 'lowpass', f: [[0, 300], [0.15, 700]], Q: 1 }] });
  v.play();
}

function jelly(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.6)), k = pitchOf(o.pitch) * vary(0.05);
  const ctx = gate('jelly', 12, 3); if (!ctx) return;
  const g = 0.4 + 0.5 * i;
  const v = new Voice(ctx, { gain: g });
  const f = 300 * k, dur = 0.42 + 0.18 * i;
  const main = v.tone({ f: [[0, f * 1.05], [dur, f * 0.85]], a: 0.008, d: dur, peak: 0.65 });
  // One ~9 Hz LFO wobbles both pitch (vibrato) and loudness; depth decays away.
  v.mod({ rate: 9 * vary(0.08), dur: dur,
    targets: [[main.osc.frequency, f * (0.06 + 0.1 * i), f * 0.002], [v.out.gain, g * 0.35, 0.001]] });
  v.tone({ type: 'triangle', f: [[0, f * 2], [dur, f * 1.7]], a: 0.008, d: dur * 0.4, peak: 0.05 });
  v.play();
}

function liquid(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.5));
  const ctx = gate('liquid', 20, 3); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.45 + 0.6 * i, send: 0.08 });
  const n = 2 + Math.floor(Math.random() * 3);
  let t = v.t;
  for (let j = 0; j < n; j++) {
    const f = rnd(400, 800) * vary(0.05);
    v.tone({ t: t, f: [[0, f], [rnd(0.02, 0.04), Math.min(1600, f * rnd(1.5, 2.1))]],
      a: 0.002, d: rnd(0.04, 0.07), peak: rnd(0.35, 0.55) * (1 - j * 0.12) });
    t += rnd(0.02, 0.06);
  }
  v.play();
}

function sparkle(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.5));
  const ctx = gate('sparkle', 20, 3); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.32 + 0.55 * i, send: 0.45 });
  const n = 3 + Math.floor(Math.random() * 5);
  for (let j = 0; j < n; j++) {
    const f = pick(SPARKLE_FREQS) * vary(0.008);
    v.tone({ t: v.t + rnd(0, 0.12), f: f, a: 0.0015, d: rnd(0.05, 0.12), peak: rnd(0.2, 0.35) * Math.sqrt(2000 / f) });
  }
  v.play();
}

function pearlTap(o) {
  o = opt(o);
  const ctx = gate('pearl', 20, 3); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.5, send: 0.12 });
  const f = 1800 * pitchOf(o.pitch) * vary(0.04);
  v.tone({ f: f, a: 0.0015, d: 0.08, peak: 0.55 });
  v.tone({ f: f * 2.01, a: 0.001, d: 0.05, peak: 0.16 });
  v.noise({ a: 0.0005, d: 0.004, peak: 0.6, filters: [{ type: 'bandpass', f: 3500, Q: 1.2 }] });
  v.play();
}

function gemTap(o) {
  o = opt(o);
  const ctx = gate('gem', 16, 3); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.56, send: 0.35 });
  const f = 2200 * pitchOf(o.pitch) * vary(0.03);
  const car = v.tone({ f: f, a: 0.002, d: 0.3, peak: 0.45 });
  // Inharmonic FM (ratio 1.41) whose index fades: crystal "キン".
  v.mod({ rate: f * 1.41, dur: 0.25, targets: [[car.osc.frequency, f * 0.9, f * 0.02]] });
  v.tone({ f: f * 1.007, a: 0.002, d: 0.3, peak: 0.14 });
  v.tone({ f: f * 2.76, a: 0.001, d: 0.1, peak: 0.06 });
  v.noise({ a: 0.0005, d: 0.003, peak: 0.3, filters: [{ type: 'bandpass', f: 5000, Q: 1 }] });
  v.play();
}

function peelStart(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.5)), k = vary(0.05);
  const ctx = gate('peelStart', 12, 2); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.35 + 0.55 * i });
  v.noise({ a: 0.002, d: 0.045 + 0.04 * i, peak: 2,
    filters: [{ type: 'bandpass', f: [[0, 2100 * k], [0.06, 3000 * k]], Q: 1.4 }] });
  v.tone({ f: [[0, 700 * k], [0.05, 1150 * k]], a: 0.004, d: 0.06, peak: 0.16 });
  const n = 2 + Math.floor(Math.random() * 2);
  for (let j = 0; j < n; j++) v.grain(v.t + rnd(0, 0.045), rnd(1.5, 2.5));
  v.play();
}

function peelClick(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.5));
  const ctx = gate('peel', 60, 5); if (!ctx) return;
  // Grains requested in the same frame are spread out a little in time.
  const now = ctx.currentTime + START_PAD;
  let t = Math.max(now, S.peelNext);
  if (t > now + 0.07) t = now;
  S.peelNext = t + rnd(0.006, 0.016);
  const v = new Voice(ctx, { t: t, gain: 0.3 + 0.75 * i });
  v.grain(t, rnd(2, 3.2), 2000, 5000);
  if (Math.random() < 0.22) v.grain(t + rnd(0.001, 0.004), rnd(1.2, 1.8), 1100, 1800); // lower "body" tick
  v.play();
}

function peelPop(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.7)), k = vary(0.05);
  const ctx = gate('peelPop', 6, 2); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.4 + 0.5 * i, send: 0.1 });
  const n = 6 + Math.floor(Math.random() * 4);
  let t = v.t;
  for (let j = 0; j < n; j++) { v.grain(t, rnd(1.6, 2.6) * (0.6 + 0.4 * j / n)); t += rnd(0.006, 0.011); }
  v.noise({ a: 0.01, d: 0.05, peak: 1.2, filters: [{ type: 'bandpass', f: [[0, 2000], [0.06, 3400]], Q: 1.2 }] });
  const tp = v.t + 0.085; // ... then the cute "ぽんっ"
  v.tone({ t: tp, f: [[0, 600 * k], [0.06, 900 * k]], a: 0.002, d: 0.075, peak: 0.6 });
  v.tone({ t: tp, type: 'triangle', f: [[0, 1200 * k], [0.06, 1800 * k]], a: 0.002, d: 0.04, peak: 0.05 });
  v.tone({ t: tp, f: [[0, 220], [0.05, 140]], a: 0.002, d: 0.06, peak: 0.25 });
  v.play();
}

function stick(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.7)), k = vary(0.05);
  const ctx = gate('stick', 14, 3); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.4 + 0.55 * i });
  v.tone({ f: [[0, 160 * k], [0.09, 90 * k]], a: 0.003, d: 0.1, peak: 0.85 });
  v.tone({ type: 'triangle', f: [[0, 330 * k], [0.05, 190 * k]], a: 0.002, d: 0.05, peak: 0.16 });
  v.noise({ buf: 'pink', a: 0.0015, d: 0.07, peak: 0.9, filters: [{ type: 'lowpass', f: [[0, 1800], [0.06, 450]], Q: 0.8 }] });
  v.play();
}

function restick(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.5)), k = vary(0.06);
  const ctx = gate('restick', 14, 3); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.3 + 0.5 * i });
  v.tone({ f: [[0, 280 * k], [0.04, 170 * k]], a: 0.002, d: 0.045, peak: 0.55 });
  v.noise({ a: 0.001, d: 0.025, peak: 1.4, filters: [{ type: 'bandpass', f: 1500 * k, Q: 1.2 }] });
  v.play();
}

function pageFlip(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.6));
  const ctx = gate('pageFlip', 6, 2); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.3 + 0.5 * i });
  const dur = 0.24 + 0.1 * i;
  // Film flutter: bandpassed noise -> fast amplitude modulation.
  const flutter = v.node(gainNode(ctx, 0.6));
  flutter.connect(v.out);
  v.noise({ a: 0.05, hold: dur * 0.3, d: dur * 0.6, peak: 1.6, dest: flutter,
    filters: [{ type: 'bandpass', f: [[0, 1200], [dur * 0.45, 3000], [dur, 1700]], Q: 0.9 }] });
  v.mod({ type: 'triangle', rate: rnd(24, 34), dur: dur * 1.2, targets: [[flutter.gain, 0.4, 0.15]] });
  v.noise({ buf: 'pink', a: 0.05, d: 0.2, peak: 0.4, filters: [{ type: 'lowpass', f: 600, Q: 0.7 }] });
  const n = 3 + Math.floor(Math.random() * 3); // slight crinkle
  for (let j = 0; j < n; j++) v.grain(v.t + rnd(0.02, dur * 0.8), rnd(0.8, 1.3), 1800, 4000);
  v.play();
}

function pageLand(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.5));
  const ctx = gate('pageLand', 8, 2); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.35 + 0.5 * i });
  v.noise({ buf: 'pink', a: 0.008, d: 0.14, peak: 1.1, filters: [{ type: 'lowpass', f: [[0, 700], [0.12, 180]], Q: 0.8 }] });
  v.tone({ f: [[0, 120], [0.08, 70]], a: 0.006, d: 0.09, peak: 0.3 });
  v.play();
}

function chime(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.6));
  const note = clamp(Math.round(num(o.note, 0)), -15, 12);
  const ctx = gate('chime', 40, 6); if (!ctx) return;
  // Voice stealing: fade out the oldest chime if 8 are still ringing.
  const now = ctx.currentTime;
  S.chimes = S.chimes.filter(function (c) { return c.end > now; });
  if (S.chimes.length >= MAX_CHIMES) {
    const old = S.chimes.shift();
    try {
      old.out.gain.setValueAtTime(old.out.gain.value, now);
      old.out.gain.linearRampToValueAtTime(0, now + 0.05);
    } catch (e) { /* ignore */ }
  }
  const f = pentaFreq(note, C6) * vary(0.003); // musical: only a hair of detune
  const v = new Voice(ctx, { gain: (0.3 + 0.5 * i) * (f > 3000 ? 0.7 : 1), send: 0.35 });
  v.tone({ f: f, a: 0.003, d: 0.85, peak: 0.55 });
  v.tone({ f: f * 2.003, a: 0.002, d: 0.35, peak: 0.12 });
  if (f < 2000) v.tone({ f: f * 4.01, a: 0.001, d: 0.07, peak: 0.04 });
  v.play();
  S.chimes.push({ end: v.end, out: v.out });
}

function ratchet(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.5)), k = vary(0.04);
  const ctx = gate('ratchet', 30, 3); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.3 + 0.5 * i });
  v.noise({ a: 0.0005, d: 0.012, peak: 2, filters: [{ type: 'bandpass', f: 1500 * k, Q: 3 }] });
  v.tone({ f: 900 * k, a: 0.001, d: 0.04, peak: 0.35 });
  v.tone({ f: 450 * k, a: 0.001, d: 0.02, peak: 0.12 });
  v.play();
}

/** Small inharmonic bell strike (used by the door bell). */
function bellStrike(v, t, f, amp) {
  const parts = [[1, 0.5, 1.1], [2, 0.18, 0.6], [2.76, 0.12, 0.35], [5.4, 0.04, 0.15], [0.5, 0.06, 0.9]];
  for (let j = 0; j < parts.length; j++) {
    const p = parts[j];
    if (f * p[0] < v.maxF) v.tone({ t: t, f: f * p[0] * vary(0.002), a: 0.002, d: p[2], peak: p[1] * amp });
  }
  v.noise({ t: t, a: 0.0005, d: 0.01, peak: 0.4 * amp, filters: [{ type: 'bandpass', f: f * 2, Q: 2 }] });
}

function doorBell() {
  const ctx = gate('doorBell', 1.5, 1); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.45, send: 0.4 });
  const k = vary(0.02);
  const strikes = [[0, 1320, 1], [0.13, 990, 0.85], [0.29, 1320, 0.7], [0.45, 990, 0.55]]; // カラン・コロン
  for (let j = 0; j < strikes.length; j++) {
    const s = strikes[j];
    bellStrike(v, v.t + s[0] + rnd(0, 0.02), s[1] * k, s[2]);
  }
  v.play();
}

function friendHappy() {
  const ctx = gate('friend', 2, 1); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.65, send: 0.25 });
  const k = vary(0.04);
  for (let j = 0; j < 2; j++) {
    const t = v.t + j * 0.13, up = 1 + j * 0.08;
    v.tone({ t: t, f: [[0, 700 * k * up], [0.08, 1300 * k * up]], a: 0.005, d: 0.1, peak: 0.45 });
    v.tone({ t: t, type: 'triangle', f: [[0, 1400 * k * up], [0.08, 2600 * k * up]], a: 0.005, d: 0.05, peak: 0.03 });
  }
  const degs = [2, 3, 5]; // E6 G6 C7
  for (let j = 0; j < degs.length; j++) v.mbox(v.t + 0.32 + j * 0.09, pentaFreq(degs[j], C6), 0.4, j === 2 ? 0.7 : 0.45);
  v.play();
}

function whoosh(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.4));
  const ctx = gate('whoosh', 4, 2); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.3 + 0.6 * i });
  const k = vary(0.06);
  v.noise({ buf: 'pink', a: 0.16, d: 0.24, peak: 1.2,
    filters: [{ type: 'lowpass', f: [[0, 400 * k], [0.17, 1600 * k], [0.36, 400 * k]], Q: 1.2 }] });
  v.noise({ a: 0.15, d: 0.2, peak: 0.15,
    filters: [{ type: 'bandpass', f: [[0, 900], [0.17, 2000], [0.36, 900]], Q: 0.7 }] });
  v.play();
}

function plop(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.5)), k = pitchOf(o.pitch) * vary(0.05);
  const ctx = gate('plop', 20, 4); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.35 + 0.5 * i, send: 0.06 });
  v.tone({ f: [[0, 400 * k], [0.06, 250 * k]], a: 0.003, d: 0.08, peak: 0.6 });
  v.tone({ t: v.t + 0.03, f: [[0, 600 * k], [0.03, 1000 * k]], a: 0.002, d: 0.03, peak: 0.08 });
  v.noise({ a: 0.0005, d: 0.003, peak: 0.6, filters: [{ type: 'bandpass', f: 3000, Q: 1.5 }] });
  v.play();
}

/** Shared water-drop voice: "ぴちょん" = fast upward sweep, decay, tiny echo bloop. */
function rippleVoice(ctx, i, k, pan, t, scale) {
  const v = new Voice(ctx, { gain: (0.36 + 0.6 * i) * scale, send: 0.25, pan: pan, t: t });
  v.tone({ f: [[0, 500 * k], [0.04, 1400 * k]], a: 0.003, d: 0.16, peak: 0.5 });
  v.tone({ t: v.t + 0.07, f: [[0, 700 * k], [0.03, 1100 * k]], a: 0.002, d: 0.06, peak: 0.12 });
  v.noise({ buf: 'pink', a: 0.003, d: 0.05, peak: 0.12, filters: [{ type: 'lowpass', f: 2000, Q: 0.7 }] });
  v.play();
}

function ripple(o) {
  o = opt(o);
  const ctx = gate('ripple', 15, 3); if (!ctx) return;
  rippleVoice(ctx, clamp01(num(o.intensity, 0.5)), vary(0.05), 0, undefined, 1);
}

function drip() {
  const ctx = gate('drip', 8, 2); if (!ctx) return;
  rippleVoice(ctx, rnd(0.2, 0.45), rnd(0.8, 1.35), rnd(-0.5, 0.5), undefined, 0.55);
}

function fur(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.5));
  const ctx = gate('fur', 8, 2); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.25 + 0.4 * i });
  v.noise({ buf: 'pink', a: 0.07, d: 0.2, peak: 1.1, filters: [{ type: 'lowpass', f: 900 * vary(0.08), Q: 0.5 }] });
  v.noise({ a: 0.06, d: 0.15, peak: 0.12, filters: [{ type: 'bandpass', f: 2200, Q: 0.6 }] });
  v.play();
}

function pearlRoll() {
  const ctx = gate('pearlRoll', 5, 2); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.6 });
  const n = 4 + Math.floor(Math.random() * 4);
  let t = v.t, amp = 1;
  for (let j = 0; j < n; j++) {
    v.tone({ t: t, f: rnd(2200, 3000), a: 0.001, d: 0.025, peak: 0.25 * amp });
    v.noise({ t: t, a: 0.0005, d: 0.003, peak: 0.8 * amp, filters: [{ type: 'bandpass', f: 4000, Q: 2 }] });
    t += rnd(0.03, 0.07);
    amp *= rnd(0.75, 0.92);
  }
  v.noise({ buf: 'pink', a: 0.03, d: t - v.t, peak: 0.15, filters: [{ type: 'lowpass', f: 300, Q: 0.7 }] });
  v.play();
}

function success(o) {
  o = opt(o);
  const i = clamp01(num(o.intensity, 0.6));
  const ctx = gate('success', 2, 1); if (!ctx) return;
  const v = new Voice(ctx, { gain: 0.3 + 0.5 * i, send: 0.35 });
  const degs = Math.random() < 0.5 ? [0, 2, 3, 4, 5] : [0, 1, 2, 3, 5];
  const n = Math.random() < 0.3 ? 4 : 5;
  const use = degs.slice(degs.length - n);
  for (let j = 0; j < use.length; j++) {
    const last = j === use.length - 1;
    v.mbox(v.t + j * 0.1, pentaFreq(use[j], C6), last ? 0.5 : 0.4, last ? 1.2 : 0.5);
  }
  v.tone({ f: C5, a: 0.004, d: 0.4, peak: 0.18 }); // soft low "pon" under the arpeggio
  const ts = v.t + use.length * 0.1;
  for (let j = 0; j < 7; j++) {
    const f = pick(SPARKLE_FREQS) * vary(0.008);
    v.tone({ t: ts + rnd(0, 0.3), f: f, a: 0.0015, d: rnd(0.06, 0.14), peak: 0.16 * Math.sqrt(2000 / f) });
  }
  v.play();
}

// ---------------------------------------------------------------------------
// Continuous controllers (brush / pour / rain) + background scheduler
// ---------------------------------------------------------------------------
function loopSource(ctx, buf, t) {
  const s = ctx.createBufferSource();
  s.buffer = buf;
  s.loop = true;
  s.start(t, Math.random() * Math.max(0, buf.duration - 0.6));
  return s;
}

function buildBrush(ctx) {
  const t = ctx.currentTime;
  const src = loopSource(ctx, S.pink, t);
  const bp = biquad(ctx, 'bandpass', 2000, 0.6);
  const sheenSrc = loopSource(ctx, S.white, t);
  const sheenBp = biquad(ctx, 'bandpass', 2800, 1.1);
  const sheen = gainNode(ctx, 0);
  const g = gainNode(ctx, 0);
  src.connect(bp); bp.connect(g);
  sheenSrc.connect(sheenBp); sheenBp.connect(sheen); sheen.connect(g);
  g.connect(S.sfx);
  return { srcs: [src, sheenSrc], nodes: [src, bp, sheenSrc, sheenBp, sheen, g], g: g, bp: bp, sheen: sheen, jit: 1 };
}

function buildPour(ctx) {
  const src = loopSource(ctx, S.pink, ctx.currentTime);
  const lp = biquad(ctx, 'lowpass', 600, 2.2);
  const am = gainNode(ctx, 1);
  const g = gainNode(ctx, 0);
  src.connect(lp); lp.connect(am); am.connect(g); g.connect(S.sfx);
  return { srcs: [src], nodes: [src, lp, am, g], g: g, lp: lp, am: am, amT: 0 };
}

function buildRain(ctx) {
  const src = loopSource(ctx, S.pink, ctx.currentTime);
  const hp = biquad(ctx, 'highpass', 200, 0.5);
  const lp = biquad(ctx, 'lowpass', 1000, 0.3);
  const g = gainNode(ctx, 0);
  src.connect(hp); hp.connect(lp); lp.connect(g); g.connect(S.sfx);
  return { srcs: [src], nodes: [src, hp, lp, g], g: g };
}

/** Get (lazily creating after unlock) a controller and record the call. */
function controller(key, build, lv) {
  let c = S[key];
  if (!c) {
    if (lv <= 0.001) return null; // level 0 before first use: nothing to do
    const ctx = live();
    if (!ctx || !S.pink) return null;
    c = S[key] = build(ctx);
  }
  c.lastCall = nowMs();
  c.level = lv;
  if (lv > 0.001) { c.idleSince = 0; ensureTicker(); } else if (!c.idleSince) c.idleSince = c.lastCall;
  return c;
}

function teardown(c) {
  for (let i = 0; i < c.srcs.length; i++) { try { c.srcs[i].stop(); } catch (e) { /* ignore */ } }
  disconnectAll(c.nodes);
}

/** Watchdog (fade if no longer refreshed) and release of idle controllers. */
function idleCheck(c, t, watchdog) {
  if (!c) return null;
  if (watchdog && c.level > 0.001 && t - c.lastCall > WATCHDOG_MS) {
    c.level = 0;
    c.idleSince = t;
    setSmooth(c, 'gv', c.g.gain, 0);
  }
  if (c.level <= 0.001 && c.idleSince && t - c.idleSince > IDLE_TEARDOWN_MS) { teardown(c); return null; }
  return c;
}

function pourBubble(ctx, lv) {
  if (!hasRoom(ctx)) return;
  const v = new Voice(ctx, { gain: 0.25 + 0.35 * lv, t: ctx.currentTime + rnd(0.01, 0.06) });
  const f = rnd(240, 520);
  v.tone({ f: [[0, f], [rnd(0.025, 0.045), f * rnd(1.6, 2.3)]], a: 0.003, d: rnd(0.04, 0.07), peak: rnd(0.2, 0.45) });
  v.play();
}

function tickPour(ctx, now, dt) {
  const c = S.pour;
  c.amT -= dt;
  if (c.amT <= 0) { // slow random amplitude + tone wobble: thick "とろとろ"
    c.amT = rnd(0.08, 0.2);
    c.am.gain.setTargetAtTime(rnd(0.45, 1), now, 0.06);
    c.lp.frequency.setTargetAtTime(rnd(480, 760) * (0.9 + 0.3 * c.level), now, 0.1);
  }
  if (c.level > 0.05 && Math.random() < (1.5 + 7 * c.level) * dt) pourBubble(ctx, c.level);
}

function tickRain(ctx, now, dt) {
  const lv = S.rain.level;
  if (Math.random() < (0.25 + 1.4 * lv) * dt && hasRoom(ctx)) {
    rippleVoice(ctx, rnd(0.2, 0.45), rnd(0.75, 1.4), rnd(-0.7, 0.7), now + rnd(0.01, 0.1), 0.25 + 0.35 * lv);
  }
}

// ---------------------------------------------------------------------------
// Generative music box
// ---------------------------------------------------------------------------
function snapToChord(deg, chord, lo, hi) {
  const offs = [0, -1, 1, -2, 2];
  for (let j = 0; j < offs.length; j++) {
    const d = deg + offs[j];
    if (d >= lo && d <= hi && chord.indexOf(pentaPc(d)) >= 0) return d;
  }
  return deg;
}

function schedulePad(ctx, t, dur, amt, chord) {
  if (!hasRoom(ctx)) return;
  const v = new Voice(ctx, { t: t, bus: S.musicBus, gain: amt * 0.12 });
  const lp = v.node(biquad(ctx, 'lowpass', 900, 0.5));
  lp.connect(v.out);
  const notes = PAD_VOICING[chord];
  const a = 1.4, hold = Math.max(0.1, dur - a);
  for (let j = 0; j < notes.length; j++) {
    const f = C4 * Math.pow(2, notes[j] / 12);
    v.tone({ type: 'triangle', f: f, t: t, a: a, hold: hold, d: 1.6, peak: 0.5, detune: -6, dest: lp });
    v.tone({ type: 'sine', f: f, t: t, a: a, hold: hold, d: 1.6, peak: 0.5, detune: 7, dest: lp });
  }
  v.play();
}

/** Schedule one melody step at time t; returns the time until the next step. */
function musicStep(ctx, t) {
  const m = S.music, mood = m.mood;
  const beat = lerp(0.36, 0.5, mood);
  const pos = m.count % 8;
  const shift = Math.round(mood * 5); // sunset: one octave lower
  const lo = -shift, hi = 9 - shift;
  if (pos % 4 === 0) { // new chord every half phrase
    m.chord = (m.chord + 1) % CHORDS.length;
    const pad = smoothstep(0.25, 1, mood);
    if (pad > 0.02) schedulePad(ctx, t, beat * 9, pad, m.chord);
  }
  let deg = m.deg + pick(STEPS);
  if (deg < lo) deg = lo + (lo - deg);
  if (deg > hi) deg = hi - (deg - hi);
  deg = clamp(deg, lo, hi);
  if (pos % 4 === 0 || pos === 7) deg = snapToChord(deg, CHORDS[m.chord], lo, hi);
  m.deg = deg;
  m.count++;
  const beats = pos === 7 ? 4 : pick(RHYTHM);
  const rest = pos !== 0 && Math.random() < 0.08;
  if (!rest && hasRoom(ctx)) {
    const v = new Voice(ctx, { t: t, bus: S.musicBus });
    const peak = (pos === 0 ? 0.8 : rnd(0.5, 0.7)) * lerp(1, 0.85, mood);
    const decay = lerp(1.2, 1.9, mood);
    v.mbox(t, pentaFreq(deg, C5) * vary(0.002), peak, decay);
    if (Math.random() < lerp(0.15, 0.28, mood)) { // occasional 2-note harmony
      v.mbox(t + (Math.random() < 0.5 ? 0 : beat * 0.5), pentaFreq(deg - 2, C5), peak * 0.45, decay * 0.8);
    }
    v.play();
  }
  return beats * beat;
}

function tickMusic(ctx, now, dt) {
  const m = S.music;
  m.mood += (m.moodTarget - m.mood) * Math.min(1, dt * 1.5);
  if (m.level <= 0.001) { m.next = 0; return; }
  if (!m.next || m.next < now - 0.05) m.next = now + 0.12; // (re)anchor to the audio clock
  let guard = 0;
  while (m.next < now + LOOKAHEAD && guard++ < 8) m.next += musicStep(ctx, m.next);
}

// ---------------------------------------------------------------------------
// Background ticker (runs only while something continuous is active)
// ---------------------------------------------------------------------------
function ensureTicker() {
  if (S.ticker || typeof setInterval === 'undefined') return;
  S.lastTick = nowMs();
  S.ticker = setInterval(tick, TICK_MS);
}

function stopTicker() {
  if (S.ticker) { clearInterval(S.ticker); S.ticker = null; }
}

function tick() {
  try {
    const t = nowMs();
    const dt = clamp((t - (S.lastTick || t)) / 1000, 0, 0.3);
    S.lastTick = t;
    const ctx = S.ctx;
    if (!ctx) { stopTicker(); return; }
    S.brush = idleCheck(S.brush, t, true);
    S.pour = idleCheck(S.pour, t, true);
    S.rain = idleCheck(S.rain, t, false);
    if (ctx.state === 'running' && !S.hiddenSuspended) {
      const now = ctx.currentTime;
      if (S.brush) S.brush.jit = rnd(0.92, 1.08); // subtle texture, applied by setBrush
      if (S.pour && S.pour.level > 0.001) tickPour(ctx, now, dt);
      if (S.rain && S.rain.level > 0.001) tickRain(ctx, now, dt);
      tickMusic(ctx, now, dt);
    }
    if (!S.brush && !S.pour && !S.rain && S.music.level <= 0.001) stopTicker();
  } catch (e) { /* ignore */ }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------
function unlock() {
  const c0 = S.ctx;
  if (S.unlocked && c0 && c0.state === 'running') return true;
  const ctx = ensureContext();
  if (!ctx) return false;
  S.unlocked = true;
  if (typeof document !== 'undefined' && !document.hidden) S.hiddenSuspended = false;
  if (ctx.state !== 'running' || !S.silentDone) {
    resumeCtx();
    playSilent(ctx);
    S.silentDone = true;
  }
  // Apply ambient levels requested before the first unlock.
  if (S.wantRain > 0.001 && !S.rain) setRain(S.wantRain);
  if (S.music.level > 0.001) { setSmooth(S.musicCtl, 'gv', S.musicBus.gain, S.music.level * MUSIC_GAIN, 0.08); ensureTicker(); }
  return ctx.state === 'running';
}

function setMasterVolume(v) {
  S.masterVolume = clamp01(num(v, 0.8));
  if (S.master && S.ctx) S.master.gain.setTargetAtTime(S.masterVolume * MASTER_BASE, S.ctx.currentTime, 0.05);
}

function setBrush(level, kind) {
  const lv = clamp01(num(level, 0));
  const c = controller('brush', buildBrush, lv);
  if (!c) return;
  const satin = kind === 'satin';
  const sh = Math.pow(lv, 1.25);
  setSmooth(c, 'gv', c.g.gain, sh * (satin ? BRUSH_SATIN : BRUSH_FUR));
  setSmooth(c, 'fv', c.bp.frequency, (satin ? 760 + 520 * lv : 1550 + 1200 * lv) * c.jit);
  setSmooth(c, 'qv', c.bp.Q, satin ? 1.25 : 0.55);
  setSmooth(c, 'sv', c.sheen.gain, satin ? 0.3 : 0.06);
}

function setPour(level) {
  const lv = clamp01(num(level, 0));
  const c = controller('pour', buildPour, lv);
  if (!c) return;
  setSmooth(c, 'gv', c.g.gain, Math.pow(lv, 1.2) * POUR_GAIN);
}

function setRain(level) {
  const lv = clamp01(num(level, 0));
  S.wantRain = lv;
  const c = controller('rain', buildRain, lv);
  if (!c) return;
  setSmooth(c, 'gv', c.g.gain, lv * RAIN_GAIN);
}

function setMusic(level, mood) {
  const m = S.music;
  const lv = clamp01(num(level, 0));
  const md = clamp01(num(mood, 0));
  if (m.level <= 0.001 && lv > 0.001) m.mood = md; // start directly in the requested mood
  m.level = lv;
  m.moodTarget = md;
  if (!S.ctx || !S.musicBus) return; // remembered; applied on unlock
  setSmooth(S.musicCtl, 'gv', S.musicBus.gain, lv * MUSIC_GAIN, 0.08);
  if (lv > 0.001 && S.unlocked) ensureTicker();
}

/** Optional per-frame hook: keeps the scheduler alive if timers get throttled. */
function update(dt) {
  if (S.ticker && nowMs() - S.lastTick > 120) tick();
}

const audio = {
  unlock, setMasterVolume,
  squish, unsquish, jelly, liquid, sparkle, pearlTap, gemTap,
  peelStart, peelClick, peelPop, stick, restick, pageFlip, pageLand,
  chime, ratchet, doorBell, friendHappy, whoosh, plop, ripple, drip, fur, pearlRoll, success,
  setBrush, setPour, setRain, setMusic, update,
};

// Every public method is wrapped so that it can never throw.
Object.keys(audio).forEach(function (k) {
  const fn = audio[k];
  audio[k] = function () {
    try { return fn.apply(audio, arguments); } catch (e) { return undefined; }
  };
});

export { audio };
export default audio;
