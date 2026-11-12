// やわらかそざいあそび - generative music-box BGM.
// Lookahead scheduler plays a seeded pentatonic lullaby: sparkly music-box
// plucks over a slow soft bass. Quiet by design - the star is the squish.
(function () {
  'use strict';
  const GAME = window.GAME;
  const U = GAME.U;

  const Music = {
    playing: false,
    _timer: null,
    _nextT: 0,
    _step: 0,
    _rand: null,
  };

  // C major pentatonic across two octaves
  const SCALE = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.7, 1318.5, 1567.98];
  const BASS = [130.81, 98.0, 110.0, 98.0]; // C3 G2 A2 G2
  const STEP = 60 / 66 / 2; // eighth notes at 66 bpm

  function noteAt(t, freq, gain, dur) {
    const A = GAME.Audio;
    const ctx = A.ctx;
    // music-box: sine + a bright partial, fast attack, long decay
    for (const [mul, g] of [[1, gain], [4, gain * 0.18]]) {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq * mul;
      const gn = ctx.createGain();
      gn.gain.setValueAtTime(0, t);
      gn.gain.linearRampToValueAtTime(g, t + 0.008);
      gn.gain.exponentialRampToValueAtTime(0.0008, t + dur);
      osc.connect(gn); gn.connect(A.musicGain);
      osc.start(t); osc.stop(t + dur + 0.05);
    }
  }

  function bassAt(t, freq, dur) {
    const A = GAME.Audio;
    const ctx = A.ctx;
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    const gn = ctx.createGain();
    gn.gain.setValueAtTime(0, t);
    gn.gain.linearRampToValueAtTime(0.09, t + 0.25);
    gn.gain.linearRampToValueAtTime(0, t + dur);
    osc.connect(gn); gn.connect(A.musicGain);
    osc.start(t); osc.stop(t + dur + 0.05);
  }

  function schedule() {
    const A = GAME.Audio;
    if (!A.ctx || !Music.playing) return;
    const ahead = A.ctx.currentTime + 0.35;
    while (Music._nextT < ahead) {
      const s = Music._step;
      const rand = Music._rand;
      // bass on each half bar (every 4 eighths)
      if (s % 4 === 0) {
        bassAt(Music._nextT, BASS[(s / 4) % BASS.length], STEP * 4.2);
      }
      // melody: mostly steps through the scale with rests, gentle contour
      if (rand() < 0.62) {
        const drift = Math.floor(rand() * 5) - 2;
        Music._melIdx = U.clamp((Music._melIdx || 3) + drift, 0, SCALE.length - 1);
        noteAt(Music._nextT, SCALE[Music._melIdx], 0.10 + rand() * 0.05, 1.4);
        // occasional twinkling echo an octave up
        if (rand() < 0.18) {
          noteAt(Music._nextT + STEP * 0.5, SCALE[Music._melIdx] * 2, 0.04, 0.9);
        }
      }
      Music._nextT += STEP;
      Music._step++;
    }
  }

  Music.start = function () {
    const A = GAME.Audio;
    if (!A.ctx || Music.playing) return;
    Music.playing = true;
    Music._rand = U.rng(20260702);
    Music._melIdx = 3;
    Music._nextT = A.ctx.currentTime + 0.1;
    Music._step = 0;
    Music._timer = setInterval(schedule, 90);
  };

  Music.stop = function () {
    Music.playing = false;
    if (Music._timer) { clearInterval(Music._timer); Music._timer = null; }
  };

  GAME.Music = Music;
})();
