// One illustration language for the whole store: chunky outlines, flat fills,
// a single soft highlight. Used on packaging, the register screen, signs and receipts.
// Every icon is drawn in a 100 x 100 box.

export const INK = '#3a2a22';

function setup(ctx, x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 100, size / 100);
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.strokeStyle = INK;
  ctx.lineWidth = 5;
}

function blob(ctx, fill, path, stroke = true) {
  ctx.beginPath();
  path(ctx);
  ctx.fillStyle = fill;
  ctx.fill();
  if (stroke) ctx.stroke();
}

function shine(ctx, x, y, rx, ry, rot = -0.6, a = 0.55) {
  ctx.save();
  ctx.globalAlpha = a;
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, rot, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function leaf(ctx, x, y, len, ang, fill = '#5a9e3a') {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(ang);
  blob(ctx, fill, (c) => {
    c.moveTo(0, 0);
    c.quadraticCurveTo(len * 0.5, -len * 0.45, len, 0);
    c.quadraticCurveTo(len * 0.5, len * 0.45, 0, 0);
  });
  ctx.restore();
}

const ICONS = {
  apple(c) {
    blob(c, '#d8352b', (p) => {
      p.moveTo(50, 30);
      p.bezierCurveTo(70, 18, 94, 30, 90, 58);
      p.bezierCurveTo(86, 84, 66, 94, 50, 86);
      p.bezierCurveTo(34, 94, 14, 84, 10, 58);
      p.bezierCurveTo(6, 30, 30, 18, 50, 30);
    });
    c.beginPath();
    c.moveTo(50, 32);
    c.quadraticCurveTo(48, 18, 54, 8);
    c.stroke();
    leaf(c, 53, 16, 26, -0.5);
    shine(c, 30, 46, 7, 12, 0.5);
  },
  banana(c) {
    for (let i = 0; i < 3; i++) {
      c.save();
      c.translate(i * 6 - 6, i * 7 - 4);
      blob(c, i === 1 ? '#f7d23c' : '#f2c62a', (p) => {
        p.moveTo(18, 24);
        p.bezierCurveTo(14, 64, 46, 90, 88, 76);
        p.bezierCurveTo(90, 70, 86, 68, 82, 68);
        p.bezierCurveTo(52, 74, 30, 56, 30, 22);
        p.closePath();
      });
      c.restore();
    }
    c.fillStyle = '#6b4b2a';
    c.fillRect(16, 12, 14, 10);
    c.strokeRect(16, 12, 14, 10);
  },
  orange(c) {
    blob(c, '#f39a1e', (p) => p.arc(50, 56, 36, 0, Math.PI * 2));
    c.fillStyle = 'rgba(160,80,0,0.35)';
    for (let i = 0; i < 14; i++) {
      const a = i * 2.4;
      c.beginPath();
      c.arc(50 + Math.cos(a) * (8 + i * 1.6), 58 + Math.sin(a) * (8 + i * 1.5), 1.6, 0, 6.3);
      c.fill();
    }
    leaf(c, 50, 22, 24, -0.3);
    shine(c, 36, 42, 8, 11);
  },
  milk(c) {
    blob(c, '#ffffff', (p) => {
      p.moveTo(22, 32);
      p.lineTo(50, 12);
      p.lineTo(78, 32);
      p.lineTo(78, 92);
      p.lineTo(22, 92);
      p.closePath();
    });
    blob(c, '#3c78c8', (p) => {
      p.rect(22, 62, 56, 30);
    });
    // cow spot
    c.fillStyle = INK;
    c.beginPath();
    c.ellipse(40, 46, 7, 5, 0.3, 0, 6.3);
    c.ellipse(62, 50, 5, 4, -0.2, 0, 6.3);
    c.fill();
    c.fillStyle = '#ffffff';
    c.beginPath();
    c.arc(50, 77, 9, 0, 6.3);
    c.fill();
  },
  bread(c) {
    blob(c, '#d99a4e', (p) => {
      p.moveTo(14, 84);
      p.lineTo(14, 44);
      p.bezierCurveTo(10, 18, 40, 14, 50, 28);
      p.bezierCurveTo(60, 14, 90, 18, 86, 44);
      p.lineTo(86, 84);
      p.closePath();
    });
    blob(c, '#fbe7c2', (p) => {
      p.moveTo(24, 80);
      p.lineTo(24, 48);
      p.bezierCurveTo(22, 30, 40, 28, 50, 38);
      p.bezierCurveTo(60, 28, 78, 30, 76, 48);
      p.lineTo(76, 80);
      p.closePath();
    }, false);
    shine(c, 30, 30, 6, 4, -0.4, 0.4);
  },
  eggs(c) {
    for (let i = 0; i < 3; i++) {
      blob(c, '#fff3e0', (p) => p.ellipse(26 + i * 24, 50, 12, 16, 0, 0, Math.PI * 2));
    }
    blob(c, '#c9b49a', (p) => {
      p.moveTo(8, 56);
      p.lineTo(92, 56);
      p.lineTo(86, 82);
      p.lineTo(14, 82);
      p.closePath();
    });
  },
  carrot(c) {
    blob(c, '#ef7d22', (p) => {
      p.moveTo(30, 30);
      p.quadraticCurveTo(50, 22, 70, 30);
      p.quadraticCurveTo(60, 70, 52, 94);
      p.quadraticCurveTo(48, 96, 46, 92);
      p.quadraticCurveTo(38, 70, 30, 30);
    });
    c.beginPath();
    c.moveTo(42, 46);
    c.lineTo(52, 46);
    c.moveTo(46, 62);
    c.lineTo(56, 62);
    c.stroke();
    leaf(c, 50, 28, 22, -1.9, '#4f9a3a');
    leaf(c, 50, 28, 24, -1.3, '#5fb043');
    leaf(c, 50, 28, 20, -2.4, '#5fb043');
  },
  yogurt(c) {
    blob(c, '#ffffff', (p) => {
      p.moveTo(22, 30);
      p.lineTo(78, 30);
      p.lineTo(70, 90);
      p.lineTo(30, 90);
      p.closePath();
    });
    blob(c, '#ec6b9a', (p) => p.rect(18, 22, 64, 10));
    c.fillStyle = '#ec6b9a';
    c.beginPath();
    c.arc(50, 60, 12, 0, 6.3);
    c.fill();
  },
  chips(c) {
    blob(c, '#e94f37', (p) => {
      p.moveTo(18, 14);
      p.lineTo(82, 14);
      p.quadraticCurveTo(90, 50, 82, 88);
      p.lineTo(18, 88);
      p.quadraticCurveTo(10, 50, 18, 14);
    });
    c.fillStyle = '#ffd34a';
    for (let i = 0; i < 3; i++) {
      c.beginPath();
      c.ellipse(36 + i * 14, 52 + (i % 2) * 8, 10, 7, 0.4 * i, 0, 6.3);
      c.fill();
      c.stroke();
    }
    c.beginPath();
    c.moveTo(18, 22);
    c.lineTo(82, 22);
    c.moveTo(18, 80);
    c.lineTo(82, 80);
    c.stroke();
  },
  cereal(c) {
    blob(c, '#2e9fd6', (p) => p.rect(20, 8, 60, 86));
    c.fillStyle = '#ffd34a';
    c.beginPath();
    c.arc(50, 40, 16, 0, 6.3);
    c.fill();
    c.stroke();
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      c.beginPath();
      c.moveTo(50 + Math.cos(a) * 21, 40 + Math.sin(a) * 21);
      c.lineTo(50 + Math.cos(a) * 27, 40 + Math.sin(a) * 27);
      c.stroke();
    }
    blob(c, '#ffffff', (p) => p.ellipse(50, 76, 20, 10, 0, 0, 6.3));
  },
  cookies(c) {
    for (let i = 0; i < 3; i++) {
      blob(c, '#c98845', (p) => p.arc(30 + i * 20, 56 - (i % 2) * 10, 17, 0, Math.PI * 2));
      c.fillStyle = INK;
      for (let k = 0; k < 4; k++) {
        c.beginPath();
        c.arc(24 + i * 20 + (k % 2) * 10, 50 - (i % 2) * 10 + Math.floor(k / 2) * 10, 2.2, 0, 6.3);
        c.fill();
      }
    }
  },
  juice(c) {
    blob(c, '#ffb12b', (p) => {
      p.moveTo(40, 8);
      p.lineTo(60, 8);
      p.lineTo(60, 24);
      p.quadraticCurveTo(76, 32, 76, 46);
      p.lineTo(76, 92);
      p.lineTo(24, 92);
      p.lineTo(24, 46);
      p.quadraticCurveTo(24, 32, 40, 24);
      p.closePath();
    });
    blob(c, '#f6f1e2', (p) => p.rect(24, 54, 52, 26));
    c.fillStyle = '#f39a1e';
    c.beginPath();
    c.arc(50, 67, 8, 0, 6.3);
    c.fill();
    shine(c, 34, 40, 4, 10, 0.2);
  },
  can(c) {
    blob(c, '#3fb27f', (p) => {
      p.moveTo(26, 14);
      p.lineTo(74, 14);
      p.lineTo(74, 90);
      p.lineTo(26, 90);
      p.closePath();
    });
    blob(c, '#ffffff', (p) => {
      p.moveTo(26, 44);
      p.bezierCurveTo(40, 34, 60, 58, 74, 44);
      p.lineTo(74, 60);
      p.bezierCurveTo(60, 72, 40, 50, 26, 62);
      p.closePath();
    }, false);
    c.strokeRect(26, 14, 48, 76);
    shine(c, 34, 50, 3, 26, 0, 0.5);
  },
  tomato(c) {
    blob(c, '#e5402e', (p) => p.ellipse(50, 58, 38, 32, 0, 0, Math.PI * 2));
    for (let i = 0; i < 5; i++) leaf(c, 50, 30, 18, -Math.PI / 2 + (i - 2) * 0.7, '#4f9a3a');
    shine(c, 34, 48, 8, 6, -0.4);
  },
  broccoli(c) {
    blob(c, '#8fbf5a', (p) => {
      p.moveTo(40, 92);
      p.lineTo(44, 52);
      p.lineTo(56, 52);
      p.lineTo(60, 92);
      p.closePath();
    });
    for (const [x, y, r] of [
      [30, 44, 16],
      [50, 34, 19],
      [70, 44, 16],
      [42, 54, 12],
      [60, 54, 12],
    ]) {
      blob(c, '#3f8a3a', (p) => p.arc(x, y, r, 0, 6.3));
    }
  },
  pudding(c) {
    blob(c, '#f7d27a', (p) => {
      p.moveTo(28, 34);
      p.lineTo(72, 34);
      p.lineTo(82, 86);
      p.lineTo(18, 86);
      p.closePath();
    });
    blob(c, '#8a4a22', (p) => {
      p.moveTo(28, 34);
      p.lineTo(72, 34);
      p.lineTo(74, 44);
      p.quadraticCurveTo(50, 52, 26, 44);
      p.closePath();
    });
    shine(c, 36, 64, 5, 12, 0.1, 0.4);
  },
  fish(c) {
    blob(c, '#7fa9c9', (p) => {
      p.moveTo(10, 50);
      p.bezierCurveTo(30, 22, 64, 24, 76, 50);
      p.bezierCurveTo(64, 76, 30, 78, 10, 50);
    });
    blob(c, '#7fa9c9', (p) => {
      p.moveTo(74, 50);
      p.lineTo(94, 32);
      p.lineTo(94, 68);
      p.closePath();
    });
    c.fillStyle = INK;
    c.beginPath();
    c.arc(26, 46, 4, 0, 6.3);
    c.fill();
    shine(c, 44, 40, 14, 4, 0.1, 0.5);
  },
  cheese(c) {
    blob(c, '#ffd248', (p) => {
      p.moveTo(10, 74);
      p.lineTo(90, 74);
      p.lineTo(90, 40);
      p.lineTo(20, 30);
      p.closePath();
    });
    c.fillStyle = '#e8a920';
    for (const [x, y, r] of [
      [36, 56, 6],
      [62, 60, 8],
      [76, 48, 4],
    ]) {
      c.beginPath();
      c.arc(x, y, r, 0, 6.3);
      c.fill();
    }
  },
  candy(c) {
    c.lineWidth = 6;
    c.beginPath();
    c.moveTo(50, 50);
    c.lineTo(50, 96);
    c.stroke();
    blob(c, '#ff6fa8', (p) => p.arc(50, 38, 28, 0, Math.PI * 2));
    c.strokeStyle = '#ffffff';
    c.lineWidth = 6;
    c.beginPath();
    for (let a = 0; a < 12; a += 0.2) {
      const r = a * 2.2;
      c.lineTo(50 + Math.cos(a) * r, 38 + Math.sin(a) * r);
    }
    c.stroke();
  },
  onion(c) {
    blob(c, '#d9a35a', (p) => {
      p.moveTo(50, 14);
      p.bezierCurveTo(60, 34, 90, 44, 84, 70);
      p.bezierCurveTo(78, 92, 22, 92, 16, 70);
      p.bezierCurveTo(10, 44, 40, 34, 50, 14);
    });
    c.beginPath();
    c.moveTo(50, 30);
    c.quadraticCurveTo(36, 60, 44, 86);
    c.moveTo(50, 30);
    c.quadraticCurveTo(64, 60, 56, 86);
    c.stroke();
  },
  grapes(c) {
    const pts = [
      [34, 32],
      [52, 30],
      [70, 34],
      [42, 48],
      [60, 48],
      [50, 64],
      [34, 62],
      [66, 62],
      [50, 80],
    ];
    for (const [x, y] of pts) blob(c, '#7a4aa8', (p) => p.arc(x, y, 11, 0, 6.3));
    for (const [x, y] of pts) shine(c, x - 3, y - 4, 2.5, 3.5, -0.4, 0.5);
    leaf(c, 52, 20, 24, -0.6);
  },
  tofu(c) {
    blob(c, '#fbfbf4', (p) => p.rect(14, 30, 72, 48));
    blob(c, '#4aa0d8', (p) => p.rect(14, 22, 72, 10));
  },
  icecream(c) {
    blob(c, '#d9a35a', (p) => {
      p.moveTo(30, 48);
      p.lineTo(70, 48);
      p.lineTo(50, 96);
      p.closePath();
    });
    blob(c, '#fbd4e0', (p) => p.arc(50, 38, 22, 0, Math.PI * 2));
    blob(c, '#ffffff', (p) => p.arc(42, 22, 12, 0, Math.PI * 2));
  },
  watermelon(c) {
    blob(c, '#2f7a3c', (p) => p.arc(50, 52, 42, 0, Math.PI * 2));
    c.strokeStyle = '#173f20';
    c.lineWidth = 6;
    for (let i = -2; i <= 2; i++) {
      c.beginPath();
      for (let y = 12; y <= 92; y += 4) c.lineTo(50 + i * 14 * Math.sqrt(Math.max(0, 1 - Math.pow((y - 52) / 42, 2))) + Math.sin(y * 0.35) * 2.5, y);
      c.stroke();
    }
    c.strokeStyle = INK;
    c.lineWidth = 5;
    c.beginPath();
    c.arc(50, 52, 42, 0, Math.PI * 2);
    c.stroke();
    shine(c, 32, 34, 10, 6, -0.6, 0.35);
  },
  ketchup(c) {
    blob(c, '#d8352b', (p) => {
      p.moveTo(36, 22);
      p.lineTo(64, 22);
      p.quadraticCurveTo(76, 50, 72, 92);
      p.lineTo(28, 92);
      p.quadraticCurveTo(24, 50, 36, 22);
    });
    blob(c, '#ffffff', (p) => p.rect(42, 8, 16, 14));
    blob(c, '#f8efd8', (p) => p.rect(30, 50, 40, 22), false);
    c.fillStyle = '#d8352b';
    c.beginPath();
    c.arc(50, 61, 6, 0, 6.3);
    c.fill();
  },
  tissue(c) {
    blob(c, '#a8d8e8', (p) => p.rect(10, 38, 80, 46));
    blob(c, '#ffffff', (p) => {
      p.moveTo(38, 40);
      p.quadraticCurveTo(44, 14, 52, 22);
      p.quadraticCurveTo(58, 10, 64, 40);
    });
    c.fillStyle = '#ffffff';
    for (let i = 0; i < 4; i++) {
      c.beginPath();
      c.arc(22 + i * 18, 70, 5, 0, 6.3);
      c.fill();
    }
  },
  riceball(c) {
    blob(c, '#ffffff', (p) => {
      p.moveTo(50, 10);
      p.bezierCurveTo(66, 10, 92, 60, 88, 78);
      p.bezierCurveTo(84, 92, 16, 92, 12, 78);
      p.bezierCurveTo(8, 60, 34, 10, 50, 10);
    });
    blob(c, '#24312a', (p) => p.rect(32, 60, 36, 30));
  },
  donut(c) {
    blob(c, '#d9a35a', (p) => {
      p.arc(50, 54, 38, 0, Math.PI * 2);
      p.arc(50, 54, 12, 0, Math.PI * 2, true);
    });
    blob(c, '#ff8fb8', (p) => {
      p.moveTo(14, 48);
      p.bezierCurveTo(20, 18, 80, 18, 86, 48);
      p.bezierCurveTo(80, 56, 74, 50, 66, 56);
      p.bezierCurveTo(60, 44, 40, 44, 34, 56);
      p.bezierCurveTo(26, 50, 20, 56, 14, 48);
    });
    const cols = ['#ffffff', '#ffd34a', '#7ac8ff', '#7ad37a'];
    for (let i = 0; i < 8; i++) {
      c.fillStyle = cols[i % 4];
      c.fillRect(24 + ((i * 37) % 52), 28 + ((i * 13) % 16), 6, 3);
    }
  },
  // Non-product pictograms used by signs.
  star(c) {
    blob(c, '#ffd34a', (p) => {
      for (let i = 0; i < 10; i++) {
        const r = i % 2 ? 18 : 42;
        const a = -Math.PI / 2 + (i * Math.PI) / 5;
        p.lineTo(50 + Math.cos(a) * r, 54 + Math.sin(a) * r);
      }
      p.closePath();
    });
  },
  basket(c) {
    blob(c, '#e94f37', (p) => {
      p.moveTo(10, 40);
      p.lineTo(90, 40);
      p.lineTo(80, 88);
      p.lineTo(20, 88);
      p.closePath();
    });
    c.beginPath();
    c.moveTo(28, 40);
    c.quadraticCurveTo(50, 0, 72, 40);
    c.stroke();
    c.strokeStyle = '#ffffff';
    c.lineWidth = 4;
    for (let i = 0; i < 4; i++) {
      c.beginPath();
      c.moveTo(26 + i * 16, 50);
      c.lineTo(28 + i * 14, 80);
      c.stroke();
    }
  },
  snowflake(c) {
    c.strokeStyle = '#ffffff';
    c.lineWidth = 7;
    for (let i = 0; i < 3; i++) {
      const a = (i * Math.PI) / 3;
      c.beginPath();
      c.moveTo(50 + Math.cos(a) * 38, 50 + Math.sin(a) * 38);
      c.lineTo(50 - Math.cos(a) * 38, 50 - Math.sin(a) * 38);
      c.stroke();
    }
  },
};

export const ICON_NAMES = Object.keys(ICONS);

export function drawIcon(ctx, name, x, y, size) {
  const fn = ICONS[name] || ICONS.star;
  setup(ctx, x, y, size);
  fn(ctx);
  ctx.restore();
}

// Big round store sign with an icon (category signs hanging over aisles).
export function drawRoundSign(ctx, name, cx, cy, r, bg) {
  ctx.save();
  ctx.fillStyle = bg;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = r * 0.07;
  ctx.strokeStyle = '#fffaf0';
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.9, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
  drawIcon(ctx, name, cx - r * 0.62, cy - r * 0.62, r * 1.24);
}
