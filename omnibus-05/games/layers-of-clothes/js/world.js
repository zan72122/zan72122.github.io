// World: sky, parallax paper hills, soil cutaway, floors that bend under weight,
// puddles, footprints, and small props that hop when the girl lands.
(function () {
  'use strict';
  const C = K.C;
  const Wd = (K.world = {
    floors: [],      // static floors
    floorFns: [],    // dynamic floors from rooms: fn(x, under) -> {y, surf, ref} | null | undefined
    waters: [],      // {x0,x1,top,bottom}
    puddles: [],
    prints: [],
    props: [],
    under: false,    // girl is underwater / in tunnels
    sky: 0,          // 0 morning .. 1 sunset
  });

  // ---------- floors ----------
  // wood floors carry posts; the span between posts bends under the girl.
  function addFloor(x0, x1, surf, o) {
    const f = Object.assign({ x0, x1, y: 0, surf, posts: null, sagK: 0, bounce: K.spring(0) }, o || {});
    if (surf === 'wood' && !f.posts) {
      f.posts = [];
      const n = Math.max(1, Math.round((x1 - x0) / 95));
      for (let i = 0; i <= n; i++) f.posts.push(x0 + ((x1 - x0) * i) / n);
      f.sagK = f.sagK || 0.11;
    }
    Wd.floors.push(f);
    return f;
  }
  Wd.addFloor = addFloor;

  // one long flooded tunnel runs from the lake bed back up to the plaza well
  const T = (Wd.tunnel = { x0: 250, x1: 3260, y0: 314, y1: 660, h: 200 });
  Wd.tunnelFloor = (x) => K.lerp(T.y0, T.y1, K.sat((x - T.x0) / (T.x1 - T.x0)));
  Wd.floorFns.push(function (x, under) {
    if (!under || x < 108 || x > T.x1) return undefined;
    return { y: Wd.tunnelFloor(Math.max(x, T.x0)), surf: 'mud', ref: T };
  });
  Wd.drawTunnel = function (ctx) {
    const a = T.y0, b = T.y1;
    const p = K.poly([T.x0 - 4, a - T.h, T.x1, b - T.h, T.x1, b + 10, T.x0 - 4, a + 10]);
    K.paper(ctx, p, '#223743', { depth: 0, line: '#18252d' });
    ctx.fillStyle = 'rgba(70,140,185,0.4)';
    ctx.fill(K.poly([T.x0 - 4, a - T.h + 3, T.x1, b - T.h + 3, T.x1, b, T.x0 - 4, a]));
    ctx.strokeStyle = '#4a3a2a'; ctx.lineWidth = 8;
    ctx.beginPath(); ctx.moveTo(T.x0 - 4, a + 5); ctx.lineTo(T.x1, b + 5); ctx.stroke();
    // slow current lines so it reads as water
    ctx.strokeStyle = 'rgba(190,230,245,0.22)'; ctx.lineWidth = 2;
    for (let i = 0; i < 12; i++) {
      const u = ((i / 12) + K.time * 0.01) % 1;
      const x = K.lerp(T.x0, T.x1, u), y = Wd.tunnelFloor(x) - 60 - (i % 3) * 40;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - 40, y - 4); ctx.stroke();
    }
  };

  Wd.build = function () {
    Wd.floors.length = 0; Wd.waters.length = 0; Wd.props.length = 0;
    addFloor(-1400, -430, 'stone');
    addFloor(-280, 540, 'stone');
    addFloor(540, 1000, 'wood');
    addFloor(1000, 1270, 'stone');
    addFloor(1270, 1500, 'wood');
    addFloor(1500, 2050, 'stone', { concrete: true });
    addFloor(2340, 2600, 'stone', { concrete: true });
    addFloor(2600, 2960, 'snow');
    addFloor(3800, 4400, 'snow');
    // underwater / tunnel floors (the lake bed, the tunnel under the kitchen, the plaza well)
    addFloor(2960, 3150, 'mud', { y: 420, under: true });
    addFloor(3260, 3800, 'mud', { y: 420, under: true });
    // bodies of water
    Wd.waters.push({ x0: 2960, x1: 3800, top: 16, bottom: 425 });
    Wd.waters.push({ x0: T.x0, x1: T.x1, topFn: (x) => Wd.tunnelFloor(x) - T.h, bottomFn: (x) => Wd.tunnelFloor(x) + 4 });
    Wd.waters.push({ x0: 108, x1: 252, top: 12, bottom: 310 });
    Wd.waters.push({ x0: 2050, x1: 2340, top: 150, bottom: 240 });
  };

  // sag of a wooden span at x, given the girl's position and mass
  function sagOf(f, x) {
    if (!f.posts) return 0;
    const g = K.girl;
    let s = 0;
    for (let i = 0; i < f.posts.length - 1; i++) {
      const a = f.posts[i], b = f.posts[i + 1];
      if (x < a || x > b) continue;
      // the girl's weight (only if she stands on this span)
      if (g && g.floorRef === f && g.x > a && g.x < b) {
        const p = g.x;
        const center = (4 * (p - a) * (b - p)) / ((b - a) * (b - a));
        const D = (f.sagK * g.mass * (0.4 + 0.6 * center)) + f.bounce.x;
        s = x < p ? D * Math.sin((Math.PI / 2) * (x - a) / (p - a)) : D * Math.sin((Math.PI / 2) * (b - x) / (b - p));
      }
      break;
    }
    return s;
  }
  Wd.sagOf = sagOf;

  // Floor at x: the topmost walkable surface that is not far above `fromY`
  // (so she can step up a little, and falls when nothing is under her).
  Wd.floorAt = function (x, under, fromY, up) {
    if (under === undefined) under = Wd.under;
    const lim = fromY === undefined ? -1e9 : fromY - (up === undefined ? 56 : up);
    let best = null;
    const take = (r) => { if (r && r.y >= lim && (!best || r.y < best.y)) best = r; };
    for (const fn of Wd.floorFns) take(fn(x, under));
    for (const f of Wd.floors) {
      if (!!f.under !== !!under) continue;
      if (x >= f.x0 && x <= f.x1) take({ y: f.y + sagOf(f, x), surf: f.surf, ref: f });
    }
    return best;
  };
  Wd.floorY = function (x) {
    const r = Wd.floorAt(x, false);
    if (r) return r.y;
    const u = Wd.floorAt(x, true);
    return u ? u.y : 2000;
  };
  const wTop = (w, x) => (w.topFn ? w.topFn(x) : w.top);
  const wBot = (w, x) => (w.bottomFn ? w.bottomFn(x) : w.bottom);
  Wd.waterTop = function (x, y) {
    let best = null;
    for (const w of Wd.waters) {
      if (x >= w.x0 && x <= w.x1 && y <= wBot(w, x) + 10) {
        const t = wTop(w, x);
        if (best === null || t < best) best = t;
      }
    }
    return best;
  };
  Wd.inWater = function (x, y) {
    for (const w of Wd.waters) if (x >= w.x0 && x <= w.x1 && y >= wTop(w, x) && y <= wBot(w, x) + 20) return true;
    return false;
  };

  // ---------- footsteps, puddles, props ----------
  Wd.impact = function (x, y, mass, strength) {
    const g = K.girl;
    const f = g.floorRef;
    if (f && f.bounce) f.bounce.v += strength * mass * 0.9;
    for (const p of Wd.props) {
      const d = Math.abs(p.x - x);
      const e = (mass * strength) / (1 + d / 140);
      if (e > p.need) {
        p.vy = -Math.min(260, (e - p.need) * 5 + 40);
        if (p.kind === 'bird') p.fly = 1;
        if (p.kind === 'can' || p.kind === 'bucket') K.sfx.clink();
      }
    }
  };
  Wd.puddle = function (x, hot) {
    for (const p of Wd.puddles) {
      if (Math.abs(p.x - x) < p.r) { p.r = Math.min(p.r + 0.6, 46); p.a = Math.min(1, p.a + 0.05); return; }
    }
    if (Wd.puddles.length > 40) Wd.puddles.shift();
    Wd.puddles.push({ x, r: 8, a: 0.5, hot: !!hot, y: Wd.floorY(x) });
  };
  Wd.footprint = function (x, mass, surf, wet) {
    if (!(surf === 'snow' || surf === 'mud' || wet > 0.05)) return;
    if (Wd.prints.length > 60) Wd.prints.shift();
    const fl = Wd.floorAt(x, undefined, K.girl.y);
    Wd.prints.push({ x, y: fl ? fl.y : 0, s: 0.6 + mass / 70, a: surf === 'snow' ? 0.9 : 0.55 * Math.max(wet, 0.4), surf, t: K.time, under: Wd.under });
  };
  // a finger can poke the little things too
  Wd.poke = function (pt) {
    for (const p of Wd.props) {
      const x = p.x + p.fx, y = p.base + p.y + p.fy;
      if (Math.abs(pt.x - x) < K.cam.touchR(18) && pt.y < y + 8 && pt.y > y - 40) {
        if (p.kind === 'bird') { if (!p.fly) { p.fly = 0.01; K.sfx.whoosh(); } }
        else { p.vy = -200; if (p.kind === 'can' || p.kind === 'bucket') K.sfx.clink(); else K.sfx.pop(); }
        return true;
      }
    }
    return false;
  };
  Wd.addProp = function (kind, x, o) {
    const p = Object.assign({ kind, x, y: 0, vy: 0, need: 60, fly: 0, fx: 0, fy: 0 }, o || {});
    p.base = Wd.floorY(x);
    Wd.props.push(p);
    return p;
  };

  Wd.update = function (dt) {
    for (const f of Wd.floors) if (f.bounce) {
      f.bounce.t = 0;
      K.stepSpring(f.bounce, 90, 7, dt);
    }
    for (const p of Wd.props) {
      if (p.fly) {
        p.fly += dt;
        if (p.fly < 4) {
          p.fx += (80 + p.fly * 60) * dt * (p.dir || 1);
          p.fy -= (140 + p.fly * 40) * dt;
        } else {
          // come back and land again, a little further along
          p.fx = K.follow(p.fx, 0, 1.2, dt); p.fy = K.follow(p.fy, 0, 1.2, dt);
          if (Math.abs(p.fy) < 1 && p.fly > 6) { p.fly = 0; p.fx = 0; p.fy = 0; }
        }
        continue;
      }
      if (p.y < 0 || p.vy) {
        p.vy += 900 * dt; p.y += p.vy * dt;
        if (p.y >= 0) { p.y = 0; p.vy = p.vy > 120 ? -p.vy * 0.3 : 0; }
      }
      p.base = Wd.floorY(p.x);
    }
    for (let i = Wd.puddles.length - 1; i >= 0; i--) {
      const p = Wd.puddles[i];
      p.a -= dt * 0.01;
      if (p.hot && Math.random() < dt * 2) K.P.steam(p.x + K.rand(-p.r, p.r) * 0.6, p.y - 2, 1, 2, { alpha: 0.35 });
      if (p.a <= 0) Wd.puddles.splice(i, 1);
    }
    for (let i = Wd.prints.length - 1; i >= 0; i--) {
      if (K.time - Wd.prints[i].t > 40) Wd.prints.splice(i, 1);
    }
  };

  // ---------- drawing ----------
  const skies = [
    ['#f6dcae', '#cfe5e4'],   // morning
    ['#fbe9c6', '#a9d4e6'],   // day
    ['#dfe9ef', '#b9d3e3'],   // snowy afternoon
    ['#f4b58a', '#f7d9b0'],   // sunset
  ];
  Wd.drawSky = function (ctx) {
    ctx.setTransform(K.dpr, 0, 0, K.dpr, 0, 0);
    const s = K.clamp(Wd.sky, 0, 2.999);
    const i = Math.floor(s), t = s - i;
    const top = K.mix(skies[i][1], skies[i + 1][1], t);
    const bot = K.mix(skies[i][0], skies[i + 1][0], t);
    const g = ctx.createLinearGradient(0, 0, 0, K.H);
    g.addColorStop(0, top); g.addColorStop(1, bot);
    ctx.fillStyle = g; ctx.fillRect(0, 0, K.W, K.H);
  };

  // parallax paper hills (drawn in world space with a slower drift)
  const hillSeeds = [K.srand(11), K.srand(23), K.srand(37)];
  const hills = [0, 1, 2].map((k) => {
    const r = hillSeeds[k];
    const pts = [];
    for (let x = -3000; x <= 6000; x += 140 + k * 40) pts.push(x, -60 - k * 18 - r() * (120 - k * 30));
    return pts;
  });
  Wd.drawBackdrop = function (ctx) {
    const cam = K.cam;
    const cols = [['#c9d8c0', '#b6caa9'], ['#b5c99d', '#a0b884'], ['#9fba7f', '#88a766']];
    const sunset = K.sat(Wd.sky - 2);
    // far away on the horizon: the gate tower with its big wheel, always waiting
    // (only once she has left the plaza)
    const far = K.sat((cam.x - 450) / 400) * 0.5;
    if (far > 0.01) {
      ctx.save();
      ctx.translate(cam.x * 0.93, cam.y * 0.46);
      const tx = -260, col = K.mix('#b9c9b4', '#d9a58a', sunset * 0.5);
      ctx.globalAlpha = far;
      ctx.translate(tx, -80); ctx.scale(0.6, 0.6);
      K.paper(ctx, K.rr(-34, -220, 14, 230, 2), col, { depth: 0, line: false });
      K.paper(ctx, K.rr(20, -220, 14, 230, 2), col, { depth: 0, line: false });
      K.paper(ctx, K.rr(-40, -226, 80, 10, 2), col, { depth: 0, line: false });
      K.paper(ctx, K.ell(6, -246, 22, 22), col, { depth: 0, line: false });
      ctx.restore();
    }
    for (let k = 0; k < 3; k++) {
      const par = [0.2, 0.38, 0.6][k];
      ctx.save();
      ctx.translate(cam.x * (1 - par), cam.y * (1 - par) * 0.5 + 0);
      const pts = hills[k];
      const p = new Path2D();
      p.moveTo(pts[0], 400);
      for (let i = 0; i < pts.length; i += 2) {
        const x = pts[i], y = pts[i + 1];
        const nx = pts[i + 2] !== undefined ? pts[i + 2] : x + 100;
        const ny = pts[i + 3] !== undefined ? pts[i + 3] : y;
        p.quadraticCurveTo(x, y, (x + nx) / 2, (y + ny) / 2);
      }
      p.lineTo(pts[pts.length - 2], 400);
      p.closePath();
      let col = K.mix(cols[k][0], '#e9d7c3', 0.25 * (2 - k) / 2);
      if (Wd.sky > 1.5 && Wd.sky < 2.6) col = K.mix(col, '#e7eef0', 0.6 * K.sat(1 - Math.abs(Wd.sky - 2) * 2));
      col = K.mix(col, '#d99a78', sunset * 0.35);
      K.paper(ctx, p, col, { depth: 4, line: K.shade(col, -0.18), lw: 1.2 });
      ctx.restore();
    }
    // clouds
    ctx.save();
    ctx.translate(cam.x * 0.9, cam.y * 0.45);
    for (let i = 0; i < 9; i++) {
      const x = ((i * 523 + K.time * 6) % 3200) - 1600;
      const y = -520 - (i % 3) * 70;
      const c = K.mix('#fffaf0', '#f8c9a8', sunset * 0.7);
      const p = new Path2D();
      p.ellipse(x, y, 60, 22, 0, 0, K.TAU);
      p.ellipse(x + 38, y - 12, 38, 24, 0, 0, K.TAU);
      p.ellipse(x - 34, y - 6, 30, 18, 0, 0, K.TAU);
      K.paper(ctx, p, c, { depth: 3, line: false });
    }
    ctx.restore();
  };

  // soil cutaway under everything (the diorama's base)
  Wd.drawSoil = function (ctx) {
    const v = K.cam.view();
    const x0 = v[0] - 50, x1 = v[2] + 50;
    const bands = [[0, C.soil], [70, C.soil2], [190, C.soil3], [330, C.soil4], [520, '#3b2518']];
    for (let i = 0; i < bands.length; i++) {
      const y = bands[i][0];
      ctx.fillStyle = bands[i][1];
      const p = new Path2D();
      p.moveTo(x0, y + 6);
      for (let x = Math.floor(x0 / 60) * 60; x <= x1 + 60; x += 60) p.lineTo(x, y + Math.sin(x * 0.013 + i) * 6);
      p.lineTo(x1, 2000); p.lineTo(x0, 2000); p.closePath();
      ctx.fill(p);
    }
    // pebbles in the soil
    const r = K.srand(99);
    ctx.fillStyle = 'rgba(40,25,15,0.25)';
    for (let x = Math.floor(x0 / 90) * 90; x < x1; x += 90) {
      const rr = K.srand(Math.floor(x) + 5000);
      for (let k = 0; k < 3; k++) {
        const px = x + rr() * 90, py = 30 + rr() * 520;
        ctx.beginPath(); ctx.ellipse(px, py, 3 + rr() * 6, 2 + rr() * 3, rr() * 3, 0, K.TAU); ctx.fill();
      }
    }
    r();
  };

  function drawStone(ctx, f) {
    const x0 = f.x0, x1 = f.x1;
    const col = f.concrete ? '#b9b5ae' : C.stone;
    K.paper(ctx, K.rr(x0, -2, x1 - x0, 20, 3), col, { depth: 2, lw: 1.3 });
    ctx.strokeStyle = K.shade(col, -0.25); ctx.lineWidth = 1;
    const step = f.concrete ? 120 : 46;
    for (let x = x0 + step; x < x1; x += step) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + (f.concrete ? 0 : 4), 17); ctx.stroke();
    }
    ctx.fillStyle = K.shade(col, 0.3);
    ctx.fillRect(x0 + 2, -2, x1 - x0 - 4, 3);
  }
  function drawWood(ctx, f) {
    // hollow underneath, posts, then the bending deck
    ctx.fillStyle = 'rgba(40,24,14,0.55)';
    ctx.fillRect(f.x0, 6, f.x1 - f.x0, 44);
    for (const px of f.posts) K.paper(ctx, K.rr(px - 6, 6, 12, 46, 2), C.woodD, { depth: 2 });
    const top = [], bot = [];
    for (let x = f.x0; x <= f.x1 + 0.1; x += 8) {
      const y = sagOf(f, x);
      top.push(x, y - 1); bot.push(x, y + 11);
    }
    const p = new Path2D();
    p.moveTo(top[0], top[1]);
    for (let i = 2; i < top.length; i += 2) p.lineTo(top[i], top[i + 1]);
    for (let i = bot.length - 2; i >= 0; i -= 2) p.lineTo(bot[i], bot[i + 1]);
    p.closePath();
    K.paper(ctx, p, C.wood, { depth: 3 });
    // plank seams
    ctx.strokeStyle = C.woodD; ctx.lineWidth = 1.2;
    for (let x = f.x0 + 32; x < f.x1; x += 32) {
      const y = sagOf(f, x);
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 10); ctx.stroke();
    }
    ctx.fillStyle = C.woodL;
    for (let i = 0; i < top.length - 2; i += 2) ctx.fillRect(top[i], top[i + 1] + 1, 8.5, 2);
  }
  function drawSnow(ctx, f) {
    const p = new Path2D();
    p.moveTo(f.x0, 30);
    for (let x = f.x0; x <= f.x1; x += 20) p.lineTo(x, -4 + Math.sin(x * 0.05) * 2.5);
    p.lineTo(f.x1, 30); p.closePath();
    K.paper(ctx, p, C.snow, { depth: 3, line: C.snowD });
  }
  Wd.drawFloors = function (ctx) {
    const v = K.cam.view();
    for (const f of Wd.floors) {
      if (f.under || f.x1 < v[0] - 100 || f.x0 > v[2] + 100) continue;
      if (f.surf === 'stone') drawStone(ctx, f);
      else if (f.surf === 'wood') drawWood(ctx, f);
      else if (f.surf === 'snow') drawSnow(ctx, f);
    }
  };
  Wd.drawMarks = function (ctx) {
    for (const p of Wd.puddles) {
      ctx.fillStyle = p.hot ? 'rgba(200,230,245,' + (p.a * 0.6) + ')' : 'rgba(80,150,190,' + (p.a * 0.45) + ')';
      ctx.beginPath(); ctx.ellipse(p.x, p.y + 0.5, p.r, Math.max(1.5, p.r * 0.12), 0, 0, K.TAU); ctx.fill();
    }
    for (const f of Wd.prints) {
      const age = (K.time - f.t) / 40;
      const a = f.a * (1 - age);
      ctx.fillStyle = f.surf === 'snow' ? 'rgba(150,170,190,' + a + ')' : f.surf === 'mud' ? 'rgba(40,30,20,' + a * 0.6 + ')' : 'rgba(70,110,140,' + a * 0.6 + ')';
      ctx.beginPath(); ctx.ellipse(f.x, f.y + 0.5, 7 * f.s, 1.6 + f.s * 0.9, 0, 0, K.TAU); ctx.fill();
    }
  };

  // little things that hop: pebbles, cans, birds
  Wd.drawProps = function (ctx) {
    for (const p of Wd.props) {
      const x = p.x + p.fx, y = p.base + p.y + p.fy;
      if (p.fy < -1500) continue;
      if (p.kind === 'pebble') K.paper(ctx, K.ell(x, y - 4, 6, 4.5), p.color || '#9d9486', { depth: 1.5 });
      else if (p.kind === 'can') {
        K.paper(ctx, K.rr(x - 6, y - 16, 12, 16, 2), '#b9c4c8', { depth: 2 });
        ctx.fillStyle = '#d65a44'; ctx.fillRect(x - 6, y - 12, 12, 5);
      } else if (p.kind === 'bucket') {
        K.paper(ctx, K.poly([x - 11, y - 20, x + 11, y - 20, x + 8, y, x - 8, y]), '#c9463a', { depth: 2 });
        ctx.strokeStyle = C.ironD; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.arc(x, y - 20, 10, Math.PI, 0); ctx.stroke();
      } else if (p.kind === 'bird') {
        const flap = p.fly ? Math.sin(K.time * 30) * 6 : 0;
        const dir = p.dir || 1;
        K.paper(ctx, K.ell(x, y - 7, 7, 5.5), p.color || '#6d7f96', { depth: 1.5 });
        K.circle(ctx, x + 6 * dir, y - 11, 3.8, p.color || '#6d7f96', { depth: 0 });
        K.dot(ctx, x + 7.5 * dir, y - 12, 1, '#222');
        ctx.fillStyle = '#e6a13a';
        ctx.beginPath(); ctx.moveTo(x + 9.5 * dir, y - 11.5); ctx.lineTo(x + 13 * dir, y - 10.5); ctx.lineTo(x + 9.5 * dir, y - 9.5); ctx.fill();
        K.paper(ctx, K.ell(x - 2 * dir, y - 8 - flap, 5, 2.5, -0.4 * dir), K.shade(p.color || '#6d7f96', -0.15), { depth: 0 });
      } else if (p.kind === 'flower') {
        K.line(ctx, [x, y, x, y - 14], 1.6, C.grassD);
        for (let i = 0; i < 5; i++) {
          const a = (i / 5) * K.TAU;
          K.dot(ctx, x + Math.cos(a) * 3.3, y - 16 + Math.sin(a) * 3.3, 2.6, p.color || '#f5b8c4');
        }
        K.dot(ctx, x, y - 16, 2, '#f4d35e');
      }
    }
  };
  // grass tufts in the foreground
  Wd.drawTufts = function (ctx, x0, x1, y, col) {
    ctx.fillStyle = col || C.grassD;
    const r = K.srand(Math.floor(x0));
    for (let x = x0; x < x1; x += 20 + r() * 30) {
      const h = 6 + r() * 8;
      ctx.beginPath();
      ctx.moveTo(x - 5, y); ctx.lineTo(x - 2, y - h); ctx.lineTo(x, y - 2); ctx.lineTo(x + 3, y - h * 1.2); ctx.lineTo(x + 5, y);
      ctx.fill();
    }
  };
})();
