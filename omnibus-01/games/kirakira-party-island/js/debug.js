// テスト用の観測窓。本番のゲーム進行は1ミリも変えない。
//
//  - snapshot() … いまの状態を JSON で1回だけ読む(副作用なし・Three.js の実体は出さない)
//  - dbg.push() … 200件のリングバッファ。入力の受理/拒否・状態遷移・結果反映・終了を記録する
//  - applyScenario() … 「既知の整合状態を用意する」だけ。進行そのものは board.start() の本番コードが通す
//
// ?event= / ?scenario= / ?seed= / ?turbo= のどれも無いときは何も公開しない。

import { CONFIG, DEBUG, zoneOfTile } from './config.js';

// 何かしらテスト用パラメータが付いているときだけ記録する
const ENABLED = !!(DEBUG.forceEvent || DEBUG.scenario
  || (DEBUG.seed != null && DEBUG.seed !== '') || CONFIG.TURBO !== 1);

// ============ イベントログ(リングバッファ) ============
const LOG_MAX = 200;
const buf = [];

export const dbg = {
  /** ログを取っているか。重い値を作る前に見る */
  on: ENABLED,
  /** @param {{kind:string, id?:string, from?:string, to?:string, why?:string, chars?:any}} e */
  push(e) {
    if (!ENABLED) return;
    buf.push({ t: Math.round(performance.now()), ...e });
    if (buf.length > LOG_MAX) buf.shift();
  },
  /** 直近 n 件(古い順)。n 省略で全部 */
  log(n) { return n ? buf.slice(-n) : buf.slice(); },
  clear() { buf.length = 0; },
};

// ============ snapshot ============
// installDebugApi が入れる参照。ここが唯一の可変状態で、ゲーム側は読まない。
let refs = null;

const hidden = (el) => !!el?.classList?.contains('hidden');

function phaseOf(board, mgManager) {
  if (mgManager?.active) return 'minigame';
  if (board?._activeWorldEvent) return 'worldevent';
  if (board?._finaleRaining) return 'finale';
  if (board?.running) return 'board';
  return 'title';
}

// いま何を待っているか。既存の値から導くだけで、新しい状態は持たない。
function waitingFor(board, mgManager) {
  if (mgManager?.active) return 'timer';
  if (board?._diceResolver) return 'dice-tap';   // プレイヤーの 🎲 待ち(#btn-dice)
  if (board?.tapHandler) return 'event-tap';     // イベント中のタップ待ち(#tap-layer)
  if (board?.dragHandler) return 'drag';         // イベント中のよこドラッグ待ち(#tap-layer)
  if (board?.tweens?.list?.length) return 'tween';
  return null;
}

// 島の頂点カラーが _baseColors から どれだけ離れているか(0 なら既定色)。
// 17,689頂点を毎回なめると重いので 128点だけ拾う。
function paintDrift(world) {
  const attr = world?.islandGeo?.attributes?.color;
  const base = world?._baseColors;
  if (!attr || !base) return null;
  const arr = attr.array;
  const step = Math.max(3, Math.floor(arr.length / 128 / 3) * 3);
  let max = 0;
  for (let i = 0; i < arr.length; i += step) {
    max = Math.max(max, Math.abs(arr[i] - base[i]));
  }
  return Number(max.toFixed(4));
}

/** 副作用のない JSON スナップショット。参照が未設定なら null。 */
export function snapshot() {
  if (!refs) return null;
  const { board, world, chars, ui, mgManager } = refs;
  const ev = board?._activeWorldEvent || null;
  const group = world?.islandGroup;
  return {
    phase: phaseOf(board, mgManager),
    round: board?.round ?? null,
    rounds: CONFIG.ROUNDS,
    turn: board?._activeChar?.def?.id ?? null,
    event: {
      id: ev?.id ?? null,
      stage: ev?.stage ?? null,
      state: ev?.state ?? null,
    },
    input: {
      tapHandler: !!board?.tapHandler,
      dragHandler: !!board?.dragHandler,
      tapLayerVisible: !hidden(ui?.tapLayer),
      diceVisible: !hidden(ui?.diceBtn),
      waitingFor: waitingFor(board, mgManager),
    },
    pending: {
      tweens: board?.tweens?.list?.length ?? 0,
      onRoundEnd: !!board?._pendingRoundEnd,
      deferredEvent: !!board?._deferredEvent,
      ownedMeshes: ev?._disposables?.length ?? 0,
    },
    chars: (chars || []).map((c) => ({
      id: c.def.id, tileIndex: c.tileIndex, coins: c.coins, stars: c.stars, form: c.form,
    })),
    world: {
      warp: { ...(world?.islandWarp || {}) },
      seaY: world?.sea?.position?.y ?? null,
      weather: world?.weatherName ?? null,
      groupSettled: !!group
        && group.position.lengthSq() < 1e-6
        && Math.abs(group.rotation.x) + Math.abs(group.rotation.y)
         + Math.abs(group.rotation.z) < 1e-4
        && Math.abs(group.scale.x - 1) + Math.abs(group.scale.y - 1)
         + Math.abs(group.scale.z - 1) < 1e-4,
      paintDrift: paintDrift(world),
    },
  };
}

// ============ シナリオ ============
// **状態を用意するだけ**。_worldEvent / _finale は呼ばない。
// board.start() のラウンドループを飛ばしたいときは _scenarioStartRound に
// CONFIG.ROUNDS + 1 を入れる。そのあとの流れは本番コードが そのまま通る。
export const SCENARIOS = {
  // 最終ラウンドを遊びおえた直後。ここから _worldEvent(0) → 🎲 → _finale が本番経路で走る。
  // コインは実プレイのログ(play-phase4-r5b.log)の finale 時点の実測値である。
  'wheel-finale': (board) => {
    const { chars, ui, world } = board.ctx;
    const coins = [45, 48, 36, 35];
    const stars = [0, 1, 0, 0];
    chars.forEach((c, i) => {
      c.coins = coins[i % coins.length];
      c.stars = stars[i % stars.length];
      ui.updatePlayer(c);
    });
    world.setWeather('sunset');
    ui.setRound(CONFIG.ROUNDS);
    board.round = CONFIG.ROUNDS;
    board._scenarioStartRound = CONFIG.ROUNDS + 1;   // ラウンドループを1周も回さない
  },
};

// ---- 汎用シナリオ `round:<id>`(抽選で発火する9イベント共通) ----
//
// ラウンド4の直前まで状態を用意し、`_worldEvent(4)` の **抽選結果だけ** を <id> にさしかえる。
// エントリ検索・usedIds・_worldEventContext・weatherOverride・try/finally・dispose は
// すべて board.js の本番経路を通る。ラウンド4の進行(イベント → 4人のターン →
// ラウンド末フック → ミニゲーム)も本番コードである。
//
// ラウンド4をえらぶ理由:
//   - 9本すべての minRound..maxRound(いちばん狭い awake が 4..4)を満たす唯一のラウンド
//   - ?rounds=6 なら ボスラウンドは ceil(6/2)=3 なので かぶらない
//   - 天気は本番のループが weatherForRound(4, 6) = 'rainbowy' を設定する(ここでは触らない)
// ?rounds=6 が要る理由: WORLD_EVENT_ROUNDS = [2 .. ROUNDS-1] にラウンド4が入り、
// かつ split の condition(rounds >= 4)を満たすため。
const ROUND_SCENARIO = {
  round: 4,
  minRounds: 6,
  // ラウンド4開始時点の4人の状態。5ラウンド通しプレイのログ
  // (scratchpad/play-phase4-r5b.log)は フィナーレ時点で 🪙[45,48,36,35] / ⭐[0,1,0,0] だった。
  // ラウンド4開始はその手前なので、ミニゲーム報酬とコインマスのぶんを差し引いた概算である。
  // **実測そのものではない**が、条件つきイベントの発火条件は満たしてある:
  //   tsunami: totalCoins(105) >= 30 / eclipse: maxStars(1) >= 1
  coins: [28, 31, 24, 22],
  stars: [0, 1, 0, 0],
  // スタートマス 0/12/24/36 から 3ラウンドぶん進んだあたり。
  tiles: [11, 23, 34, 46],
};

function applyRoundScenario(id, board) {
  if (CONFIG.ROUNDS < ROUND_SCENARIO.minRounds) {
    throw new Error(
      `scenario "round:${id}" は ?rounds=${ROUND_SCENARIO.minRounds} 以上が必要です`
      + `(いまは rounds=${CONFIG.ROUNDS})。URL に &rounds=${ROUND_SCENARIO.minRounds} を足してください。`,
    );
  }
  const { chars, ui, world } = board.ctx;
  chars.forEach((c, i) => {
    c.coins = ROUND_SCENARIO.coins[i % ROUND_SCENARIO.coins.length];
    c.stars = ROUND_SCENARIO.stars[i % ROUND_SCENARIO.stars.length];
    c.tileIndex = ROUND_SCENARIO.tiles[i % ROUND_SCENARIO.tiles.length];
    // マスを動かしたら 立ち位置も合わせる(イベントは root.position から演出を始める)
    c.root.position.copy(world.tileAnchor(c.tileIndex)).add(board._charOffset(c));
    c.land();
    c.lastZone = zoneOfTile(c.tileIndex, world.tileCount);
    ui.updatePlayer(c);
  });
  // ⭐ は start() が もとの立ち位置で置いている。動かしたので置きなおす。
  world.placeStarForPlayers(chars);
  board._scenarioStartRound = ROUND_SCENARIO.round;
  board._scenarioForceEvent = id;                 // _worldEvent(4) が1回だけ消費する
}

export const SCENARIO_NAMES = [...Object.keys(SCENARIOS), 'round:<id>'];

/** board.start() の冒頭から呼ばれる。未知の名前なら何もしない。 */
export function applyScenario(name, board) {
  const round = /^round:([a-z]+)$/.exec(name || '');
  if (round) {
    applyRoundScenario(round[1], board);
    dbg.push({ kind: 'scenario', id: name, to: 'ready', why: `force=${round[1]} round=${ROUND_SCENARIO.round}` });
    return true;
  }
  const fn = SCENARIOS[name];
  if (!fn) return false;
  fn(board);
  dbg.push({ kind: 'scenario', id: name, to: 'ready' });
  return true;
}

// ============ 公開 ============
/** main.js から1行で呼ぶ。?event= / ?scenario= / ?seed= / ?turbo= のときだけ窓を開ける。 */
export function installDebugApi(r) {
  refs = r;
  if (!ENABLED) return;
  globalThis.__kk = {
    snapshot,
    log: (n) => dbg.log(n),
    scenarios: SCENARIO_NAMES,
    turbo: CONFIG.TURBO,
  };
}
