// やわらかそざいあそび - the squish sound engine.
// A looping noise bed (filter + gain follow the sim's deformation rate) plus
// per-material grains: slime bubbles, snow crunches, honey glugs, jelly boings.
(function () {
  'use strict';
  const GAME = window.GAME;
  const U = GAME.U;

  const Squish = {
    _bedGain: null,
    _bedFilter: null,
    _started: false,
    _grainT: 0,
    _thudCooldown: 0,
    level: 0,
  };

  Squish.start = function () {
    const A = GAME.Audio;
    if (Squish._started || !A.ctx) return;
    Squish._started = true;
    const ctx = A.ctx;
    const src = ctx.createBufferSource();
    src.buffer = A._noiseBuf;
    src.loop = true;
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = 300;
    f.Q.value = 1.2;
    const g = ctx.createGain();
    g.gain.value = 0;
    src.connect(f); f.connect(g); g.connect(A.sfxGain);
    src.start();
    Squish._bedFilter = f;
    Squish._bedGain = g;
  };

  const BED = {
    clay:   { freq: 190, q: 0.9, gain: 0.30, wobble: 0 },
    dough:  { freq: 240, q: 1.1, gain: 0.26, wobble: 0 },
    slime:  { freq: 850, q: 3.2, gain: 0.22, wobble: 3.5 },
    bounce: { freq: 420, q: 1.6, gain: 0.10, wobble: 0 },
    crunch: { freq: 0,   q: 0,   gain: 0,    wobble: 0 }, // grains only
    goo:    { freq: 260, q: 2.4, gain: 0.26, wobble: 1.4 },
    fluff:  { freq: 320, q: 0.8, gain: 0.16, wobble: 0 },
  };

  Squish.update = function (dt, time) {
    const A = GAME.Audio;
    if (!A.ctx || !Squish._started) return;
    const Sim = GAME.Sim;
    const ev = Sim.events;
    const snd = Sim.material.sound;
    const bed = BED[snd.type] || BED.clay;

    // overall activity level 0..1: deformation while touching (or wobbling)
    const raw = U.clamp((ev.deformRate - 0.35) * 0.5, 0, 1);
    const lvl = raw * (0.3 + 0.7 * U.clamp(ev.touching * 2.5, 0, 1));
    Squish.level = U.damp(Squish.level, lvl, 12, dt);

    const p = snd.pitch || 1;
    if (bed.gain > 0) {
      let freq = bed.freq * p * (1 + Squish.level * 0.4);
      if (bed.wobble) freq *= 1 + 0.25 * Math.sin(time * bed.wobble * Math.PI * 2);
      Squish._bedFilter.frequency.setTargetAtTime(freq, A.ctx.currentTime, 0.05);
      Squish._bedFilter.Q.value = bed.q;
      Squish._bedGain.gain.setTargetAtTime(bed.gain * Squish.level, A.ctx.currentTime, 0.06);
    } else {
      Squish._bedGain.gain.setTargetAtTime(0, A.ctx.currentTime, 0.06);
    }

    // per-material grains
    Squish._grainT -= dt;
    if (Squish.level > 0.06 && Squish._grainT <= 0) {
      if (snd.type === 'crunch') {
        // crackly snow / magic sand: dense little ticks
        A.noiseBurst({ type: 'highpass', freq: 2500 * p, q: 1, dur: 0.035,
                       gain: 0.20 * Squish.level });
        A.noiseBurst({ type: 'bandpass', freq: 700 * p, q: 2, dur: 0.05,
                       gain: 0.14 * Squish.level, at: A.ctx.currentTime + 0.012 });
        Squish._grainT = 0.05 + Math.random() * 0.12 * (1.3 - Squish.level);
      } else if (snd.type === 'slime' && Math.random() < Squish.level) {
        // bubble pop: falling sine
        const f0 = (420 + Math.random() * 380) * p;
        A.blip(f0, 0.09, { type: 'sine', gain: 0.12 * Squish.level, glideTo: f0 * 0.3 });
        Squish._grainT = 0.08 + Math.random() * 0.2;
      } else if (snd.type === 'goo' && Math.random() < Squish.level * 0.8) {
        // glug
        const f0 = (240 + Math.random() * 120) * p;
        A.blip(f0, 0.16, { type: 'sine', gain: 0.10 * Squish.level, glideTo: f0 * 0.45 });
        Squish._grainT = 0.15 + Math.random() * 0.25;
      } else if (snd.type === 'fluff' && Math.random() < Squish.level * 0.5) {
        A.noiseBurst({ type: 'lowpass', freq: 500, dur: 0.12, gain: 0.08 * Squish.level });
        Squish._grainT = 0.2 + Math.random() * 0.3;
      } else {
        Squish._grainT = 0.08;
      }
    }

    // wall thud
    Squish._thudCooldown -= dt;
    if (ev.wallImpact > 0.004 && Squish._thudCooldown <= 0) {
      const s = U.clamp(ev.wallImpact * 60, 0.1, 1);
      Squish.thud(s);
      Squish._thudCooldown = 0.18;
    }
  };

  Squish.thud = function (strength) {
    const A = GAME.Audio;
    if (!A.ctx) return;
    A.blip(85, 0.16, { type: 'sine', gain: 0.22 * strength, glideTo: 45 });
    A.noiseBurst({ type: 'lowpass', freq: 220, dur: 0.1, gain: 0.14 * strength });
  };

  // the jelly boing on release after a stretch
  Squish.boing = function (stretch) {
    const A = GAME.Audio;
    if (!A.ctx) return;
    const Sim = GAME.Sim;
    const p = Sim.material.sound.pitch || 1;
    const s = U.clamp(stretch, 0, 1);
    const f0 = 200 * p * (1 + s * 0.4);
    A.blip(f0, 0.55, { type: 'triangle', gain: 0.20, glideTo: f0 * 0.72, glideT: 0.5,
                       vibrato: 9 + s * 7 });
  };

  GAME.Squish = Squish;
})();
