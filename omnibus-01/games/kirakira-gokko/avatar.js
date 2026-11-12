/* キラキラ モデルごっこ — ちびキャラクター(高精細・レイヤ合成・ポーズ・表情)
   ローカル座標: 原点=足元中心、上がマイナスy。全高 約470 / 頭中心 (0,-350)
   モックアップ準拠: 波ロングヘア(束+ハイライト)・大きな瞳・ふんわりチーク */
window.ModelGame = window.ModelGame || {};

ModelGame.avatar = (function () {
  var SKIN_LINE = '#d99a78';

  // 髪の色パレット(0:ブラウン 1:こげちゃ 2:きんいろ 3:さくら)
  var HAIR_COLS = [
    { name: 'ブラウン', base: '#8c5f3d', dark: '#6a4528', light: '#c89a6e', deep: '#54341c' },
    { name: 'こげちゃ', base: '#5f4026', dark: '#462d18', light: '#8a6844', deep: '#33200f' },
    { name: 'きんいろ', base: '#e9bc6e', dark: '#c08c3e', light: '#f7dfa0', deep: '#9a6c28' },
    { name: 'さくら',   base: '#f4a0c0', dark: '#d97aa4', light: '#ffd3e3', deep: '#bb5f8b' }
  ];

  // アンカー表(アイテムの描画位置の目安)
  var A = {
    head: { x: 0, y: -350, r: 80 },
    hairTop: { x: 0, y: -420 },
    ear: { dx: 78, y: -330 },
    neck: { x: 0, y: -262 },
    shoulder: { dx: 46, y: -248 },
    chest: { x: 0, y: -225 },
    waist: { x: 0, y: -180 },
    hip: { x: 0, y: -150 },
    handL: { x: -62, y: -152 },
    handR: { x: 62, y: -152 },
    knee: { y: -80 },
    foot: { dx: 28, y: -10 }
  };

  // ---------------------------------------------------------------- 素体

  function bodyBase() {
    return `
    <ellipse cx="0" cy="4" rx="92" ry="16" fill="#a44a66" opacity="0.13"/>
    <!-- あし -->
    <rect x="-40" y="-150" width="29" height="148" rx="14" fill="url(#g-skin)" stroke="${SKIN_LINE}" stroke-width="2.6"/>
    <rect x="11" y="-150" width="29" height="148" rx="14" fill="url(#g-skin)" stroke="${SKIN_LINE}" stroke-width="2.6"/>
    <path d="M-18,-138 C-16,-98 -17,-58 -19,-16" stroke="#e8b48e" stroke-width="4" fill="none" opacity="0.45" stroke-linecap="round"/>
    <path d="M34,-138 C36,-98 35,-58 37,-16" stroke="#e8b48e" stroke-width="4" fill="none" opacity="0.45" stroke-linecap="round"/>
    <path d="M-30,-78 q5,3 9,0 M22,-78 q5,3 9,0" stroke="#e0a37d" stroke-width="2" fill="none" opacity="0.55" stroke-linecap="round"/>
    <!-- どう -->
    <path d="M-46,-252 C-50,-210 -46,-170 -38,-142 L38,-142 C46,-170 50,-210 46,-252 Z"
          fill="url(#g-skin)" stroke="${SKIN_LINE}" stroke-width="2.8"/>
    <!-- くび -->
    <rect x="-11" y="-280" width="22" height="26" rx="9" fill="url(#g-skin)" stroke="${SKIN_LINE}" stroke-width="2.4"/>
    <ellipse cx="0" cy="-266" rx="13" ry="5" fill="#dd9d77" opacity="0.4"/>
    <!-- したぎ(白キャミ+ブルマ) -->
    <path d="M-42,-244 L42,-244 L38,-168 C20,-160 -20,-160 -38,-168 Z"
          fill="#ffffff" stroke="#f2d5de" stroke-width="3"/>
    <path d="M-42,-244 L-26,-228 M42,-244 L26,-228" stroke="#f2d5de" stroke-width="3" fill="none"/>
    <path d="M-38,-168 Q-40,-130 -30,-118 Q-16,-110 0,-110 Q16,-110 30,-118 Q40,-130 38,-168 C12,-158 -12,-158 -38,-168Z"
          fill="#ffffff" stroke="#f2d5de" stroke-width="3"/>
    <path d="M-30,-118 Q-28,-110 -24,-106 M30,-118 Q28,-110 24,-106" stroke="#f2d5de" stroke-width="2.5" fill="none"/>
    <!-- あたま(まるい頬+小さなあご) -->
    <path d="M0,-270 C-26,-271 -52,-282 -66,-304 C-79,-324 -84,-348 -78,-374
             C-68,-414 -36,-434 0,-434 C36,-434 68,-414 78,-374
             C84,-348 79,-324 66,-304 C52,-282 26,-271 0,-270Z"
          fill="url(#g-skin)" stroke="${SKIN_LINE}" stroke-width="2.8"/>`;
  }

  // 片腕(肩ピボットのローカル座標: 肩=0,0 まっすぐ下に手 0,92)
  function armShape() {
    return `
    <path d="M-11.5,-4 C-15,30 -13,64 -9,86 C-5,97 5,97 9,86 C13,64 15,30 11.5,-4 Z"
          fill="url(#g-skin)" stroke="${SKIN_LINE}" stroke-width="2.6"/>
    <path d="M6,10 C8,36 8,60 6,78" stroke="#e8b48e" stroke-width="3" fill="none" opacity="0.45" stroke-linecap="round"/>
    <circle cx="0" cy="91" r="13" fill="url(#g-skin)" stroke="${SKIN_LINE}" stroke-width="2.6"/>`;
  }

  // ---------------------------------------------------------------- かみのけ

  // うしろ髪: 暗色シルエット + ベース色の束 + ハイライト筋
  function backHair(c) {
    var sideLocks = `
      <path d="M-72,-396 C-96,-366 -102,-330 -92,-296 C-84,-266 -98,-240 -90,-212
               C-83,-184 -98,-158 -90,-132 C-87,-118 -80,-108 -68,-106
               C-78,-122 -76,-140 -70,-158 C-62,-186 -76,-214 -68,-242
               C-63,-268 -78,-296 -70,-324 C-65,-352 -64,-376 -54,-398 Z"
            fill="${c.base}" stroke="${c.deep}" stroke-width="2.2"/>
      <path d="M-50,-408 C-72,-378 -74,-344 -64,-312 C-56,-282 -68,-254 -60,-226
               C-53,-198 -66,-170 -56,-144 C-52,-128 -42,-120 -32,-120
               C-42,-136 -42,-156 -36,-176 C-28,-204 -42,-232 -36,-260
               C-31,-288 -44,-316 -38,-344 C-33,-372 -32,-392 -22,-410 Z"
            fill="${c.base}" stroke="${c.deep}" stroke-width="2.2"/>
      <path d="M-16,-416 C-30,-392 -34,-360 -28,-330 C-24,-304 -30,-276 -26,-248
               C-23,-224 -28,-200 -22,-178 C-18,-164 -10,-158 -2,-160
               C-10,-172 -10,-190 -8,-208 C-4,-232 -10,-258 -8,-284
               C-6,-310 -12,-336 -8,-362 C-6,-388 -4,-402 4,-416 Z"
            fill="${c.base}" stroke="${c.deep}" stroke-width="2.2"/>
      <path d="M-78,-380 C-90,-348 -92,-318 -86,-290" fill="none"
            stroke="${c.light}" stroke-width="5" opacity="0.55" stroke-linecap="round"/>
      <path d="M-56,-390 C-66,-360 -68,-330 -62,-302" fill="none"
            stroke="${c.light}" stroke-width="4.5" opacity="0.5" stroke-linecap="round"/>
      <path d="M-84,-222 C-90,-196 -88,-172 -84,-152" fill="none"
            stroke="${c.light}" stroke-width="4" opacity="0.45" stroke-linecap="round"/>
      <path d="M-44,-200 C-48,-180 -46,-160 -42,-144" fill="none"
            stroke="${c.deep}" stroke-width="2.5" opacity="0.4" stroke-linecap="round"/>`;
    return `
    <path d="M0,-436 C-58,-436 -94,-404 -98,-360 C-102,-318 -94,-282 -100,-244
             C-106,-200 -96,-168 -104,-138 C-108,-118 -96,-100 -80,-104
             C-86,-92 -72,-80 -58,-90 C-50,-80 -34,-78 -24,-88
             C-14,-80 14,-80 24,-88 C34,-78 50,-80 58,-90
             C72,-80 86,-92 80,-104 C96,-100 108,-118 104,-138
             C96,-168 106,-200 100,-244 C94,-282 102,-318 98,-360
             C94,-404 58,-436 0,-436 Z"
          fill="${c.dark}" stroke="${c.deep}" stroke-width="3"/>
    ${sideLocks}
    <g transform="scale(-1,1)">${sideLocks}</g>`;
  }

  // まえ髪: 分け目スウィープ+サイドの大きなウェーブ束
  function frontHair(c) {
    var sideWave = `
      <path d="M-60,-384 C-86,-362 -100,-330 -92,-298 C-86,-272 -98,-250 -90,-226
               C-83,-202 -96,-178 -86,-156 C-80,-141 -64,-134 -53,-141
               C-63,-153 -62,-170 -57,-188 C-50,-212 -62,-236 -56,-260
               C-51,-284 -63,-308 -57,-332 C-54,-354 -52,-368 -42,-384 Z"
            fill="${c.base}" stroke="${c.deep}" stroke-width="2.4"/>
      <path d="M-82,-342 C-92,-318 -90,-294 -84,-272" fill="none"
            stroke="${c.light}" stroke-width="4" opacity="0.6" stroke-linecap="round"/>
      <path d="M-90,-228 C-84,-208 -90,-188 -83,-170" fill="none"
            stroke="${c.light}" stroke-width="3.5" opacity="0.5" stroke-linecap="round"/>
      <path d="M-64,-300 C-72,-276 -68,-252 -64,-232" fill="none"
            stroke="${c.deep}" stroke-width="2.5" opacity="0.45" stroke-linecap="round"/>`;
    return `
    ${sideWave}
    <g transform="scale(-1,1)">${sideWave}</g>
    <!-- 前髪の影(おでこ・スウィープに沿う) -->
    <path d="M0,-382 C18,-374 40,-358 62,-340 C56,-352 30,-374 2,-388 Z" fill="#b06a4a" opacity="0.12"/>
    <path d="M-4,-384 C-18,-376 -34,-362 -46,-350 C-40,-360 -24,-376 -6,-388 Z" fill="#b06a4a" opacity="0.12"/>
    <!-- 前髪本体(分け目から外側へなだらかに下がるスウィープ) -->
    <path d="M-78,-356 C-82,-398 -56,-430 0,-432 C56,-430 82,-398 78,-356
             C77,-348 72,-340 66,-336
             C64,-346 60,-354 54,-358
             C50,-360 46,-358 42,-355
             C32,-368 16,-380 4,-386
             C0,-388 -4,-388 -8,-386
             C-20,-380 -34,-368 -44,-356
             C-48,-358 -52,-360 -56,-358
             C-62,-354 -66,-344 -68,-338
             C-72,-346 -76,-352 -78,-356 Z"
          fill="${c.base}" stroke="${c.dark}" stroke-width="1.2" stroke-linejoin="round"/>
    <!-- 頭頂の輪郭(上側のみ濃い縁取り) -->
    <path d="M-78,-356 C-82,-398 -56,-430 0,-432 C56,-430 82,-398 78,-356"
          fill="none" stroke="${c.deep}" stroke-width="2.8" stroke-linecap="round"/>
    <!-- 毛流れの溝(分け目から外側へ) -->
    <path d="M0,-414 C4,-402 7,-394 9,-386 M12,-412 C20,-400 30,-386 40,-370
             M26,-416 C36,-404 48,-390 58,-368 M-12,-414 C-20,-402 -30,-388 -40,-368
             M-26,-416 C-36,-404 -48,-390 -58,-366"
          stroke="${c.deep}" stroke-width="1.8" fill="none" opacity="0.4" stroke-linecap="round"/>
    <!-- ハイライト(ツヤ) -->
    <path d="M-44,-414 C-20,-426 18,-427 44,-415" fill="none"
          stroke="${c.light}" stroke-width="6" opacity="0.55" stroke-linecap="round"/>
    <path d="M-56,-400 C-60,-388 -62,-378 -62,-368" fill="none"
          stroke="${c.light}" stroke-width="4" opacity="0.5" stroke-linecap="round"/>
    <path d="M52,-402 C58,-390 60,-378 61,-366" fill="none"
          stroke="${c.light}" stroke-width="4" opacity="0.5" stroke-linecap="round"/>
    <!-- ハーフアップの引き上げ束(リボン位置へ) -->
    <path d="M-8,-430 C-24,-426 -40,-420 -50,-412 M2,-428 C-16,-420 -34,-414 -46,-406"
          stroke="${c.deep}" stroke-width="2" fill="none" opacity="0.5"/>`;
  }

  // ---------------------------------------------------------------- かお

  function face(variant) {
    // 大きな丸い瞳(白目→虹彩グラデ→瞳孔→ハイライト)
    var openEye = function (cx, sgn) {
      return `
      <ellipse cx="${cx}" cy="-335" rx="18.5" ry="20" fill="#ffffff"/>
      <ellipse cx="${cx}" cy="-334" rx="16.5" ry="19" fill="url(#g-iris)" stroke="#2e1a0c" stroke-width="1.5"/>
      <ellipse cx="${cx}" cy="-334" rx="16.5" ry="19" fill="url(#g-iris-glow)"/>
      <ellipse cx="${cx}" cy="-333" rx="7.5" ry="9" fill="#241208"/>
      <circle cx="${cx - 5.5}" cy="-343" r="5.8" fill="#ffffff"/>
      <circle cx="${cx + 6}" cy="-325" r="3" fill="#ffffff" opacity="0.95"/>
      <circle cx="${cx + 7.5}" cy="-341" r="1.7" fill="#ffffff" opacity="0.9"/>
      <path d="M${cx - 17},-345 C${cx - 9},-353 ${cx + 9},-353 ${cx + 17},-344"
            fill="none" stroke="#38200f" stroke-width="5.5" stroke-linecap="round"/>
      <path d="M${cx + sgn * 16},-346 q${sgn * 6},-1 ${sgn * 9},-4" fill="none"
            stroke="#38200f" stroke-width="3" stroke-linecap="round"/>
      <path d="M${cx - 11},-315 Q${cx},-311 ${cx + 11},-315" fill="none"
            stroke="#d8a07e" stroke-width="2" opacity="0.6" stroke-linecap="round"/>`;
    };
    var closedEye = function (cx, sgn) {
      return `
      <path d="M${cx - 15},-332 Q${cx},-321 ${cx + 15},-332" fill="none"
            stroke="#38200f" stroke-width="5" stroke-linecap="round"/>
      <path d="M${cx + sgn * 13},-330 q${sgn * 6},1 ${sgn * 9},-3" fill="none"
            stroke="#38200f" stroke-width="3" stroke-linecap="round"/>`;
    };
    var eyeL, eyeR;
    if (variant === 'wink') { eyeL = openEye(-34, -1); eyeR = closedEye(34, 1); }
    else { eyeL = openEye(-34, -1); eyeR = openEye(34, 1); }

    var mouth;
    if (variant === 'open' || variant === 'wink') {
      mouth = `
      <path d="M-12,-303 C-6,-300 6,-300 12,-303 C13,-290 7,-281 0,-281 C-7,-281 -13,-290 -12,-303Z"
            fill="#c23f55" stroke="#a83248" stroke-width="2"/>
      <path d="M-8,-302 C-3,-300 3,-300 8,-302 L7,-298 C2,-296 -2,-296 -7,-298Z" fill="#ffffff" opacity="0.95"/>
      <ellipse cx="0" cy="-285" rx="6.5" ry="4" fill="#ff8a93"/>`;
    } else {
      mouth = `<path d="M-10,-301 Q0,-292 10,-301" stroke="#b03648" stroke-width="3.4"
               fill="none" stroke-linecap="round"/>`;
    }
    return `
    ${eyeL}${eyeR}
    <circle cx="-56" cy="-310" r="14" fill="url(#g-blush)"/>
    <circle cx="56" cy="-310" r="14" fill="url(#g-blush)"/>
    <path d="M1,-318 q2.5,3 0.5,6" stroke="#d8946e" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    ${mouth}
    ${variant === 'wink' ? '<g transform="translate(58,-352)"><path d="M0,-9 Q1.5,-1.5 9,0 Q1.5,1.5 0,9 Q-1.5,1.5 -9,0 Q-1.5,-1.5 0,-9Z" fill="#ffd24d"/></g>' : ''}`;
  }

  // ---------------------------------------------------------------- 合成

  // equip: { dress, top, bottom, outer, headband, hairAcc, earring, necklace,
  //          ring, bracelet, socks, shoes, bag, hairColor }
  function render(parent, equip, opt) {
    opt = opt || {};
    var items = ModelGame.items;
    var col = HAIR_COLS[equip.hairColor || 0] || HAIR_COLS[0];
    var d = function (slot) {
      if (!equip[slot]) return '';
      var it = items.get(equip[slot]);
      return it ? '<g class="it-' + slot + '">' + it.draw() + '</g>' : '';
    };
    var sleeves = function (side) {
      var src = equip.dress || equip.top;
      if (!src) return '';
      var it = items.get(src);
      return (it && it.sleeves) ? it.sleeves(side) : '';
    };
    var armDeco = function (side) {
      var out = '';
      if (equip.bracelet && side === 'R') {
        var b = items.get(equip.bracelet);
        if (b) out += '<g class="it-bracelet">' + b.draw() + '</g>';
      }
      if (equip.ring && side === 'R') {
        var r = items.get(equip.ring);
        if (r) out += '<g class="it-ring">' + r.draw() + '</g>';
      }
      return out;
    };

    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'avatar');
    g.setAttribute('transform',
      'translate(' + (opt.x || 0) + ',' + (opt.y || 0) + ') scale(' + (opt.scale || 1) + ')');
    g.innerHTML =
      '<g class="av-flip">' +
      '<g class="ly-backhair">' + backHair(col) + '</g>' +
      '<g class="ly-body">' + bodyBase() + '</g>' +
      '<g class="ly-socks">' + d('socks') + '</g>' +
      '<g class="ly-shoes">' + d('shoes') + '</g>' +
      '<g class="ly-bottom">' + d('bottom') + '</g>' +
      '<g class="ly-top">' + d('top') + '</g>' +
      '<g class="ly-dress">' + d('dress') + '</g>' +
      '<g class="ly-outer">' + d('outer') + '</g>' +
      '<g class="ly-necklace">' + d('necklace') + '</g>' +
      '<g class="ly-arm-l" transform="translate(-46,-248) rotate(14)">' + armShape() + sleeves('L') + armDeco('L') + '</g>' +
      '<g class="ly-arm-r" transform="translate(46,-248) rotate(-14)">' + armShape() + sleeves('R') + armDeco('R') + '</g>' +
      '<g class="ly-face">' + face(opt.face || 'open') + '</g>' +
      '<g class="ly-fronthair">' + frontHair(col) + '</g>' +
      '<g class="ly-headband">' + d('headband') + '</g>' +
      '<g class="ly-hairacc">' + d('hairAcc') + '</g>' +
      '<g class="ly-earring">' + d('earring') + '</g>' +
      '<g class="ly-bag">' + d('bag') + '</g>' +
      '</g>';
    if (parent) parent.appendChild(g);

    var api = {
      el: g,
      flipG: g.querySelector('.av-flip'),
      armL: g.querySelector('.ly-arm-l'),
      armR: g.querySelector('.ly-arm-r'),
      faceG: g.querySelector('.ly-face'),
      x: opt.x || 0, y: opt.y || 0, scale: opt.scale || 1,
      setPos: function (x, y, s) {
        api.x = x; api.y = y; if (s) api.scale = s;
        g.setAttribute('transform', 'translate(' + x + ',' + y + ') scale(' + api.scale + ')');
      },
      setFace: function (v) { api.faceG.innerHTML = face(v); },
      setArms: function (aL, aR) {
        api.armL.setAttribute('transform', 'translate(-46,-248) rotate(' + aL + ')');
        api.armR.setAttribute('transform', 'translate(46,-248) rotate(' + aR + ')');
      },
      setFlip: function (sx) {
        api.flipG.setAttribute('transform', 'scale(' + sx + ',1)');
      }
    };
    return api;
  }

  // ポーズ定義(腕の角度・表情) — シーン側でトゥイーンに使う
  var POSES = {
    normal: { aL: 14, aR: -14, face: 'open' },
    kira:   { aL: 24, aR: -160, face: 'open' },
    wink:   { aL: 14, aR: -52, face: 'wink' },
    heart:  { aL: -64, aR: 64, face: 'open' },
    spin:   { aL: 38, aR: -38, face: 'open' },
    bye:    { aL: 16, aR: -132, face: 'wink' },
    wave:   { aL: 14, aR: -148, face: 'open' }
  };

  return { A: A, render: render, POSES: POSES, HAIR_COLS: HAIR_COLS };
})();
