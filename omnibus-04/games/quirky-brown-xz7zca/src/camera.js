// Orthographic 2D camera. World: y up. Screen: CSS pixels, y down.
export class Camera {
  constructor() {
    this.x = 0;
    this.y = 300;
    this.zoom = 1;
    this.W = 390;
    this.H = 844;
    this.shake = 0;
    this.ox = 0;
    this.oy = 0;
  }
  resize(W, H) { this.W = W; this.H = H; }
  sx(wx) { return this.W / 2 + (wx - this.x) * this.zoom + this.ox; }
  sy(wy) { return this.H / 2 - (wy - this.y) * this.zoom + this.oy; }
  toWorld(sx, sy) {
    return [this.x + (sx - this.ox - this.W / 2) / this.zoom, this.y - (sy - this.oy - this.H / 2) / this.zoom];
  }
  // visible world rect
  get left() { return this.x - this.W / 2 / this.zoom; }
  get right() { return this.x + this.W / 2 / this.zoom; }
  get top() { return this.y + this.H / 2 / this.zoom; }
  get bottom() { return this.y - this.H / 2 / this.zoom; }
  // Apply world transform to a 2D context whose base transform is CSS px.
  apply(ctx, dpr) {
    ctx.setTransform(dpr * this.zoom, 0, 0, -dpr * this.zoom, dpr * (this.W / 2 - this.x * this.zoom + this.ox), dpr * (this.H / 2 + this.y * this.zoom + this.oy));
  }
}
