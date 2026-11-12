// ゲーム状態と固定刻みの更新(純粋 JS、three.js 非依存)。
// 見た目は view 側がこの状態を読んで作る。音や演出のきっかけは state.events に積む。
import { PIECE_COUNT, SLOT_COUNT, slotU, globalToPiece, smoothstep, clamp } from './route.js';
import { TAG_HOMES, TAG_COUNT, GIRL_START, POD_FLOOR, END_LOOKUP_SPOT, SNAIL } from './layout.js';
import { sideEase, sagInfo, BALL_R } from './shape.js';
import { SNAIL_START_D } from './snailpath.js';

export const STEP = 1 / 30;
export const T = {
  firstCure: 0.8,
  secondCure: 1.2,
  maxConcurrent: 3,
  ballSpeed: 0.3,
  slideSeconds: 18,
  girlSpeed: 3.0,
  pickSeconds: 0.38,
  throwSeconds: 0.55,
  throwRelease: 0.28,
  hopBackSeconds: 0.45,
  sideGrowSeconds: 1.6,
  podDownSeconds: 2.6,
  boardSeconds: 1.0,
  turnSeconds: SNAIL.turnSeconds,
  hintIdleSeconds: 14,
};

// 支持済みの端同士が近い所に自動で伸びる細い横道(タグを消費しない)
export const SIDE_PATHS = [
  { a: { piece: 0, u: 1 }, b: { piece: 2, u: 1 }, needA: [0, 1], needB: [2, 3] },
  { a: { piece: 5, u: 0.5 }, b: { piece: 7, u: 0.5 }, needA: [5], needB: [7] },
  { a: { piece: 5, u: 1 }, b: { piece: 7, u: 1 }, needA: [5, 6], needB: [7, 8] },
];

export function createState(route) {
  const st = {
    t: 0,
    phase: 'intro', // intro | play | finale | end
    selected: -1,
    tags: TAG_HOMES.map((h, i) => ({ id: i, state: 'floor', slot: -1, carry: 'home', carryT: 0, hop: null })),
    slots: [],
    pieces: [],
    cureQueue: [],
    balls: [],
    flights: [],
    girl: {
      x: GIRL_START.x, z: GIRL_START.z, rot: GIRL_START.rot,
      actions: [], holding: -1,
      pose: 'idle', poseT: 0, walkPhase: 0, speed: 0,
      throwAt: null, // {x,y,z} 投げる先の名目位置
      slideS: -1, ride: null, lookUp: 0,
    },
    snail: { d: 0, speed: SNAIL.speed, mode: 'walk', turnT: 0, after: 0, frozenD: null },
    finale: null,
    tilt: new Array(PIECE_COUNT + 1).fill(0),
    rootPull: [0, 0, 0],
    pod: { drop: 0, carry: false }, // drop: 0=始点 / 1=床
    sidePaths: SIDE_PATHS.map((sp, i) => ({ id: i, active: false, grow: 0 })),
    hint: { active: false, t0: 0, tag: -1, slot: -1, lastInput: 0 },
    events: [],
    stats: { commits: 0, ignored: 0, linkUpdates: 0 },
  };
  for (let s = 0; s < SLOT_COUNT; s++) st.slots.push({ id: s, piece: s >> 1, side: s & 1, u: slotU(s), tag: -1, stuck: false, stuckAt: -1 });
  for (let i = 0; i < PIECE_COUNT; i++) {
    st.pieces.push({
      id: i, group: Math.floor(i / 3),
      prev: i > 0 ? i - 1 : -1, next: i < PIECE_COUNT - 1 ? i + 1 : -1,
      slots: [2 * i, 2 * i + 1], tagIds: [-1, -1],
      support: 0, attach: 0, cure: 0, curing: false,
      sideProg: [0, 0], sideKind: [0, 0], sideState: ['none', 'none'],
      linkPrev: false, linkNext: false, completedAt: -1,
      ball: i, // この片に最初から留まっている空気の玉
    });
  }
  for (let i = 0; i < PIECE_COUNT; i++) st.balls.push({ id: i, piece: i, u: 0.5, mode: 'rest', modeT: 0, moving: false, arrive: i, scale: 1 });
  st.snail.d = initialSnailD();
  st.route = route;
  // 玉の初期休止位置
  for (const b of st.balls) b.u = sagInfo([0, 0]).peak;
  return st;
}

function initialSnailD() {
  return SNAIL_START_D; // 楕円の弧長(手前中央付近から左へ歩く)
}

const ev = (st, type, data) => st.events.push({ type, t: st.t, ...data });

// ---------- 操作 ----------
export function startGame(st) {
  if (st.phase !== 'intro') return false;
  st.phase = 'play';
  st.hint = { active: true, t0: st.t, tag: 14, slot: 16, lastInput: st.t };
  ev(st, 'start');
  return true;
}

export function canSelect(st, tagId) {
  return st.phase === 'play' && st.tags[tagId] && st.tags[tagId].state === 'floor';
}

export function selectTag(st, tagId) {
  st.hint.lastInput = st.t;
  if (!canSelect(st, tagId)) { st.stats.ignored++; return false; }
  if (st.selected >= 0) returnSelected(st, false);
  const tag = st.tags[tagId];
  tag.state = 'selected';
  st.selected = tagId;
  st.hint.active = false;
  const h = TAG_HOMES[tagId];
  // 少女が拾いに行く(タグの手前で止まる)
  const g = st.girl;
  const dx = h.x - g.x, dz = h.z - g.z;
  const dl = Math.hypot(dx, dz) || 1;
  const stop = Math.min(0.45, dl);
  g.actions.push({ type: 'goto', tag: tagId, x: h.x - (dx / dl) * stop, z: h.z - (dz / dl) * stop });
  g.actions.push({ type: 'pick', tag: tagId, t: 0 });
  ev(st, 'select', { tag: tagId });
  return true;
}

// 選択中のタグを床へ返す(再タップ・中断)
export function returnSelected(st, instant) {
  const id = st.selected;
  if (id < 0) return false;
  const tag = st.tags[id];
  const g = st.girl;
  g.actions = g.actions.filter((a) => !((a.type === 'goto' || a.type === 'pick') && a.tag === id));
  if (g.holding === id) g.holding = -1;
  tag.state = 'floor';
  tag.slot = -1;
  if (tag.carry === 'hands' && !instant) {
    tag.carry = 'hopback';
    tag.carryT = 0;
    tag.hop = { from: handPos(g) };
  } else {
    tag.carry = 'home';
    tag.hop = null;
  }
  st.selected = -1;
  ev(st, 'deselect', { tag: id });
  return true;
}

export function isSlotOpen(st, slotId) {
  const s = st.slots[slotId];
  return !!s && s.tag === -1;
}

// 貼付: 選択タグを指定のくぼみへ。重複や不正は無視して false
export function attachSelected(st, slotId, nominalTarget) {
  st.hint.lastInput = st.t;
  if (st.phase !== 'play' || st.selected < 0 || !isSlotOpen(st, slotId)) { st.stats.ignored++; return false; }
  const id = st.selected;
  const tag = st.tags[id];
  const slot = st.slots[slotId];
  slot.tag = id;
  tag.state = 'attached';
  tag.slot = slotId;
  st.selected = -1;
  st.pieces[slot.piece].tagIds[slot.side] = id;
  st.girl.actions.push({ type: 'throw', tag: id, slot: slotId, t: 0, target: nominalTarget || null });
  st.stats.commits++;
  ev(st, 'commit', { tag: id, slot: slotId });
  return true;
}

// 中断(画面非表示・入力の中断): 選択を解除し未使用タグを床へ。貼付済みと途中支持は保持
export function interrupt(st) {
  if (st.selected >= 0) returnSelected(st, true);
  for (const tag of st.tags) {
    if (tag.state === 'floor' && tag.carry !== 'home') { tag.carry = 'home'; tag.hop = null; }
  }
  const g = st.girl;
  g.actions = g.actions.filter((a) => a.type === 'throw' || a.type === 'finale');
  if (g.holding >= 0 && st.tags[g.holding].state !== 'attached') g.holding = -1;
}

// 何も持たずに粘液へ触れた時: 近い床のタグとそのくぼみが同じリズムで誘う
export function requestHint(st, slotId) {
  if (st.phase !== 'play' || st.selected >= 0) return false;
  let best = -1, bd = Infinity;
  const target = st.slots[slotId];
  if (!target || target.tag >= 0) return false;
  const nx = st.route ? st.route.connPoint(target.piece, null).x : 0;
  for (const t of st.tags) {
    if (t.state !== 'floor' || t.carry !== 'home') continue;
    const d = Math.abs(TAG_HOMES[t.id].x - nx);
    if (d < bd) { bd = d; best = t.id; }
  }
  if (best < 0) return false;
  st.hint = { active: true, t0: st.t, tag: best, slot: slotId, lastInput: st.t };
  return true;
}

export function replaySlide(st) {
  if (st.phase !== 'end') return false;
  st.phase = 'finale';
  st.finale = { stage: 'podDown', t0: st.t, replay: true };
  st.girl.lookUp = 0;
  ev(st, 'replay');
  return true;
}

// ---------- 更新 ----------
function handPos(g) {
  return { x: g.x + Math.sin(g.rot) * 0.18, y: 0.82, z: g.z + Math.cos(g.rot) * 0.18 };
}
function faceTo(g, x, z, dt, rate) {
  const want = Math.atan2(x - g.x, z - g.z);
  let d = want - g.rot;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  const k = Math.min(1, rate * dt);
  g.rot += d * k;
  return Math.abs(d);
}

function updateGirl(st, dt) {
  const g = st.girl;
  g.poseT += dt;
  const a = g.actions[0];
  if (!a) {
    g.speed = 0;
    if (g.pose === 'walk') { g.pose = 'idle'; g.poseT = 0; }
    return;
  }
  if (a.type === 'goto') {
    const dx = a.x - g.x, dz = a.z - g.z;
    const d = Math.hypot(dx, dz);
    if (g.pose !== 'walk') { g.pose = 'walk'; g.poseT = 0; }
    faceTo(g, a.x, a.z, dt, 9);
    const v = Math.min(T.girlSpeed, 0.6 + d * 4);
    const step = Math.min(d, v * dt);
    if (d > 1e-4) { g.x += (dx / d) * step; g.z += (dz / d) * step; }
    g.speed = v;
    g.walkPhase += step * 3.4;
    if (d < 0.02) { g.actions.shift(); g.speed = 0; }
    return;
  }
  if (a.type === 'pick') {
    if (g.pose !== 'pick') { g.pose = 'pick'; g.poseT = 0; }
    g.speed = 0;
    const h = TAG_HOMES[a.tag];
    faceTo(g, h.x, h.z, dt, 10);
    a.t += dt;
    const tag = st.tags[a.tag];
    if (tag.carry === 'hopback') return; // 床へ戻る途中なら着地を待つ
    if (a.t >= T.pickSeconds * 0.55 && tag.carry === 'home') {
      tag.carry = 'hands';
      g.holding = a.tag;
      ev(st, 'pick', { tag: a.tag });
    }
    if (a.t >= T.pickSeconds) { g.actions.shift(); g.pose = 'idle'; g.poseT = 0; }
    return;
  }
  if (a.type === 'throw') {
    const tag = st.tags[a.tag];
    // 手に無ければ(中断などで拾う予定が消えた場合)その場へ拾いに行く
    if (tag.carry === 'home' || tag.carry === 'hopback') {
      const h = TAG_HOMES[a.tag];
      const dx = h.x - g.x, dz = h.z - g.z;
      const dl = Math.hypot(dx, dz) || 1;
      const stop = Math.min(0.45, dl);
      g.actions.unshift({ type: 'pick', tag: a.tag, t: 0 });
      if (dl > 0.5) g.actions.unshift({ type: 'goto', tag: a.tag, x: h.x - (dx / dl) * stop, z: h.z - (dz / dl) * stop });
      return;
    }
    if (g.pose !== 'throw') { g.pose = 'throw'; g.poseT = 0; }
    g.speed = 0;
    const tg = a.target || { x: g.x, y: 4, z: g.z - 3 };
    g.throwAt = tg;
    faceTo(g, tg.x, tg.z, dt, 10);
    a.t += dt;
    if (a.t >= T.throwRelease && tag.carry === 'hands') {
      const from = handPos(g);
      from.y = 1.25;
      const dist = Math.hypot(tg.x - from.x, tg.y - from.y, tg.z - from.z);
      const dur = 0.9 + 0.045 * dist;
      st.flights.push({ tag: a.tag, slot: a.slot, t0: st.t, dur, from });
      tag.carry = 'flight';
      tag.carryT = 0;
      if (g.holding === a.tag) g.holding = -1;
      ev(st, 'throw', { tag: a.tag, slot: a.slot });
    }
    if (a.t >= T.throwSeconds) { g.actions.shift(); g.pose = 'idle'; g.poseT = 0; }
    return;
  }
  if (a.type === 'finale') {
    // 終幕中の少女は updateFinale が動かす
    return;
  }
  g.actions.shift();
}

function updateTags(st, dt) {
  for (const tag of st.tags) {
    if (tag.carry === 'hopback') {
      tag.carryT += dt / T.hopBackSeconds;
      if (tag.carryT >= 1) { tag.carry = 'home'; tag.hop = null; tag.carryT = 0; }
    }
  }
  // 到着順(同時なら投げた順)に処理する
  const landed = [];
  for (const f of st.flights) {
    st.tags[f.tag].carryT = clamp((st.t - f.t0) / f.dur, 0, 1);
    if (st.t - f.t0 >= f.dur) landed.push(f);
  }
  if (landed.length) st.flights = st.flights.filter((f) => !landed.includes(f));
  for (const f of landed) {
    const tag = st.tags[f.tag];
    {
      tag.carry = 'stuck';
      const slot = st.slots[f.slot];
      slot.stuck = true;
      slot.stuckAt = st.t;
      const pc = st.pieces[slot.piece];
      pc.attach = Math.min(1, pc.attach + 0.5);
      pc.sideState[slot.side] = 'queued';
      st.cureQueue.push({ piece: slot.piece, side: slot.side });
      ev(st, 'stick', { tag: f.tag, slot: f.slot });
    }
  }
}

function activePieceCount(st) {
  let n = 0;
  for (const pc of st.pieces) if (pc.sideState[0] === 'active' || pc.sideState[1] === 'active') n++;
  return n;
}

function updateCure(st, dt) {
  // 進行中
  for (const pc of st.pieces) {
    for (let s = 0; s < 2; s++) {
      if (pc.sideState[s] !== 'active') continue;
      const dur = pc.sideKind[s] === 2 ? T.secondCure : T.firstCure;
      pc.sideProg[s] = Math.min(1, pc.sideProg[s] + dt / dur);
      if (pc.sideProg[s] >= 1) {
        pc.sideState[s] = 'done';
        pc.support = Math.min(2, pc.support + 1);
        ev(st, 'sideDone', { piece: pc.id, side: s, support: pc.support });
        if (pc.support === 2) completePiece(st, pc);
      }
    }
    pc.cure = 0.5 * (pc.sideProg[0] + pc.sideProg[1]);
    pc.curing = pc.sideState[0] === 'active' || pc.sideState[1] === 'active';
  }
  // 待ち行列を順に(同時硬化は三片まで、同じ片は一側ずつ)
  for (let k = 0; k < st.cureQueue.length; k++) {
    const job = st.cureQueue[k];
    const pc = st.pieces[job.piece];
    if (pc.curing) continue;
    if (activePieceCount(st) >= T.maxConcurrent) break;
    const other = 1 - job.side;
    pc.sideKind[job.side] = pc.sideState[other] === 'done' ? 2 : 1;
    pc.sideState[job.side] = 'active';
    pc.curing = true;
    st.cureQueue.splice(k, 1);
    k--;
    ev(st, 'cureStart', { piece: pc.id, side: job.side, kind: pc.sideKind[job.side] });
  }
}

function completePiece(st, pc) {
  pc.completedAt = st.t;
  // 接続は片の支持完了時に一度だけ更新
  const prev = pc.prev >= 0 ? st.pieces[pc.prev] : null;
  const next = pc.next >= 0 ? st.pieces[pc.next] : null;
  pc.linkPrev = !!(prev && prev.support === 2);
  pc.linkNext = !!(next && next.support === 2);
  if (prev && pc.linkPrev) prev.linkNext = true;
  if (next && pc.linkNext) next.linkPrev = true;
  st.stats.linkUpdates++;
  ev(st, 'complete', { piece: pc.id });
  // 横道
  const done = (i) => st.pieces[i].support === 2;
  SIDE_PATHS.forEach((sp, i) => {
    const s = st.sidePaths[i];
    if (s.active) return;
    if (sp.needA.some(done) && sp.needB.some(done)) {
      s.active = true;
      ev(st, 'sidePath', { id: i });
    }
  });
  if (st.pieces.every((p) => p.support === 2) && st.phase === 'play') {
    st.phase = 'finale';
    if (st.selected >= 0) returnSelected(st, false);
    st.finale = { stage: 'wait', t0: st.t, replay: false };
    ev(st, 'allHealthy');
  }
}

function updateSidePaths(st, dt) {
  for (const s of st.sidePaths) if (s.active && s.grow < 1) s.grow = Math.min(1, s.grow + dt / T.sideGrowSeconds);
}

function updateBalls(st, dt) {
  const route = st.route;
  // 片ごとの休止順
  const resting = new Map();
  for (const b of st.balls) {
    if (b.mode === 'pop' || b.mode === 'spawn') continue;
    const pc = st.pieces[b.piece];
    const sg = sagInfo(sideEase(pc));
    if (!sg.flowing) {
      if (!resting.has(b.piece)) resting.set(b.piece, []);
      resting.get(b.piece).push(b);
    }
  }
  for (const list of resting.values()) list.sort((a, b) => a.arrive - b.arrive);
  for (const b of st.balls) {
    b.modeT += dt;
    if (b.mode === 'pop') {
      b.scale = Math.max(0, 1 - b.modeT / 0.35);
      if (b.modeT >= 0.5) {
        b.mode = 'spawn'; b.modeT = 0; b.piece = 0; b.u = 0.02; b.scale = 0; b.arrive = st.t;
      }
      b.moving = false;
      continue;
    }
    if (b.mode === 'spawn') {
      b.scale = Math.min(1, b.modeT / 0.6);
      b.moving = false;
      if (b.modeT >= 0.6) { b.mode = 'rest'; b.modeT = 0; }
      continue;
    }
    const pc = st.pieces[b.piece];
    const len = route.pieces[b.piece].len;
    const sg = sagInfo(sideEase(pc));
    const prevU = b.u;
    if (sg.flowing) {
      b.mode = 'roll';
      b.u += (T.ballSpeed * dt) / len;
      if (b.u >= 1) {
        if (pc.next < 0) {
          b.mode = 'pop'; b.modeT = 0; b.u = 1;
          ev(st, 'ballPop', { ball: b.id });
        } else {
          b.u = (b.u - 1) * len / route.pieces[pc.next].len;
          b.piece = pc.next;
          b.arrive = st.t;
        }
      }
    } else {
      const list = resting.get(b.piece) || [b];
      const rank = Math.max(0, list.indexOf(b));
      const target = clamp(sg.peak - (rank * 2.15 * BALL_R) / len, 0.04, 0.96);
      const du = target - b.u;
      const dist = Math.abs(du) * len;
      const v = Math.min(T.ballSpeed, 0.05 + dist * 1.6);
      const stepU = (Math.min(dist, v * dt) / len) * Math.sign(du);
      b.u += stepU;
      b.mode = Math.abs(du) * len > 0.004 ? 'settle' : 'rest';
    }
    b.moving = Math.abs(b.u - prevU) * len > 1e-4;
  }
}

function updateSnail(st, dt) {
  const s = st.snail;
  if (s.mode === 'walk') s.d += s.speed * dt;
  else if (s.mode === 'stopping') {
    s.speed = Math.max(0, s.speed - (SNAIL.speed / 1.0) * dt);
    s.d += s.speed * dt;
    if (s.speed <= 0) { s.mode = 'stopped'; s.speed = 0; }
  } else if (s.mode === 'turn') {
    s.turnT = Math.min(1, s.turnT + dt / T.turnSeconds);
    if (s.turnT >= 1) { s.mode = 'after'; s.after = 0; }
  } else if (s.mode === 'after') {
    s.after += SNAIL.speed * dt;
    if (s.after >= 2.4) s.mode = 'rest';
  }
}

// 滑走の速度分布(傾き後の道で、勾配が急なほど速く)
function buildSlideProfile(st) {
  const route = st.route;
  const N = 400;
  const tilt = st.tilt;
  const sp = [];
  let tsum = 0;
  for (let k = 0; k < N; k++) {
    const S = ((k + 0.5) / N) * route.total;
    const { i, u } = globalToPiece(route, S);
    const slope = -route.slopeAt(i, u, tilt);
    const v = 0.6 + 6.0 * Math.max(0, slope);
    sp.push(v);
    tsum += route.total / N / v;
  }
  const scale = tsum / T.slideSeconds;
  return { N, v: sp.map((v) => v * scale) };
}

function updateFinale(st, dt) {
  const f = st.finale;
  if (!f) return;
  const g = st.girl;
  const tau = st.t - f.t0;
  const next = (stage) => { f.stage = stage; f.t0 = st.t; ev(st, 'finaleStage', { stage }); };
  switch (f.stage) {
    case 'wait':
      if (tau >= 0.8) { st.snail.mode = 'stopping'; next('stop'); }
      break;
    case 'stop':
      if (tau >= 1.1) next('podDown');
      break;
    case 'podDown': {
      st.pod.drop = smoothstep(0, 1, tau / T.podDownSeconds);
      // 少女は乗り場の手前へ歩く
      if (!f.walking) {
        f.walking = true;
        g.actions = [{ type: 'goto', tag: -1, x: POD_FLOOR.x + 0.35, z: POD_FLOOR.z + 0.8 }, { type: 'finale' }];
        g.lookUp = 0;
      }
      if (tau >= T.podDownSeconds && g.actions[0] && g.actions[0].type === 'finale') {
        next('board');
        g.pose = 'board'; g.poseT = 0;
      }
      break;
    }
    case 'board': {
      faceToInstant(g, POD_FLOOR.x, POD_FLOOR.z);
      g.ride = { k: smoothstep(0, 1, tau / T.boardSeconds) }; // 乗り込み
      if (tau >= T.boardSeconds) {
        g.pose = 'sit'; g.poseT = 0;
        st.pod.carry = true;
        if (f.replay) next('lift'); else { st.snail.mode = 'turn'; st.snail.turnT = 0; next('turn'); }
      }
      break;
    }
    case 'turn':
    case 'lift': {
      // 付け根から順に伝わる: 付け根が縮み → 乗り場が上がる → 接続点の高さが順に補間
      const turning = f.stage === 'turn';
      for (let r = 0; r < 3; r++) st.rootPull[r] = smoothstep(0.2 + r * 0.35, 1.4 + r * 0.35, tau) * (turning ? 1 : 0.6) * (1 - smoothstep(3.6, 5.2, tau) * 0.6);
      st.pod.drop = 1 - smoothstep(0.5, 3.8, tau);
      if (turning) {
        for (let k = 0; k <= PIECE_COUNT; k++) st.tilt[k] = Math.max(st.tilt[k], smoothstep(0, 1, (tau - 0.7 - 0.32 * k) / 1.8));
      }
      const doneT = turning ? 0.7 + 0.32 * PIECE_COUNT + 1.8 + 0.3 : 4.1;
      if (tau >= doneT) {
        for (let k = 0; k <= PIECE_COUNT; k++) st.tilt[k] = 1;
        st.pod.drop = 0;
        f.profile = buildSlideProfile(st);
        g.slideS = 0;
        g.pose = 'slide'; g.poseT = 0;
        next('slide');
      }
      break;
    }
    case 'slide': {
      const route = st.route;
      const pr = f.profile;
      const k = clamp(Math.floor((g.slideS / route.total) * pr.N), 0, pr.N - 1);
      const v = pr.v[k];
      g.slideS = Math.min(route.total, g.slideS + v * dt);
      g.slideV = v;
      st.pod.carry = g.slideS < 0.5;
      if (g.slideS >= route.total) {
        const end = route.connPoint(PIECE_COUNT, st.tilt);
        g.x = end.x + end.tx * 0.9; g.z = end.z + end.tz * 0.9;
        g.rot = Math.atan2(end.tx, end.tz);
        g.slideS = -1; g.slideV = 0;
        g.pose = 'stand'; g.poseT = 0;
        g.actions = [{ type: 'goto', tag: -1, x: END_LOOKUP_SPOT.x, z: END_LOOKUP_SPOT.z }, { type: 'finale' }];
        next('landing');
      }
      break;
    }
    case 'landing': {
      if (tau >= 0.7 && g.pose === 'stand') { g.pose = 'idle'; }
      if (g.actions[0] && g.actions[0].type === 'finale') {
        // 天井を見上げる
        faceTo(g, -1.0, -2.5, dt, 3);
        g.lookUp = Math.min(1, g.lookUp + dt / 1.2);
        if (g.lookUp >= 1) {
          g.actions = [];
          st.phase = 'end';
          g.pose = 'look'; g.poseT = 0;
          st.finale = { stage: 'done', t0: st.t, replay: f.replay };
          ev(st, 'end');
        }
      }
      break;
    }
    case 'done':
      break;
  }
}

function faceToInstant(g, x, z) {
  g.rot = Math.atan2(x - g.x, z - g.z);
}

function updateHint(st) {
  if (st.phase !== 'play') { st.hint.active = false; return; }
  if (st.selected >= 0) { st.hint.active = false; return; }
  if (!st.hint.active && st.t - st.hint.lastInput > T.hintIdleSeconds) {
    // 床に残っているタグと、空いているくぼみの組を選び直す
    const tag = st.tags.findIndex((t) => t.state === 'floor' && t.carry === 'home');
    let slot = -1;
    for (let s = SLOT_COUNT - 1; s >= 0; s--) if (st.slots[s].tag === -1) { slot = s; break; }
    if (tag >= 0 && slot >= 0) st.hint = { active: true, t0: st.t, tag, slot, lastInput: st.hint.lastInput };
  }
  if (st.hint.active && st.t - st.hint.t0 > 7.5) {
    st.hint.active = false;
    st.hint.lastInput = st.t; // 次の誘導まで再び待つ
  }
}

export function step(st, dt = STEP) {
  st.t += dt;
  updateGirl(st, dt);
  updateTags(st, dt);
  updateCure(st, dt);
  updateSidePaths(st, dt);
  updateBalls(st, dt);
  updateSnail(st, dt);
  updateFinale(st, dt);
  updateHint(st);
}

// ---------- 検査用 ----------
export function tagCounts(st) {
  const c = { floor: 0, selected: 0, attached: 0, other: 0 };
  for (const t of st.tags) c[t.state] !== undefined ? c[t.state]++ : c.other++;
  return c;
}
export function checkInvariants(st) {
  const errs = [];
  const c = tagCounts(st);
  if (c.floor + c.selected + c.attached !== TAG_COUNT || c.other) errs.push('tag count ' + JSON.stringify(c));
  if (c.selected > 1) errs.push('multiple selected');
  if (c.selected === 1 && st.tags[st.selected].state !== 'selected') errs.push('selected mismatch');
  const used = new Set();
  for (const s of st.slots) {
    if (s.tag >= 0) {
      if (used.has(s.tag)) errs.push('tag used twice ' + s.tag);
      used.add(s.tag);
      if (st.tags[s.tag].state !== 'attached' || st.tags[s.tag].slot !== s.id) errs.push('slot/tag mismatch ' + s.id);
    }
  }
  for (const t of st.tags) if (t.state === 'attached' && st.slots[t.slot].tag !== t.id) errs.push('attached tag without slot ' + t.id);
  if (activePieceCount(st) > T.maxConcurrent) errs.push('too many curing');
  return errs;
}
