/* プロシージャルCanvasTexture生成と共有マテリアル(外部画像ゼロ) */
import * as THREE from 'three';

export function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h || w;
  return { canvas: c, ctx: c.getContext('2d') };
}

export function makeTex(canvas, opt = {}) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = opt.linear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  if (opt.repeat) {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(opt.repeat[0], opt.repeat[1]);
  }
  if (opt.wrapX) tex.wrapS = THREE.RepeatWrapping;
  return tex;
}

function speckle(ctx, w, h, n, rMin, rMax, colors, alpha) {
  for (let i = 0; i < n; i++) {
    ctx.fillStyle = colors[(Math.random() * colors.length) | 0];
    ctx.globalAlpha = alpha * (0.4 + Math.random() * 0.6);
    const r = rMin + Math.random() * (rMax - rMin);
    ctx.beginPath();
    ctx.arc(Math.random() * w, Math.random() * h, r, 0, 6.29);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

/* ---- キッチンのタイル壁 ---- */
export function tileTexture() {
  const { canvas, ctx } = makeCanvas(512);
  const T = 128;
  ctx.fillStyle = '#ffffff';                 // 目地は白
  ctx.fillRect(0, 0, 512, 512);
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      const even = (x + y) % 2 === 0;
      const g = ctx.createLinearGradient(x * T, y * T, x * T, y * T + T);
      g.addColorStop(0, even ? '#ffd3e2' : '#ffc0d6');
      g.addColorStop(1, even ? '#ffc2d7' : '#ffafca');
      ctx.fillStyle = g;
      ctx.fillRect(x * T + 4, y * T + 4, T - 8, T - 8);
      ctx.fillStyle = 'rgba(255,255,255,0.45)';
      ctx.fillRect(x * T + 8, y * T + 8, T - 16, 14);
    }
  }
  return makeTex(canvas, { repeat: [6, 3] });
}

/* ---- カウンター天板(淡ピンクの大理石風) ---- */
export function marbleTexture() {
  const { canvas, ctx } = makeCanvas(512);
  ctx.fillStyle = '#fff2f6';
  ctx.fillRect(0, 0, 512, 512);
  ctx.strokeStyle = 'rgba(255,170,200,0.35)';
  for (let i = 0; i < 14; i++) {
    ctx.lineWidth = 1 + Math.random() * 2.5;
    ctx.beginPath();
    let x = Math.random() * 512, y = Math.random() * 512;
    ctx.moveTo(x, y);
    for (let s = 0; s < 6; s++) {
      x += (Math.random() - 0.5) * 160;
      y += (Math.random() - 0.5) * 160;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  speckle(ctx, 512, 512, 300, 0.5, 1.5, ['#ffd6e4', '#ffe9f1'], 0.5);
  return makeTex(canvas, { repeat: [3, 1] });
}

/* ---- 床(淡い木目) ---- */
export function floorTexture() {
  const { canvas, ctx } = makeCanvas(512);
  ctx.fillStyle = '#f7d9c9';
  ctx.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 8; i++) {
    ctx.fillStyle = i % 2 ? '#f3cfbc' : '#f9ddcd';
    ctx.fillRect(0, i * 64, 512, 62);
    ctx.strokeStyle = 'rgba(180,120,90,0.25)';
    ctx.lineWidth = 2;
    ctx.strokeRect(-2, i * 64, 516, 62);
    ctx.strokeStyle = 'rgba(190,130,100,0.14)';
    for (let g = 0; g < 5; g++) {
      ctx.beginPath();
      const y = i * 64 + 8 + g * 11;
      ctx.moveTo(0, y);
      ctx.bezierCurveTo(128, y + 4, 384, y - 4, 512, y + 2);
      ctx.stroke();
    }
  }
  return makeTex(canvas, { repeat: [5, 5] });
}

/* ---- スポンジ(きめ+焼き色)。mapとbump兼用に明度差で描く ---- */
export function spongeTextures() {
  const { canvas, ctx } = makeCanvas(1024, 512);
  const g = ctx.createLinearGradient(0, 0, 0, 512);
  g.addColorStop(0, '#f7dfae');
  g.addColorStop(0.75, '#f3d49c');
  g.addColorStop(0.92, '#d9a868');
  g.addColorStop(1, '#c08948');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 1024, 512);
  // クラム(気泡のきめ)
  speckle(ctx, 1024, 512, 2600, 1, 3.2, ['#e3c182', '#d2ab66', '#fdedc4'], 0.5);
  speckle(ctx, 1024, 512, 700, 2.5, 5, ['#caa15c', '#f9e6b8'], 0.3);
  const map = makeTex(canvas, { wrapX: true });

  // バンプ(同パターンのグレースケール)
  const b = makeCanvas(1024, 512);
  b.ctx.fillStyle = '#808080';
  b.ctx.fillRect(0, 0, 1024, 512);
  speckle(b.ctx, 1024, 512, 2600, 1, 3.2, ['#5a5a5a', '#a8a8a8'], 0.7);
  const bump = makeTex(b.canvas, { linear: true, wrapX: true });
  return { map, bump };
}

/* ---- ケーキ上面(焼き上がりのこんがり)
   球面キャップのUV(v=1が中心、v=0が縁)に合わせた縦グラデーション ---- */
export function cakeTopTexture() {
  const { canvas, ctx } = makeCanvas(512, 256);
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, '#f6dba6');     // 中心
  g.addColorStop(0.6, '#eec488');
  g.addColorStop(1, '#d9a25e');     // 縁はこんがり
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 512, 256);
  speckle(ctx, 512, 256, 600, 1, 2.4, ['#dcae66', '#f9e6b8'], 0.5);
  const tex = makeTex(canvas, { wrapX: true });
  return tex;
}

/* ---- 生地の渦(混ぜで回転させる)。半球にu方向回転で使う ---- */
export function batterSwirlTexture() {
  const { canvas, ctx } = makeCanvas(512, 256);
  ctx.fillStyle = '#efd5a0';
  ctx.fillRect(0, 0, 512, 256);
  ctx.lineCap = 'round';
  for (let i = 0; i < 7; i++) {
    ctx.strokeStyle = i % 2 ? 'rgba(255,250,230,0.65)' : 'rgba(214,178,110,0.5)';
    ctx.lineWidth = 10 + Math.random() * 8;
    ctx.beginPath();
    const y0 = 30 + i * 32;
    ctx.moveTo(0, y0);
    ctx.bezierCurveTo(150, y0 + 26, 360, y0 - 26, 512, y0);
    ctx.stroke();
  }
  return makeTex(canvas, { wrapX: true });
}

/* ---- いちごの表皮(種をフィロタキシス配置、bumpで窪み) ---- */
export function strawberryTextures() {
  const W = 512, H = 512;
  const { canvas, ctx } = makeCanvas(W, H);
  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, '#ff8a98');
  g.addColorStop(0.45, '#ee3a55');
  g.addColorStop(1, '#b51e3e');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  const b = makeCanvas(W, H);
  b.ctx.fillStyle = '#909090';
  b.ctx.fillRect(0, 0, W, H);

  // 種: 黄金角で散らす(v=0が上)
  const GA = 2.39996;
  for (let i = 0; i < 90; i++) {
    const v = 0.13 + 0.74 * (i / 90);
    const u = ((i * GA) / (Math.PI * 2)) % 1;
    const x = u * W, y = v * H;
    const sy = 7 + v * 5, sx = sy * 0.62;
    for (const xx of [x, x - W, x + W]) {
      // 窪み
      const dg = ctx.createRadialGradient(xx, y, 1, xx, y, sy * 2.1);
      dg.addColorStop(0, 'rgba(90,10,25,0.55)');
      dg.addColorStop(1, 'rgba(90,10,25,0)');
      ctx.fillStyle = dg;
      ctx.beginPath(); ctx.arc(xx, y, sy * 2.1, 0, 6.29); ctx.fill();
      // 種
      ctx.fillStyle = '#ffe082';
      ctx.beginPath(); ctx.ellipse(xx, y, sx, sy, 0, 0, 6.29); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.beginPath(); ctx.ellipse(xx - sx * 0.25, y - sy * 0.3, sx * 0.3, sy * 0.3, 0, 0, 6.29); ctx.fill();
      // bump: 窪み暗+種明
      const bg = b.ctx.createRadialGradient(xx, y, 1, xx, y, sy * 2.2);
      bg.addColorStop(0, '#3c3c3c');
      bg.addColorStop(1, '#909090');
      b.ctx.fillStyle = bg;
      b.ctx.beginPath(); b.ctx.arc(xx, y, sy * 2.2, 0, 6.29); b.ctx.fill();
      b.ctx.fillStyle = '#e8e8e8';
      b.ctx.beginPath(); b.ctx.ellipse(xx, y, sx, sy, 0, 0, 6.29); b.ctx.fill();
    }
  }
  return {
    map: makeTex(canvas, { wrapX: true }),
    bump: makeTex(b.canvas, { linear: true, wrapX: true })
  };
}

/* ---- キウイの断面 ---- */
export function kiwiTexture() {
  const { canvas, ctx } = makeCanvas(512);
  const C = 256;
  const g = ctx.createRadialGradient(C, C, 10, C, C, 250);
  g.addColorStop(0, '#f3f7d2');
  g.addColorStop(0.28, '#d8eb90');
  g.addColorStop(0.85, '#9cc24e');
  g.addColorStop(1, '#7da43c');
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.arc(C, C, 252, 0, 6.29); ctx.fill();
  // 放射状の果肉筋
  ctx.strokeStyle = 'rgba(255,255,255,0.5)';
  for (let i = 0; i < 36; i++) {
    const a = (i / 36) * Math.PI * 2;
    ctx.lineWidth = 1.5 + Math.random() * 2;
    ctx.beginPath();
    ctx.moveTo(C + Math.cos(a) * 60, C + Math.sin(a) * 60);
    ctx.lineTo(C + Math.cos(a + 0.06) * 225, C + Math.sin(a + 0.06) * 225);
    ctx.stroke();
  }
  // 種のリング
  ctx.fillStyle = '#2e2413';
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2 + Math.random() * 0.1;
    const r = 86 + Math.random() * 26;
    ctx.save();
    ctx.translate(C + Math.cos(a) * r, C + Math.sin(a) * r);
    ctx.rotate(a + Math.PI / 2);
    ctx.beginPath(); ctx.ellipse(0, 0, 4, 8, 0, 0, 6.29); ctx.fill();
    ctx.restore();
  }
  return makeTex(canvas);
}

/* ---- ろうそくの斜めストライプ ---- */
export function candleTexture() {
  const { canvas, ctx } = makeCanvas(256);
  ctx.fillStyle = '#fff8fb';
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle = '#ff7fae';
  for (let i = -2; i < 7; i++) {
    ctx.beginPath();
    ctx.moveTo(i * 48, 256);
    ctx.lineTo(i * 48 + 48, 0);
    ctx.lineTo(i * 48 + 76, 0);
    ctx.lineTo(i * 48 + 28, 256);
    ctx.fill();
  }
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.fillRect(0, 0, 36, 256);
  return makeTex(canvas, { wrapX: true });
}

/* ---- ミルクパック/小麦粉のラベル(ハート) ---- */
export function heartLabelTexture(bg, fg) {
  const { canvas, ctx } = makeCanvas(256);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.roundRect(48, 64, 160, 128, 24);
  ctx.fill();
  ctx.fillStyle = fg;
  ctx.beginPath();
  const x = 128, y = 122;
  ctx.moveTo(x, y + 36);
  ctx.bezierCurveTo(x - 52, y, x - 30, y - 38, x, y - 8);
  ctx.bezierCurveTo(x + 30, y - 38, x + 52, y, x, y + 36);
  ctx.fill();
  return makeTex(canvas);
}

/* ---- ソフト円(湯気・グロー用スプライト) ---- */
export function softCircleTexture(color) {
  const { canvas, ctx } = makeCanvas(128);
  const g = ctx.createRadialGradient(64, 64, 4, 64, 64, 62);
  g.addColorStop(0, color);
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  return makeTex(canvas);
}

/* ---- キラキラ星形スプライト ---- */
export function sparkTexture() {
  const { canvas, ctx } = makeCanvas(128);
  ctx.translate(64, 64);
  ctx.fillStyle = '#fff8c8';
  ctx.shadowColor = '#ffd866';
  ctx.shadowBlur = 18;
  ctx.beginPath();
  ctx.moveTo(0, -52);
  ctx.quadraticCurveTo(7, -7, 52, 0);
  ctx.quadraticCurveTo(7, 7, 0, 52);
  ctx.quadraticCurveTo(-7, 7, -52, 0);
  ctx.quadraticCurveTo(-7, -7, 0, -52);
  ctx.fill();
  return makeTex(canvas);
}

/* ---- 共有マテリアルショートカット ---- */
export function physical(opt) {
  return new THREE.MeshPhysicalMaterial(opt);
}
export function candy(color, opt = {}) {
  return new THREE.MeshPhysicalMaterial(Object.assign({
    color, roughness: 0.25, clearcoat: 0.9, clearcoatRoughness: 0.15
  }, opt));
}
