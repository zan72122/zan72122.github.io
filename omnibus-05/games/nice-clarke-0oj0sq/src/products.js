// Product catalogue: every item has a hand-painted package in a shared atlas,
// its own silhouette, a physics shape, a price and a sound character.
import * as THREE from 'three';
import { drawIcon, INK } from './icons.js';
import { makeCanvas } from './textures.js';
import { rng } from './util.js';
import * as G from './geo.js';

const S = 2048;
const PPM = 900; // atlas pixels per metre for labels

class Atlas {
  constructor() {
    this.canvas = makeCanvas(S, S);
    this.g = this.canvas.getContext('2d');
    this.g.fillStyle = '#808080';
    this.g.fillRect(0, 0, S, S);
    this.x = 0;
    this.y = 0;
    this.rowH = 0;
    this.swatches = new Map();
    this.log = [];
    this.swX = 0;
    this.swY = S - 16;
  }
  alloc(w, h) {
    w = Math.max(8, Math.ceil(w));
    h = Math.max(8, Math.ceil(h));
    const pad = 4;
    if (this.x + w + pad * 2 > S) {
      this.x = 0;
      this.y += this.rowH;
      this.rowH = 0;
    }
    const r = { x: this.x + pad, y: this.y + pad, w, h };
    this.x += w + pad * 2;
    this.rowH = Math.max(this.rowH, h + pad * 2);
    if (this.y + this.rowH > S - 40) console.warn('atlas full');
    this.log.push(r);
    r.u0 = (r.x + 0.5) / S;
    r.u1 = (r.x + w - 0.5) / S;
    r.v0 = 1 - (r.y + h - 0.5) / S;
    r.v1 = 1 - (r.y + 0.5) / S;
    return r;
  }
  swatch(color) {
    if (this.swatches.has(color)) return this.swatches.get(color);
    const x = this.swX;
    const y = this.swY;
    this.g.fillStyle = color;
    this.g.fillRect(x, y, 16, 16);
    this.swX += 16;
    if (this.swX >= S) {
      this.swX = 0;
      this.swY -= 16;
    }
    const u = (x + 8) / S;
    const v = 1 - (y + 8) / S;
    const r = { u0: u, u1: u, v0: v, v1: v };
    this.swatches.set(color, r);
    return r;
  }
  // allocate and paint with a callback (g, x, y, w, h)
  paint(w, h, fn) {
    const r = this.alloc(w, h);
    const g = this.g;
    g.save();
    g.beginPath();
    g.rect(r.x - 2, r.y - 2, r.w + 4, r.h + 4);
    g.clip();
    fn(g, r.x, r.y, r.w, r.h);
    g.restore();
    return r;
  }
}

// ---------- package painting ----------

function rr(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

function textLines(g, x, y, w, n, color, seed = 1, lh = 7) {
  const r = rng(seed);
  g.fillStyle = color;
  for (let i = 0; i < n; i++) {
    const lw = w * (0.45 + r() * 0.55);
    rr(g, x, y + i * lh, lw, lh * 0.5, lh * 0.25);
    g.fill();
  }
}

// A "logo" made of chunky rounded glyph-like strokes (reads as branding, not text).
function logo(g, x, y, w, h, color, seed = 3) {
  const r = rng(seed);
  const n = 3 + Math.floor(r() * 3);
  const gw = w / n;
  g.save();
  g.strokeStyle = color;
  g.lineWidth = Math.max(2, h * 0.22);
  g.lineCap = 'round';
  g.lineJoin = 'round';
  for (let i = 0; i < n; i++) {
    const cx = x + gw * (i + 0.5);
    g.beginPath();
    const k = Math.floor(r() * 5);
    if (k === 0) {
      g.arc(cx, y + h / 2, h * 0.32, 0, Math.PI * 2);
    } else if (k === 1) {
      g.moveTo(cx - gw * 0.3, y + h * 0.2);
      g.lineTo(cx + gw * 0.3, y + h * 0.2);
      g.moveTo(cx, y + h * 0.2);
      g.lineTo(cx, y + h * 0.85);
    } else if (k === 2) {
      g.moveTo(cx - gw * 0.3, y + h * 0.2);
      g.quadraticCurveTo(cx + gw * 0.4, y + h * 0.3, cx - gw * 0.1, y + h * 0.85);
    } else if (k === 3) {
      g.moveTo(cx - gw * 0.3, y + h * 0.5);
      g.lineTo(cx + gw * 0.3, y + h * 0.5);
      g.moveTo(cx + gw * 0.1, y + h * 0.15);
      g.quadraticCurveTo(cx + gw * 0.15, y + h * 0.7, cx - gw * 0.25, y + h * 0.85);
    } else {
      g.moveTo(cx - gw * 0.25, y + h * 0.25);
      g.lineTo(cx - gw * 0.25, y + h * 0.8);
      g.lineTo(cx + gw * 0.3, y + h * 0.8);
    }
    g.stroke();
  }
  g.restore();
}

export function drawBarcode(g, x, y, w, h, seed = 1, wrinkle = 0) {
  const r = rng(seed);
  g.save();
  g.fillStyle = '#ffffff';
  rr(g, x, y, w, h, Math.min(w, h) * 0.08);
  g.fill();
  const bx = x + w * 0.1;
  const bw = w * 0.8;
  const bh = h * 0.7;
  let cx = bx;
  g.fillStyle = '#111';
  const bars = [];
  while (cx < bx + bw) {
    const thick = (1 + Math.floor(r() * 3)) * (bw / 95);
    if (r() > 0.45) bars.push([cx, thick]);
    cx += thick + (1 + Math.floor(r() * 2)) * (bw / 95);
  }
  for (const [px, t] of bars) {
    if (wrinkle > 0) {
      // draw the bar as a wobbly strip
      const steps = 10;
      for (let s = 0; s < steps; s++) {
        const yy = y + h * 0.08 + (bh / steps) * s;
        const off = Math.sin(px * 0.21 + s * 1.7) * wrinkle * w * 0.05 + Math.sin(s * 3.1 + px) * wrinkle * w * 0.02;
        g.fillRect(px + off, yy, t * (1 + wrinkle * 0.6 * Math.sin(s + px)), bh / steps + 0.5);
      }
    } else {
      g.fillRect(px, y + h * 0.08, t, bh);
    }
  }
  g.font = `${Math.max(6, h * 0.16)}px monospace`;
  g.textAlign = 'center';
  g.fillText(String(Math.floor(r() * 1e12)).padStart(12, '4'), x + w / 2, y + h * 0.96);
  g.restore();
}

function pattern(g, x, y, w, h, kind, c1, c2, seed = 1) {
  g.fillStyle = c1;
  g.fillRect(x, y, w, h);
  const r = rng(seed);
  g.fillStyle = c2;
  g.strokeStyle = c2;
  if (kind === 'dots') {
    const s = Math.max(w, h) / 9;
    for (let yy = 0; yy < h + s; yy += s) {
      for (let xx = (yy / s) % 2 ? s / 2 : 0; xx < w + s; xx += s) {
        g.beginPath();
        g.arc(x + xx, y + yy, s * 0.18, 0, Math.PI * 2);
        g.fill();
      }
    }
  } else if (kind === 'stripes') {
    const s = w / 6;
    g.save();
    g.beginPath();
    g.rect(x, y, w, h);
    g.clip();
    g.translate(x, y);
    g.rotate(-0.5);
    for (let i = -10; i < 20; i++) g.fillRect(i * s, -h, s * 0.45, h * 3);
    g.restore();
  } else if (kind === 'wave') {
    g.lineWidth = h * 0.05;
    for (let k = 0; k < 4; k++) {
      g.beginPath();
      for (let xx = 0; xx <= w; xx += 4) {
        g.lineTo(x + xx, y + h * (0.2 + k * 0.2) + Math.sin(xx * 0.08 + k) * h * 0.04);
      }
      g.stroke();
    }
  } else if (kind === 'check') {
    const s = w / 6;
    for (let yy = 0; yy < h; yy += s) for (let xx = 0; xx < w; xx += s) if ((Math.floor(xx / s) + Math.floor(yy / s)) % 2) g.fillRect(x + xx, y + yy, s, s);
  } else if (kind === 'burst') {
    const cx = x + w / 2;
    const cy = y + h / 2;
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      g.beginPath();
      g.moveTo(cx, cy);
      g.arc(cx, cy, Math.max(w, h), a, a + Math.PI / 16);
      g.fill();
    }
  } else if (kind === 'speckle') {
    for (let i = 0; i < (w * h) / 60; i++) {
      g.globalAlpha = 0.3 + r() * 0.4;
      g.beginPath();
      g.arc(x + r() * w, y + r() * h, 0.8 + r() * 1.6, 0, 6.3);
      g.fill();
    }
    g.globalAlpha = 1;
  }
}

// A typical front panel: top band with logo, big icon in a window, text lines, burst badge.
function frontPanel(g, x, y, w, h, o) {
  pattern(g, x, y, w, h, o.pattern || 'dots', o.bg, o.bg2 || 'rgba(255,255,255,0.12)', o.seed);
  // band
  g.fillStyle = o.band || '#ffffff';
  g.fillRect(x, y + h * 0.06, w, h * 0.17);
  logo(g, x + w * 0.12, y + h * 0.085, w * 0.76, h * 0.12, o.logo || INK, o.seed + 9);
  // icon window
  const s = Math.min(w * 0.82, h * 0.52);
  g.fillStyle = o.win || 'rgba(255,255,255,0.85)';
  rr(g, x + (w - s) / 2, y + h * 0.28, s, s, s * 0.18);
  g.fill();
  drawIcon(g, o.icon, x + (w - s * 0.86) / 2, y + h * 0.28 + s * 0.07, s * 0.86);
  textLines(g, x + w * 0.12, y + h * 0.28 + s + h * 0.04, w * 0.76, 2, o.text || 'rgba(255,255,255,0.8)', o.seed + 2, Math.max(5, h * 0.05));
  if (o.badge) {
    const bx = x + w * 0.8;
    const by = y + h * 0.3;
    const br = Math.min(w, h) * 0.12;
    g.fillStyle = o.badge;
    g.beginPath();
    for (let i = 0; i < 16; i++) {
      const rad = i % 2 ? br * 0.7 : br;
      const a = (i / 16) * Math.PI * 2;
      g.lineTo(bx + Math.cos(a) * rad, by + Math.sin(a) * rad);
    }
    g.fill();
  }
}

function sidePanel(g, x, y, w, h, o, barcode) {
  g.fillStyle = o.side || o.bg;
  g.fillRect(x, y, w, h);
  g.fillStyle = o.band || '#ffffff';
  g.fillRect(x, y + h * 0.06, w, h * 0.08);
  textLines(g, x + w * 0.12, y + h * 0.22, w * 0.76, 5, 'rgba(255,255,255,0.55)', o.seed + 5, Math.max(5, h * 0.05));
  if (barcode) drawBarcode(g, x + w * 0.1, y + h * 0.62, w * 0.8, Math.min(h * 0.3, w * 0.5), o.seed);
}

// ---------- the catalogue ----------

export const PRODUCTS = [];
const BY_ID = {};
let CUR = null;
let MARK = 0;

// Products are drawn a little larger than life: toy-like, and easy for small fingers.
const PRODUCT_SCALE = 1.22;

function def(p) {
  // the first texture painted for this product is its "face" (used by shelf proxies, receipts)
  p.face = CUR.log[MARK] || null;
  MARK = CUR.log.length;
  if (p.id !== 'watermelon') {
    p.geo.scale(PRODUCT_SCALE, PRODUCT_SCALE, PRODUCT_SCALE);
    if (p.shape.type === 'sphere') p.shape.r *= PRODUCT_SCALE;
  }
  p.geo.computeBoundingBox();
  p.size = new THREE.Vector3();
  p.geo.boundingBox.getSize(p.size);
  if (p.shape.type === 'box') {
    // centre the mesh on its bounds and fit the physics box to it
    const c = new THREE.Vector3();
    p.geo.boundingBox.getCenter(c);
    p.geo.translate(-c.x, -c.y, -c.z);
    p.geo.computeBoundingBox();
    p.geo.computeBoundingSphere();
    p.shape.h = [p.size.x * 0.48, p.size.y * 0.47, p.size.z * 0.48];
  }
  p.index = PRODUCTS.length;
  PRODUCTS.push(p);
  BY_ID[p.id] = p;
  return p;
}

export function product(id) {
  return BY_ID[id];
}

// Box product with panels; returns geometry.
function boxProduct(A, w, h, d, o, radius = 0.006) {
  const fw = w * PPM;
  const fh = h * PPM;
  const sw = d * PPM;
  const front = A.paint(fw, fh, (g, x, y, ww, hh) => frontPanel(g, x, y, ww, hh, o));
  const back = A.paint(fw, fh, (g, x, y, ww, hh) => sidePanel(g, x, y, ww, hh, o, true));
  const side = A.paint(sw, fh, (g, x, y, ww, hh) => sidePanel(g, x, y, ww, hh, o, false));
  const top = A.paint(fw, sw, (g, x, y, ww, hh) => {
    g.fillStyle = o.side || o.bg;
    g.fillRect(x, y, ww, hh);
    logo(g, x + ww * 0.2, y + hh * 0.3, ww * 0.6, hh * 0.4, o.band || '#fff', o.seed + 1);
  });
  return G.box(w, h, d, [side, side, top, top, front, back], radius, 2);
}

function skin(A, w, h, fn) {
  return A.paint(w, h, fn);
}

function sticker(g, x, y, s, seed) {
  g.fillStyle = '#ffffff';
  g.beginPath();
  g.ellipse(x, y, s, s * 0.7, 0, 0, Math.PI * 2);
  g.fill();
  drawBarcode(g, x - s * 0.75, y - s * 0.45, s * 1.5, s * 0.9, seed);
}

export function buildCatalogue() {
  const A = new Atlas();
  CUR = A;
  MARK = 0;
  const sw = (c) => A.swatch(c);

  // --- fruit & veg ---
  def({
    id: 'apple',
    icon: 'apple',
    price: 98,
    kind: 'fruit',
    mass: 0.25,
    shape: { type: 'sphere', r: 0.056 },
    geo: (() => {
      const sk = skin(A, 256, 128, (g, x, y, w, h) => {
        const grad = g.createLinearGradient(0, y, 0, y + h);
        grad.addColorStop(0, '#f2c14e');
        grad.addColorStop(0.18, '#e2452f');
        grad.addColorStop(0.6, '#c82a26');
        grad.addColorStop(1, '#8e1c1e');
        g.fillStyle = grad;
        g.fillRect(x, y, w, h);
        const r = rng(2);
        for (let i = 0; i < 260; i++) {
          g.fillStyle = `rgba(255,220,140,${0.15 + r() * 0.3})`;
          g.fillRect(x + r() * w, y + r() * h, 1.5, 3);
        }
        sticker(g, x + w * 0.25, y + h * 0.5, 14, 11);
      });
      const sph = new THREE.SphereGeometry(0.056, 24, 18);
      sph.scale(1, 0.92, 1);
      // dimples at the top and bottom
      const p = sph.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const yy = p.getY(i);
        const rxz = Math.hypot(p.getX(i), p.getZ(i));
        if (yy > 0) p.setY(i, yy - Math.max(0, 0.02 - rxz * 0.35));
        if (yy < 0) p.setY(i, yy + Math.max(0, 0.012 - rxz * 0.2));
      }
      sph.computeVertexNormals();
      const body = G.remapUV(G.toNonIndexed(sph), sk);
      const stem = G.place(G.cylinder(0.004, 0.005, 0.03, sw('#5b3a1e'), sw('#5b3a1e'), 6), { y: 0.05, rz: 0.2 });
      const leafG = G.place(G.sphere(0.018, sw('#4f9a3a'), 8, 6), { x: 0.016, y: 0.058, sx: 1.2, sy: 0.25, sz: 0.6, rz: -0.4 });
      return G.merge([body, stem, leafG]);
    })(),
  });

  def({
    id: 'orange',
    icon: 'orange',
    price: 68,
    kind: 'fruit',
    mass: 0.18,
    shape: { type: 'sphere', r: 0.05 },
    geo: (() => {
      const sk = skin(A, 256, 128, (g, x, y, w, h) => {
        g.fillStyle = '#f39321';
        g.fillRect(x, y, w, h);
        const r = rng(5);
        for (let i = 0; i < 900; i++) {
          g.fillStyle = r() > 0.5 ? 'rgba(255,190,90,0.5)' : 'rgba(190,90,0,0.35)';
          g.beginPath();
          g.arc(x + r() * w, y + r() * h, 1 + r() * 1.2, 0, 6.3);
          g.fill();
        }
        sticker(g, x + w * 0.7, y + h * 0.55, 13, 12);
      });
      const body = G.sphere(0.05, sk, 20, 14, 0.86);
      const top = G.place(G.cylinder(0.008, 0.01, 0.008, sw('#4f7a2a'), sw('#4f7a2a'), 6), { y: 0.043 });
      return G.merge([body, top]);
    })(),
  });

  def({
    id: 'tomato',
    icon: 'tomato',
    price: 88,
    kind: 'fruit',
    mass: 0.17,
    shape: { type: 'sphere', r: 0.05 },
    geo: (() => {
      const sk = skin(A, 256, 128, (g, x, y, w, h) => {
        const grad = g.createLinearGradient(0, y, 0, y + h);
        grad.addColorStop(0, '#d93a2a');
        grad.addColorStop(1, '#a82018');
        g.fillStyle = grad;
        g.fillRect(x, y, w, h);
        g.fillStyle = 'rgba(255,255,255,0.25)';
        g.fillRect(x, y + h * 0.3, w, 4);
        sticker(g, x + w * 0.5, y + h * 0.6, 12, 13);
      });
      const body = G.sphere(0.05, sk, 20, 14, 0.8);
      const parts = [body];
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        parts.push(G.place(G.sphere(0.012, sw('#3f8a3a'), 6, 4), { x: Math.cos(a) * 0.012, y: 0.04, z: Math.sin(a) * 0.012, sx: 1.6, sy: 0.3, sz: 0.6, ry: -a }));
      }
      return G.merge(parts);
    })(),
  });

  def({
    id: 'onion',
    icon: 'onion',
    price: 48,
    kind: 'fruit',
    mass: 0.2,
    shape: { type: 'sphere', r: 0.05 },
    geo: (() => {
      const sk = skin(A, 256, 128, (g, x, y, w, h) => {
        g.fillStyle = '#d6a05a';
        g.fillRect(x, y, w, h);
        g.strokeStyle = 'rgba(120,70,20,0.45)';
        g.lineWidth = 2;
        for (let i = 0; i < 24; i++) {
          g.beginPath();
          g.moveTo(x + (i / 24) * w, y);
          g.lineTo(x + (i / 24) * w + 4, y + h);
          g.stroke();
        }
        sticker(g, x + w * 0.4, y + h * 0.6, 12, 14);
      });
      const body = G.lathe(
        [
          [0, -0.045],
          [0.03, -0.042],
          [0.05, -0.015],
          [0.048, 0.015],
          [0.03, 0.038],
          [0.008, 0.055],
          [0.002, 0.07],
        ],
        sk,
        18,
      );
      return G.merge([body]);
    })(),
  });

  def({
    id: 'banana',
    icon: 'banana',
    price: 158,
    kind: 'soft',
    mass: 0.6,
    shape: { type: 'box', h: [0.11, 0.035, 0.07] },
    geo: (() => {
      const sk = skin(A, 256, 64, (g, x, y, w, h) => {
        const grad = g.createLinearGradient(x, 0, x + w, 0);
        grad.addColorStop(0, '#6b4b2a');
        grad.addColorStop(0.08, '#cfc04a');
        grad.addColorStop(0.2, '#f7d63c');
        grad.addColorStop(0.85, '#f2c62a');
        grad.addColorStop(0.96, '#7a5a2a');
        g.fillStyle = grad;
        g.fillRect(x, y, w, h);
        g.fillStyle = 'rgba(120,80,20,0.35)';
        const r = rng(8);
        for (let i = 0; i < 40; i++) g.fillRect(x + r() * w, y + r() * h, 2, 2);
      });
      const parts = [];
      for (let i = 0; i < 4; i++) {
        const off = (i - 1.5) * 0.024;
        const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(-0.11, 0.02, off * 0.5), new THREE.Vector3(0, -0.04, off), new THREE.Vector3(0.11, 0.03, off * 1.4));
        const t = G.tube(curve, 0.016, sk, 14, 6);
        G.place(t, { y: 0.01 + Math.abs(off) * 0.25 });
        parts.push(t);
      }
      parts.push(G.place(G.cylinder(0.012, 0.012, 0.03, sw('#5b4020'), sw('#5b4020'), 6), { x: -0.12, y: 0.03, rz: 1.2 }));
      const sticky = A.paint(64, 40, (g, x, y, w, h) => sticker(g, x + w / 2, y + h / 2, 18, 15));
      parts.push(G.place(new THREE.PlaneGeometry(0.03, 0.02).toNonIndexed(), { x: 0, y: -0.01, z: 0.045 }));
      G.remapUV(parts[parts.length - 1], sticky);
      return G.merge(parts);
    })(),
  });

  def({
    id: 'carrot',
    icon: 'carrot',
    price: 58,
    kind: 'soft',
    mass: 0.3,
    shape: { type: 'box', h: [0.1, 0.03, 0.05] },
    geo: (() => {
      const sk = skin(A, 128, 128, (g, x, y, w, h) => {
        g.fillStyle = '#ef7d22';
        g.fillRect(x, y, w, h);
        g.strokeStyle = 'rgba(150,60,0,0.4)';
        for (let i = 0; i < 12; i++) {
          g.beginPath();
          g.moveTo(x, y + (i / 12) * h);
          g.lineTo(x + w * 0.3, y + (i / 12) * h + 2);
          g.stroke();
        }
      });
      const parts = [];
      for (let i = 0; i < 3; i++) {
        const c = G.cone(0.02, 0.19, sk, 10);
        G.place(c, { x: 0.0, y: 0, z: (i - 1) * 0.03, rz: Math.PI / 2 + (i - 1) * 0.06 });
        parts.push(c);
        for (let k = 0; k < 3; k++) parts.push(G.place(G.sphere(0.02, sw('#4f9a3a'), 6, 4), { x: -0.11 - k * 0.012, y: 0.004 + k * 0.006, z: (i - 1) * 0.03, sx: 1.6, sy: 0.4, sz: 0.4, rz: 0.3 * k }));
      }
      parts.push(G.place(G.cylinder(0.05, 0.05, 0.016, sw('#3c78c8'), sw('#3c78c8'), 12), { x: -0.06, rz: Math.PI / 2, sz: 0.55 }));
      return G.merge(parts);
    })(),
  });

  def({
    id: 'broccoli',
    icon: 'broccoli',
    price: 148,
    kind: 'soft',
    mass: 0.3,
    shape: { type: 'sphere', r: 0.06 },
    geo: (() => {
      const flor = skin(A, 64, 64, (g, x, y, w, h) => {
        g.fillStyle = '#3f8a3a';
        g.fillRect(x, y, w, h);
        const r = rng(3);
        for (let i = 0; i < 120; i++) {
          g.fillStyle = r() > 0.5 ? '#5aa84a' : '#2e6a2a';
          g.beginPath();
          g.arc(x + r() * w, y + r() * h, 2 + r() * 2, 0, 6.3);
          g.fill();
        }
      });
      const parts = [G.place(G.cylinder(0.018, 0.024, 0.07, sw('#9ccf6a'), sw('#c8e89a'), 8), { y: -0.03 })];
      const pts = [
        [0, 0.03, 0, 0.04],
        [0.035, 0.015, 0.01, 0.03],
        [-0.033, 0.017, 0.012, 0.03],
        [0.005, 0.016, 0.036, 0.03],
        [0.0, 0.014, -0.035, 0.03],
      ];
      for (const [x, y, z, r] of pts) parts.push(G.place(G.sphere(r, flor, 10, 8), { x, y, z, sy: 0.8 }));
      return G.merge(parts);
    })(),
  });

  def({
    id: 'grapes',
    icon: 'grapes',
    price: 498,
    kind: 'soft',
    mass: 0.5,
    shape: { type: 'box', h: [0.08, 0.04, 0.06] },
    geo: (() => {
      const parts = [G.place(G.box(0.16, 0.012, 0.12, Array(6).fill(sw('#2c2c34')), 0.004), { y: -0.034 })];
      const grape = sw('#6b3f9a');
      const r = rng(4);
      for (let i = 0; i < 26; i++) {
        const a = r() * Math.PI * 2;
        const rad = r() * 0.045;
        parts.push(G.place(G.sphere(0.015, grape, 8, 6), { x: Math.cos(a) * rad * 1.3, y: -0.012 + r() * 0.03, z: Math.sin(a) * rad * 0.8 }));
      }
      return G.merge(parts);
    })(),
  });

  // --- packs & boxes ---
  def({
    id: 'milk',
    icon: 'milk',
    price: 198,
    kind: 'carton',
    mass: 1.0,
    shape: { type: 'box', h: [0.045, 0.13, 0.045] },
    geo: (() => {
      const o = { bg: '#ffffff', bg2: 'rgba(60,120,200,0.12)', band: '#3c78c8', logo: '#ffffff', icon: 'milk', pattern: 'wave', side: '#3c78c8', seed: 21, text: 'rgba(60,120,200,0.8)' };
      const body = G.place(boxProduct(A, 0.09, 0.2, 0.09, o, 0.004), { y: -0.03 });
      const roof = G.place(new THREE.CylinderGeometry(0.001, 0.064, 0.06, 4, 1).toNonIndexed(), { y: 0.1, ry: Math.PI / 4, sz: 1 });
      G.remapUV(roof, sw('#e9f0fa'));
      const fin = G.place(G.box(0.092, 0.025, 0.008, Array(6).fill(sw('#dde6f2'))), { y: 0.135 });
      return G.merge([body, roof, fin]);
    })(),
  });

  def({
    id: 'bread',
    icon: 'bread',
    price: 178,
    kind: 'soft',
    mass: 0.4,
    shape: { type: 'box', h: [0.12, 0.065, 0.065] },
    geo: (() => {
      const bag = A.paint(0.24 * PPM, 0.13 * PPM, (g, x, y, w, h) => {
        const grad = g.createLinearGradient(0, y, 0, y + h);
        grad.addColorStop(0, '#c8843a');
        grad.addColorStop(0.3, '#e7b06a');
        grad.addColorStop(1, '#f6dcb0');
        g.fillStyle = grad;
        g.fillRect(x, y, w, h);
        g.fillStyle = 'rgba(255,255,255,0.85)';
        g.fillRect(x, y + h * 0.55, w, h * 0.3);
        drawIcon(g, 'bread', x + w * 0.38, y + h * 0.5, h * 0.4);
        g.fillStyle = '#e94f37';
        g.fillRect(x, y + h * 0.88, w, h * 0.06);
        drawBarcode(g, x + w * 0.06, y + h * 0.58, w * 0.2, h * 0.25, 33);
      });
      const parts = [G.box(0.24, 0.12, 0.13, [sw('#f6dcb0'), sw('#f6dcb0'), bag, bag, bag, bag], 0.03, 3)];
      // the puffed top: two humps
      for (const x of [-0.055, 0.055]) parts.push(G.place(G.sphere(0.07, bag, 14, 8), { x, y: 0.035, sx: 0.9, sy: 0.55, sz: 0.92 }));
      parts.push(G.place(G.cylinder(0.025, 0.006, 0.04, sw('#f2efe6'), sw('#f2efe6'), 8), { x: 0.14, rz: Math.PI / 2 }));
      parts.push(G.place(G.box(0.01, 0.03, 0.03, Array(6).fill(sw('#3c78c8'))), { x: 0.122 }));
      return G.merge(parts);
    })(),
  });

  def({
    id: 'eggs',
    icon: 'eggs',
    price: 228,
    kind: 'carton',
    mass: 0.6,
    shape: { type: 'box', h: [0.13, 0.035, 0.055] },
    geo: (() => {
      const lid = A.paint(0.26 * PPM, 0.11 * PPM, (g, x, y, w, h) => {
        g.fillStyle = '#ece4d4';
        g.fillRect(x, y, w, h);
        g.fillStyle = '#f7c948';
        g.fillRect(x, y, w * 0.35, h);
        drawIcon(g, 'eggs', x + 2, y + h * 0.15, w * 0.32);
        drawBarcode(g, x + w * 0.72, y + h * 0.2, w * 0.24, h * 0.6, 41);
      });
      const parts = [G.box(0.26, 0.04, 0.11, [sw('#d9cfbf'), sw('#d9cfbf'), lid, sw('#c9bfaf'), sw('#d9cfbf'), sw('#d9cfbf')], 0.006)];
      parts[0].translate(0, -0.012, 0);
      for (let i = 0; i < 5; i++) for (let k = 0; k < 2; k++) parts.push(G.place(G.sphere(0.021, sw('#f4eadc'), 10, 6), { x: -0.095 + i * 0.047, y: 0.01, z: -0.025 + k * 0.05, sy: 0.9 }));
      return G.merge(parts);
    })(),
  });

  def({
    id: 'yogurt',
    icon: 'yogurt',
    price: 128,
    kind: 'cup',
    mass: 0.3,
    shape: { type: 'box', h: [0.045, 0.04, 0.045] },
    geo: (() => {
      const side = A.paint(256, 72, (g, x, y, w, h) => {
        g.fillStyle = '#ffffff';
        g.fillRect(x, y, w, h);
        g.fillStyle = '#ec6b9a';
        g.fillRect(x, y + h * 0.65, w, h * 0.35);
        for (let i = 0; i < 4; i++) drawIcon(g, 'yogurt', x + i * 64 + 14, y + 4, 36);
        drawBarcode(g, x + w * 0.62, y + h * 0.1, 60, 30, 51);
      });
      const cup = G.cylinder(0.046, 0.036, 0.08, side, sw('#f6d4e2'), 18);
      const lidG = G.place(G.cylinder(0.05, 0.05, 0.004, sw('#ec6b9a'), sw('#ec6b9a'), 18), { y: 0.042 });
      return G.merge([cup, lidG]);
    })(),
  });

  def({
    id: 'pudding',
    icon: 'pudding',
    price: 98,
    kind: 'cup',
    mass: 0.15,
    shape: { type: 'box', h: [0.04, 0.035, 0.04] },
    geo: (() => {
      const side = A.paint(256, 64, (g, x, y, w, h) => {
        const grad = g.createLinearGradient(0, y, 0, y + h);
        grad.addColorStop(0, '#f7d27a');
        grad.addColorStop(1, '#e8b860');
        g.fillStyle = grad;
        g.fillRect(x, y, w, h);
        g.fillStyle = '#8a4a22';
        g.fillRect(x, y + h * 0.8, w, h * 0.2);
        drawBarcode(g, x + 8, y + 8, 50, 30, 61);
      });
      const cup = G.cylinder(0.034, 0.042, 0.07, side, sw('#8a4a22'), 18);
      const lidG = G.place(G.cylinder(0.047, 0.047, 0.004, sw('#fff7e0'), sw('#fff7e0'), 18), { y: 0.037 });
      return G.merge([cup, lidG]);
    })(),
  });

  def({
    id: 'cereal',
    icon: 'cereal',
    price: 398,
    kind: 'box',
    mass: 0.5,
    shape: { type: 'box', h: [0.095, 0.14, 0.035] },
    geo: boxProduct(A, 0.19, 0.28, 0.07, { bg: '#2e9fd6', bg2: 'rgba(255,255,255,0.12)', band: '#ffd34a', logo: '#e94f37', icon: 'cereal', pattern: 'burst', side: '#1f7fb8', seed: 71, badge: '#e94f37' }),
  });

  def({
    id: 'cookies',
    icon: 'cookies',
    price: 258,
    kind: 'box',
    mass: 0.3,
    shape: { type: 'box', h: [0.11, 0.03, 0.07] },
    geo: (() => {
      const o = { bg: '#8a4a22', bg2: 'rgba(255,220,160,0.15)', band: '#f6dcb0', logo: '#8a4a22', icon: 'cookies', pattern: 'check', side: '#6e3a1a', seed: 81 };
      const top = A.paint(0.22 * PPM, 0.14 * PPM, (g, x, y, w, h) => {
        pattern(g, x, y, w, h, 'check', o.bg, o.bg2, 81);
        g.fillStyle = o.band;
        g.fillRect(x, y + h * 0.08, w, h * 0.2);
        logo(g, x + w * 0.1, y + h * 0.1, w * 0.5, h * 0.15, o.logo, 82);
        drawIcon(g, 'cookies', x + w * 0.25, y + h * 0.3, h * 0.65);
        g.fillStyle = '#e94f37';
        g.beginPath();
        g.arc(x + w * 0.85, y + h * 0.6, h * 0.14, 0, 6.3);
        g.fill();
      });
      const side = A.paint(0.22 * PPM, 0.06 * PPM, (g, x, y, w, h) => {
        g.fillStyle = o.side;
        g.fillRect(x, y, w, h);
        drawBarcode(g, x + w * 0.6, y + h * 0.1, w * 0.3, h * 0.8, 83);
        textLines(g, x + 8, y + 8, w * 0.45, 3, 'rgba(255,255,255,0.5)', 84, 10);
      });
      return G.box(0.22, 0.06, 0.14, [sw(o.side), sw(o.side), top, sw(o.side), side, side], 0.005);
    })(),
  });

  def({
    id: 'tissue',
    icon: 'tissue',
    price: 298,
    kind: 'box',
    mass: 0.4,
    shape: { type: 'box', h: [0.12, 0.05, 0.06] },
    geo: (() => {
      const o = { bg: '#a8d8e8', bg2: 'rgba(255,255,255,0.4)', band: '#ffffff', logo: '#3c78c8', icon: 'tissue', pattern: 'dots', side: '#8cc8dc', seed: 91 };
      const top = A.paint(0.24 * PPM, 0.12 * PPM, (g, x, y, w, h) => {
        pattern(g, x, y, w, h, 'dots', o.bg, o.bg2, 91);
        g.fillStyle = '#ffffff';
        rr(g, x + w * 0.3, y + h * 0.4, w * 0.4, h * 0.2, h * 0.1);
        g.fill();
      });
      const side = A.paint(0.24 * PPM, 0.1 * PPM, (g, x, y, w, h) => {
        pattern(g, x, y, w, h, 'dots', o.bg, o.bg2, 92);
        drawIcon(g, 'tissue', x + w * 0.05, y + h * 0.05, h * 0.9);
        logo(g, x + w * 0.42, y + h * 0.35, w * 0.3, h * 0.3, '#3c78c8', 93);
        drawBarcode(g, x + w * 0.76, y + h * 0.2, w * 0.2, h * 0.6, 94);
      });
      const parts = [G.box(0.24, 0.1, 0.12, [sw(o.side), sw(o.side), top, sw(o.side), side, side], 0.008)];
      parts.push(G.place(G.sphere(0.03, sw('#ffffff'), 8, 6), { y: 0.055, sx: 1.2, sy: 0.9, sz: 0.5 }));
      return G.merge(parts);
    })(),
  });

  def({
    id: 'toilet',
    icon: 'tissue',
    price: 398,
    kind: 'soft',
    mass: 0.9,
    shape: { type: 'box', h: [0.14, 0.11, 0.1] },
    geo: (() => {
      const wrap = A.paint(0.28 * PPM, 0.22 * PPM, (g, x, y, w, h) => {
        g.fillStyle = '#f8f6f0';
        g.fillRect(x, y, w, h);
        for (let i = 0; i < 3; i++) {
          g.strokeStyle = 'rgba(200,190,170,0.6)';
          g.lineWidth = 3;
          g.beginPath();
          g.arc(x + w * (0.17 + i * 0.33), y + h * 0.5, h * 0.42, 0, 6.3);
          g.stroke();
        }
        g.fillStyle = '#7ad37a';
        g.fillRect(x, y + h * 0.4, w, h * 0.2);
        logo(g, x + w * 0.2, y + h * 0.42, w * 0.6, h * 0.16, '#ffffff', 101);
        drawBarcode(g, x + w * 0.7, y + h * 0.66, w * 0.25, h * 0.26, 102);
      });
      return G.box(0.28, 0.22, 0.2, [wrap, wrap, sw('#f2efe6'), sw('#f2efe6'), wrap, wrap], 0.05, 3);
    })(),
  });

  def({
    id: 'donut',
    icon: 'donut',
    price: 320,
    kind: 'box',
    mass: 0.3,
    shape: { type: 'box', h: [0.09, 0.04, 0.09] },
    geo: (() => {
      const top = A.paint(0.18 * PPM, 0.18 * PPM, (g, x, y, w, h) => {
        pattern(g, x, y, w, h, 'stripes', '#fbd4e0', '#ff8fb8', 111);
        g.fillStyle = 'rgba(255,255,255,0.9)';
        g.beginPath();
        g.arc(x + w / 2, y + h / 2, w * 0.36, 0, 6.3);
        g.fill();
        drawIcon(g, 'donut', x + w * 0.2, y + h * 0.2, w * 0.6);
      });
      const side = A.paint(0.18 * PPM, 0.08 * PPM, (g, x, y, w, h) => {
        pattern(g, x, y, w, h, 'stripes', '#fbd4e0', '#ff8fb8', 112);
        drawBarcode(g, x + w * 0.55, y + h * 0.15, w * 0.38, h * 0.7, 113);
      });
      return G.box(0.18, 0.08, 0.18, [side, side, top, sw('#ff8fb8'), side, side], 0.006);
    })(),
  });

  def({
    id: 'fish',
    icon: 'fish',
    price: 398,
    kind: 'soft',
    mass: 0.4,
    shape: { type: 'box', h: [0.12, 0.022, 0.07] },
    geo: (() => {
      const top = A.paint(0.24 * PPM, 0.14 * PPM, (g, x, y, w, h) => {
        g.fillStyle = '#e8eef2';
        g.fillRect(x, y, w, h);
        drawIcon(g, 'fish', x + w * 0.1, y - h * 0.05, h * 1.1);
        g.fillStyle = 'rgba(255,255,255,0.35)';
        g.fillRect(x, y, w, h * 0.3);
        g.fillStyle = '#ffd34a';
        g.fillRect(x + w * 0.66, y + h * 0.58, w * 0.3, h * 0.36);
        drawBarcode(g, x + w * 0.68, y + h * 0.6, w * 0.26, h * 0.3, 121);
      });
      const tray = G.box(0.24, 0.044, 0.14, [sw('#2a2a30'), sw('#2a2a30'), top, sw('#2a2a30'), sw('#2a2a30'), sw('#2a2a30')], 0.01);
      return G.merge([tray]);
    })(),
  });

  def({
    id: 'cheese',
    icon: 'cheese',
    price: 298,
    kind: 'soft',
    mass: 0.25,
    shape: { type: 'box', h: [0.07, 0.03, 0.05] },
    geo: (() => {
      const face = A.paint(128, 96, (g, x, y, w, h) => {
        g.fillStyle = '#ffd248';
        g.fillRect(x, y, w, h);
        g.fillStyle = '#e8a920';
        for (const [a, b, r] of [
          [0.3, 0.4, 9],
          [0.7, 0.6, 12],
          [0.5, 0.8, 6],
        ]) {
          g.beginPath();
          g.arc(x + a * w, y + b * h, r, 0, 6.3);
          g.fill();
        }
        drawBarcode(g, x + w * 0.05, y + h * 0.05, w * 0.4, h * 0.35, 131);
      });
      const shape = new THREE.Shape();
      shape.moveTo(-0.07, -0.03);
      shape.lineTo(0.07, -0.03);
      shape.lineTo(0.07, 0.03);
      shape.lineTo(-0.05, 0.01);
      shape.closePath();
      const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.1, bevelEnabled: true, bevelSize: 0.004, bevelThickness: 0.004, bevelSegments: 1 }).toNonIndexed();
      geo.translate(0, 0, -0.05);
      // planar uv from x/y
      const p = geo.attributes.position;
      const uv = geo.attributes.uv;
      for (let i = 0; i < p.count; i++) {
        const u = (p.getX(i) + 0.075) / 0.15;
        const v = (p.getY(i) + 0.035) / 0.07 + p.getZ(i) * 0.3;
        uv.setXY(i, face.u0 + (face.u1 - face.u0) * Math.min(1, Math.max(0, u)), face.v0 + (face.v1 - face.v0) * Math.min(1, Math.max(0, v)));
      }
      geo.clearGroups();
      return G.merge([geo]);
    })(),
  });

  def({
    id: 'tofu',
    icon: 'tofu',
    price: 78,
    kind: 'cup',
    mass: 0.35,
    shape: { type: 'box', h: [0.06, 0.025, 0.045] },
    geo: (() => {
      const top = A.paint(0.12 * PPM, 0.09 * PPM, (g, x, y, w, h) => {
        g.fillStyle = '#fbfbf4';
        g.fillRect(x, y, w, h);
        g.fillStyle = '#4aa0d8';
        g.fillRect(x, y, w, h * 0.3);
        logo(g, x + w * 0.1, y + h * 0.05, w * 0.6, h * 0.2, '#ffffff', 141);
        drawBarcode(g, x + w * 0.55, y + h * 0.45, w * 0.4, h * 0.45, 142);
      });
      return G.box(0.12, 0.05, 0.09, [sw('#f2f2ea'), sw('#f2f2ea'), top, sw('#e8e8e0'), sw('#f2f2ea'), sw('#f2f2ea')], 0.006);
    })(),
  });

  def({
    id: 'can',
    icon: 'can',
    price: 98,
    kind: 'can',
    mass: 0.35,
    shape: { type: 'box', h: [0.033, 0.06, 0.033] },
    geo: (() => {
      const side = A.paint(256, 120, (g, x, y, w, h) => {
        g.fillStyle = '#3fb27f';
        g.fillRect(x, y, w, h);
        g.fillStyle = '#ffffff';
        g.beginPath();
        g.moveTo(x, y + h * 0.4);
        for (let xx = 0; xx <= w; xx += 4) g.lineTo(x + xx, y + h * 0.4 + Math.sin(xx * 0.05) * h * 0.1);
        for (let xx = w; xx >= 0; xx -= 4) g.lineTo(x + xx, y + h * 0.58 + Math.sin(xx * 0.05) * h * 0.1);
        g.fill();
        drawIcon(g, 'can', x + w * 0.05, y + h * 0.05, h * 0.3);
        drawBarcode(g, x + w * 0.62, y + h * 0.66, w * 0.3, h * 0.28, 151);
      });
      const body = G.cylinder(0.033, 0.033, 0.11, side, sw('#c9ced4'), 18);
      const rim = G.place(G.cylinder(0.03, 0.033, 0.008, sw('#c9ced4'), sw('#b8bec6'), 18), { y: 0.059 });
      return G.merge([body, rim]);
    })(),
  });

  def({
    id: 'juice',
    icon: 'juice',
    price: 168,
    kind: 'bottle',
    mass: 0.6,
    shape: { type: 'box', h: [0.04, 0.11, 0.04] },
    geo: (() => {
      const side = A.paint(256, 200, (g, x, y, w, h) => {
        const grad = g.createLinearGradient(0, y, 0, y + h);
        grad.addColorStop(0, '#ffcf5a');
        grad.addColorStop(1, '#ff9a1e');
        g.fillStyle = grad;
        g.fillRect(x, y, w, h);
        g.fillStyle = '#f6f1e2';
        g.fillRect(x, y + h * 0.45, w, h * 0.3);
        drawIcon(g, 'orange', x + w * 0.08, y + h * 0.44, h * 0.3);
        drawBarcode(g, x + w * 0.62, y + h * 0.48, w * 0.3, h * 0.24, 161);
      });
      const body = G.lathe(
        [
          [0, -0.11],
          [0.038, -0.11],
          [0.04, -0.1],
          [0.04, 0.03],
          [0.03, 0.07],
          [0.016, 0.085],
          [0.015, 0.1],
          [0, 0.1],
        ],
        side,
        18,
      );
      const cap = G.place(G.cylinder(0.017, 0.017, 0.022, sw('#e94f37'), sw('#e94f37'), 12), { y: 0.108 });
      return G.merge([body, cap]);
    })(),
  });

  def({
    id: 'ketchup',
    icon: 'ketchup',
    price: 198,
    kind: 'bottle',
    mass: 0.5,
    shape: { type: 'box', h: [0.035, 0.1, 0.035] },
    geo: (() => {
      const side = A.paint(256, 180, (g, x, y, w, h) => {
        g.fillStyle = '#d8352b';
        g.fillRect(x, y, w, h);
        g.fillStyle = '#f8efd8';
        g.fillRect(x + w * 0.05, y + h * 0.35, w * 0.4, h * 0.35);
        drawIcon(g, 'tomato', x + w * 0.1, y + h * 0.37, h * 0.3);
        drawBarcode(g, x + w * 0.58, y + h * 0.4, w * 0.3, h * 0.25, 171);
      });
      const body = G.lathe(
        [
          [0, -0.1],
          [0.034, -0.1],
          [0.038, -0.07],
          [0.036, 0.04],
          [0.022, 0.075],
          [0, 0.08],
        ],
        side,
        16,
      );
      const cap = G.place(G.cylinder(0.02, 0.022, 0.03, sw('#ffffff'), sw('#ffffff'), 12), { y: 0.09 });
      return G.merge([body, cap]);
    })(),
  });

  def({
    id: 'icecream',
    icon: 'icecream',
    price: 248,
    kind: 'cup',
    mass: 0.4,
    shape: { type: 'box', h: [0.06, 0.04, 0.06] },
    geo: (() => {
      const side = A.paint(256, 80, (g, x, y, w, h) => {
        pattern(g, x, y, w, h, 'dots', '#fbd4e0', '#ffffff', 181);
        drawIcon(g, 'icecream', x + w * 0.05, y + 4, h * 0.9);
        drawIcon(g, 'snowflake', x + w * 0.4, y + 10, h * 0.6);
        drawBarcode(g, x + w * 0.66, y + h * 0.2, w * 0.28, h * 0.6, 182);
      });
      const tub = G.cylinder(0.062, 0.055, 0.08, side, sw('#f7a8c4'), 20);
      const lidG = G.place(G.cylinder(0.065, 0.065, 0.01, sw('#e94f8f'), sw('#ffffff'), 20), { y: 0.043 });
      return G.merge([tub, lidG]);
    })(),
  });

  def({
    id: 'candy',
    icon: 'candy',
    price: 108,
    kind: 'bag',
    mass: 0.15,
    shape: { type: 'box', h: [0.07, 0.09, 0.025] },
    geo: pillowBag(A, 0.14, 0.18, 0.05, { bg: '#ff6fa8', bg2: 'rgba(255,255,255,0.3)', band: '#ffffff', logo: '#ff6fa8', icon: 'candy', pattern: 'stripes', seed: 191, side: '#ff6fa8' }),
  });

  def({
    id: 'chips',
    icon: 'chips',
    price: 138,
    kind: 'bag',
    mass: 0.12,
    shape: { type: 'box', h: [0.1, 0.13, 0.035] },
    geo: pillowBag(A, 0.2, 0.26, 0.07, { bg: '#e94f37', bg2: 'rgba(255,211,74,0.35)', band: '#ffd34a', logo: '#e94f37', icon: 'chips', pattern: 'burst', seed: 201, side: '#e94f37', badge: '#ffd34a' }),
  });

  def({
    id: 'riceball',
    icon: 'riceball',
    price: 128,
    kind: 'soft',
    mass: 0.12,
    shape: { type: 'box', h: [0.05, 0.045, 0.02] },
    geo: (() => {
      const face = A.paint(128, 120, (g, x, y, w, h) => {
        g.fillStyle = '#f7f5ee';
        g.fillRect(x, y, w, h);
        g.fillStyle = '#24312a';
        g.fillRect(x + w * 0.25, y + h * 0.55, w * 0.5, h * 0.45);
        g.fillStyle = '#e94f37';
        g.fillRect(x + w * 0.45, y, w * 0.1, h);
        drawBarcode(g, x + w * 0.05, y + h * 0.08, w * 0.35, h * 0.3, 211);
      });
      const shape = new THREE.Shape();
      shape.moveTo(0, 0.05);
      shape.quadraticCurveTo(0.06, -0.04, 0.05, -0.045);
      shape.lineTo(-0.05, -0.045);
      shape.quadraticCurveTo(-0.06, -0.04, 0, 0.05);
      const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.03, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 2 }).toNonIndexed();
      geo.translate(0, 0, -0.015);
      const p = geo.attributes.position;
      const uv = geo.attributes.uv;
      for (let i = 0; i < p.count; i++) {
        const u = (p.getX(i) + 0.06) / 0.12;
        const v = (p.getY(i) + 0.055) / 0.11;
        uv.setXY(i, face.u0 + (face.u1 - face.u0) * Math.min(1, Math.max(0, u)), face.v0 + (face.v1 - face.v0) * Math.min(1, Math.max(0, v)));
      }
      geo.clearGroups();
      return G.merge([geo]);
    })(),
  });

  // --- the giant ---
  def({
    id: 'watermelon',
    icon: 'watermelon',
    price: 1980,
    kind: 'giant',
    mass: 14,
    shape: { type: 'sphere', r: 0.25 },
    geo: (() => {
      const sk = skin(A, 512, 256, (g, x, y, w, h) => {
        g.fillStyle = '#3d8a3e';
        g.fillRect(x, y, w, h);
        const r = rng(9);
        for (let i = 0; i < 900; i++) {
          g.fillStyle = r() > 0.5 ? 'rgba(120,180,90,0.35)' : 'rgba(20,60,25,0.3)';
          g.fillRect(x + r() * w, y + r() * h, 3, 3);
        }
        g.fillStyle = '#17401f';
        for (let i = 0; i < 16; i++) {
          const sx = x + (i / 16) * w;
          g.beginPath();
          for (let yy = 0; yy <= h; yy += 4) g.lineTo(sx + Math.sin(yy * 0.12 + i) * 6 + Math.sin(yy * 0.43 + i * 3) * 3, y + yy);
          for (let yy = h; yy >= 0; yy -= 4) g.lineTo(sx + 12 + Math.sin(yy * 0.12 + i) * 6 + Math.sin(yy * 0.31 + i) * 4, y + yy);
          g.fill();
        }
      });
      const body = G.sphere(0.25, sk, 32, 22, 0.94);
      const stem = G.place(G.cylinder(0.008, 0.012, 0.04, sw('#6b5a2a'), sw('#6b5a2a'), 6), { y: 0.245, rz: 0.4 });
      return G.merge([body, stem]);
    })(),
  });

  // The watermelon's barcode sticker is a separate decal so we can find it.
  const wmSticker = A.paint(160, 110, (g, x, y, w, h) => {
    g.fillStyle = '#ffd34a';
    g.beginPath();
    g.ellipse(x + w / 2, y + h / 2, w / 2 - 2, h / 2 - 2, 0, 0, 6.3);
    g.fill();
    g.strokeStyle = INK;
    g.lineWidth = 4;
    g.stroke();
    drawBarcode(g, x + w * 0.2, y + h * 0.22, w * 0.6, h * 0.56, 999);
  });
  product('watermelon').stickerGeo = (() => {
    const geo = new THREE.SphereGeometry(0.2532, 12, 8, -0.32, 0.64, Math.PI / 2 - 0.26, 0.52).toNonIndexed();
    geo.scale(1, 0.94, 1);
    G.remapUV(geo, wmSticker);
    geo.clearGroups();
    return geo;
  })();

  // Category signs + receipt need icon access; expose atlas
  const tex = new THREE.CanvasTexture(A.canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  return { atlas: A, texture: tex };
}

// Puffy pillow bag; front panel + barcode on the back.
function pillowBag(A, w, h, d, o) {
  const fw = w * PPM;
  const fh = h * PPM;
  const front = A.paint(fw, fh, (g, x, y, ww, hh) => {
    frontPanel(g, x, y, ww, hh, o);
    // crimped seal bands
    g.fillStyle = 'rgba(0,0,0,0.12)';
    for (let i = 0; i < ww; i += 6) {
      g.fillRect(x + i, y, 3, hh * 0.05);
      g.fillRect(x + i, y + hh * 0.95, 3, hh * 0.05);
    }
  });
  const back = A.paint(fw, fh, (g, x, y, ww, hh) => {
    sidePanel(g, x, y, ww, hh, o, true);
  });
  return pillowGeo(w, h, d, front, back);
}

export function pillowGeo(w, h, d, front, back, segX = 10, segY = 12) {
  const geo = new THREE.BoxGeometry(w, h, d, segX, segY, 2);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i) / (w / 2);
    const y = p.getY(i) / (h / 2);
    const z = p.getZ(i);
    // puff: thickness falls to zero at the top & bottom seals and toward the sides
    const fy = Math.max(0, 1 - Math.pow(Math.abs(y), 4));
    const fx = Math.max(0, 1 - Math.pow(Math.abs(x), 6) * 0.6);
    p.setZ(i, z * fy * fx);
    p.setX(i, p.getX(i) * (1 - 0.06 * fy));
  }
  geo.computeVertexNormals();
  const flat = geo.toNonIndexed();
  const uv = flat.attributes.uv;
  const per = uv.count / 6;
  for (let i = 0; i < uv.count; i++) {
    const face = Math.floor(i / per); // px nx py ny pz nz
    const r = face === 5 ? back : front;
    let u = uv.getX(i);
    let v = uv.getY(i);
    if (face < 4) {
      u = 0.02;
      v = 0.5;
    }
    uv.setXY(i, r.u0 + (r.u1 - r.u0) * u, r.v0 + (r.v1 - r.v0) * v);
  }
  flat.clearGroups();
  return G.merge([flat]);
}

// Low-poly stand-ins used when products are stocked on shelves by the thousand.
export function shelfProxy(p, atlas, sideColor = '#d9d2c4') {
  const s = p.size;
  const face = p.face || atlas.swatch('#cccccc');
  if (p.shape.type === 'sphere') {
    const geo = new THREE.IcosahedronGeometry(p.shape.r, 1);
    geo.scale(1, s.y / s.x, 1);
    geo.translate(0, s.y / 2, 0);
    return G.remapUV(G.toNonIndexed(geo), face);
  }
  const side = atlas.swatch(sideColor);
  const geo = G.box(s.x, s.y, s.z, [side, side, side, side, face, side], 0);
  geo.translate(0, s.y / 2, 0);
  return geo;
}
