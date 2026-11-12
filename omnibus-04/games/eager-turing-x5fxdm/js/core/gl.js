// Thin WebGL2 helpers: programs with uniform caching, textures, framebuffers, meshes.

export let gl = null;

export function initGL(canvas) {
  gl = canvas.getContext('webgl2', {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    premultipliedAlpha: false,
    preserveDrawingBuffer: false,
    powerPreference: 'high-performance',
  });
  if (!gl) return null;
  gl.getExtension('EXT_color_buffer_float');
  gl.getExtension('EXT_color_buffer_half_float');
  gl.getExtension('OES_texture_float_linear');
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
  gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
  return gl;
}

function compile(type, src, name) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(s);
    const lines = src.split('\n').map((l, i) => `${i + 1}: ${l}`);
    const m = /ERROR: \d+:(\d+)/.exec(log || '');
    let ctx = '';
    if (m) {
      const ln = +m[1];
      ctx = lines.slice(Math.max(0, ln - 4), ln + 2).join('\n');
    }
    console.error(`Shader compile error (${name}):\n${log}\n${ctx}`);
    throw new Error('shader compile failed: ' + name);
  }
  return s;
}

export class Program {
  constructor(vs, fs, name = 'prog') {
    this.name = name;
    const p = gl.createProgram();
    gl.attachShader(p, compile(gl.VERTEX_SHADER, vs, name + '.vs'));
    gl.attachShader(p, compile(gl.FRAGMENT_SHADER, fs, name + '.fs'));
    gl.bindAttribLocation(p, 0, 'aUV');
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
      console.error('Link error', name, gl.getProgramInfoLog(p));
      throw new Error('link failed: ' + name);
    }
    this.p = p;
    this.u = {};
    this.texUnits = {};
    let unit = 0;
    const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
    gl.useProgram(p);
    for (let i = 0; i < n; i++) {
      const info = gl.getActiveUniform(p, i);
      const nm = info.name.replace(/\[0\]$/, '');
      const loc = gl.getUniformLocation(p, info.name);
      const entry = { loc, type: info.type, size: info.size };
      if (info.type === gl.SAMPLER_2D) {
        entry.unit = unit;
        gl.uniform1i(loc, unit);
        unit++;
      }
      this.u[nm] = entry;
    }
  }
  use() {
    gl.useProgram(this.p);
    return this;
  }
  has(name) {
    return !!this.u[name];
  }
  set(name, v) {
    const e = this.u[name];
    if (!e) return this;
    const l = e.loc;
    switch (e.type) {
      case gl.FLOAT:
        if (e.size > 1) gl.uniform1fv(l, v);
        else gl.uniform1f(l, v);
        break;
      case gl.FLOAT_VEC2:
        gl.uniform2fv(l, v);
        break;
      case gl.FLOAT_VEC3:
        gl.uniform3fv(l, v);
        break;
      case gl.FLOAT_VEC4:
        gl.uniform4fv(l, v);
        break;
      case gl.INT:
      case gl.BOOL:
        if (e.size > 1) gl.uniform1iv(l, v);
        else gl.uniform1i(l, v);
        break;
      case gl.FLOAT_MAT4:
        gl.uniformMatrix4fv(l, false, v);
        break;
      case gl.FLOAT_MAT3:
        gl.uniformMatrix3fv(l, false, v);
        break;
      case gl.SAMPLER_2D:
        gl.activeTexture(gl.TEXTURE0 + e.unit);
        gl.bindTexture(gl.TEXTURE_2D, v && v.tex ? v.tex : v);
        break;
      default:
        break;
    }
    return this;
  }
}

export class Texture {
  constructor(w, h, opts = {}) {
    this.w = w;
    this.h = h;
    this.tex = gl.createTexture();
    this.internal = opts.internal || gl.RGBA8;
    this.format = opts.format || gl.RGBA;
    this.type = opts.type || gl.UNSIGNED_BYTE;
    this.mip = !!opts.mip;
    gl.bindTexture(gl.TEXTURE_2D, this.tex);
    const wrap = opts.wrap || gl.CLAMP_TO_EDGE;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);
    const filt = opts.nearest ? gl.NEAREST : gl.LINEAR;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.mip ? gl.LINEAR_MIPMAP_LINEAR : filt);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filt);
    if (opts.source) {
      gl.texImage2D(gl.TEXTURE_2D, 0, this.internal, this.format, this.type, opts.source);
    } else {
      gl.texImage2D(gl.TEXTURE_2D, 0, this.internal, w, h, 0, this.format, this.type, opts.data || null);
    }
    if (this.mip) gl.generateMipmap(gl.TEXTURE_2D);
  }
  static fromCanvas(canvas, opts = {}) {
    return new Texture(canvas.width, canvas.height, { ...opts, source: canvas });
  }
  update(data, w = this.w, h = this.h) {
    gl.bindTexture(gl.TEXTURE_2D, this.tex);
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, w, h, this.format, this.type, data);
    if (this.mip) gl.generateMipmap(gl.TEXTURE_2D);
  }
  updateCanvas(canvas) {
    gl.bindTexture(gl.TEXTURE_2D, this.tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, this.internal, this.format, this.type, canvas);
    if (this.mip) gl.generateMipmap(gl.TEXTURE_2D);
  }
  dispose() {
    gl.deleteTexture(this.tex);
  }
}

export class FBO {
  constructor(w, h, opts = {}) {
    this.w = w;
    this.h = h;
    this.tex = new Texture(w, h, opts);
    this.fb = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.fb);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.tex.tex, 0);
    if (opts.depth) {
      this.depth = gl.createRenderbuffer();
      gl.bindRenderbuffer(gl.RENDERBUFFER, this.depth);
      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, w, h);
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depth);
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }
  bind() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.fb);
    gl.viewport(0, 0, this.w, this.h);
  }
  dispose() {
    gl.deleteFramebuffer(this.fb);
    this.tex.dispose();
    if (this.depth) gl.deleteRenderbuffer(this.depth);
  }
}

// Grid mesh over uv [0,1]^2 with nx*ny cells.
export class GridMesh {
  constructor(nx, ny = nx) {
    const verts = new Float32Array((nx + 1) * (ny + 1) * 2);
    let k = 0;
    for (let j = 0; j <= ny; j++) {
      for (let i = 0; i <= nx; i++) {
        verts[k++] = i / nx;
        verts[k++] = j / ny;
      }
    }
    const idx = new Uint16Array(nx * ny * 6);
    k = 0;
    for (let j = 0; j < ny; j++) {
      for (let i = 0; i < nx; i++) {
        const a = j * (nx + 1) + i;
        const b = a + 1;
        const c = a + nx + 1;
        const d = c + 1;
        idx[k++] = a; idx[k++] = c; idx[k++] = b;
        idx[k++] = b; idx[k++] = c; idx[k++] = d;
      }
    }
    this.count = idx.length;
    this.vao = gl.createVertexArray();
    gl.bindVertexArray(this.vao);
    const vb = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vb);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    const ib = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ib);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idx, gl.STATIC_DRAW);
    gl.bindVertexArray(null);
  }
  draw() {
    gl.bindVertexArray(this.vao);
    gl.drawElements(gl.TRIANGLES, this.count, gl.UNSIGNED_SHORT, 0);
  }
}

// Point list mesh (dynamic) for particle sprites.
export class PointMesh {
  constructor(maxPoints, stride) {
    this.stride = stride; // floats per point
    this.max = maxPoints;
    this.data = new Float32Array(maxPoints * stride);
    this.vao = gl.createVertexArray();
    gl.bindVertexArray(this.vao);
    this.vb = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vb);
    gl.bufferData(gl.ARRAY_BUFFER, this.data.byteLength, gl.DYNAMIC_DRAW);
    let off = 0;
    let loc = 0;
    let rem = stride;
    while (rem > 0) {
      const n = Math.min(4, rem);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, n, gl.FLOAT, false, stride * 4, off * 4);
      off += n;
      rem -= n;
      loc++;
    }
    gl.bindVertexArray(null);
    this.count = 0;
  }
  upload(count) {
    this.count = count;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vb);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.data, 0, count * this.stride);
  }
  draw() {
    if (!this.count) return;
    gl.bindVertexArray(this.vao);
    gl.drawArrays(gl.POINTS, 0, this.count);
  }
}

export function blend(mode) {
  if (mode === 'none') {
    gl.disable(gl.BLEND);
    return;
  }
  gl.enable(gl.BLEND);
  if (mode === 'alpha') gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  else if (mode === 'premul') gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  else if (mode === 'add') gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
  else if (mode === 'addone') gl.blendFunc(gl.ONE, gl.ONE);
  else if (mode === 'mul') gl.blendFunc(gl.ZERO, gl.SRC_COLOR);
}
