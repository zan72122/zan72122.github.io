// Circles風 wordless パズル。文字・ボタンは一切使わない。
(function () {
  const canvas = document.getElementById('c');
  const ctx = canvas.getContext('2d');
  const A = window.GameAudio;
  const LEVELS = window.LEVELS;
  const Laws = window.Laws;
  const Map = window.StarMap;
  const STORAGE_KEY = 'circles.cleared';

  // ---------- 画面 ----------
  let W = 1, H = 1, dpr = 1;
  let box = { x0: 0, y0: 0, x1: 1, y1: 1, w: 1, h: 1, s: 1 }; // セーフエリア内の描画領域

  function readInset(name) {
    const n = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name));
    return isFinite(n) ? n : 0;
  }
  function resize() {
    const oldBox={...box};
    dpr = Math.min(window.devicePixelRatio || 1, 3);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const t = readInset('--sat'), b = readInset('--sab'), l = readInset('--sal'), r = readInset('--sar');
    box = { x0: l, y0: t, x1: W - r, y1: H - b };
    box.w = box.x1 - box.x0; box.h = box.y1 - box.y0; box.s = Math.min(box.w, box.h);
    if(level&&level.strict){
      for(const e of ents){
        e.nx=(box.w/2+(e.x-oldBox.x0-oldBox.w/2)/oldBox.s*box.s)/box.w;
        e.ny=(box.h/2+(e.y-oldBox.y0-oldBox.h/2)/oldBox.s*box.s)/box.h;
      }
      pointer.down=false;activeId=null;detached=true;
    }
    Map.layout(box, LEVELS.length);
    relayout();
  }
  const pr = (nr) => nr * box.s;
  function posOf(d) {
    if (d.cx != null) return { x: box.x0 + box.w / 2 + d.cx * box.s, y: box.y0 + box.h / 2 + d.cy * box.s };
    return { x: box.x0 + d.x * box.w, y: box.y0 + d.y * box.h };
  }
  function normOf(x, y) { return { nx: (x - box.x0) / box.w, ny: (y - box.y0) / box.h }; }

  // ---------- 状態 ----------
  let levelIndex = -1;
  let level = null;
  let ents = [];
  let player = null;
  let rings = [];
  let phase = 'map';      // map | zoomin | enter | play | cleared | celebrate | zoomout
  let phaseT = 0;
  let bgColor = Map.BG;
  let particles = [];
  let now = 0, lastTouch = 0, demoT = -1;
  const pointer = { down: false, x: 0, y: 0, vx: 0, vy: 0 };
  let detached = false;             // 渦を通った直後: 指を置き直すまで円は待つ
  const ghost = { active: false, t: 0 };
  let cleared = loadProgress();
  let mapNext = firstUncleared();   // 星空で誘う星
  let mapAuto = 4;                  // この秒数だけ無操作なら自動で入る (null で自動なし)
  let returnOnly = false;
  let mapFill = null;               // {i, t} 星が満たされる途中
  let zoomTarget = 0;               // ズーム先/元の面番号

  function loadProgress() {
    try { const v = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); if (Array.isArray(v)) return v.filter(i => i >= 0 && i < LEVELS.length); } catch (e) {}
    return [];
  }
  function saveProgress() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cleared)); } catch (e) {} }
  function firstUncleared() { for (let i = 0; i < LEVELS.length; i++) if (!cleared.includes(i)) return i; return null; }
  function ringColor(lv) {
    const r0 = lv.rings[0];
    if (r0.target === 'player') return window.COLORS.player;
    if (r0.target.color) return r0.target.color;
    if (typeof r0.target === 'string') { const it = lv.items.find(i => i.id === r0.target); return it ? it.color : window.COLORS.player; }
    const it = lv.items.find(i => i.type === r0.target.type || (r0.target.type === 'piece' && i.type === 'split'));
    return it ? it.color : window.COLORS.player;
  }
  const starColors = LEVELS.map(ringColor);

  function makeEnt(def, id, kind) {
    const p = posOf(def);
    const n = normOf(p.x, p.y);
    return {
      id, type: def.type || kind, def,
      nx: n.nx, ny: n.ny, x: p.x, y: p.y,
      r: pr(def.r || 0), baseR: def.r || 0, scale: 1,
      minScale: def.minScale || 1, maxScale: def.maxScale || 1,
      color: def.color || window.COLORS.player,
      vx: 0, vy: 0, pop: 0, touching: false, captured: false, attached: false, dead: false, wobble: 0, pull: 0, dentT: 0,
      pair: def.pair, speed: def.speed, ang: def.phase || 0, free: false, inWarp: null, ripple: 0,
    };
  }
  // 位置以外の寸法 (軌道・帯) を画面に合わせる
  function layoutExtra(e) {
    const d = e.def;
    if (e.type === 'rotor') RotatingWall.layout(e, posOf, pr);
    if (e.type === 'orbit') { const c = posOf(d); e.ox = c.x; e.oy = c.y; e.orbitR = pr(d.orbitR); if (!e.free) { e.x = e.ox + Math.cos(e.ang) * e.orbitR; e.y = e.oy + Math.sin(e.ang) * e.orbitR; } }
    if (e.type === 'flow') { const c = posOf(d); e.x = c.x; e.y = c.y; e.len = pr(d.length); e.wid = pr(d.width); const a = d.angle * Math.PI / 180; e.dirX = Math.cos(a); e.dirY = Math.sin(a); e.r = 0; }
  }

  function matches(ring, e) {
    if (e.dead || e.captured) return false;
    const t = ring.def.target;
    if (t === 'player') return e === player;
    if (typeof t === 'string') return e.id === t;
    return e.type === t.type && (!t.color || e.color === t.color);
  }

  function loadLevel(i, opts) {
    levelIndex = i;
    level = LEVELS[i];
    if(level.strict){activeId=null;pointer.down=false;detached=false;}returnOnly=false;
    bgColor = level.bg;
    document.body.style.background = bgColor;
    ents = [];
    player = makeEnt(level.player, 'player', 'player');
    ents.push(player);
    for (const d of level.items) if (!['gate','barrier','divider'].includes(d.type)) ents.push(makeEnt(d, d.id, d.type));
    rings = level.rings.map(d => ({ def: d, filled: null, glow: 0, fill: 0, x: 0, y: 0, r: 0 }));
    relayout();
    phase = opts && opts.enter ? 'enter' : 'play';
    phaseT = 0;
    for (const e of ents) e.pop = phase === 'enter' ? 0 : 1;
    ghost.active = false; demoT = -1; particles = [];
    lastTouch = now;
  }

  // 門: 画面端まで届く壁の列。縦横で隙間の幅が変わらないよう、幅に応じて壁の数を変える
  function buildGates() {
    ents = ents.filter(e => !e.gate);
    for(const d of StageGeometry.expand(level.items,box)){
      const e=makeEnt(d,d.id,'wall');e.gate=true;e.pop=1;ents.push(e);
    }
    for (const d of level.items) {
      if (d.type !== 'gate') continue;
      const half = box.w / 2 / box.s;
      for (let k = 0, o = d.gap / 2 + d.r; ; k++, o += d.r * 1.2) { // 重ねてくぼみを浅くする (円が挟まらない)
        for (const sgn of [-1, 1]) {
          const e = makeEnt({ type: 'wall', cx: sgn * o, cy: d.cy, r: d.r, color: window.COLORS.wall }, 'gate' + k + (sgn < 0 ? 'l' : 'r'), 'wall');
          e.gate = true; e.pop = 1;
          ents.push(e);
        }
        if (o + d.r >= half + 0.02) break; // 外側の縁が画面端を越えたら終わり
      }
    }
  }

  function relayout() {
    if (!level) return;
    buildGates();
    for (const e of ents) {
      e.x = box.x0 + e.nx * box.w; e.y = box.y0 + e.ny * box.h;
      e.r = pr(e.baseR) * e.scale;
      layoutExtra(e);
    }
    for (const rg of rings) {
      const d = rg.def;
      rg.r = pr(d.r);
      if (d.corner) { rg.x = box.x1 - rg.r * 1.5; rg.y = box.y0 + rg.r * 1.5; }
      else { const p = posOf(d); rg.x = p.x; rg.y = p.y; }
      if (rg.filled) { rg.filled.x = rg.x; rg.filled.y = rg.y; }
    }
  }

  // ---------- 入力 ----------
  const navState=()=>({box,levelIndex,phase,pointer,now,lastTouch});
  function returnToMap(){
    Map.show(levelIndex);zoomTarget=levelIndex;mapFill=null;mapNext=firstUncleared();
    returnOnly=true;phase='zoomout';phaseT=0;pointer.down=false;A.swell();
  }
  let activeId = null;
  canvas.addEventListener('pointerdown', (ev) => {
    if (activeId !== null) return;
    if(Navigation.hit(navState(),ev.clientX,ev.clientY)){A.unlock();returnToMap();return;}
    activeId = ev.pointerId;
    try { canvas.setPointerCapture(ev.pointerId); } catch (e) {}
    pointer.down = true; pointer.x = ev.clientX; pointer.y = ev.clientY;
    detached = false;
    lastTouch = now; ghost.active = false;
    A.unlock();
    if (phase === 'map') {
      mapAuto=null;Map.begin(ev.clientX,ev.clientY);
    } else A.touch();
  });
  canvas.addEventListener('pointermove', (ev) => {
    if (ev.pointerId !== activeId) return;
    pointer.x = ev.clientX; pointer.y = ev.clientY; lastTouch = now;
    if(phase==='map')Map.drag(ev.clientX,ev.clientY);
  });
  function up(ev) {
    if(ev.pointerId!==activeId)return;
    if(phase==='map'){const i=Map.end(ev.clientX,ev.clientY);if(i>=0&&ev.type!=='pointercancel')startZoomIn(i);}
    activeId=null;pointer.down=false;lastTouch=now;
  }
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', up);
  window.addEventListener('resize', resize);
  window.addEventListener('orientationchange', () => setTimeout(resize, 50));

  // ---------- ユーティリティ ----------
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const easeInOut = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const hexA = Laws.hexA;

  // ---------- 星空 ↔ 面 ----------
  function startZoomIn(i) {
    Map.show(i);zoomTarget = i; phase = 'zoomin'; phaseT = 0; mapAuto = null;
    A.star(); A.swell();
  }
  function finishLevel() {
    if (!cleared.includes(levelIndex)) cleared.push(levelIndex);
    saveProgress();
    Map.show(levelIndex);zoomTarget = levelIndex;
    mapFill = { i: levelIndex, t: 0 };
    mapNext = firstUncleared();
    phase = 'zoomout'; phaseT = 0;
    A.swell();
  }

  // ---------- 更新 ----------
  function update(dt) {
    const S = box.s;
    phaseT += dt;Map.update(dt);
    for (const e of ents) e.pop = Math.min(1, e.pop + dt * 2.2);

    if (phase === 'map') {
      if (mapFill) { mapFill.t += dt * 1.5; if (mapFill.t >= 1) mapFill = null; }
      const idle = now - lastTouch;
      if (mapAuto != null && mapNext != null && idle > mapAuto) startZoomIn(mapNext);
      return;
    }
    if (phase === 'zoomin') {
      if (phaseT > 0.9) { loadLevel(zoomTarget, { enter: true }); }
      return;
    }
    if (phase === 'zoomout') {
      if (phaseT > 1.0) { phase = 'map'; phaseT = 0; lastTouch = now; mapAuto = returnOnly||mapNext==null?null:3;if(!returnOnly&&mapNext!=null)Map.show(mapNext,true);returnOnly=false;level=null; document.body.style.background = Map.BG; }
      return;
    }
    if (phase === 'enter' && phaseT > 0.6) { phase = 'play'; phaseT = 0; }

    if (phase === 'play' || phase === 'enter') {
      const previous=level.strict?new globalThis.Map(ents.map(e=>[e,{x:e.x,y:e.y}])):null;
      // じぶんの円: 指についてくる
      if (pointer.down && !player.captured && !detached) {
        // 帯の中では追従が弱まり、流れに引きずられる (指を動かせば逆らえる)
        const k = 1 - Math.exp(-dt * (player.flow ? 7 : 30));
        const ox = player.x, oy = player.y;
        const tx=lerp(player.x,pointer.x,k)+(player.flow?player.flow.x*dt:0);
        const ty=lerp(player.y,pointer.y,k)+(player.flow?player.flow.y*dt:0);
        if(level.strict) SolidMove.move(player,tx,ty,ents.filter(Laws.isWall),box,
          (w,dx,dy)=>RotatingWall.push(w,dx,dy,{ents,player,rings,box,dt,now,A}));
        else {player.x=tx;player.y=ty;}
        player.vx = (player.x - ox) / dt; player.vy = (player.y - oy) / dt;
      } else { player.vx *= 0.8; player.vy *= 0.8; }

      if(level.strict&&!pointer.down)SolidMove.releaseSpace(ents,player,box,dt);
      // 法則
      const spawned = Laws.update({ ents, player, rings, box, dt, now, A, pr, matches });
      if(level.strict) SolidMove.reconcile(ents,previous,box);
      if (player.warped) { // 渦の向こうに出た: 指を置き直すまで待つ
        player.warped = false; detached = true; player.vx = player.vy = 0;
      }
      if (player.flow && !(pointer.down && !detached)) { // 指を離していると流される
        if(level.strict)SolidMove.move(player,player.x+player.flow.x*dt,player.y+player.flow.y*dt,ents.filter(Laws.isWall),box);
        else {player.x+=player.flow.x*dt;player.y+=player.flow.y*dt;}
      }
      for (const s of spawned) {
        const e = makeEnt({ type: s.type, x: 0, y: 0, r: s.baseR, color: s.color }, s.id, s.type);
        e.x = s.x; e.y = s.y; e.vx = s.vx; e.vy = s.vy; e.r = s.r; e.pop = 0.3;
        ents.push(e);
      }
      ents = ents.filter(e => !e.dead);
      player.r = pr(player.baseR) * player.scale;
      for (const e of ents) { const n = normOf(e.x, e.y); e.nx = n.nx; e.ny = n.ny; }

      // 輪: 合う円が近いと光り、入れば満たされる
      for (const rg of rings) {
        if (rg.filled) {
          rg.fill = Math.min(1, rg.fill + dt / 0.45);
          const k = 1 - Math.exp(-dt * 12);
          rg.filled.x = lerp(rg.filled.x, rg.x, k); rg.filled.y = lerp(rg.filled.y, rg.y, k); rg.filled.r = lerp(rg.filled.r, rg.r, k);
          rg.glow = 1; continue;
        }
        let best = null, bestD = Infinity;
        for (const e of ents) {
          if (!matches(rg, e)) continue;
          if (Math.abs(e.r - rg.r) >= rg.r * 0.12) continue;
          const d = dist(rg, e);
          if (d < bestD) { bestD = d; best = e; }
        }
        rg.glow = lerp(rg.glow, best ? clamp(1 - bestD / (rg.r * 3.5), 0, 1) : 0, 1 - Math.exp(-dt * 8));
        const captureR = best === player ? rg.r * 0.6 : rg.r * 1.0;
        // じぶんの円の輪は最後: 他の輪が残っている間は入らない (入ると動けなくなるため)
        const othersLeft = rings.some(o => o !== rg && !o.filled);
        if (phase === 'play' && best && bestD < captureR && !(best === player && othersLeft)) {
          best.captured = true; best.attached = false; rg.filled = best;
          const remaining = rings.filter(r => !r.filled).length;
          if (remaining === 0) { phase = 'cleared'; phaseT = 0; A.enter(); A.drone(0, 1); }
          else A.fillOne();
        }
      }
    }

    if (phase === 'cleared') {
      for (const rg of rings) if (rg.filled) {
        rg.fill = Math.min(1, rg.fill + dt / 0.45);
        const k = 1 - Math.exp(-dt * 12);
        rg.filled.x = lerp(rg.filled.x, rg.x, k); rg.filled.y = lerp(rg.filled.y, rg.y, k); rg.filled.r = lerp(rg.filled.r, rg.r, k);
      }
      if (phaseT > 0.7) {
        const allDone = cleared.length + (cleared.includes(levelIndex) ? 0 : 1) >= LEVELS.length;
        if (allDone && !cleared.includes(levelIndex)) { phase = 'celebrate'; phaseT = 0; spawnParticles(); A.celebrate(); }
        else finishLevel();
      }
    }
    if (phase === 'celebrate') {
      for (const p of particles) { p.vy += 0.9 * S * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.life -= dt; }
      if (phaseT > 2.8) { particles = []; finishLevel(); }
    }

    // 無操作時の誘い
    const idle = now - lastTouch;
    if (phase === 'play' && level.demo && !pointer.down && idle > 2.5) {
      if (demoT < 0 || now - demoT > 4.5) { demoT = now; ghost.active = true; ghost.t = 0; }
    }
    if (ghost.active) { ghost.t += dt / 1.6; if (ghost.t >= 1) ghost.active = false; }
  }

  function spawnParticles() {
    const S = box.s;
    const colors = Object.values(window.COLORS).filter(c => c !== window.COLORS.wall);
    particles = [];
    const cx = (box.x0 + box.x1) / 2, cy = (box.y0 + box.y1) / 2;
    for (let i = 0; i < 90; i++) {
      const a = Math.random() * Math.PI * 2, sp = (0.6 + Math.random() * 1.2) * S;
      particles.push({ x: cx, y: cy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 0.4 * S,
        r: (0.012 + Math.random() * 0.03) * S, color: colors[i % colors.length], life: 2 + Math.random() });
    }
  }

  function drawMap() { Map.draw(ctx, W, H, now, starColors, LEVELS.map((_, i) => cleared.includes(i)), mapNext, mapFill); }

  function draw() {
    if (phase === 'map') { drawMap(); return; }
    if (phase === 'zoomin' || phase === 'zoomout') {
      // 星空の上で、星の位置から面の背景色の円が広がる / 縮む
      const p = Map.pos()[zoomTarget];
      const maxR = Math.hypot(Math.max(p.x, W - p.x), Math.max(p.y, H - p.y)) + 10;
      const t = easeInOut(clamp(phaseT / 0.9, 0, 1));
      const r = phase === 'zoomin' ? lerp(Map.starR(), maxR, t) : lerp(maxR, Map.starR() * 0.86, t);
      if (phase === 'zoomout' && mapFill) mapFill.t = t;
      drawMap();
      ctx.fillStyle = LEVELS[zoomTarget].bg;
      ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
      if (phase === 'zoomout') { // 星の色に染まりながら小さくなる
        ctx.fillStyle = hexA(starColors[zoomTarget], t);
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.strokeStyle = hexA(starColors[zoomTarget], phase === 'zoomin' ? 1 - t : 1); ctx.lineWidth = Map.starR() * 0.2;
      ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.stroke();
      return;
    }
    GameRender.draw({ ctx, W, H, now, lastTouch, level, levelIndex, ents, player, rings, ghost, bgColor, box, phase, particles, pointer, detached, starColors });
    Navigation.draw(ctx, navState());
  }

  // ---------- ループ ----------
  let last = performance.now();
  function frame(ts) {
    const dt = Math.min(0.05, (ts - last) / 1000); last = ts; now = ts / 1000;
    update(dt); draw();
    requestAnimationFrame(frame);
  }

  resize();Map.show(mapNext==null?LEVELS.length-1:mapNext);
  document.body.style.background = Map.BG;
  lastTouch = performance.now() / 1000;
  requestAnimationFrame(frame);

  // 自動テスト用フック (文字を表示しない)
  window.__game = {
    get levelIndex() { return levelIndex; }, get phase() { return phase; }, get ents() { return ents; },
    get rings() { return rings; }, get player() { return player; }, get box() { return box; }, get ghost() { return ghost; },
    get cleared() { return cleared; }, get mapNext() { return mapNext; }, mapPos: () => Map.pos(),
    get offset() { return { x: 0, y: 0 }; }, get detached() { return detached; },
    loadLevel, matches, nav:()=>({visible:Navigation.visible(navState()),...Navigation.point(navState())}), mapPage:()=>Map.page(),
  };
})();
