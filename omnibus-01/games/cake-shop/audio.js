/* ケーキやさん — 効果音(Web Audio合成。外部ファイルなし) */
window.CakeGame = window.CakeGame || {};

CakeGame.audio = (function () {
  var ctx = null;
  var master = null;
  var unlocked = false;

  function ensure() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.6;
      master.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return true;
  }

  // 最初のタッチで呼ぶ(iOSのオーディオ解禁)
  function unlock() {
    if (!ensure()) return;
    if (!unlocked) {
      var buf = ctx.createBuffer(1, 1, 22050);
      var src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(master);
      src.start(0);
      unlocked = true;
    }
  }

  function now() { return ctx ? ctx.currentTime : 0; }

  // 単音。glide指定で周波数をスライド
  function tone(freq, dur, opt) {
    if (!ctx) return;
    opt = opt || {};
    var t = now() + (opt.when || 0);
    var osc = ctx.createOscillator();
    var g = ctx.createGain();
    osc.type = opt.type || 'sine';
    osc.frequency.setValueAtTime(freq, t);
    if (opt.glide) osc.frequency.exponentialRampToValueAtTime(opt.glide, t + dur);
    var vol = opt.vol || 0.25;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + (opt.attack || 0.008));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g);
    g.connect(master);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }

  var noiseBuf = null;
  function getNoiseBuf() {
    if (!noiseBuf) {
      var len = ctx.sampleRate * 1.2;
      noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
      var d = noiseBuf.getChannelData(0);
      for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    }
    return noiseBuf;
  }

  function noise(dur, opt) {
    if (!ctx) return;
    opt = opt || {};
    var t = now() + (opt.when || 0);
    var src = ctx.createBufferSource();
    src.buffer = getNoiseBuf();
    src.loop = true;
    var f = ctx.createBiquadFilter();
    f.type = opt.filterType || 'bandpass';
    f.frequency.setValueAtTime(opt.freq || 1200, t);
    if (opt.freqEnd) f.frequency.exponentialRampToValueAtTime(opt.freqEnd, t + dur);
    f.Q.value = opt.q || 0.8;
    var g = ctx.createGain();
    var vol = opt.vol || 0.2;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + (opt.attack || 0.01));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(master);
    src.start(t);
    src.stop(t + dur + 0.05);
  }

  // ---- かき混ぜ音(連続ノイズ、速度でゲイン変調) ----
  var stirNodes = null;
  function stirStart() {
    if (!ctx || stirNodes) return;
    var src = ctx.createBufferSource();
    src.buffer = getNoiseBuf();
    src.loop = true;
    var f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 700;
    var g = ctx.createGain();
    g.gain.value = 0.0001;
    src.connect(f); f.connect(g); g.connect(master);
    src.start();
    stirNodes = { src: src, gain: g };
  }
  function stirSpeed(v) { // v: 0〜1
    if (!stirNodes) return;
    var target = Math.min(0.22, 0.02 + v * 0.25);
    stirNodes.gain.gain.setTargetAtTime(target, now(), 0.05);
  }
  function stirStop() {
    if (!stirNodes) return;
    var n = stirNodes;
    stirNodes = null;
    n.gain.gain.setTargetAtTime(0.0001, now(), 0.08);
    setTimeout(function () { try { n.src.stop(); } catch (e) {} }, 400);
  }

  // ---- メロディ用: 音名 → 周波数 ----
  var NOTE = { C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.0,
               A4: 440.0, B4: 493.88, C5: 523.25, D5: 587.33, E5: 659.26,
               F5: 698.46, G5: 783.99, A5: 880.0, C6: 1046.5 };

  function playSeq(seq, opt) {
    if (!ctx) return;
    opt = opt || {};
    var t = 0;
    for (var i = 0; i < seq.length; i++) {
      var s = seq[i]; // [音名 or null, 拍長]
      if (s[0]) {
        tone(NOTE[s[0]], s[1] * 0.95, {
          type: opt.type || 'triangle', vol: opt.vol || 0.18, when: t
        });
        if (opt.sparkle) {
          tone(NOTE[s[0]] * 2, s[1] * 0.5, { type: 'sine', vol: 0.05, when: t });
        }
      }
      t += s[1];
    }
    return t;
  }

  return {
    unlock: unlock,
    suspend: function () { if (ctx && ctx.state === 'running') ctx.suspend(); },
    resume: function () { if (ctx && unlocked && ctx.state === 'suspended') ctx.resume(); },

    // 汎用タップ音(ぽっ)
    tap: function () { tone(880, 0.09, { glide: 1320, vol: 0.18 }); },
    // ボタン決定(ぴこん)
    click: function () {
      tone(740, 0.07, { vol: 0.16 });
      tone(1180, 0.12, { vol: 0.16, when: 0.07 });
    },
    // 材料がぴょんと跳ぶ
    boing: function () { tone(300, 0.18, { glide: 700, type: 'triangle', vol: 0.2 }); },
    // ボウルにぽちゃん
    plop: function () {
      tone(520, 0.16, { glide: 180, vol: 0.25 });
      noise(0.12, { freq: 900, freqEnd: 300, vol: 0.1, when: 0.03 });
    },
    // トッピング配置(ぽん)
    pop: function () { tone(660, 0.1, { glide: 990, type: 'triangle', vol: 0.22 }); },
    // 取り消し(しゅん)
    shrink: function () { tone(500, 0.18, { glide: 200, vol: 0.12 }); },
    // ステップ完了(きらーん)
    success: function () {
      playSeq([['C5', 0.11], ['E5', 0.11], ['G5', 0.11], ['C6', 0.3]],
              { type: 'sine', vol: 0.2, sparkle: true });
    },
    // オーブンのチン!
    ding: function () {
      tone(2093, 1.1, { type: 'triangle', vol: 0.25 });
      tone(2637, 0.8, { type: 'sine', vol: 0.1, when: 0.01 });
    },
    // 焼ける音(じゅわー)
    sizzle: function () { noise(0.5, { freq: 3500, vol: 0.06, q: 0.5 }); },
    // 湯気(しゅっ)
    steam: function () { noise(0.3, { freq: 2400, freqEnd: 4000, vol: 0.08 }); },
    // ろうそく点火(しゅぼっ)
    ignite: function () {
      noise(0.15, { freq: 1800, freqEnd: 600, vol: 0.12 });
      tone(950, 0.12, { glide: 1500, vol: 0.1, when: 0.04 });
    },
    // 火を吹き消す(ふっ)
    blow: function () { noise(0.35, { freq: 600, freqEnd: 250, vol: 0.18, filterType: 'lowpass' }); },
    // 拍手
    applause: function () {
      for (var i = 0; i < 14; i++) {
        noise(0.05, { freq: 1500 + Math.random() * 1500, vol: 0.1,
                      when: i * 0.07 + Math.random() * 0.03 });
      }
    },
    // クリームを塗る(しゅるしゅる)
    smear: function () { noise(0.16, { freq: 500, vol: 0.07, filterType: 'lowpass' }); },
    stirStart: stirStart,
    stirSpeed: stirSpeed,
    stirStop: stirStop,
    // タイトルのスタートファンファーレ
    fanfare: function () {
      playSeq([['C5', 0.14], ['C5', 0.14], ['C5', 0.14], ['G5', 0.5]],
              { vol: 0.2, sparkle: true });
    },
    // 完成のお祝いメロディ(ハッピーバースデー風)
    celebrate: function () {
      playSeq([
        ['G4', 0.3], ['G4', 0.2], ['A4', 0.5], ['G4', 0.5], ['C5', 0.5], ['B4', 0.9],
        ['G4', 0.3], ['G4', 0.2], ['A4', 0.5], ['G4', 0.5], ['D5', 0.5], ['C5', 0.9],
        ['G4', 0.3], ['G4', 0.2], ['G5', 0.5], ['E5', 0.5], ['C5', 0.5], ['B4', 0.5], ['A4', 0.9]
      ], { vol: 0.18, sparkle: true });
    }
  };
})();
