/* 2D HUDオーバーレイ(SVG): ボタン・進行アイコン・指ヒント・確認ダイアログ
   旧2D版 art.js のHUD部品を移植 */

const OL = '#6b3a4e';
const OW = 6;

/* ---- defs(グローフィルタ+トレイ用ミニアイコン) ---- */

export function hudDefs() {
  // いちごの種
  let seeds = '';
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c <= r + 1; c++) {
      const y = -16 + r * 13;
      const span = 14 + r * 8;
      const x = -span / 2 + (span / (r + 1)) * c;
      seeds += `<ellipse cx="${x.toFixed(1)}" cy="${y}" rx="2.4" ry="3.6"
                 fill="#ffe082" stroke="#caa23c" stroke-width="0.8"/>`;
    }
  }
  let kSeeds = '';
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    const x = (Math.cos(a) * 17).toFixed(1), y = (Math.sin(a) * 17).toFixed(1);
    kSeeds += `<ellipse cx="${x}" cy="${y}" rx="2" ry="3.4" fill="#3a2c18"
                transform="rotate(${(a * 180 / Math.PI + 90).toFixed(0)} ${x} ${y})"/>`;
  }
  return `
  <filter id="f-glow" x="-60%" y="-60%" width="220%" height="220%">
    <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="#ffd866" flood-opacity="0.95"/>
    <feDropShadow dx="0" dy="0" stdDeviation="20" flood-color="#ffd866" flood-opacity="0.6"/>
  </filter>
  <filter id="f-soft" x="-40%" y="-40%" width="180%" height="180%">
    <feDropShadow dx="0" dy="7" stdDeviation="8" flood-color="#6b3a4e" flood-opacity="0.28"/>
  </filter>
  <linearGradient id="g-pinkbtn" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ff9dc2"/><stop offset="100%" stop-color="#ff5e96"/>
  </linearGradient>
  <linearGradient id="g-redbtn" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ff8a80"/><stop offset="100%" stop-color="#e8403e"/>
  </linearGradient>
  <linearGradient id="g-straw" x1="0.2" y1="0" x2="0.6" y2="1">
    <stop offset="0%" stop-color="#ff7d92"/><stop offset="55%" stop-color="#ee3a64"/>
    <stop offset="100%" stop-color="#c0244d"/>
  </linearGradient>
  <radialGradient id="g-cherry" cx="35%" cy="30%" r="80%">
    <stop offset="0%" stop-color="#ff7b8f"/><stop offset="60%" stop-color="#e23a5e"/>
    <stop offset="100%" stop-color="#aa1c40"/>
  </radialGradient>
  <radialGradient id="g-grape" cx="35%" cy="30%" r="80%">
    <stop offset="0%" stop-color="#c79bf2"/><stop offset="60%" stop-color="#9a63d8"/>
    <stop offset="100%" stop-color="#6f3cab"/>
  </radialGradient>
  <radialGradient id="g-kiwi" cx="50%" cy="50%" r="55%">
    <stop offset="0%" stop-color="#f2f7c8"/><stop offset="35%" stop-color="#c8e26d"/>
    <stop offset="100%" stop-color="#8cb83a"/>
  </radialGradient>
  <linearGradient id="g-choco" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#9c6b48"/><stop offset="100%" stop-color="#6b412a"/>
  </linearGradient>
  <linearGradient id="g-star" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ffe98a"/><stop offset="100%" stop-color="#ffb938"/>
  </linearGradient>
  <linearGradient id="g-heart" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ff9ec5"/><stop offset="100%" stop-color="#ff5e96"/>
  </linearGradient>
  <linearGradient id="g-flame" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#fff3b0"/><stop offset="45%" stop-color="#ffc44d"/>
    <stop offset="100%" stop-color="#ff7a1a"/>
  </linearGradient>

  <g id="def-strawberry">
    <path d="M0,-26 C22,-32 36,-14 31,8 C27,28 12,40 0,46 C-12,40 -27,28 -31,8 C-36,-14 -22,-32 0,-26 Z"
          fill="url(#g-straw)" stroke="${OL}" stroke-width="5" stroke-linejoin="round"/>
    ${seeds}
    <ellipse cx="-13" cy="-12" rx="9" ry="13" fill="#ffffff" opacity="0.55" transform="rotate(-18 -13 -12)"/>
    <path d="M-20,-24 C-12,-32 -4,-33 0,-27 C4,-33 12,-32 20,-24 C12,-22 4,-22 0,-25 C-4,-22 -12,-22 -20,-24Z"
          fill="#67b643" stroke="#3c7d27" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g id="def-cherry">
    <path d="M-16,-2 C-22,-26 -8,-40 4,-44 M16,2 C14,-22 8,-36 4,-44"
          fill="none" stroke="#3c7d27" stroke-width="5" stroke-linecap="round"/>
    <circle cx="-16" cy="12" r="17" fill="url(#g-cherry)" stroke="${OL}" stroke-width="4.5"/>
    <circle cx="17" cy="16" r="15" fill="url(#g-cherry)" stroke="${OL}" stroke-width="4.5"/>
    <ellipse cx="-21" cy="6" rx="5" ry="3.6" fill="#fff" opacity="0.7"/>
  </g>
  <g id="def-grape">
    <path d="M0,-34 L0,-44" stroke="#3c7d27" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="-14" cy="-22" r="12" fill="url(#g-grape)" stroke="${OL}" stroke-width="4"/>
    <circle cx="14" cy="-22" r="12" fill="url(#g-grape)" stroke="${OL}" stroke-width="4"/>
    <circle cx="-22" cy="0" r="12" fill="url(#g-grape)" stroke="${OL}" stroke-width="4"/>
    <circle cx="0" cy="-2" r="13" fill="url(#g-grape)" stroke="${OL}" stroke-width="4"/>
    <circle cx="22" cy="0" r="12" fill="url(#g-grape)" stroke="${OL}" stroke-width="4"/>
    <circle cx="-11" cy="20" r="12" fill="url(#g-grape)" stroke="${OL}" stroke-width="4"/>
    <circle cx="12" cy="20" r="12" fill="url(#g-grape)" stroke="${OL}" stroke-width="4"/>
    <ellipse cx="-4" cy="-7" rx="4.5" ry="3.4" fill="#fff" opacity="0.7"/>
  </g>
  <g id="def-kiwi">
    <circle r="34" fill="#7d5b35" stroke="${OL}" stroke-width="4.5"/>
    <circle r="30" fill="url(#g-kiwi)"/>
    ${kSeeds}
    <circle r="9" fill="#f7f3d8"/>
  </g>
  <g id="def-choco">
    <rect x="-30" y="-26" width="60" height="52" rx="12" fill="url(#g-choco)" stroke="${OL}" stroke-width="5"/>
    <rect x="-21" y="-18" width="18" height="14" rx="5" fill="#b98a60" opacity="0.85"/>
    <rect x="3" y="-18" width="18" height="14" rx="5" fill="#b98a60" opacity="0.85"/>
    <rect x="-21" y="2" width="18" height="14" rx="5" fill="#b98a60" opacity="0.85"/>
    <rect x="3" y="2" width="18" height="14" rx="5" fill="#b98a60" opacity="0.85"/>
    <path d="M-26,-30 q10,8 24,2 q16,-6 28,2" fill="none" stroke="#fff" stroke-width="5"
          stroke-linecap="round" opacity="0.85"/>
  </g>
  <g id="def-star">
    <path d="M0,-34 L9.4,-12 L33,-10 L15,6 L20.5,29 L0,17 L-20.5,29 L-15,6 L-33,-10 L-9.4,-12 Z"
          fill="url(#g-star)" stroke="#c98a16" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M0,-22 L5.5,-9 L-7,-2 Z" fill="#fff" opacity="0.55"/>
  </g>
  <g id="def-heart">
    <path d="M0,-10 C-8,-30 -36,-26 -36,-4 C-36,14 -14,26 0,36 C14,26 36,14 36,-4 C36,-26 8,-30 0,-10 Z"
          fill="url(#g-heart)" stroke="${OL}" stroke-width="5" stroke-linejoin="round"/>
    <ellipse cx="-16" cy="-8" rx="8" ry="6" fill="#fff" opacity="0.6"/>
  </g>
  <g id="def-candle">
    <path d="M0,-46 C4,-40 6,-36 0,-30" fill="none" stroke="#5a4632" stroke-width="4" stroke-linecap="round"/>
    <rect x="-13" y="-30" width="26" height="74" rx="9" fill="#fff6fa" stroke="${OL}" stroke-width="4.5"/>
    <path d="M-13,-16 l26,-9 l0,13 l-26,9 Z M-13,8 l26,-9 l0,13 l-26,9 Z M-13,32 l26,-9 l0,13 l-26,8 Z"
          fill="#ff7fae"/>
    <rect x="-13" y="-30" width="9" height="74" rx="5" fill="#ffffff" opacity="0.55"/>
  </g>
  <g id="def-flame2d">
    <path d="M0,-30 C12,-16 15,-6 15,2 A15,15 0 0 1 -15,2 C-15,-6 -12,-16 0,-30 Z"
          fill="url(#g-flame)" stroke="#e8650f" stroke-width="2"/>
    <path d="M0,-15 C7,-8 9,-3 9,3 A9,9 0 0 1 -9,3 C-9,-3 -7,-8 0,-15 Z" fill="#fff8d6" opacity="0.95"/>
  </g>`;
}

/* ---- 共通ボタン ---- */

export function roundBtn(opt) {
  return `
  <g id="${opt.id}" data-act="${opt.act || opt.id}" transform="translate(${opt.x},${opt.y})">
    <g class="${opt.cls || ''}" id="${opt.id}-inner" filter="url(#f-soft)">
      <circle r="${opt.r}" fill="url(#${opt.grad || 'g-pinkbtn'})" stroke="${OL}" stroke-width="${OW}"/>
      <path d="M${-opt.r * 0.55},${-opt.r * 0.42} A ${opt.r * 0.72} ${opt.r * 0.72} 0 0 1 ${opt.r * 0.55},${-opt.r * 0.42}"
            fill="none" stroke="#ffffff" stroke-width="${opt.r * 0.16}" stroke-linecap="round" opacity="0.65"/>
      <g pointer-events="none">${opt.icon || ''}</g>
    </g>
  </g>`;
}

export const iconArrow = (s = 1) =>
  `<path d="M${-22 * s},${-20 * s} L${10 * s},0 L${-22 * s},${20 * s} Z" transform="translate(${6 * s},0)"
    fill="#ffffff" stroke="#ffffff" stroke-width="${8 * s}" stroke-linejoin="round"/>`;

export const iconNext = () =>
  `<path d="M-26,0 L14,0 M2,-16 L20,0 L2,16" fill="none" stroke="#ffffff" stroke-width="13"
    stroke-linecap="round" stroke-linejoin="round"/>`;

export const iconHome = () =>
  `<path d="M-20,2 L0,-16 L20,2 M-14,-2 L-14,16 L14,16 L14,-2" fill="none" stroke="#ffffff"
    stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`;

export const iconReplay = () =>
  `<path d="M16,-7 A17,17 0 1 1 12,-13" fill="none" stroke="#ffffff" stroke-width="9" stroke-linecap="round"/>
   <path d="M7,-22 L21,-13 L7,-2 Z" fill="#ffffff"/>`;

export const iconMatch = () => `
  <g transform="rotate(-30)">
    <rect x="-6" y="-8" width="12" height="42" rx="5" fill="#f3c98a" stroke="${OL}" stroke-width="4"/>
    <ellipse cx="0" cy="-16" rx="11" ry="14" fill="#e8403e" stroke="${OL}" stroke-width="4"/>
    <ellipse cx="-3" cy="-20" rx="3.5" ry="4.5" fill="#fff" opacity="0.6"/>
  </g>
  <use href="#def-flame2d" transform="translate(16,-26) scale(0.55)"/>`;

export const nextButton = () =>
  roundBtn({ id: 'btn-next', x: 1150, y: 632, r: 62, icon: iconNext(), cls: 'pulse glow' });

export const homeButton = () =>
  roundBtn({ id: 'btn-home', x: 62, y: 58, r: 40, icon: iconHome() });

/* ---- 進行アイコン列 ---- */

export function progress(step) {
  const icons = [
    `<path d="M-13,-4 a13,9 0 0 0 26,0 Z" fill="#fff"/><ellipse cx="0" cy="-4" rx="13" ry="4" fill="#ffe9c4"/>`,
    `<rect x="-12" y="-10" width="24" height="20" rx="4" fill="#fff"/><rect x="-7" y="-4" width="14" height="9" rx="3" fill="#7a5060"/>`,
    `<path d="M-12,6 q4,-18 12,-18 q8,0 12,18 Z" fill="#fff"/><circle cx="0" cy="-13" r="4" fill="#ff7fae"/>`,
    `<use href="#def-strawberry" transform="scale(0.3)"/>`,
    `<use href="#def-candle" transform="translate(0,-2) scale(0.28)"/><use href="#def-flame2d" transform="translate(0,-15) scale(0.28)"/>`,
    `<path d="M-13,8 L13,8 L13,-2 a13,7 0 0 0 -26,0 Z" fill="#fff"/><circle cx="0" cy="-7" r="3.5" fill="#ee3a64"/>`
  ];
  let out = '<g id="progress-bar" pointer-events="none">';
  const x0 = 640 - (icons.length - 1) * 38;
  for (let i = 0; i < icons.length; i++) {
    const cur = i === step;
    out += `
    <g transform="translate(${x0 + i * 76},46) scale(${cur ? 1.3 : 0.92})" ${cur ? 'filter="url(#f-glow)"' : ''} opacity="${i <= step ? 1 : 0.45}">
      <circle r="26" fill="${cur ? '#ff5e96' : '#ff9ec0'}" stroke="${cur ? '#ffffff' : OL}" stroke-width="${cur ? 5 : 4}"/>
      ${icons[i]}
    </g>`;
    if (i < icons.length - 1) {
      out += `<circle cx="${x0 + i * 76 + 38}" cy="46" r="4" fill="#ffffff" opacity="0.7"/>`;
    }
  }
  return out + '</g>';
}

/* ---- 指マークガイド ---- */

export function fingerHint() {
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

/* ---- クリーム色パレット ---- */

export function creamSwatch(color, shade) {
  return `
  <path d="M-26,18 q2,-16 12,-22 q-8,-10 2,-18 q8,-8 16,0 q10,8 2,18 q10,6 12,22 Z"
        transform="translate(0,-6) scale(1.35)"
        fill="${color}" stroke="${shade}" stroke-width="3.5" stroke-linejoin="round"/>`;
}

export function palette(creams, selected) {
  let pal = '';
  for (let i = 0; i < creams.length; i++) {
    pal += `<g data-act="cream:${i}" id="pal-${i}" transform="translate(${380 + i * 160},645)">
      <circle r="58" fill="#ffffff" stroke="${OL}" stroke-width="5" filter="url(#f-soft)"/>
      ${creamSwatch(creams[i].hex, creams[i].shadeHex)}
    </g>`;
  }
  pal += `<circle id="pal-ring" r="66" fill="none" stroke="#ffd866" stroke-width="8"
          pointer-events="none" cx="${380 + selected * 160}" cy="645"/>`;
  return pal;
}

/* ---- トッピングのトレイ ---- */

export function toppingTray(kinds) {
  let tray = '';
  kinds.forEach((k, i) => {
    tray += `<g data-act="tray:${k}" transform="translate(${190 + i * 130},648)">
      <circle r="58" fill="#ffffff" stroke="#ffd2e2" stroke-width="5" opacity="0.95" filter="url(#f-soft)"/>
      <use href="#def-${k}" transform="scale(0.92)" pointer-events="none"/>
    </g>`;
  });
  return tray;
}

export function candleBox(glowing) {
  return `
  <g id="candle-box" data-act="tray:candle" transform="translate(255,640)">
    <g class="${glowing ? 'glow pulse' : ''}" id="candle-box-inner">
      <use href="#def-candle" transform="translate(-44,-28) scale(0.85) rotate(-8)"/>
      <use href="#def-candle" transform="translate(0,-34) scale(0.9)"/>
      <use href="#def-candle" transform="translate(44,-28) scale(0.85) rotate(8)"/>
      <path d="M-85,-12 L85,-12 L75,52 Q74,60 66,60 L-66,60 Q-74,60 -75,52 Z"
            fill="url(#g-pinkbtn)" stroke="${OL}" stroke-width="6" stroke-linejoin="round" filter="url(#f-soft)"/>
      <path d="M0,8 c-5,-9 -16,-6 -16,3 c0,8 11,13 16,17 c5,-4 16,-9 16,-17 c0,-9 -11,-12 -16,-3Z"
            fill="#ffffff" opacity="0.85"/>
    </g>
  </g>`;
}

/* ---- タイトル/完成バナー ---- */

export function titleBanner() {
  return `
  <g pointer-events="none">
    <text x="640" y="150" font-size="96" font-weight="800" text-anchor="middle"
          fill="#ffffff" stroke="#ff5e96" stroke-width="24" paint-order="stroke"
          stroke-linejoin="round">ケーキやさん</text>
    <text x="640" y="150" font-size="96" font-weight="800" text-anchor="middle"
          fill="#ff5e96" opacity="0.16">ケーキやさん</text>
  </g>`;
}

export function doneBanner() {
  return `
  <g transform="translate(640,96)" pointer-events="none">
    <path d="M-300,-44 L300,-44 L330,0 L300,44 L-300,44 L-330,0 Z"
          fill="#ff5e96" stroke="#ffffff" stroke-width="8" filter="url(#f-soft)"/>
    <text y="22" font-size="64" font-weight="800" text-anchor="middle" fill="#ffffff">できあがり!</text>
  </g>`;
}

export function sparkle(x, y, s, delaySec) {
  return `
  <g transform="translate(${x},${y}) scale(${s})" class="twinkle"
     style="animation-delay:${delaySec}s" pointer-events="none">
    <path d="M0,-16 Q3,-3 16,0 Q3,3 0,16 Q-3,3 -16,0 Q-3,-3 0,-16Z"
          fill="#fff48f" stroke="#f7c948" stroke-width="2"/>
  </g>`;
}

/* ---- おうちに戻る確認 ---- */

export function confirmPop() {
  return `
  <g id="confirm-pop">
    <rect x="-200" y="-200" width="1680" height="1120" fill="#6b3a4e" opacity="0.45" data-act="confirm-no"/>
    <g transform="translate(640,340)" filter="url(#f-soft)">
      <rect x="-250" y="-150" width="500" height="300" rx="36" fill="#fff6fa" stroke="${OL}" stroke-width="7"/>
      <g transform="translate(0,-78)">
        <path d="M-34,4 L0,-28 L34,4 M-24,-4 L-24,28 L24,28 L24,-4" fill="none"
              stroke="#ff5e96" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <g data-act="confirm-yes" transform="translate(-105,62)">
        <circle r="58" fill="#7be08a" stroke="#2e7d44" stroke-width="6"/>
        <path d="M-24,2 L-6,20 L26,-18" fill="none" stroke="#fff" stroke-width="13"
              stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <g data-act="confirm-no" transform="translate(105,62)">
        <circle r="58" fill="#ff8a80" stroke="#b03a30" stroke-width="6"/>
        <path d="M-18,-18 L18,18 M18,-18 L-18,18" fill="none" stroke="#fff" stroke-width="13"
              stroke-linecap="round"/>
      </g>
    </g>
  </g>`;
}
