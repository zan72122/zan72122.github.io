/* キラキラ モデルごっこ — 効果音(Web Audio合成。外部ファイルなし) */
window.ModelGame = window.ModelGame || {};

ModelGame.audio = (function () {
  var ctx = null;
  var master = null;
  var unlocked = false;
  var muted = false;

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

  function setMuted(v) {
    muted = v;
    if (master) master.gain.value = v ? 0 : 0.6;
  }
  function isMuted() { return muted; }

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

  // ---- メロディ用: 音名 → 周波数 ----
  var NOTE = { C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.0,
               A4: 440.0, B4: 493.88, C5: 523.25, D5: 587.33, E5: 659.26,
               F5: 698.46, G5: 783.99, A5: 880.0, B5: 987.77, C6: 1046.5,
               D6: 1174.7, E6: 1318.5 };

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
    setMuted: setMuted,
    isMuted: isMuted,
    suspend: function () { if (ctx && ctx.state === 'running') ctx.suspend(); },
    resume: function () { if (ctx && unlocked && ctx.state === 'suspended') ctx.resume(); },

    // 汎用タップ音(ぽっ)
    tap: function () { tone(880, 0.09, { glide: 1320, vol: 0.18 }); },
    // ボタン決定(ぴこん)
    click: function () {
      tone(740, 0.07, { vol: 0.16 });
      tone(1180, 0.12, { vol: 0.16, when: 0.07 });
    },
    // タブ切り替え(ぴっ)
    tabSwitch: function () { tone(990, 0.07, { glide: 1240, vol: 0.13 }); },
    // アイテム装着(しゃらん)
    equip: function () {
      playSeq([['E5', 0.08], ['G5', 0.08], ['C6', 0.2]],
              { type: 'sine', vol: 0.16, sparkle: true });
    },
    // アイテムを外す(しゅん)
    unequip: function () { tone(620, 0.16, { glide: 280, vol: 0.12 }); },
    // きらきら(装飾音)
    sparkle: function () {
      tone(1760, 0.1, { type: 'sine', vol: 0.08 });
      tone(2349, 0.16, { type: 'sine', vol: 0.07, when: 0.06 });
    },
    // ハート(ぽよん)
    heartPop: function () { tone(520, 0.14, { glide: 940, type: 'triangle', vol: 0.18 }); },
    // 取り消し(しゅん)
    shrink: function () { tone(500, 0.18, { glide: 200, vol: 0.12 }); },
    // ランウェイ: 足音(こつっ)
    footstep: function () {
      noise(0.06, { freq: 320, freqEnd: 180, vol: 0.16, filterType: 'lowpass' });
    },
    // ランウェイ: ポーズの合図(りん)
    cue: function () {
      tone(1568, 0.25, { type: 'triangle', vol: 0.18 });
      tone(2093, 0.3, { type: 'sine', vol: 0.07, when: 0.02 });
    },
    // ランウェイ: ポーズ成功(きらーん)
    poseHit: function () {
      playSeq([['C5', 0.09], ['E5', 0.09], ['G5', 0.09], ['C6', 0.24]],
              { type: 'sine', vol: 0.18, sparkle: true });
    },
    // ランウェイ: タイミングずれ(やさしい ぽよん)
    poseMiss: function () { tone(360, 0.18, { glide: 300, type: 'triangle', vol: 0.12 }); },
    // メーターMAX(じゃじゃーん)
    meterMax: function () {
      playSeq([['C5', 0.11], ['D5', 0.11], ['E5', 0.11], ['G5', 0.11], ['C6', 0.45]],
              { vol: 0.2, sparkle: true });
    },
    // 拍手
    applause: function () {
      for (var i = 0; i < 16; i++) {
        noise(0.05, { freq: 1500 + Math.random() * 1500, vol: 0.1,
                      when: i * 0.07 + Math.random() * 0.03 });
      }
    },
    // カメラのシャッター(かしゃ)
    shutter: function () {
      noise(0.05, { freq: 2600, vol: 0.2 });
      tone(1800, 0.05, { vol: 0.14, when: 0.04 });
      noise(0.04, { freq: 1600, vol: 0.14, when: 0.07 });
    },
    // 保存チャイム(ぴろん)
    saveChime: function () {
      tone(1318.5, 0.12, { type: 'sine', vol: 0.16 });
      tone(1760, 0.25, { type: 'sine', vol: 0.16, when: 0.1 });
    },
    // タイトルのスタートファンファーレ
    fanfare: function () {
      playSeq([['C5', 0.14], ['C5', 0.14], ['C5', 0.14], ['G5', 0.5]],
              { vol: 0.2, sparkle: true });
    },
    // コーデ完成のお祝いメロディ
    celebrate: function () {
      playSeq([
        ['C5', 0.22], ['E5', 0.22], ['G5', 0.22], ['C6', 0.42], ['G5', 0.2],
        ['A5', 0.3], ['G5', 0.3], ['E5', 0.3], ['C5', 0.55]
      ], { vol: 0.18, sparkle: true });
    },
    // エンディングのジングル(ゆったり)
    endingJingle: function () {
      playSeq([
        ['E5', 0.3], ['G5', 0.3], ['A5', 0.45], ['G5', 0.3], ['E5', 0.3],
        ['D5', 0.45], ['E5', 0.3], ['C5', 0.85]
      ], { type: 'sine', vol: 0.15, sparkle: true });
    }
  };
})();
