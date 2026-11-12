// Prop designs rendered with the same material pipeline as stickers (so they share the
// light, reflections and shadows of the world).
import { registerDesign } from './registry.js';
import { rrect, rrectSub, heart, star, circle, ellipse, radial, linear, polyPath } from './shapes.js';

const reg = (code, param = 0) => `rgb(${code * 16},${param},0)`;

export function registerProps() {
  registerDesign('turntable', {
    mat: 'gloss', dome: 0.035, rim: 0.03, crown: 0.0, border: 0, size: 1, param: [0, 0, 0.8, 0],
    shape(ctx, S) { circle(ctx, S * 0.5, S * 0.5, S * 0.47); ctx.fill(); },
    art(ctx, S) {
      circle(ctx, S * 0.5, S * 0.5, S * 0.47);
      ctx.fillStyle = '#fff4f8';
      ctx.fill();
      circle(ctx, S * 0.5, S * 0.5, S * 0.43);
      ctx.fillStyle = linear(ctx, 0, 0, S, S, [[0, '#ffd3e1'], [1, '#ffbfd2']]);
      ctx.fill();
      // lace doily ring
      ctx.fillStyle = '#fffafc';
      for (let i = 0; i < 28; i++) {
        const a = (i / 28) * Math.PI * 2;
        circle(ctx, S * 0.5 + Math.cos(a) * S * 0.31, S * 0.5 + Math.sin(a) * S * 0.31, S * 0.04);
        ctx.fill();
      }
      circle(ctx, S * 0.5, S * 0.5, S * 0.31);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,190,210,0.6)';
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        circle(ctx, S * 0.5 + Math.cos(a) * S * 0.255, S * 0.5 + Math.sin(a) * S * 0.255, S * 0.012);
        ctx.fill();
      }
      // index marks on the rim so rotation is visible
      ctx.fillStyle = '#ff9fbe';
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        heart(ctx, S * 0.5 + Math.cos(a) * S * 0.45, S * 0.5 + Math.sin(a) * S * 0.45, S * 0.03, S * 0.028);
        ctx.fill();
      }
    },
    relief(ctx, S) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, S, S);
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = S * 0.03;
      circle(ctx, S * 0.5, S * 0.5, S * 0.45);
      ctx.stroke();
    },
    reliefScale: 0.6,
  });

  registerDesign('crankArm', {
    mat: 'metal', dome: 0.08, rim: 0.06, crown: 0, border: 0, size: 1,
    shape(ctx, S) { rrect(ctx, S * 0.04, S * 0.42, S * 0.92, S * 0.16, S * 0.08); ctx.fill(); },
    art(ctx, S) { ctx.fillStyle = '#ffd77a'; ctx.fillRect(0, 0, S, S); },
  });

  registerDesign('crankKnob', {
    mat: 'gloss', dome: 0.34, rim: 1, crown: 0, border: 0, size: 1, param: [0, 0, 1.2, 0],
    shape(ctx, S) { circle(ctx, S * 0.5, S * 0.5, S * 0.42); ctx.fill(); },
    art(ctx, S) {
      circle(ctx, S * 0.5, S * 0.5, S * 0.42);
      ctx.fillStyle = radial(ctx, S * 0.42, S * 0.4, 0, S * 0.45, [[0, '#ffb3cc'], [1, '#ff7fa8']]);
      ctx.fill();
    },
  });

  registerDesign('gearBox', {
    mat: 'gloss', dome: 0.12, rim: 0.12, crown: 0.1, border: 0, size: 1, param: [0, 0, 0.8, 0],
    shape(ctx, S) { rrect(ctx, S * 0.1, S * 0.1, S * 0.8, S * 0.8, S * 0.18); ctx.fill(); },
    art(ctx, S) {
      rrect(ctx, S * 0.1, S * 0.1, S * 0.8, S * 0.8, S * 0.18);
      ctx.fillStyle = '#d9c8ff';
      ctx.fill();
      heart(ctx, S * 0.5, S * 0.52, S * 0.36, S * 0.32);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      circle(ctx, S * 0.5, S * 0.5, S * 0.09);
      ctx.fillStyle = '#ffd77a';
      ctx.fill();
    },
    regions(ctx, S) {
      ctx.fillStyle = reg(1);
      circle(ctx, S * 0.5, S * 0.5, S * 0.09);
      ctx.fill();
    },
  });

  // ---- workshop ----
  registerDesign('mold', {
    mat: 'glass', dome: 0.1, rim: 0.12, crown: 0.0, border: 0, size: 1, param: [0.18, 0.06, 1.0, 0.4],
    shape(ctx, S) { rrect(ctx, S * 0.05, S * 0.05, S * 0.9, S * 0.9, S * 0.2); ctx.fill(); },
    art(ctx, S) {
      rrect(ctx, S * 0.05, S * 0.05, S * 0.9, S * 0.9, S * 0.2);
      ctx.fillStyle = '#eaf6ff';
      ctx.fill();
    },
    relief(ctx, S) {
      // the empty heart window is a cavity
      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, S, S);
      ctx.fillStyle = '#000';
      heart(ctx, S * 0.5, S * 0.53, S * 0.7, S * 0.63);
      ctx.fill();
    },
    reliefSigned: true,
    reliefScale: 0.9,
  });

  registerDesign('dish', {
    mat: 'gloss', dome: 0.09, rim: 0.1, crown: 0, border: 0, size: 1, param: [0, 0, 1.0, 0],
    shape(ctx, S) { circle(ctx, S * 0.5, S * 0.5, S * 0.46); ctx.fill(); },
    art(ctx, S, v) {
      circle(ctx, S * 0.5, S * 0.5, S * 0.46);
      ctx.fillStyle = v.rim || '#ffc4d6';
      ctx.fill();
      circle(ctx, S * 0.5, S * 0.5, S * 0.38);
      ctx.fillStyle = '#fffafb';
      ctx.fill();
    },
    relief(ctx, S) {
      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, S, S);
      ctx.fillStyle = radial(ctx, S * 0.5, S * 0.5, 0, S * 0.4, [[0, '#202020'], [0.85, '#404040'], [1, '#808080']]);
      circle(ctx, S * 0.5, S * 0.5, S * 0.4);
      ctx.fill();
    },
    reliefSigned: true,
    reliefScale: 0.7,
  });

  const bottleDef = {
    mat: 'glass', dome: 0.16, rim: 0.3, crown: 0, border: 0, size: 1, param: [0.4, 0.06, 1.1, 0.5],
    shape(ctx, S) {
      rrect(ctx, S * 0.08, S * 0.3, S * 0.62, S * 0.4, S * 0.16);
      ctx.fill();
      rrect(ctx, S * 0.66, S * 0.4, S * 0.16, S * 0.2, S * 0.05);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(S * 0.8, S * 0.44);
      ctx.lineTo(S * 0.95, S * 0.48);
      ctx.lineTo(S * 0.95, S * 0.52);
      ctx.lineTo(S * 0.8, S * 0.56);
      ctx.closePath();
      ctx.fill();
    },
    art(ctx, S, v) {
      rrect(ctx, S * 0.08, S * 0.3, S * 0.62, S * 0.4, S * 0.16);
      ctx.fillStyle = v.liquid || '#e8f6ff';
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      rrect(ctx, S * 0.66, S * 0.4, S * 0.16, S * 0.2, S * 0.05);
      ctx.fill();
      ctx.fillStyle = v.cap || '#ff9fbe';
      ctx.beginPath();
      ctx.moveTo(S * 0.8, S * 0.44);
      ctx.lineTo(S * 0.95, S * 0.48);
      ctx.lineTo(S * 0.95, S * 0.52);
      ctx.lineTo(S * 0.8, S * 0.56);
      ctx.closePath();
      ctx.fill();
      // label: a heart (no text)
      heart(ctx, S * 0.38, S * 0.5, S * 0.18, S * 0.16);
      ctx.fillStyle = v.cap || '#ff9fbe';
      ctx.fill();
    },
    regions(ctx, S) {
      ctx.fillStyle = reg(5);
      rrect(ctx, S * 0.66, S * 0.4, S * 0.16, S * 0.2, S * 0.05);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(S * 0.8, S * 0.44);
      ctx.lineTo(S * 0.95, S * 0.48);
      ctx.lineTo(S * 0.95, S * 0.52);
      ctx.lineTo(S * 0.8, S * 0.56);
      ctx.closePath();
      ctx.fill();
      heart(ctx, S * 0.38, S * 0.5, S * 0.18, S * 0.16);
      ctx.fill();
    },
  };
  registerDesign('bottle', bottleDef);
  for (const t of BOTTLE_TINTS) registerDesign('bottle:' + t.key, { ...bottleDef, variant: t });

  registerDesign('glitterPot', {
    mat: 'liquid', dome: 0.12, rim: 0.2, crown: 0, border: 0.02, size: 1, tint: [0.95, 0.9, 1.0], param: [0.3, 0.05, 1.0, 0],
    glitter: { count: 230, hues: [0.0, 0.08, 0.55, 0.75, 0.15] },
    shape(ctx, S) { circle(ctx, S * 0.5, S * 0.5, S * 0.44); ctx.fill(); },
    art(ctx, S) {
      circle(ctx, S * 0.5, S * 0.5, S * 0.44);
      ctx.fillStyle = '#f6eefc';
      ctx.fill();
    },
    borderColor: '#d8c8ff',
  });
}

export const BOTTLE_TINTS = [
  { key: 'pink', liquid: '#ffd0e0', cap: '#ff8fb5' },
  { key: 'blue', liquid: '#cbe9ff', cap: '#7cc4ff' },
  { key: 'clear', liquid: '#f2fbff', cap: '#c9b2ff' },
];

export { rrect, rrectSub, star, ellipse, polyPath };
