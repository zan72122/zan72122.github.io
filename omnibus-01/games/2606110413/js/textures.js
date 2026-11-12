import * as THREE from 'three';

// すべてのテクスチャを Canvas 2D で実行時生成する(外部アセットなし)

function canvasTexture(size, draw, { repeat = false } = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  draw(canvas.getContext('2d'), size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  if (repeat) {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
  }
  return tex;
}

// ロリポップの渦巻き
function swirl(colorA, colorB) {
  return canvasTexture(256, (ctx, s) => {
    const c = s / 2;
    ctx.fillStyle = colorA;
    ctx.fillRect(0, 0, s, s);
    ctx.fillStyle = colorB;
    const arms = 2;
    for (let a = 0; a < arms; a++) {
      ctx.beginPath();
      ctx.moveTo(c, c);
      const turns = 2.6;
      const steps = 140;
      for (let edge = 0; edge < 2; edge++) {
        for (let i = 0; i <= steps; i++) {
          const t = edge === 0 ? i / steps : 1 - i / steps;
          const angle = t * turns * Math.PI * 2 + (a * Math.PI * 2) / arms +
            (edge === 0 ? 0 : Math.PI / arms) * 0.9;
          const r = t * c * 1.45;
          ctx.lineTo(c + Math.cos(angle) * r, c + Math.sin(angle) * r);
        }
      }
      ctx.closePath();
      ctx.fill();
    }
  });
}

// キャンディの斜めストライプ
function stripes(colorA, colorB, count = 7) {
  return canvasTexture(256, (ctx, s) => {
    ctx.fillStyle = colorA;
    ctx.fillRect(0, 0, s, s);
    ctx.fillStyle = colorB;
    const w = s / count;
    ctx.save();
    ctx.translate(s / 2, s / 2);
    ctx.rotate(Math.PI / 5);
    for (let i = -count * 2; i < count * 2; i += 2) {
      ctx.fillRect(i * w, -s, w, s * 2);
    }
    ctx.restore();
  }, { repeat: true });
}

// 地面の水玉
function polkaGround() {
  return canvasTexture(512, (ctx, s) => {
    ctx.fillStyle = '#ffb7dd';
    ctx.fillRect(0, 0, s, s);
    const colors = ['#ffd1e9', '#fff0b8', '#cdeffc', '#e1d2fa'];
    const n = 8;
    const cell = s / n;
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        ctx.fillStyle = colors[(x + y * 3) % colors.length];
        ctx.beginPath();
        ctx.arc(
          x * cell + cell / 2 + ((y % 2) * cell) / 2,
          y * cell + cell / 2,
          cell * 0.22,
          0, Math.PI * 2
        );
        ctx.fill();
      }
    }
  }, { repeat: true });
}

// クッキーの焼き色 + チョコチップ
function cookieFace() {
  return canvasTexture(256, (ctx, s) => {
    const c = s / 2;
    const grad = ctx.createRadialGradient(c, c, s * 0.1, c, c, c);
    grad.addColorStop(0, '#e8b06a');
    grad.addColorStop(0.75, '#d9a05b');
    grad.addColorStop(1, '#b97f3e');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
    // チョコチップ
    ctx.fillStyle = '#5a3520';
    const chips = [
      [0.32, 0.3, 0.06], [0.66, 0.26, 0.05], [0.5, 0.52, 0.07],
      [0.28, 0.66, 0.05], [0.7, 0.62, 0.06], [0.46, 0.8, 0.05],
      [0.8, 0.45, 0.045], [0.18, 0.47, 0.045],
    ];
    for (const [x, y, r] of chips) {
      ctx.beginPath();
      ctx.arc(x * s, y * s, r * s, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#6b4128';
    }
  });
}

// 加算合成用の放射グロー
function glow() {
  return canvasTexture(128, (ctx, s) => {
    const c = s / 2;
    const grad = ctx.createRadialGradient(c, c, 0, c, c, c);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.25, 'rgba(255,255,255,0.55)');
    grad.addColorStop(0.6, 'rgba(255,255,255,0.14)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
  });
}

// 白い星(スプライト用・色はマテリアルで着ける)
function starShape() {
  return canvasTexture(128, (ctx, s) => {
    const c = s / 2;
    ctx.translate(c, c);
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? c * 0.92 : c * 0.4;
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
    ctx.fill();
  });
}

// 発射体の影(ブロブ)
function blobShadow() {
  return canvasTexture(64, (ctx, s) => {
    const c = s / 2;
    const grad = ctx.createRadialGradient(c, c, 0, c, c, c);
    grad.addColorStop(0, 'rgba(120,40,80,0.45)');
    grad.addColorStop(0.7, 'rgba(120,40,80,0.18)');
    grad.addColorStop(1, 'rgba(120,40,80,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
  });
}

// 点数ポップアップ(「+100」など)
function popupTexture(text, fill, stroke) {
  const w = 256;
  const h = 128;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.font = '900 72px "Hiragino Maru Gothic ProN", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineJoin = 'round';
  ctx.lineWidth = 18;
  ctx.strokeStyle = stroke;
  ctx.strokeText(text, w / 2, h / 2);
  ctx.fillStyle = fill;
  ctx.fillText(text, w / 2, h / 2);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createTextures() {
  const popups = {};
  // 通常点数 + フィーバー2倍ぶんの点数を事前生成
  for (const v of [50, 100, 150, 200, 300, 400, 500, 1000]) {
    popups[v] = popupTexture(`+${v}`, '#ffffff', v >= 500 ? '#f59f00' : '#f2509b');
  }
  popups.bonus = popupTexture('ぼーなす!', '#fff35e', '#e8590c');

  return {
    swirlPink: swirl('#fff6fa', '#ff5fa2'),
    swirlMint: swirl('#fff6fa', '#27c2a0'),
    swirlGrape: swirl('#fff6fa', '#a06ce0'),
    stripesRed: stripes('#fff6fa', '#ff5fa2'),
    stripesMint: stripes('#fff6fa', '#37cdb1', 9),
    stripesAwning: stripes('#fff6fa', '#ff7eb5', 11),
    ground: polkaGround(),
    cookie: cookieFace(),
    glow: glow(),
    star: starShape(),
    blobShadow: blobShadow(),
    popups,
  };
}
