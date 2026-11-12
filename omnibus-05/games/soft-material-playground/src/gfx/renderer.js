// やわらかそざいあそび - WebGL2 renderer.
// Pass 1 splats particles into a half-res RGBA16F density/color field,
// pass 2 shades it into squishy material with per-material look uniforms.
// Falls back to GAME.Canvas2D when WebGL2 (or float render targets) is missing.
(function () {
  'use strict';
  const GAME = window.GAME;
  const U = GAME.U;

  const Renderer = {
    mode: 'none',      // 'gl2' | '2d'  (asserted by test/verify.mjs)
    canvas: null,
    gl: null,
    dpr: 1,
    cssW: 1, cssH: 1,
    scaleCss: 1,       // css px per world unit
    bgTint: [1.0, 0.92, 0.94],
  };

  let gl = null;
  let splatProg = null, surfProg = null;
  let splatVAO = null, surfVAO = null;
  let splatBuf = null;
  let splatData = null; // interleaved [x,y,r,g,b]
  let fieldTex = null, fieldFbo = null;
  let fieldW = 0, fieldH = 0;
  let uni = {};

  Renderer.init = function (canvas) {
    Renderer.canvas = canvas;
    try {
      gl = canvas.getContext('webgl2', {
        alpha: false, antialias: false, depth: false, stencil: false,
        powerPreference: 'high-performance',
      });
    } catch (e) { gl = null; }
    if (gl && !gl.getExtension('EXT_color_buffer_float')) {
      // Could implement an RGBA8 packed path; in practice every WebGL2
      // device (incl. iOS 15+) exposes this. Play safe: fall back.
      gl = null;
    }
    if (!gl) {
      Renderer.mode = '2d';
      GAME.Canvas2D.init(canvas);
      return;
    }
    Renderer.gl = gl;
    Renderer.mode = 'gl2';

    splatProg = GAME.Shaders.compile(gl, GAME.Shaders.splatVS, GAME.Shaders.splatFS, 'splat');
    surfProg = GAME.Shaders.compile(gl, GAME.Shaders.surfaceVS, GAME.Shaders.surfaceFS, 'surface');

    // splat VAO: dynamic interleaved buffer
    splatData = new Float32Array(GAME.Sim.cap * 5);
    splatVAO = gl.createVertexArray();
    gl.bindVertexArray(splatVAO);
    splatBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, splatBuf);
    gl.bufferData(gl.ARRAY_BUFFER, splatData.byteLength, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 20, 0);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 20, 8);

    // fullscreen triangle
    surfVAO = gl.createVertexArray();
    gl.bindVertexArray(surfVAO);
    const tri = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, tri);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);

    const su = (p, n) => gl.getUniformLocation(p, n);
    uni = {
      sWorld: su(splatProg, 'uWorld'),
      sPointSize: su(splatProg, 'uPointSize'),
      sAmp: su(splatProg, 'uAmp'),
      fField: su(surfProg, 'uField'),
      fRes: su(surfProg, 'uRes'),
      fPxPerWorld: su(surfProg, 'uPxPerWorld'),
      fTray: su(surfProg, 'uTray'),
      fTrayR: su(surfProg, 'uTrayR'),
      fLookA: su(surfProg, 'uLookA'),
      fLookB: su(surfProg, 'uLookB'),
      fBgTint: su(surfProg, 'uBgTint'),
      fTime: su(surfProg, 'uTime'),
    };

    canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); }, false);
    canvas.addEventListener('webglcontextrestored', () => {
      // Rebuild everything with the same public state.
      Renderer.init(canvas);
      Renderer.resize(Renderer.cssW, Renderer.cssH, Renderer.dpr);
    }, false);
  };

  Renderer.resize = function (cssW, cssH, dpr) {
    Renderer.cssW = cssW; Renderer.cssH = cssH;
    Renderer.dpr = dpr = Math.min(dpr || 1, 2);
    Renderer.scaleCss = Math.min(cssW, cssH);
    const canvas = Renderer.canvas;
    canvas.width = Math.max(2, Math.round(cssW * dpr));
    canvas.height = Math.max(2, Math.round(cssH * dpr));
    if (Renderer.mode === '2d') { GAME.Canvas2D.resize(); return; }

    fieldW = Math.max(2, canvas.width >> 1);
    fieldH = Math.max(2, canvas.height >> 1);
    if (fieldTex) { gl.deleteTexture(fieldTex); gl.deleteFramebuffer(fieldFbo); }
    fieldTex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, fieldTex);
    gl.texStorage2D(gl.TEXTURE_2D, 1, gl.RGBA16F, fieldW, fieldH);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    fieldFbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fieldFbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, fieldTex, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  };

  // world size shown on screen
  Renderer.worldW = function () { return Renderer.cssW / Renderer.scaleCss; };
  Renderer.worldH = function () { return Renderer.cssH / Renderer.scaleCss; };
  Renderer.toWorld = function (cssX, cssY) {
    return { x: cssX / Renderer.scaleCss, y: cssY / Renderer.scaleCss };
  };
  Renderer.toCss = function (wx, wy) {
    return { x: wx * Renderer.scaleCss, y: wy * Renderer.scaleCss };
  };

  Renderer.render = function (time) {
    const Sim = GAME.Sim;
    if (Renderer.mode === '2d') { GAME.Canvas2D.render(); return; }
    if (!gl || gl.isContextLost()) return;

    // ---- build splat buffer (material particles only) ----
    let m = 0;
    const n = Sim.n;
    for (let i = 0; i < n; i++) {
      if (Sim.pKind[i]) continue;
      const o = m * 5;
      splatData[o] = Sim.px[i];
      splatData[o + 1] = Sim.py[i];
      splatData[o + 2] = Sim.pr[i];
      splatData[o + 3] = Sim.pg[i];
      splatData[o + 4] = Sim.pb[i];
      m++;
    }

    const worldW = Renderer.worldW(), worldH = Renderer.worldH();
    const pxPerWorldField = fieldH / worldH;
    const splatRadiusWorld = Sim.dx * 2.4;
    const pointSize = U.clamp(splatRadiusWorld * 2 * pxPerWorldField, 2, 240);
    // amplitude tuned so blob interiors read ~2.0 (iso surface at 1.0)
    const amp = 0.10;

    // ---- pass 1: field ----
    gl.bindFramebuffer(gl.FRAMEBUFFER, fieldFbo);
    gl.viewport(0, 0, fieldW, fieldH);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    if (m > 0) {
      gl.useProgram(splatProg);
      gl.uniform2f(uni.sWorld, worldW, worldH);
      gl.uniform1f(uni.sPointSize, pointSize);
      gl.uniform1f(uni.sAmp, amp);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE);
      gl.bindVertexArray(splatVAO);
      gl.bindBuffer(gl.ARRAY_BUFFER, splatBuf);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, splatData, 0, m * 5);
      gl.drawArrays(gl.POINTS, 0, m);
      gl.disable(gl.BLEND);
    }

    // ---- pass 2: surface ----
    const canvas = Renderer.canvas;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.useProgram(surfProg);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, fieldTex);
    gl.uniform1i(uni.fField, 0);
    gl.uniform2f(uni.fRes, canvas.width, canvas.height);
    gl.uniform1f(uni.fPxPerWorld, canvas.height / worldH);
    const t = GAME.Colliders.tray;
    gl.uniform4f(uni.fTray, t.x0, t.y0, t.x1, t.y1);
    gl.uniform1f(uni.fTrayR, t.r);
    const look = Sim.material.look;
    gl.uniform4f(uni.fLookA, look.gloss, look.glossStr, look.sss, look.grain);
    gl.uniform4f(uni.fLookB, look.sparkle, look.edge, look.fresnel, look.bright);
    const bg = Renderer.bgTint;
    gl.uniform3f(uni.fBgTint, bg[0], bg[1], bg[2]);
    gl.uniform1f(uni.fTime, time);
    gl.bindVertexArray(surfVAO);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.bindVertexArray(null);
  };

  GAME.Renderer = Renderer;
})();
