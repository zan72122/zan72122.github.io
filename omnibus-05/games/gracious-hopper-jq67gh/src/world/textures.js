// 花びら・葉の微細構造テクスチャ (葉脈・繊維・色素)
import * as THREE from '../vendor/three.module.min.js';
import { makeCanvas, canvasTexture } from '../core/canvas.js';
import { mulberry32, fbm, clamp } from '../core/util.js';

// R=葉脈, G=繊維, B=色素ムラ
export function makePetalTexture() {
  const W = 512, H = 1024;
  const veins = makeCanvas(W, H), fib = makeCanvas(W, H);
  const vc = veins.getContext('2d'), fc = fib.getContext('2d');
  vc.fillStyle = '#000'; vc.fillRect(0, 0, W, H);
  fc.fillStyle = '#000'; fc.fillRect(0, 0, W, H);
  const r = mulberry32(606);
  const Y = (v) => (1 - v) * H; // v=0 が根元 (下)
  vc.lineCap = 'round';
  // 主脈: 根元で収束し縁へ扇状に広がる
  const n = 17;
  const drawVein = (u0, v0, u1, v1, w0, w1, wig, depth) => {
    const steps = 40;
    let px = u0, pv = v0;
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      const tt = t * t * (3 - 2 * t);
      let u = u0 + (u1 - u0) * Math.pow(t, 0.6);
      const v = v0 + (v1 - v0) * t;
      u += Math.sin(v * 23 + u0 * 40) * wig * t;
      const w = w0 + (w1 - w0) * tt;
      vc.strokeStyle = `rgba(255,255,255,${0.95 - 0.5 * t})`;
      vc.lineWidth = w;
      vc.beginPath(); vc.moveTo(px * W, Y(pv)); vc.lineTo(u * W, Y(v)); vc.stroke();
      // 枝分かれ
      if (depth < 2 && r() < 0.05 && v > 0.25 && v < 0.85) {
        const dir = r() < 0.5 ? -1 : 1;
        const len = 0.15 + r() * 0.25;
        drawVein(u, v, clamp(u + dir * (0.03 + r() * 0.05), 0.02, 0.98), Math.min(1, v + len), w * 0.7, 0.4, wig * 0.6, depth + 1);
      }
      px = u; pv = v;
    }
  };
  for (let i = 0; i < n; i++) {
    const f = (i + 0.5) / n;
    const uEnd = 0.5 + (f - 0.5) * 1.02 + (r() - 0.5) * 0.02;
    const uStart = 0.5 + (f - 0.5) * 0.25;
    const main = Math.abs(f - 0.5) < 0.04;
    drawVein(uStart, 0.0, uEnd, 0.985 - Math.pow(Math.abs(f - 0.5) * 2, 3) * 0.25, main ? 4.5 : 3.0, 0.6, 0.004, 0);
  }
  // 細かな網目
  vc.lineWidth = 0.7;
  for (let i = 0; i < 700; i++) {
    const u = 0.05 + r() * 0.9, v = 0.15 + r() * 0.82;
    vc.strokeStyle = `rgba(255,255,255,${0.12 + r() * 0.18})`;
    vc.beginPath(); vc.moveTo(u * W, Y(v)); vc.lineTo((u + (r() - 0.5) * 0.03) * W, Y(v + 0.01 + r() * 0.03)); vc.stroke();
  }
  // 繊維: 長さ方向の細い筋
  for (let i = 0; i < 9000; i++) {
    const u = r(), v = r();
    const len = 10 + r() * 50;
    const a = 0.08 + r() * 0.3;
    fc.strokeStyle = `rgba(255,255,255,${a})`;
    fc.lineWidth = 0.6 + r() * 0.8;
    const sl = (u - 0.5) * 0.25;
    fc.beginPath(); fc.moveTo(u * W, Y(v)); fc.lineTo((u + sl * len / H) * W, Y(v) - len); fc.stroke();
  }
  const vd = vc.getImageData(0, 0, W, H).data;
  const fd = fc.getImageData(0, 0, W, H).data;
  const out = makeCanvas(W, H);
  const oc = out.getContext('2d');
  const img = oc.createImageData(W, H);
  const d = img.data;
  for (let y = 0; y < H; y++) {
    const v = 1 - y / H;
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 4;
      const u = x / W;
      // 色素ムラ: 根元の濃い斑と雲状の揺らぎ
      const cloud = fbm(u * 6, v * 10, 4, 21);
      const speck = fbm(u * 60, v * 110, 2, 5);
      let pig = cloud * 0.7 + speck * 0.3;
      d[i] = vd[i];
      d[i + 1] = fd[i];
      d[i + 2] = clamp(pig) * 255;
      d[i + 3] = 255;
    }
  }
  oc.putImageData(img, 0, 0);
  const t = canvasTexture(out, { srgb: false, anisotropy: 8 });
  return t;
}

// R=葉脈, G=ノイズ
export function makeLeafTexture() {
  const W = 512, H = 1024;
  const c = makeCanvas(W, H);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
  const r = mulberry32(88);
  const Y = (v) => (1 - v) * H;
  ctx.lineCap = 'round';
  // 主脈
  ctx.strokeStyle = '#fff'; ctx.lineWidth = 10;
  ctx.beginPath(); ctx.moveTo(W / 2, Y(0)); ctx.lineTo(W / 2, Y(1)); ctx.stroke();
  // 側脈
  for (let i = 0; i < 18; i++) {
    const v0 = 0.04 + i * 0.053;
    for (const s of [-1, 1]) {
      ctx.lineWidth = 4 - i * 0.12;
      ctx.strokeStyle = 'rgba(255,255,255,0.85)';
      ctx.beginPath();
      ctx.moveTo(W / 2, Y(v0));
      ctx.quadraticCurveTo(W / 2 + s * W * 0.22, Y(v0 + 0.06), W / 2 + s * W * 0.47, Y(v0 + 0.16));
      ctx.stroke();
    }
  }
  // 網状脈
  ctx.lineWidth = 1;
  for (let i = 0; i < 1600; i++) {
    const x = r() * W, y = r() * H;
    ctx.strokeStyle = `rgba(255,255,255,${0.15 + r() * 0.2})`;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (r() - 0.5) * 22, y + (r() - 0.5) * 22); ctx.stroke();
  }
  const img = ctx.getImageData(0, 0, W, H);
  const d = img.data;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4;
    d[i + 1] = fbm(x / 40, y / 40, 4, 12) * 255;
    d[i + 2] = 0; d[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return canvasTexture(c, { srgb: false, anisotropy: 8 });
}

export function makeSparkTexture() {
  const c = makeCanvas(64, 64);
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,255,255,0.55)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  return canvasTexture(c, { srgb: false });
}
