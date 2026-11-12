// やわらかそざいあそび - HUD: material picker, tool row, color dots,
// reset / face / mute buttons. Giant hiragana+emoji buttons, one level deep.
(function () {
  'use strict';
  const GAME = window.GAME;
  const U = GAME.U;

  const HUD = {
    tool: 'finger',
    colorHex: null,
    colorRgb: [1, 0.5, 0.5],
    root: null,
    _els: {},
  };

  const TOOL_DEFS = [
    { id: 'finger', icon: '👆', label: 'ゆび' },
    { id: 'roller', icon: '🥖', label: 'のばす' },
    { id: 'cut', icon: '✂️', label: 'きる' },
    { id: 'star', icon: '⭐', label: 'かたぬき' },
    { id: 'heart', icon: '💗', label: 'かたぬき' },
    { id: 'flower', icon: '🌸', label: 'かたぬき' },
    { id: 'paint', icon: '🖌️', label: 'いろぬり' },
    { id: 'sprinkle', icon: '🎊', label: 'ふりかけ' },
  ];

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  HUD.build = function (root) {
    HUD.root = root;

    // ---- top bar ----
    const top = el('div', '');
    top.id = 'top-bar';
    const stars = el('div', '');
    stars.id = 'star-box';
    stars.innerHTML = '⭐<span class="star-num">0</span>';
    const quest = el('div', '');
    quest.id = 'quest-bubble';
    quest.innerHTML = '<span class="q-icon">🐰</span><span class="q-text"></span>' +
                      '<span class="q-progress"><i></i></span>';
    const btns = el('div', '');
    btns.id = 'top-buttons';
    const faceBtn = el('button', 'btn icon-btn', '🙂');
    faceBtn.id = 'face-btn';
    const muteBtn = el('button', 'btn icon-btn', '🔊');
    muteBtn.id = 'mute-btn';
    const resetBtn = el('button', 'btn icon-btn', '🔄');
    resetBtn.id = 'reset-btn';
    btns.append(faceBtn, muteBtn, resetBtn);
    top.append(stars, btns);
    root.appendChild(quest); // floats on its own layer below the top bar

    // ---- bottom dock ----
    const dock = el('div', '');
    dock.id = 'dock';
    const toolRow = el('div', '');
    toolRow.id = 'tool-row';
    for (const t of TOOL_DEFS) {
      const b = el('button', 'btn tool-btn' + (t.id === 'finger' ? ' sel' : ''),
        '<span class="t-icon">' + t.icon + '</span><span class="t-label">' + t.label + '</span>');
      b.dataset.tool = t.id;
      toolRow.appendChild(b);
    }
    const colorRow = el('div', '');
    colorRow.id = 'color-row';
    const matBar = el('div', '');
    matBar.id = 'mat-bar';
    for (const m of GAME.Materials.list) {
      const b = el('button', 'btn mat-btn',
        '<span class="m-icon">' + m.emoji + '</span><span class="m-label">' + m.label + '</span>');
      b.dataset.material = m.id;
      matBar.appendChild(b);
    }
    dock.append(toolRow, colorRow, matBar);

    root.append(top, dock);
    HUD._els = { top, dock, stars, quest, toolRow, colorRow, matBar, faceBtn, muteBtn, resetBtn };

    // ---- wiring ----
    matBar.addEventListener('click', (e) => {
      const b = e.target.closest('[data-material]');
      if (!b) return;
      HUD.selectMaterial(b.dataset.material);
      const idx = GAME.Materials.list.findIndex((m) => m.id === b.dataset.material);
      GAME.Audio.pluck(idx);
    });
    toolRow.addEventListener('click', (e) => {
      const b = e.target.closest('[data-tool]');
      if (!b) return;
      HUD.selectTool(b.dataset.tool);
      GAME.Audio.pluck(TOOL_DEFS.findIndex((t) => t.id === b.dataset.tool) + 2);
    });
    colorRow.addEventListener('click', (e) => {
      const d = e.target.closest('[data-color]');
      if (!d) return;
      HUD.selectColor(d.dataset.color);
      GAME.Audio.pluck(4 + [...colorRow.children].indexOf(d));
      // instant joy: tapping a color re-dyes the whole blob unless painting
      if (HUD.tool !== 'paint') {
        GAME.Sim.recolor(d.dataset.color);
      }
    });
    faceBtn.addEventListener('click', () => {
      const on = GAME.Face.toggle();
      faceBtn.classList.toggle('off', !on);
      faceBtn.textContent = on ? '🙂' : '😶';
      GAME.Audio.pluck(on ? 6 : 1);
    });
    muteBtn.addEventListener('click', () => {
      const muted = GAME.Audio.toggleMute();
      muteBtn.classList.toggle('off', muted);
      muteBtn.textContent = muted ? '🔇' : '🔊';
    });
    resetBtn.addEventListener('click', () => {
      GAME.Sim.reset();
      GAME.Audio.pluck(0, 0.2);
      GAME.FX.stars(window.innerWidth / 2, window.innerHeight * 0.3, 8);
    });
  };

  HUD.selectMaterial = function (id) {
    GAME.Sim.setMaterial(id);
    for (const b of HUD._els.matBar.children) {
      b.classList.toggle('sel', b.dataset.material === id);
    }
    HUD.buildColors();
    // pastel background tinted toward the material
    const c = U.hexToRgb(GAME.Sim.material.palette[0]);
    GAME.Renderer.bgTint = [
      U.lerp(1.0, c[0], 0.10),
      U.lerp(0.93, c[1], 0.10),
      U.lerp(0.95, c[2], 0.10),
    ];
    GAME.Quests.notify('material', id);
  };

  HUD.buildColors = function () {
    const row = HUD._els.colorRow;
    row.innerHTML = '';
    const pal = GAME.Sim.material.palette;
    for (const hex of pal) {
      const d = el('div', 'color-dot' + (hex === pal[0] ? ' sel' : ''));
      d.dataset.color = hex;
      d.style.background = hex;
      row.appendChild(d);
    }
    HUD.colorHex = pal[0];
    HUD.colorRgb = U.hexToRgb(pal[0]);
  };

  HUD.selectColor = function (hex) {
    HUD.colorHex = hex;
    HUD.colorRgb = U.hexToRgb(hex);
    for (const d of HUD._els.colorRow.children) {
      d.classList.toggle('sel', d.dataset.color === hex);
    }
  };

  HUD.selectTool = function (id) {
    HUD.tool = id;
    for (const b of HUD._els.toolRow.children) {
      b.classList.toggle('sel', b.dataset.tool === id);
    }
    GAME.Quests.notify('tool', id);
  };

  HUD.setStars = function (n, pop) {
    const box = HUD._els.stars;
    box.querySelector('.star-num').textContent = n;
    if (pop) {
      box.classList.remove('pop');
      void box.offsetWidth; // restart animation
      box.classList.add('pop');
    }
  };

  HUD.setQuest = function (icon, text, visible) {
    const q = HUD._els.quest;
    q.querySelector('.q-icon').textContent = icon;
    q.querySelector('.q-text').textContent = text;
    q.classList.toggle('hidden', !visible);
  };
  HUD.setQuestProgress = function (f) {
    HUD._els.quest.querySelector('.q-progress > i').style.width =
      Math.round(U.clamp(f, 0, 1) * 100) + '%';
  };

  // used by game.js to size the tray
  HUD.topHeight = () => HUD._els.top ? HUD._els.top.offsetTop + HUD._els.top.offsetHeight : 70;
  HUD.dockHeight = () => HUD._els.dock ? HUD._els.dock.offsetHeight : 170;

  GAME.HUD = HUD;
})();
