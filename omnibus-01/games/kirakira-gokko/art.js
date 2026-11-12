/* キラキラ モデルごっこ — 高精細・かわいい系SVGアートライブラリ
   規約: ①暖色ダーク輪郭線 ②グラデーションのベース塗り
         ③下側の半透明シャドウ ④左上の白ハイライト ⑤質感ディテール */
window.ModelGame = window.ModelGame || {};

ModelGame.art = (function () {
  var OL = '#a44a66';      // 輪郭線カラー(暖色ダーク)

  // ---------------------------------------------------------------- defs

  function defs() {
    return [gradients(), filters(), patterns()].join('');
  }

  function gradients() {
    return `
    <radialGradient id="g-bg" cx="50%" cy="40%" r="80%">
      <stop offset="0%" stop-color="#fff6fa"/>
      <stop offset="55%" stop-color="#ffddE9"/>
      <stop offset="100%" stop-color="#ffb9d2"/>
    </radialGradient>
    <linearGradient id="g-floor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffc7db"/>
      <stop offset="100%" stop-color="#ff9fc0"/>
    </linearGradient>
    <radialGradient id="g-runwaybg" cx="50%" cy="35%" r="85%">
      <stop offset="0%" stop-color="#ffe2ee"/>
      <stop offset="55%" stop-color="#ffb9d4"/>
      <stop offset="100%" stop-color="#f084ad"/>
    </radialGradient>
    <linearGradient id="g-runwayfloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffd3e3"/>
      <stop offset="100%" stop-color="#ff9cc1"/>
    </linearGradient>
    <linearGradient id="g-pinkbtn" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ff9dc2"/>
      <stop offset="100%" stop-color="#ff5e96"/>
    </linearGradient>
    <linearGradient id="g-bluebtn" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#7ed6f7"/>
      <stop offset="100%" stop-color="#3aa6dd"/>
    </linearGradient>
    <linearGradient id="g-purplebtn" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c79bf2"/>
      <stop offset="100%" stop-color="#9a63d8"/>
    </linearGradient>
    <linearGradient id="g-orangebtn" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffce6b"/>
      <stop offset="100%" stop-color="#f5a13b"/>
    </linearGradient>
    <linearGradient id="g-greenbtn" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8de89c"/>
      <stop offset="100%" stop-color="#4cc163"/>
    </linearGradient>
    <linearGradient id="g-gold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffe98a"/>
      <stop offset="100%" stop-color="#f0b13c"/>
    </linearGradient>
    <linearGradient id="g-ribbon" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ff8ab5"/>
      <stop offset="48%" stop-color="#ff5e96"/>
      <stop offset="100%" stop-color="#f04982"/>
    </linearGradient>
    <linearGradient id="g-panel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fffafc"/>
      <stop offset="100%" stop-color="#ffe9f2"/>
    </linearGradient>
    <linearGradient id="g-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#fff2f7"/>
    </linearGradient>
    <linearGradient id="g-stagefloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffaecb"/>
      <stop offset="100%" stop-color="#f27ba6"/>
    </linearGradient>
    <radialGradient id="g-stagetop" cx="50%" cy="45%" r="70%">
      <stop offset="0%" stop-color="#ffe4ee"/>
      <stop offset="100%" stop-color="#ffb3cd"/>
    </radialGradient>
    <radialGradient id="g-mirror" cx="42%" cy="34%" r="80%">
      <stop offset="0%" stop-color="#eafaff"/>
      <stop offset="70%" stop-color="#bfe6f4"/>
      <stop offset="100%" stop-color="#9fd2e8"/>
    </radialGradient>
    <linearGradient id="g-wood" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#ffd9e6"/>
    </linearGradient>
    <linearGradient id="g-meter" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffd24d"/>
      <stop offset="50%" stop-color="#ff8ab5"/>
      <stop offset="100%" stop-color="#c79bf2"/>
    </linearGradient>
    <radialGradient id="g-spot" cx="50%" cy="0%" r="100%">
      <stop offset="0%" stop-color="#fff8d8" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#fff8d8" stop-opacity="0"/>
    </radialGradient>
    <!-- 髪の色(0:ブラウン 1:こげ茶 2:きんいろ 3:ピンク) -->
    <linearGradient id="g-hair0" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a8714c"/>
      <stop offset="100%" stop-color="#7d4e30"/>
    </linearGradient>
    <linearGradient id="g-hair1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#7a523c"/>
      <stop offset="100%" stop-color="#553624"/>
    </linearGradient>
    <linearGradient id="g-hair2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffd98a"/>
      <stop offset="100%" stop-color="#e8ae4f"/>
    </linearGradient>
    <linearGradient id="g-hair3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffb7d4"/>
      <stop offset="100%" stop-color="#f284b3"/>
    </linearGradient>
    <radialGradient id="g-skin" cx="42%" cy="35%" r="80%">
      <stop offset="0%" stop-color="#fff1e6"/>
      <stop offset="100%" stop-color="#ffdcc4"/>
    </radialGradient>
    <!-- 瞳(ダークブラウン、下部があたたかく光る) -->
    <radialGradient id="g-iris" cx="50%" cy="38%" r="68%">
      <stop offset="0%" stop-color="#4a2c16"/>
      <stop offset="55%" stop-color="#5d3a1e"/>
      <stop offset="82%" stop-color="#8a5a35"/>
      <stop offset="100%" stop-color="#3d2314"/>
    </radialGradient>
    <radialGradient id="g-iris-glow" cx="50%" cy="78%" r="55%">
      <stop offset="0%" stop-color="#c98e54" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#c98e54" stop-opacity="0"/>
    </radialGradient>
    <!-- チーク(ふんわりにじむ) -->
    <radialGradient id="g-blush" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ff9eb0" stop-opacity="0.75"/>
      <stop offset="70%" stop-color="#ff9eb0" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#ff9eb0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g-flash" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>`;
  }

  function filters() {
    return `
    <filter id="f-glow" x="-60%" y="-60%" width="220%" height="220%">
      <feDropShadow dx="0" dy="0" stdDeviation="9" flood-color="#ffd866" flood-opacity="0.95"/>
      <feDropShadow dx="0" dy="0" stdDeviation="18" flood-color="#ffd866" flood-opacity="0.55"/>
    </filter>
    <filter id="f-soft" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="6" stdDeviation="7" flood-color="#a44a66" flood-opacity="0.28"/>
    </filter>
    <filter id="f-pinkglow" x="-60%" y="-60%" width="220%" height="220%">
      <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="#ff8ab5" flood-opacity="0.85"/>
    </filter>`;
  }

  function patterns() {
    return `
    <pattern id="p-hearts" width="130" height="130" patternUnits="userSpaceOnUse">
      <path d="M30 34 c-7-9 -22-7 -22 5 c0 10 14 18 22 24 c8-6 22-14 22-24 c0-12 -15-14 -22-5Z"
            fill="#ffffff" opacity="0.14"/>
      <circle cx="96" cy="92" r="7" fill="#ffffff" opacity="0.14"/>
    </pattern>
    <pattern id="p-check-pink" width="26" height="26" patternUnits="userSpaceOnUse">
      <rect width="26" height="26" fill="#ffd5e3"/>
      <rect width="13" height="13" fill="#ff9dc2"/>
      <rect x="13" y="13" width="13" height="13" fill="#ff9dc2"/>
      <rect x="13" width="13" height="13" fill="#ffbcd4"/>
      <rect y="13" width="13" height="13" fill="#ffbcd4"/>
    </pattern>
    <pattern id="p-check-blue" width="26" height="26" patternUnits="userSpaceOnUse">
      <rect width="26" height="26" fill="#d8eefb"/>
      <rect width="13" height="13" fill="#90c9ec"/>
      <rect x="13" y="13" width="13" height="13" fill="#90c9ec"/>
      <rect x="13" width="13" height="13" fill="#b8def5"/>
      <rect y="13" width="13" height="13" fill="#b8def5"/>
    </pattern>
    <pattern id="p-stripe" width="22" height="22" patternUnits="userSpaceOnUse">
      <rect width="22" height="22" fill="#ffffff"/>
      <rect width="11" height="22" fill="#ffd0e0"/>
    </pattern>
    <!-- モックアップ風ピンクプラッド(白の細ライン入り) -->
    <pattern id="p-plaid-pink" width="34" height="34" patternUnits="userSpaceOnUse">
      <rect width="34" height="34" fill="#f796b6"/>
      <rect width="34" height="13" y="2" fill="#ffb9cf"/>
      <rect width="13" height="34" x="2" fill="#ffb9cf" opacity="0.75"/>
      <rect width="34" height="3.5" y="20" fill="#ffffff" opacity="0.85"/>
      <rect width="3.5" height="34" x="20" fill="#ffffff" opacity="0.85"/>
      <rect width="34" height="2" y="29" fill="#e8568d" opacity="0.55"/>
      <rect width="2" height="34" x="29" fill="#e8568d" opacity="0.55"/>
    </pattern>`;
  }

  // ---------------------------------------------------------------- テキスト

  // ふちどり文字(白文字+色ふち or 色文字+白ふち)
  function txt(x, y, size, text, opt) {
    opt = opt || {};
    var fill = opt.fill || '#ffffff';
    var stroke = opt.stroke || '#e8568d';
    var sw = opt.sw !== undefined ? opt.sw : size * 0.32;
    var anchor = opt.anchor || 'middle';
    var weight = opt.weight || '800';
    return `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}"
      text-anchor="${anchor}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"
      paint-order="stroke" stroke-linejoin="round">${text}</text>`;
  }

  // ---------------------------------------------------------------- 背景

  function backgroundRoom() {
    // ピンクのドレッサールーム: 左に金縁ミラー、右にワードローブ、上にカーテン
    var bokeh = '';
    var spots = [[200, 180, 42], [1080, 200, 36], [420, 120, 26], [880, 110, 30], [640, 250, 22]];
    for (var i = 0; i < spots.length; i++) {
      bokeh += `<circle cx="${spots[i][0]}" cy="${spots[i][1]}" r="${spots[i][2]}" fill="#ffffff" opacity="0.16"/>`;
    }
    return `
    <rect x="-200" y="-200" width="1680" height="1120" fill="url(#g-bg)"/>
    <rect x="-200" y="-200" width="1680" height="1120" fill="url(#p-hearts)"/>
    ${bokeh}
    <!-- 床 -->
    <rect x="-200" y="560" width="1680" height="360" fill="url(#g-floor)"/>
    <path d="M-200,560 L1480,560" stroke="#ffffff" stroke-width="5" opacity="0.5"/>
    <ellipse cx="640" cy="660" rx="560" ry="80" fill="#ffffff" opacity="0.14"/>
    <!-- カーテン(左右上) -->
    <path d="M-20,-10 C60,150 30,330 -20,470 L-60,470 L-60,-10 Z" fill="#ff9cc1" opacity="0.8"/>
    <path d="M8,-10 C80,140 60,300 14,430 C50,300 60,140 -12,-10 Z" fill="#ffffff" opacity="0.35"/>
    <path d="M1300,-10 C1220,150 1250,330 1300,470 L1340,470 L1340,-10 Z" fill="#ff9cc1" opacity="0.8"/>
    <!-- 左: 金縁スタンドミラー -->
    <g transform="translate(108,330)">
      <ellipse cx="6" cy="252" rx="74" ry="16" fill="#a44a66" opacity="0.12"/>
      <rect x="-12" y="160" width="24" height="86" rx="10" fill="url(#g-gold)" stroke="#cf8a2d" stroke-width="3"/>
      <ellipse rx="86" ry="158" fill="url(#g-gold)" stroke="#cf8a2d" stroke-width="3"/>
      <ellipse rx="68" ry="140" fill="url(#g-mirror)"/>
      <path d="M-34,-104 C-58,-58 -58,30 -36,82" stroke="#ffffff" stroke-width="12" fill="none" opacity="0.55" stroke-linecap="round"/>
      <path d="M0,-176 c-8,-12 -26,-10 -26,4 c0,10 16,18 26,24 c10,-6 26,-14 26,-24 c0,-14 -18,-16 -26,-4Z"
            fill="#ff7fae" stroke="#e8568d" stroke-width="3"/>
    </g>
    <!-- 左: ハートクッションのスツール -->
    <g transform="translate(95,600)">
      <ellipse cx="0" cy="64" rx="64" ry="14" fill="#a44a66" opacity="0.12"/>
      <rect x="-46" y="6" width="92" height="56" rx="18" fill="#ffd0e0" stroke="#f29ebf" stroke-width="3"/>
      <path d="M0,-26 c-16,-20 -50,-14 -50,12 c0 22 30 38 50 50 c20,-12 50,-28 50,-50 c0,-26 -34,-32 -50,-12Z"
            fill="#ff8ab5" stroke="#e8568d" stroke-width="4"/>
      <path d="M-28,-22 c-8,2 -14,8 -15,16" stroke="#ffffff" stroke-width="6" fill="none" opacity="0.6" stroke-linecap="round"/>
    </g>
    <!-- 右: ワードローブ(ハンガーの服) -->
    <g transform="translate(1170,300)">
      <rect x="-115" y="-130" width="240" height="420" rx="22" fill="url(#g-wood)" stroke="#f2a9c4" stroke-width="4"/>
      <rect x="-95" y="-110" width="200" height="330" rx="14" fill="#ffeef5"/>
      <rect x="-95" y="-86" width="200" height="10" rx="5" fill="url(#g-gold)"/>
      ${[0, 1, 2, 3].map(function (i) {
        var hx = -66 + i * 52;
        var cols = [['#ff8ab5', '#ffd0e0'], ['#ffd98a', '#fff0c9'], ['#c79bf2', '#e9d6fa'], ['#90c9ec', '#d8eefb']][i];
        return `<g transform="translate(${hx},-76)">
          <path d="M0,-8 a6,6 0 1 1 6,-6 M0,-8 L0,0" stroke="#caa23c" stroke-width="3" fill="none"/>
          <path d="M-16,4 L0,0 L16,4 L13,14 L-13,14 Z" fill="${cols[0]}" stroke="${cols[0]}" stroke-width="2"/>
          <path d="M-13,14 C-20,52 -18,84 -14,108 L14,108 C18,84 20,52 13,14 Z"
                fill="${cols[1]}" stroke="${cols[0]}" stroke-width="3"/>
        </g>`;
      }).join('')}
      <ellipse cx="5" cy="302" rx="120" ry="16" fill="#a44a66" opacity="0.1"/>
    </g>
    <!-- 飾りのきらきら -->
    ${sparkle(330, 90, 0.8, 0.3)}${sparkle(960, 70, 0.7, 0.9)}${sparkle(70, 250, 0.6, 0.6)}`;
  }

  // 丸いお立ち台
  function roundStage(x, y, s) {
    return `
    <g transform="translate(${x},${y}) scale(${s || 1})" pointer-events="none">
      <ellipse cx="0" cy="34" rx="215" ry="42" fill="#a44a66" opacity="0.12"/>
      <path d="M-205,0 A205,40 0 0 1 205,0 L205,28 A205,40 0 0 1 -205,28 Z"
            fill="url(#g-stagefloor)" stroke="#e8568d" stroke-width="4"/>
      <ellipse cx="0" cy="0" rx="205" ry="40" fill="url(#g-stagetop)" stroke="#e8568d" stroke-width="4"/>
      <ellipse cx="0" cy="0" rx="168" ry="30" fill="#ffffff" opacity="0.35"/>
      ${[-160, -96, -32, 32, 96, 160].map(function (lx) {
        return `<circle cx="${lx}" cy="46" r="7" fill="#fff48f" stroke="#f7c948" stroke-width="2"/>`;
      }).join('')}
      <path d="M0,40 c-7,-9 -22,-6 -22,6 c0,9 13,16 22,22 c9,-6 22,-13 22,-22 c0,-12 -15,-15 -22,-6Z"
            fill="#ff7fae" stroke="#e8568d" stroke-width="3"/>
    </g>`;
  }

  function backgroundRunway() {
    // キラキラのランウェイ: ライトアーチ + 客席のぬいぐるみ + 花道
    var arch = '';
    for (var i = 0; i < 3; i++) {
      var r = 300 + i * 60;
      arch += `<path d="M${640 - r},460 A${r},${r} 0 0 1 ${640 + r},460" fill="none"
               stroke="#ff9cc1" stroke-width="${20 - i * 4}" opacity="${0.55 - i * 0.12}"/>`;
    }
    var bulbs = '';
    for (var j = 0; j <= 16; j++) {
      var a = Math.PI - (j / 16) * Math.PI;
      var bx = 640 + Math.cos(a) * 300;
      var by = 460 - Math.sin(a) * 300;
      bulbs += `<circle cx="${bx.toFixed(0)}" cy="${by.toFixed(0)}" r="9" fill="#fff48f"
                stroke="#f7c948" stroke-width="2.5" class="runway-light"
                style="animation-delay:${(j * 0.13).toFixed(2)}s"/>`;
    }
    var plush = function (x, y, s, c1, c2) {
      return `<g transform="translate(${x},${y}) scale(${s})" opacity="0.85">
        <circle cx="-26" cy="-30" r="13" fill="${c1}"/>
        <circle cx="26" cy="-30" r="13" fill="${c1}"/>
        <ellipse cx="0" cy="14" rx="34" ry="30" fill="${c1}"/>
        <circle cx="0" cy="-18" r="26" fill="${c1}"/>
        <circle cx="-9" cy="-22" r="3.4" fill="#7a4a3a"/>
        <circle cx="9" cy="-22" r="3.4" fill="#7a4a3a"/>
        <ellipse cx="0" cy="-12" rx="7" ry="5" fill="${c2}"/>
      </g>`;
    };
    return `
    <rect x="-200" y="-200" width="1680" height="1120" fill="url(#g-runwaybg)"/>
    <rect x="-200" y="-200" width="1680" height="1120" fill="url(#p-hearts)"/>
    ${arch}${bulbs}
    <path d="M520,460 L760,460 L1010,720 L270,720 Z" fill="url(#g-runwayfloor)" stroke="#ff7fae" stroke-width="4"/>
    <path d="M560,460 L720,460 L900,720 L380,720 Z" fill="#ffffff" opacity="0.3"/>
    ${[0, 1, 2, 3].map(function (i) {
      var t = i / 3;
      var y = 480 + t * 200;
      var hw = 110 + t * 230;
      return `<path d="M${640 - hw},${y} L${640 + hw},${y}" stroke="#ffffff" stroke-width="3" opacity="0.4"/>`;
    }).join('')}
    <rect x="-200" y="440" width="470" height="300" fill="#f284b3" opacity="0.5"/>
    <rect x="1010" y="440" width="470" height="300" fill="#f284b3" opacity="0.5"/>
    ${plush(190, 560, 1.1, '#e9c9a8', '#fff0dd')}${plush(80, 640, 1.3, '#f2b8cc', '#ffe3ee')}
    ${plush(1090, 560, 1.1, '#cba8e9', '#ecdffa')}${plush(1200, 645, 1.3, '#e9c9a8', '#fff0dd')}
    <g transform="translate(640,150)" opacity="0.9">
      ${heartShape(0, 0, 34, '#ff7fae', '#e8568d')}
    </g>
    ${txt(430, 420, 40, 'キラ', { fill: '#ffffff', stroke: '#ff8ab5', sw: 10 })}
    ${txt(860, 400, 40, 'キラ', { fill: '#ffffff', stroke: '#ff8ab5', sw: 10 })}
    ${sparkle(350, 240, 1.1, 0.2)}${sparkle(930, 220, 0.9, 0.7)}${sparkle(640, 80, 0.8, 0.4)}
    ${sparkle(220, 420, 0.7, 1.0)}${sparkle(1060, 430, 0.8, 0.5)}`;
  }

  // ---------------------------------------------------------------- 基本図形

  function heartShape(x, y, s, fill, stroke) {
    return `<path transform="translate(${x},${y}) scale(${s / 30})"
      d="M0,-12 c-10,-14 -32,-9 -32,8 c0,14 19,24 32,34 c13,-10 32,-20 32,-34 c0,-17 -22,-22 -32,-8Z"
      fill="${fill || '#ff7fae'}" stroke="${stroke || '#e8568d'}" stroke-width="${90 / s > 6 ? 6 : 90 / s}"
      stroke-linejoin="round"/>`;
  }

  function starShape(x, y, s, fill, stroke) {
    var pts = '';
    for (var i = 0; i < 10; i++) {
      var r = i % 2 === 0 ? s : s * 0.45;
      var a = -Math.PI / 2 + (i * Math.PI) / 5;
      pts += (Math.cos(a) * r + x).toFixed(1) + ',' + (Math.sin(a) * r + y).toFixed(1) + ' ';
    }
    return `<polygon points="${pts}" fill="${fill || '#ffd24d'}" stroke="${stroke || '#e8a33d'}"
            stroke-width="3" stroke-linejoin="round"/>`;
  }

  function sparkle(x, y, s, delay) {
    return `
    <g transform="translate(${x},${y}) scale(${s})" class="twinkle" style="animation-delay:${delay}s" pointer-events="none">
      <path d="M0,-16 Q3,-3 16,0 Q3,3 0,16 Q-3,3 -16,0 Q-3,-3 0,-16Z" fill="#fff48f" stroke="#f7c948" stroke-width="2"/>
    </g>`;
  }

  // リボン(ちょうちょ結び)
  function bowShape(x, y, s, c1, c2) {
    return `
    <g transform="translate(${x},${y}) scale(${s / 30})">
      <path d="M-6,0 C-22,-18 -46,-14 -44,4 C-42,20 -22,18 -6,6 Z" fill="${c1}" stroke="${c2}" stroke-width="4" stroke-linejoin="round"/>
      <path d="M6,0 C22,-18 46,-14 44,4 C42,20 22,18 6,6 Z" fill="${c1}" stroke="${c2}" stroke-width="4" stroke-linejoin="round"/>
      <path d="M-8,8 C-14,20 -12,30 -6,38 L4,34 C0,26 0,16 2,8 Z" fill="${c1}" stroke="${c2}" stroke-width="3.4" stroke-linejoin="round"/>
      <path d="M8,8 C14,20 12,30 6,38 L-2,34 C2,26 2,16 0,8 Z" fill="${c1}" stroke="${c2}" stroke-width="3.4" stroke-linejoin="round" transform="translate(6,0)"/>
      <circle r="8" cy="2" fill="${c1}" stroke="${c2}" stroke-width="4"/>
      <path d="M-34,-8 c-4,4 -6,10 -5,14" stroke="#ffffff" stroke-width="4" fill="none" opacity="0.7" stroke-linecap="round"/>
    </g>`;
  }

  // ---------------------------------------------------------------- 共通UI

  // ピル型ボタン
  function pillBtn(opt) {
    var w = opt.w, h = opt.h || 78;
    var fs = opt.fs || h * 0.5;
    var cls = opt.cls ? ` class="${opt.cls}"` : '';
    return `
    <g data-act="${opt.act}" transform="translate(${opt.x},${opt.y})" style="cursor:pointer" ${opt.id ? `id="${opt.id}"` : ''}>
      <g${cls} filter="url(#f-soft)">
        <rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="${h / 2}"
              fill="url(#${opt.grad || 'g-pinkbtn'})" stroke="#ffffff" stroke-width="6"/>
        <path d="M${-w / 2 + h * 0.32},${-h * 0.18} A${w * 0.42},${h * 0.4} 0 0 1 ${w / 2 - h * 0.32},${-h * 0.18}"
              fill="none" stroke="#ffffff" stroke-width="${h * 0.12}" stroke-linecap="round" opacity="0.55"/>
        <g pointer-events="none">${opt.icon || ''}</g>
        ${opt.label ? txt(opt.tx || 0, fs * 0.36, fs, opt.label, { fill: '#ffffff', stroke: opt.lstroke || 'rgba(164,42,82,0.45)', sw: fs * 0.18 }) : ''}
      </g>
    </g>`;
  }

  // 丸ボタン
  function roundBtn(opt) {
    return `
    <g data-act="${opt.act}" transform="translate(${opt.x},${opt.y})" style="cursor:pointer" ${opt.id ? `id="${opt.id}"` : ''}>
      <g class="${opt.cls || ''}" filter="url(#f-soft)">
        <circle r="${opt.r}" fill="url(#${opt.grad || 'g-pinkbtn'})" stroke="#ffffff" stroke-width="5"/>
        <path d="M${-opt.r * 0.55},${-opt.r * 0.42} A ${opt.r * 0.72} ${opt.r * 0.72} 0 0 1 ${opt.r * 0.55},${-opt.r * 0.42}"
              fill="none" stroke="#ffffff" stroke-width="${opt.r * 0.15}" stroke-linecap="round" opacity="0.6"/>
        <g pointer-events="none">${opt.icon || ''}</g>
        ${opt.label ? txt(0, opt.r + 24, 21, opt.label, { fill: '#a44a66', stroke: '#ffffff', sw: 5 }) : ''}
      </g>
    </g>`;
  }

  // 白パネル(角丸・ピンク縁)
  function panel(x, y, w, h, opt) {
    opt = opt || {};
    return `
    <g transform="translate(${x},${y})" ${opt.id ? `id="${opt.id}"` : ''}>
      <rect width="${w}" height="${h}" rx="${opt.rx || 28}" fill="${opt.fill || 'url(#g-panel)'}"
            stroke="${opt.stroke || '#ffb9d2'}" stroke-width="${opt.sw || 5}" filter="url(#f-soft)"/>
      ${opt.inner ? `<rect x="9" y="9" width="${w - 18}" height="${h - 18}" rx="${(opt.rx || 28) - 8}"
            fill="none" stroke="#ffd9e6" stroke-width="2.5" stroke-dasharray="2 7" stroke-linecap="round"/>` : ''}
    </g>`;
  }

  // リボンバナー(タイトル帯)
  function ribbonBanner(x, y, w, h, text, fs, opt) {
    opt = opt || {};
    var hw = w / 2, hh = h / 2;
    return `
    <g transform="translate(${x},${y})" pointer-events="none">
      <path d="M${-hw - 36},${-hh + 8} L${-hw + 6},${-hh + 4} L${-hw + 6},${hh - 4} L${-hw - 36},${hh - 8} L${-hw - 16},0 Z"
            fill="#e8568d" stroke="#ffffff" stroke-width="4"/>
      <path d="M${hw + 36},${-hh + 8} L${hw - 6},${-hh + 4} L${hw - 6},${hh - 4} L${hw + 36},${hh - 8} L${hw + 16},0 Z"
            fill="#e8568d" stroke="#ffffff" stroke-width="4"/>
      <rect x="${-hw}" y="${-hh}" width="${w}" height="${h}" rx="${hh}"
            fill="url(#${opt.grad || 'g-ribbon'})" stroke="#ffffff" stroke-width="5" filter="url(#f-soft)"/>
      <path d="M${-hw + 24},${-hh * 0.36} A${hw * 0.9},${hh * 0.7} 0 0 1 ${hw - 24},${-hh * 0.36}"
            fill="none" stroke="#ffffff" stroke-width="${hh * 0.22}" stroke-linecap="round" opacity="0.5"/>
      ${heartShape(-hw + 4, -hh + 2, 17, '#ffd24d', '#e8a33d')}
      ${heartShape(hw - 4, -hh + 2, 17, '#ffd24d', '#e8a33d')}
      ${txt(0, fs * 0.36, fs, text, { fill: '#ffffff', stroke: 'rgba(164,42,82,0.5)', sw: fs * 0.16 })}
    </g>`;
  }

  // ハートのカウンター(右上)
  function heartCounter(x, y, val) {
    return `
    <g transform="translate(${x},${y})" pointer-events="none">
      <rect x="-92" y="-26" width="184" height="52" rx="26" fill="#ffffff" opacity="0.92"
            stroke="#ffb9d2" stroke-width="4" filter="url(#f-soft)"/>
      ${heartShape(-62, -2, 19, '#ff5e96', '#e8568d')}
      <text id="heart-count" x="6" y="11" font-size="32" font-weight="800" text-anchor="middle"
            fill="#a44a66">${val}</text>
    </g>
    <g data-act="heart-plus" transform="translate(${x + 64},${y})" style="cursor:pointer">
      <circle r="20" fill="url(#g-pinkbtn)" stroke="#ffffff" stroke-width="4"/>
      <path d="M-9,0 L9,0 M0,-9 L0,9" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
    </g>`;
  }

  // せっていボタン(歯車)
  function gearBtn(x, y) {
    var teeth = '';
    for (var i = 0; i < 8; i++) {
      var a = (i / 8) * Math.PI * 2;
      teeth += `<rect x="-4" y="-25" width="8" height="10" rx="3" fill="#ffffff"
                transform="rotate(${(a * 180 / Math.PI).toFixed(0)})"/>`;
    }
    return `
    <g data-act="settings" transform="translate(${x},${y})" style="cursor:pointer">
      <rect x="-58" y="-26" width="116" height="52" rx="26" fill="url(#g-pinkbtn)"
            stroke="#ffffff" stroke-width="4" filter="url(#f-soft)"/>
      <g transform="translate(-32,0) scale(0.72)">${teeth}<circle r="16" fill="#ffffff"/><circle r="7" fill="#ff5e96"/></g>
      ${txt(14, 8, 23, 'せってい', { fill: '#ffffff', sw: 0, stroke: 'none' })}
    </g>`;
  }

  // もどるボタン
  function backBtn(x, y, act) {
    return `
    <g data-act="${act || 'back'}" transform="translate(${x},${y})" style="cursor:pointer">
      <rect x="-62" y="-27" width="124" height="54" rx="27" fill="url(#g-pinkbtn)"
            stroke="#ffffff" stroke-width="5" filter="url(#f-soft)"/>
      <path d="M-40,0 L-22,-12 M-40,0 L-22,12 M-40,0 L-12,0" stroke="#ffffff" stroke-width="6"
            stroke-linecap="round" stroke-linejoin="round"/>
      ${txt(16, 8, 24, 'もどる', { fill: '#ffffff', sw: 0, stroke: 'none' })}
    </g>`;
  }

  // おしらせボタン(星+Nバッジ)
  function noticeBtn(x, y) {
    return `
    <g data-act="notice" transform="translate(${x},${y})" style="cursor:pointer">
      <circle r="42" fill="url(#g-panel)" stroke="#ffb9d2" stroke-width="4" filter="url(#f-soft)"/>
      ${starShape(0, -7, 21, '#ffd24d', '#e8a33d')}
      ${txt(0, 30, 16, 'おしらせ', { fill: '#a44a66', stroke: '#ffffff', sw: 4 })}
      <circle cx="30" cy="-30" r="13" fill="#ff5e96" stroke="#ffffff" stroke-width="3"/>
      <text x="30" y="-24" font-size="17" font-weight="800" text-anchor="middle" fill="#ffffff">N</text>
    </g>`;
  }

  // プレゼント箱
  function presentBox(x, y, s) {
    return `
    <g data-act="present" transform="translate(${x},${y}) scale(${s || 1})" style="cursor:pointer">
      <g class="wiggle">
        <ellipse cy="52" rx="56" ry="11" fill="#a44a66" opacity="0.14"/>
        <rect x="-50" y="-18" width="100" height="66" rx="10" fill="url(#g-pinkbtn)" stroke="#e8568d" stroke-width="4"/>
        <rect x="-56" y="-34" width="112" height="26" rx="9" fill="#ff8ab5" stroke="#e8568d" stroke-width="4"/>
        <rect x="-10" y="-34" width="20" height="82" fill="#fff0c9" stroke="#e8c977" stroke-width="3"/>
        ${bowShape(0, -52, 26, '#ffd24d', '#e8a33d')}
        <circle cx="-30" cy="6" r="5" fill="#ffffff" opacity="0.6"/>
      </g>
    </g>`;
  }

  // ハンガーアイコンの丸ボタン(コーデをみる)
  function hangerBtn(x, y, act, label) {
    return `
    <g data-act="${act}" transform="translate(${x},${y})" style="cursor:pointer">
      <circle r="46" fill="url(#g-orangebtn)" stroke="#ffffff" stroke-width="5" filter="url(#f-soft)"/>
      <g transform="translate(0,-8)">
        <path d="M0,-16 a7,7 0 1 1 7,-7 M0,-16 L0,-8 M0,-8 L-26,8 L26,8 Z" fill="none"
              stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      ${txt(0, 26, 15, label || 'コーデ', { fill: '#ffffff', sw: 0, stroke: 'none' })}
      ${txt(0, 41, 15, 'をみる', { fill: '#ffffff', sw: 0, stroke: 'none' })}
    </g>`;
  }

  // ---------------------------------------------------------------- カテゴリアイコン(10種)

  function categoryIcon(slot) {
    switch (slot) {
      case 'dress': return `
        <path d="M-10,-26 L10,-26 L14,-12 L22,-4 L13,2 L16,24 Q0,32 -16,24 L-13,2 L-22,-4 L-14,-12 Z"
              fill="#ff8ab5" stroke="#e8568d" stroke-width="3" stroke-linejoin="round"/>
        ${bowShape(0, -26, 11, '#ffd24d', '#e8a33d')}`;
      case 'headband': return `
        <path d="M-24,8 A24,24 0 0 1 24,8" fill="none" stroke="#ff5e96" stroke-width="8" stroke-linecap="round"/>
        ${bowShape(12, -16, 13, '#ff8ab5', '#e8568d')}`;
      case 'earring': return `
        <g transform="translate(-11,-8)"><circle r="5" fill="#ffd24d" stroke="#e8a33d" stroke-width="2"/>
        <path d="M0,5 L0,12" stroke="#caa23c" stroke-width="2.5"/>${heartShape(0, 20, 9, '#7ed6f7', '#3aa6dd')}</g>
        <g transform="translate(11,-8)"><circle r="5" fill="#ffd24d" stroke="#e8a33d" stroke-width="2"/>
        <path d="M0,5 L0,12" stroke="#caa23c" stroke-width="2.5"/>${heartShape(0, 20, 9, '#ff8ab5', '#e8568d')}</g>`;
      case 'ring': return `
        <circle cy="6" r="15" fill="none" stroke="#f0b13c" stroke-width="6"/>
        ${heartShape(0, -14, 11, '#ff8ab5', '#e8568d')}`;
      case 'necklace': return `
        <path d="M-20,-12 A22,22 0 0 0 20,-12" fill="none" stroke="#f0b13c" stroke-width="4" stroke-dasharray="1.5 5" stroke-linecap="round"/>
        ${heartShape(0, 14, 11, '#ffd24d', '#e8a33d')}`;
      case 'bracelet': return [0, 1, 2, 3, 4, 5, 6, 7].map(function (i) {
          var a = (i / 8) * Math.PI * 2;
          var cols = ['#ff8ab5', '#ffd24d', '#7ed6f7', '#c79bf2'];
          return `<circle cx="${(Math.cos(a) * 16).toFixed(1)}" cy="${(Math.sin(a) * 16).toFixed(1)}" r="5.5"
                  fill="${cols[i % 4]}" stroke="#ffffff" stroke-width="1.6"/>`;
        }).join('');
      case 'socks': return `
        <path d="M-8,-24 L10,-24 L10,4 Q10,18 -4,18 Q-16,18 -16,6 L-8,-2 Z"
              fill="#ffffff" stroke="#f29ebf" stroke-width="3" stroke-linejoin="round"/>
        <rect x="-9" y="-26" width="20" height="9" rx="4" fill="#ff9dc2" stroke="#e8568d" stroke-width="2.4"/>`;
      case 'shoes': return `
        <path d="M-22,8 Q-22,-8 -6,-10 Q14,-12 20,2 L22,12 Q0,18 -20,14 Z"
              fill="#ff5e96" stroke="#e8568d" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="-2" cy="-4" r="3.6" fill="#ffd24d" stroke="#e8a33d" stroke-width="1.6"/>`;
      case 'bag': return `
        <path d="M-12,-12 a12,12 0 0 1 24,0" fill="none" stroke="#e8568d" stroke-width="4"/>
        <rect x="-19" y="-12" width="38" height="30" rx="10" fill="#ff8ab5" stroke="#e8568d" stroke-width="3"/>
        ${heartShape(0, 0, 9, '#ffffff', '#e8568d')}`;
      case 'hairAcc': return bowShape(0, -2, 20, '#ff8ab5', '#e8568d');
      default: return '';
    }
  }

  // ---------------------------------------------------------------- ステッカー(写真デコ)

  function sticker(type, s) {
    s = s || 1;
    switch (type) {
      case 'heart': return `<g transform="scale(${s})">${heartShape(0, 0, 22, '#ff7fae', '#e8568d')}
        <path d="M-10,-8 c-4,1 -7,4 -8,8" stroke="#ffffff" stroke-width="4" fill="none" opacity="0.7" stroke-linecap="round"/></g>`;
      case 'ribbon': return `<g transform="scale(${s})">${bowShape(0, -6, 24, '#ff8ab5', '#e8568d')}</g>`;
      case 'star': return `<g transform="scale(${s})">${starShape(0, 0, 22, '#ffd24d', '#e8a33d')}</g>`;
      case 'bear': return `
        <g transform="scale(${s})">
          <circle cx="-15" cy="-14" r="8" fill="#e9c9a8" stroke="#b98e63" stroke-width="2.5"/>
          <circle cx="15" cy="-14" r="8" fill="#e9c9a8" stroke="#b98e63" stroke-width="2.5"/>
          <circle r="19" fill="#e9c9a8" stroke="#b98e63" stroke-width="2.5"/>
          <circle cx="-7" cy="-3" r="2.6" fill="#5c3a26"/><circle cx="7" cy="-3" r="2.6" fill="#5c3a26"/>
          <ellipse cy="6" rx="6.5" ry="5" fill="#fff0dd"/><circle cy="4" r="2.2" fill="#5c3a26"/>
        </g>`;
      case 'flower': return `<g transform="scale(${s})">
        ${[0, 1, 2, 3, 4].map(function (i) {
          var a = -Math.PI / 2 + (i / 5) * Math.PI * 2;
          return `<ellipse cx="${(Math.cos(a) * 11).toFixed(1)}" cy="${(Math.sin(a) * 11).toFixed(1)}"
                  rx="8.5" ry="10" fill="#ffb7d4" stroke="#f284b3" stroke-width="2"
                  transform="rotate(${(a * 180 / Math.PI + 90).toFixed(0)} ${(Math.cos(a) * 11).toFixed(1)} ${(Math.sin(a) * 11).toFixed(1)})"/>`;
        }).join('')}
        <circle r="7" fill="#ffd24d" stroke="#e8a33d" stroke-width="2"/></g>`;
      case 'crown': return `
        <g transform="scale(${s})">
          <path d="M-20,10 L-24,-10 L-10,-2 L0,-16 L10,-2 L24,-10 L20,10 Z"
                fill="#ffd24d" stroke="#e8a33d" stroke-width="2.5" stroke-linejoin="round"/>
          <circle cy="2" r="3.4" fill="#ff5e96"/>
        </g>`;
      default: return '';
    }
  }

  // ---------------------------------------------------------------- 指マークガイド

  function fingerHint() {
    return `
    <circle id="hint-ripple" r="0" fill="none" stroke="#ff5e96" stroke-width="6"
            opacity="0" pointer-events="none"/>
    <g id="hint-hand" opacity="0" pointer-events="none">
      <g transform="translate(12,16)">
        <path d="M-9,2 a9,9 0 0 1 18,0 l0,34
                 c10,-7 24,-4 29,8 c7,17 -3,40 -16,48 c-14,9 -34,7 -44,-4
                 c-9,-10 -11,-24 -5,-35 c4,-7 8,-10 18,-13 l0,-38"
              fill="#ffffff" stroke="${OL}" stroke-width="5.5" stroke-linejoin="round"/>
        <path d="M-27,52 c-7,2 -11,8 -9,15 c2,6 8,9 14,7" fill="#ffffff"
              stroke="${OL}" stroke-width="5.5" stroke-linecap="round"/>
        <path d="M-2,8 l0,28" stroke="#e8c9d4" stroke-width="4" stroke-linecap="round"/>
      </g>
    </g>`;
  }

  // ---------------------------------------------------------------- タイトルロゴ

  function titleLogo() {
    return `
    <g pointer-events="none">
      ${bowShape(0, -106, 52, '#ff5e96', '#d13d72')}
      ${heartShape(-150, -96, 22, '#ffd24d', '#e8a33d')}
      ${heartShape(150, -96, 22, '#7ed6f7', '#3aa6dd')}
      ${txt(0, -8, 78, 'キラキラ', { fill: '#ffd24d', stroke: '#ffffff', sw: 20 })}
      ${txt(0, -8, 78, 'キラキラ', { fill: 'none', stroke: '#e8568d', sw: 2.5 })}
      ${txt(0, 78, 86, 'モデルごっこ', { fill: '#ff5e96', stroke: '#ffffff', sw: 22 })}
      ${txt(0, 78, 86, 'モデルごっこ', { fill: 'none', stroke: '#d13d72', sw: 2.5 })}
      ${sparkle(-210, -40, 1, 0.1)}${sparkle(215, -50, 0.9, 0.6)}${sparkle(245, 40, 0.7, 1)}
      ${sparkle(-245, 50, 0.8, 0.4)}
      <g transform="translate(0,134)">
        <rect x="-225" y="-23" width="450" height="46" rx="23" fill="#ffffff" opacity="0.9"
              stroke="#ffb9d2" stroke-width="3.5"/>
        ${txt(0, 9, 27, 'わたしが モデルに なっちゃおう♪', { fill: '#e8568d', sw: 0, stroke: 'none' })}
      </g>
    </g>`;
  }

  // ---------------------------------------------------------------- 写真用

  function viewfinder(x1, y1, x2, y2) {
    var L = 56, W = 9;
    var c = function (px, py, dx, dy) {
      return `<path d="M${px + dx * L},${py} L${px},${py} L${px},${py + dy * L}" fill="none"
              stroke="#ffffff" stroke-width="${W}" stroke-linecap="round"/>`;
    };
    return `<g pointer-events="none" opacity="0.95" filter="url(#f-soft)">
      ${c(x1, y1, 1, 1)}${c(x2, y1, -1, 1)}${c(x1, y2, 1, -1)}${c(x2, y2, -1, -1)}
    </g>`;
  }

  return {
    OL: OL,
    defs: defs,
    backgroundRoom: backgroundRoom,
    backgroundRunway: backgroundRunway,
    roundStage: roundStage,
    txt: txt,
    heartShape: heartShape,
    starShape: starShape,
    sparkle: sparkle,
    bowShape: bowShape,
    pillBtn: pillBtn,
    roundBtn: roundBtn,
    panel: panel,
    ribbonBanner: ribbonBanner,
    heartCounter: heartCounter,
    gearBtn: gearBtn,
    backBtn: backBtn,
    noticeBtn: noticeBtn,
    presentBox: presentBox,
    hangerBtn: hangerBtn,
    categoryIcon: categoryIcon,
    sticker: sticker,
    fingerHint: fingerHint,
    titleLogo: titleLogo,
    viewfinder: viewfinder
  };
})();
