// やわらかそざいあそび - おねがいクエスト (gentle, no fail state).
// A bunny asks for shapes; shape metrics (or tool events) complete them.
// Rewards: fanfare + confetti + a star sticker (persisted).
(function () {
  'use strict';
  const GAME = window.GAME;
  const U = GAME.U;

  const Quests = {
    stars: 0,
    active: null,
    _queue: [],
    _holdT: 0,      // condition must hold briefly (forgiving but real)
    _cooldown: 0,   // pause between quests
    _checkT: 0,
    _events: {},    // event counters for event-based quests
    enabled: true,
  };

  // check(m) returns progress 0..1 (>=1 means done)
  const DEFS = [
    { id: 'flat', icon: '🫓', text: 'ぺったんこに してね!',
      check: (m) => U.clamp((m.aspect - 1) / 1.6, 0, 1) },
    { id: 'long', icon: '🐍', text: 'ながーく のばしてね!',
      check: (m) => U.clamp((m.aspect - 1) / 2.2, 0, 1) },
    { id: 'split', icon: '✌️', text: 'ふたつに わけてね!',
      regions: true,
      check: (m, r) => (r >= 2 ? 1 : 0.2) },
    { id: 'round', icon: '🌕', text: 'まんまるに してね!',
      regions: true,
      check: (m, r) => (r === 1 ? U.clamp((1.6 - m.aspect) / 0.45, 0, 1) : 0.1) },
    { id: 'star', icon: '⭐', text: 'ほしの かたぬきを してね!',
      event: 'cutter-star' },
    { id: 'heart', icon: '💗', text: 'ハートの かたぬきを してね!',
      event: 'cutter-heart' },
    { id: 'paint', icon: '🖌️', text: 'いろを ぬってね!',
      event: 'painted', target: 900 },
    { id: 'sprinkle', icon: '🎊', text: 'トッピングを かけてね!',
      event: 'sprinkled', target: 14 },
    { id: 'poke', icon: '👉', text: 'いっぱい つんつん してね!',
      event: 'pokes', target: 8 },
  ];

  Quests.init = function () {
    try { Quests.stars = parseInt(localStorage.getItem('punipuni-stars') || '0', 10) || 0; } catch (e) {}
    GAME.HUD.setStars(Quests.stars, false);
    // easy pokes first, then a gentle shuffle
    const rand = U.rng(Date.now() & 0xffff);
    const rest = DEFS.slice(1);
    for (let i = rest.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [rest[i], rest[j]] = [rest[j], rest[i]];
    }
    Quests._queue = [DEFS[0], ...rest];
    Quests._cooldown = 6; // let them play freely first
    GAME.HUD.setQuest('🐰', '', false);

    // tapping the bubble skips to the next quest
    document.getElementById('quest-bubble').addEventListener('click', () => {
      if (Quests.active) Quests._next();
    });
  };

  Quests._next = function () {
    const q = Quests._queue.shift();
    Quests._queue.push(q);
    Quests.active = q;
    Quests._holdT = 0;
    Quests._events = {};
    GAME.HUD.setQuest(q.icon, q.text, true);
    GAME.HUD.setQuestProgress(0);
  };

  Quests.notify = function (kind, data) {
    if (kind === 'material') {
      // switching material resets transient event counters
      Quests._events = {};
      return;
    }
    if (!Quests.active) return;
    const q = Quests.active;
    if (kind === 'cutter' && q.event === 'cutter-' + data) Quests._complete();
    if (kind === 'painted' && q.event === 'painted') {
      Quests._events.painted = (Quests._events.painted || 0) + data;
      GAME.HUD.setQuestProgress(Quests._events.painted / q.target);
      if (Quests._events.painted >= q.target) Quests._complete();
    }
    if (kind === 'sprinkle' && q.event === 'sprinkled') {
      Quests._events.sprinkled = (Quests._events.sprinkled || 0) + 1;
      GAME.HUD.setQuestProgress(Quests._events.sprinkled / q.target);
      if (Quests._events.sprinkled >= q.target) Quests._complete();
    }
    if (kind === 'poke' && q.event === 'pokes') {
      Quests._events.pokes = (Quests._events.pokes || 0) + 1;
      GAME.HUD.setQuestProgress(Quests._events.pokes / q.target);
      if (Quests._events.pokes >= q.target) Quests._complete();
    }
  };

  Quests._complete = function () {
    if (!Quests.active) return;
    Quests.active = null;
    Quests.stars++;
    try { localStorage.setItem('punipuni-stars', String(Quests.stars)); } catch (e) {}
    GAME.HUD.setStars(Quests.stars, true);
    GAME.HUD.setQuest('🎉', 'できたー!', true);
    GAME.HUD.setQuestProgress(1);
    GAME.Audio.fanfare();
    const w = window.innerWidth, h = window.innerHeight;
    GAME.FX.confetti(w * 0.5, h * 0.35, 80);
    GAME.FX.stars(w * 0.5, h * 0.3, 12);
    const c = document.getElementById('celebrate');
    if (c) {
      c.innerHTML = 'できたー! ⭐';
      c.classList.add('show');
      setTimeout(() => c.classList.remove('show'), 1800);
    }
    Quests._cooldown = 4.5;
  };

  Quests.update = function (dt) {
    if (!Quests.enabled) return;
    if (Quests._cooldown > 0) {
      Quests._cooldown -= dt;
      if (Quests._cooldown <= 0) Quests._next();
      return;
    }
    if (!Quests.active || Quests.active.event) return;

    Quests._checkT -= dt;
    if (Quests._checkT > 0) return;
    Quests._checkT = 0.3;

    const m = GAME.Shapes.lastMetrics;
    if (!m.count) return;
    const q = Quests.active;
    const regions = q.regions ? GAME.Shapes.countRegions() : 1;
    const prog = q.check(m, regions);
    GAME.HUD.setQuestProgress(prog);
    if (prog >= 1) {
      Quests._holdT += 0.3;
      if (Quests._holdT >= 0.55) Quests._complete();
    } else {
      Quests._holdT = 0;
    }
  };

  GAME.Quests = Quests;
})();
