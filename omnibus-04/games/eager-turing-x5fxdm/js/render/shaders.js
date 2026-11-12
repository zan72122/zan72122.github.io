// GLSL sources. One generic "surface object" vertex shader drives stickers, props and
// page films: sticker-local geometry -> peel curl -> sway -> placement on a surface ->
// optional page-chain bend -> surface model matrix -> perspective camera.

export const COMMON = /* glsl */ `#version 300 es
precision highp float;
precision highp int;
#define PI 3.14159265
uniform vec3 uCam;      // camera center x,y and distance D (css px)
uniform vec2 uView;     // viewport (css px)
vec4 project(vec3 p, float depth) {
  float w = max((uCam.z - p.z) / uCam.z, 0.05);
  vec2 c = ((uCam.xy - uView * 0.5) * w + (p.xy - uCam.xy)) / (uView * 0.5);
  return vec4(c.x, -c.y, depth * w, w);
}
`;

// Lighting environment shared by every lit fragment shader.
export const LIGHT = /* glsl */ `
uniform vec3 uLight;      // direction toward light (world; x right, y down, z toward viewer)
uniform vec3 uLightCol;
uniform vec3 uAmb;
uniform vec3 uWallCol;
uniform vec3 uFloorCol;
uniform vec3 uCeilCol;
uniform vec3 uSkyTop;
uniform vec3 uSkyBot;
uniform vec3 uWinDir;
uniform vec2 uWinSize;
uniform float uWinBright;
uniform float uSun;       // 0..1 sun disc visibility (sunset)
uniform vec3 uCamPos;     // camera world position
uniform float uTime;

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash12(i), b = hash12(i + vec2(1, 0)), c = hash12(i + vec2(0, 1)), d = hash12(i + vec2(1, 1));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec3 envMap(vec3 R) {
  float up = R.z;
  vec3 c = mix(mix(uFloorCol, uWallCol, 0.55), uWallCol, smoothstep(-0.35, 0.25, up));
  c = mix(c, uCeilCol, smoothstep(0.45, 0.98, up));
  // warm ceiling lamps
  vec3 l1 = normalize(vec3(-0.32, 0.18, 0.93));
  vec3 l2 = normalize(vec3(0.22, 0.36, 0.9));
  c += vec3(1.0, 0.86, 0.62) * (smoothstep(0.9975, 0.9992, dot(R, l1)) + smoothstep(0.9975, 0.9992, dot(R, l2))) * 1.6;
  // window on the wall in the light direction
  vec3 wz = uWinDir;
  vec3 wx = cross(vec3(0.0, 0.0, 1.0), wz);
  wx = length(wx) < 1e-3 ? vec3(1.0, 0.0, 0.0) : normalize(wx);
  vec3 wy = cross(wz, wx);
  float cz = dot(R, wz);
  if (cz > 0.05) {
    vec2 a = vec2(dot(R, wx), dot(R, wy)) / cz;
    vec2 q = abs(a) - uWinSize;
    float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - 0.05;
    float inside = 1.0 - smoothstep(-0.015, 0.02, d);
    float mull = 1.0 - smoothstep(0.016, 0.034, min(abs(a.x), abs(a.y)));
    vec3 sky = mix(uSkyBot, uSkyTop, clamp(a.y / uWinSize.y * 0.5 + 0.5, 0.0, 1.0));
    float sun = smoothstep(0.11, 0.06, length(a - vec2(0.0, -0.08))) * uSun;
    sky += vec3(1.0, 0.85, 0.55) * sun * 3.0;
    vec3 frame = vec3(1.0, 0.82, 0.86) * 0.9; // sakura window frame
    c = mix(c, mix(sky * uWinBright, frame, mull * 0.9), inside);
    c = mix(c, frame, (1.0 - inside) * (1.0 - smoothstep(0.0, 0.05, d)) * 0.8);
  }
  return c;
}

float fresnel(float ndv, float f0) {
  return f0 + (1.0 - f0) * pow(1.0 - clamp(ndv, 0.0, 1.0), 5.0);
}

vec3 holo4(float t) {
  vec3 c0 = vec3(1.0, 0.52, 0.80);  // pink
  vec3 c1 = vec3(0.45, 0.88, 1.0);  // aqua
  vec3 c2 = vec3(0.68, 0.52, 1.0);  // purple
  vec3 c3 = vec3(1.0, 0.84, 0.42);  // gold
  t = fract(t) * 4.0;
  float f = fract(t);
  f = f * f * (3.0 - 2.0 * f);
  if (t < 1.0) return mix(c0, c1, f);
  if (t < 2.0) return mix(c1, c2, f);
  if (t < 3.0) return mix(c2, c3, f);
  return mix(c3, c0, f);
}

vec3 spectrum(float t) {
  t = clamp(t, 0.0, 1.0);
  return clamp(vec3(
    smoothstep(0.45, 0.75, t) + smoothstep(0.2, 0.0, t) * 0.6,
    smoothstep(0.15, 0.45, t) * smoothstep(0.95, 0.6, t),
    smoothstep(0.55, 0.25, t)
  ), 0.0, 1.0);
}
`;

export const OBJ_VS = /* glsl */ `
layout(location = 0) in vec2 aUV;
uniform mat4 uModel;       // surface -> world
uniform vec4 uXform;       // x, y, rot, unused (surface units)
uniform vec2 uSize;        // object size (surface units)
uniform float uDome;       // dome height (surface units)
uniform sampler2D uNorm;   // rg normal, b height
uniform sampler2D uDeform; // r = dz (in dome units)
uniform float uDeformOn;
uniform vec4 uPeelA;       // fold point (local), outward normal n
uniform vec4 uPeelB;       // R, theta, active, pass
uniform float uLift;
uniform vec3 uSway;        // rot about x, rot about y, unused
uniform float uChainOn;
uniform vec4 uChain[25];
uniform vec2 uPage;
uniform float uShadowZ;
uniform vec3 uLightS;      // light dir in surface space
uniform float uExpand;
uniform float uDepth;
uniform float uDepthScale;
uniform float uCausDepth;
uniform float uEta;

out vec2 vUV;
out vec3 vPos;
out vec3 vT;
out vec3 vB;
out vec3 vN;
out float vS;
out float vH;
out vec2 vOrig;

vec3 peelWarp(vec2 p, out float s) {
  s = -1e4;
  if (uPeelB.z < 0.5) return vec3(p, 0.0);
  vec2 n = uPeelA.zw;
  s = dot(p - uPeelA.xy, n);
  if (s <= 0.0) return vec3(p, 0.0);
  float R = uPeelB.x, th = uPeelB.y;
  vec2 base = p - s * n;
  float arc = R * th;
  if (s < arc) {
    float a = s / R;
    return vec3(base + n * R * sin(a), R * (1.0 - cos(a)));
  }
  float t = s - arc;
  return vec3(base + n * (R * sin(th) + t * cos(th)), R * (1.0 - cos(th)) + t * sin(th));
}

vec3 chainWarp(vec3 r) {
  float f = clamp(r.x / uPage.x, 0.0, 1.0) * 24.0;
  int i = int(min(floor(f), 23.0));
  float t = f - float(i);
  vec4 c = mix(uChain[i], uChain[i + 1], t);
  vec2 nrm = normalize(c.zw);
  vec2 tang = vec2(nrm.y, -nrm.x);
  float extra = r.x - clamp(r.x, 0.0, uPage.x);
  return vec3(c.x + tang.x * extra + nrm.x * r.z, r.y, c.y + tang.y * extra + nrm.y * r.z);
}

vec3 placeSurf(vec2 uv, out float s) {
  vec2 p = (uv - 0.5) * uSize;
  vec3 q = peelWarp(p, s);
  float cx = cos(uSway.x), sx = sin(uSway.x);
  q = vec3(q.x, q.y * cx - q.z * sx, q.y * sx + q.z * cx);
  float cy = cos(uSway.y), sy = sin(uSway.y);
  q = vec3(q.x * cy + q.z * sy, q.y, -q.x * sy + q.z * cy);
  float c = cos(uXform.z), sn = sin(uXform.z);
  vec3 r = vec3(c * q.x - sn * q.y + uXform.x, sn * q.x + c * q.y + uXform.y, q.z + uLift);
  if (uChainOn > 0.5) r = chainWarp(r);
  return r;
}

void main() {
  vec2 uv = aUV;
#ifdef SHADOW
  uv = (uv - 0.5) * uExpand + 0.5;
#endif
  vUV = uv;
  float s, s1, s2;
  vec3 P = placeSurf(uv, s);
  float e = 1.0 / 64.0;
  vec3 Pu = placeSurf(uv + vec2(e, 0.0), s1);
  vec3 Pv = placeSurf(uv + vec2(0.0, e), s2);
  vec3 T = normalize(Pu - P);
  vec3 B = normalize(Pv - P);
  vec3 N = normalize(cross(T, B));
  vS = s;
  vec4 nt = textureLod(uNorm, clamp(uv, 0.0, 1.0), 0.0);
  float h = nt.b;
  float dz = 0.0;
  if (uDeformOn > 0.5) dz = textureLod(uDeform, clamp(uv, 0.0, 1.0), 0.0).r;
  float hh = max(h + dz, 0.0) * uDome;
  vec3 top = P + N * hh;
  vH = top.z - uShadowZ;
  vOrig = vec2(0.0);
#ifdef SHADOW
  vec3 Ls = normalize(uLightS);
  // shadows use the rest shape (a dent's bulge would smear the soft shadow)
  float hs = h * uDome;
  float zz = (P.z + N.z * hs * 0.5) - uShadowZ;
  vH = max(zz, 0.0);
  P = P + N * hs * 0.5;
  P -= Ls * (zz / max(Ls.z, 0.3));
#elif defined(CAUSTIC)
  // refract light through the dome surface and land on the base plane (exaggerated depth)
  vec2 nxy = nt.rg * 2.0 - 1.0;
  if (uDeformOn > 0.5) {
    vec2 ts = 1.0 / vec2(textureSize(uDeform, 0));
    float dl = textureLod(uDeform, uv - vec2(ts.x, 0.0), 0.0).r;
    float dr = textureLod(uDeform, uv + vec2(ts.x, 0.0), 0.0).r;
    float du = textureLod(uDeform, uv - vec2(0.0, ts.y), 0.0).r;
    float dd = textureLod(uDeform, uv + vec2(0.0, ts.y), 0.0).r;
    vec2 g = vec2(dr - dl, dd - du) / (2.0 * ts) * (uDome / uSize);
    vec3 nn = vec3(nxy, sqrt(max(0.0, 1.0 - dot(nxy, nxy))));
    nn = normalize(nn / max(nn.z, 0.2) + vec3(-g, 0.0));
    nxy = nn.xy;
  }
  vec3 nl = vec3(nxy, sqrt(max(0.0, 1.0 - dot(nxy, nxy))));
  vec3 Nd = normalize(T * nl.x + B * nl.y + N * nl.z);
  vec3 Ls = normalize(uLightS);
  vec3 rd = refract(-Ls, Nd, 1.0 / uEta);
  if (dot(rd, rd) < 0.01) rd = -N;
  float depth = hh + uCausDepth;
  float t = depth / max(-dot(rd, N), 0.08);
  vOrig = P.xy;
  P = top + rd * t;
  P.z = uShadowZ;
  vH = hh;
#else
  P = top;
#endif
  vec4 W = uModel * vec4(P, 1.0);
  vPos = W.xyz;
  mat3 M3 = mat3(uModel);
  vT = normalize(M3 * T);
  vB = normalize(M3 * B);
  vN = normalize(M3 * N);
  gl_Position = project(W.xyz, uDepth - W.z * uDepthScale);
}
`;

export const STICKER_FS = /* glsl */ `
in vec2 vUV;
in vec3 vPos;
in vec3 vT;
in vec3 vB;
in vec3 vN;
in float vS;
in float vH;
out vec4 frag;

uniform sampler2D uArt;
uniform sampler2D uNorm;
uniform sampler2D uMatTex;
uniform sampler2D uDeform;
uniform sampler2D uIncl;
uniform sampler2D uNap;
uniform sampler2D uBackdrop;
uniform vec2 uFB;          // backdrop sample scale: 1/framebuffer size (pixels)
uniform float uDpr;
uniform int uMat;
uniform vec3 uTint;
uniform vec4 uParam;       // x density, y refraction, z gloss, w special
uniform vec2 uSize;
uniform float uDome;
uniform float uDeformOn;
uniform float uInclOn;
uniform float uAlpha;
uniform vec4 uPeelB;
uniform float uFurScale;
uniform float uBright;     // extra light (selection glow)
uniform float uSatin;
uniform int uDebug;
uniform float uUnitPx;

const int M_RESIN = 0;
const int M_JELLY = 1;
const int M_LIQUID = 2;
const int M_FUR = 3;
const int M_SATIN = 4;
const int M_PEARL = 5;
const int M_HOLO = 6;
const int M_CLEAR = 7;
const int M_MATTE = 8;
const int M_GLOSS = 9;
const int M_METAL = 10;
const int M_GLASS = 11;

vec3 backdrop(vec2 offPx) {
  vec2 uv = (gl_FragCoord.xy + vec2(offPx.x, -offPx.y) * uDpr) * uFB;
  return texture(uBackdrop, uv).rgb;
}

vec3 shadeInclusion(vec4 inc, vec3 col, vec3 V, vec3 L, vec3 H) {
  vec2 fn = inc.rg * 2.0 - 1.0;
  vec3 fN = normalize(vT * fn.x + vB * fn.y + vN * sqrt(max(0.0, 1.0 - dot(fn, fn))));
  float code = floor(inc.b * 255.0 + 0.5);
  float m = floor(code / 64.0);
  float hue = mod(code, 64.0) / 64.0;
  float ndl = max(dot(fN, L), 0.0);
  vec3 R = reflect(-V, fN);
  vec3 c;
  if (m < 0.5) {
    // glitter flake: holographic mirror flake
    float sp = pow(max(dot(fN, H), 0.0), 36.0);
    vec3 hc = holo4(hue + dot(fN, L) * 0.9 + dot(fN, V) * 0.5);
    c = hc * (0.45 + envMap(R) * 0.45) * (uAmb + uLightCol * 0.7) + hc * uLightCol * sp * 4.5 + uLightCol * pow(max(dot(fN, H), 0.0), 260.0) * 3.5;
  } else if (m < 1.5) {
    // pearl bead
    float ndv = max(dot(fN, V), 0.0);
    vec3 base = mix(vec3(1.0, 0.97, 0.95), vec3(1.0, 0.88, 0.92), hue);
    vec3 irid = 0.5 + 0.5 * cos(6.2831 * (vec3(0.0, 0.33, 0.67) + ndv * 1.3 + 0.2));
    c = base * (uAmb + uLightCol * ndl);
    c = mix(c, c * (0.75 + 0.6 * irid), 0.35 * (1.0 - ndv) + 0.1);
    c += uLightCol * pow(max(dot(fN, H), 0.0), 90.0) * 1.2 + envMap(R) * fresnel(ndv, 0.06) * 0.8;
  } else if (m < 2.5) {
    // metallic foil star
    vec3 fc = hue < 0.33 ? vec3(1.0, 0.8, 0.38) : (hue < 0.66 ? vec3(0.9, 0.92, 1.0) : vec3(1.0, 0.62, 0.78));
    c = fc * envMap(R) * 1.1 + fc * uLightCol * pow(max(dot(fN, H), 0.0), 50.0) * 2.5 + fc * 0.12;
  } else {
    // glossy opaque charm
    vec3 cc = holo4(hue);
    c = cc * (uAmb + uLightCol * ndl) + uLightCol * pow(max(dot(fN, H), 0.0), 120.0) * 1.5;
  }
  return mix(col, c, inc.a);
}

void main() {
  if (uPeelB.w > 0.5) {
    float split = uPeelB.x * PI * 0.5;
    if (uPeelB.w < 1.5 && vS > split) discard;
    if (uPeelB.w > 1.5 && vS <= split) discard;
  }
  vec2 uv = vUV;
  vec4 art = texture(uArt, uv);
  float mask = art.a;
  if (mask < 0.004) discard;

  vec3 V = normalize(uCamPos - vPos);
  vec3 L = normalize(uLight);
  vec3 H = normalize(L + V);
  vec3 Ns = normalize(vN);
  bool back = dot(Ns, V) < 0.0;

  vec4 nt = texture(uNorm, uv);
  vec4 mt = texture(uMatTex, uv);
  float region = floor(mt.r * 255.0 / 16.0 + 0.5);
  vec2 nxy = nt.rg * 2.0 - 1.0;
  vec3 n = vec3(nxy, sqrt(max(0.0, 1.0 - dot(nxy, nxy))));
  float h = nt.b;
  float dz = 0.0;
  vec2 g = vec2(0.0);
  if (uDeformOn > 0.5) {
    vec2 ts = 1.0 / vec2(textureSize(uDeform, 0));
    float dl = texture(uDeform, uv - vec2(ts.x, 0.0)).r;
    float dr = texture(uDeform, uv + vec2(ts.x, 0.0)).r;
    float du = texture(uDeform, uv - vec2(0.0, ts.y)).r;
    float dd = texture(uDeform, uv + vec2(0.0, ts.y)).r;
    dz = texture(uDeform, uv).r;
    g = vec2(dr - dl, dd - du) / (2.0 * ts);
    vec2 slope = g * (uDome / uSize);
    float sl = length(slope);
    if (sl > 0.9) slope *= 0.9 / sl;
    n = normalize(n / max(n.z, 0.2) + vec3(-slope, 0.0));
  }
  float th = max(h + dz, 0.0);
  vec3 N = normalize(vT * n.x + vB * n.y + Ns * n.z);
  float ao = mt.a;
  if (uDebug == 1) { frag = vec4(vec3(th), 1.0); return; }
  if (uDebug == 2) { frag = vec4(region / 8.0, mt.g, ao, 1.0); return; }
  if (uDebug == 3) { frag = vec4(N * 0.5 + 0.5, 1.0); return; }
  if (uDebug == 4) { frag = vec4(backdrop(vec2(0.0)), 1.0); return; }

  if (back) {
    // reverse side of a peeled flap: clear backing film with the print faintly visible
    vec3 Nb = -Ns;
    float d = max(dot(Nb, L), 0.0);
    vec3 film = mix(vec3(0.95, 0.94, 0.97), art.rgb, 0.22);
    vec3 c = film * (uAmb + uLightCol * d);
    c += envMap(reflect(-V, Nb)) * fresnel(abs(dot(Nb, V)), 0.06) * 0.6;
    frag = vec4(c, mask * uAlpha);
    return;
  }

  float ndv = max(dot(N, V), 0.0);
  float ndl = max(dot(N, L), 0.0);
  vec3 Rv = reflect(-V, N);
  vec3 env = envMap(Rv);
  float spec = pow(max(dot(N, H), 0.0), 700.0) * 2.5 + pow(max(dot(N, H), 0.0), 90.0) * 0.25;
  vec3 Vt = vec3(dot(V, vT), dot(V, vB), dot(V, Ns));
  vec2 refr = -n.xy * th * uParam.y - Vt.xy / max(Vt.z, 0.35) * th * 0.03;
  float sheetDiff = max(dot(Ns, L), 0.0);
  vec3 col;
  float outA = mask;
  float gloss = uParam.z;

  if (region > 1.5 && region < 2.5) {
    // die-cut border film (flat, thin)
    if (uMat == M_CLEAR || uMat == M_JELLY) {
      vec3 bg = backdrop(vec2(0.0));
      col = bg * 0.96 + uLightCol * 0.02;
    } else {
      col = art.rgb * (uAmb + uLightCol * sheetDiff);
    }
    float F = fresnel(max(dot(Ns, V), 0.0), 0.05);
    col += envMap(reflect(-V, Ns)) * F * 0.7 + uLightCol * pow(max(dot(Ns, H), 0.0), 300.0) * 0.6;
    frag = vec4(col, mask * uAlpha);
    return;
  }

  if (uMat == M_FUR && region < 0.5) {
    vec4 nap = texture(uNap, uv);
    vec2 nd = nap.rg * 2.0 - 1.0;
    float ln = length(nd);
    nd = ln > 0.01 ? nd / ln : vec2(0.0, 1.0);
    float flatten = nap.b;
    float lay = nap.a;
    float lean = mix(0.55, 1.25, max(flatten, lay));
    vec3 Tf = normalize(vT * nd.x * sin(lean) + vB * nd.y * sin(lean) + N * cos(lean));
    float TL = dot(Tf, L), TV = dot(Tf, V);
    float sTL = sqrt(max(1.0 - TL * TL, 0.0));
    float sTV = sqrt(max(1.0 - TV * TV, 0.0));
    float kk = max(TL * TV + sTL * sTV, 0.0);
    // fibre streaks aligned with the nap direction
    vec2 perp = vec2(-nd.y, nd.x);
    float along = dot(uv, nd) * uFurScale * 0.12;
    float across = dot(uv, perp) * uFurScale;
    float fib = vnoise(vec2(along, across)) * 0.6 + vnoise(vec2(along * 2.3, across * 2.1) + 7.0) * 0.4;
    // fibres leaning toward the light show their dark tips; leaning away, their shiny sides
    float tipShade = mix(0.42, 1.12, sTL * sTL) * (0.84 + 0.32 * fib);
    vec3 base = art.rgb;
    col = base * (uAmb * 0.9 + uLightCol * ndl * tipShade) * mix(0.75, 1.0, ao);
    col += uLightCol * pow(kk, 14.0) * 0.22 * (0.6 + 0.8 * fib) * mix(vec3(1.0), base, 0.4);
    col += base * pow(1.0 - ndv, 2.5) * 0.35 * (uLightCol + uAmb); // velvet rim
    col *= 0.94 + 0.3 * flatten * (0.5 + fib);
    // laid-down fibres: lighter with a soft sheen; raised fibres: deeper shade
    col *= mix(0.72, 1.12, lay);
    col += base * uLightCol * pow(kk, 6.0) * lay * 0.18;
    frag = vec4(col * (1.0 + uBright), mask * uAlpha);
    return;
  }

  if (uMat == M_SATIN && region < 0.5) {
    float ang = mt.g * PI;
    vec2 fd = vec2(cos(ang), sin(ang));
    vec3 Tf = normalize(vT * fd.x + vB * fd.y);
    Tf = normalize(Tf - N * dot(Tf, N));
    float TH = dot(Tf, H);
    float st = sqrt(max(1.0 - TH * TH, 0.0));
    float band = pow(st, 160.0) * 1.1 + pow(st, 18.0) * 0.28;
    // fine weave
    vec2 perp = vec2(-fd.y, fd.x);
    float weave = vnoise(vec2(dot(uv, fd) * 30.0, dot(uv, perp) * 420.0));
    vec3 base = art.rgb;
    col = base * (uAmb + uLightCol * ndl) * mix(0.55, 1.0, ao);
    col += mix(vec3(1.0), base, 0.35) * uLightCol * band * (0.85 + 0.3 * weave) * mix(0.4, 1.0, ao);
    col += envMap(Rv) * fresnel(ndv, 0.03) * 0.35;
    frag = vec4(col * (1.0 + uBright), mask * uAlpha);
    return;
  }

  if (uMat == M_PEARL || region > 6.5 && region < 7.5) {
    vec3 base = art.rgb;
    vec3 irid = 0.5 + 0.5 * cos(6.2831 * (vec3(0.0, 0.33, 0.67) + ndv * 1.4 + dot(N, L) * 0.35 + 0.15));
    col = base * (uAmb + uLightCol * ndl);
    col = mix(col, col * (0.7 + 0.65 * irid), 0.22 + 0.4 * (1.0 - ndv));
    float F = fresnel(ndv, 0.07);
    col = col * (1.0 - F * 0.6) + env * F * 0.95;
    col += uLightCol * (pow(max(dot(N, H), 0.0), 220.0) * 1.8 + pow(max(dot(N, H), 0.0), 24.0) * 0.18);
    frag = vec4(col * (1.0 + uBright), mask * uAlpha);
    return;
  }

  if (uMat == M_HOLO || region > 7.5 && region < 8.5) {
    float fid = floor(mt.g * 255.0 + 0.5);
    float ga = hash12(vec2(fid, 3.7)) * PI;
    vec3 gdir = normalize(vT * cos(ga) + vB * sin(ga));
    float ph = dot(L + V, gdir) * 1.6 + hash12(vec2(fid, 9.1)) * 0.8 + dot(N, L) * 0.5;
    vec3 diff = holo4(ph);
    vec3 Rl = reflect(-L, N);
    float rv = max(dot(Rl, V), 0.0);
    float lobe = pow(rv, 6.0);
    float glint = pow(rv, 260.0);
    vec3 base = art.rgb;
    float F = fresnel(ndv, 0.12);
    col = base * (uAmb * 0.75 + uLightCol * 0.45 * ndl) * (0.75 + 0.25 * h);
    col += diff * (uLightCol * (0.42 + 1.6 * lobe) + uAmb * 0.25) * mix(0.75, 1.0, ao);
    col += env * F * 0.6 + uLightCol * glint * 4.0;
    // facet edges catch a little light
    col *= 0.92 + 0.16 * hash12(vec2(fid, 1.3));
    frag = vec4(col * (1.0 + uBright), mask * uAlpha);
    return;
  }

  if (uMat == M_MATTE || uMat == M_GLOSS || uMat == M_METAL) {
    vec3 base = art.rgb;
    float diff = ndl;
    if (uMat == M_METAL) {
      float F = fresnel(ndv, 0.6);
      col = base * (envMap(Rv) * 0.9 + 0.12) + base * uLightCol * pow(max(dot(N, H), 0.0), 60.0) * 2.0;
      col *= mix(0.6, 1.0, ao);
    } else {
      col = base * (uAmb + uLightCol * diff) * mix(0.55, 1.0, ao);
      if (uMat == M_GLOSS) {
        float F = fresnel(ndv, 0.04);
        col = col * (1.0 - F) + env * F + uLightCol * spec * gloss;
      } else {
        col += uLightCol * pow(max(dot(N, H), 0.0), 16.0) * 0.06;
      }
    }
    frag = vec4(col * (1.0 + uBright), mask * uAlpha);
    return;
  }

  // ---- translucent / resin family ----
  float F = fresnel(ndv, 0.045);
  if (uMat == M_JELLY || uMat == M_CLEAR || uMat == M_GLASS) {
    float domePx = uDome * uUnitPx;
    vec2 off = -(N.xy) * th * domePx * uParam.y * 10.0;
    vec3 bg;
    if (uMat == M_CLEAR || uMat == M_GLASS) {
      // dispersion: each wavelength bends a little differently -> rainbow fringes
      bg.r = backdrop(off * 0.92).r;
      bg.g = backdrop(off * 1.0).g;
      bg.b = backdrop(off * 1.1).b;
    } else {
      bg = backdrop(off);
    }
    vec3 tint = uMat == M_JELLY ? art.rgb : mix(vec3(1.0), art.rgb, 0.85);
    vec3 sigma = -log(max(tint, vec3(0.03))) * uParam.x;
    float pathLen = th / max(Vt.z, 0.35);
    vec3 trans = exp(-sigma * pathLen * 2.2);
    vec3 body = bg * trans;
    // light scattered inside the body glows with its own colour
    vec3 scatter = tint * (uLightCol * (0.25 + 0.35 * sheetDiff) + uAmb * 0.35) * (1.0 - trans.g * 0.6) * uParam.w;
    // transmitted light gathers at the rim on the side away from the light
    vec2 Lt = vec2(dot(L, vT), dot(L, vB));
    float rim = smoothstep(0.15, 0.8, length(n.xy)) * smoothstep(0.02, 0.2, h);
    float away = 0.45 + 0.75 * max(dot(normalize(n.xy + 1e-5), -normalize(Lt + 1e-5)), 0.0);
    vec3 rimGlow = tint * uLightCol * rim * away * 0.9 * uParam.w;
    // opaque inner region (e.g. stems, faces printed inside)
    if (region > 4.5 && region < 5.5) {
      vec2 puv = uv + refr;
      vec3 pr = texture(uArt, puv).rgb;
      body = pr * (uAmb + uLightCol * sheetDiff);
      scatter *= 0.2;
    }
    col = body + scatter + rimGlow;
    if (uInclOn > 0.5) col = shadeInclusion(texture(uIncl, uv + refr * 0.6 - g * 0.004), col, V, L, H);
    // rainbow "fire": light refracted into the dome and reflected back out, split by wavelength
    vec3 Lr = refract(-L, N, 1.0 / 1.5);
    vec3 fire = vec3(0.0);
    for (int k = 0; k < 3; k++) {
      float eta = 1.44 + float(k) * 0.07;
      vec3 rr = refract(-L, N, 1.0 / eta);
      rr = reflect(rr, Ns);
      vec3 outv = refract(rr, -N, eta);
      float m = dot(outv, outv) > 0.0 ? pow(max(dot(normalize(outv), V), 0.0), 140.0) : 0.0;
      fire[k] = m;
    }
    col += fire * uLightCol * 1.6 * smoothstep(0.05, 0.4, h);
    // rainbow sheen: spectral rings around the glint that slide over the dome when tilted
    float nh = max(dot(N, H), 0.0);
    col += spectrum(fract((1.0 - nh) * 9.0 + 0.15)) * uLightCol * smoothstep(0.82, 0.985, nh) * (1.0 - smoothstep(0.995, 1.0, nh)) * 0.55 * smoothstep(0.05, 0.4, h);
    col = col * (1.0 - F) + env * F * 0.9 + uLightCol * spec * gloss;
    frag = vec4(col * (1.0 + uBright), mask * uAlpha);
    return;
  }

  // RESIN / LIQUID: clear dome over a printed base
  vec2 puv = uv + refr;
  vec3 pr = texture(uArt, puv).rgb;
  float pm = texture(uArt, puv).a;
  pr = mix(vec3(0.97, 0.96, 0.98), pr, pm);
  float lens = 1.0 + 0.22 * smoothstep(0.2, 0.9, th) * (0.4 + 0.6 * sheetDiff);
  vec3 printLit = pr * (uAmb + uLightCol * sheetDiff * lens) * mix(0.8, 1.0, ao);

  if (region > 0.5 && region < 1.5) {
    // metallic foil under resin
    vec2 crink = vec2(vnoise(puv * 26.0), vnoise(puv * 26.0 + 13.0)) * 2.0 - 1.0;
    vec3 Nf = normalize(Ns + (vT * crink.x + vB * crink.y) * 0.1 + (vT * n.x + vB * n.y) * 0.35);
    vec3 Rf = reflect(-V, Nf);
    printLit = pr * (envMap(Rf) * 1.05 + 0.1) + pr * uLightCol * pow(max(dot(Nf, H), 0.0), 40.0) * 2.4;
  } else if (region > 5.5 && region < 6.5) {
    // holographic rainbow foil under resin
    vec2 crink = vec2(vnoise(puv * 18.0), vnoise(puv * 18.0 + 5.0)) * 2.0 - 1.0;
    vec3 Nf = normalize(Ns + (vT * crink.x + vB * crink.y) * 0.12);
    float ph = dot(L + V, normalize(vT + vB * 0.3)) * 1.4 + dot(puv, vec2(0.6, 0.9));
    vec3 hc = holo4(ph);
    printLit = mix(pr, hc, 0.75) * (uAmb * 0.5 + uLightCol * (0.4 + 1.2 * pow(max(dot(reflect(-L, Nf), V), 0.0), 4.0)));
  } else if (region > 2.5 && region < 3.5) {
    // hard glossy bead (eyes etc.)
    printLit = pr * (uAmb * 0.6 + uLightCol * 0.4 * ndl);
    F = fresnel(ndv, 0.08);
  } else if (region > 3.5 && region < 4.5) {
    // matte felt
    printLit = pr * (uAmb + uLightCol * ndl);
    F *= 0.15;
    spec *= 0.05;
  }

  vec3 body = printLit;
  if (uMat == M_LIQUID) {
    vec3 tint = uTint;
    vec3 sigma = -log(max(tint, vec3(0.05))) * uParam.x;
    body *= exp(-sigma * th * 1.6);
  } else {
    body *= mix(vec3(1.0), uTint, th * 0.5);
  }
  if (uInclOn > 0.5) {
    vec2 disp = uMat == M_LIQUID ? vec2(0.0) : -g * 0.003;
    body = shadeInclusion(texture(uIncl, uv + refr * 0.6 + disp), body, V, L, H);
  }
  col = body;
  // rainbow fire inside the resin
  vec3 fire = vec3(0.0);
  for (int k = 0; k < 3; k++) {
    float eta = 1.44 + float(k) * 0.07;
    vec3 rr = refract(-L, N, 1.0 / eta);
    rr = reflect(rr, Ns);
    vec3 outv = refract(rr, -N, eta);
    float m = dot(outv, outv) > 0.0 ? pow(max(dot(normalize(outv), V), 0.0), 160.0) : 0.0;
    fire[k] = m;
  }
  col += fire * uLightCol * 0.9 * smoothstep(0.1, 0.5, th) * (region < 0.5 ? 1.0 : 0.3);
  float nh2 = max(dot(N, H), 0.0);
  col += spectrum(fract((1.0 - nh2) * 9.0 + 0.15)) * uLightCol * smoothstep(0.84, 0.985, nh2) * (1.0 - smoothstep(0.995, 1.0, nh2)) * 0.35 * smoothstep(0.1, 0.5, th) * (region < 0.5 ? 1.0 : 0.0);
  col = col * (1.0 - F) + env * F * 1.1 + uLightCol * spec * gloss;
  frag = vec4(col * (1.0 + uBright), outA * uAlpha);
}
`;

export const SHADOW_FS = /* glsl */ `
in vec2 vUV;
in float vH;
out vec4 frag;
uniform sampler2D uArt;
uniform float uBlur;
uniform float uBlurPerH;
uniform float uShadowAmt;
uniform vec3 uShadowTint;
void main() {
  float lod = min(uBlur + vH * uBlurPerH, 4.5);
  float a = textureLod(uArt, vUV, lod).a;
  vec2 wv = smoothstep(vec2(0.0), vec2(0.06), vUV) * smoothstep(vec2(1.0), vec2(0.94), vUV);
  a *= wv.x * wv.y;
  a *= uShadowAmt / (1.0 + vH * 0.012);
  frag = vec4(mix(vec3(1.0), uShadowTint, clamp(a, 0.0, 1.0)), 1.0);
}
`;

export const CAUSTIC_FS = /* glsl */ `
in vec2 vUV;
in vec2 vOrig;
in float vH;
out vec4 frag;
uniform sampler2D uArt;
uniform vec3 uChan;
uniform float uCausAmt;
uniform float uPxScale;
uniform vec3 uLightCol;
void main() {
  float a = texture(uArt, vUV).a;
  vec2 dx = dFdx(vOrig), dy = dFdy(vOrig);
  float area = abs(dx.x * dy.y - dx.y * dy.x) * uPxScale * uPxScale;
  float I = clamp(area, 0.0, 7.0);
  I = I * I * 0.5;
  vec3 tint = mix(vec3(1.0), texture(uArt, vUV).rgb, 0.45);
  frag = vec4(uChan * tint * uLightCol * I * a * uCausAmt * smoothstep(0.0, 0.25, vH), 1.0);
}
`;

// Page film (transparent PVC sheet) shading.
export const FILM_FS = /* glsl */ `
in vec2 vUV;
in vec3 vPos;
in vec3 vT;
in vec3 vB;
in vec3 vN;
out vec4 frag;
uniform sampler2D uArt;      // printed decoration (white dots, lace), a = print coverage
uniform vec2 uSize;
uniform float uHaze;
uniform float uAlpha;
uniform float uEdgeBoost;
void main() {
  vec3 V = normalize(uCamPos - vPos);
  vec3 L = normalize(uLight);
  vec3 N = normalize(vN);
  if (dot(N, V) < 0.0) N = -N;
  vec3 H = normalize(L + V);
  float ndv = max(dot(N, V), 0.0);
  // subtle surface waviness of the PVC
  vec2 w = vec2(vnoise(vUV * vec2(7.0, 9.0)), vnoise(vUV * vec2(8.0, 6.0) + 4.0)) - 0.5;
  vec3 Nw = normalize(N + (vT * w.x + vB * w.y) * 0.05);
  float F = fresnel(max(dot(Nw, V), 0.0), 0.04);
  vec3 env = envMap(reflect(-V, Nw));
  // thin-film iridescence of the coated sheet: angle dependent, not random
  float film = dot(V, Nw) * 3.0 + dot(L, Nw) * 1.5;
  vec3 irid = spectrum(fract(film * 0.5));
  float sp = pow(max(dot(Nw, H), 0.0), 220.0);
  float spw = pow(max(dot(Nw, H), 0.0), 30.0);
  vec4 pr = texture(uArt, vUV);
  // edges of the sheet: cut edge is a little prism
  vec2 e = min(vUV, 1.0 - vUV) * uSize;
  float edge = 1.0 - smoothstep(0.0, 2.2, min(e.x, e.y));
  float rainbowEdge = edge * pow(max(dot(reflect(-L, N), V), 0.0), 3.0);
  // premultiplied output: reflections only add light, haze / ink partially cover
  float spn = pow(max(dot(Nw, H), 0.0), 90.0);
  vec3 refl = env * F * 0.55 + uLightCol * sp * 1.3 + irid * uLightCol * spn * 0.7;
  vec3 lightN = uAmb + uLightCol * max(dot(N, L), 0.0);
  vec3 hazeCol = lightN * 0.98;
  float a = uHaze;
  vec3 c = refl + hazeCol * uHaze;
  vec3 printed = pr.rgb * (lightN * 0.55 + 0.42);
  c = c * (1.0 - pr.a) + printed * pr.a;
  a = a * (1.0 - pr.a) + pr.a * 0.92;
  c += spectrum(fract(vUV.y * 1.7 + dot(V, vT) * 2.0 + dot(L, vB))) * rainbowEdge * 1.4 * uEdgeBoost;
  c += lightN * edge * 0.3;
  a = max(a, edge * 0.3);
  c *= uAlpha;
  a *= uAlpha;
  frag = vec4(c, a);
}
`;

// Generic lit, textured quad (painted props, background layers).
export const PAINT_FS = /* glsl */ `
in vec2 vUV;
in vec3 vPos;
in vec3 vN;
out vec4 frag;
uniform sampler2D uArt;
uniform float uAlpha;
uniform float uLit;        // 0 = unlit painting, 1 = lit by scene light
uniform vec3 uMulCol;
uniform vec4 uUVRect;      // uv sub-rectangle: x,y,w,h
void main() {
  vec4 a = texture(uArt, uUVRect.xy + vUV * uUVRect.zw);
  if (a.a < 0.003) discard;
  vec3 N = normalize(vN);
  float d = max(dot(N, normalize(uLight)), 0.0);
  vec3 lit = a.rgb * (uAmb + uLightCol * d);
  if (uLit < -2.5) {
    // premultiplied light (screen blending: ONE, ONE_MINUS_SRC_COLOR)
    frag = vec4(a.rgb * uMulCol * a.a * uAlpha, 1.0);
    return;
  }
  if (uLit < -1.5) {
    // multiplicative coloured light (used with DST_COLOR, ZERO blending)
    frag = vec4(max(vec3(0.0), vec3(1.0) + uMulCol * a.a * uAlpha), 1.0);
    return;
  }
  vec3 c = uLit < -0.5 ? a.rgb * uMulCol : mix(a.rgb * (0.55 * uAmb + 0.6 * uLightCol + 0.12), lit, uLit) * uMulCol;
  frag = vec4(c, a.a * uAlpha);
}
`;

// Glitter / inclusion layer rendering (points in sticker uv space into a small FBO).
export const INCL_VS = /* glsl */ `#version 300 es
precision highp float;
layout(location = 0) in vec4 aA;   // x, y (uv), size (px), rotation
layout(location = 1) in vec4 aB;   // normal x, normal y, code (0..255), shape
out vec4 vB;
out float vRot;
uniform float uRes;
void main() {
  gl_Position = vec4(aA.x * 2.0 - 1.0, aA.y * 2.0 - 1.0, 0.0, 1.0);
  gl_PointSize = aA.z;
  vB = aB;
  vRot = aA.w;
}
`;

export const INCL_FS = /* glsl */ `#version 300 es
precision highp float;
#define PI2 6.2831853
in vec4 vB;
in float vRot;
out vec4 frag;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float c = cos(vRot), s = sin(vRot);
  p = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
  float shape = vB.w;
  float a;
  vec2 nrm = vB.xy;
  if (shape < 0.5) {
    // hexagonal flake
    vec2 q = abs(p);
    float d = max(q.x * 0.866 + q.y * 0.5, q.y);
    a = 1.0 - smoothstep(0.78, 0.92, d);
  } else if (shape < 1.5) {
    // sphere (pearl): normal from position
    float r2 = dot(p, p);
    a = 1.0 - smoothstep(0.86, 1.0, r2);
    nrm = p * 0.92;
  } else if (shape < 2.5) {
    // five-point star
    float ang = atan(p.y, p.x);
    float r = length(p);
    float k = cos(floor(0.5 + ang / (PI2 / 5.0)) * (PI2 / 5.0) - ang);
    float star = mix(0.45, 0.95, smoothstep(0.0, 1.0, (k - 0.81) / 0.19));
    a = 1.0 - smoothstep(star - 0.08, star + 0.02, r);
    nrm = nrm + p * 0.35;
  } else {
    // heart charm
    vec2 q = vec2(p.x, -p.y * 1.1 + 0.25);
    float d = pow(q.x * q.x + q.y * q.y - 0.36, 3.0) - q.x * q.x * q.y * q.y * q.y;
    a = 1.0 - smoothstep(-0.002, 0.004, d);
    nrm = nrm + p * 0.4;
  }
  if (a < 0.02) discard;
  frag = vec4(clamp(nrm * 0.5 + 0.5, 0.0, 1.0), vB.z / 255.0, a);
}
`;

// Fullscreen quad
export const FS_VS = /* glsl */ `#version 300 es
precision highp float;
layout(location = 0) in vec2 aUV;
out vec2 vUV;
void main() {
  vUV = aUV;
  gl_Position = vec4(aUV * 2.0 - 1.0, 0.0, 1.0);
}
`;

export const BLIT_FS = /* glsl */ `#version 300 es
precision highp float;
in vec2 vUV;
out vec4 frag;
uniform sampler2D uTex;
uniform float uVignette;
uniform vec3 uGrade;
uniform float uFade;
uniform vec3 uFadeCol;
void main() {
  vec3 c = texture(uTex, vUV).rgb;
  vec2 d = vUV - 0.5;
  c *= 1.0 - dot(d, d) * uVignette;
  c *= uGrade;
  // gentle shoulder above 0.9 (keeps paper white, compresses glints)
  vec3 over = max(c - 0.9, 0.0);
  c = min(c, vec3(0.9)) + 0.1 * (1.0 - exp(-over * 10.0));
  c = mix(c, uFadeCol, uFade);
  frag = vec4(c, 1.0);
}
`;

// Wet street puddles: mirror the painted storefront with touch ripples.
export const PUDDLE_FS = /* glsl */ `
in vec2 vUV;
out vec4 frag;
uniform sampler2D uArt;     // painted scene (screen-sized)
uniform sampler2D uMask;    // puddle mask (alpha)
uniform vec4 uRipples[10];  // x, y (uv), age (s), amplitude
uniform float uGround;      // ground line (uv y)
uniform vec2 uAspect;       // view size (px)
void main() {
  float m = texture(uMask, vUV).a;
  if (m < 0.01) discard;
  vec2 p = vUV * uAspect;
  vec2 off = vec2(0.0);
  float slope = 0.0;
  for (int i = 0; i < 10; i++) {
    vec4 r = uRipples[i];
    if (r.w <= 0.0) continue;
    vec2 d = p - r.xy * uAspect;
    d.y *= 2.4; // perspective: puddles are seen at a grazing angle
    float dist = length(d);
    float front = r.z * 140.0;
    float ring = smoothstep(front + 10.0, front - 30.0, dist) * smoothstep(0.0, 18.0, dist + 6.0);
    float w = sin(dist * 0.22 - r.z * 14.0) * exp(-r.z * 1.3) * exp(-dist * 0.012) * r.w * ring;
    off += (d / max(dist, 1.0)) * w * 7.0;
    slope += w;
  }
  // ambient drizzle shimmer
  off += vec2(sin(p.y * 0.21 + uTime * 2.0), cos(p.x * 0.17 + uTime * 1.6)) * 0.6;
  float gy = uGround * uAspect.y;
  vec2 q = vec2(p.x + off.x, gy - (p.y - gy) * 1.8 + off.y);
  vec3 refl = texture(uArt, q / uAspect).rgb;
  vec3 wet = vec3(0.42, 0.44, 0.56);
  vec3 c = mix(wet, refl * vec3(0.82, 0.86, 0.98), 0.78);
  c += vec3(1.0) * max(slope, 0.0) * 0.25;
  // soft edge of the puddle
  frag = vec4(c, m * 0.95);
}
`;
