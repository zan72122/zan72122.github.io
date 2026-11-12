// やわらかそざいあそび - GLSL ES 3.00 shader sources + compile helpers.
// Two passes: particle splats -> density/color field, then a fullscreen
// surface shader that turns the field into squishy shaded material.
(function () {
  'use strict';
  const GAME = window.GAME;

  const Shaders = {};

  Shaders.compile = function (gl, vsSrc, fsSrc, name) {
    function sh(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        throw new Error('[shader ' + name + '] ' + gl.getShaderInfoLog(s));
      }
      return s;
    }
    const p = gl.createProgram();
    gl.attachShader(p, sh(gl.VERTEX_SHADER, vsSrc));
    gl.attachShader(p, sh(gl.FRAGMENT_SHADER, fsSrc));
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
      throw new Error('[link ' + name + '] ' + gl.getProgramInfoLog(p));
    }
    return p;
  };

  // ---- pass 1: gaussian point splats --------------------------------------
  Shaders.splatVS = `#version 300 es
layout(location=0) in vec2 aPos;   // world units (y down)
layout(location=1) in vec3 aCol;
uniform vec2 uWorld;               // world size
uniform float uPointSize;          // in target pixels
out vec3 vCol;
void main() {
  vec2 clip = vec2(aPos.x / uWorld.x * 2.0 - 1.0,
                   1.0 - aPos.y / uWorld.y * 2.0);
  gl_Position = vec4(clip, 0.0, 1.0);
  gl_PointSize = uPointSize;
  vCol = aCol;
}`;

  Shaders.splatFS = `#version 300 es
precision mediump float;
in vec3 vCol;
uniform float uAmp;
out vec4 outColor;
void main() {
  vec2 d2 = gl_PointCoord - 0.5;
  float d = length(d2) * 2.0;
  float w = exp(-4.5 * d * d) * smoothstep(1.0, 0.8, d) * uAmp;
  outColor = vec4(vCol * w, w);
}`;

  // ---- pass 2: fullscreen surface shading ----------------------------------
  Shaders.surfaceVS = `#version 300 es
layout(location=0) in vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }`;

  Shaders.surfaceFS = `#version 300 es
precision highp float;
uniform sampler2D uField;
uniform vec2 uRes;          // canvas pixels
uniform float uPxPerWorld;  // canvas px per world unit
uniform vec4 uTray;         // x0, y0, x1, y1 (world, y down)
uniform float uTrayR;
uniform vec4 uLookA;        // gloss, glossStr, sss, grain
uniform vec4 uLookB;        // sparkle, edge, fresnel, bright
uniform vec3 uBgTint;       // pastel background tint
uniform float uTime;
out vec4 outColor;

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), f.x),
             mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), f.x), f.y);
}
float sdRoundRect(vec2 p, vec2 c, vec2 h, float r) {
  vec2 q = abs(p - c) - h + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  // world position (y down)
  vec2 wpos = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uPxPerWorld;

  vec4 field = texture(uField, uv);
  float dens = field.a;
  vec3 albedo = field.rgb / max(dens, 1e-4);

  // ---------- background: pastel table + play tray ----------
  vec2 trayC = 0.5 * (uTray.xy + uTray.zw);
  vec2 trayH = 0.5 * (uTray.zw - uTray.xy);
  float dTray = sdRoundRect(wpos, trayC, trayH, uTrayR);

  // table: soft vertical gradient + huge dots pattern
  vec3 table = mix(uBgTint * 1.06, uBgTint * 0.9, wpos.y / max(uTray.w, 1.0));
  float dots = smoothstep(0.16, 0.13, length(fract(wpos * 6.0) - 0.5));
  table += dots * 0.025;

  // tray: brighter inner area with a rim
  vec3 trayCol = mix(uBgTint * 1.16, vec3(1.0, 0.99, 0.96), 0.55);
  trayCol *= 1.0 - 0.05 * vnoise(wpos * 22.0);
  float inTray = smoothstep(0.004, -0.004, dTray);
  float rim = smoothstep(0.018, 0.0, abs(dTray)) * 0.14;
  vec3 bg = mix(table, trayCol, inTray) - rim * vec3(0.5, 0.35, 0.3);
  // tray inner shadow (top edge darker, like depth)
  bg *= 1.0 - 0.08 * inTray * smoothstep(0.06, 0.0, wpos.y - uTray.y);

  // ---------- material drop shadow on tray ----------
  vec2 shOff = vec2(-0.012, 0.02) * uPxPerWorld / uRes; // uv offset
  float shDens = texture(uField, uv + shOff).a;
  float shadow = smoothstep(0.5, 1.6, shDens);
  bg = mix(bg, bg * 0.8, shadow);

  // ---------- surface ----------
  float edge = uLookB.y;
  float alpha = smoothstep(1.0 - edge, 1.0 + edge, dens);

  // screen-space normal from density gradient (+ dome height)
  vec2 texel = 1.0 / vec2(textureSize(uField, 0));
  float dl = texture(uField, uv - vec2(texel.x, 0.0)).a;
  float dr = texture(uField, uv + vec2(texel.x, 0.0)).a;
  float db = texture(uField, uv - vec2(0.0, texel.y)).a;
  float dt = texture(uField, uv + vec2(0.0, texel.y)).a;
  vec2 grad = vec2(dr - dl, dt - db);
  float h = sqrt(clamp(dens * 0.5, 0.0, 1.0));
  vec3 N = normalize(vec3(-grad * (1.8 + 1.4 * h), 0.55 + 0.45 * h));

  // light from upper-left (GL y up)
  vec3 L = normalize(vec3(-0.4, 0.6, 0.72));
  vec3 V = vec3(0.0, 0.0, 1.0);
  vec3 H = normalize(L + V);
  float diff = clamp(dot(N, L), 0.0, 1.0);
  float ndh = clamp(dot(N, H), 0.0, 1.0);

  // grain (clay/dough/sand tooth)
  float grain = uLookA.w;
  if (grain > 0.0) {
    float g = vnoise(wpos * 160.0) * 0.6 + vnoise(wpos * 55.0) * 0.4;
    albedo *= 1.0 - grain * (g - 0.5) * 0.42;
    N = normalize(N + vec3((g - 0.5) * grain * 0.35));
  }

  float spec = pow(ndh, uLookA.x) * uLookA.y;

  // sparkle glints (snow / magic sand)
  float sparkle = uLookB.x;
  if (sparkle > 0.0) {
    float cell = hash12(floor(wpos * 220.0));
    float tw = 0.5 + 0.5 * sin(uTime * 3.0 + cell * 40.0);
    spec += sparkle * step(0.975, cell) * tw * (0.4 + 0.6 * diff);
  }

  // subsurface glow at thin parts (jelly / mochi / marshmallow)
  float thin = 1.0 - smoothstep(0.9, 2.3, dens);
  vec3 sss = albedo * uLookA.z * thin * 0.85;

  // fresnel rim with a pastel sky tint (wet look)
  float fres = pow(1.0 - N.z, 2.4) * uLookB.z;
  vec3 skyTint = vec3(0.82, 0.92, 1.0);

  vec3 col = albedo * (0.62 + 0.42 * diff) * uLookB.w;
  col += spec * vec3(1.0);
  col += fres * skyTint;
  col += sss;
  // contact darkening at the very bottom edge of the blob
  float under = clamp(-grad.y, 0.0, 1.0) * (1.0 - h) * 0.25;
  col *= 1.0 - under;

  outColor = vec4(mix(bg, col, alpha), 1.0);
}`;

  GAME.Shaders = Shaders;
})();
