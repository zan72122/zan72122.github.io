// Renderer: owns programs, the HDR scene framebuffer, backdrop copies for refraction and
// per-frame lighting/camera uniforms. World units are CSS pixels.
import { gl, initGL, Program, Texture, FBO, GridMesh, blend } from '../core/gl.js';
import * as SH from './shaders.js';
import { ident } from '../core/mat4.js';

const LIT_PROGS = ['sticker', 'film', 'paint', 'puddle'];

export class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    if (!initGL(canvas)) throw new Error('webgl2');
    this.gl = gl;
    const vs = SH.COMMON + SH.LIGHT + SH.OBJ_VS;
    const vsShadow = SH.COMMON.replace('#version 300 es', '#version 300 es\n#define SHADOW') + SH.LIGHT + SH.OBJ_VS;
    const vsCaus = SH.COMMON.replace('#version 300 es', '#version 300 es\n#define CAUSTIC') + SH.LIGHT + SH.OBJ_VS;
    this.progs = {
      sticker: new Program(vs, SH.COMMON + SH.LIGHT + SH.STICKER_FS, 'sticker'),
      shadow: new Program(vsShadow, SH.COMMON + SH.SHADOW_FS, 'shadow'),
      caustic: new Program(vsCaus, SH.COMMON + SH.CAUSTIC_FS, 'caustic'),
      film: new Program(vs, SH.COMMON + SH.LIGHT + SH.FILM_FS, 'film'),
      paint: new Program(vs, SH.COMMON + SH.LIGHT + SH.PAINT_FS, 'paint'),
      incl: new Program(SH.INCL_VS, SH.INCL_FS, 'incl'),
      blit: new Program(SH.FS_VS, SH.BLIT_FS, 'blit'),
      puddle: new Program(vs, SH.COMMON + SH.LIGHT + SH.PUDDLE_FS, 'puddle'),
    };
    this.meshLo = new GridMesh(10);
    this.meshHi = new GridMesh(34);
    this.meshQuad = new GridMesh(1);
    this.meshStrip = new GridMesh(24, 4);
    const one = (r, g, b, a) => new Texture(1, 1, { data: new Uint8Array([r, g, b, a]) });
    this.tex = {
      flatNorm: one(128, 128, 0, 255),
      white: one(255, 255, 255, 255),
      matDefault: one(0, 0, 0, 255),
      empty: one(0, 0, 0, 0),
      nap: one(128, 255, 0, 255),
      deform: new Texture(1, 1, { internal: gl.R16F, format: gl.RED, type: gl.FLOAT, data: new Float32Array([0]) }),
    };
    this.ident = ident();
    this.frame = 0;
    this.progFrame = {};
    this.cam = [0, 0, 1500];
    this.light = null;
    this.time = 0;
    this.hdr = true;
    this.chainFlat = new Float32Array(100);
  }

  resize(cssW, cssH, dpr) {
    this.cssW = cssW;
    this.cssH = cssH;
    this.dpr = dpr;
    const w = Math.max(1, Math.round(cssW * dpr));
    const h = Math.max(1, Math.round(cssH * dpr));
    this.canvas.width = w;
    this.canvas.height = h;
    this.pw = w;
    this.ph = h;
    if (this.scene) this.scene.dispose();
    if (this.back) this.back.dispose();
    const tryMake = (internal, type) => {
      const f = new FBO(w, h, { internal, format: gl.RGBA, type, depth: true });
      gl.bindFramebuffer(gl.FRAMEBUFFER, f.fb);
      const ok = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      if (!ok) f.dispose();
      return ok ? f : null;
    };
    this.scene = this.hdr ? tryMake(gl.RGBA16F, gl.HALF_FLOAT) : null;
    if (!this.scene) {
      this.hdr = false;
      this.scene = tryMake(gl.RGBA8, gl.UNSIGNED_BYTE);
    }
    const bw = Math.max(1, Math.round(w / 2)), bh = Math.max(1, Math.round(h / 2));
    this.back = new FBO(bw, bh, { internal: this.hdr ? gl.RGBA16F : gl.RGBA8, format: gl.RGBA, type: this.hdr ? gl.HALF_FLOAT : gl.UNSIGNED_BYTE });
  }

  begin(clearCol = [0.95, 0.9, 0.9]) {
    this.frame++;
    this.scene.bind();
    gl.disable(gl.DEPTH_TEST);
    gl.depthMask(true);
    gl.clearColor(clearCol[0], clearCol[1], clearCol[2], 1);
    gl.clearDepth(1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    blend('alpha');
  }

  setCamera(cx, cy, D) {
    this.cam = [cx, cy, D];
    this.frame++; // force uniform refresh
  }

  // Copy the current scene into the half-res backdrop texture (for refraction).
  captureBackdrop() {
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, this.scene.fb);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, this.back.fb);
    gl.blitFramebuffer(0, 0, this.pw, this.ph, 0, 0, this.back.w, this.back.h, gl.COLOR_BUFFER_BIT, gl.LINEAR);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.scene.fb);
    gl.viewport(0, 0, this.pw, this.ph);
  }

  clearDepth() {
    gl.clear(gl.DEPTH_BUFFER_BIT);
  }

  // per-frame uniforms
  prep(name) {
    const p = this.progs[name];
    p.use();
    if (this.progFrame[name] === this.frame) return p;
    this.progFrame[name] = this.frame;
    p.set('uCam', this.cam);
    p.set('uView', [this.cssW, this.cssH]);
    p.set('uTime', this.time);
    if (LIT_PROGS.includes(name) && this.light) {
      const L = this.light;
      p.set('uLight', L.dir);
      p.set('uLightCol', L.col);
      p.set('uAmb', L.amb);
      p.set('uWallCol', L.wall);
      p.set('uFloorCol', L.floor);
      p.set('uCeilCol', L.ceil);
      p.set('uSkyTop', L.skyTop);
      p.set('uSkyBot', L.skyBot);
      p.set('uWinDir', L.winDir);
      p.set('uWinSize', L.winSize);
      p.set('uWinBright', L.winBright);
      p.set('uSun', L.sun);
      p.set('uCamPos', this.cam);
    }
    if (name === 'sticker' || name === 'film') {
      p.set('uFB', [1 / this.pw, 1 / this.ph]);
      p.set('uDpr', this.dpr);
      p.set('uBackdrop', this.back.tex);
    }
    return p;
  }

  // Common geometry uniforms for OBJ_VS
  _geom(p, it) {
    p.set('uModel', it.model || this.ident);
    p.set('uXform', [it.x || 0, it.y || 0, it.rot || 0, 0]);
    const sz = it.size;
    p.set('uSize', Array.isArray(sz) ? sz : [sz, sz]);
    p.set('uDome', it.dome || 0);
    p.set('uNorm', it.norm || (it.design && it.design.tex.norm) || this.tex.flatNorm);
    if (it.deform) {
      p.set('uDeform', it.deform);
      p.set('uDeformOn', 1);
    } else {
      p.set('uDeform', this.tex.deform);
      p.set('uDeformOn', 0);
    }
    if (it.peel) {
      const pe = it.peel;
      p.set('uPeelA', [pe.fx, pe.fy, pe.nx, pe.ny]);
      p.set('uPeelB', [pe.R, pe.theta, 1, it.pass || 0]);
    } else {
      p.set('uPeelA', [0, 0, 1, 0]);
      p.set('uPeelB', [1, 0, 0, 0]);
    }
    p.set('uLift', it.lift || 0);
    p.set('uSway', it.sway ? [it.sway[0], it.sway[1], 0] : [0, 0, 0]);
    if (it.chain) {
      p.set('uChainOn', 1);
      p.set('uChain', it.chain);
      p.set('uPage', it.page);
    } else {
      p.set('uChainOn', 0);
    }
    p.set('uDepth', it.depth || 0);
    p.set('uDepthScale', it.depthScale || 0);
    p.set('uShadowZ', it.shadowZ || 0);
    p.set('uLightS', it.lightS || (this.light ? this.light.dir : [0, 0, 1]));
  }

  drawSticker(it) {
    const p = this.prep('sticker');
    this._geom(p, it);
    const d = it.design;
    p.set('uArt', it.art || d.tex.art);
    p.set('uMatTex', d ? d.tex.mat : this.tex.matDefault);
    p.set('uMat', it.mat ?? d.mat);
    p.set('uTint', it.tint || (d.def.tint || [1, 1, 1]));
    p.set('uParam', it.param || d.def.param || [0.6, 0.05, 1.0, 1.0]);
    p.set('uAlpha', it.alpha ?? 1);
    p.set('uBright', it.bright || 0);
    p.set('uFurScale', 220);
    p.set('uDebug', this.debug || 0);
    p.set('uUnitPx', it.unitPx || 1);
    if (it.incl) {
      p.set('uIncl', it.incl);
      p.set('uInclOn', 1);
    } else {
      p.set('uIncl', this.tex.empty);
      p.set('uInclOn', 0);
    }
    p.set('uNap', it.nap || this.tex.nap);
    const mesh = it.peel || it.chain || it.hi ? this.meshHi : this.meshLo;
    if (it.peel) {
      // draw lower part first, then the curl/flap above it
      it.pass = 1;
      p.set('uPeelB', [it.peel.R, it.peel.theta, 1, 1]);
      mesh.draw();
      p.set('uPeelB', [it.peel.R, it.peel.theta, 1, 2]);
      mesh.draw();
      it.pass = 0;
    } else {
      mesh.draw();
    }
  }

  drawShadow(it, amt = 0.5, tint = [0.42, 0.36, 0.48], blur = 1.2, blurPerH = 0.06, expand = 1.25) {
    const p = this.prep('shadow');
    this._geom(p, it);
    p.set('uArt', it.art || it.design.tex.art);
    p.set('uBlur', blur);
    p.set('uBlurPerH', blurPerH);
    p.set('uShadowAmt', amt);
    p.set('uShadowTint', tint);
    p.set('uExpand', expand);
    const mesh = it.peel || it.chain ? this.meshHi : this.meshLo;
    blend('mul');
    mesh.draw();
    blend('alpha');
  }

  drawCaustic(it, amt, depthUnits, pxPerUnit) {
    const p = this.prep('caustic');
    this._geom(p, it);
    p.set('uArt', it.art || it.design.tex.art);
    p.set('uCausAmt', amt);
    p.set('uCausDepth', depthUnits);
    p.set('uPxScale', pxPerUnit);
    p.set('uLightCol', this.light.col);
    const etas = [1.42, 1.5, 1.6];
    const chans = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.DST_COLOR, gl.ONE);
    for (let k = 0; k < 3; k++) {
      p.set('uEta', etas[k]);
      p.set('uChan', chans[k]);
      this.meshHi.draw();
    }
    blend('alpha');
  }

  // Rainbow light thrown by a clear sticker onto the surface it sits on. Lsurf is the light
  // direction in that surface's space; the streak falls on the side away from the light and
  // stretches as the light gets lower, so tilting moves it continuously.
  drawRainbow(it, Lsurf, strength, tex) {
    const lx = Lsurf[0], ly = Lsurf[1], lz = Math.max(Lsurf[2], 0.08);
    const lxy = Math.hypot(lx, ly);
    if (lxy < 1e-3 || strength <= 0.01) return;
    const dx = -lx / lxy, dy = -ly / lxy;
    const S = Array.isArray(it.size) ? it.size[0] : it.size;
    const reach = Math.min(S * 2.2, (it.dome || S * 0.15) * (lxy / lz) * 3.2 + S * 0.25);
    const grazeK = Math.min(1, lxy / lz / 2.5);
    const st = S * 0.38;
    const len = reach;
    const cx = it.x + dx * (st + len * 0.5), cy = it.y + dy * (st + len * 0.5);
    const p = this.prep('paint');
    const lift = it.lift || 0;
    this._geom(p, { model: it.model, x: cx, y: cy, rot: Math.atan2(dy, dx), size: [len, S * (0.3 + grazeK * 0.25)], lift, chain: it.chain, page: it.page });
    p.set('uArt', tex);
    p.set('uAlpha', 1);
    p.set('uLit', -3);
    const k = strength * (0.3 + grazeK * 0.55);
    const L = this.light ? this.light.col : [1, 1, 1];
    const lm = Math.max(L[0], L[1], L[2]);
    p.set('uMulCol', [(0.5 + 0.5 * L[0] / lm) * k, (0.5 + 0.5 * L[1] / lm) * k, (0.5 + 0.5 * L[2] / lm) * k]);
    p.set('uUVRect', [0, 0, 1, 1]);
    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_COLOR);
    (it.chain ? this.meshStrip : this.meshQuad).draw();
    blend('alpha');
  }

  drawFilm(it) {
    const p = this.prep('film');
    this._geom(p, it);
    p.set('uArt', it.art || this.tex.empty);
    p.set('uHaze', it.haze ?? 0.03);
    p.set('uAlpha', it.alpha ?? 1);
    p.set('uEdgeBoost', it.edgeBoost ?? 1);
    blend('premul');
    (it.chain ? this.meshStrip : this.meshQuad).draw();
    blend('alpha');
  }

  drawPaint(it) {
    const p = this.prep('paint');
    this._geom(p, it);
    p.set('uArt', it.art);
    p.set('uAlpha', it.alpha ?? 1);
    p.set('uLit', it.lit ?? 0);
    p.set('uMulCol', it.mul || [1, 1, 1]);
    p.set('uUVRect', it.uvRect || [0, 0, 1, 1]);
    (it.chain ? this.meshStrip : this.meshQuad).draw();
  }

  drawPuddles(it) {
    const p = this.prep('puddle');
    this._geom(p, it);
    p.set('uArt', it.art);
    p.set('uMask', it.mask);
    p.set('uRipples', it.ripples);
    p.set('uGround', it.ground);
    p.set('uAspect', it.aspect);
    this.meshQuad.draw();
  }

  end(grade = [1, 1, 1], fade = 0, fadeCol = [1, 1, 1], vignette = 0.35) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, this.pw, this.ph);
    gl.disable(gl.DEPTH_TEST);
    blend('none');
    const p = this.progs.blit.use();
    p.set('uTex', this.scene.tex);
    p.set('uVignette', vignette);
    p.set('uGrade', grade);
    p.set('uFade', fade);
    p.set('uFadeCol', fadeCol);
    this.meshQuad.draw();
    blend('alpha');
  }
}
