// 手続き生成のテクスチャ(外部画像を使わない)
import * as THREE from 'three';

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}
// 決定的な乱数
export function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}
function tex(c, { srgb = true, repeat = false, aniso = 4 } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = aniso;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.needsUpdate = true;
  return t;
}

// テラゾー床(4m 四方を一枚)
export function terrazzo() {
  const N = 1024;
  const c = canvas(N, N);
  const g = c.getContext('2d');
  g.fillStyle = '#a9a39a';
  g.fillRect(0, 0, N, N);
  const r = rng(7);
  // 大きなむら
  for (let i = 0; i < 60; i++) {
    const x = r() * N, y = r() * N, rad = 80 + r() * 220;
    const grd = g.createRadialGradient(x, y, 0, x, y, rad);
    const l = r() < 0.5 ? 'rgba(255,250,240,0.10)' : 'rgba(120,110,100,0.07)';
    grd.addColorStop(0, l);
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd;
    g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
  }
  const chips = ['#8f8a82', '#e8e4dc', '#6d6a66', '#b5a48c', '#a9b0b2', '#d8cfc0', '#5d5852'];
  for (let i = 0; i < 9000; i++) {
    const x = r() * N, y = r() * N, s = 0.6 + Math.pow(r(), 3) * 5;
    g.fillStyle = chips[(r() * chips.length) | 0];
    g.globalAlpha = 0.55 + r() * 0.45;
    g.beginPath();
    g.ellipse(x, y, s, s * (0.5 + r() * 0.5), r() * 3, 0, Math.PI * 2);
    g.fill();
  }
  g.globalAlpha = 1;
  // 目地(1m 間隔)
  g.strokeStyle = 'rgba(80,76,70,0.35)';
  g.lineWidth = 2;
  for (let k = 0; k <= 4; k++) {
    const p = (k / 4) * N;
    g.beginPath(); g.moveTo(p, 0); g.lineTo(p, N); g.stroke();
    g.beginPath(); g.moveTo(0, p); g.lineTo(N, p); g.stroke();
  }
  return tex(c, { repeat: true, aniso: 8 });
}

// 殻: u = 成長方向(巻きの角度)、v = 管の周り
export function shellMaps() {
  const W = 2048, H = 512;
  const c = canvas(W, H), b = canvas(W, H);
  const g = c.getContext('2d'), gb = b.getContext('2d');
  const r = rng(11);
  // 地色: 成長に沿ってわずかに変化
  const grd = g.createLinearGradient(0, 0, W, 0);
  grd.addColorStop(0, '#d8c9a4');
  grd.addColorStop(0.5, '#b89a68');
  grd.addColorStop(1, '#a17f4f');
  g.fillStyle = grd;
  g.fillRect(0, 0, W, H);
  gb.fillStyle = '#808080';
  gb.fillRect(0, 0, W, H);
  // 螺旋帯(v 方向の位置が一定の暗い帯、炎状に途切れる)
  const bands = [[0.18, 0.05], [0.33, 0.035], [0.52, 0.07], [0.7, 0.03]];
  for (const [v0, w] of bands) {
    for (let x = 0; x < W; x += 2) {
      const flame = 0.55 + 0.45 * Math.sin(x * 0.045 + Math.sin(x * 0.011) * 3);
      const a = 0.25 + 0.55 * flame * (0.6 + 0.4 * r());
      g.fillStyle = `rgba(70,45,22,${a.toFixed(3)})`;
      const y = (v0 + Math.sin(x * 0.004) * 0.01) * H;
      g.fillRect(x, y - (w * H) / 2, 2, w * H * (0.7 + 0.3 * flame));
    }
  }
  // 細かい成長線(u 一定の細い線、不規則な間隔)
  let x = 0;
  while (x < W) {
    const step = 2.2 + r() * 3.4;
    x += step;
    const dark = r() < 0.5;
    const a = 0.08 + r() * 0.22;
    g.strokeStyle = dark ? `rgba(60,40,20,${a})` : `rgba(255,245,220,${a * 0.8})`;
    g.lineWidth = 0.7 + r() * 0.9;
    g.beginPath();
    let px = x;
    g.moveTo(px, 0);
    for (let y = 0; y <= H; y += 16) {
      px = x + Math.sin(y * 0.03 + x * 0.1) * 1.2;
      g.lineTo(px, y);
    }
    g.stroke();
    // 凹凸
    const v = dark ? 95 : 160;
    gb.strokeStyle = `rgb(${v},${v},${v})`;
    gb.lineWidth = 1.1;
    gb.beginPath();
    gb.moveTo(x, 0);
    gb.lineTo(x + Math.sin(x) * 1.2, H);
    gb.stroke();
    // 時々強い休止線
    if (r() < 0.035) {
      g.strokeStyle = 'rgba(55,35,18,0.45)';
      g.lineWidth = 2.2;
      g.beginPath(); g.moveTo(x + 1, 0); g.lineTo(x + 1, H); g.stroke();
      gb.strokeStyle = 'rgb(50,50,50)';
      gb.lineWidth = 2.5;
      gb.beginPath(); gb.moveTo(x + 1, 0); gb.lineTo(x + 1, H); gb.stroke();
    }
  }
  // 微細な粒
  for (let i = 0; i < 12000; i++) {
    const px = r() * W, py = r() * H;
    g.fillStyle = `rgba(255,255,255,${(r() * 0.05).toFixed(3)})`;
    g.fillRect(px, py, 1.5, 1.5);
  }
  return { map: tex(c, { aniso: 8 }), bump: tex(b, { srgb: false, aniso: 8 }) };
}

// 皮膚: 溝で区切られた小さな粒
export function skinMaps() {
  const N = 512;
  const c = canvas(N, N), b = canvas(N, N);
  const g = c.getContext('2d'), gb = b.getContext('2d');
  const r = rng(23);
  g.fillStyle = '#8b7d6c';
  g.fillRect(0, 0, N, N);
  gb.fillStyle = '#909090';
  gb.fillRect(0, 0, N, N);
  for (let i = 0; i < 1600; i++) {
    const x = r() * N, y = r() * N;
    const rx = 4 + r() * 9, ry = 3 + r() * 6, rot = r() * Math.PI;
    for (const [ox, oy] of [[0, 0], [N, 0], [-N, 0], [0, N], [0, -N]]) {
      const l = 110 + (r() * 50) | 0;
      g.fillStyle = `rgb(${l + 30},${l + 18},${l})`;
      g.beginPath(); g.ellipse(x + ox, y + oy, rx, ry, rot, 0, Math.PI * 2); g.fill();
      gb.fillStyle = `rgb(${170 + ((r() * 60) | 0)},${170},${170})`;
      gb.beginPath(); gb.ellipse(x + ox, y + oy, rx * 0.85, ry * 0.85, rot, 0, Math.PI * 2); gb.fill();
    }
  }
  // 暗い溝の網目
  g.globalCompositeOperation = 'multiply';
  g.strokeStyle = 'rgba(70,60,50,0.5)';
  g.lineWidth = 1.2;
  for (let i = 0; i < 260; i++) {
    let x = r() * N, y = r() * N;
    g.beginPath(); g.moveTo(x, y);
    for (let k = 0; k < 8; k++) { x += (r() - 0.5) * 30; y += (r() - 0.3) * 24; g.lineTo(x, y); }
    g.stroke();
  }
  g.globalCompositeOperation = 'source-over';
  return { map: tex(c, { repeat: true }), bump: tex(b, { srgb: false, repeat: true }) };
}

// 手荷物タグの印字(文字・数字を使わない飾り)
export function tagPrint() {
  const W = 512, H = 256;
  const c = canvas(W, H);
  const g = c.getContext('2d');
  g.fillStyle = '#f4efe3';
  g.fillRect(0, 0, W, H);
  // 紙の繊維
  const r = rng(5);
  for (let i = 0; i < 2500; i++) {
    g.fillStyle = `rgba(150,140,120,${(r() * 0.08).toFixed(3)})`;
    g.fillRect(r() * W, r() * H, 1 + r() * 3, 1);
  }
  // 色帯(穴側)
  g.fillStyle = '#e0582c';
  g.fillRect(0, 0, 112, H);
  g.fillStyle = '#f2b134';
  g.fillRect(112, 0, 14, H);
  // 穴の補強輪(穴は形状に開いている)
  g.fillStyle = '#d9d3c4';
  g.beginPath(); g.arc(58, H / 2, 32, 0, Math.PI * 2); g.fill();
  g.strokeStyle = '#a49c8b'; g.lineWidth = 3;
  g.beginPath(); g.arc(58, H / 2, 31, 0, Math.PI * 2); g.stroke();
  // 大きな丸印(くぼみと同じ丸)
  g.fillStyle = '#2f8f8a';
  g.beginPath(); g.arc(250, H / 2, 74, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#f4efe3';
  g.beginPath(); g.arc(250, H / 2, 50, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#2f8f8a';
  g.beginPath(); g.arc(250, H / 2, 26, 0, Math.PI * 2); g.fill();
  // 縞(バーコード風の飾り)
  let x = 352;
  while (x < W - 24) {
    const w = 2 + ((r() * 4) | 0);
    g.fillStyle = '#26231f';
    g.fillRect(x, 46, w, H - 92);
    x += w + 2 + ((r() * 5) | 0);
  }
  // 縁取り
  g.strokeStyle = 'rgba(90,80,60,0.35)';
  g.lineWidth = 6;
  g.strokeRect(3, 3, W - 6, H - 6);
  return tex(c, { aniso: 8 });
}

// 窓の外の空
export function skyTexture() {
  const W = 2048, H = 1024;
  const c = canvas(W, H);
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 0, H);
  grd.addColorStop(0, '#5f93c9');
  grd.addColorStop(0.55, '#a9cbe6');
  grd.addColorStop(0.72, '#e6eef0');
  grd.addColorStop(0.74, '#9aa595');
  grd.addColorStop(1, '#6f7a6a');
  g.fillStyle = grd;
  g.fillRect(0, 0, W, H);
  const r = rng(99);
  // 雲
  for (let i = 0; i < 70; i++) {
    const cx = r() * W, cy = H * (0.12 + r() * 0.45), s = 60 + r() * 180;
    for (let k = 0; k < 9; k++) {
      const x = cx + (r() - 0.5) * s * 1.8, y = cy + (r() - 0.5) * s * 0.35, rr = s * (0.25 + r() * 0.35);
      const gg = g.createRadialGradient(x, y, 0, x, y, rr);
      gg.addColorStop(0, 'rgba(255,255,255,0.35)');
      gg.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gg;
      g.fillRect(x - rr, y - rr, rr * 2, rr * 2);
    }
  }
  // 遠くの滑走路と建物
  g.fillStyle = '#7d8579';
  g.fillRect(0, H * 0.735, W, H * 0.02);
  for (let i = 0; i < 40; i++) {
    const x = r() * W, w = 20 + r() * 90, h = 6 + r() * 40;
    g.fillStyle = `rgba(${120 + r() * 40},${130 + r() * 30},${140 + r() * 30},0.8)`;
    g.fillRect(x, H * 0.735 - h, w, h);
  }
  g.fillStyle = '#5b6458';
  g.fillRect(0, H * 0.79, W, 4);
  return tex(c);
}

// 天井パネル
export function ceilingTexture() {
  const N = 512;
  const c = canvas(N, N);
  const g = c.getContext('2d');
  g.fillStyle = '#e9e7e2';
  g.fillRect(0, 0, N, N);
  const r = rng(3);
  for (let i = 0; i < 3000; i++) {
    g.fillStyle = `rgba(120,115,110,${(r() * 0.05).toFixed(3)})`;
    g.fillRect(r() * N, r() * N, 2, 2);
  }
  g.strokeStyle = 'rgba(110,105,98,0.45)';
  g.lineWidth = 3;
  g.strokeRect(1.5, 1.5, N - 3, N - 3);
  return tex(c, { repeat: true });
}

// 柔らかな放射状のぼかし(接地影・濡れ跡)。alphaMap 用に灰色の濃淡で描く
export function blobTexture() {
  const N = 128;
  const c = canvas(N, N);
  const g = c.getContext('2d');
  g.fillStyle = '#000';
  g.fillRect(0, 0, N, N);
  const grd = g.createRadialGradient(N / 2, N / 2, 0, N / 2, N / 2, N / 2);
  grd.addColorStop(0, '#fff');
  grd.addColorStop(0.45, '#a6a6a6');
  grd.addColorStop(1, '#000');
  g.fillStyle = grd;
  g.fillRect(0, 0, N, N);
  return tex(c, { srgb: false });
}

// 細長い帯のぼかし(横方向は縁で消え、縦方向は一様)。alphaMap 用
export function stripTexture() {
  const W = 64, H = 4;
  const c = canvas(W, H);
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, W, 0);
  grd.addColorStop(0, '#000');
  grd.addColorStop(0.28, '#c8c8c8');
  grd.addColorStop(0.5, '#fff');
  grd.addColorStop(0.72, '#c8c8c8');
  grd.addColorStop(1, '#000');
  g.fillStyle = grd;
  g.fillRect(0, 0, W, H);
  const t = tex(c, { srgb: false });
  t.wrapT = THREE.RepeatWrapping;
  return t;
}
