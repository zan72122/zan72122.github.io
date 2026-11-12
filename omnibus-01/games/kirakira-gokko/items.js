/* キラキラ モデルごっこ — アイテムカタログ(描画はアバターローカル座標で共有) */
window.ModelGame = window.ModelGame || {};

ModelGame.items = (function () {

  // ---------------------------------------------------------------- 形状ヘルパ

  function bow(x, y, s, c1, c2) { return ModelGame.art.bowShape(x, y, s, c1, c2); }
  function heart(x, y, s, f, st) { return ModelGame.art.heartShape(x, y, s, f, st); }
  function star(x, y, s, f, st) { return ModelGame.art.starShape(x, y, s, f, st); }

  // 胴着(ボディス) y:-250〜-172
  function bodice(fill, stroke, deco) {
    return `
    <path d="M-46,-250 L46,-250 C50,-212 48,-186 42,-172 L-42,-172 C-48,-186 -50,-212 -46,-250 Z"
          fill="${fill}" stroke="${stroke}" stroke-width="3.5"/>
    <path d="M-46,-250 C-30,-238 30,-238 46,-250" fill="none" stroke="${stroke}" stroke-width="2.5" opacity="0.6"/>
    ${deco || ''}`;
  }

  // ギャザースカート: 上端y-178、すそy hemY、半幅hemHW
  function skirt(fill, stroke, hemY, hemHW, frill) {
    var n = 5;
    var hem = '';
    var w = (hemHW * 2) / n;
    for (var i = 0; i < n; i++) {
      var x0 = -hemHW + i * w;
      hem += `Q${(x0 + w / 2).toFixed(1)},${hemY + 16} ${(x0 + w).toFixed(1)},${hemY} `;
    }
    return `
    <path d="M-43,-178 C-58,-148 -70,-116 ${-hemHW},${hemY} ${hem} C${hemHW - 7},-116 ${58},-148 43,-178 Z"
          fill="${fill}" stroke="${stroke}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M-30,-172 C-36,-140 -40,-110 -42,${hemY + 8} M0,-170 C0,-140 0,-110 0,${hemY + 4}
             M30,-172 C36,-140 40,-110 42,${hemY + 8}"
          stroke="${stroke}" stroke-width="2" fill="none" opacity="0.4"/>
    ${frill ? `<path d="M${-hemHW + 4},${hemY - 12} ${(function () {
        var s = ''; for (var j = 0; j < n; j++) {
          var x0 = -hemHW + 4 + j * ((hemHW * 2 - 8) / n);
          s += `Q${(x0 + (hemHW * 2 - 8) / n / 2).toFixed(1)},${hemY + 2} ${(x0 + (hemHW * 2 - 8) / n).toFixed(1)},${hemY - 12} `;
        } return s;
      })()}" fill="none" stroke="${frill}" stroke-width="5" stroke-linecap="round" opacity="0.9"/>` : ''}`;
  }

  // パフスリーブ(腕ローカル: 肩=0,0)
  function puff(fill, stroke) {
    return `
    <path d="M-20,-8 C-26,14 -22,34 -12,42 C-2,48 10,46 16,38 C24,26 24,6 18,-8 Z"
          fill="${fill}" stroke="${stroke}" stroke-width="3"/>
    <path d="M-12,40 Q2,48 15,37" fill="none" stroke="${stroke}" stroke-width="2.5" opacity="0.7"/>`;
  }
  // ながそで(腕ローカル)
  function longSleeve(fill, stroke) {
    return `
    <path d="M-17,-6 C-21,28 -19,58 -13,80 C-6,90 8,90 13,80 C19,58 21,28 17,-6 Z"
          fill="${fill}" stroke="${stroke}" stroke-width="3"/>
    <path d="M-13,76 L13,76" stroke="${stroke}" stroke-width="2.5" opacity="0.7"/>`;
  }
  // ながめのパフ袖+カフス(腕ローカル) — モックアップのブラウス風
  function puffLong(fill, stroke) {
    return `
    <path d="M-19,-8 C-27,18 -25,44 -17,62 C-12,71 12,71 15,61 C23,44 25,18 18,-8 Z"
          fill="${fill}" stroke="${stroke}" stroke-width="3"/>
    <path d="M-21,12 C-23,28 -22,44 -18,56 M19,12 C21,28 20,42 17,54"
          stroke="${stroke}" stroke-width="1.8" fill="none" opacity="0.5"/>
    <path d="M-13,60 Q0,68 13,60 L11,74 Q0,80 -11,74 Z"
          fill="${fill}" stroke="${stroke}" stroke-width="2.6"/>
    <path d="M-11,73 Q-6,77 -2,73 Q2,77 6,73 Q9,76 11,73"
          fill="none" stroke="${stroke}" stroke-width="2" opacity="0.7"/>`;
  }

  // カチューシャの土台
  function band(color, stroke) {
    return `
    <path d="M-66,-394 A 86,86 0 0 1 66,-394" fill="none" stroke="${stroke}" stroke-width="13" stroke-linecap="round"/>
    <path d="M-66,-394 A 86,86 0 0 1 66,-394" fill="none" stroke="${color}" stroke-width="9" stroke-linecap="round"/>`;
  }

  // ネックレスのチェーン
  function chain(color) {
    return `<path d="M-30,-258 Q0,-234 30,-258" fill="none" stroke="${color}"
            stroke-width="3.5" stroke-dasharray="2 5" stroke-linecap="round"/>`;
  }

  // ---------------------------------------------------------------- カタログ

  var LIST = [
    // ===== おようふく =====
    { id: 'd1', slot: 'dress', sub: 'onepiece', name: 'ピンクチェックリボンワンピ', isNew: true,
      icon: { cy: -200, s: 0.62 },
      draw: function () {
        // 白ブラウス + ピンクプラッドのジャンパースカート(モックアップ準拠)
        return bodice('#ffffff', '#e3c3cf',
          // えり
          `<path d="M-13,-252 Q0,-243 13,-252 L8,-240 Q0,-234 -8,-240 Z"
                 fill="#ffffff" stroke="#e3c3cf" stroke-width="2.4"/>
           <!-- むねの縦フリル -->
           <path d="M-5,-246 Q-9,-232 -5,-218 Q-9,-204 -5,-192 M5,-246 Q9,-232 5,-218 Q9,-204 5,-192"
                 fill="none" stroke="#f0d8e0" stroke-width="2.4"/>
           <circle cx="0" cy="-236" r="2.6" fill="#ffd0e0"/>
           <circle cx="0" cy="-220" r="2.6" fill="#ffd0e0"/>`) +
          // ジャンパースカートの胸あて(ハイウエスト)
          `<path d="M-46,-214 C-48,-198 -46,-184 -42,-172 L42,-172 C46,-184 48,-198 46,-214
                   C30,-220 -30,-220 -46,-214 Z"
                fill="url(#p-plaid-pink)" stroke="#e8568d" stroke-width="3"/>
           <!-- 肩ストラップ(フリル縁) -->
           <path d="M-42,-250 L-24,-212 L-36,-206 L-48,-244 Z" fill="url(#p-plaid-pink)" stroke="#e8568d" stroke-width="2.6"/>
           <path d="M42,-250 L24,-212 L36,-206 L48,-244 Z" fill="url(#p-plaid-pink)" stroke="#e8568d" stroke-width="2.6"/>
           <path d="M-48,-244 Q-51,-236 -46,-228 Q-50,-222 -45,-214 M48,-244 Q51,-236 46,-228 Q50,-222 45,-214"
                 fill="none" stroke="#ffffff" stroke-width="2.6" opacity="0.9"/>` +
          // すその白レースフリル(下にのぞく)
          `<path d="M-80,-92 ${(function () {
              var s = ''; for (var i = 0; i < 6; i++) {
                var x0 = -80 + i * 26.7;
                s += 'Q' + (x0 + 13.3).toFixed(1) + ',-58 ' + (x0 + 26.7).toFixed(1) + ',-72 ';
              } return s;
            })()} L72,-100 L-72,-100 Z"
                fill="#ffffff" stroke="#e8c9d6" stroke-width="2.6"/>` +
          skirt('url(#p-plaid-pink)', '#e8568d', -82, 78, '#ffffff') +
          // ウエストの帯
          `<path d="M-42,-176 L42,-176 L40,-166 L-40,-166 Z" fill="#ff7fae" stroke="#e8568d" stroke-width="2.4"/>` +
          // むねの大きなリボン+ハート
          bow(0, -206, 19, '#ff7fae', '#d8568a') +
          heart(0, -202, 9, '#ffd24d', '#cf8a2d') +
          // すその小さなハート
          heart(-34, -106, 9, '#ffffff', '#e8568d') + heart(34, -106, 9, '#ffffff', '#e8568d');
      },
      sleeves: function () { return puffLong('#ffffff', '#e3c3cf'); } },

    { id: 'd2', slot: 'dress', sub: 'onepiece', name: 'いちごフリルワンピ', isNew: true,
      icon: { cy: -200, s: 0.62 },
      draw: function () {
        return bodice('#ff8ab5', '#e8568d', bow(0, -240, 14, '#ffffff', '#e8b5c8')) +
          skirt('#ff9dc2', '#e8568d', -76, 80, '#ffffff') +
          `<g transform="translate(-28,-115) scale(0.5)">
            <path d="M0,-16 C14,-20 22,-9 19,5 C17,17 8,24 0,28 C-8,24 -17,17 -19,5 C-22,-9 -14,-20 0,-16Z"
                  fill="#ee3a64" stroke="#c0244d" stroke-width="4"/>
            <path d="M-10,-15 C-5,-20 5,-20 10,-15 L0,-10 Z" fill="#67b643"/></g>
          <g transform="translate(28,-115) scale(0.5)">
            <path d="M0,-16 C14,-20 22,-9 19,5 C17,17 8,24 0,28 C-8,24 -17,17 -19,5 C-22,-9 -14,-20 0,-16Z"
                  fill="#ee3a64" stroke="#c0244d" stroke-width="4"/>
            <path d="M-10,-15 C-5,-20 5,-20 10,-15 L0,-10 Z" fill="#67b643"/></g>`;
      },
      sleeves: function () { return puff('#ff8ab5', '#e8568d'); } },

    { id: 'd3', slot: 'dress', sub: 'onepiece', name: 'ラベンダーパフワンピ', isNew: true,
      icon: { cy: -200, s: 0.62 },
      draw: function () {
        return bodice('#d9bdf5', '#9a63d8', bow(0, -238, 15, '#ffffff', '#c79bf2')) +
          skirt('#c79bf2', '#9a63d8', -76, 78, '#ffffff') +
          star(-28, -112, 9, '#ffffff', '#c79bf2') + star(28, -112, 9, '#ffffff', '#c79bf2');
      },
      sleeves: function () { return puff('#d9bdf5', '#9a63d8'); } },

    { id: 'd4', slot: 'dress', sub: 'onepiece', name: 'ひまわりイエローワンピ', isNew: true,
      icon: { cy: -200, s: 0.62 },
      draw: function () {
        return bodice('#ffe49a', '#e8a33d', bow(0, -240, 14, '#ff8ab5', '#e8568d')) +
          skirt('#ffd24d', '#e8a33d', -76, 78, '#ffffff') +
          `<circle cx="0" cy="-112" r="9" fill="#ffffff" opacity="0.85"/>
           <circle cx="0" cy="-112" r="4" fill="#f5a13b"/>`;
      },
      sleeves: function () { return puff('#ffe49a', '#e8a33d'); } },

    { id: 't1', slot: 'top', sub: 'tops', name: 'しろふわブラウス', isNew: false,
      icon: { cy: -210, s: 0.78 },
      draw: function () {
        return bodice('#ffffff', '#e8b5c8',
          `<path d="M-42,-176 ${(function () { var s = ''; for (var i = 0; i < 4; i++) { var x0 = -42 + i * 21; s += `Q${x0 + 10.5},-162 ${x0 + 21},-176 `; } return s; })()}"
            fill="#ffffff" stroke="#e8b5c8" stroke-width="3"/>` +
          bow(0, -238, 13, '#ff8ab5', '#e8568d') +
          `<circle cx="0" cy="-212" r="3.5" fill="#ffd0e0"/><circle cx="0" cy="-194" r="3.5" fill="#ffd0e0"/>`);
      },
      sleeves: function () { return puff('#ffffff', '#e8b5c8'); } },

    { id: 'b1', slot: 'bottom', sub: 'bottoms', name: 'リボンフリルスカート', isNew: false,
      icon: { cy: -125, s: 0.85 },
      draw: function () {
        return skirt('#ff9dc2', '#e8568d', -80, 74, '#ffffff') +
          bow(0, -172, 15, '#ffd24d', '#e8a33d');
      } },

    { id: 'o1', slot: 'outer', sub: 'outer', name: 'ピンクカーデ', isNew: false,
      icon: { cy: -210, s: 0.78 },
      draw: function () {
        return `
        <path d="M-46,-248 C-52,-210 -50,-184 -44,-168 L-20,-168 C-24,-196 -24,-226 -20,-248 Z"
              fill="#ffb7d4" stroke="#f284b3" stroke-width="3.5"/>
        <path d="M46,-248 C52,-210 50,-184 44,-168 L20,-168 C24,-196 24,-226 20,-248 Z"
              fill="#ffb7d4" stroke="#f284b3" stroke-width="3.5"/>
        <circle cx="-13" cy="-236" r="3.4" fill="#ffffff" stroke="#f284b3" stroke-width="1.6"/>
        <circle cx="-13" cy="-218" r="3.4" fill="#ffffff" stroke="#f284b3" stroke-width="1.6"/>`;
      },
      sleeves: function () { return longSleeve('#ffb7d4', '#f284b3'); } },

    { id: 'set1', slot: 'set', sub: 'set', name: 'いちごおでかけセット', isNew: true,
      bundle: { dress: 'd2', bag: 'bg2', shoes: 'sh1' },
      icon: { cy: -190, s: 0.52 },
      draw: function () {
        return get('d2').draw() +
          `<g transform="translate(86,-150) scale(0.9)">${get('bg2').bagShape()}</g>`;
      } },

    // ===== カチューシャ =====
    { id: 'hb1', slot: 'headband', name: 'ハートリボンカチューシャ', isNew: true,
      icon: { cy: -416, s: 0.7 },
      draw: function () {
        // モックアップの大きなピンク水玉リボン(金縁ハートジュエル付き・左サイド)
        return band('#ff9ec4', '#d8568a') + `
        <g transform="translate(-46,-424) rotate(-14)">
          <!-- テール -->
          <path d="M-8,8 C-20,28 -16,46 -4,56 L8,48 C0,34 2,20 6,10 Z"
                fill="#f48ab0" stroke="#d8568a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M8,8 C22,26 20,44 10,54 L-2,48 C6,32 2,18 0,10 Z"
                fill="#ff9ec4" stroke="#d8568a" stroke-width="3" stroke-linejoin="round" transform="translate(8,-2)"/>
          <!-- 左ループ -->
          <path d="M-9,-3 C-32,-28 -68,-22 -66,4 C-64,28 -32,28 -9,9 Z"
                fill="#ff9ec4" stroke="#d8568a" stroke-width="3.4" stroke-linejoin="round"/>
          <path d="M-14,1 C-30,-14 -54,-12 -56,3 C-57,16 -36,20 -16,7 Z"
                fill="#f278a4" opacity="0.45"/>
          <circle cx="-32" cy="-9" r="3.2" fill="#ffffff" opacity="0.9"/>
          <circle cx="-48" cy="2" r="3.2" fill="#ffffff" opacity="0.9"/>
          <circle cx="-27" cy="9" r="2.7" fill="#ffffff" opacity="0.9"/>
          <circle cx="-52" cy="-9" r="2.3" fill="#ffffff" opacity="0.9"/>
          <!-- 右ループ -->
          <path d="M9,-3 C32,-28 68,-22 66,4 C64,28 32,28 9,9 Z"
                fill="#ff9ec4" stroke="#d8568a" stroke-width="3.4" stroke-linejoin="round"/>
          <path d="M14,1 C30,-14 54,-12 56,3 C57,16 36,20 16,7 Z"
                fill="#f278a4" opacity="0.45"/>
          <circle cx="32" cy="-9" r="3.2" fill="#ffffff" opacity="0.9"/>
          <circle cx="48" cy="2" r="3.2" fill="#ffffff" opacity="0.9"/>
          <circle cx="27" cy="9" r="2.7" fill="#ffffff" opacity="0.9"/>
          <circle cx="52" cy="-9" r="2.3" fill="#ffffff" opacity="0.9"/>
          <!-- ループのハイライト -->
          <path d="M-58,-10 C-62,-4 -62,4 -58,9 M58,-10 C62,-4 62,4 58,9"
                fill="none" stroke="#ffffff" stroke-width="3" opacity="0.6" stroke-linecap="round"/>
          <!-- 中央の結び+金縁ハートジュエル -->
          <rect x="-11" y="-12" width="22" height="24" rx="9"
                fill="#ff7fae" stroke="#d8568a" stroke-width="3"/>
          <rect x="-10" y="-13" width="20" height="20" rx="8"
                fill="url(#g-gold)" stroke="#cf8a2d" stroke-width="2.4" transform="translate(0,1)"/>
          <path d="M0,-7 c-3.4,-4.6 -10.5,-3 -10.5,2.6 c0,4.6 6.2,7.9 10.5,11.2
                   c4.3,-3.3 10.5,-6.6 10.5,-11.2 c0,-5.6 -7.1,-7.2 -10.5,-2.6Z"
                fill="#ff5e96" stroke="#c4406f" stroke-width="1.8" transform="translate(0,-1)"/>
          <circle cx="-3" cy="-6" r="1.8" fill="#ffffff" opacity="0.95"/>
        </g>`;
      } },
    { id: 'hb2', slot: 'headband', name: 'あおリボンカチューシャ', isNew: false,
      icon: { cy: -408, s: 0.78 },
      draw: function () { return band('#a8d8f0', '#5fb0d8') + bow(36, -428, 22, '#7ed6f7', '#3aa6dd'); } },
    { id: 'hb3', slot: 'headband', name: 'はなかんむり', isNew: false,
      icon: { cy: -408, s: 0.78 },
      draw: function () {
        var f = '';
        [[-46, -414], [0, -436], [46, -414]].forEach(function (p, i) {
          var cols = [['#ffb7d4', '#f284b3'], ['#ffd24d', '#e8a33d'], ['#d9bdf5', '#9a63d8']][i];
          f += `<circle cx="${p[0]}" cy="${p[1]}" r="11" fill="${cols[0]}" stroke="${cols[1]}" stroke-width="2.5"/>
                <circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#ffffff"/>`;
        });
        return band('#9fdca8', '#5cab68') + f;
      } },
    { id: 'hb4', slot: 'headband', name: 'むらさきリボンカチューシャ', isNew: false,
      icon: { cy: -408, s: 0.78 },
      draw: function () { return band('#d9bdf5', '#9a63d8') + bow(36, -428, 22, '#c79bf2', '#9a63d8'); } },
    { id: 'hb5', slot: 'headband', name: 'きいろリボンカチューシャ', isNew: false,
      icon: { cy: -408, s: 0.78 },
      draw: function () { return band('#ffe49a', '#e8a33d') + bow(36, -428, 22, '#ffd24d', '#e8a33d'); } },
    { id: 'hb6', slot: 'headband', name: 'ピンクハートカチューシャ', isNew: false,
      icon: { cy: -408, s: 0.78 },
      draw: function () {
        return band('#ff9dc2', '#e8568d') +
          heart(-36, -426, 12, '#ff7fae', '#e8568d') + heart(0, -438, 14, '#ff7fae', '#e8568d') +
          heart(36, -426, 12, '#ff7fae', '#e8568d');
      } },
    { id: 'hb7', slot: 'headband', name: 'おほしさまカチューシャ', isNew: false,
      icon: { cy: -408, s: 0.78 },
      draw: function () { return band('#ffd24d', '#e8a33d') + star(0, -440, 16, '#ffd24d', '#e8a33d') + star(-40, -420, 9, '#fff48f', '#e8a33d'); } },
    { id: 'hb8', slot: 'headband', name: 'こはなのカチューシャ', isNew: false,
      icon: { cy: -408, s: 0.78 },
      draw: function () {
        var f = '';
        for (var i = 0; i < 5; i++) {
          var a = Math.PI * (0.18 + i * 0.16);
          var x = -Math.cos(a) * 84, y = -350 - Math.sin(a) * 80;
          f += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="6.5" fill="#ffb7d4" stroke="#f284b3" stroke-width="2"/>
                <circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="2.4" fill="#fff"/>`;
        }
        return band('#ffffff', '#e8b5c8') + f;
      } },
    { id: 'hb9', slot: 'headband', name: 'いちごカチューシャ', isNew: false,
      icon: { cy: -408, s: 0.78 },
      draw: function () {
        return band('#ff8a80', '#d44a40') +
          `<g transform="translate(34,-428) scale(0.62)">
            <path d="M0,-16 C14,-20 22,-9 19,5 C17,17 8,24 0,28 C-8,24 -17,17 -19,5 C-22,-9 -14,-20 0,-16Z"
                  fill="#ee3a64" stroke="#c0244d" stroke-width="4"/>
            <path d="M-10,-15 C-5,-20 5,-20 10,-15 L0,-10 Z" fill="#67b643"/></g>`;
      } },
    { id: 'hb10', slot: 'headband', name: 'みずいろリボンカチューシャ', isNew: false,
      icon: { cy: -408, s: 0.78 },
      draw: function () { return band('#c9ecfa', '#7ec3e2') + bow(0, -440, 22, '#aee2f7', '#5fb0d8'); } },
    { id: 'hb11', slot: 'headband', name: 'レースカチューシャ', isNew: false,
      icon: { cy: -408, s: 0.78 },
      draw: function () {
        var lace = '';
        for (var i = 0; i < 7; i++) {
          var a = Math.PI * (0.14 + i * 0.12);
          var x = -Math.cos(a) * 92, y = -350 - Math.sin(a) * 88;
          lace += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="5" fill="#ffffff" stroke="#e8b5c8" stroke-width="1.8"/>`;
        }
        return band('#ffffff', '#e8b5c8') + lace;
      } },
    { id: 'hb12', slot: 'headband', name: 'ティアラカチューシャ', isNew: true,
      icon: { cy: -408, s: 0.78 },
      draw: function () {
        return band('#ffe49a', '#cf8a2d') +
          `<path d="M-26,-422 L-30,-446 L-14,-434 L0,-454 L14,-434 L30,-446 L26,-422 Z"
                fill="url(#g-gold)" stroke="#cf8a2d" stroke-width="3" stroke-linejoin="round"/>
           <circle cx="0" cy="-432" r="4.5" fill="#ff5e96"/>`;
      } },

    // ===== イヤリング (左右ペア ±80,-322) =====
    { id: 'e1', slot: 'earring', name: 'ハートドロップピアス', isNew: true,
      icon: { cy: -330, s: 1.5 },
      draw: function () { return earPair(function (sgn) {
        return `<circle cx="${sgn * 80}" cy="-324" r="4.5" fill="#ffd24d" stroke="#cf8a2d" stroke-width="1.6"/>
          <path d="M${sgn * 80},-320 L${sgn * 80},-310" stroke="#cf8a2d" stroke-width="2.4"/>` +
          heart(sgn * 80, -300, 11, '#ff7fae', '#e8568d');
      }); } },
    { id: 'e2', slot: 'earring', name: 'あおしずくピアス', isNew: false,
      icon: { cy: -330, s: 1.5 },
      draw: function () { return earPair(function (sgn) {
        return `<circle cx="${sgn * 80}" cy="-324" r="4.5" fill="#ffd24d" stroke="#cf8a2d" stroke-width="1.6"/>
          <path d="M${sgn * 80},-318 C${sgn * 80 - 9},-304 ${sgn * 80 - 9},-294 ${sgn * 80},-290
                   C${sgn * 80 + 9},-294 ${sgn * 80 + 9},-304 ${sgn * 80},-318Z"
                fill="#7ed6f7" stroke="#3aa6dd" stroke-width="2.4"/>`;
      }); } },
    { id: 'e3', slot: 'earring', name: 'むらさきジュエルピアス', isNew: false,
      icon: { cy: -330, s: 1.5 },
      draw: function () { return earPair(function (sgn) {
        return `<circle cx="${sgn * 80}" cy="-324" r="4.5" fill="#ffd24d" stroke="#cf8a2d" stroke-width="1.6"/>
          <path d="M${sgn * 80},-318 L${sgn * 80 + 8},-306 L${sgn * 80},-292 L${sgn * 80 - 8},-306 Z"
                fill="#c79bf2" stroke="#9a63d8" stroke-width="2.4" stroke-linejoin="round"/>`;
      }); } },
    { id: 'e4', slot: 'earring', name: 'おほしさまピアス', isNew: false,
      icon: { cy: -330, s: 1.5 },
      draw: function () { return earPair(function (sgn) {
        return `<circle cx="${sgn * 80}" cy="-324" r="4.5" fill="#ffd24d" stroke="#cf8a2d" stroke-width="1.6"/>
          <path d="M${sgn * 80},-320 L${sgn * 80},-310" stroke="#cf8a2d" stroke-width="2.4"/>` +
          star(sgn * 80, -302, 10, '#ffd24d', '#e8a33d');
      }); } },
    { id: 'e5', slot: 'earring', name: 'おはなピアス', isNew: false,
      icon: { cy: -330, s: 1.5 },
      draw: function () { return earPair(function (sgn) {
        var f = '';
        for (var i = 0; i < 5; i++) {
          var a = -Math.PI / 2 + (i / 5) * Math.PI * 2;
          f += `<circle cx="${(sgn * 80 + Math.cos(a) * 7).toFixed(1)}" cy="${(-308 + Math.sin(a) * 7).toFixed(1)}" r="4.4"
                fill="#ffb7d4" stroke="#f284b3" stroke-width="1.4"/>`;
        }
        return f + `<circle cx="${sgn * 80}" cy="-308" r="3.4" fill="#ffd24d"/>`;
      }); } },

    // ===== ゆびわ (腕ローカル・右手) =====
    { id: 'r1', slot: 'ring', name: 'ハートきらきらリング', isNew: true,
      icon: { cy: 88, s: 2.0, arm: true },
      draw: function () {
        return `<path d="M-7,92 a7,7 0 0 0 14,0" fill="none" stroke="#f0b13c" stroke-width="3.4"/>` +
          heart(0, 84, 8, '#ff7fae', '#e8568d') +
          `<path d="M6,76 l3,-3 M8,82 l4,0" stroke="#fff48f" stroke-width="2" stroke-linecap="round"/>`;
      } },
    { id: 'r2', slot: 'ring', name: 'おほしさまリング', isNew: false,
      icon: { cy: 88, s: 2.0, arm: true },
      draw: function () {
        return `<path d="M-7,92 a7,7 0 0 0 14,0" fill="none" stroke="#f0b13c" stroke-width="3.4"/>` +
          star(0, 84, 7.5, '#ffd24d', '#e8a33d');
      } },
    { id: 'r3', slot: 'ring', name: 'リボンリング', isNew: false,
      icon: { cy: 88, s: 2.0, arm: true },
      draw: function () {
        return `<path d="M-7,92 a7,7 0 0 0 14,0" fill="none" stroke="#f0b13c" stroke-width="3.4"/>` +
          bow(0, 84, 11, '#ff8ab5', '#e8568d');
      } },
    { id: 'r4', slot: 'ring', name: 'あおジュエルリング', isNew: false,
      icon: { cy: 88, s: 2.0, arm: true },
      draw: function () {
        return `<path d="M-7,92 a7,7 0 0 0 14,0" fill="none" stroke="#b9c5d4" stroke-width="3.4"/>
          <path d="M0,-7 L6,0 L0,7 L-6,0 Z" transform="translate(0,84)"
                fill="#7ed6f7" stroke="#3aa6dd" stroke-width="2"/>`;
      } },
    { id: 'r5', slot: 'ring', name: 'ティアラリング', isNew: false,
      icon: { cy: 88, s: 2.0, arm: true },
      draw: function () {
        return `<path d="M-7,92 a7,7 0 0 0 14,0" fill="none" stroke="#f0b13c" stroke-width="3.4"/>
          <path d="M-7,86 L-8,78 L-3,82 L0,75 L3,82 L8,78 L7,86 Z"
                fill="url(#g-gold)" stroke="#cf8a2d" stroke-width="1.6" stroke-linejoin="round"/>`;
      } },

    // ===== ネックレス =====
    { id: 'n1', slot: 'necklace', name: 'ハートネックレス', isNew: true,
      icon: { cy: -245, s: 1.7 },
      draw: function () { return chain('#e8c977') + heart(0, -232, 12, '#ff7fae', '#e8568d'); } },
    { id: 'n2', slot: 'necklace', name: 'パールネックレス', isNew: false,
      icon: { cy: -245, s: 1.7 },
      draw: function () {
        var beads = '';
        for (var i = 0; i <= 8; i++) {
          var t = i / 8;
          var x = -30 + t * 60;
          var y = -258 + Math.sin(t * Math.PI) * 18;
          beads += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.4" fill="#fff8f0" stroke="#dcc8b8" stroke-width="1.6"/>`;
        }
        return beads;
      } },
    { id: 'n3', slot: 'necklace', name: 'むらさきジュエルネックレス', isNew: false,
      icon: { cy: -245, s: 1.7 },
      draw: function () {
        return chain('#c0a8e0') +
          `<path d="M0,-240 L8,-230 L0,-218 L-8,-230 Z" fill="#c79bf2" stroke="#9a63d8" stroke-width="2.4" stroke-linejoin="round"/>`;
      } },
    { id: 'n4', slot: 'necklace', name: 'ゴールドチェーンネックレス', isNew: false,
      icon: { cy: -245, s: 1.7 },
      draw: function () {
        return chain('#e8c977') +
          `<circle cx="0" cy="-232" r="7" fill="none" stroke="url(#g-gold)" stroke-width="4"/>`;
      } },
    { id: 'n5', slot: 'necklace', name: 'あおビーズネックレス', isNew: false,
      icon: { cy: -245, s: 1.7 },
      draw: function () {
        var beads = '';
        for (var i = 0; i <= 8; i++) {
          var t = i / 8;
          var x = -30 + t * 60;
          var y = -258 + Math.sin(t * Math.PI) * 18;
          var c = i % 2 === 0 ? '#7ed6f7' : '#aee2f7';
          beads += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.2" fill="${c}" stroke="#3aa6dd" stroke-width="1.4"/>`;
        }
        return beads;
      } },

    // ===== ブレスレット (腕ローカル・手首 0,72) =====
    { id: 'br1', slot: 'bracelet', name: 'ハートパールブレスレット', isNew: true,
      icon: { cy: 72, s: 2.0, arm: true },
      draw: function () {
        var beads = '';
        for (var i = 0; i < 6; i++) {
          var x = -12.5 + i * 5;
          beads += `<circle cx="${x}" cy="72" r="3.6" fill="#fff8f0" stroke="#dcc8b8" stroke-width="1.4"/>`;
        }
        return beads + heart(0, 79, 7, '#ff7fae', '#e8568d');
      } },
    { id: 'br2', slot: 'bracelet', name: 'ピンクビーズブレスレット', isNew: false,
      icon: { cy: 72, s: 2.0, arm: true },
      draw: function () {
        var beads = '';
        for (var i = 0; i < 6; i++) {
          var x = -12.5 + i * 5;
          var c = i % 2 === 0 ? '#ff8ab5' : '#ffd0e0';
          beads += `<circle cx="${x}" cy="72" r="3.6" fill="${c}" stroke="#e8568d" stroke-width="1.3"/>`;
        }
        return beads;
      } },
    { id: 'br3', slot: 'bracelet', name: 'ゴールドバングル', isNew: false,
      icon: { cy: 72, s: 2.0, arm: true },
      draw: function () {
        return `<path d="M-13,70 Q0,78 13,70" fill="none" stroke="url(#g-gold)" stroke-width="5"/>
          <path d="M-13,70 Q0,78 13,70" fill="none" stroke="#cf8a2d" stroke-width="5" opacity="0.25"/>`;
      } },
    { id: 'br4', slot: 'bracelet', name: 'おはなブレスレット', isNew: false,
      icon: { cy: 72, s: 2.0, arm: true },
      draw: function () {
        return `<path d="M-13,71 Q0,77 13,71" fill="none" stroke="#9fdca8" stroke-width="3"/>
          <circle cx="-7" cy="72" r="3.4" fill="#ffb7d4" stroke="#f284b3" stroke-width="1.3"/>
          <circle cx="7" cy="72" r="3.4" fill="#ffd24d" stroke="#e8a33d" stroke-width="1.3"/>
          <circle cx="0" cy="76" r="3.4" fill="#c79bf2" stroke="#9a63d8" stroke-width="1.3"/>`;
      } },
    { id: 'br5', slot: 'bracelet', name: 'あおビーズブレスレット', isNew: false,
      icon: { cy: 72, s: 2.0, arm: true },
      draw: function () {
        var beads = '';
        for (var i = 0; i < 6; i++) {
          var x = -12.5 + i * 5;
          var c = i % 2 === 0 ? '#7ed6f7' : '#aee2f7';
          beads += `<circle cx="${x}" cy="72" r="3.6" fill="${c}" stroke="#3aa6dd" stroke-width="1.3"/>`;
        }
        return beads;
      } },

    // ===== くつした =====
    { id: 'so1', slot: 'socks', name: 'しろフリルくつした', isNew: false,
      icon: { cy: -35, s: 1.2 },
      draw: function () {
        var sock = function (cx) {
          return `<rect x="${cx - 16}" y="-64" width="32" height="62" rx="12" fill="#ffffff" stroke="#e8d5dc" stroke-width="2.5"/>
            <path d="M${cx - 16},-58 Q${cx - 8},-50 ${cx},-58 Q${cx + 8},-50 ${cx + 16},-58"
                  fill="none" stroke="#ffd0e0" stroke-width="4" stroke-linecap="round"/>`;
        };
        return sock(-26) + sock(26);
      } },
    { id: 'so2', slot: 'socks', name: 'ピンクボーダーくつした', isNew: false,
      icon: { cy: -45, s: 1.2 },
      draw: function () {
        var sock = function (cx) {
          return `<rect x="${cx - 16}" y="-86" width="32" height="84" rx="12" fill="#ffffff" stroke="#e8b5c8" stroke-width="2.5"/>
            <path d="M${cx - 15},-72 L${cx + 15},-72 M${cx - 15},-54 L${cx + 15},-54 M${cx - 15},-36 L${cx + 15},-36"
                  stroke="#ff9dc2" stroke-width="7"/>`;
        };
        return sock(-26) + sock(26);
      } },

    // ===== くつ =====
    { id: 'sh1', slot: 'shoes', name: 'リボンストラップシューズ', isNew: true,
      icon: { cy: -12, s: 1.3 },
      draw: function () {
        var shoe = function (cx, sgn) {
          return `<path d="M${cx - 19},-2 Q${cx - 20},-16 ${cx - 8},-19 Q${cx + 10},-22 ${cx + 17},-8 L${cx + 19},2
                  Q${cx},8 ${cx - 18},4 Z" fill="#ff5e96" stroke="#d13d72" stroke-width="3"/>
            <path d="M${cx - 14},-14 L${cx + 12},-14" stroke="#d13d72" stroke-width="2.5"/>` +
            bow(cx + sgn * 4, -18, 10, '#ffd24d', '#e8a33d');
        };
        return shoe(-27, -1) + shoe(27, 1);
      } },
    { id: 'sh2', slot: 'shoes', name: 'しろスニーカー', isNew: false,
      icon: { cy: -12, s: 1.3 },
      draw: function () {
        var shoe = function (cx) {
          return `<path d="M${cx - 19},-2 Q${cx - 20},-16 ${cx - 8},-19 Q${cx + 10},-22 ${cx + 17},-8 L${cx + 19},2
                  Q${cx},8 ${cx - 18},4 Z" fill="#ffffff" stroke="#c9b8c2" stroke-width="3"/>
            <path d="M${cx - 18},0 Q${cx},6 ${cx + 18},0" stroke="#ff8ab5" stroke-width="4" fill="none"/>
            <path d="M${cx - 10},-15 L${cx + 6},-13 M${cx - 11},-10 L${cx + 8},-8" stroke="#ffb9d2" stroke-width="2.4"/>`;
        };
        return shoe(-27) + shoe(27);
      } },

    // ===== バッグ =====
    { id: 'bg1', slot: 'bag', name: 'リボンハートバッグ', isNew: true,
      icon: { cy: -140, s: 1.1 },
      draw: function () {
        return `<g transform="translate(84,-148)">${this.bagShape()}</g>`;
      },
      bagShape: function () {
        return `
        <path d="M-14,-22 a14,14 0 0 1 28,0" fill="none" stroke="#e8568d" stroke-width="4.5"/>
        <rect x="-26" y="-22" width="52" height="42" rx="14" fill="#ff8ab5" stroke="#e8568d" stroke-width="3.5"/>
        ${heart(0, -4, 12, '#ffffff', '#e8568d')}
        ${bow(-16, -24, 13, '#ffd24d', '#e8a33d')}
        <circle cx="-15" cy="-12" r="4" fill="#ffffff" opacity="0.55"/>`;
      } },
    { id: 'bg2', slot: 'bag', name: 'しろポシェット', isNew: false,
      icon: { cy: -140, s: 1.1 },
      draw: function () {
        return `<g transform="translate(84,-148)">${this.bagShape()}</g>`;
      },
      bagShape: function () {
        return `
        <path d="M-12,-20 a12,12 0 0 1 24,0" fill="none" stroke="#c9b8c2" stroke-width="4"/>
        <rect x="-24" y="-20" width="48" height="38" rx="12" fill="#ffffff" stroke="#d8c2cc" stroke-width="3.5"/>
        <rect x="-24" y="-20" width="48" height="16" rx="8" fill="#ffd0e0" stroke="#d8c2cc" stroke-width="3"/>
        ${star(0, 2, 8, '#ffd24d', '#e8a33d')}`;
      } },

    // ===== ヘアアクセ =====
    { id: 'ha1', slot: 'hairAcc', name: 'ピンクリボンクリップ', isNew: false,
      icon: { cy: -400, s: 1.3 },
      draw: function () { return bow(-56, -402, 20, '#ff8ab5', '#e8568d'); } },
    { id: 'ha2', slot: 'hairAcc', name: 'おほしさまクリップ', isNew: false,
      icon: { cy: -400, s: 1.3 },
      draw: function () { return star(-56, -402, 13, '#ffd24d', '#e8a33d') + star(-42, -390, 8, '#fff48f', '#e8a33d'); } }
  ];

  function earPair(fn) { return fn(-1) + fn(1); }

  var BY_ID = {};
  LIST.forEach(function (it) { BY_ID[it.id] = it; });

  function get(id) { return BY_ID[id]; }
  function bySlot(slot) { return LIST.filter(function (it) { return it.slot === slot; }); }
  function clothes() {
    return LIST.filter(function (it) {
      return ['dress', 'top', 'bottom', 'outer', 'set'].indexOf(it.slot) >= 0;
    });
  }

  // ---------------------------------------------------------------- 装備ルール

  // 同じidをもう一度 → はずす。ワンピ⇔トップス/ボトムスは排他。setは一括。
  // 戻り値: true=装着 false=はずした
  function equip(state, id) {
    var it = get(id);
    if (!it) return false;
    if (it.slot === 'set') {
      for (var k in it.bundle) state[k] = it.bundle[k];
      state.top = null; state.bottom = null;
      return true;
    }
    if (state[it.slot] === id) { state[it.slot] = null; return false; }
    state[it.slot] = id;
    if (it.slot === 'dress') { state.top = null; state.bottom = null; }
    if (it.slot === 'top' || it.slot === 'bottom') state.dress = null;
    return true;
  }

  // おすすめコーデ(モックアップ05のチェックリストと一致)
  var RECOMMEND = {
    dress: 'd1', top: null, bottom: null, outer: null,
    headband: 'hb1', hairAcc: null,
    earring: 'e1', ring: 'r1', necklace: 'n1', bracelet: 'br1',
    socks: 'so1', shoes: 'sh1', bag: 'bg1', hairColor: 0
  };

  // すっぴん(したぎ+くつした)
  function bare() {
    return { dress: null, top: null, bottom: null, outer: null,
             headband: null, hairAcc: null,
             earring: null, ring: null, necklace: null, bracelet: null,
             socks: 'so1', shoes: null, bag: null, hairColor: 0 };
  }

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function randomCoord(hairColor) {
    var c = bare();
    c.hairColor = hairColor || 0;
    var d = pick(bySlot('dress'));
    c.dress = d.id;
    c.headband = pick(bySlot('headband')).id;
    c.earring = pick(bySlot('earring')).id;
    c.ring = pick(bySlot('ring')).id;
    c.necklace = pick(bySlot('necklace')).id;
    c.bracelet = pick(bySlot('bracelet')).id;
    c.socks = pick(bySlot('socks')).id;
    c.shoes = pick(bySlot('shoes')).id;
    c.bag = pick(bySlot('bag')).id;
    return c;
  }

  // ---------------------------------------------------------------- カードアイコン描画

  // アイテムをカードの中心(cx,cy)に納める
  function cardIcon(item, cx, cy) {
    var ic = item.icon || { cy: -200, s: 0.6 };
    return `<g pointer-events="none" transform="translate(${cx},${cy}) scale(${ic.s}) translate(0,${-ic.cy})">${item.draw()}</g>`;
  }

  return {
    LIST: LIST,
    get: get,
    bySlot: bySlot,
    clothes: clothes,
    equip: equip,
    RECOMMEND: RECOMMEND,
    bare: bare,
    randomCoord: randomCoord,
    cardIcon: cardIcon
  };
})();
