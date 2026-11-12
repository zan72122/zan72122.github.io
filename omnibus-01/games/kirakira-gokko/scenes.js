/* キラキラ モデルごっこ — 各シーンの実装
   TITLE → CLOTHES → HEADBAND → ACCESSORIES → COMPLETE → RUNWAY → PHOTO → ENDING */
window.ModelGame = window.ModelGame || {};

ModelGame.buildScenes = function (game) {
  var art = ModelGame.art;
  var items = ModelGame.items;
  var avatarLib = ModelGame.avatar;
  var audio = ModelGame.audio;
  var L = game.layers;
  var S = game.state;
  var tween = game.tween, delay = game.delay, el = game.el, make = game.make;
  var lerp = game.lerp;

  var POSES = avatarLib.POSES;

  // ---------------------------------------------------------- アバター共通

  var av = null;
  var armState = { aL: 14, aR: -14 };
  var poseTw = [];

  function showAvatar(x, y, scale, opt) {
    opt = opt || {};
    var spot = el('avatar-spot');
    if (!spot) spot = make('g', { id: 'avatar-spot' }, L.scene);
    spot.innerHTML = '';
    av = avatarLib.render(spot, S.equip, { x: x, y: y, scale: scale, face: opt.face || 'open' });
    armState = { aL: 14, aR: -14 };
    if (opt.idle) av.flipG.setAttribute('class', 'av-flip bob-soft');
    return av;
  }

  function refreshAvatar(opt) {
    if (av) showAvatar(av.x, av.y, av.scale, opt || { idle: true });
  }

  // アバターローカル座標 → ステージ座標
  function avPoint(ax, ay) {
    return { x: av.x + ax * av.scale, y: av.y + ay * av.scale };
  }

  // ポーズ(腕+表情)を一瞬きめて戻る
  function strikePose(name, hold, noReturn) {
    poseTw.forEach(game.killTween);
    poseTw = [];
    var to = POSES[name] || POSES.normal;
    var fL = armState.aL, fR = armState.aR;
    av.setFace(to.face);
    if (name === 'spin') {
      poseTw.push(tween(0.6, function (t) {
        av.setFlip(Math.cos(t * Math.PI * 2));
      }, { ease: 'linear', done: function () { av.setFlip(1); } }));
    }
    poseTw.push(tween(0.22, function (t) {
      armState.aL = lerp(fL, to.aL, t);
      armState.aR = lerp(fR, to.aR, t);
      av.setArms(armState.aL, armState.aR);
    }, { ease: 'outBack', done: noReturn ? null : function () {
      poseTw.push(tween(0.25, function (t) {
        armState.aL = lerp(to.aL, 14, t);
        armState.aR = lerp(to.aR, -14, t);
        av.setArms(armState.aL, armState.aR);
      }, { delay: hold || 0.7, done: function () { av.setFace('open'); } }));
    } }));
  }

  // ---------------------------------------------------------- 共通UIパーツ

  function heartUI() { return art.heartCounter(1150, 42, S.hearts); }

  var CAT_DEFS = [
    { slot: 'dress', label: 'おようふく' },
    { slot: 'headband', label: 'カチューシャ' },
    { slot: 'earring', label: 'イヤリング' },
    { slot: 'ring', label: 'ゆびわ' },
    { slot: 'necklace', label: 'ネックレス' },
    { slot: 'bracelet', label: 'ブレスレット' },
    { slot: 'socks', label: 'くつした' },
    { slot: 'shoes', label: 'くつ' },
    { slot: 'bag', label: 'バッグ' },
    { slot: 'hairAcc', label: 'ヘアアクセ' }
  ];

  function catCell(def, x, y, active) {
    return '<g data-act="cat:' + def.slot + '" transform="translate(' + x + ',' + y + ')" style="cursor:pointer">' +
      '<circle r="40" fill="' + (active ? 'url(#g-pinkbtn)' : '#ffffff') + '" stroke="' +
      (active ? '#e8568d' : '#ffd0e0') + '" stroke-width="4"/>' +
      '<g pointer-events="none" transform="scale(1.05)">' + art.categoryIcon(def.slot) + '</g>' +
      art.txt(0, 58, 17, def.label, { fill: '#a44a66', stroke: '#ffffff', sw: 4.5 }) +
      '</g>';
  }

  // 装着中アイテムのチェックリスト行(コーデ完成・コーデをみる共用)
  function checkRows(x, y, w, rowH, fs) {
    var rows = [
      ['dress', 'おようふく'], ['headband', 'カチューシャ'], ['earring', 'イヤリング'],
      ['ring', 'ゆびわ'], ['necklace', 'ネックレス'], ['bracelet', 'ブレスレット'],
      ['bag', 'バッグ'], ['shoes', 'くつ']
    ];
    var html = '';
    rows.forEach(function (r, i) {
      var ry = y + i * rowH;
      var id = S.equip[r[0]];
      if (r[0] === 'dress' && !id) id = S.equip.top || S.equip.bottom;
      var name = id ? items.get(id).name : 'なし';
      var on = !!id;
      html += '<g transform="translate(' + x + ',' + ry + ')">' +
        '<rect x="0" y="' + (-rowH / 2 + 3) + '" width="' + w + '" height="' + (rowH - 6) + '" rx="' + (rowH / 2 - 3) +
        '" fill="#ffffff" stroke="#ffe3ee" stroke-width="2.5"/>' +
        '<g transform="translate(' + (rowH * 0.62) + ',0) scale(0.62)">' + art.categoryIcon(r[0] === 'dress' ? 'dress' : r[0]) + '</g>' +
        art.txt(rowH * 1.3, fs * 0.36, fs, r[1], { fill: '#e8568d', sw: 0, stroke: 'none', anchor: 'start' }) +
        art.txt(rowH * 1.3 + fs * 6.2, fs * 0.36, fs, name, { fill: '#a44a66', sw: 0, stroke: 'none', anchor: 'start', weight: '600' }) +
        '<g transform="translate(' + (w - rowH * 0.62) + ',0)">' +
        (on ? '<circle r="' + (rowH * 0.34) + '" fill="#ff5e96"/>' +
              '<path d="M' + (-rowH * 0.15) + ',0 L' + (-rowH * 0.04) + ',' + (rowH * 0.12) + ' L' + (rowH * 0.16) + ',' + (-rowH * 0.13) +
              '" fill="none" stroke="#ffffff" stroke-width="' + (rowH * 0.1) + '" stroke-linecap="round" stroke-linejoin="round"/>'
            : '<circle r="' + (rowH * 0.34) + '" fill="#f3e2e9"/>') +
        '</g></g>';
    });
    return html;
  }

  // ---------------------------------------------------------- ポップアップ

  function popupOpen() { return !!el('popup'); }

  function popupFrame(w, h, title, content) {
    var g = make('g', { id: 'popup' }, L.ui);
    g.innerHTML =
      '<rect x="-200" y="-200" width="1680" height="1120" fill="#a44a66" opacity="0.45" data-act="popup-close"/>' +
      '<g transform="translate(640,360)">' +
      '<rect x="' + (-w / 2) + '" y="' + (-h / 2) + '" width="' + w + '" height="' + h + '" rx="34" ' +
      'fill="url(#g-panel)" stroke="#ffb9d2" stroke-width="6" filter="url(#f-soft)"/>' +
      art.ribbonBanner(0, -h / 2 + 6, Math.min(w - 160, 430), 62, title, 30) +
      '<g data-act="popup-close" transform="translate(' + (w / 2 - 14) + ',' + (-h / 2 + 14) + ')" style="cursor:pointer">' +
      '<circle r="29" fill="url(#g-pinkbtn)" stroke="#ffffff" stroke-width="4"/>' +
      '<path d="M-11,-11 L11,11 M11,-11 L-11,11" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/></g>' +
      '<g id="popup-body">' + content + '</g>' +
      '</g>';
    return g;
  }
  function closePopup() {
    var g = el('popup');
    if (g) g.remove();
  }

  function showSettings() {
    var label = audio.isMuted() ? 'OFF' : 'ON';
    popupFrame(520, 320, 'せってい',
      art.txt(0, -40, 30, 'おとを ならす', { fill: '#a44a66', stroke: '#ffffff', sw: 6 }) +
      '<g data-act="sound-toggle" transform="translate(0,50)" style="cursor:pointer">' +
      '<rect x="-110" y="-42" width="220" height="84" rx="42" fill="url(#' +
      (audio.isMuted() ? 'g-purplebtn' : 'g-greenbtn') + ')" stroke="#ffffff" stroke-width="6" filter="url(#f-soft)"/>' +
      art.txt(0, 14, 40, label, { fill: '#ffffff', sw: 0, stroke: 'none' }) + '</g>');
  }

  function showNotice() {
    popupFrame(620, 340, 'おしらせ',
      art.starShape(0, -48, 30, '#ffd24d', '#e8a33d') +
      art.txt(0, 22, 30, 'あたらしい アイテムが', { fill: '#a44a66', stroke: '#ffffff', sw: 6 }) +
      art.txt(0, 66, 30, 'とうちゃく したよ♪', { fill: '#a44a66', stroke: '#ffffff', sw: 6 }) +
      art.heartShape(-220, 40, 18, '#ff9ec0', '#e8568d') + art.heartShape(220, 40, 18, '#ff9ec0', '#e8568d'));
  }

  function showGift() {
    popupFrame(620, 380, 'プレゼント',
      '<g transform="translate(0,-20) scale(1.2)">' + art.presentBox(0, 0, 1).replace('data-act="present"', 'data-act="gift-open"') + '</g>' +
      art.txt(0, 100, 28, 'プレゼントが とどいているよ!', { fill: '#a44a66', stroke: '#ffffff', sw: 6 }) +
      art.txt(0, 140, 24, 'はこを タップして あけてみよう', { fill: '#e8568d', stroke: '#ffffff', sw: 5 }));
  }

  function openGift() {
    closePopup();
    S.hearts += 10;
    var hc = el('heart-count');
    if (hc) hc.textContent = S.hearts;
    audio.poseHit();
    game.heartBurst(640, 360, 12);
    game.sparkleBurst(640, 320);
  }

  function showHowto() {
    var step = function (x, title, icon, sub) {
      return '<g transform="translate(' + x + ',30)">' +
        '<rect x="-105" y="-110" width="210" height="230" rx="24" fill="#ffffff" stroke="#ffd0e0" stroke-width="4"/>' +
        '<g transform="translate(0,-46) scale(1.7)">' + icon + '</g>' +
        art.txt(0, 52, 24, title, { fill: '#e8568d', stroke: '#ffffff', sw: 5 }) +
        art.txt(0, 88, 19, sub, { fill: '#a44a66', sw: 0, stroke: 'none' }) + '</g>';
    };
    popupFrame(800, 440, 'あそびかた',
      step(-250, '1. きせかえ', art.categoryIcon('dress'), 'すきなふくを えらぼう') +
      step(0, '2. ランウェイ', art.starShape(0, 0, 22, '#ffd24d', '#e8a33d'), 'タイミングよく ポーズ!') +
      step(250, '3. しゃしん',
        '<rect x="-20" y="-13" width="40" height="28" rx="7" fill="#7ed6f7" stroke="#3aa6dd" stroke-width="3"/>' +
        '<circle r="8" fill="#ffffff" stroke="#3aa6dd" stroke-width="3"/>', 'かわいく さつえい♪'));
  }

  function showCollection() {
    var html = '';
    var cols = 9;
    items.LIST.forEach(function (it, i) {
      var cx = -440 + (i % cols) * 110;
      var cy = -136 + Math.floor(i / cols) * 92;
      var equipped = S.equip[it.slot] === it.id;
      html += '<g transform="translate(' + cx + ',' + cy + ')">' +
        '<rect x="-50" y="-41" width="100" height="82" rx="15" fill="#ffffff" stroke="' +
        (equipped ? '#ffd24d' : '#ffe3ee') + '" stroke-width="' + (equipped ? 5 : 3) + '"/>' +
        '<g transform="translate(0,0) scale(0.5)">' + items.cardIcon(it, 0, 6) + '</g>' +
        (equipped ? '<g transform="translate(38,-30)">' + art.heartShape(0, 0, 10, '#ffd24d', '#e8a33d') + '</g>' : '') +
        '</g>';
    });
    popupFrame(1080, 620, 'コレクション', '<g transform="translate(0,36)">' + html + '</g>');
  }

  function showCoordCheck() {
    popupFrame(700, 560, 'いまのコーデ',
      '<g transform="translate(0,0)">' + checkRows(-310, -160, 620, 52, 21) + '</g>');
  }

  var pickerSlot = null;
  function showMiniPicker(slot) {
    pickerSlot = slot;
    var def = null;
    CAT_DEFS.forEach(function (d) { if (d.slot === slot) def = d; });
    var list = items.bySlot(slot);
    var html = '';
    list.forEach(function (it, i) {
      var cx = -160 + i * 160;
      var sel = S.equip[slot] === it.id;
      html += '<g data-act="item:' + it.id + '" transform="translate(' + cx + ',0)" style="cursor:pointer">' +
        '<rect x="-70" y="-78" width="140" height="156" rx="20" fill="url(#g-card)" stroke="' +
        (sel ? '#ffd24d' : '#ffd0e0') + '" stroke-width="' + (sel ? 6 : 4) + '"/>' +
        items.cardIcon(it, 0, -14) +
        art.txt(0, 60, 15, it.name, { fill: '#a44a66', sw: 0, stroke: 'none' }) +
        (sel ? '<g transform="translate(52,-60)"><circle r="15" fill="#ff5e96"/><path d="M-6,0 L-1,5 L7,-5" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g>' : '') +
        '</g>';
    });
    html += '<g data-act="unequip:' + slot + '" transform="translate(160,0)" style="cursor:pointer">' +
      '<rect x="-70" y="-78" width="140" height="156" rx="20" fill="#fff5f8" stroke="#e8d5dc" stroke-width="4"/>' +
      '<path d="M-22,-22 L22,22 M22,-22 L-22,22" stroke="#d8b8c4" stroke-width="8" stroke-linecap="round"/>' +
      art.txt(0, 60, 17, 'はずす', { fill: '#a44a66', sw: 0, stroke: 'none' }) + '</g>';
    popupFrame(620, 400, def ? def.label : '', '<g transform="translate(0,30)">' + html + '</g>');
  }

  // 共通: ポップアップ・ナビ系のアクション処理。trueなら消費済み
  function uiDown(p, act) {
    if (popupOpen()) {
      if (act === 'popup-close') { audio.tap(); closePopup(); return true; }
      if (act === 'sound-toggle') {
        audio.setMuted(!audio.isMuted());
        audio.click();
        closePopup(); showSettings();
        return true;
      }
      if (act === 'gift-open') { openGift(); return true; }
      if (act && act.indexOf('item:') === 0 && pickerSlot) {
        var id = act.slice(5);
        var on = items.equip(S.equip, id);
        if (on) audio.equip(); else audio.unequip();
        refreshAvatar();
        closePopup(); showMiniPicker(pickerSlot);
        return true;
      }
      if (act && act.indexOf('unequip:') === 0) {
        S.equip[act.slice(8)] = null;
        audio.unequip();
        refreshAvatar();
        closePopup();
        return true;
      }
      return true; // ポップアップ表示中は下をブロック
    }
    pickerSlot = null;
    if (act === 'settings') { audio.click(); showSettings(); return true; }
    if (act === 'notice') { audio.click(); showNotice(); return true; }
    if (act === 'present') { audio.click(); showGift(); return true; }
    return false;
  }

  // カテゴリアイコンのナビ
  function catNav(act) {
    if (!act || act.indexOf('cat:') !== 0) return false;
    var slot = act.slice(4);
    audio.tabSwitch();
    if (slot === 'dress') game.goto('clothes');
    else if (slot === 'headband') game.goto('headband');
    else if (['earring', 'ring', 'necklace', 'bracelet'].indexOf(slot) >= 0) game.goto('accessories');
    else showMiniPicker(slot);
    return true;
  }

  // ============================================================ TITLE

  var title = {
    enter: function () {
      L.bg.innerHTML = art.backgroundRoom();
      L.scene.innerHTML = art.roundStage(205, 622, 1.02);
      showAvatar(205, 612, 1.12, { idle: true });

      var catRow = '';
      CAT_DEFS.slice(0, 6).forEach(function (d, i) {
        catRow += catCell(d, 505 + i * 122, 0, false);
      });

      L.ui.innerHTML =
        '<g transform="translate(823,128)">' + art.titleLogo() + '</g>' +
        art.pillBtn({ x: 823, y: 318, w: 430, h: 88, grad: 'g-pinkbtn', act: 'start',
                      label: 'スタート', fs: 46, cls: 'pulse',
                      icon: art.heartShape(-140, -2, 18, '#ffffff', '#e8568d') }) +
        art.pillBtn({ x: 645, y: 408, w: 170, h: 56, grad: 'g-bluebtn', act: 'continue', label: 'つづき', fs: 26 }) +
        art.pillBtn({ x: 833, y: 408, w: 190, h: 56, grad: 'g-orangebtn', act: 'collection', label: 'コレクション', fs: 24 }) +
        art.pillBtn({ x: 1028, y: 408, w: 180, h: 56, grad: 'g-purplebtn', act: 'howto', label: 'あそびかた', fs: 24 }) +
        // ファッションカテゴリー
        '<g transform="translate(0,0)">' +
        art.panel(430, 480, 770, 200, { rx: 30 }) +
        art.ribbonBanner(815, 484, 300, 44, 'ファッションカテゴリー', 21) +
        '<g transform="translate(0,580)">' + catRow + '</g>' +
        '</g>' +
        art.gearBtn(78, 44) + heartUI() +
        art.noticeBtn(62, 648) +
        art.presentBox(1205, 630, 0.95) +
        art.txt(1205, 700, 17, 'プレゼントが とどいているよ!', { fill: '#e8568d', stroke: '#ffffff', sw: 5 });

      game.setHint(function () { return { type: 'tap', x: 823, y: 318 }; });

      // ときどき手をふる
      title._waveT = 2.2;
    },
    update: function (dt) {
      title._waveT -= dt;
      if (title._waveT <= 0 && av) {
        title._waveT = 4.5;
        strikePose('wave', 0.6);
        game.sparkleBurst(av.x + 60, av.y - 420);
      }
    },
    onDown: function (p, act) {
      if (uiDown(p, act)) return;
      if (act === 'start') {
        audio.fanfare();
        S.equip = items.bare();
        S.score = 0; S.meter = 0; S.stickers = []; S.photoTaken = false;
        game.goto('clothes');
        return;
      }
      if (act === 'continue') {
        audio.fanfare();
        game.loadCoord();
        S.score = 0; S.meter = 0; S.stickers = []; S.photoTaken = false;
        game.goto('clothes');
        return;
      }
      if (act === 'collection') { audio.click(); showCollection(); return; }
      if (act === 'howto') { audio.click(); showHowto(); return; }
      if (catNav(act)) {
        // カテゴリから入るときも遊べる状態に
        return;
      }
      if (act === 'avatar' || (p.x < 420 && p.y > 250)) {
        strikePose('heart', 0.6);
        audio.heartPop();
        game.heartBurst(p.x, p.y, 4);
      }
    }
  };

  // ============================================================ CLOTHES(おようふく)

  var TABS = [
    { id: 'all', label: 'すべて' }, { id: 'onepiece', label: 'ワンピース' },
    { id: 'tops', label: 'トップス' }, { id: 'bottoms', label: 'ボトムス' },
    { id: 'outer', label: 'アウター' }, { id: 'set', label: 'セット' }
  ];

  var clothes = {
    tab: 'all',
    enter: function () {
      clothes.tab = 'all';
      L.bg.innerHTML = art.backgroundRoom();
      L.scene.innerHTML = art.roundStage(200, 622, 0.95);
      showAvatar(200, 612, 1.05, { idle: true });

      var catRow = '';
      CAT_DEFS.forEach(function (d, i) {
        catRow += catCell(d, 105 + i * 120, 0, d.slot === 'dress');
      });

      L.ui.innerHTML =
        art.backBtn(80, 44) + heartUI() +
        art.panel(445, 66, 822, 478, { rx: 30, id: 'clothes-panel' }) +
        art.ribbonBanner(856, 60, 320, 58, 'おようふく', 32) +
        '<g id="clothes-tabs"></g><g id="clothes-grid"></g>' +
        art.pillBtn({ x: 90, y: 462, w: 170, h: 54, grad: 'g-purplebtn', act: 'random', label: 'きせかえ', fs: 24,
                      icon: art.sparkle(-62, 0, 0.55, 0) }) +
        art.pillBtn({ x: 90, y: 522, w: 170, h: 54, grad: 'g-bluebtn', act: 'strip', label: 'ぜんぶはずす', fs: 20 }) +
        art.pillBtn({ x: 705, y: 578, w: 330, h: 62, grad: 'g-pinkbtn', act: 'done', label: 'きがえをかんりょう♥', fs: 27, cls: 'pulse' }) +
        art.pillBtn({ x: 1055, y: 578, w: 280, h: 62, grad: 'g-orangebtn', act: 'recommend', label: 'おすすめコーデ', fs: 25,
                      icon: art.starShape(-112, 0, 13, '#fff48f', '#e8a33d') }) +
        art.panel(28, 604, 1224, 104, { rx: 28 }) +
        '<g transform="translate(28,648)">' + catRow + '</g>';

      clothes.renderTabs();
      clothes.renderGrid();
      game.setHint(function () { return { type: 'tap', x: 565, y: 240 }; });
    },
    renderTabs: function () {
      var g = el('clothes-tabs');
      var html = '';
      TABS.forEach(function (t, i) {
        var x = 510 + i * 128;
        var on = clothes.tab === t.id;
        html += '<g data-act="tab:' + t.id + '" transform="translate(' + x + ',106)" style="cursor:pointer">' +
          '<rect x="-60" y="-22" width="120" height="44" rx="22" fill="' + (on ? 'url(#g-pinkbtn)' : '#ffffff') +
          '" stroke="' + (on ? '#e8568d' : '#ffd0e0') + '" stroke-width="3.5"/>' +
          art.txt(0, 7, 20, t.label, on ? { fill: '#ffffff', sw: 0, stroke: 'none' } : { fill: '#a44a66', sw: 0, stroke: 'none' }) +
          '</g>';
      });
      g.innerHTML = html;
    },
    renderGrid: function () {
      var g = el('clothes-grid');
      var list = items.clothes().filter(function (it) {
        return clothes.tab === 'all' || it.sub === clothes.tab;
      });
      var html = '';
      list.forEach(function (it, i) {
        var cx = 555 + (i % 4) * 198;
        var cy = 218 + Math.floor(i / 4) * 200;
        var sel = S.equip[it.slot] === it.id;
        html += '<g data-act="item:' + it.id + '" transform="translate(' + cx + ',' + cy + ')" style="cursor:pointer">' +
          '<rect x="-90" y="-86" width="180" height="186" rx="20" fill="url(#g-card)" stroke="' +
          (sel ? '#ffd24d' : '#ffd0e0') + '" stroke-width="' + (sel ? 6 : 3.5) + '"' +
          (sel ? ' filter="url(#f-pinkglow)"' : '') + '/>' +
          items.cardIcon(it, 0, -16) +
          '<g transform="translate(0,74)">' +
          '<rect x="-56" y="-19" width="112" height="38" rx="19" fill="url(#' + (sel ? 'g-gold' : 'g-pinkbtn') + ')" stroke="#ffffff" stroke-width="3"/>' +
          art.txt(0, 7, 20, sel ? 'きている' : 'えらぶ', { fill: '#ffffff', sw: 0, stroke: 'none' }) + '</g>' +
          (it.isNew ? '<g transform="translate(-68,-68) rotate(-12)">' +
            '<rect x="-26" y="-14" width="52" height="28" rx="9" fill="#ffd24d" stroke="#e8a33d" stroke-width="2.5"/>' +
            art.txt(0, 6, 17, 'NEW', { fill: '#a44a66', sw: 0, stroke: 'none' }) + '</g>' : '') +
          '<g transform="translate(68,-66)">' + art.heartShape(0, 0, 11, sel ? '#ff5e96' : '#ffd9e6', '#e8568d') + '</g>' +
          '</g>';
      });
      if (!list.length) {
        html = art.txt(845, 300, 26, 'このカテゴリは じゅんびちゅう♪', { fill: '#d8a8bc', stroke: '#ffffff', sw: 6 });
      }
      g.innerHTML = html;
    },
    onDown: function (p, act) {
      if (uiDown(p, act)) return;
      if (act === 'back') { audio.click(); game.goto('title'); return; }
      if (act && act.indexOf('tab:') === 0) {
        clothes.tab = act.slice(4);
        audio.tabSwitch();
        clothes.renderTabs();
        clothes.renderGrid();
        return;
      }
      if (act && act.indexOf('item:') === 0) {
        var id = act.slice(5);
        var on = items.equip(S.equip, id);
        if (on) {
          audio.equip();
          refreshAvatar();
          var pt = avPoint(0, -180);
          game.sparkleBurst(pt.x, pt.y);
        } else {
          audio.unequip();
          refreshAvatar();
        }
        clothes.renderGrid();
        return;
      }
      if (act === 'random') {
        audio.equip();
        S.equip = items.randomCoord(S.equip.hairColor);
        refreshAvatar();
        clothes.renderGrid();
        game.sparkleBurst(200, 400);
        return;
      }
      if (act === 'strip') {
        audio.shrink();
        S.equip = items.bare();
        refreshAvatar();
        clothes.renderGrid();
        return;
      }
      if (act === 'recommend') {
        audio.poseHit();
        S.equip = JSON.parse(JSON.stringify(items.RECOMMEND));
        refreshAvatar();
        clothes.renderGrid();
        [[-60, -420], [60, -300], [0, -150], [-40, -60]].forEach(function (d, i) {
          delay(i * 0.12, function () {
            var pt = avPoint(d[0], d[1]);
            game.sparkleBurst(pt.x, pt.y);
          });
        });
        return;
      }
      if (act === 'done') { audio.click(); game.goto('headband'); return; }
      if (catNav(act)) return;
    }
  };

  // ============================================================ HEADBAND(カチューシャ)

  var headband = {
    tab: 'band',
    enter: function () {
      headband.tab = 'band';
      L.bg.innerHTML = art.backgroundRoom();
      L.scene.innerHTML = art.roundStage(225, 648, 1.05);
      showAvatar(225, 638, 1.28, { idle: true });

      L.ui.innerHTML =
        art.backBtn(80, 44) + heartUI() +
        art.ribbonBanner(790, 52, 330, 60, 'カチューシャ', 33) +
        '<g id="hb-tabs"></g>' +
        art.panel(495, 130, 590, 470, { rx: 30 }) +
        '<g id="hb-grid"></g>' +
        art.pillBtn({ x: 790, y: 656, w: 320, h: 64, grad: 'g-pinkbtn', act: 'done', label: 'つけてみる', fs: 30, cls: 'pulse',
                      icon: art.heartShape(-118, 0, 14, '#ffffff', '#e8568d') }) +
        art.hangerBtn(1198, 642, 'coordcheck') +
        art.noticeBtn(62, 648);

      headband.renderTabs();
      headband.renderGrid();
      game.setHint(function () { return { type: 'tap', x: 575, y: 215 }; });
    },
    renderTabs: function () {
      var g = el('hb-tabs');
      if (!g) return;
      var defs = [
        { id: 'hair', label: 'ヘア', icon: '<path d="M-10,-8 C-16,2 -14,12 -8,16 M0,-10 C-2,0 0,10 4,15 M10,-8 C14,2 12,10 8,15" stroke="#9a63d8" stroke-width="3.5" fill="none" stroke-linecap="round"/>' },
        { id: 'band', label: 'カチューシャ', icon: '<g transform="translate(0,4) scale(0.8)">' + art.categoryIcon('headband') + '</g>' }
      ];
      var html = '';
      defs.forEach(function (d, i) {
        var on = headband.tab === d.id;
        var x = 640 + i * 215;
        html += '<g data-act="hbtab:' + d.id + '" transform="translate(' + x + ',112)" style="cursor:pointer">' +
          '<rect x="-100" y="-26" width="200" height="52" rx="26" fill="' + (on ? 'url(#g-pinkbtn)' : '#ffffff') +
          '" stroke="' + (on ? '#e8568d' : '#ffd0e0') + '" stroke-width="4"/>' +
          '<g transform="translate(-66,0)" pointer-events="none">' + d.icon + '</g>' +
          art.txt(14, 8, 22, d.label, on ? { fill: '#ffffff', sw: 0, stroke: 'none' } : { fill: '#a44a66', sw: 0, stroke: 'none' }) +
          '</g>';
      });
      g.innerHTML = html;
    },
    renderGrid: function () {
      var g = el('hb-grid');
      if (!g) return;
      var html = '';
      if (headband.tab === 'hair') {
        var hairCols = avatarLib.HAIR_COLS.map(function (c) { return c.base; });
        var names = avatarLib.HAIR_COLS.map(function (c) { return c.name; });
        hairCols.forEach(function (c, i) {
          var cx = 600 + (i % 2) * 190;
          var cy = 260 + Math.floor(i / 2) * 190;
          var sel = (S.equip.hairColor || 0) === i;
          html += '<g data-act="hair:' + i + '" transform="translate(' + cx + ',' + cy + ')" style="cursor:pointer">' +
            '<circle r="64" fill="' + c + '" stroke="' + (sel ? '#ffd24d' : '#ffffff') + '" stroke-width="' + (sel ? 8 : 5) + '" filter="url(#f-soft)"/>' +
            '<path d="M-22,-30 C-34,-10 -34,14 -26,30" stroke="#ffffff" stroke-width="7" fill="none" opacity="0.4" stroke-linecap="round"/>' +
            art.txt(0, 96, 21, names[i], { fill: '#a44a66', stroke: '#ffffff', sw: 5 }) +
            (sel ? '<g transform="translate(44,-44)"><circle r="17" fill="#ff5e96"/><path d="M-7,0 L-1,6 L8,-6" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/></g>' : '') +
            '</g>';
        });
      } else {
        items.bySlot('headband').forEach(function (it, i) {
          var cx = 567 + (i % 4) * 148;
          var cy = 200 + Math.floor(i / 4) * 148;
          var sel = S.equip.headband === it.id;
          html += '<g data-act="item:' + it.id + '" transform="translate(' + cx + ',' + cy + ')" style="cursor:pointer">' +
            '<rect x="-66" y="-64" width="132" height="128" rx="18" fill="url(#g-card)" stroke="' +
            (sel ? '#ffd24d' : '#ffd0e0') + '" stroke-width="' + (sel ? 6 : 3) + '"' +
            (sel ? ' filter="url(#f-pinkglow)"' : '') + '/>' +
            items.cardIcon(it, 0, 8) +
            (sel ? '<g transform="translate(46,-44)"><circle r="16" fill="#ff5e96" stroke="#ffffff" stroke-width="3"/><path d="M-6,0 L-1,5 L7,-5" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g>' : '') +
            '</g>';
        });
      }
      g.innerHTML = html;
    },
    onDown: function (p, act) {
      if (uiDown(p, act)) return;
      if (act === 'back') { audio.click(); game.goto('clothes'); return; }
      if (act === 'coordcheck') { audio.click(); showCoordCheck(); return; }
      if (act && act.indexOf('hbtab:') === 0) {
        headband.tab = act.slice(6);
        audio.tabSwitch();
        headband.renderTabs();
        headband.renderGrid();
        return;
      }
      if (act && act.indexOf('hair:') === 0) {
        S.equip.hairColor = parseInt(act.slice(5), 10);
        audio.equip();
        refreshAvatar();
        headband.renderGrid();
        var pt = avPoint(0, -400);
        game.sparkleBurst(pt.x, pt.y);
        return;
      }
      if (act && act.indexOf('item:') === 0) {
        var on = items.equip(S.equip, act.slice(5));
        if (on) audio.equip(); else audio.unequip();
        refreshAvatar();
        headband.renderGrid();
        if (on) {
          var pt2 = avPoint(0, -420);
          game.sparkleBurst(pt2.x, pt2.y);
        }
        return;
      }
      if (act === 'done') { audio.click(); game.goto('accessories'); return; }
    }
  };

  // ============================================================ ACCESSORIES(アクセサリー)

  var ACC_ROWS = [
    { slot: 'earring', label: 'イヤリング' },
    { slot: 'ring', label: 'ゆびわ' },
    { slot: 'necklace', label: 'ネックレス' },
    { slot: 'bracelet', label: 'ブレスレット' }
  ];

  var accessories = {
    enter: function () {
      L.bg.innerHTML = art.backgroundRoom();
      L.scene.innerHTML = art.roundStage(195, 640, 0.98);
      showAvatar(195, 630, 1.18, { idle: true });

      var tabs = '';
      ACC_ROWS.forEach(function (r, i) {
        tabs += '<g data-act="accrow:' + i + '" transform="translate(' + (560 + i * 165) + ',104)" style="cursor:pointer">' +
          '<rect x="-78" y="-24" width="156" height="48" rx="24" fill="#ffffff" stroke="#ffd0e0" stroke-width="3.5"/>' +
          '<g transform="translate(-52,0) scale(0.62)" pointer-events="none">' + art.categoryIcon(r.slot) + '</g>' +
          art.txt(12, 7, 19, r.label, { fill: '#a44a66', sw: 0, stroke: 'none' }) + '</g>';
      });

      L.ui.innerHTML =
        art.backBtn(80, 44) + heartUI() +
        art.ribbonBanner(790, 48, 460, 60, 'アクセサリーをえらんでね', 30) +
        tabs +
        art.panel(465, 132, 650, 460, { rx: 30 }) +
        '<g id="acc-grid"></g>' +
        art.panel(30, 460, 320, 200, { rx: 24 }) +
        art.ribbonBanner(190, 462, 230, 40, 'つけているアクセサリー', 16) +
        '<g id="acc-worn"></g>' +
        art.pillBtn({ x: 1190, y: 520, w: 165, h: 58, grad: 'g-bluebtn', act: 'omakase', label: 'おまかせ', fs: 24,
                      icon: '<circle cx="-58" cy="0" r="13" fill="#ffffff"/><text x="-58" y="7" font-size="20" font-weight="800" text-anchor="middle" fill="#3aa6dd">?</text>' }) +
        art.pillBtn({ x: 1190, y: 650, w: 165, h: 70, grad: 'g-greenbtn', act: 'done', label: 'OK', fs: 36, cls: 'pulse',
                      icon: '<path d="M-52,-2 L-42,10 L-24,-14" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>', tx: 12 });

      accessories.renderGrid();
      accessories.renderWorn();
      game.setHint(function () { return { type: 'tap', x: 590, y: 190 }; });
    },
    renderGrid: function () {
      var g = el('acc-grid');
      if (!g) return;
      var html = '';
      ACC_ROWS.forEach(function (r, ri) {
        var ry = 192 + ri * 110;
        html += '<g transform="translate(545,' + ry + ')">' +
          '<rect x="-58" y="-17" width="116" height="34" rx="17" fill="#ffe3ee" stroke="#ffc7db" stroke-width="2.5"/>' +
          art.txt(0, 6, 17, r.label, { fill: '#e8568d', sw: 0, stroke: 'none' }) + '</g>';
        items.bySlot(r.slot).forEach(function (it, i) {
          var cx = 665 + i * 92;
          var sel = S.equip[r.slot] === it.id;
          html += '<g data-act="item:' + it.id + '" transform="translate(' + cx + ',' + ry + ')" style="cursor:pointer">' +
            '<rect x="-41" y="-46" width="82" height="92" rx="14" fill="url(#g-card)" stroke="' +
            (sel ? '#ffd24d' : '#ffd0e0') + '" stroke-width="' + (sel ? 5 : 2.5) + '"' +
            (sel ? ' filter="url(#f-pinkglow)"' : '') + '/>' +
            '<g transform="translate(0,0) scale(0.78)">' + items.cardIcon(it, 0, 2) + '</g>' +
            (sel ? '<g transform="translate(27,-30)"><circle r="12" fill="#ff5e96" stroke="#ffffff" stroke-width="2.5"/><path d="M-5,0 L-1,4 L6,-4" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/></g>' : '') +
            '</g>';
        });
      });
      g.innerHTML = html;
    },
    renderWorn: function () {
      var g = el('acc-worn');
      if (!g) return;
      var html = '';
      ACC_ROWS.forEach(function (r, i) {
        var id = S.equip[r.slot];
        var name = id ? items.get(id).name : '---';
        html += '<g transform="translate(50,' + (505 + i * 36) + ')">' +
          '<g transform="scale(0.5)">' + art.categoryIcon(r.slot) + '</g>' +
          art.txt(24, 6, 16, name, { fill: id ? '#a44a66' : '#d8b8c4', sw: 0, stroke: 'none', anchor: 'start', weight: '600' }) +
          '</g>';
      });
      g.innerHTML = html;
    },
    onDown: function (p, act) {
      if (uiDown(p, act)) return;
      if (act === 'back') { audio.click(); game.goto('headband'); return; }
      if (act && act.indexOf('accrow:') === 0) { audio.tabSwitch(); return; }
      if (act && act.indexOf('item:') === 0) {
        var id = act.slice(5);
        var on = items.equip(S.equip, id);
        if (on) audio.equip(); else audio.unequip();
        refreshAvatar();
        accessories.renderGrid();
        accessories.renderWorn();
        if (on) game.sparkleBurst(p.x, p.y);
        return;
      }
      if (act === 'omakase') {
        audio.poseHit();
        ACC_ROWS.forEach(function (r) {
          var list = items.bySlot(r.slot);
          S.equip[r.slot] = list[Math.floor(Math.random() * list.length)].id;
        });
        refreshAvatar();
        accessories.renderGrid();
        accessories.renderWorn();
        game.sparkleBurst(195, 350);
        return;
      }
      if (act === 'done') { audio.click(); game.goto('complete'); return; }
    }
  };

  // ============================================================ COMPLETE(コーデ完成)

  var complete = {
    enter: function () {
      L.bg.innerHTML = art.backgroundRoom();
      L.scene.innerHTML = art.roundStage(265, 655, 1.1);
      showAvatar(265, 645, 1.32, { idle: true });

      L.ui.innerHTML =
        art.gearBtn(78, 44) + heartUI() +
        art.ribbonBanner(700, 52, 500, 70, 'コーディネート完成!', 38, { grad: 'g-gold' }) +
        '<g transform="translate(700,116)">' +
        '<rect x="-180" y="-20" width="360" height="40" rx="20" fill="#ffffff" opacity="0.9" stroke="#ffb9d2" stroke-width="3"/>' +
        art.txt(0, 8, 22, 'とっても かわいく できたよ♪', { fill: '#e8568d', sw: 0, stroke: 'none' }) + '</g>' +
        art.panel(545, 150, 530, 478, { rx: 26 }) +
        art.ribbonBanner(810, 152, 260, 44, 'えらんだアイテム', 20) +
        '<g transform="translate(0,0)">' + checkRows(570, 212, 480, 54, 19) + '</g>' +
        art.pillBtn({ x: 700, y: 670, w: 330, h: 72, grad: 'g-pinkbtn', act: 'finish', label: 'コーデ完成', fs: 34, cls: 'pulse',
                      icon: art.heartShape(-125, 0, 16, '#ffffff', '#e8568d') }) +
        art.pillBtn({ x: 1040, y: 670, w: 240, h: 72, grad: 'g-bluebtn', act: 'next', label: 'つぎへ', fs: 32,
                      icon: '<path d="M70,-12 L92,0 L70,12" fill="#ffffff" stroke="#ffffff" stroke-width="4" stroke-linejoin="round"/>' }) +
        art.backBtn(80, 678) +
        art.presentBox(1205, 580, 0.85) +
        art.txt(1205, 648, 16, 'スナップを とってみよう♪', { fill: '#e8568d', stroke: '#ffffff', sw: 5 });

      game.setHint(function () { return { type: 'tap', x: 700, y: 670 }; });
    },
    onDown: function (p, act) {
      if (uiDown(p, act)) return;
      if (act === 'back') { audio.click(); game.goto('accessories'); return; }
      if (act === 'finish') {
        audio.celebrate();
        strikePose('heart', 1.2);
        for (var i = 0; i < 30; i++) delay(i * 0.05, game.confettiPiece);
        game.heartBurst(265, 300, 10);
        game.sparkleBurst(265, 250);
        return;
      }
      if (act === 'next') { audio.click(); game.goto('runway'); return; }
    }
  };

  // ============================================================ RUNWAY(ランウェイ)

  var POSE_BTNS = [
    { id: 'kira', label: 'キラッ★', grad: 'g-pinkbtn' },
    { id: 'wink', label: 'ウィンク♥', grad: 'g-pinkbtn' },
    { id: 'heart', label: 'ハートポーズ', grad: 'g-pinkbtn' },
    { id: 'spin', label: 'くるりん♪', grad: 'g-bluebtn' },
    { id: 'bye', label: 'バイバイ☆', grad: 'g-orangebtn' }
  ];
  var TOTAL_STEPS = 6;

  var runway = {
    enter: function () {
      L.bg.innerHTML = art.backgroundRunway();
      L.scene.innerHTML = '';
      showAvatar(640, 490, 0.85);

      runway.stepsDone = 0;
      runway.phase = 'wait';
      runway.timer = 1.2;
      runway.ringT = 0;
      runway.target = null;
      S.score = 0;
      S.meter = 0;

      var poseRow = '';
      POSE_BTNS.forEach(function (b, i) {
        var x = 412 + i * 114;
        var fig = {
          kira: '<path d="M0,10 L0,-4 M0,-4 L-9,6 M0,-4 L10,-14" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/><g transform="translate(14,-20) scale(0.5)"><path d="M0,-16 Q3,-3 16,0 Q3,3 0,16 Q-3,3 -16,0 Q-3,-3 0,-16Z" fill="#fff48f"/></g>',
          wink: '<circle r="13" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M-6,-2 L-3,-2 M2,-3 Q5,0 8,-3" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M-5,6 Q0,10 5,6" stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round"/>',
          heart: art.heartShape(0, 0, 14, '#ffffff', '#ffffff'),
          spin: '<path d="M10,-8 A12,12 0 1 0 12,4" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/><path d="M6,-14 L12,-8 L4,-2" fill="#ffffff"/>',
          bye: '<path d="M0,12 L0,-2 M0,-2 L-8,8 M0,-2 L8,-12 M4,-16 Q8,-20 12,-16 M2,-20 Q8,-26 14,-20" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" fill="none"/>'
        }[b.id];
        poseRow += '<g data-act="pose:' + b.id + '" transform="translate(' + x + ',648)" style="cursor:pointer">' +
          '<g id="poseb-' + b.id + '">' +
          '<circle r="46" fill="url(#' + b.grad + ')" stroke="#ffffff" stroke-width="5" filter="url(#f-soft)"/>' +
          '<g pointer-events="none" transform="translate(0,-6)">' + fig + '</g>' +
          art.txt(0, 32, 15, b.label, { fill: '#ffffff', sw: 0, stroke: 'none' }) +
          '</g>' +
          (b.id === 'heart' ? '<g transform="translate(0,-64)"><rect x="-44" y="-15" width="88" height="30" rx="15" fill="#ffd24d" stroke="#e8a33d" stroke-width="2.5"/>' +
            art.txt(0, 6, 16, 'おすすめ♪', { fill: '#a44a66', sw: 0, stroke: 'none' }) + '</g>' : '') +
          '</g>';
      });

      L.ui.innerHTML =
        art.gearBtn(78, 44) + heartUI() +
        art.ribbonBanner(640, 44, 290, 58, 'ランウェイ', 32) +
        '<g transform="translate(640,98)">' +
        '<rect x="-160" y="-17" width="320" height="34" rx="17" fill="#ffffff" opacity="0.9" stroke="#ffb9d2" stroke-width="3"/>' +
        art.txt(0, 7, 19, 'キラキラモデルウォーク!', { fill: '#e8568d', sw: 0, stroke: 'none' }) + '</g>' +
        // 左パネル
        art.panel(30, 120, 215, 330, { rx: 22 }) +
        art.txt(137, 158, 25, 'ステージ 6', { fill: '#e8568d', stroke: '#ffffff', sw: 6 }) +
        art.txt(137, 196, 19, '☆ テーマ ☆', { fill: '#caa23c', stroke: '#ffffff', sw: 4 }) +
        art.txt(137, 228, 24, 'ピンクで', { fill: '#ff5e96', stroke: '#ffffff', sw: 5 }) +
        art.txt(137, 258, 24, 'ときめき♥', { fill: '#ff5e96', stroke: '#ffffff', sw: 5 }) +
        art.txt(137, 298, 18, '・ミッション・', { fill: '#caa23c', stroke: '#ffffff', sw: 4 }) +
        art.txt(48, 328, 16, 'キラキラポーズを', { fill: '#a44a66', sw: 0, stroke: 'none', anchor: 'start' }) +
        art.txt(48, 352, 16, '３回 きめよう!', { fill: '#a44a66', sw: 0, stroke: 'none', anchor: 'start' }) +
        art.txt(48, 384, 16, 'さいごまで えがおで', { fill: '#a44a66', sw: 0, stroke: 'none', anchor: 'start' }) +
        art.txt(48, 408, 16, 'あるこう!', { fill: '#a44a66', sw: 0, stroke: 'none', anchor: 'start' }) +
        // 右: キラキラメーター
        '<g transform="translate(1130,96)">' +
        art.txt(0, -16, 20, 'キラキラメーター', { fill: '#e8568d', stroke: '#ffffff', sw: 5 }) +
        '<rect x="-105" y="0" width="210" height="26" rx="13" fill="#ffffff" stroke="#ffb9d2" stroke-width="3.5"/>' +
        '<clipPath id="meter-clip"><rect x="-101" y="4" width="202" height="18" rx="9"/></clipPath>' +
        '<rect id="meter-fill" x="-101" y="4" width="0" height="18" fill="url(#g-meter)" clip-path="url(#meter-clip)"/>' +
        '<g transform="translate(112,13)">' + art.heartShape(0, 0, 14, '#ff7fae', '#e8568d') + '</g>' +
        art.txt(0, 50, 17, '', { fill: '#ff5e96', stroke: '#ffffff', sw: 4 }).replace('<text ', '<text id="meter-msg" ') +
        '</g>' +
        // 右: スコア
        '<g transform="translate(1150,190)">' +
        '<rect x="-100" y="-26" width="200" height="108" rx="20" fill="url(#g-panel)" stroke="#ffb9d2" stroke-width="4" filter="url(#f-soft)"/>' +
        art.txt(0, 2, 21, 'スコア', { fill: '#e8568d', sw: 0, stroke: 'none' }) +
        '<text id="score-text" x="0" y="50" font-size="44" font-weight="800" text-anchor="middle" fill="#ff5e96">0000</text>' +
        art.txt(0, 74, 16, 'いいね♥', { fill: '#caa23c', sw: 0, stroke: 'none' }) +
        '</g>' +
        // 右: のこりステップ
        '<g transform="translate(1165,430)">' +
        '<circle r="82" fill="url(#g-panel)" stroke="#ffb9d2" stroke-width="5" filter="url(#f-soft)"/>' +
        art.txt(0, -38, 17, 'ゴールまで', { fill: '#e8568d', sw: 0, stroke: 'none' }) +
        art.txt(0, -16, 17, 'あと', { fill: '#e8568d', sw: 0, stroke: 'none' }) +
        '<text id="steps-left" x="0" y="38" font-size="62" font-weight="800" text-anchor="middle" fill="#ff5e96">' + TOTAL_STEPS + '</text>' +
        art.txt(0, 64, 18, 'ステップ!', { fill: '#e8568d', sw: 0, stroke: 'none' }) +
        '</g>' +
        // 下: ポーズボタン
        '<g transform="translate(640,576)">' +
        '<rect x="-330" y="-18" width="660" height="36" rx="18" fill="#ffffff" opacity="0.9" stroke="#ffb9d2" stroke-width="3"/>' +
        art.txt(0, 7, 19, '☆ タイミングよく ポーズボタン をタップしてみよう! ☆', { fill: '#e8568d', sw: 0, stroke: 'none' }) + '</g>' +
        poseRow +
        '<circle id="cue-ring" r="58" fill="none" stroke="#ffd24d" stroke-width="6" opacity="0"/>';

      game.setHint(null);
    },
    setMeter: function (v) {
      S.meter = Math.min(100, v);
      var f = el('meter-fill');
      if (f) f.setAttribute('width', (S.meter * 2.02).toFixed(0));
      var msg = el('meter-msg');
      if (msg) msg.textContent = S.meter >= 100 ? 'すごーい!キラキラMAX!' : (S.meter >= 60 ? 'いいかんじ♪' : '');
    },
    addScore: function (n) {
      S.score += n;
      var t = el('score-text');
      if (t) t.textContent = ('0000' + S.score).slice(-4);
    },
    startCue: function () {
      runway.phase = 'cue';
      runway.target = POSE_BTNS[Math.floor(Math.random() * POSE_BTNS.length)].id;
      runway.ringT = 1.8;
      audio.cue();
      var btn = el('poseb-' + runway.target);
      if (btn) btn.setAttribute('class', 'pose-glow glow');
      var idx = 0;
      POSE_BTNS.forEach(function (b, i) { if (b.id === runway.target) idx = i; });
      runway.targetX = 412 + idx * 114;
      var ring = el('cue-ring');
      if (ring) {
        ring.setAttribute('cx', runway.targetX);
        ring.setAttribute('cy', 648);
        ring.setAttribute('opacity', 0.95);
      }
      game.setHint(function () { return { type: 'tap', x: runway.targetX, y: 648 }; });
    },
    clearCue: function () {
      var btn = el('poseb-' + runway.target);
      if (btn) btn.setAttribute('class', '');
      var ring = el('cue-ring');
      if (ring) ring.setAttribute('opacity', 0);
      runway.target = null;
      game.setHint(null);
    },
    doStep: function () {
      runway.phase = 'walk';
      runway.stepsDone += 1;
      var sl = el('steps-left');
      if (sl) sl.textContent = TOTAL_STEPS - runway.stepsDone;
      audio.footstep();
      var t0 = runway.stepsDone - 1, t1 = runway.stepsDone;
      var y0 = 490 + (t0 / TOTAL_STEPS) * 80, y1 = 490 + (t1 / TOTAL_STEPS) * 80;
      var s0 = 0.85 + (t0 / TOTAL_STEPS) * 0.25, s1 = 0.85 + (t1 / TOTAL_STEPS) * 0.25;
      tween(0.55, function (t) {
        var hop = Math.sin(t * Math.PI) * 16;
        av.setPos(640, lerp(y0, y1, t) - hop, lerp(s0, s1, t));
      }, { ease: 'inOut', done: function () {
        if (runway.stepsDone >= TOTAL_STEPS) runway.finale();
        else { runway.phase = 'wait'; runway.timer = 0.7; }
      } });
    },
    finale: function () {
      runway.phase = 'finale';
      audio.meterMax();
      tween(0.8, function (t) { runway.setMeter(S.meter + (100 - S.meter) * t); }, {
        done: function () { runway.setMeter(100); }
      });
      runway.addScore(300);
      strikePose('kira', 1.6);
      delay(0.4, function () {
        audio.applause();
        for (var i = 0; i < 40; i++) delay(i * 0.04, game.confettiPiece);
        game.sparkleBurst(640, 300);
        game.heartBurst(640, 360, 10);
      });
      var g = make('g', { transform: 'translate(640,250)' }, L.ui);
      g.innerHTML = art.ribbonBanner(0, 0, 460, 76, 'キラキラ MAX!', 40, { grad: 'g-gold' });
      g.setAttribute('opacity', 0);
      tween(0.4, function (t) { g.setAttribute('opacity', t); });
      delay(2.6, function () { game.goto('photo'); });
    },
    update: function (dt) {
      if (runway.phase === 'wait') {
        runway.timer -= dt;
        if (runway.timer <= 0) runway.startCue();
      } else if (runway.phase === 'cue') {
        runway.ringT -= dt;
        var ring = el('cue-ring');
        if (ring) ring.setAttribute('r', 26 + (runway.ringT / 1.8) * 44);
        if (runway.ringT <= 0) {
          // タップなし → やさしく進む
          runway.clearCue();
          audio.poseMiss();
          runway.addScore(50);
          runway.setMeter(S.meter + 6);
          runway.doStep();
        }
      }
    },
    onDown: function (p, act) {
      if (uiDown(p, act)) return;
      if (act && act.indexOf('pose:') === 0 && runway.phase === 'cue') {
        var pose = act.slice(5);
        var hit = pose === runway.target;
        var fast = runway.ringT > 0 && runway.ringT / 1.8 < 0.35;
        runway.clearCue();
        strikePose(pose, 0.45);
        if (hit) {
          audio.poseHit();
          runway.addScore(fast ? 300 : 200);
          runway.setMeter(S.meter + 18);
          game.sparkleBurst(av.x, av.y - 250 * av.scale);
          game.heartBurst(p.x, p.y - 40, 4);
          var kg = make('g', { transform: 'translate(' + av.x + ',' + (av.y - 480 * av.scale) + ')' }, L.fx);
          kg.innerHTML = art.txt(0, 0, 40, 'キラッ!', { fill: '#ffd24d', stroke: '#ffffff', sw: 10 });
          tween(0.7, function (t) {
            kg.setAttribute('transform', 'translate(' + av.x + ',' + (av.y - 480 * av.scale - t * 40) + ')');
            kg.setAttribute('opacity', 1 - t * t);
          }, { done: function () { kg.remove(); } });
        } else {
          audio.poseMiss();
          runway.addScore(80);
          runway.setMeter(S.meter + 8);
        }
        delay(0.35, function () { if (runway.phase === 'cue') return; runway.doStep(); });
        runway.phase = 'posing';
        return;
      }
    }
  };

  // ============================================================ PHOTO(しゃしんさつえい)

  var STICKER_TYPES = ['heart', 'ribbon', 'star', 'bear', 'flower', 'crown'];

  var photo = {
    enter: function () {
      L.bg.innerHTML = art.backgroundRoom();
      L.scene.innerHTML = art.roundStage(330, 645, 1.0);
      showAvatar(330, 635, 1.22, { idle: true });
      photo.poseT = 2.2;
      photo.poseIdx = 0;
      photo.deco = false;
      photo.stickerSel = null;
      S.photoTaken = false;

      L.ui.innerHTML =
        art.backBtn(80, 44) + heartUI() +
        '<g transform="translate(480,42)">' +
        '<rect x="-280" y="-26" width="560" height="52" rx="26" fill="#ffffff" opacity="0.92" stroke="#ffb9d2" stroke-width="4" filter="url(#f-soft)"/>' +
        '<g transform="translate(-244,0)"><rect x="-20" y="-13" width="40" height="28" rx="7" fill="#ff5e96" stroke="#e8568d" stroke-width="2.5"/><circle r="8" fill="#ffffff"/></g>' +
        art.txt(20, 8, 24, 'モデルの かわいい しゃしんを とろう♪', { fill: '#e8568d', sw: 0, stroke: 'none' }) + '</g>' +
        art.viewfinder(75, 100, 620, 640) +
        '<g transform="translate(120,200) rotate(-8)">' +
        '<rect x="-58" y="-22" width="116" height="44" rx="14" fill="#fff48f" stroke="#e8c948" stroke-width="3"/>' +
        art.txt(0, 8, 22, 'かわいい!', { fill: '#a44a66', sw: 0, stroke: 'none' }) + '</g>' +
        // ポラロイド
        '<g id="polaroid" transform="translate(1040,330) rotate(2)" data-act="polaroid">' +
        '<rect x="-150" y="-258" width="300" height="500" rx="14" fill="#ffffff" stroke="#e8d5dc" stroke-width="4" filter="url(#f-soft)"/>' +
        '<rect x="-128" y="-232" width="256" height="330" rx="8" fill="#ffe9f2"/>' +
        '<g id="shot-area"></g><g id="shot-stickers"></g>' +
        '<g id="shot-empty">' + art.txt(0, -70, 22, 'ここに しゃしんが', { fill: '#d8a8bc', sw: 0, stroke: 'none' }) +
        art.txt(0, -38, 22, 'はいるよ♪', { fill: '#d8a8bc', sw: 0, stroke: 'none' }) + '</g>' +
        art.txt(0, 138, 19, 'きょうも かわいく', { fill: '#a44a66', sw: 0, stroke: 'none' }) +
        art.txt(0, 166, 19, 'へんしん できたね♡', { fill: '#a44a66', sw: 0, stroke: 'none' }) +
        '<g transform="translate(0,212)">' + art.heartShape(-30, 0, 10, '#ff9ec0', '#e8568d') +
        art.heartShape(30, 0, 10, '#ff9ec0', '#e8568d') + '</g>' +
        '</g>' +
        art.ribbonBanner(1040, 58, 300, 48, 'できあがりイメージ', 22) +
        // 飾りステッカー(ポラロイドのまわり)
        '<g transform="translate(855,180)">' + art.sticker('heart', 1.1) + '</g>' +
        '<g transform="translate(850,330)">' + art.sticker('ribbon', 1.0) + '</g>' +
        '<g transform="translate(860,470)">' + art.sticker('star', 0.9) + '</g>' +
        '<g transform="translate(1235,420)">' + art.sticker('bear', 1.0) + '</g>' +
        art.txt(1235, 330, 16, 'ステッカーを', { fill: '#e8568d', stroke: '#ffffff', sw: 4 }) +
        art.txt(1235, 350, 16, 'えらんでね♪', { fill: '#e8568d', stroke: '#ffffff', sw: 4 }) +
        '<g id="deco-palette"></g>' +
        '<g transform="translate(400,692)">' +
        '<rect x="-270" y="-20" width="540" height="40" rx="20" fill="#ffffff" opacity="0.9" stroke="#ffb9d2" stroke-width="3"/>' +
        art.txt(0, 8, 21, 'ベストショットを とって、おもいでを のこそう! ♥', { fill: '#e8568d', sw: 0, stroke: 'none' }) + '</g>' +
        '<g id="photo-next"></g>' +
        art.pillBtn({ x: 950, y: 660, w: 150, h: 64, grad: 'g-pinkbtn', act: 'snap', label: 'しゃしん', fs: 25, cls: 'pulse',
                      icon: '<g transform="translate(-55,0)"><rect x="-13" y="-9" width="26" height="19" rx="5" fill="#ffffff"/><circle r="5" fill="#ff5e96"/></g>', tx: 12 }) +
        art.pillBtn({ x: 1105, y: 660, w: 130, h: 64, grad: 'g-bluebtn', act: 'save', label: 'ほぞん', fs: 25 }) +
        art.pillBtn({ x: 1230, y: 660, w: 100, h: 64, grad: 'g-purplebtn', act: 'deco', label: 'デコ', fs: 25 });

      game.setHint(function () { return { type: 'tap', x: 950, y: 660 }; });
    },
    renderPalette: function () {
      var g = el('deco-palette');
      if (!g) return;
      if (!photo.deco) { g.innerHTML = ''; return; }
      var html = '<rect x="660" y="556" width="500" height="64" rx="22" fill="#ffffff" opacity="0.95" stroke="#c79bf2" stroke-width="4" filter="url(#f-soft)"/>';
      STICKER_TYPES.forEach(function (t, i) {
        var x = 705 + i * 82;
        var sel = photo.stickerSel === t;
        html += '<g data-act="stk:' + t + '" transform="translate(' + x + ',588)" style="cursor:pointer">' +
          (sel ? '<circle r="30" fill="#f3e8fd" stroke="#9a63d8" stroke-width="3.5"/>' : '<circle r="30" fill="#faf5fd" stroke="#e3d5f2" stroke-width="2.5"/>') +
          '<g pointer-events="none" transform="scale(0.85)">' + art.sticker(t, 1) + '</g></g>';
      });
      g.innerHTML = html;
    },
    renderStickers: function () {
      var g = el('shot-stickers');
      if (!g) return;
      var html = '';
      S.stickers.forEach(function (s, i) {
        html += '<g data-act="pstk:' + i + '" transform="translate(' + s.x + ',' + s.y + ')" style="cursor:pointer">' +
          '<g class="sticker-wiggle">' + art.sticker(s.type, 0.8) + '</g></g>';
      });
      g.innerHTML = html;
    },
    snap: function () {
      audio.shutter();
      S.photoTaken = true;
      // フラッシュ
      var flash = make('rect', { x: -200, y: -200, width: 1680, height: 1120, fill: '#ffffff', opacity: 0.95 }, L.fx);
      tween(0.5, function (t) { flash.setAttribute('opacity', 0.95 * (1 - t)); },
            { done: function () { flash.remove(); } });
      // ポラロイドに焼き付け(いまのポーズで複製)
      var shot = el('shot-area');
      var empty = el('shot-empty');
      if (empty) empty.innerHTML = '';
      if (shot) {
        shot.innerHTML = '<rect x="-128" y="-232" width="256" height="330" rx="8" fill="url(#g-bg)"/>';
        var clone = avatarLib.render(shot, S.equip, { x: 0, y: 88, scale: 0.56, face: 'open' });
        clone.setArms(armState.aL, armState.aR);
        game.sparkleBurst(1040, 200);
      }
      // つぎへボタン表示
      var nx = el('photo-next');
      if (nx && !nx.firstChild) {
        nx.innerHTML = art.pillBtn({ x: 780, y: 660, w: 150, h: 64, grad: 'g-greenbtn', act: 'next', label: 'つぎへ', fs: 26, cls: 'pulse' });
        game.setHint(function () { return { type: 'tap', x: 780, y: 660 }; });
      }
    },
    update: function (dt) {
      photo.poseT -= dt;
      if (photo.poseT <= 0) {
        photo.poseT = 2.4;
        var cycle = ['wave', 'wink', 'heart', 'kira', 'spin'];
        strikePose(cycle[photo.poseIdx % cycle.length], 0.9);
        photo.poseIdx += 1;
        game.sparkleBurst(330 + (Math.random() * 200 - 100), 300 + Math.random() * 150);
      }
    },
    onDown: function (p, act) {
      if (uiDown(p, act)) return;
      if (act === 'back') { audio.click(); game.goto('runway'); return; }
      if (act === 'snap') { photo.snap(); return; }
      if (act === 'save') {
        audio.saveChime();
        var toast = make('g', { transform: 'translate(640,180)' }, L.fx);
        toast.innerHTML = '<rect x="-160" y="-30" width="320" height="60" rx="30" fill="#ffffff" stroke="#7ed6f7" stroke-width="4" filter="url(#f-soft)"/>' +
          art.txt(0, 9, 26, 'ほぞんしました♥', { fill: '#3aa6dd', sw: 0, stroke: 'none' });
        toast.setAttribute('opacity', 0);
        tween(0.25, function (t) { toast.setAttribute('opacity', t); }, {
          done: function () {
            tween(0.4, function (t) { toast.setAttribute('opacity', 1 - t); },
                  { delay: 1.2, done: function () { toast.remove(); } });
          }
        });
        return;
      }
      if (act === 'deco') {
        audio.tabSwitch();
        photo.deco = !photo.deco;
        if (!photo.deco) photo.stickerSel = null;
        photo.renderPalette();
        return;
      }
      if (act && act.indexOf('stk:') === 0) {
        photo.stickerSel = act.slice(4);
        audio.tap();
        photo.renderPalette();
        return;
      }
      if (act && act.indexOf('pstk:') === 0) {
        var idx = parseInt(act.slice(5), 10);
        S.stickers.splice(idx, 1);
        audio.shrink();
        photo.renderStickers();
        return;
      }
      if (act === 'polaroid' && photo.stickerSel) {
        // ステージ座標 → ポラロイドのローカル座標(回転2度は無視できる範囲)
        var lx = p.x - 1040, ly = p.y - 330;
        if (lx > -130 && lx < 130 && ly > -235 && ly < 100 && S.stickers.length < 8) {
          S.stickers.push({ type: photo.stickerSel, x: lx, y: ly });
          audio.pop ? audio.pop() : audio.tap();
          photo.renderStickers();
          game.sparkleBurst(p.x, p.y);
        }
        return;
      }
      if (act === 'next') { audio.click(); game.goto('ending'); return; }
    }
  };

  // ============================================================ ENDING(あしたのおしゃれアイデア)

  var ending = {
    enter: function () {
      L.bg.innerHTML = art.backgroundRoom();
      L.scene.innerHTML = art.roundStage(170, 640, 0.9);
      showAvatar(170, 630, 1.05, { idle: true });
      ending.waveT = 1.5;
      audio.endingJingle();

      var card = function (cx, title, ids, caption, grad) {
        var icons = '';
        ids.forEach(function (id, i) {
          var it = items.get(id);
          icons += '<g transform="translate(' + (-70 + i * 70) + ',16) scale(0.55)">' + items.cardIcon(it, 0, 0) + '</g>';
        });
        return '<g data-act="card" transform="translate(' + cx + ',300)" style="cursor:pointer">' +
          '<rect x="-135" y="-145" width="270" height="300" rx="24" fill="url(#g-card)" stroke="#ffd0e0" stroke-width="4" filter="url(#f-soft)"/>' +
          '<rect x="-115" y="-128" width="230" height="44" rx="22" fill="url(#' + grad + ')" stroke="#ffffff" stroke-width="3.5"/>' +
          art.txt(0, -98, 19, title, { fill: '#ffffff', sw: 0, stroke: 'none' }) +
          '<rect x="-112" y="-66" width="224" height="156" rx="14" fill="#fff8fb" stroke="#ffe3ee" stroke-width="2.5"/>' +
          icons +
          art.txt(0, 128, 17, caption, { fill: '#e8568d', stroke: '#ffffff', sw: 4 }) +
          '</g>';
      };

      var hint = function (x, icon, l1, l2) {
        return '<g transform="translate(' + x + ',588)">' +
          '<rect x="-105" y="-40" width="210" height="84" rx="20" fill="#ffffff" opacity="0.95" stroke="#ffd0e0" stroke-width="3.5"/>' +
          '<g transform="translate(-72,0) scale(0.8)">' + icon + '</g>' +
          art.txt(14, -4, 16, l1, { fill: '#a44a66', sw: 0, stroke: 'none' }) +
          art.txt(14, 20, 16, l2, { fill: '#a44a66', sw: 0, stroke: 'none' }) + '</g>';
      };

      L.ui.innerHTML =
        art.gearBtn(78, 44) + heartUI() +
        '<g transform="translate(700,40)">' +
        '<rect x="-250" y="-22" width="500" height="44" rx="22" fill="#ffffff" opacity="0.92" stroke="#ffb9d2" stroke-width="3.5"/>' +
        art.txt(0, 8, 23, '遊んでくれて ありがとう! ☆彡', { fill: '#e8568d', sw: 0, stroke: 'none' }) + '</g>' +
        art.ribbonBanner(700, 102, 560, 66, 'あしたの おしゃれアイデア', 32, { grad: 'g-gold' }) +
        art.txt(700, 160, 21, 'いろいろなシーンにあわせた コーデを考えてみよう♪', { fill: '#a44a66', stroke: '#ffffff', sw: 5 }) +
        '<g transform="translate(430,186)">' +
        '<rect x="-110" y="-18" width="220" height="36" rx="18" fill="#ffe3ee" stroke="#ffc7db" stroke-width="3"/>' +
        art.txt(0, 7, 18, '♥ あしたの おすすめ ♥', { fill: '#e8568d', sw: 0, stroke: 'none' }) + '</g>' +
        card(430, '公園にいく日', ['t1', 'b1', 'sh2'], 'うごきやすくて かわいい!', 'g-greenbtn') +
        card(715, 'おたんじょう日パーティー', ['d3', 'hb12', 'bg1'], 'ドレスで とびきり かわいく!', 'g-purplebtn') +
        card(1000, '家族でおでかけ・おかいもの', ['o1', 'bg2', 'sh1'], 'カジュアルでも かわいく♪', 'g-bluebtn') +
        art.ribbonBanner(715, 510, 250, 44, 'おしゃれヒント', 21) +
        hint(470, art.bowShape(0, 0, 18, '#ff8ab5', '#e8568d'), 'すきないろを', 'えらぼう♪') +
        hint(715, art.sparkle(0, 0, 1, 0), 'アクセサリーで', 'きらきらアップ☆') +
        hint(960, art.categoryIcon('bag'), 'きぶんでコーデを', 'かえちゃおう!') +
        art.txt(1150, 580, 17, 'あしたも すてきな', { fill: '#e8568d', stroke: '#ffffff', sw: 4 }) +
        art.txt(1150, 602, 17, 'いちにちに なるね♪', { fill: '#e8568d', stroke: '#ffffff', sw: 4 }) +
        art.pillBtn({ x: 1140, y: 668, w: 250, h: 62, grad: 'g-pinkbtn', act: 'totitle', label: 'タイトルにもどる', fs: 24, cls: 'pulse' }) +
        art.noticeBtn(62, 648);

      game.setHint(function () { return { type: 'tap', x: 1140, y: 668 }; });

      for (var i = 0; i < 5; i++) delay(0.3 + i * 0.4, function () {
        game.heartBurst(150 + Math.random() * 300, 250 + Math.random() * 200, 2);
      });
    },
    update: function (dt) {
      ending.waveT -= dt;
      if (ending.waveT <= 0) {
        ending.waveT = 3.6;
        strikePose('bye', 0.8);
      }
    },
    onDown: function (p, act) {
      if (uiDown(p, act)) return;
      if (act === 'card') { audio.heartPop(); game.sparkleBurst(p.x, p.y); return; }
      if (act === 'totitle') {
        audio.click();
        game.saveCoord();
        game.goto('title');
        return;
      }
    }
  };

  return {
    title: title,
    clothes: clothes,
    headband: headband,
    accessories: accessories,
    complete: complete,
    runway: runway,
    photo: photo,
    ending: ending
  };
};
