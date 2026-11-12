// Sound. Everything is synthesised (no files) and every sound has a physical
// cause in the world: the finger knocking on a wooden toy, the snap button
// shutting, rubber stretching as a balloon fills, a cotton thread snapping
// tight, the toy creaking as its load shifts, felt fibres letting go, water in
// a tin washtub, wind that follows the gusts the balloons feel.
//
// Music is only ever the voice of a physical change: when a string goes taut
// a marimba bar sounds one pentatonic step per full balloon on the house, from
// low (heavy house, far to go) up to the leading tone; the TONIC (C5) is held
// back for the instant the house actually leaves the ground - the lift-off
// chord starts on it, on every house. (In this physics a filling balloon
// already lifts through its knot, so the last string often goes taut only
// after lift-off; strings snapping taut in the air then play the tonic, or
// a step above for extra balloons.)
//
// Percussive sounds are pre-rendered once (modal synthesis / Karplus-Strong)
// into AudioBuffers and played with one source + one gain per voice; only
// pads, whooshes, the filling balloon and the wind use live oscillators or
// filters. A fixed pool of voice slots caps polyphony and steals the least
// important voice. Output: pan buses -> warm shelf -> compressor -> limiter.
//
// Works on an AudioContext (unlock() inside a gesture) or, for tests, on an
// OfflineAudioContext via attach(ctx) - then `timeShift` places events in time.

import { BALLOON } from './config.js';

const TAU = Math.PI * 2;
const LEAD = 0.012;          // s: schedule a hair ahead of the audio clock
const CAP = 24;              // voices
const TONIC = 523.25;        // C5
const PENTA = [0, 2, 4, 7, 9];
const PANS = [-0.45, -0.22, 0, 0.22, 0.45];

// Levels (linear, applied to buffers normalised to ~0.9 peak). Tuned with
// tools/audio-check.mjs so the musical note leads, touch feedback is clear
// and everything ambient sits underneath.
const V = {
  knock: 0.34, glass: 0.24, snap: 0.13, zip: 0.05, inflate: 0.11, tied: 0.07,
  pin: 0.13, note: 0.36, creak: 0.16, peel: 0.075,
  bomf: 0.3, squeak: 0.07, land: 0.55, splash: 0.26, drip: 0.12, lap: 0.05,
  poke: 0.3, tin: 0.26, rub: 0.07, giggle: 0.2, flutter: 0.1, chirp: 0.07,
  birdAmb: 0.035, paw: 0.05, whoosh: 0.1, pad: 0.03, rustle: 0.2, pof: 0.3,
  windLow: 0.045, windAir: 0.03,
};

// f of a pentatonic step: 0 = tonic C5, -1 = A4, -2 = G4, +1 = D5 ...
export function pentaFreq(step) {
  const o = Math.floor(step / 5);
  return TONIC * Math.pow(2, o + PENTA[step - o * 5] / 12);
}

// One step per balloon of lift still missing; tonic once lift >= weight.
// While the house still rests on the ground the ladder stops one step short:
// the tonic belongs to the lift-off itself.
export function ladderStep(mass, lift, resting = false) {
  let s;
  if (lift >= mass - 1e-6) s = Math.min(4, Math.floor(lift - mass + 1e-6));
  else s = -Math.min(9, Math.ceil(mass - lift - 1e-6));
  return resting ? Math.min(s, -1) : s;
}

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const noop = () => {};
const nowMs = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());

// ---------------------------------------------------------------- DSP helpers
function seeded(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), s | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// A decaying sine (one vibration mode) added into x from time t0.
function mode(x, sr, f, amp, tau, t0 = 0) {
  if (f <= 0 || f >= sr * 0.45 || amp === 0) return;
  const w = (TAU * f) / sr, c = 2 * Math.cos(w);
  let y1 = Math.sin(-w), y2 = Math.sin(-2 * w);
  const d = Math.exp(-1 / (tau * sr));
  let e = amp;
  const stop = Math.abs(amp) * 1e-4;
  for (let n = Math.max(0, Math.round(t0 * sr)); n < x.length; n++) {
    const y = c * y1 - y2;
    y2 = y1; y1 = y;
    x[n] += y * e;
    e *= d;
    if (e < stop && e > -stop) break;
  }
}

// A sine whose frequency follows fn(t), with amplitude envelope env(t).
function sweep(x, sr, fn, env, t0 = 0, dur = x.length / sr, harm = null) {
  let ph = 0;
  const n0 = Math.round(t0 * sr), n1 = Math.min(x.length, n0 + Math.round(dur * sr));
  for (let n = n0; n < n1; n++) {
    const t = (n - n0) / sr;
    ph += (TAU * fn(t)) / sr;
    let s = Math.sin(ph);
    if (harm) for (let k = 0; k < harm.length; k++) s += harm[k] * Math.sin(ph * (k + 2));
    x[n] += s * env(t);
  }
}

// Short noise click (the contact itself), low-passed by a.
function click(x, sr, rand, amp, len, a = 0.5, t0 = 0) {
  const n0 = Math.round(t0 * sr), n = Math.round(len * sr);
  let lp = 0;
  for (let i = 0; i < n && n0 + i < x.length; i++) {
    lp += a * ((rand() * 2 - 1) - lp);
    x[n0 + i] += lp * amp * (1 - i / n);
  }
}

function lowpass(x, a) { let y = 0; for (let i = 0; i < x.length; i++) { y += a * (x[i] - y); x[i] = y; } return x; }
function highpass(x, a) { let y = 0; for (let i = 0; i < x.length; i++) { y += a * (x[i] - y); x[i] -= y; } return x; }

// Two-pole resonator (band-pass), returns a new array.
function resonate(x, sr, f, bw) {
  const r = Math.exp((-Math.PI * bw) / sr), c = 2 * r * Math.cos((TAU * f) / sr), r2 = r * r;
  const y = new Float32Array(x.length);
  let y1 = 0, y2 = 0;
  for (let i = 0; i < x.length; i++) { const v = (1 - r) * x[i] + c * y1 - r2 * y2; y2 = y1; y1 = v; y[i] = v; }
  return y;
}

function attackWin(x, sr, sec) {
  const n = Math.min(x.length, Math.round(sec * sr));
  for (let i = 0; i < n; i++) x[i] *= 0.5 - 0.5 * Math.cos((Math.PI * i) / n);
}

function tailFade(x, sr, sec = 0.02) {
  const n = Math.min(x.length, Math.round(sec * sr));
  for (let i = 0; i < n; i++) x[x.length - 1 - i] *= i / n;
}

function normalize(x, peak = 0.9) {
  let m = 0;
  for (let i = 0; i < x.length; i++) { const v = x[i] < 0 ? -x[i] : x[i]; if (v > m) m = v; }
  if (m > 0 && Number.isFinite(m)) { const k = peak / m; for (let i = 0; i < x.length; i++) x[i] *= k; }
  return x;
}

const arr = (sr, sec) => new Float32Array(Math.max(1, Math.ceil(sec * sr)));

// Seamless loop: cross-fade the extra tail into the head.
function looped(x, sr, fade) {
  const F = Math.round(fade * sr), N = x.length - F;
  const y = new Float32Array(N);
  for (let i = 0; i < N; i++) y[i] = x[i];
  for (let i = 0; i < F; i++) { const k = i / F; y[i] = x[i] * k + x[N + i] * (1 - k); }
  return y;
}

// ---------------------------------------------------------------- sound recipes
// Each returns a Float32Array (mono) at sample rate sr.
const RECIPES = {
  // Rubber-mallet marimba bar: fundamental + the two tuned overtones (4x, 10x)
  // + the resonator tube's slower bloom. Low bars get more overtone so they
  // still speak on a phone speaker.
  marimba(sr, rand, f) {
    const tau = 0.7 * Math.pow(262 / f, 0.6);
    const x = arr(sr, Math.min(1.7, tau * 5 + 0.05));
    mode(x, sr, f, 1, tau);
    mode(x, sr, f * 1.0016, 0.22, tau * 1.35);
    const low = clamp((420 - f) / 220, 0, 1);
    mode(x, sr, f * 3.98, 0.2 + 0.3 * low, tau * (0.14 + 0.08 * low));
    mode(x, sr, f * 9.8, 0.05, tau * 0.045);
    // low bars: the tube's upper resonances, so a phone speaker still sings the note
    mode(x, sr, f * 2, 0.8 * low, tau * 0.5);
    mode(x, sr, f * 3, 0.45 * low, tau * 0.32);
    click(x, sr, rand, 0.12, 0.004, 0.25);
    attackWin(x, sr, 0.0018);
    tailFade(x, sr, 0.3);
    return normalize(x);
  },
  // Cotton thread plucked tight: Karplus-Strong at 1 kHz plus a clear partial.
  pluck(sr, rand) {
    const f0 = 1000, N = Math.max(2, Math.round(sr / f0));
    const x = arr(sr, 0.6);
    let lp = 0;
    for (let i = 0; i < N; i++) { lp += 0.45 * ((rand() * 2 - 1) - lp); x[i] = lp; }
    x[N] = 0.4985 * x[0];
    for (let i = N + 1; i < x.length; i++) x[i] = 0.4985 * (x[i - N] + x[i - N - 1]);
    mode(x, sr, sr / (N + 0.5), 0.35, 0.09);
    attackWin(x, sr, 0.0006);
    tailFade(x, sr);
    return normalize(x);
  },
  // Finger on painted wood: a hollow toy box (cavity + plate modes) + contact.
  knock(sr, rand, v) {
    const j = () => 1 + (rand() - 0.5) * 0.07;
    const b = 420 * (1 + (v - 1) * 0.03);
    const x = arr(sr, 0.3);
    mode(x, sr, b * 0.52 * j(), 0.4, 0.05);
    mode(x, sr, b * j(), 1, 0.04);
    mode(x, sr, b * 2.31 * j(), 0.5, 0.024);
    mode(x, sr, b * 3.88 * j(), 0.26, 0.014);
    mode(x, sr, b * 5.7 * j(), 0.12, 0.008);
    click(x, sr, rand, 0.7, 0.0018, 0.45);
    attackWin(x, sr, 0.0005);
    tailFade(x, sr);
    return normalize(x);
  },
  // The heavy stone house: dull, short, more contact than ring.
  stone(sr, rand) {
    const x = arr(sr, 0.25);
    mode(x, sr, 180, 0.55, 0.03);
    mode(x, sr, 330, 1, 0.022);
    mode(x, sr, 790, 0.4, 0.012);
    mode(x, sr, 1500, 0.15, 0.006);
    click(x, sr, rand, 1.1, 0.004, 0.2);
    attackWin(x, sr, 0.0006);
    tailFade(x, sr);
    return normalize(x);
  },
  // Knuckle on window glass: glassy modes + the knuckle's soft thump.
  glass(sr, rand) {
    const x = arr(sr, 0.32);
    mode(x, sr, 1900, 1, 0.06);
    mode(x, sr, 1900 * 2.71, 0.26, 0.026);
    mode(x, sr, 1900 * 5.2, 0.08, 0.01);
    mode(x, sr, 240, 0.7, 0.022);
    click(x, sr, rand, 0.45, 0.0012, 0.4);
    attackWin(x, sr, 0.0004);
    tailFade(x, sr);
    return normalize(x);
  },
  // Snap button (press stud): two small plastic clicks, the second smaller.
  snap(sr, rand) {
    const x = arr(sr, 0.08);
    click(x, sr, rand, 0.9, 0.0012, 0.6);
    mode(x, sr, 2300, 0.6, 0.006);
    mode(x, sr, 1250, 0.35, 0.01);
    mode(x, sr, 4100, 0.22, 0.003);
    click(x, sr, rand, 0.4, 0.001, 0.6, 0.012);
    mode(x, sr, 2750, 0.3, 0.005, 0.012);
    lowpass(x, 0.6);
    tailFade(x, sr, 0.01);
    return normalize(x);
  },
  // Felt: a soft body thump that still has some 200-700 Hz for small speakers.
  thud(sr, rand) {
    const x = arr(sr, 0.42);
    sweep(x, sr, (t) => 55 + 40 * Math.exp(-t / 0.05), (t) => Math.min(1, t / 0.004) * Math.exp(-t / 0.1));
    mode(x, sr, 180, 0.6, 0.06);
    mode(x, sr, 330, 0.4, 0.04);
    mode(x, sr, 520, 0.18, 0.03);
    const n = arr(sr, 0.42);
    for (let i = 0; i < n.length; i++) { const t = i / sr; n[i] = (rand() * 2 - 1) * Math.min(1, t / 0.002) * Math.exp(-t / 0.04); }
    lowpass(n, 0.12); lowpass(n, 0.15);
    for (let i = 0; i < x.length; i++) x[i] += n[i] * 4;
    tailFade(x, sr);
    return normalize(x);
  },
  // A finger pressing into the quilt: a muffled cushion "pof".
  pof(sr, rand) {
    const x = arr(sr, 0.25);
    for (let i = 0; i < x.length; i++) { const t = i / sr; x[i] = (rand() * 2 - 1) * Math.min(1, t / 0.003) * Math.exp(-t / 0.03); }
    lowpass(x, 0.2); lowpass(x, 0.25);
    for (let i = 0; i < x.length; i++) x[i] *= 3;
    mode(x, sr, 240, 0.5, 0.04);
    mode(x, sr, 470, 0.3, 0.025);
    mode(x, sr, 130, 0.35, 0.05);
    tailFade(x, sr);
    return normalize(x);
  },
  // Felt fibres letting go: sparse tiny ticks.
  crackle(sr, rand) {
    const x = arr(sr, 0.6);
    let t = 0;
    while (t < 0.6) {
      t += -Math.log(1 - rand() * 0.999) / 420;
      const i = Math.round(t * sr);
      if (i < x.length) x[i] += (rand() < 0.5 ? -1 : 1) * Math.pow(rand(), 2);
    }
    for (let i = 0; i < x.length; i++) x[i] += (rand() * 2 - 1) * 0.02;
    highpass(x, 0.1);
    lowpass(x, 0.3); lowpass(x, 0.45);
    tailFade(x, sr);
    return normalize(x);
  },
  // Wooden toy groan: stick-slip pulses exciting a few wood modes.
  creak(sr, rand, v) {
    const dur = 0.65, x = arr(sr, dur);
    const r0 = v ? 62 : 46, r1 = v ? 44 : 60;
    let t = 0.005;
    while (t < dur - 0.02) {
      const env = Math.min(1, t / 0.06) * Math.min(1, (dur - t) / 0.2);
      const a = env * (0.7 + 0.6 * rand());
      mode(x, sr, 300, 0.35 * a, 0.014, t);
      mode(x, sr, 610, a, 0.01, t);
      mode(x, sr, 1370, 0.55 * a, 0.006, t);
      mode(x, sr, 2600, 0.2 * a, 0.003, t);
      const rate = r0 + (r1 - r0) * (t / dur);
      t += (1 / rate) * (1 + (rand() - 0.5) * 0.28);
    }
    tailFade(x, sr, 0.05);
    return normalize(x);
  },
  // A water drop: the bubble's rising "plink".
  drop(sr, rand) {
    const x = arr(sr, 0.13);
    sweep(x, sr, (t) => 680 * (1 + 1.3 * (1 - Math.exp(-t / 0.016))), (t) => Math.min(1, t / 0.0006) * Math.exp(-t / 0.028));
    click(x, sr, rand, 0.15, 0.0006, 0.5);
    tailFade(x, sr);
    return normalize(x);
  },
  // Rubber under a finger: a stick-slip squeak.
  squeak(sr, rand) {
    const d = 0.16, x = arr(sr, d);
    // the finger sticks and slips on the rubber: a wandering pitch, rough grain
    const n = Math.ceil(d * 400) + 2, walk = new Float32Array(n);
    for (let i = 1; i < n; i++) walk[i] = walk[i - 1] * 0.8 + (rand() - 0.5) * 0.12;
    const at = (t) => { const u = t * 400, i = Math.min(n - 2, Math.floor(u)), f = u - i; return walk[i] * (1 - f) + walk[i + 1] * f; };
    sweep(x, sr, (t) => 760 * (1 + 0.3 * (t / d)) * (1 + at(t) + 0.03 * Math.sin(TAU * 47 * t)),
      (t) => Math.min(1, t / 0.015) * Math.pow(Math.sin((Math.PI * t) / d), 0.6) * (0.75 + 0.25 * Math.sin(TAU * 83 * t + at(t) * 40)), 0, d, [0.45, 0.2, 0.08]);
    lowpass(x, 0.5);
    tailFade(x, sr, 0.01);
    return normalize(x);
  },
  // A tapped balloon: the membrane's hollow "bomf".
  bomf(sr, rand) {
    const x = arr(sr, 0.5);
    sweep(x, sr, (t) => 190 * (1 + 0.12 * Math.exp(-t / 0.03)), (t) => Math.min(1, t / 0.003) * Math.exp(-t / 0.1));
    mode(x, sr, 420, 0.55, 0.06);
    mode(x, sr, 690, 0.3, 0.035);
    mode(x, sr, 1050, 0.1, 0.02);
    click(x, sr, rand, 0.3, 0.003, 0.1);
    tailFade(x, sr);
    return normalize(x);
  },
  // Birds (felt birds still sing).
  chirp(sr, rand, v) {
    const x = arr(sr, 0.3);
    const syl = (t0, d, fa, fb, a = 1) => sweep(x, sr, (t) => fa + (fb - fa) * Math.pow(t / d, 0.7),
      (t) => a * Math.pow(Math.sin((Math.PI * t) / d), 1.5), t0, d, [0.12]);
    if (v === 0) { syl(0, 0.06, 2700, 3900); syl(0.11, 0.06, 2800, 4000, 0.8); }
    else if (v === 1) { for (let i = 0; i < 5; i++) syl(i * 0.05, 0.032, 4300 - i * 90, 3500 - i * 90, 1 - i * 0.08); }
    else { syl(0, 0.05, 3300, 4300); syl(0.09, 0.07, 4200, 2900, 0.85); }
    tailFade(x, sr, 0.01);
    return normalize(x);
  },
  // Wings: noise gated by the wing beats.
  flutter(sr, rand) {
    const x = arr(sr, 0.5);
    for (let i = 0; i < x.length; i++) x[i] = rand() * 2 - 1;
    highpass(x, 0.05); lowpass(x, 0.35);
    for (let i = 0; i < x.length; i++) {
      const t = i / sr;
      x[i] *= Math.pow(Math.abs(Math.sin(Math.PI * 16 * t)), 3) * Math.min(1, t / 0.02) * Math.exp(-t / 0.22);
    }
    tailFade(x, sr);
    return normalize(x);
  },
  // A felt puppet's giggle: "he-he-he-hehh" (pulse train through vowel formants).
  giggle(sr, rand) {
    const x = arr(sr, 0.55);
    const syl = [[0, 0.07, 540], [0.12, 0.07, 515], [0.24, 0.07, 490], [0.36, 0.1, 450]];
    for (const [t0, d, f0] of syl) {
      let ph = 0;
      const n0 = Math.round(t0 * sr), n1 = n0 + Math.round(d * sr);
      for (let n = n0; n < n1 && n < x.length; n++) {
        const t = (n - n0) / sr;
        ph += (f0 * (1 - 0.07 * (t / d))) / sr;
        const env = Math.min(1, t / 0.008) * Math.min(1, (d - t) / 0.025);
        if (ph >= 1) { ph -= 1; x[n] += env; }
        x[n] += (rand() * 2 - 1) * 0.03 * env;
      }
    }
    const a = resonate(x, sr, 600, 90), b = resonate(x, sr, 1900, 140), c = resonate(x, sr, 2800, 220);
    for (let i = 0; i < x.length; i++) x[i] = a[i] + 0.6 * b[i] + 0.25 * c[i];
    lowpass(x, 0.5);
    tailFade(x, sr);
    return normalize(x);
  },
  // A cloth page turning: grains of rustle swelling to the middle + the air it moves.
  rustle(sr, rand) {
    const dur = 1.9, x = arr(sr, dur), env = arr(sr, dur);
    const HW = 512, hann = new Float32Array(HW);
    for (let i = 0; i < HW; i++) hann[i] = 0.5 - 0.5 * Math.cos((TAU * i) / HW);
    for (let g = 0; g < 80; g++) {
      const tc = clamp(1.05 + (rand() + rand() + rand() - 1.5) * 0.55, 0.02, dur - 0.1);
      const len = 0.02 + rand() * 0.05, a = (0.3 + 0.7 * rand()) * Math.exp(-Math.pow((tc - 1.05) / 0.45, 2));
      const n0 = Math.round(tc * sr), n = Math.round(len * sr), k = HW / n;
      for (let i = 0; i < n && n0 + i < env.length; i++) env[n0 + i] += a * hann[(i * k) | 0];
    }
    // cloth noise only where grains are
    for (let i = 0; i < x.length; i++) { const e = env[i]; x[i] = e > 1e-4 ? (rand() * 2 - 1) * e : 0; }
    highpass(x, 0.12); lowpass(x, 0.45);
    // ... plus the air the page pushes as it swings over (around 1.1 s)
    const a0 = Math.round(0.5 * sr), a1 = Math.min(x.length, Math.round(1.7 * sr));
    let lpA = 0, lpB = 0;
    for (let i = a0; i < a1; i++) {
      const u = (i / sr - 1.1) / 0.2;
      lpA += 0.02 * ((rand() * 2 - 1) * Math.exp(-u * u) - lpA);
      lpB += 0.04 * (lpA - lpB);
      x[i] += lpB * 6;
    }
    tailFade(x, sr, 0.05);
    return normalize(x, 0.8);
  },
  // The wooden hull against the felt-padded tin tub: a damped "kon".
  tin(sr, rand) {
    const x = arr(sr, 0.6);
    mode(x, sr, 470, 1, 0.12);
    mode(x, sr, 470 * 2.76, 0.42, 0.075);
    mode(x, sr, 470 * 5.4, 0.18, 0.04);
    mode(x, sr, 470 * 8.93, 0.07, 0.022);
    mode(x, sr, 260, 0.55, 0.03);
    click(x, sr, rand, 0.4, 0.0015, 0.3);
    attackWin(x, sr, 0.0008);
    tailFade(x, sr);
    return normalize(x);
  },
  // A small splash: a slap of water and a few bubbles.
  splash(sr, rand) {
    const x = arr(sr, 0.4);
    const n = arr(sr, 0.4);
    for (let i = 0; i < n.length; i++) { const t = i / sr; n[i] = (rand() * 2 - 1) * Math.min(1, t / 0.002) * Math.exp(-t / 0.05); }
    lowpass(n, 0.12);
    for (let i = 0; i < x.length; i++) x[i] = n[i] * 2.2;
    for (let k = 0; k < 3; k++) {
      const f0 = 600 + rand() * 500, t0 = 0.02 + rand() * 0.1, a = 0.3 + rand() * 0.3;
      sweep(x, sr, (t) => f0 * (1 + 1.2 * (1 - Math.exp(-t / 0.015))), (t) => a * Math.min(1, t / 0.0006) * Math.exp(-t / 0.025), t0, 0.12);
    }
    tailFade(x, sr);
    return normalize(x);
  },
  // A finger stroking painted wood.
  rub(sr, rand) {
    const d = 0.28, x = arr(sr, d);
    for (let i = 0; i < x.length; i++) x[i] = rand() * 2 - 1;
    highpass(x, 0.1); lowpass(x, 0.3);
    const ph = rand() * 6;
    for (let i = 0; i < x.length; i++) { const t = i / sr; x[i] *= (0.6 + 0.4 * Math.sin(TAU * 12 * t + ph)) * Math.sin((Math.PI * t) / d); }
    sweep(x, sr, (t) => 1050 * (1 + 0.05 * Math.sin(TAU * 23 * t)), (t) => 0.06 * Math.sin((Math.PI * t) / d), 0, d);
    tailFade(x, sr, 0.01);
    return normalize(x);
  },
  // Thread running up the wall: a quick rising "shp".
  zip(sr, rand) {
    const d = 0.17, x = arr(sr, d);
    let y1 = 0, y2 = 0;
    for (let i = 0; i < x.length; i++) {
      const t = i / sr;
      const f = 1100 * Math.pow(3.1, Math.min(1, t / 0.14));
      const r = Math.exp((-Math.PI * 700) / sr), c = 2 * r * Math.cos((TAU * f) / sr);
      const v = (1 - r) * (rand() * 2 - 1) + c * y1 - r * r * y2;
      y2 = y1; y1 = v;
      x[i] = v * Math.min(1, t / 0.012) * Math.min(1, Math.max(0, (0.16 - t) / 0.04));
    }
    tailFade(x, sr, 0.01);
    return normalize(x);
  },
};

// One job per buffer key, shared by the main thread and the render worker:
// 'knock1' -> RECIPES.knock(sr, rand, 1); 'n5233' -> marimba bar at 523.3 Hz.
function jobFor(key) {
  if (/^n\d+$/.test(key)) { const f = +key.slice(1) / 10; return { recipe: 'marimba', v: f, seed: Math.round(f) }; }
  const m = /^([a-z]+)(\d*)$/.exec(key);
  if (!m || !RECIPES[m[1]] || m[1] === 'marimba') return null;
  return { recipe: m[1], v: m[2] ? +m[2] : 0, seed: key.length * 131 + key.charCodeAt(0) * 7 + (m[2] ? +m[2] * 17 : 0) };
}
function renderJob(sr, j) { return RECIPES[j.recipe](sr, seeded(j.seed), j.v); }
const noteKey = (f) => 'n' + Math.round(f * 10);

// The recipes are plain math, so the same source runs in a worker: all the
// DSP happens off the main thread and the game never drops a frame for it.
function workerSource() {
  const fns = [seeded, mode, sweep, click, lowpass, highpass, resonate, attackWin, tailFade, normalize, jobFor, renderJob];
  const recipes = Object.entries(RECIPES).map(([k, f]) => { const src = f.toString(); return src.startsWith(k) ? src : `${k}: ${src}`; });
  return `'use strict';
const TAU = Math.PI * 2;
const clamp = ${clamp.toString()};
const arr = ${arr.toString()};
${fns.map((f) => f.toString()).join('\n')}
const RECIPES = {
${recipes.join(',\n')}
};
self.onmessage = (e) => {
  const { key, sr } = e.data;
  const j = jobFor(key);
  if (!j) return;
  const x = renderJob(sr, j);
  self.postMessage({ key, sr, x }, [x.buffer]);
};`;
}

// ---------------------------------------------------------------- misc builders
function whiteNoise(ctx, sec, seed) {
  const sr = ctx.sampleRate, rand = seeded(seed);
  const x = arr(sr, sec + 0.1);
  for (let i = 0; i < x.length; i++) x[i] = rand() * 2 - 1;
  const y = looped(x, sr, 0.1);
  const b = ctx.createBuffer(1, y.length, sr);
  b.getChannelData(0).set(y);
  return b;
}

// Stereo pink-ish noise for the wind loop (Paul Kellet's filter), seamless.
function windNoise(ctx, sec) {
  const sr = ctx.sampleRate;
  const b = ctx.createBuffer(2, Math.ceil(sec * sr), sr);
  for (let ch = 0; ch < 2; ch++) {
    const rand = seeded(77 + ch * 13);
    const x = arr(sr, sec + 0.3);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < x.length; i++) {
      const w = rand() * 2 - 1;
      b0 = 0.99765 * b0 + w * 0.099046;
      b1 = 0.963 * b1 + w * 0.2965164;
      b2 = 0.57 * b2 + w * 1.0526913;
      x[i] = (b0 + b1 + b2 + w * 0.1848) * 0.2;
    }
    b.getChannelData(ch).set(looped(x, sr, 0.3).subarray(0, b.length));
  }
  return b;
}

// A small, warm room (felt and wood absorb the highs quickly).
function roomIR(ctx) {
  const sr = ctx.sampleRate, dur = 0.9;
  const b = ctx.createBuffer(2, Math.ceil(dur * sr), sr);
  for (let ch = 0; ch < 2; ch++) {
    const rand = seeded(5 + ch * 31);
    const x = b.getChannelData(ch);
    const pre = Math.round(0.011 * sr);
    let lp = 0, hp = 0;
    for (let i = pre; i < x.length; i++) {
      const t = (i - pre) / sr;
      const a = 0.55 - 0.45 * (t / dur);
      lp += a * ((rand() * 2 - 1) - lp);
      hp += 0.025 * (lp - hp);           // felt and a small room: no boom
      x[i] = (lp - hp) * Math.exp(-t / 0.14);
    }
    const taps = ch ? [[0.013, 0.35], [0.021, 0.22], [0.034, 0.16]] : [[0.016, 0.33], [0.025, 0.2], [0.029, 0.15]];
    for (const [tt, a] of taps) { const i = Math.round(tt * sr); if (i < x.length) x[i] += a; }
    tailFade(x, sr, 0.1);
  }
  return b;
}

function silentWavURL(sr) {
  const n = Math.round(sr * 0.5);
  const buf = new ArrayBuffer(44 + n * 2);
  const v = new DataView(buf);
  const w = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
  w(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); w(8, 'WAVE'); w(12, 'fmt ');
  v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, sr, true); v.setUint32(28, sr * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true);
  w(36, 'data'); v.setUint32(40, n * 2, true);
  return URL.createObjectURL(new Blob([buf], { type: 'audio/wav' }));
}

function isIOS() {
  try {
    return /iP(hone|od|ad)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  } catch (_) { return false; }
}

const RESIDENT_RATE = { chick: 1.4, giraffe: 1.12, duck: 1.22, dachshund: 1.0, bear: 0.78 };

// ============================================================================
export class Sound {
  constructor() {
    this.ctx = null;
    this.offline = false;
    this._muted = false;
    this.hidden = false;
    this.timeShift = 0;       // tests: where "now" is on an offline timeline
    this.bufs = new Map();
    this.rand = seeded(99);
    this.slots = [];
    for (let i = 0; i < CAP; i++) this.slots.push({ end: 0, prio: 0, g: null, src: null });
    this.dropped = 0;
    this.count = Object.create(null); // voices started per sound (debug / tests)
    this.last = Object.create(null);
    this.inflating = [];
    this.peelN = 0;
    this.kv = 0;
    this.lastChord = -99;
    this.birdT = 6;
    this.windT = 0;
    this.windSet = { lo: -1, air: -1, f: -1 };
    this.lapT = 1;
    this.steps = new WeakMap();
    this.noteT = new WeakMap();
    this.silentEl = null;
    this.arming = 0;
  }

  get muted() { return this._muted; }
  set muted(v) {
    this._muted = !!v;
    if (this.out) {
      try { this.out.gain.setTargetAtTime(this._muted ? 0 : 1, this.ctx.currentTime, 0.03); } catch (_) { /* ignore */ }
    }
  }

  // Active voices (debug).
  get voices() {
    if (!this.ctx) return 0;
    const now = this.now();
    let n = 0;
    for (const s of this.slots) if (s.end > now) n++;
    return n;
  }

  // Playable now - or about to be: right after an unlock the context may still
  // report 'suspended' for a moment (iOS starts it asynchronously, and only on
  // some events), so what the first touch caused is scheduled on the clock
  // that is about to start instead of being lost.
  get ok() {
    if (this._muted || !this.ctx || !this.sum) return false;
    if (this.offline) return true;
    const st = this.ctx.state;
    if (st === 'running') return true;
    return st === 'suspended' && !this.hidden && this.arming > 0 && nowMs() - this.arming < 800;
  }
  now() { return this.ctx.currentTime + this.timeShift; }

  // ------------------------------------------------------------ iOS plumbing
  // Called on pointerdown AND pointerup/touchend: iOS only honours some of them.
  unlock() {
    if (this._muted) return;
    try {
      if (this.ctx && this.ctx.state === 'running' && (!this.silentEl || !this.silentEl.paused)) return;
      this.hidden = false; // a touch means the page is in front
      if (!this.ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (_) { /* ignore */ }
        let ctx;
        try { ctx = new AC({ latencyHint: 'interactive' }); } catch (_) { ctx = new AC(); }
        this.attach(ctx);
        // 'interrupted' (a call, Siri, another app) or any system suspend needs
        // no bookkeeping: every later gesture checks the state and resumes.
      }
      this.bypassSilentSwitch();
      const ctx = this.ctx;
      if (ctx.state !== 'running') {
        this.arming = nowMs();
        const p = ctx.resume();
        if (p && p.catch) p.catch(noop);
        // a 1-sample buffer started inside the gesture un-sticks older iOS
        const s = ctx.createBufferSource();
        s.buffer = this.blip;
        s.connect(ctx.destination);
        s.onended = () => s.disconnect();
        s.start(0);
      }
    } catch (_) { /* audio is optional */ }
  }

  // Without navigator.audioSession, iOS routes Web Audio through the ringer
  // switch; a silent looping media element started in a gesture moves the page
  // into the playback category.
  bypassSilentSwitch() {
    if (!isIOS()) return;
    try { if (navigator.audioSession) { navigator.audioSession.type = 'playback'; return; } } catch (_) { /* ignore */ }
    try {
      if (!this.silentEl) {
        const el = document.createElement('audio');
        el.setAttribute('x-webkit-airplay', 'deny');
        el.setAttribute('playsinline', '');
        el.disableRemotePlayback = true;
        el.preload = 'auto';
        el.loop = true;
        el.src = silentWavURL(this.ctx ? this.ctx.sampleRate : 44100);
        this.silentEl = el;
      }
      if (this.silentEl.paused && !this.hidden) {
        const p = this.silentEl.play();
        if (p && p.catch) p.catch(noop);
      }
    } catch (_) { /* ignore */ }
  }

  suspend() {
    this.hidden = true;
    try { if (this.silentEl) this.silentEl.pause(); } catch (_) { /* ignore */ }
    if (this.ctx && !this.offline && this.ctx.state === 'running') {
      try { const p = this.ctx.suspend(); if (p && p.catch) p.catch(noop); } catch (_) { /* ignore */ }
    }
  }

  // Back from the background: try now; if iOS refuses, the next touch unlocks.
  resume() {
    this.hidden = false;
    if (!this.ctx || this.offline || this._muted) return;
    try {
      if (this.ctx.state !== 'running') { const p = this.ctx.resume(); if (p && p.catch) p.catch(noop); }
      if (this.silentEl && this.silentEl.paused) { const p = this.silentEl.play(); if (p && p.catch) p.catch(noop); }
    } catch (_) { /* ignore */ }
  }

  // ------------------------------------------------------------ graph
  attach(ctx) {
    this.ctx = ctx;
    this.offline = typeof OfflineAudioContext !== 'undefined' && ctx instanceof OfflineAudioContext;
    const sr = ctx.sampleRate;
    this.sr = sr;
    this.bufs.clear();

    // master: sum -> rumble cut -> warm shelf -> gentle compressor -> limiter -> mute
    const sum = ctx.createGain();
    sum.gain.value = 0.8;
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass'; hp.frequency.value = 40; hp.Q.value = 0.7;
    const shelf = ctx.createBiquadFilter();
    shelf.type = 'highshelf'; shelf.frequency.value = 6000; shelf.gain.value = -5;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -22; comp.knee.value = 12; comp.ratio.value = 3; comp.attack.value = 0.004; comp.release.value = 0.25;
    const lim = ctx.createDynamicsCompressor();
    lim.threshold.value = -7; lim.knee.value = 0; lim.ratio.value = 20; lim.attack.value = 0.001; lim.release.value = 0.12;
    // Compressors start "fully compressed" and release from there; release
    // fast for the first moments so the very first touch is heard at full size.
    const t0 = ctx.currentTime;
    try {
      comp.release.setValueAtTime(0.01, t0); comp.release.setValueAtTime(0.25, t0 + 0.35);
      lim.release.setValueAtTime(0.01, t0); lim.release.setValueAtTime(0.12, t0 + 0.35);
    } catch (_) { /* older engines: plain values */ }
    const trim = ctx.createGain();
    trim.gain.value = 0.72;
    const out = ctx.createGain();
    out.gain.value = this._muted ? 0 : 1;
    sum.connect(hp); hp.connect(shelf); shelf.connect(comp); comp.connect(lim); lim.connect(trim); trim.connect(out); out.connect(ctx.destination);
    this.sum = sum;
    this.out = out;

    this.pans = PANS.map((p) => {
      if (!ctx.createStereoPanner) return sum;
      const n = ctx.createStereoPanner();
      n.pan.value = p;
      n.connect(sum);
      return n;
    });

    // a small warm room for the wooden and musical sounds
    try {
      const verb = ctx.createConvolver();
      verb.buffer = roomIR(ctx);
      const ret = ctx.createGain();
      ret.gain.value = 0.55;
      verb.connect(ret); ret.connect(sum);
      const s1 = ctx.createGain(); s1.gain.value = 0.14; s1.connect(verb);
      const s2 = ctx.createGain(); s2.gain.value = 0.34; s2.connect(verb);
      this.sends = [null, s1, s2];
    } catch (_) { this.sends = [null, null, null]; }

    this.blip = ctx.createBuffer(1, 1, sr);
    this.white = whiteNoise(ctx, 2, 3);

    // the wind: a seamless loop through a low "rumble" band and an airy band
    const wsrc = ctx.createBufferSource();
    wsrc.buffer = windNoise(ctx, 4);
    wsrc.loop = true;
    const lo = ctx.createBiquadFilter();
    lo.type = 'lowpass'; lo.frequency.value = 380; lo.Q.value = 0.4;
    const air = ctx.createBiquadFilter();
    air.type = 'bandpass'; air.frequency.value = 800; air.Q.value = 0.8;
    const gLo = ctx.createGain(); gLo.gain.value = 0;
    const gAir = ctx.createGain(); gAir.gain.value = 0;
    wsrc.connect(lo); lo.connect(gLo); gLo.connect(sum);
    wsrc.connect(air); air.connect(gAir); gAir.connect(sum);
    wsrc.start(ctx.currentTime);
    this.windNodes = { src: wsrc, lo, air, gLo, gAir };
    this.windSet = { lo: -1, air: -1, f: -1 };

    // pre-render everything in the background so no touch waits for DSP
    if (!this.offline) {
      const keys = ['knock1', 'snap', 'zip', 'pluck', 'creak0', 'glass', 'pof', 'crackle', 'squeak', 'bomf',
        'knock0', 'knock2', 'creak1', 'stone', 'thud', 'drop', 'splash', 'tin', 'giggle', 'chirp0', 'chirp1', 'chirp2', 'flutter', 'rub', 'rustle'];
      for (let st = -10; st <= 5; st++) keys.push(noteKey(pentaFreq(st)));
      this.startWorker();
      if (this.worker) for (const k of keys) this.worker.postMessage({ key: k, sr });
      else this.warmOnMain(keys);
    }
  }

  startWorker() {
    if (this.worker !== undefined) return;
    this.worker = null;
    if (typeof Worker === 'undefined' || typeof Blob === 'undefined' || typeof URL === 'undefined') return;
    try {
      const w = new Worker(URL.createObjectURL(new Blob([workerSource()], { type: 'text/javascript' })));
      w.onmessage = (e) => {
        const d = e.data || {};
        if (!d.key || !d.x || d.sr !== this.sr || this.bufs.has(d.key) || !this.ctx) return;
        try { this.bufs.set(d.key, this.toBuffer(d.x)); } catch (_) { /* ignore */ }
      };
      w.onerror = () => { try { w.terminate(); } catch (_) { /* gone */ } if (this.worker === w) this.worker = null; };
      this.worker = w;
    } catch (_) { this.worker = null; }
  }

  // No worker: a few at a time between frames.
  warmOnMain(keys) {
    const ctx = this.ctx;
    const step = () => {
      if (!keys.length || this.ctx !== ctx) return;
      try { this.buf(keys.shift()); } catch (_) { /* ignore */ }
      setTimeout(step, 30);
    };
    setTimeout(step, 60);
  }

  toBuffer(x) {
    const b = this.ctx.createBuffer(1, x.length, this.sr);
    if (b.copyToChannel) b.copyToChannel(x, 0); else b.getChannelData(0).set(x);
    return b;
  }

  // Buffers by key; rendered here only if the worker has not delivered yet.
  buf(key) {
    let b = this.bufs.get(key);
    if (b) return b;
    const j = jobFor(key);
    if (!j) return null;
    this.mainRenders = (this.mainRenders || 0) + 1;
    b = this.toBuffer(renderJob(this.sr, j));
    this.bufs.set(key, b);
    return b;
  }

  noteBuf(f) { return this.buf(noteKey(f)); }

  // ------------------------------------------------------------ voices
  acquire(prio) {
    const now = this.now();
    let victim = null;
    for (const s of this.slots) {
      if (s.end <= now) return s;
      if (s.prio < prio && (!victim || s.prio < victim.prio || (s.prio === victim.prio && s.end < victim.end))) victim = s;
    }
    if (!victim) { this.dropped++; return null; }
    this.kill(victim, now + 0.005);
    return victim;
  }

  kill(s, t) {
    try { s.g.gain.cancelScheduledValues(t); s.g.gain.setTargetAtTime(0, t, 0.01); } catch (_) { /* ignore */ }
    const stop = (n) => { try { n.stop(t + 0.07); } catch (_) { /* already stopped */ } };
    if (Array.isArray(s.src)) s.src.forEach(stop); else if (s.src) stop(s.src);
    s.end = 0;
  }

  route(g, pan, wet) {
    const i = clamp(Math.round((pan + 0.45) / 0.225), 0, 4);
    g.connect(this.pans[i]);
    if (wet && this.sends[wet]) g.connect(this.sends[wet]);
  }

  // Play a buffer: {rate, gain, pan, wet (0/1/2), prio, dur, fade, attack, offset}
  play(name, t, o = {}) {
    const buf = typeof name === 'string' ? this.buf(name) : name;
    if (!buf) return null;
    const slot = this.acquire(o.prio == null ? 1 : o.prio);
    if (!slot) return null;
    const key = typeof name === 'string' ? name.replace(/\d+$/, '') : 'note';
    this.count[key] = (this.count[key] || 0) + 1;
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const rate = o.rate || 1;
    if (rate !== 1) src.playbackRate.value = rate;
    const g = ctx.createGain();
    const gain = o.gain == null ? 1 : o.gain;
    const offset = Math.min(o.offset || 0, buf.duration * 0.9);
    let end = t + (buf.duration - offset) / rate;
    if (o.attack) { g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + o.attack); }
    else g.gain.setValueAtTime(gain, t);
    if (o.dur && t + o.dur < end) {
      const f = Math.min(o.fade || 0.03, o.dur * 0.5);
      g.gain.setValueAtTime(gain, t + o.dur - f);
      g.gain.linearRampToValueAtTime(0, t + o.dur);
      end = t + o.dur;
    }
    src.connect(g);
    this.route(g, o.pan || 0, o.wet || 0);
    src.onended = () => { src.disconnect(); g.disconnect(); };
    src.start(t, offset);
    src.stop(end + 0.02);
    slot.end = end + 0.02; slot.prio = o.prio == null ? 1 : o.prio; slot.g = g; slot.src = src;
    return slot;
  }

  note(f, t, gain, pan, prio = 4) {
    if (this.noteLog) this.noteLog.push([t, f]);
    return this.play(this.noteBuf(f), t, { gain, pan, wet: 2, prio });
  }

  // Band-passed noise moving from f0 to f1 (air moving: puffs, whooshes).
  whoosh(t, dur, f0, f1, gain, { q = 0.8, attack = 0.3, pan = 0, prio = 1 } = {}) {
    const slot = this.acquire(prio);
    if (!slot) return;
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.white;
    src.loop = true;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass'; bp.Q.value = q;
    bp.frequency.setValueAtTime(f0, t);
    bp.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + attack);
    g.gain.linearRampToValueAtTime(0, t + dur);
    src.connect(bp); bp.connect(g);
    this.route(g, pan, 1);
    src.onended = () => { src.disconnect(); bp.disconnect(); g.disconnect(); };
    src.start(t, this.rand() * 1.5);
    src.stop(t + dur + 0.02);
    slot.end = t + dur + 0.02; slot.prio = prio; slot.g = g; slot.src = src;
  }

  // A soft sustained chord (triangle + sine per note through a low-pass).
  pad(freqs, t, { attack = 0.3, hold = 1, release = 1.5, gain = V.pad, pan = 0, cutoff = 1500 } = {}) {
    const slot = this.acquire(4);
    if (!slot) return;
    const ctx = this.ctx;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = cutoff; lp.Q.value = 0.5;
    const g = ctx.createGain();
    const end = t + attack + hold + release;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + attack);
    g.gain.setValueAtTime(gain, t + attack + hold);
    g.gain.exponentialRampToValueAtTime(gain * 0.01, end);
    g.gain.linearRampToValueAtTime(0, end + 0.03);
    const oscs = [];
    for (const f of freqs) {
      const a = ctx.createOscillator(); a.type = 'triangle'; a.frequency.value = f;
      const b = ctx.createOscillator(); b.type = 'sine'; b.frequency.value = f * 1.004;
      a.connect(lp); b.connect(lp);
      a.start(t); b.start(t); a.stop(end + 0.05); b.stop(end + 0.05);
      oscs.push(a, b);
    }
    lp.connect(g);
    this.route(g, pan, 2);
    oscs[0].onended = () => { for (const o of oscs) o.disconnect(); lp.disconnect(); g.disconnect(); };
    slot.end = end + 0.05; slot.prio = 4; slot.g = g; slot.src = oscs;
  }

  // The balloon filling at the roof line: a rubbery tone that rises with its
  // real radius (and hurries when taps hurry the filling), plus the air.
  startInflate(bl, t, pan, soft) {
    if (!bl || !bl.rFull) return;
    const slot = this.acquire(2);
    if (!slot) return;
    const ctx = this.ctx;
    const k0 = clamp(bl.r / bl.rFull, 0, 1);
    const rate = bl.inflateRate || 1;
    const T = (0.525 / rate) * Math.log((1.75 - k0) / 0.75);
    const fk = (k) => 190 + 250 * k;
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(fk(k0), t);
    osc.frequency.setTargetAtTime(fk(1.75), t, 0.525 / rate);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.Q.value = 3;
    lp.frequency.setValueAtTime(500, t);
    lp.frequency.linearRampToValueAtTime(1300, t + T);
    const ns = ctx.createBufferSource();
    ns.buffer = this.white; ns.loop = true;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass'; bp.Q.value = 0.9; bp.frequency.value = 1700;
    const gn = ctx.createGain(); gn.gain.value = 0.28;
    const g = ctx.createGain();
    const peak = V.inflate * soft;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(peak * 0.55, t + 0.05);
    g.gain.linearRampToValueAtTime(peak, t + T);
    g.gain.setTargetAtTime(0, t + T + 0.06, 0.04);
    osc.connect(lp); lp.connect(g);
    ns.connect(bp); bp.connect(gn); gn.connect(g);
    this.route(g, pan, 1);
    const end = t + T + 0.35;
    osc.start(t); ns.start(t, this.rand() * 1.5);
    osc.stop(end); ns.stop(end);
    osc.onended = () => { osc.disconnect(); lp.disconnect(); ns.disconnect(); bp.disconnect(); gn.disconnect(); g.disconnect(); };
    slot.end = end; slot.prio = 2; slot.g = g; slot.src = [osc, ns];
    if (this.inflating.length > 6) this.inflating.shift();
    this.inflating.push({ bl, slot, osc, g, rate, fk, done: false });
  }

  endInflate(v, t) {
    if (v.done) return;
    v.done = true;
    if (v.slot.src !== v.osc && !(Array.isArray(v.slot.src) && v.slot.src[0] === v.osc)) return; // stolen
    try {
      v.g.gain.cancelScheduledValues(t);
      v.g.gain.setTargetAtTime(0, t, 0.025);
      v.osc.frequency.cancelScheduledValues(t);
      v.osc.frequency.setTargetAtTime(v.fk(1), t, 0.02);
    } catch (_) { /* ignore */ }
    for (const n of v.slot.src) { try { n.stop(t + 0.2); } catch (_) { /* old Safari: one stop() only */ } }
    v.slot.end = t + 0.2;
  }

  // ------------------------------------------------------------ helpers
  gate(key, gap) {
    const n = this.now();
    if (n - (this.last[key] == null ? -99 : this.last[key]) < gap) return false;
    this.last[key] = n;
    return true;
  }

  panX(world, x) {
    if (x == null || !world || !world.cam || !world.cam.W || !Number.isFinite(x)) return 0;
    const c = world.cam;
    return clamp((c.sx(x) / c.W - 0.5) * 0.9, -0.45, 0.45);
  }

  // Lift of the finished balloons on this house (a filling one is not a
  // balloon yet).
  fullLift(ent) {
    let s = 0;
    for (const b of ent.balloons || []) if (!b.inflating && !b.dead) s += BALLOON.lift * Math.pow(clamp(b.r / b.rFull, 0, 1), 3);
    return s;
  }

  // ------------------------------------------------------------ events
  handle(e, world) {
    if (!this.ok || !e) return;
    try { this.dispatch(e, world); } catch (_) { /* sound must never stop the game */ }
  }

  dispatch(e, w) {
    const t = this.now() + LEAD;
    const R = this.rand;
    const ent = e.ent || null;
    const mass = e.mass || (ent && ent.bp ? ent.bp.mass : 2.6);
    switch (e.type) {
      case 'knock': {
        if (!this.gate('knock', 0.045)) break;
        const pan = this.panX(w, e.x);
        if (e.onWindow) {
          this.play('glass', t, { rate: 0.95 + R() * 0.08, gain: V.glass * (e.soft ? 0.5 : 1), pan, wet: 1, prio: 3 });
          break;
        }
        const stone = ent && ent.bp && ent.bp.id === 'stone';
        this.kv = (this.kv + 1) % 3;
        const rate = Math.pow(2.6 / mass, 0.35) * (0.97 + R() * 0.06);
        this.play(stone ? 'stone' : 'knock' + this.kv, t, { rate: stone ? 0.95 + R() * 0.06 : rate, gain: V.knock * (e.soft ? 0.45 : 1), pan, wet: 1, prio: 3 });
        break;
      }
      case 'spawn': {
        const soft = e.demo ? 0.55 : 1;
        const pan = this.panX(w, e.x);
        const top = this.panX(w, e.wrapX);
        this.play('snap', t, { rate: 0.95 + R() * 0.1, gain: V.snap * soft, pan, prio: 3 });
        this.play('zip', t + 0.012, { rate: 0.95 + R() * 0.1, gain: V.zip * soft, pan: top, prio: 1 });
        this.startInflate(e.balloon, t + 0.1, top, soft);
        break;
      }
      case 'inflated': {
        const bl = e.balloon;
        for (let i = this.inflating.length - 1; i >= 0; i--) {
          const v = this.inflating[i];
          if (v.bl === bl) { this.endInflate(v, t); this.inflating.splice(i, 1); }
        }
        // the rubber stops stretching: a tiny squeak as the neck settles
        const pan = this.panX(w, e.x);
        this.play('squeak', t, { rate: 1.3 + R() * 0.1, gain: V.tied * (bl && bl.demo ? 0.5 : 1), pan, prio: 1, dur: 0.08, fade: 0.04 });
        break;
      }
      case 'taut': {
        const bl = e.balloon || {};
        const pan = this.panX(w, e.x != null ? e.x : bl.x);
        const speed = Math.max(0, e.speed || 0);
        // a stretched thread: f ~ sqrt(tension) / length
        const tension = 1 + Math.min(2, speed / 220);
        const L = bl.L || 240;
        const rate = 1.25 * Math.sqrt(tension) * clamp(240 / L, 0.7, 1.4);
        const soft = bl.demo ? 0.6 : 1;
        if (this.gate('pin', 0.025)) {
          this.play('pluck', t, { rate, gain: V.pin * soft * Math.min(1, 0.5 + speed / 350) * (ent ? 1 : 0.6), pan, wet: 1, prio: 3 });
        }
        if (!ent || !ent.bp) break;
        const lift = ent.balloons ? this.fullLift(ent) : (e.ratio || 0) * mass;
        const step = ladderStep(ent.bp.mass, lift, ent.state !== 'air');
        // a string that bobs slack and taut again re-pings, but its note only
        // comes back once it has had a moment to settle
        const lastT = e.balloon ? this.noteT.get(e.balloon) : undefined;
        if (lastT != null && this.now() - lastT < 1.2) break;
        if (!this.gate('note', 0.06)) break;
        if (e.balloon) this.noteT.set(e.balloon, this.now());
        this.note(pentaFreq(step), t + 0.035, V.note * soft * (1 + Math.max(0, -step - 2) * 0.06), pan);
        break;
      }
      case 'creak': {
        // Creak events arrive every frame while a load shifts. One burst of
        // shifting = one groan of the joint, as long and loud as the burst.
        const now = this.now();
        this.creakE = (this.creakE || 0) * Math.exp(-(now - (this.creakT || now)) / 0.4) + Math.max(0, (e.amount || 0.2) - 0.17);
        this.creakT = now;
        if (this.creakE < 0.12 || now < (this.creakEnd || 0) - 0.08) break;
        const E = Math.min(1.2, this.creakE);
        this.creakE = 0;
        const rate = Math.pow(2.6 / mass, 0.45) * (0.8 + clamp(e.light || 0, 0, 1) * 0.65) * (0.96 + R() * 0.08);
        const dur = (0.14 + E * 0.4) / Math.sqrt(rate);
        this.creakEnd = t + dur;
        this.play('creak' + (R() < 0.5 ? 0 : 1), t, {
          rate, gain: V.creak * (0.4 + E * 0.6), pan: ent ? this.panX(w, ent.body.x) : 0,
          dur, fade: Math.min(0.12, dur * 0.4), attack: 0.02, offset: R() * 0.04, wet: 1, prio: 1,
        });
        break;
      }
      case 'peel': {
        this.peelN += e.n || 1;
        if (!this.gate('peel', 0.07)) break;
        const n = this.peelN;
        this.peelN = 0;
        const dur = clamp(0.03 + n * 0.012, 0.03, 0.18);
        this.play('crackle', t, { gain: V.peel * Math.min(1, 0.45 + n * 0.1), pan: this.panX(w, e.x), dur, fade: 0.02, offset: R() * 0.35, prio: 0 });
        break;
      }
      case 'liftoff': {
        const pan = this.panX(w, e.x);
        const tub = ent && ent.ground && ent.ground.kind === 'tub';
        // the last fibres (or the water) let go, the quilt springs back
        if (tub) this.play('splash', t, { rate: 0.8, gain: V.splash * 0.8, pan, wet: 1, prio: 3 });
        else {
          this.play('crackle', t, { gain: V.peel * 1.6, pan, dur: 0.24, fade: 0.08, offset: R() * 0.3, prio: 2 });
          this.play('pof', t + 0.02, { rate: 1.15, gain: V.pof * 0.6, pan, prio: 2 });
        }
        if (this.now() - this.lastChord < 4) {
          // it touched down and rose again: just the tonic, softly
          this.note(pentaFreq(0), t + 0.02, V.note * 0.55, pan * 0.5);
          break;
        }
        this.lastChord = this.now();
        // ... and the tune resolves on the tonic, right now: a rolled tonic
        // chord with a warm pad under it (a low C under the heavy houses)
        [0, 2, 3, 5].forEach((s, i) => this.note(pentaFreq(s), t + 0.02 + i * 0.09, V.note * (0.85 - i * 0.07), pan * 0.5));
        if (mass > 5) this.note(pentaFreq(-10), t + 0.02, V.note * 0.6, 0);
        this.pad([261.63, 392, 659.25], t + 0.1, { attack: 0.35, hold: 0.8, release: 1.8, gain: V.pad * 1.2 });
        break;
      }
      case 'land': {
        if (!this.gate('land', 0.2)) break;
        const s = clamp((e.speed || 0) / 200, 0.1, 1.5);
        const pan = this.panX(w, e.x);
        if (ent && ent.ground && ent.ground.kind === 'tub') {
          this.play('splash', t, { rate: 0.7, gain: V.splash * Math.min(1, 0.4 + s * 0.5), pan, wet: 1, prio: 3 });
        } else {
          const k = Math.min(1, 0.3 + s * 0.55);
          this.play('thud', t, { rate: Math.pow(2.6 / mass, 0.3), gain: V.land * k, pan, prio: 3 });
          this.play(ent && ent.bp && ent.bp.id === 'stone' ? 'stone' : 'knock0', t + 0.004, { rate: 0.75 * Math.pow(2.6 / mass, 0.35), gain: V.knock * 0.6 * k, pan, wet: 1, prio: 2 });
          this.play('crackle', t + 0.01, { gain: V.peel * 0.8, pan, dur: 0.1, offset: R() * 0.3, prio: 0 });
        }
        break;
      }
      case 'boing': {
        const bl = e.balloon || {};
        const pan = this.panX(w, e.x);
        const size = (bl.rFull || 40) / 40;
        this.play('bomf', t, { rate: (0.96 + R() * 0.08) / size, gain: V.bomf, pan, wet: 1, prio: 3 });
        this.play('squeak', t + 0.01, { rate: 0.95 + R() * 0.15, gain: V.squeak, pan, prio: 2 });
        this.play('pluck', t + 0.07, { rate: 0.95 * clamp(240 / (bl.L || 240), 0.7, 1.4), gain: V.pin * 0.55, pan, wet: 1, prio: 2 });
        break;
      }
      case 'grab':
        this.play('squeak', t, { rate: 0.85 + R() * 0.1, gain: V.squeak * 0.8, pan: this.panX(w, e.x), prio: 2 });
        break;
      case 'letgo': {
        const bl = e.balloon || {};
        const pan = this.panX(w, e.x);
        this.play('squeak', t, { rate: 1.1 + R() * 0.1, gain: V.squeak * 0.6, pan, prio: 1 });
        this.play('pluck', t + 0.03, { rate: 0.85 * clamp(240 / (bl.L || 240), 0.7, 1.4), gain: V.pin * 0.5, pan, wet: 1, prio: 2 });
        break;
      }
      case 'giggle': {
        if (!this.gate('giggle', 0.6)) break;
        const who = ent && ent.bp ? ent.bp.resident : 'chick';
        this.play('giggle', t, { rate: (RESIDENT_RATE[who] || 1) * (0.97 + R() * 0.06), gain: V.giggle, pan: ent ? this.panX(w, ent.body.x) : 0, wet: 1, prio: 3 });
        break;
      }
      case 'hint': {
        // the house shuffles on the quilt, then a paw knocks on the window glass
        const pan = ent ? this.panX(w, ent.body.x) : 0;
        this.play('pof', t, { rate: 0.9, gain: V.pof * 0.5, pan, prio: 2 });
        this.play('glass', t + 0.3, { rate: 0.98, gain: V.glass * 0.85, pan, wet: 1, prio: 2 });
        this.play('glass', t + 0.6, { rate: 1.0, gain: V.glass * 0.75, pan, wet: 1, prio: 2 });
        this.play('glass', t + 0.9, { rate: 0.99, gain: V.glass * 0.4, pan, wet: 1, prio: 2 });
        break;
      }
      case 'drip': {
        // heard when it lands in the tub's water (felt swallows the rest)
        if (!ent || !ent.ground || !ent.ground.waterAt) break;
        const st = w && w.sim ? w.sim.t : 0;
        const wl = ent.ground.waterAt(e.x, st);
        if (wl === -Infinity) break;
        const h = (e.y || 0) - wl;
        if (h > 700 || !this.gate('drip', 0.1)) break;
        const v0 = -Math.min(0, (e.vy || 0) * 0.2);
        const fall = h > 0 ? (v0 + Math.sqrt(v0 * v0 + 1800 * h)) / 900 : 0;
        this.play('drop', t + fall, { rate: 0.8 + R() * 0.5, gain: V.drip * (0.5 + R() * 0.5), pan: this.panX(w, e.x), wet: 1, prio: 0 });
        break;
      }
      case 'ripple': {
        if (!this.gate('ripple', 0.08)) break;
        this.play('splash', t, { rate: 0.95 + R() * 0.15, gain: V.splash * clamp(e.strength || 1, 0.2, 1.2), pan: this.panX(w, e.x), wet: 1, prio: 2 });
        break;
      }
      case 'poke': {
        if (!this.gate('poke', 0.06)) break;
        const pan = this.panX(w, e.x);
        this.play('pof', t, { rate: 0.95 + R() * 0.1, gain: V.pof, pan, prio: 2 });
        this.play('crackle', t, { gain: V.peel * 0.5, pan, dur: 0.06, offset: R() * 0.4, prio: 0 });
        break;
      }
      case 'puff': {
        if (!this.gate('puff', 0.15)) break;
        const pan = w && w.cam && w.cam.W ? clamp(((e.sx || 0) / w.cam.W - 0.5) * 0.9, -0.45, 0.45) : 0;
        this.whoosh(t, 0.55, 700, 300, V.whoosh * 1.7, { q: 1.1, attack: 0.07, pan });
        break;
      }
      case 'bump': {
        if (!this.gate('bump', 0.15)) break;
        this.play('tin', t, { rate: 0.97 + R() * 0.06, gain: V.tin * clamp((e.speed || 50) / 120, 0.25, 1), pan: this.panX(w, e.x), wet: 1, prio: 2 });
        break;
      }
      case 'birdsFly': {
        if (!this.gate('birds', 0.12)) break;
        const pan = this.panX(w, e.x);
        this.play('flutter', t, { rate: 0.9 + R() * 0.2, gain: V.flutter, pan, prio: 1 });
        this.play('chirp' + Math.floor(R() * 3), t + 0.08, { rate: 0.95 + R() * 0.15, gain: V.chirp, pan, wet: 1, prio: 1 });
        break;
      }
      case 'slip': {
        const pan = this.panX(w, e.x);
        this.play('zip', t, { rate: 0.7, gain: V.zip * 1.4, pan, prio: 2 });
        this.play('pluck', t + 0.1, { rate: 0.8, gain: V.pin * 0.45, pan, wet: 1, prio: 2 });
        break;
      }
      case 'rub': {
        if (!this.gate('rub', 0.12)) break;
        this.play('rub', t, { rate: 0.9 + R() * 0.2, gain: V.rub, pan: this.panX(w, e.x), prio: 1 });
        break;
      }
      case 'depart':
        // the house recedes into the far sky
        this.whoosh(t, 1.6, 1200, 340, V.whoosh * 0.9, { q: 1.8, attack: 0.35, pan: -0.2 });
        break;
      case 'travel':
        this.whoosh(t, 2.6, 300, 800, V.whoosh * 0.8, { q: 1.3, attack: 1.1, pan: 0.2 });
        break;
      case 'arrive': {
        const birds = ent && ent.birds ? ent.birds.filter((b) => b.state === 'perch').length : 0;
        if (birds) this.play('chirp' + Math.floor(R() * 3), t + 0.4, { rate: 1 + R() * 0.1, gain: V.chirp * 0.7, pan: 0.15, wet: 1, prio: 1 });
        break;
      }
      case 'finale':
        // rising with the last house into the evening air
        this.whoosh(t, 3.2, 260, 600, V.whoosh * 0.7, { q: 1.2, attack: 1.4 });
        break;
      case 'flotilla': {
        // every house that floated today is here: one full, soft chord
        this.pad([130.81, 196, 329.63, 440, 587.33], t, { attack: 1.4, hold: 2.6, release: 3.6, gain: V.pad * 0.9, cutoff: 1300 });
        [-5, -3, -2, -1, 0, 2].forEach((s, i) => this.note(pentaFreq(s), t + 0.2 + i * 0.16, V.note * (0.42 - i * 0.03), (i % 2 ? 0.2 : -0.2)));
        break;
      }
      case 'pageTurn':
        this.play('rustle', t, { gain: V.rustle, prio: 3, wet: 1 });
        this.play('pof', t + 1.95, { rate: 0.8, gain: V.pof * 0.45, prio: 2 });
        break;
      default:
    }
  }

  // ------------------------------------------------------------ per frame
  update(dt, world) {
    if (!this.ok || !world) return;
    try { this.tick(dt, world); } catch (_) { /* never stop the game */ }
  }

  tick(dt, world) {
    const now = this.now();
    // the filling balloons: follow the real radius (taps hurry it)
    for (let i = this.inflating.length - 1; i >= 0; i--) {
      const v = this.inflating[i];
      const bl = v.bl;
      if (!bl.inflating || bl.dead) { this.endInflate(v, now + LEAD); this.inflating.splice(i, 1); continue; }
      const r = bl.inflateRate || 1;
      if (r !== v.rate) {
        v.rate = r;
        const k = clamp(bl.r / bl.rFull, 0, 1);
        try {
          v.osc.frequency.cancelScheduledValues(now);
          v.osc.frequency.setValueAtTime(v.fk(k), now);
          v.osc.frequency.setTargetAtTime(v.fk(1.75), now, 0.525 / r);
        } catch (_) { /* ignore */ }
      }
    }

    this.windT -= dt;
    if (this.windT <= 0) { this.windT = 0.1; this.updateWind(world, now); }

    const cur = world.current;
    if (!cur || world.phase !== 'play') return;

    // the dachshund's paws on the wooden floor, one pat per step
    if (cur.loads) {
      for (const L of cur.loads) {
        const last = this.steps.get(L);
        if (last == null) { this.steps.set(L, L.step); continue; }
        if (L.step - last >= 15) {
          this.steps.set(L, L.step);
          const x = cur.body.wx(L.lx, L.ly);
          this.play('knock' + (Math.floor(L.step / 15) % 3), now + LEAD, { rate: 2.3 + this.rand() * 0.4, gain: V.paw, pan: this.panX(world, x), prio: 0 });
        }
      }
    }

    // water lapping in the tub while the boat rocks
    if (cur.ground && cur.ground.kind === 'tub' && cur.state === 'rest') {
      this.lapT -= dt;
      if (this.lapT <= 0) {
        this.lapT = 1.1 + this.rand() * 1.0;
        const bob = clamp(Math.abs(cur.body.vy) / 40, 0, 1);
        this.play('splash', now + LEAD, { rate: 0.45 + this.rand() * 0.1, gain: V.lap * (0.5 + bob), pan: this.panX(world, cur.body.x), prio: 0, attack: 0.03 });
      }
    }

    // birds now and then, by day
    this.birdT -= dt;
    if (this.birdT <= 0) {
      this.birdT = 6 + this.rand() * 9;
      if ((world.dusk || 0) < 0.3 && !world.finale && !world.page) {
        this.play('chirp' + Math.floor(this.rand() * 3), now + LEAD, { rate: 0.9 + this.rand() * 0.25, gain: V.birdAmb, pan: (this.rand() - 0.5) * 0.8, wet: 1, prio: 0 });
      }
    }
  }

  // Wind follows the gusts at the camera, grows with height and while we
  // travel with it, and settles in the evening.
  updateWind(world, now) {
    const wn = this.windNodes;
    if (!wn) return;
    const cam = world.cam || { x: 0, y: 0 };
    const wind = world.wind;
    const g = wind && wind.gustAt ? clamp(wind.gustAt(cam.x) || 0, 0, 1) : 0;
    const alt = clamp(((cam.y || 0) - 320) / 1600, 0, 1);
    const travel = wind ? clamp((wind.extra || 0) / 30, 0, 1) : 0;
    const calm = 1 - 0.65 * clamp(world.dusk || 0, 0, 1);
    const lo = V.windLow * (0.3 + 0.7 * g + 0.5 * alt + 0.6 * travel) * calm;
    const air = V.windAir * (0.25 + 1.0 * g + 0.8 * alt + 1.0 * travel) * calm;
    const f = 600 + 700 * g + 400 * alt + 200 * travel;
    const s = this.windSet;
    const ch = (a, b) => Math.abs(a - b) > Math.max(1e-4, Math.abs(b) * 0.03);
    try {
      if (ch(lo, s.lo)) { wn.gLo.gain.setTargetAtTime(lo, now, 0.4); s.lo = lo; }
      if (ch(air, s.air)) { wn.gAir.gain.setTargetAtTime(air, now, 0.4); s.air = air; }
      if (ch(f, s.f)) { wn.air.frequency.setTargetAtTime(f, now, 0.6); s.f = f; }
    } catch (_) { /* ignore */ }
  }
}
