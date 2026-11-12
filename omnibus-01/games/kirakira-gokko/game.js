/* キラキラ モデルごっこ — ゲーム本体(シーン管理・トゥイーン・FX・アイドルヒント) */
window.ModelGame = window.ModelGame || {};

(function () {
  var G = ModelGame;
  var SVGNS = 'http://www.w3.org/2000/svg';

  var stage, layers = {};
  var scenes = {};
  var current = null;
  var transitioning = false;

  // ------------------------------------------------------------ 共有state
  var state = {};
  function resetState() {
    // タイトルではおすすめコーデを着て立っている
    state.equip = JSON.parse(JSON.stringify(G.items.RECOMMEND));
    state.hearts = 100;
    state.score = 0;
    state.meter = 0;
    state.stickers = [];
    state.photoTaken = false;
  }
  resetState();

  // localStorage(つづき用)。失敗しても無視
  var SAVE_KEY = 'kirakira-model-coord';
  function saveCoord() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(state.equip)); } catch (e) {}
  }
  function loadCoord() {
    try {
      var s = localStorage.getItem(SAVE_KEY);
      if (s) { state.equip = JSON.parse(s); return true; }
    } catch (e) {}
    return false;
  }

  // ------------------------------------------------------------ ユーティリティ
  function el(id) { return document.getElementById(id); }
  function make(tag, attrs, parent) {
    var n = document.createElementNS(SVGNS, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function lerp(a, b, t) { return a + (b - a) * t; }

  // ------------------------------------------------------------ トゥイーン
  var tweens = [];
  var easings = {
    linear: function (t) { return t; },
    outQuad: function (t) { return t * (2 - t); },
    inQuad: function (t) { return t * t; },
    inOut: function (t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
    outBack: function (t) { var s = 1.6; t -= 1; return t * t * ((s + 1) * t + s) + 1; },
    outBounce: function (t) {
      if (t < 1 / 2.75) return 7.5625 * t * t;
      if (t < 2 / 2.75) { t -= 1.5 / 2.75; return 7.5625 * t * t + 0.75; }
      if (t < 2.5 / 2.75) { t -= 2.25 / 2.75; return 7.5625 * t * t + 0.9375; }
      t -= 2.625 / 2.75; return 7.5625 * t * t + 0.984375;
    }
  };
  function tween(dur, fn, opt) {
    opt = opt || {};
    var tw = { t: 0, dur: dur, fn: fn, dead: false,
               ease: easings[opt.ease || 'outQuad'], done: opt.done,
               delay: opt.delay || 0 };
    tweens.push(tw);
    return tw;
  }
  function killTween(tw) { if (tw) tw.dead = true; }
  function delay(sec, fn) { return tween(sec, function () {}, { done: fn, ease: 'linear' }); }

  // ------------------------------------------------------------ パーティクル
  var particles = [];
  var CONFETTI_COLORS = ['#ff5e96', '#ffd24d', '#7ed6f7', '#b78ef0', '#7be08a', '#ffffff', '#ff9ec0'];

  function spawnParticle(p) { particles.push(p); return p; }

  function burst(x, y, color, n) {
    n = n || 10;
    for (var i = 0; i < n; i++) {
      var a = Math.random() * Math.PI * 2;
      var sp = 140 + Math.random() * 220;
      var node = make('circle', { cx: 0, cy: 0, r: 5 + Math.random() * 7,
                                  fill: color || CONFETTI_COLORS[i % CONFETTI_COLORS.length] },
                      layers.fx);
      spawnParticle({ el: node, x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 80,
                      g: 600, age: 0, life: 0.7 + Math.random() * 0.4, fade: true });
    }
  }

  function sparkleBurst(x, y) {
    for (var i = 0; i < 8; i++) {
      var a = (i / 8) * Math.PI * 2 + Math.random() * 0.4;
      var sp = 120 + Math.random() * 160;
      var g = make('g', {}, layers.fx);
      g.innerHTML = '<path d="M0,-12 Q2,-2 12,0 Q2,2 0,12 Q-2,2 -12,0 Q-2,-2 0,-12Z" fill="#fff48f" stroke="#f7c948" stroke-width="2"/>';
      spawnParticle({ el: g, x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
                      g: 60, age: 0, life: 0.6 + Math.random() * 0.3, fade: true, spin: 200 });
    }
  }

  function heartBurst(x, y, n) {
    n = n || 7;
    for (var i = 0; i < n; i++) {
      var a = -Math.PI / 2 + (Math.random() - 0.5) * 1.8;
      var sp = 130 + Math.random() * 170;
      var g = make('g', {}, layers.fx);
      var s = 0.5 + Math.random() * 0.5;
      g.innerHTML = '<path transform="scale(' + s.toFixed(2) + ')" d="M0,-12 c-10,-14 -32,-9 -32,8 c0,14 19,24 32,34 c13,-10 32,-20 32,-34 c0,-17 -22,-22 -32,-8Z" fill="#ff7fae" stroke="#e8568d" stroke-width="4"/>';
      spawnParticle({ el: g, x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
                      g: 140, age: 0, life: 0.8 + Math.random() * 0.4, fade: true, spin: 60 });
    }
  }

  function confettiPiece() {
    var w = 10 + Math.random() * 10;
    var node = make('rect', { x: -w / 2, y: -w / 3, width: w, height: w * 0.66, rx: 3,
                              fill: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)] },
                    layers.fx);
    spawnParticle({ el: node, x: Math.random() * 1280, y: -30,
                    vx: Math.random() * 60 - 30, vy: 110 + Math.random() * 130,
                    g: 16, age: 0, life: 4.5, fade: false, spin: 90 + Math.random() * 240,
                    sway: 40 + Math.random() * 40, phase: Math.random() * 6.28, killY: 760 });
  }

  function updateParticles(dt) {
    for (var i = particles.length - 1; i >= 0; i--) {
      var p = particles[i];
      p.age += dt;
      p.vy += (p.g || 0) * dt;
      p.x += p.vx * dt + (p.sway ? Math.sin(p.age * 4 + p.phase) * p.sway * dt : 0);
      p.y += p.vy * dt;
      var done = p.age >= p.life || (p.killY && p.y > p.killY);
      if (done) {
        if (p.el.parentNode) p.el.parentNode.removeChild(p.el);
        particles.splice(i, 1);
        continue;
      }
      var k = p.age / p.life;
      var tf = 'translate(' + p.x.toFixed(1) + ',' + p.y.toFixed(1) + ')';
      if (p.spin) tf += ' rotate(' + (p.age * p.spin).toFixed(0) + ')';
      if (p.grow) tf += ' scale(' + (1 + k * p.grow / 10).toFixed(2) + ')';
      p.el.setAttribute('transform', tf);
      if (p.fade) p.el.setAttribute('opacity', Math.max(0, 1 - k * k).toFixed(2));
    }
  }
  function clearParticles() {
    particles.forEach(function (p) { if (p.el.parentNode) p.el.parentNode.removeChild(p.el); });
    particles = [];
  }

  // ------------------------------------------------------------ シーン遷移(円形ワイプ)
  function goto(name) {
    if (transitioning) return;
    if (!current) {
      current = scenes[name];
      current.enter();
      return;
    }
    transitioning = true;
    clearHintNow();
    var c = make('circle', { cx: 640, cy: 360, r: 0, fill: '#ff8ab5',
                             stroke: '#ffffff', 'stroke-width': 14 }, layers.wipe);
    tween(0.42, function (t) { c.setAttribute('r', t * 1500); }, {
      ease: 'inQuad',
      done: function () {
        if (current.exit) current.exit();
        clearParticles();
        layers.scene.innerHTML = '';
        layers.ui.innerHTML = '';
        current = scenes[name];
        current.enter();
        tween(0.46, function (t) { c.setAttribute('r', 1500 * (1 - t)); }, {
          ease: 'outQuad',
          done: function () { c.remove(); transitioning = false; resetIdle(); }
        });
      }
    });
  }

  // ------------------------------------------------------------ アイドルヒント(指マーク)
  var hintSpec = null;       // function → {type,x,y,...} を返す
  var idleTime = 0;
  var hintTweens = [];
  var hintPlaying = false;

  function setHint(fn) { hintSpec = fn; idleTime = 0; }

  function clearHintNow() {
    hintTweens.forEach(killTween);
    hintTweens = [];
    hintPlaying = false;
    var hand = el('hint-hand');
    if (hand) hand.setAttribute('opacity', 0);
    var rip = el('hint-ripple');
    if (rip) rip.setAttribute('opacity', 0);
  }

  function resetIdle() {
    idleTime = 0;
    if (hintPlaying) clearHintNow();
  }

  function handAt(x, y, scale, op) {
    var hand = el('hint-hand');
    hand.setAttribute('transform', 'translate(' + x + ',' + y + ') scale(' + (scale || 1) + ')');
    hand.setAttribute('opacity', op);
  }

  function ripple(x, y) {
    var rip = el('hint-ripple');
    rip.setAttribute('cx', x); rip.setAttribute('cy', y);
    hintTweens.push(tween(0.5, function (t) {
      rip.setAttribute('r', 14 + t * 56);
      rip.setAttribute('opacity', (1 - t) * 0.9);
    }));
  }

  function playHint() {
    if (!hintSpec || hintPlaying) return;
    var spec = hintSpec();
    if (!spec) return;
    hintPlaying = true;
    var seqDone = function () {
      hintPlaying = false;
      idleTime = 5.2; // 約3秒後にもう一度
    };
    if (spec.type === 'tap') {
      hintTweens.push(tween(0.25, function (t) { handAt(spec.x, spec.y, 1, t); }, {
        done: function () {
          var bounce = function (i) {
            if (i >= 2) {
              hintTweens.push(tween(0.3, function (t) { handAt(spec.x, spec.y, 1, 1 - t); },
                                    { delay: 0.25, done: seqDone }));
              return;
            }
            hintTweens.push(tween(0.36, function (t) {
              var s = t < 0.5 ? 1 - t * 0.5 : 0.75 + (t - 0.5) * 0.5;
              handAt(spec.x, spec.y, s, 1);
              if (t > 0.45 && t < 0.55) ripple(spec.x, spec.y);
            }, { delay: 0.12, done: function () { bounce(i + 1); } }));
          };
          bounce(0);
        }
      }));
    } else {
      hintPlaying = false;
    }
  }

  // ------------------------------------------------------------ 入力の振り分け
  function onDown(p, act) {
    if (transitioning) return;
    if (act === 'heart-plus') {
      state.hearts += 1;
      var hc = el('heart-count');
      if (hc) hc.textContent = state.hearts;
      heartBurst(p.x, p.y, 5);
      G.audio.heartPop();
      return;
    }
    if (current && current.onDown) current.onDown(p, act);
  }
  function onMove(p) {
    if (transitioning) return;
    if (current && current.onMove) current.onMove(p);
  }
  function onUp(p, act) {
    if (transitioning) return;
    if (current && current.onUp) current.onUp(p, act);
  }

  // ------------------------------------------------------------ メインループ
  var lastT = 0;
  function loop(ts) {
    requestAnimationFrame(loop);
    var dt = Math.min(0.05, (ts - lastT) / 1000 || 0.016);
    lastT = ts;

    for (var i = tweens.length - 1; i >= 0; i--) {
      var tw = tweens[i];
      if (tw.dead) { tweens.splice(i, 1); continue; }
      if (tw.delay > 0) { tw.delay -= dt; continue; }
      tw.t += dt;
      var k = Math.min(1, tw.t / tw.dur);
      tw.fn(tw.ease(k));
      if (k >= 1) {
        tweens.splice(i, 1);
        if (tw.done) tw.done();
      }
    }

    updateParticles(dt);

    if (current && current.update) current.update(dt);

    if (!transitioning && !hintPlaying && hintSpec) {
      idleTime += dt;
      if (idleTime > 8) playHint();
    }
  }

  // ------------------------------------------------------------ 初期化
  function init() {
    stage = el('stage');
    layers = {
      defs: el('art-defs'), bg: el('bg-layer'), scene: el('scene-layer'),
      ui: el('ui-layer'), fx: el('fx-layer'), hint: el('hint-layer'),
      wipe: el('wipe-layer')
    };
    layers.defs.innerHTML = G.art.defs();
    layers.bg.innerHTML = G.art.backgroundRoom();
    layers.hint.innerHTML = G.art.fingerHint();

    G.input.init(stage, {
      down: onDown, move: onMove, up: onUp,
      any: function () { G.audio.unlock(); resetIdle(); }
    });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) G.audio.suspend(); else G.audio.resume();
    });

    var api = {
      layers: layers, state: state, resetState: resetState,
      saveCoord: saveCoord, loadCoord: loadCoord,
      goto: goto, tween: tween, killTween: killTween, delay: delay,
      make: make, el: el, lerp: lerp,
      burst: burst, sparkleBurst: sparkleBurst, heartBurst: heartBurst,
      confettiPiece: confettiPiece, setHint: setHint, easings: easings
    };
    G.game = api;
    scenes = G.buildScenes(api);

    goto('title');
    requestAnimationFrame(loop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
