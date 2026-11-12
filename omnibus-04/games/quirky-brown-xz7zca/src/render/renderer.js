import { drawSky, drawClouds, drawKeepsakes, drawFlotilla, drawPageTurn } from './sky.js';
import { drawHills, drawBackProps, drawQuiltTop, drawShadows, drawQuiltFront, drawFrontProps } from './land.js';
import { drawHouse, drawDepartingHouse } from './house-art.js';
import { drawStrings, drawBalloons, drawButtons } from './balloon-art.js';

// Layer order (back to front):
//   screen: sky, far keepsakes, clouds, felt hills
//   world:  quilt top (dented) with what stands on it (trees, peg, log, tub back),
//           shadows, houses, buttons+strings, balloons, quilt front face,
//           front props (tub front, grass), particles
//   screen: departing house (shrinking into the far sky), flotilla, page turn
export class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d', { alpha: false });
    this.W = 1; this.H = 1; this.dpr = 1;
    this.qualityCap = 2;
    this.frameMs = 8;
    this.slow = 0;
    this.onQualityDrop = null;
  }

  resize(W, H, dpr) {
    this.W = W; this.H = H; this.dpr = dpr;
    this.canvas.width = Math.round(W * dpr);
    this.canvas.height = Math.round(H * dpr);
    this.cacheKey = `${W}x${H}@${dpr}`;
  }

  draw(world, fx, dt) {
    const t0 = performance.now();
    const ctx = this.ctx;
    const cam = world.cam;
    const R = {
      ctx, W: this.W, H: this.H, dpr: this.dpr, cam, world, fx,
      t: world.time, zoom: cam.zoom, px: 1 / cam.zoom, cacheKey: this.cacheKey,
      screen: () => ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0),
      worldT: () => cam.apply(ctx, this.dpr),
    };

    R.screen();
    drawSky(R);
    drawKeepsakes(R);
    drawClouds(R);
    drawHills(R);

    R.worldT();
    drawBackProps(R);
    drawQuiltTop(R);
    drawShadows(R);
    fx.draw(R, 'back');
    for (const ent of world.houses) {
      if (ent.departing && world.depart && world.depart.ent === ent) continue;
      if (!this.visible(R, ent)) continue;
      drawHouse(R, ent);
      drawButtons(R, ent);
    }
    drawStrings(R);
    drawBalloons(R);
    drawQuiltFront(R);
    drawFrontProps(R);
    fx.draw(R, 'front');

    if (world.depart) {
      R.screen();
      drawDepartingHouse(R, world.depart);
    }
    R.screen();
    if (world.finale) drawFlotilla(R);
    if (world.page) drawPageTurn(R);

    // adaptive quality: step the pixel density down if frames get slow
    const ms = performance.now() - t0;
    this.frameMs += (ms - this.frameMs) * 0.05;
    if (this.frameMs > 12 && this.qualityCap > 1.25) {
      this.slow += dt;
      if (this.slow > 2) {
        this.qualityCap = this.qualityCap > 1.5 ? 1.5 : 1.25;
        this.slow = 0;
        this.frameMs = 8;
        if (this.onQualityDrop) this.onQualityDrop();
      }
    } else this.slow = 0;
  }

  visible(R, ent) {
    const cam = R.cam;
    const b = ent.body;
    const w = ent.bp.bounds.w;
    return b.x + w > cam.left - 400 && b.x - w < cam.right + 400;
  }
}
