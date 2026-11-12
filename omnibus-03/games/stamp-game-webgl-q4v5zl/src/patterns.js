// Stamp designs (図柄). Each design is drawn on a 512x512 transparent canvas in
// white; the ink colour is applied later (imprint shader / label tinting).
// Designs are deliberately bold silhouettes so a 4 year old can tell them apart
// at a glance: はな / おしろ / うみ / ねこ / とう.
import * as THREE from 'three';
import { makeCanvas } from './textures.js';

const TAU = Math.PI * 2;
const S = 512, C = 256;

function ring(ctx) {
  ctx.lineWidth = 18;
  ctx.beginPath(); ctx.arc(C, C, 236, 0, TAU); ctx.stroke();
  // small date-like dots on the lower arc
  for (let i = -3; i <= 3; i++) {
    const a = Math.PI / 2 + i * 0.16;
    ctx.beginPath(); ctx.arc(C + Math.cos(a) * 208, C + Math.sin(a) * 208, 7, 0, TAU); ctx.fill();
  }
}
function star(ctx, x, y, r) {
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + i * Math.PI / 5;
    const rr = i % 2 ? r * 0.45 : r;
    ctx.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
  }
  ctx.closePath(); ctx.fill();
}
function cutout(ctx, fn) {
  ctx.save(); ctx.globalCompositeOperation = 'destination-out'; fn(); ctx.restore();
}
function tri(ctx, a, b, c) {
  ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); ctx.closePath(); ctx.fill();
}

// ---- はな ----
function drawFlower(ctx) {
  ring(ctx);
  // stem + leaves
  ctx.lineWidth = 16; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(C, 300); ctx.quadraticCurveTo(250, 360, 262, 420); ctx.stroke();
  const leaf = (x, y, rot) => {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    ctx.beginPath(); ctx.ellipse(0, 0, 48, 20, 0, 0, TAU); ctx.fill();
    ctx.restore();
  };
  leaf(212, 372, -0.5); leaf(302, 392, 0.4);
  // petals
  for (let i = 0; i < 6; i++) {
    const a = i * TAU / 6 - Math.PI / 2;
    ctx.save(); ctx.translate(C + Math.cos(a) * 82, 218 + Math.sin(a) * 82); ctx.rotate(a);
    ctx.beginPath(); ctx.ellipse(0, 0, 66, 42, 0, 0, TAU); ctx.fill();
    ctx.restore();
  }
  // centre with holes
  ctx.beginPath(); ctx.arc(C, 218, 46, 0, TAU); ctx.fill();
  cutout(ctx, () => { ctx.beginPath(); ctx.arc(C, 218, 26, 0, TAU); ctx.fill(); });
  ctx.beginPath(); ctx.arc(C, 218, 12, 0, TAU); ctx.fill();
  // little butterfly
  ctx.beginPath(); ctx.ellipse(352, 120, 22, 14, 0.5, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.ellipse(384, 104, 22, 14, -0.4, 0, TAU); ctx.fill();
}

// ---- おしろ ----
function drawCastle(ctx) {
  ring(ctx);
  // hill
  ctx.beginPath(); ctx.ellipse(C, 430, 200, 60, 0, Math.PI, TAU); ctx.fill();
  // main body
  ctx.fillRect(140, 250, 232, 150);
  // battlements on body
  for (let i = 0; i < 6; i++) ctx.fillRect(140 + i * 42, 228, 24, 30);
  // towers
  const tower = (x, top) => {
    ctx.fillRect(x - 34, top, 68, 400 - top);
    tri(ctx, [x - 46, top + 4], [x + 46, top + 4], [x, top - 70]);
    // flag
    ctx.fillRect(x - 3, top - 118, 6, 52);
    tri(ctx, [x + 3, top - 118], [x + 3, top - 86], [x + 44, top - 102]);
  };
  tower(150, 190); tower(362, 190); tower(C, 150);
  // windows & door (holes)
  cutout(ctx, () => {
    const win = (x, y) => { ctx.beginPath(); ctx.rect(x - 9, y - 14, 18, 22); ctx.arc(x, y - 14, 9, Math.PI, TAU); ctx.fill(); };
    win(150, 260); win(150, 330); win(362, 260); win(362, 330); win(C, 220); win(C, 290);
    ctx.beginPath(); ctx.rect(C - 26, 340, 52, 62); ctx.arc(C, 340, 26, Math.PI, TAU); ctx.fill();
  });
  // clouds
  const cloud = (x, y, s) => {
    ctx.beginPath(); ctx.arc(x, y, 16 * s, 0, TAU); ctx.arc(x + 20 * s, y - 6 * s, 20 * s, 0, TAU); ctx.arc(x + 42 * s, y, 15 * s, 0, TAU); ctx.fill();
  };
  cloud(64, 150, 1); cloud(392, 120, 0.9);
}

// ---- うみ ----
function drawSea(ctx) {
  ring(ctx);
  // sun
  ctx.beginPath(); ctx.arc(352, 132, 46, 0, TAU); ctx.fill();
  ctx.lineWidth = 12; ctx.lineCap = 'round';
  for (let i = 0; i < 8; i++) {
    const a = i * TAU / 8;
    ctx.beginPath(); ctx.moveTo(352 + Math.cos(a) * 62, 132 + Math.sin(a) * 62);
    ctx.lineTo(352 + Math.cos(a) * 84, 132 + Math.sin(a) * 84); ctx.stroke();
  }
  // seagulls
  ctx.lineWidth = 10;
  const gull = (x, y) => { ctx.beginPath(); ctx.moveTo(x - 30, y); ctx.quadraticCurveTo(x - 15, y - 22, x, y); ctx.quadraticCurveTo(x + 15, y - 22, x + 30, y); ctx.stroke(); };
  gull(120, 120); gull(190, 90);
  // sail boat
  ctx.beginPath(); ctx.moveTo(150, 296); ctx.lineTo(330, 296); ctx.lineTo(300, 340); ctx.lineTo(180, 340); ctx.closePath(); ctx.fill();
  ctx.fillRect(236, 150, 10, 150);
  tri(ctx, [232, 160], [232, 284], [140, 284]);
  tri(ctx, [252, 176], [252, 284], [332, 284]);
  // waves
  ctx.lineWidth = 18;
  for (let row = 0; row < 3; row++) {
    const y = 356 + row * 38;
    ctx.beginPath();
    for (let x = 40; x <= 472; x += 2) {
      const yy = y + Math.sin((x / 44) * Math.PI + row * 1.3) * 12;
      if (x === 40) ctx.moveTo(x, yy); else ctx.lineTo(x, yy);
    }
    ctx.stroke();
  }
}

// ---- ねこ ----
function drawCat(ctx) {
  ring(ctx);
  // head
  ctx.beginPath(); ctx.ellipse(C, 272, 150, 132, 0, 0, TAU); ctx.fill();
  // ears
  tri(ctx, [128, 200], [112, 66], [232, 150]); tri(ctx, [384, 200], [400, 66], [280, 150]);
  // inner ears (holes)
  cutout(ctx, () => { tri(ctx, [150, 176], [140, 104], [212, 158]); tri(ctx, [362, 176], [372, 104], [300, 158]); });
  // eyes
  cutout(ctx, () => {
    ctx.beginPath(); ctx.ellipse(198, 258, 30, 36, 0, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.ellipse(314, 258, 30, 36, 0, 0, TAU); ctx.fill();
  });
  ctx.beginPath(); ctx.ellipse(198, 262, 10, 24, 0, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.ellipse(314, 262, 10, 24, 0, 0, TAU); ctx.fill();
  // nose + mouth
  cutout(ctx, () => {
    tri(ctx, [236, 306], [276, 306], [C, 330]);
    ctx.lineWidth = 9; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(C, 330); ctx.lineTo(C, 348); ctx.stroke();
    ctx.beginPath(); ctx.arc(232, 348, 24, 0, Math.PI); ctx.stroke();
    ctx.beginPath(); ctx.arc(280, 348, 24, 0, Math.PI); ctx.stroke();
  });
  // whiskers
  ctx.lineWidth = 10; ctx.lineCap = 'round';
  const wh = (x, dir) => {
    for (let i = -1; i <= 1; i++) {
      ctx.beginPath(); ctx.moveTo(x, 316 + i * 4); ctx.lineTo(x + dir * 118, 300 + i * 30); ctx.stroke();
    }
  };
  wh(150, -1); wh(362, 1);
  // paws peeking on the lower ring
  ctx.beginPath(); ctx.arc(196, 398, 26, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.arc(316, 398, 26, 0, TAU); ctx.fill();
}

// ---- とう (tower with mountain) ----
function drawTower(ctx) {
  ring(ctx);
  // mountain
  ctx.beginPath(); ctx.moveTo(40, 412); ctx.quadraticCurveTo(160, 330, 220, 250); ctx.lineTo(300, 250);
  ctx.quadraticCurveTo(360, 330, 472, 412); ctx.closePath(); ctx.fill();
  cutout(ctx, () => { // snow cap notch
    ctx.beginPath(); ctx.moveTo(218, 252); ctx.lineTo(302, 252); ctx.lineTo(290, 290); ctx.lineTo(268, 272); ctx.lineTo(252, 300); ctx.lineTo(236, 276); ctx.lineTo(222, 296); ctx.closePath(); ctx.fill();
  });
  // ground band
  ctx.fillRect(60, 400, 392, 16);
  // tower silhouette
  ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const legs = [[150, 404], [362, 404], [C + 26, 120], [C - 26, 120]];
  ctx.beginPath(); ctx.moveTo(legs[0][0], legs[0][1]); ctx.quadraticCurveTo(190, 250, legs[3][0], legs[3][1]);
  ctx.lineTo(legs[2][0], legs[2][1]); ctx.quadraticCurveTo(322, 250, legs[1][0], legs[1][1]); ctx.stroke();
  // lattice
  ctx.lineWidth = 8;
  for (let i = 0; i < 5; i++) {
    const t = i / 5, y = 404 - t * 284;
    const w = 106 - t * 80;
    ctx.beginPath(); ctx.moveTo(C - w, y); ctx.lineTo(C + w, y); ctx.stroke();
    const y2 = 404 - (t + 0.2) * 284, w2 = 106 - (t + 0.2) * 80;
    ctx.beginPath(); ctx.moveTo(C - w, y); ctx.lineTo(C + w2, y2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(C + w, y); ctx.lineTo(C - w2, y2); ctx.stroke();
  }
  // observation deck & antenna
  ctx.fillRect(C - 70, 230, 140, 30);
  ctx.fillRect(C - 34, 118, 68, 22);
  ctx.fillRect(C - 5, 40, 10, 84);
  ctx.beginPath(); ctx.arc(C, 40, 12, 0, TAU); ctx.fill();
  // stars
  star(ctx, 100, 120, 22); star(ctx, 412, 100, 26); star(ctx, 380, 190, 16);
}

export const DESIGNS = [
  { id: 'flower', name: 'はな', ink: '#d8385a', draw: drawFlower },
  { id: 'castle', name: 'おしろ', ink: '#3f57b8', draw: drawCastle },
  { id: 'sea', name: 'うみ', ink: '#1f8fa8', draw: drawSea },
  { id: 'cat', name: 'ねこ', ink: '#e0742a', draw: drawCat },
  { id: 'tower', name: 'とう', ink: '#2f8f5b', draw: drawTower },
];

// White-on-transparent alpha canvas of the design.
export function drawDesignAlpha(design, size = 512) {
  const c = makeCanvas(size, size);
  const ctx = c.getContext('2d');
  ctx.scale(size / S, size / S);
  ctx.fillStyle = '#fff'; ctx.strokeStyle = '#fff';
  design.draw(ctx);
  return c;
}

// Alpha texture used by the imprint decal and the rubber face bump.
export function makeDesignTexture(design) {
  const c = drawDesignAlpha(design, 512);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.NoColorSpace;
  t.anisotropy = 8;
  return t;
}

// Printed label / sample chip: cream paper with tinted design.
export function makeLabelTexture(design, alphaCanvas, size = 256) {
  const c = makeCanvas(size, size);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#fbf6ea'; ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = design.ink;
  ctx.globalCompositeOperation = 'source-over';
  // tint: draw ink colour through the alpha mask
  const tmp = makeCanvas(size, size);
  const tx = tmp.getContext('2d');
  tx.drawImage(alphaCanvas, 0, 0, size, size);
  tx.globalCompositeOperation = 'source-in';
  tx.fillStyle = design.ink; tx.fillRect(0, 0, size, size);
  ctx.drawImage(tmp, size * 0.08, size * 0.08, size * 0.84, size * 0.84);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// Rubber die face: dark rubber with the raised design lightly inked. Mirrored
// horizontally so the imprint reads correctly on paper.
export function makeRubberFace(design, alphaCanvas, size = 512) {
  const c = makeCanvas(size, size);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#4c4744'; ctx.fillRect(0, 0, size, size);
  const tmp = makeCanvas(size, size);
  const tx = tmp.getContext('2d');
  tx.translate(size, 0); tx.scale(-1, 1);
  tx.drawImage(alphaCanvas, 0, 0, size, size);
  tx.globalCompositeOperation = 'source-in';
  tx.fillStyle = design.ink; tx.fillRect(0, 0, size, size);
  ctx.globalAlpha = 0.85;
  ctx.drawImage(tmp, 0, 0);
  const map = new THREE.CanvasTexture(c);
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 4;

  // roughness: rubber rough, inked raised design glossy
  const r = makeCanvas(size, size);
  const rx = r.getContext('2d');
  rx.fillStyle = '#e6e6e6'; rx.fillRect(0, 0, size, size);
  rx.translate(size, 0); rx.scale(-1, 1);
  const t2 = makeCanvas(size, size);
  const t2x = t2.getContext('2d');
  t2x.drawImage(alphaCanvas, 0, 0, size, size);
  t2x.globalCompositeOperation = 'source-in';
  t2x.fillStyle = '#404040'; t2x.fillRect(0, 0, size, size);
  rx.drawImage(t2, 0, 0);
  const roughnessMap = new THREE.CanvasTexture(r);
  roughnessMap.colorSpace = THREE.NoColorSpace;

  // bump: raised design
  const b = makeCanvas(size, size);
  const bx = b.getContext('2d');
  bx.fillStyle = '#000'; bx.fillRect(0, 0, size, size);
  bx.translate(size, 0); bx.scale(-1, 1);
  bx.drawImage(alphaCanvas, 0, 0, size, size);
  const bumpMap = new THREE.CanvasTexture(b);
  bumpMap.colorSpace = THREE.NoColorSpace;
  return { map, roughnessMap, bumpMap };
}
