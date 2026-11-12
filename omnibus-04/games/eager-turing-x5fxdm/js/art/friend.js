// Painted parts of the visiting friend: a little bunny in a light-blue dress.
import { canvas, rrect, heart, circle, ellipse, radial, linear } from './paint.js';

export function friendParts(S = 512) {
  const parts = {};
  // body (dress, arms resting on the table)
  {
    const c = canvas(S, S * 0.7);
    const g = c.getContext('2d');
    const w = S, h = S * 0.7;
    g.fillStyle = linear(g, 0, 0, 0, h, [[0, '#a9dcff'], [1, '#8fcaf5']]);
    g.beginPath();
    g.moveTo(w * 0.28, h * 0.08);
    g.quadraticCurveTo(w * 0.5, -h * 0.02, w * 0.72, h * 0.08);
    g.quadraticCurveTo(w * 0.86, h * 0.5, w * 0.9, h);
    g.lineTo(w * 0.1, h);
    g.quadraticCurveTo(w * 0.14, h * 0.5, w * 0.28, h * 0.08);
    g.fill();
    // collar
    g.fillStyle = '#ffffff';
    for (const sx of [-1, 1]) {
      ellipse(g, w * (0.5 + sx * 0.09), h * 0.1, w * 0.11, h * 0.07, sx * 0.4);
      g.fill();
    }
    // buttons
    g.fillStyle = '#ffd77a';
    for (let i = 0; i < 2; i++) { circle(g, w * 0.5, h * (0.3 + i * 0.16), w * 0.018); g.fill(); }
    // arms
    g.fillStyle = '#9fd5fb';
    for (const sx of [-1, 1]) {
      g.beginPath();
      g.ellipse(w * (0.5 + sx * 0.3), h * 0.55, w * 0.09, h * 0.3, sx * -0.5, 0, Math.PI * 2);
      g.fill();
    }
    // paws
    g.fillStyle = '#fffaf6';
    for (const sx of [-1, 1]) { circle(g, w * (0.5 + sx * 0.36), h * 0.82, w * 0.07); g.fill(); }
    parts.body = c;
  }
  // head
  {
    const c = canvas(S, S * 0.8);
    const g = c.getContext('2d');
    const w = S, h = S * 0.8;
    g.fillStyle = radial(g, w * 0.46, h * 0.4, w * 0.05, w * 0.4, [[0, '#ffffff'], [1, '#f6ecea']]);
    ellipse(g, w * 0.5, h * 0.52, w * 0.36, h * 0.4);
    g.fill();
    g.fillStyle = 'rgba(255,140,170,0.5)';
    ellipse(g, w * 0.27, h * 0.66, w * 0.07, h * 0.045); g.fill();
    ellipse(g, w * 0.73, h * 0.66, w * 0.07, h * 0.045); g.fill();
    // nose + mouth
    g.fillStyle = '#ff9db6';
    ellipse(g, w * 0.5, h * 0.62, w * 0.03, h * 0.02); g.fill();
    g.strokeStyle = '#c47b8c';
    g.lineWidth = w * 0.012;
    g.lineCap = 'round';
    g.beginPath();
    g.moveTo(w * 0.5, h * 0.64);
    g.quadraticCurveTo(w * 0.47, h * 0.69, w * 0.44, h * 0.67);
    g.moveTo(w * 0.5, h * 0.64);
    g.quadraticCurveTo(w * 0.53, h * 0.69, w * 0.56, h * 0.67);
    g.stroke();
    parts.head = c;
  }
  // ear
  {
    const c = canvas(S * 0.3, S * 0.6);
    const g = c.getContext('2d');
    const w = S * 0.3, h = S * 0.6;
    g.fillStyle = '#fbf3f1';
    ellipse(g, w / 2, h / 2, w * 0.42, h * 0.48); g.fill();
    g.fillStyle = '#ffc1d2';
    ellipse(g, w / 2, h * 0.52, w * 0.2, h * 0.36); g.fill();
    parts.ear = c;
  }
  // ribbon on the ear
  {
    const c = canvas(S * 0.3, S * 0.2);
    const g = c.getContext('2d');
    const w = S * 0.3, h = S * 0.2;
    g.fillStyle = '#7cc8ff';
    ellipse(g, w * 0.28, h * 0.5, w * 0.24, h * 0.36, -0.3); g.fill();
    ellipse(g, w * 0.72, h * 0.5, w * 0.24, h * 0.36, 0.3); g.fill();
    g.fillStyle = '#5bb4f2';
    circle(g, w * 0.5, h * 0.5, h * 0.2); g.fill();
    parts.ribbon = c;
  }
  // eye (open)
  {
    const c = canvas(64, 80);
    const g = c.getContext('2d');
    g.fillStyle = '#2f2430';
    ellipse(g, 32, 40, 24, 32); g.fill();
    g.fillStyle = '#ffffff';
    circle(g, 23, 27, 9); g.fill();
    circle(g, 40, 52, 4); g.fill();
    parts.eye = c;
  }
  // eye (closed / happy arc)
  {
    const c = canvas(64, 80);
    const g = c.getContext('2d');
    g.strokeStyle = '#2f2430';
    g.lineWidth = 8;
    g.lineCap = 'round';
    g.beginPath();
    g.arc(32, 50, 20, Math.PI * 1.1, Math.PI * 1.9);
    g.stroke();
    parts.eyeClosed = c;
  }
  // heart particle
  {
    const c = canvas(64, 64);
    const g = c.getContext('2d');
    g.fillStyle = '#ff8fb5';
    heart(g, 32, 33, 54, 48);
    g.fill();
    g.fillStyle = 'rgba(255,255,255,0.7)';
    ellipse(g, 22, 22, 8, 5, -0.5);
    g.fill();
    parts.heart = c;
  }
  // cushion / chair seat seen behind the table
  {
    const c = canvas(S * 0.8, S * 0.4);
    const g = c.getContext('2d');
    const w = S * 0.8, h = S * 0.4;
    g.fillStyle = '#ffd9e5';
    rrect(g, w * 0.05, h * 0.1, w * 0.9, h * 0.8, h * 0.35);
    g.fill();
    g.fillStyle = 'rgba(255,255,255,0.6)';
    for (let i = 0; i < 5; i++) { circle(g, w * (0.18 + i * 0.16), h * 0.5, h * 0.06); g.fill(); }
    parts.cushion = c;
  }
  // empty heart window printed on the friend's page (dashed outline)
  {
    const c = canvas(256, 256);
    const g = c.getContext('2d');
    g.strokeStyle = 'rgba(255,255,255,0.95)';
    g.lineWidth = 9;
    g.setLineDash([18, 12]);
    g.lineCap = 'round';
    heart(g, 128, 134, 200, 180);
    g.stroke();
    g.fillStyle = 'rgba(255,200,220,0.25)';
    heart(g, 128, 134, 200, 180);
    g.fill();
    parts.heartWindow = c;
  }
  return parts;
}
