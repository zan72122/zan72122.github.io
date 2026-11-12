// DOM や Three.js に依存しないゲームルール。
// ブラウザ外の単体テストでも同じ判定を再利用できるようにする。

/**
 * URL 由来の値を、安全な範囲の整数へ変換する。
 * 未指定・空文字・数値でない値は fallback を使う。
 */
export function parseBoundedInteger(rawValue, fallback, min, max) {
  if (rawValue === null || rawValue === undefined || String(rawValue).trim() === '') {
    return fallback;
  }
  const parsed = Number(rawValue);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, Math.trunc(parsed)));
}

function randomItem(items, random) {
  if (!items.length) return undefined;
  const ratio = Math.min(0.999999999, Math.max(0, random()));
  return items[Math.floor(ratio * items.length)];
}

function forwardDistance(from, to, count) {
  return ((to - from) % count + count) % count;
}

/**
 * スター数が最少のキャラを基準に、数ターン以内で届く通常コインマスを選ぶ。
 * currentIndex は現在のスター位置で、同じ場所への再配置を避けるために使う。
 */
export function chooseStarTile(
  layout,
  chars,
  currentIndex,
  random = Math.random,
  { minForward = 4, maxForward = 8 } = {},
) {
  const count = layout.length;
  const validChars = chars.filter((char) => Number.isInteger(char.tileIndex));
  const minStars = validChars.length
    ? Math.min(...validChars.map((char) => Number(char.stars) || 0))
    : 0;
  const anchors = validChars.filter((char) => (Number(char.stars) || 0) === minStars);
  const anchor = randomItem(anchors, random);

  if (anchor) {
    const nearby = [];
    for (let distance = minForward; distance <= maxForward; distance++) {
      const index = (anchor.tileIndex + distance) % count;
      if (index !== currentIndex && layout[index] === 'COIN') nearby.push(index);
    }
    const selected = randomItem(nearby, random);
    if (selected !== undefined) return selected;

    // 特殊なレイアウトでも、基準キャラの前方で最も近い通常マスを選べるようにする。
    const forwardCoins = layout
      .map((type, index) => ({ type, index }))
      .filter(({ type, index }) => type === 'COIN' && index !== currentIndex)
      .sort((a, b) =>
        forwardDistance(anchor.tileIndex, a.index, count) -
        forwardDistance(anchor.tileIndex, b.index, count));
    if (forwardCoins.length) return forwardCoins[0].index;
  }

  const anyCoin = layout
    .map((type, index) => ({ type, index }))
    .filter(({ type, index }) => type === 'COIN' && index !== currentIndex);
  return randomItem(anyCoin, random)?.index ?? currentIndex ?? 0;
}

/**
 * タコすけは目標回数に届いたときだけコインを配る。
 */
export function bossCoinReward(tickles, goal, reward) {
  return tickles >= goal ? reward : 0;
}

/**
 * 島変貌イベントを1本えらぶ。同じイベントは1ゲームに1回だけ起きる。
 * ボスと同じラウンドでは、排他フラグと45秒の時間予算の二重で長いイベントを外す。
 *
 * @param {object[]} pool  WORLD_EVENTS のエントリ配列
 * @param {number} round   1..rounds。0 はフィナーレ枠で、この関数は呼ばれない
 * @param {object} state   { rounds, usedIds, bossRound, bossDone, weather, totalCoins, maxStars }
 * @param {() => number} random
 * @returns {string|null}  えらばれた id。候補なしなら null
 */
export function chooseWorldEvent(pool, round, state, random = Math.random) {
  const isBossRound = round === state.bossRound && !state.bossDone;
  const budget = isBossRound ? 45 : 90;

  const candidates = pool.filter((e) =>
    e.weight > 0 &&
    round >= e.minRound && round <= e.maxRound &&
    !state.usedIds.includes(e.id) &&
    e.durationSec <= budget &&
    !(isBossRound && e.exclusiveWithBoss) &&
    (typeof e.condition !== 'function' || e.condition(state)));

  if (!candidates.length) return null;

  // 最終ラウンドの1つ前は、クライマックス向きの長いイベントの重みを3倍にする
  const climax = round === state.rounds - 1;
  const weights = candidates.map((e) =>
    e.weight * (climax && e.durationSec >= 60 ? 3 : 1));

  const total = weights.reduce((s, w) => s + w, 0);
  let pick = Math.min(0.999999999, Math.max(0, random())) * total;
  for (let i = 0; i < candidates.length; i++) {
    pick -= weights[i];
    if (pick < 0) return candidates[i].id;
  }
  return candidates[candidates.length - 1].id;
}

// ============ 🐚 うみが ごっそり ひいた(W-02) ============

// 海底の宝1個ぶんのコイン。自分の色のヒトデは3ばい うれしい。
const TIDE_TREASURE_BASE = { shell: 1, starfish: 2, wreck: 5 };

/**
 * 宝1個の得点。
 * @param {'shell'|'starfish'|'wreck'} kind
 * @param {boolean} isOwnColor ひろった子の色と同じヒトデか
 * @returns {number} 1以上の整数
 */
export function tideTreasureValue(kind, isOwnColor = false) {
  const base = TIDE_TREASURE_BASE[kind] ?? 1;
  return isOwnColor ? base * 3 : base;
}

/**
 * 潮がもどるときに前へ押し流されるマス数。順位が下ほど大きい(1位 +1 / 最下位 +3)。
 * @param {number} rank 0 が1位
 * @param {number} playerCount
 * @returns {number} 1..3 の整数。rank に対して単調非減少
 */
export function tideWashBackSteps(rank, playerCount = 4) {
  const last = Math.max(1, playerCount - 1);
  const r = Math.min(last, Math.max(0, Math.trunc(rank)));
  return 1 + Math.round((r / last) * 2);
}

// ============ 🎠 ぐるぐる しままわし(W-07) ============

/**
 * 島が offset マスぶん回ったあと、マス index の位置に来る元のマス番号。
 * world.rotateBoard はこれで種別を再マップする。
 */
export function rotateTileIndex(index, offset, count) {
  return ((index - offset) % count + count) % count;
}

/**
 * 島の回転量(3〜11マス)をえらぶ。
 * 最下位の子の足元が ⭐ か 🔵 になる候補は重みを2倍にして、逆転のチャンスを作る。
 * @param {string[]} layout    もとのマスのならび
 * @param {object[]} chars     { tileIndex, stars, coins }
 * @param {number}   starIndex いまのスターのマス番号
 * @param {() => number} random
 * @param {object} [opts] { min = 3, max = 11, luckyWeight = 2 }
 * @returns {number} min..max の整数
 */
export function chooseSpinOffset(
  layout,
  chars,
  starIndex,
  random = Math.random,
  { min = 3, max = 11, luckyWeight = 2 } = {},
) {
  const count = layout.length;
  const offsets = [];
  for (let o = min; o <= max; o++) offsets.push(o);

  // いちばんうしろの子(スターが少ない → コインが少ない の順)を基準にする
  const valid = chars.filter((c) => Number.isInteger(c.tileIndex));
  let anchor = null;
  for (const c of valid) {
    if (!anchor) { anchor = c; continue; }
    const a = (Number(anchor.stars) || 0) * 1000 + (Number(anchor.coins) || 0);
    const b = (Number(c.stars) || 0) * 1000 + (Number(c.coins) || 0);
    if (b < a) anchor = c;
  }

  const weights = offsets.map((o) => {
    if (!anchor) return 1;
    // 回ったあと、足元に来るマスの種類
    const under = ((starIndex + o) % count + count) % count === anchor.tileIndex
      ? 'STAR'
      : layout[rotateTileIndex(anchor.tileIndex, o, count)];
    return under === 'STAR' || under === 'COIN' ? luckyWeight : 1;
  });

  const total = weights.reduce((s, w) => s + w, 0);
  let pick = Math.min(0.999999999, Math.max(0, random())) * total;
  for (let i = 0; i < offsets.length; i++) {
    pick -= weights[i];
    if (pick < 0) return offsets[i];
  }
  return offsets[offsets.length - 1];
}

// ============ 🌊 ざっぱーん だいつなみ(W-18) ============

/**
 * 全員のコインを0にして、集めた総数を返す。スターにはいっさい触らない。
 * @param {object[]} chars
 * @returns {{ pool: number, before: number[] }}
 */
export function washCoins(chars) {
  const before = chars.map((c) => Math.max(0, Math.trunc(Number(c.coins) || 0)));
  let pool = 0;
  chars.forEach((c, i) => { pool += before[i]; c.coins = 0; });
  return { pool, before };
}

/**
 * ひろい残しのコインを、少ない子ほど多く配る。1枚もなくならない(総量保存)。
 *
 * 人数ぶんのプールがあれば、まず全員に1枚ずつ配る(だれも0枚にしない)。
 * のこりを 4:3:2:1 の重みで配り、端数はコインが少ない子から1枚ずつ足す。
 *
 * @param {number}   pool  ひろい残しの枚数
 * @param {number[]} grabs イベント中に各自がひろった枚数
 * @param {object[]} chars **イベント前の**コイン数を持つスナップショット([{coins}])
 * @returns {number[]} 各自の最終コイン枚数。合計は pool + sum(grabs) にひとしい
 */
export function tideRedistribute(pool, grabs, chars) {
  const n = chars.length;
  const result = chars.map((_, i) => Math.max(0, Math.trunc(Number(grabs[i]) || 0)));
  if (!n) return result;

  const leftover = Math.max(0, Math.trunc(Number(pool) || 0));
  const share = new Array(n).fill(0);

  // コインが少ない順(同数なら番号順)。これが配分の重み 4:3:2:1 の順番になる。
  const order = chars
    .map((c, i) => ({ i, coins: Math.trunc(Number(c.coins) || 0) }))
    .sort((a, b) => (a.coins - b.coins) || (a.i - b.i))
    .map((x) => x.i);

  let rest = leftover;
  if (leftover >= n) {
    for (let i = 0; i < n; i++) share[i] = 1;   // まず全員に1枚(だれも0枚にならない)
    rest = leftover - n;
  }

  const weights = order.map((_, rank) => Math.max(1, 4 - rank));
  const totalW = weights.reduce((s, w) => s + w, 0);
  let handed = 0;
  order.forEach((idx, rank) => {
    const add = Math.floor((rest * weights[rank]) / totalW);
    share[idx] += add;
    handed += add;
  });
  // 端数はコインが少ない子から1枚ずつ
  let frac = rest - handed;
  for (let k = 0; frac > 0; k++, frac--) share[order[k % n]] += 1;

  for (let i = 0; i < n; i++) result[i] += share[i];
  return result;
}

// ============ ❄️ しまが こおった(W-03) ============

/**
 * 惰性で余分に滑るマス数。コインが多いほどよく滑る(「おもちだから」)。
 * 出た目も すこしだけ効く(いきおいがつく)。
 *
 * 1マスごとに確率 p で滑りつづける形にしてある。p は
 * 0.26(コイン0・出目0) から 0.78(コイン30以上・出目6)まで動く。
 *
 * @param {number} roll   そのターンの出た目(符号は見ない)
 * @param {number} coins  ひろっているコインの数
 * @param {() => number} random
 * @param {object} [opts] { maxSlide = 3, coinPivot = 30 }
 * @returns {number} 0..maxSlide の整数
 */
export function iceSlide(roll, coins, random = Math.random, { maxSlide = 3, coinPivot = 30 } = {}) {
  const limit = Math.max(0, Math.trunc(maxSlide));
  const pivot = Math.max(1, coinPivot);
  const t = Math.min(1, Math.max(0, (Number(coins) || 0) / pivot));
  const momentum = Math.min(6, Math.abs(Math.trunc(Number(roll) || 0))) * 0.012;
  const p = Math.min(0.92, 0.26 + 0.46 * t + momentum);

  let slide = 0;
  while (slide < limit) {
    const r = Math.min(0.999999999, Math.max(0, random()));
    if (r >= p) break;
    slide += 1;
  }
  return slide;
}

// ============ 🙃 さかさま じま(W-08) ============

/** 逆走中は目を反転する。マイナスサイコロ × 逆走 = 前進。 */
export function reverseRoundSteps(roll, reversed) {
  const n = Math.trunc(Number(roll) || 0);
  if (!reversed || n === 0) return n === 0 ? 0 : n;   // -0 を返さない
  return -n;
}

/**
 * 逆走中に通過して拾えるコインマスの枚数。
 * さかさま島では着地マスもふくめて全部ひろえるので、通過した全マスを数える。
 *
 * @param {string[]} layout    マスのならび
 * @param {number}   fromIndex 出発マス
 * @param {number}   steps     進むマス数(負なら うしろ向き)
 * @param {number}   [count]   リングのマス数。既定は layout の長さ
 * @returns {number} 0 <= 結果 <= |steps| の整数
 */
export function pickupCoinsWhileReversing(layout, fromIndex, steps, count = layout.length) {
  const n = Math.max(1, Math.trunc(count));
  const total = Math.abs(Math.trunc(Number(steps) || 0));
  const dir = Math.trunc(Number(steps) || 0) >= 0 ? 1 : -1;
  let index = ((Math.trunc(Number(fromIndex) || 0) % n) + n) % n;
  let picked = 0;
  for (let s = 0; s < total; s++) {
    index = ((index + dir) % n + n) % n;
    if (layout[index] === 'COIN') picked += 1;
  }
  return picked;
}

// ============ 🌑 まひるの ほしふり(W-12) ============

/**
 * 降ってくる星のうち何番目を本物にするかを決める。
 * 全 dropCount 個を realCount 等分し、各区間から1個ずつ選ぶ。
 * こうすると終盤に3個まとまらず、最後まで ねらう理由が残る。
 *
 * @param {number} dropCount 降る星の総数
 * @param {number} realCount 本物の数
 * @param {() => number} random
 * @returns {number[]} 長さ realCount の 重複なし昇順配列(0 <= v < dropCount)
 */
export function eclipseRealStarSlots(dropCount, realCount, random = Math.random) {
  const drops = Math.max(0, Math.trunc(Number(dropCount) || 0));
  const reals = Math.max(0, Math.min(drops, Math.trunc(Number(realCount) || 0)));
  const slots = [];
  for (let k = 0; k < reals; k++) {
    const lo = Math.floor((k * drops) / reals);
    const hi = Math.floor(((k + 1) * drops) / reals);
    const span = Math.max(1, hi - lo);
    const r = Math.min(0.999999999, Math.max(0, random()));
    slots.push(Math.min(drops - 1, lo + Math.floor(r * span)));
  }
  return slots;
}

/**
 * 本物の星を1個も取れなかった子への なぐさめコイン。
 * もともとコインも少ない子には すこし多めに出す(逆転のたね)。
 *
 * @param {number} grabbedReal 取った本物の数
 * @param {number} coins       いま持っているコイン
 * @param {object} [opts] { base = 10, poorBonus = 4, poorUnder = 20 }
 * @returns {number} 0 以上の整数
 */
export function eclipseConsolation(grabbedReal, coins = 0, { base = 10, poorBonus = 4, poorUnder = 20 } = {}) {
  if ((Number(grabbedReal) || 0) > 0) return 0;
  const have = Math.max(0, Math.trunc(Number(coins) || 0));
  return base + (have < poorUnder ? poorBonus : 0);
}

// ============ 🏝️ そらとぶ しま(W-01) ============

/**
 * くも12枚の種別を配るときの重み。
 * rank は 0 が1位、playerCount-1 が最下位である。
 * 最下位ほど ほし雲 が出やすく、1位ほど かぜ雲 に当たりやすい。
 *
 * @param {number} rank        0..playerCount-1
 * @param {number} playerCount 人数(2以上)
 * @returns {{fluffy:number, hole:number, star:number, wind:number}} 正の重み
 */
export function cloudTileWeights(rank, playerCount = 4) {
  const n = Math.max(2, Math.trunc(Number(playerCount) || 4));
  const r = Math.max(0, Math.min(n - 1, Math.trunc(Number(rank) || 0)));
  const t = r / (n - 1);                       // 0 = 1位、1 = 最下位
  return {
    fluffy: 6,
    hole: 2 - 1.5 * t,                         // 最下位ほど ぬけ雲が すくない
    star: 1 + 3 * t,                           // 最下位は1位の4ばい(設計書は2ばい以上)
    wind: 3 - 1 * t,                           // トップほど かぜ雲に当たる
  };
}

/**
 * そらのわ(くもリング)の並びを作る。
 * index 0 は気球の「のりば」で、かならず ふわふわ雲である。
 * ほし雲は 小サイコロ(1〜3)で とどく手前のほうへ ちょうど1枚だけ置く。
 *
 * 重みは **最下位の子のもの** を使う。リングは4人で共有する1本なので、
 * 誰かに近づけるのではなく「最下位が いちばん先に えらべる」順番で公平さを作る
 * (手番の順は sky.js が決める)。
 *
 * @param {object[]} chars  キャラ配列(人数だけを見る)
 * @param {() => number} random
 * @param {number} count    くもの枚数(既定 12)
 * @returns {string[]} 'fluffy' | 'hole' | 'star' | 'wind' の配列(長さ count)
 */
export function buildCloudRing(chars, random = Math.random, count = 12) {
  const n = Math.max(4, Math.trunc(Number(count)) || 12);
  const players = Math.max(2, Array.isArray(chars) ? chars.length : 4);
  const w = cloudTileWeights(players - 1, players);
  const rnd = () => Math.min(0.999999999, Math.max(0, random()));
  const ring = new Array(n).fill('fluffy');

  // ほし雲は ちょうど1枚。のりばの すぐ先(1..reach)に置く。
  const reach = Math.max(1, Math.round(n / 4));
  ring[(1 + Math.floor(rnd() * reach)) % n] = 'star';

  // ぬけ雲は 2枚まで、かぜ雲は 3枚まで。重みの比から枚数を決める。
  const total = w.fluffy + w.hole + w.star + w.wind;
  const holes = Math.min(2, Math.max(1, Math.round((w.hole / total) * n)));
  const winds = Math.min(3, Math.max(1, Math.round((w.wind / total) * n)));

  // のりば(0)と ほし雲 を のぞいた空きマスを シャッフルして配る
  const free = [];
  for (let i = 1; i < n; i++) if (ring[i] === 'fluffy') free.push(i);
  for (let i = free.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    const tmp = free[i]; free[i] = free[j]; free[j] = tmp;
  }
  let k = 0;
  for (let h = 0; h < holes && k < free.length; h++, k++) ring[free[k]] = 'hole';
  for (let v = 0; v < winds && k < free.length; v++, k++) ring[free[k]] = 'wind';
  return ring;
}

// そらのわで進んだ くもの数 → 本島で進むマス数。
// くも1マスは 本島4マスぶん(12マス vs 48マス)なので、0/3/6/10 に ひらく。
const SKY_RETURN_STEPS = [0, 3, 6, 10];

/**
 * 着水したとき、そらのわの最終位置で本島を何マス進むか。
 * cloudIndex は「のりば(0)から進んだ くもの数」である。
 *
 * @param {number} cloudIndex 0..count-1
 * @param {number} count      くもの枚数(既定 12)
 * @returns {0|3|6|10}
 */
export function skyReturnBonus(cloudIndex, count = 12) {
  const n = Math.max(1, Math.trunc(Number(count)) || 12);
  const raw = Math.trunc(Number(cloudIndex) || 0);
  const i = ((raw % n) + n) % n;
  return SKY_RETURN_STEPS[Math.min(SKY_RETURN_STEPS.length - 1, i)];
}

// ============ ✂️ しまが まっぷたつ(W-04) ============

// stars → coins の降順。同点は もとの配列順(決定的)。_finale と同じ順位づけである。
function rankOrder(chars) {
  return chars
    .map((c, i) => ({ i, stars: Number(c?.stars) || 0, coins: Number(c?.coins) || 0 }))
    .sort((a, b) => (b.stars - a.stars) || (b.coins - a.coins) || (a.i - b.i))
    .map((e) => e.i);
}

/**
 * チーム分け。1位＋最下位 / 2位＋3位 の2組に分ける。
 * トップは最下位を背負い、最下位は一気にトップ相当の資産を手にする。
 *
 * @param {object[]} chars { stars, coins } を持つ4人
 * @returns {number[][]} [[i,j],[k,l]] キャラ配列の index
 */
export function splitTeams(chars) {
  const order = rankOrder(Array.isArray(chars) ? chars : []);
  const n = order.length;
  const teams = [[], []];
  for (let k = 0; k < Math.floor(n / 2); k++) {
    // 外側から内側へ:(1位, 最下位) → (2位, 3位)
    teams[k % 2].push(order[k], order[n - 1 - k]);
  }
  if (n % 2 === 1) teams[0].push(order[Math.floor(n / 2)]);
  return teams;
}

/**
 * チームごとの合計。表示にだけ使う(勝敗判定は _finale の個人順位のまま)。
 *
 * @param {object[]} chars
 * @param {number[][]} teams splitTeams の戻り値
 * @returns {{stars:number, coins:number}[]} teams と同じ長さ
 */
export function teamScore(chars, teams) {
  const list = Array.isArray(chars) ? chars : [];
  return (Array.isArray(teams) ? teams : []).map((team) => {
    let stars = 0;
    let coins = 0;
    for (const i of team) {
      stars += Number(list[i]?.stars) || 0;
      coins += Number(list[i]?.coins) || 0;
    }
    return { stars, coins };
  });
}

/**
 * 虹の橋で入れかわる2人。index の子と、その相棒を返す。
 *
 * @param {number[][]} teams
 * @param {number} index
 * @returns {number[]|null} [自分, 相棒]。相棒が居なければ null
 */
export function bridgeSwapIndices(teams, index) {
  for (const team of Array.isArray(teams) ? teams : []) {
    if (!team.includes(index)) continue;
    const partner = team.find((i) => i !== index);
    return partner === undefined ? null : [index, partner];
  }
  return null;
}

// ============ 🎲 しま まるごと だいルーレット(W-20) ============

// 0..1 に丸めた乱数(random() が範囲外を返しても抽選が壊れないようにする)
function unit(random) {
  const v = Number(typeof random === 'function' ? random() : Math.random());
  if (!Number.isFinite(v)) return 0;
  return Math.min(0.999999999, Math.max(0, v));
}

/**
 * 島の地面を4色パイに塗るときの面積比。コインが多い子ほど広い。
 * どの子も minShare(既定 12%)は必ずもらえるので、コイン0でも当たる目がある。
 *
 * @param {object[]} chars { coins, stars } を持つ4人
 * @param {object} [opts]
 * @param {number} [opts.minShare=0.12]     1人あたりの最低面積
 * @param {number} [opts.underdogBoost=1]   最下位の面積を何倍にするか(ボーナス回は2)
 * @returns {number[]} chars と同じ長さ。合計はちょうど 1
 */
export function wheelWeights(chars, { minShare = 0.12, underdogBoost = 1 } = {}) {
  const list = Array.isArray(chars) ? chars : [];
  const n = list.length;
  if (!n) return [];
  // n 人ぶんの最低面積が 1 を超えないように丸める
  const minS = Math.min(Math.max(0, Number(minShare) || 0), 1 / n);

  // コインの比率。全員0なら均等。
  const coins = list.map((c) => Math.max(0, Number(c?.coins) || 0));
  const total = coins.reduce((s, v) => s + v, 0);
  const raw = total > 0 ? coins.map((v) => v / total) : coins.map(() => 1 / n);

  // 最低面積を配ってから、残りをコイン比で分ける。
  // 単調なので、コインの降順と share の降順は必ず一致する(不変条件3)。
  const rest = 1 - n * minS;
  const share = raw.map((r) => minS + r * rest);

  const boost = Number(underdogBoost) || 1;
  if (boost === 1 || n < 2) return share;

  // ボーナス回:最下位(stars → coins の昇順で最後)の面積を boost 倍にして、
  // 他の子を minShare まで下げない範囲で圧縮する。
  const u = rankOrder(list)[n - 1];
  const cap = 1 - (n - 1) * minS;               // 1人が取れる上限
  const want = Math.min(share[u] * boost, cap);
  const others = 1 - share[u];                  // いまの他の子の合計
  const floor = (n - 1) * minS;                 // 他の子の合計の下限
  const room = others - floor;
  const k = room > 1e-12 ? (1 - want - floor) / room : 0;
  return share.map((s, i) => (i === u ? want : minS + (s - minS) * k));
}

/**
 * 矢印がどの区画で止まるかを先に決める。
 * 見た目の減速は「この結果の区画の中心で止まるように」逆算する(設計書 4.9)。
 *
 * @param {number[]} weights wheelWeights の戻り値
 * @param {() => number} [random]
 * @returns {number} 当選した index。weights が空なら -1
 */
export function spinWheel(weights, random = Math.random) {
  const w = (Array.isArray(weights) ? weights : []).map((v) => Math.max(0, Number(v) || 0));
  if (!w.length) return -1;
  const total = w.reduce((s, v) => s + v, 0);
  if (total <= 0) return 0;
  let pick = unit(random) * total;
  for (let i = 0; i < w.length; i++) {
    pick -= w[i];
    if (pick < 0) return i;
  }
  return w.length - 1;
}

/**
 * 当選ぶんの⭐を足したあとの、各自の最終スター数。
 * chars は書きかえない(呼び出し側が代入する)。
 *
 * @param {object[]} chars
 * @param {number[]} winners 当選した index の列(3回ぶん)
 * @returns {number[]} chars と同じ長さの最終 stars
 */
export function applyWheelStars(chars, winners) {
  const out = (Array.isArray(chars) ? chars : []).map((c) => Math.max(0, Number(c?.stars) || 0));
  for (const w of Array.isArray(winners) ? winners : []) {
    // 数でない値・範囲外の index は だまって捨てる(null を 0 と読まない)
    if (Number.isInteger(w) && w >= 0 && w < out.length) out[w] += 1;
  }
  return out;
}

/**
 * がんばったで賞。1回も当たらなかった子がもらうコイン。
 * applyWheelStars と ちがい「**もらう** ぶん(差分)」を返す(ExecPlan Decision Log)。
 *
 * @param {object[]} chars
 * @param {number[]} winners
 * @param {number} [coins=20]
 * @returns {number[]} chars と同じ長さ。当たった子は 0
 */
export function wheelConsolation(chars, winners, coins = 20) {
  const n = Array.isArray(chars) ? chars.length : 0;
  const won = new Set((Array.isArray(winners) ? winners : []).filter((w) => Number.isInteger(w)));
  const gain = Math.max(0, Math.trunc(Number(coins) || 0));
  return Array.from({ length: n }, (_, i) => (won.has(i) ? 0 : gain));
}

// ============ 🐢 しまは おおきな いきものの せなか(W-06) ============

/**
 * カメが揺れたときに全員がずれるマス数。**合計は必ず 0** なので総進捗は保存される。
 * 1回の揺れで 1〜2組が入れかわり、残りはその場に留まる。
 *
 * @param {number} playerCount
 * @param {() => number} [random]
 * @param {number} [max=1] 1人あたりのずれの上限(絶対値)
 * @returns {number[]} 長さ playerCount、合計 0
 */
export function voyageDrift(playerCount, random = Math.random, max = 1) {
  const n = Math.max(0, Math.trunc(Number(playerCount) || 0));
  const out = new Array(n).fill(0);
  const step = Math.trunc(Number(max) || 0);
  if (n < 2 || step < 1) return out;

  // 並びをシャッフルして、前から k 人が +step、後ろから k 人が -step
  const idx = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(unit(random) * (i + 1));
    const t = idx[i]; idx[i] = idx[j]; idx[j] = t;
  }
  const pairs = 1 + Math.floor(unit(random) * Math.floor(n / 2));
  for (let k = 0; k < pairs; k++) {
    out[idx[k]] = step;
    out[idx[n - 1 - k]] = -step;
  }
  return out;
}

/**
 * くしゃみで全員が吹きとばされた先。重複しないマスを返す。
 *
 * @param {object[]} chars
 * @param {() => number} [random]
 * @param {number} [tileCount=48]
 * @returns {number[]} 長さ chars.length、重複なし、0 <= v < tileCount
 */
export function sneezeLanding(chars, random = Math.random, tileCount = 48) {
  const n = Array.isArray(chars) ? chars.length : 0;
  const count = Math.max(1, Math.trunc(Number(tileCount) || 1));
  const out = [];
  const used = new Set();
  for (let i = 0; i < n; i++) {
    if (used.size >= count) { out.push(i % count); continue; }   // マスより人が多いとき(保険)
    let t = Math.floor(unit(random) * count) % count;
    for (let tries = 0; used.has(t) && tries < count; tries++) t = (t + 1) % count;
    used.add(t);
    out.push(t);
  }
  return out;
}

/**
 * カメの首につかまる ごほうび。最下位の1人だけが +3マス進む。
 * voyageDrift の「合計0」の制約とは別枠で加算する(設計書 4.10)。
 *
 * @param {object[]} chars
 * @returns {{index: number, steps: number}} 該当者が居なければ index は -1
 */
export function voyageUnderdogBonus(chars) {
  const list = Array.isArray(chars) ? chars : [];
  if (!list.length) return { index: -1, steps: 0 };
  const order = rankOrder(list);
  return { index: order[order.length - 1], steps: 3 };
}

// ===== Phase 5 / 5b ここから =====
// 🌋 だいふんか(W-09) ／ 🚀 しまロケット(W-10) ／ 🌌 ほしぞら すごろく(W-11)
// ぜんぶ純関数で、Three.js も DOM も import しない。

// ---- 🌋 だいふんか しんしま たんじょう(W-09) ----

/**
 * ほうせきマス8枚の中身。⭐ はちょうど1枚、のこりはコイン 1..5。
 * 誰のコインも減らない純プラスのイベントなので、マイナスの目は作らない。
 *
 * @param {object[]} chars     いまの4人(人数でコインの出かたを変えない。並びの決定性のためだけに受ける)
 * @param {() => number} [random]
 * @param {number} [count=8]
 * @returns {('c1'|'c2'|'c3'|'c4'|'c5'|'star')[]} 長さ count、'star' はちょうど1枚
 */
export function buildGemIsle(chars, random = Math.random, count = 8) {
  const n = Math.max(1, Math.trunc(Number(count) || 1));
  const out = [];
  for (let i = 0; i < n; i++) {
    // 1..5 のコイン。まんなか(2〜3枚)が出やすいように2回振って寄せる。
    const a = 1 + Math.floor(unit(random) * 5);
    const b = 1 + Math.floor(unit(random) * 5);
    out.push(`c${Math.max(1, Math.min(5, Math.round((a + b) / 2)))}`);
  }
  // ⭐ は のりば(index 0)から すこし先へ置く。1〜3の小さいサイコロで届く範囲。
  const starAt = n <= 1 ? 0 : 1 + Math.floor(unit(random) * Math.max(1, n - 1));
  out[Math.min(n - 1, starAt)] = 'star';
  return out;
}

/**
 * ほうせきマスの値をコイン数へ直す。'star' は 0(スターは別勘定)。
 * @param {string} kind buildGemIsle の1要素
 * @returns {number} 0 以上の整数
 */
export function gemTileCoins(kind) {
  const m = /^c([1-9][0-9]*)$/.exec(String(kind ?? ''));
  if (!m) return 0;
  return Math.max(0, Math.trunc(Number(m[1]) || 0));
}

/**
 * 新島の手番。コイン + スターが少ない子から回す。同点は元の配列順(決定的)。
 * 最下位が先頭に来るので、1枚しかない ⭐ に いちばん近いところを選べる。
 *
 * @param {object[]} chars
 * @returns {number[]} chars の添字の順列。先頭が最下位
 */
export function eruptOrder(chars) {
  const list = Array.isArray(chars) ? chars : [];
  return list
    .map((c, i) => ({ i, stars: Number(c?.stars) || 0, coins: Number(c?.coins) || 0 }))
    .sort((a, b) => (a.stars - b.stars) || (a.coins - b.coins) || (a.i - b.i))
    .map((e) => e.i);
}

// ---- 🚀 しまロケット(W-10) ----

/**
 * 惑星8個の種別。🪙3 / ⭐1 / 🌀2 / 🍩2 を シャッフルして返す。
 * 枚数は固定なので、count がちがっても ⭐ は必ず1枚・🌀 は2枚以下になる。
 *
 * @param {() => number} [random]
 * @param {number} [count=8]
 * @returns {('coin'|'star'|'swap'|'donut')[]}
 */
export function buildPlanets(random = Math.random, count = 8) {
  const n = Math.max(1, Math.trunc(Number(count) || 1));
  const bag = ['star'];
  const want = [
    ['swap', 2], ['donut', 2], ['coin', 3],
  ];
  for (const [kind, num] of want) {
    for (let i = 0; i < num && bag.length < n; i++) bag.push(kind);
  }
  while (bag.length < n) bag.push('coin');     // count を増やしたぶんは コイン星で埋める
  bag.length = n;
  // Fisher-Yates。'star' が1枚・'swap' が2枚以下 という性質は並べ替えでは壊れない。
  for (let i = bag.length - 1; i > 0; i--) {
    const j = Math.floor(unit(random) * (i + 1));
    const t = bag[i]; bag[i] = bag[j]; bag[j] = t;
  }
  return bag;
}

/**
 * CPU がどの惑星を選ぶかの重み。順位が下(rank が大きい)ほど よい星を選びやすい。
 * rank は 0 が1位。'star' についてだけ rank に単調非減少である。
 *
 * @param {string} kind  'coin' | 'star' | 'swap' | 'donut'
 * @param {number} rank  0 始まりの順位
 * @param {number} [playerCount=4]
 * @returns {number} 0 以上の重み
 */
export function planetPickWeight(kind, rank, playerCount = 4) {
  const n = Math.max(1, Math.trunc(Number(playerCount) || 1));
  const r = Math.min(n - 1, Math.max(0, Math.trunc(Number(rank) || 0)));
  const low = n <= 1 ? 0 : r / (n - 1);        // 0 = 1位、1 = 最下位
  if (kind === 'star') return 1 + low * 5;     // 下位ほど ⭐ をねらう(単調非減少)
  if (kind === 'swap') return 0.6 + low * 3;   // 下位ほど ひっくり返したい
  if (kind === 'coin') return 4 - low * 2;     // 上位は かたく コインを積む
  if (kind === 'donut') return 2;              // みんなに配る星は いつも そこそこ
  return 0;
}

/**
 * 🌀ぐるぐる星。いまの順位を完全に反転した coins / stars の割り当てを返す。
 * **コイン総量とスター総量は保存される**(順位の入れ替えであり増減ではない)。
 *
 * @param {object[]} chars
 * @returns {{coins: number[], stars: number[]}} chars と同じ並びの新しい値
 */
export function swapRanks(chars) {
  const list = Array.isArray(chars) ? chars : [];
  const n = list.length;
  const coins = new Array(n).fill(0);
  const stars = new Array(n).fill(0);
  if (!n) return { coins, stars };
  const order = rankOrder(list);               // 上位 → 下位
  for (let k = 0; k < n; k++) {
    const from = order[n - 1 - k];             // 反転して取り出す
    const to = order[k];
    coins[to] = Math.max(0, Math.trunc(Number(list[from]?.coins) || 0));
    stars[to] = Math.max(0, Math.trunc(Number(list[from]?.stars) || 0));
  }
  return { coins, stars };
}

// ---- 🌌 ほしぞら すごろく(W-11) ----

/**
 * 星の輪24マスの中身。'link' が ふつうの星、'shoot' が流れ星、'gap' が まだ暗い星。
 * 'shoot' は3枚まで、'gap' は4枚まで。のこりは ぜんぶ 'link'。
 *
 * @param {object[]} chars
 * @param {() => number} [random]
 * @param {number} [count=24]
 * @returns {('link'|'shoot'|'gap')[]}
 */
export function buildStarRing(chars, random = Math.random, count = 24) {
  const n = Math.max(1, Math.trunc(Number(count) || 1));
  const out = new Array(n).fill('link');
  const shoots = Math.min(3, Math.max(0, n - 1));
  const gaps = Math.min(4, Math.max(0, n - 1 - shoots));
  const used = new Set([0]);                   // のりば(index 0)は かならず 'link'
  const place = (kind, howMany) => {
    for (let k = 0; k < howMany; k++) {
      let t = 1 + Math.floor(unit(random) * Math.max(1, n - 1));
      for (let tries = 0; used.has(t) && tries < n; tries++) t = 1 + ((t) % Math.max(1, n - 1));
      if (used.has(t)) return;
      used.add(t);
      out[t % n] = kind;
    }
  };
  place('shoot', shoots);
  place('gap', gaps);
  return out;
}

/**
 * 星座の何本目までつながったか → そのターンのコイン。
 * linked について単調非減少で、0 以上、total のとき最大になる。
 *
 * @param {number} linked つないだ線の本数(0..total)
 * @param {number} [total=24]
 * @returns {number} 0 以上の整数
 */
export function constellationCoins(linked, total = 24) {
  const t = Math.max(1, Math.trunc(Number(total) || 1));
  const l = Math.min(t, Math.max(0, Math.trunc(Number(linked) || 0)));
  // 1本ごとに1枚。半分を超えたら ボーナスで もう1枚ずつ乗る(単調非減少のまま)。
  const bonus = Math.max(0, l - Math.floor(t / 2));
  return l + bonus;
}

/**
 * 星座を完成させた子を決める。手番が最後の子ほど完成担当になりやすい。
 * linkedPerTurn の累積が はじめて total に届いたターンの子を返す。
 * 誰も届かなければ「いちばん多くつないだ子」、それも同点なら最後の手番の子。
 *
 * @param {number[]} order          手番の並び(chars の添字)
 * @param {number[]} linkedPerTurn  各手番でつないだ本数(order と同じ長さ)
 * @param {number} [total=24]
 * @returns {number} order の添字(0..order.length-1)。order が空なら -1
 */
export function constellationFinisher(order, linkedPerTurn, total = 24) {
  const list = Array.isArray(order) ? order : [];
  if (!list.length) return -1;
  const per = Array.isArray(linkedPerTurn) ? linkedPerTurn : [];
  const t = Math.max(1, Math.trunc(Number(total) || 1));
  let acc = 0;
  for (let i = 0; i < list.length; i++) {
    acc += Math.max(0, Math.trunc(Number(per[i]) || 0));
    if (acc >= t) return i;
  }
  let best = list.length - 1;
  let bestN = -1;
  for (let i = 0; i < list.length; i++) {
    const v = Math.max(0, Math.trunc(Number(per[i]) || 0));
    if (v >= bestN) { bestN = v; best = i; }   // 同点は あとの手番が勝つ(下位救済)
  }
  return best;
}
// ===== Phase 5 / 5b ここまで =====

// ===== Phase 5 / 5a ここから =====

// ============ 🎇 オーロラの ぬりかえ(W-13) ============

// のりもの3種は「島に本物のメッシュが置いてある」マスなので、
// 種別だけを よそへ移すと 乗り物のない乗り物マスが生まれる。オーロラは この3種を動かさない。
const AURORA_FIXED = new Set(['TURTLE', 'ROPEWAY', 'COASTER']);
// 良いマス(最下位の すぐ先に かならず1枚 置く対象)
const AURORA_GOOD = new Set(['ROPEWAY', 'TURTLE', 'HEART', 'RAINBOW']);
// 悪いマス(塗り替えたあとに 枚数が増えてはいけない)
const AURORA_BAD = new Set(['STORM', 'BOMB', 'HOLE']);

// もとの種別 → 塗り替え先の重み。良いほうへ寄せるが、全部おなじにはしない。
const AURORA_NEXT = {
  COIN: [['COIN', 6], ['HEART', 3], ['EVENT', 2], ['RAINBOW', 1]],
  HEART: [['HEART', 4], ['COIN', 4], ['EVENT', 2]],
  EVENT: [['EVENT', 4], ['COIN', 4], ['HEART', 2]],
  RAINBOW: [['RAINBOW', 4], ['COIN', 4], ['HEART', 2]],
  STORM: [['COIN', 5], ['HEART', 3], ['EVENT', 2]],
  BOMB: [['COIN', 4], ['HEART', 2], ['EVENT', 2], ['BOMB', 1]],
  HOLE: [['COIN', 4], ['RAINBOW', 2], ['HEART', 2], ['HOLE', 1]],
};

/**
 * 1マスぶんの塗り替え先。もとの種別から重み付きで引く。
 * のりもの3種(`TURTLE` / `ROPEWAY` / `COASTER`)は そのまま返す(ExecPlan Decision Log #1)。
 *
 * @param {string} from TILE_TYPES のキー
 * @param {() => number} [random]
 * @returns {string} TILE_TYPES のキー('STAR' は返さない)
 */
export function auroraNextType(from, random = Math.random) {
  if (AURORA_FIXED.has(from)) return from;
  const table = AURORA_NEXT[from] || AURORA_NEXT.COIN;
  const total = table.reduce((s, [, w]) => s + w, 0);
  let pick = unit(random) * total;
  for (const [type, w] of table) {
    pick -= w;
    if (pick < 0) return type;
  }
  return table[table.length - 1][0];
}

/**
 * 48マスの種別を塗り替える。良いマスが増え、悪いマスが減る方向へ寄せる。
 * 最下位の 2..8マス先には かならず良いマスを1つ置く。
 *
 * @param {string[]} layout    いまの並び('STAR' を含まない currentLayout() の戻り値)
 * @param {object[]} chars     { stars, coins, tileIndex }
 * @param {number}   starIndex いまのスターのマス番号(ここは塗らない。world が 'STAR' を入れる)
 * @param {() => number} [random]
 * @returns {string[]} 長さ layout.length。'STAR' は含まない
 */
export function auroraRepaint(layout, chars, starIndex, random = Math.random) {
  const src = Array.isArray(layout) ? layout : [];
  const n = src.length;
  const out = new Array(n);
  const badBefore = src.reduce((s, t) => s + (AURORA_BAD.has(t) ? 1 : 0), 0);

  for (let i = 0; i < n; i++) {
    const from = src[i] === 'STAR' ? 'COIN' : src[i];
    out[i] = auroraNextType(from, random);
  }

  // 悪いマスは 塗り替え前より増やさない。あふれたぶんは前から COIN へ刈る。
  let badAfter = out.reduce((s, t) => s + (AURORA_BAD.has(t) ? 1 : 0), 0);
  for (let i = 0; i < n && badAfter > badBefore; i++) {
    if (!AURORA_BAD.has(out[i])) continue;
    out[i] = 'COIN';
    badAfter -= 1;
  }

  // 最下位の子の 2..8マス先に 良いマスが1枚も無ければ、+4 のあたりへ 💗 を置く。
  const order = underdogOrder(chars);
  const last = order.length ? chars[order[0]] : null;
  const at = last && Number.isInteger(last.tileIndex) ? ((last.tileIndex % n) + n) % n : -1;
  if (at >= 0 && n > 8) {
    let found = false;
    for (let d = 2; d <= 8 && !found; d++) {
      if (AURORA_GOOD.has(out[(at + d) % n])) found = true;
    }
    if (!found) {
      for (let d = 4; d <= 8; d++) {
        const idx = (at + d) % n;
        if (idx === starIndex || AURORA_FIXED.has(out[idx])) continue;
        out[idx] = 'HEART';
        break;
      }
    }
  }
  return out;
}

// ============ 🌈 にじの はしの むこう(W-14) ============

/**
 * stars → coins の昇順(ビリが先頭)。同点は もとの配列順で、結果は決定的である。
 * @param {object[]} chars
 * @returns {number[]} 0..n-1 の順列
 */
export function underdogOrder(chars) {
  return (Array.isArray(chars) ? chars : [])
    .map((c, i) => ({ i, stars: Number(c?.stars) || 0, coins: Number(c?.coins) || 0 }))
    .sort((a, b) => (a.stars - b.stars) || (a.coins - b.coins) || (a.i - b.i))
    .map((e) => e.i);
}

// おかしマス1枚ぶんのコイン。'star' は ⭐ なので コインは 0。
const CANDY_VALUES = { candy: 1, cookie: 2, choco: 3, cake: 5, star: 0 };
// 'star' 以外の4種。ぜんぶプラスで、誰のコインも減らない。
const CANDY_PLUS = ['candy', 'cookie', 'choco', 'cake'];

/**
 * おかしマス1枚ぶんのコイン。
 * @param {'cookie'|'choco'|'cake'|'candy'|'star'} kind
 * @returns {number} 0..5
 */
export function candyTileValue(kind) {
  const v = CANDY_VALUES[kind];
  return Number.isFinite(v) ? v : 0;
}

/**
 * おかしじま12マスの中身。'star' はちょうど1枚、残りは全部プラスである。
 * ⭐は 小サイコロ(1〜3)で とどく 1..3 に置く(早い者勝ちを成立させるため)。
 *
 * @param {() => number} [random]
 * @param {number} [count=12]
 * @returns {string[]} 長さ count
 */
export function buildCandyRing(random = Math.random, count = 12) {
  const n = Math.max(4, Math.trunc(Number(count)) || 12);
  const ring = new Array(n);
  for (let i = 0; i < n; i++) {
    ring[i] = CANDY_PLUS[Math.floor(unit(random) * CANDY_PLUS.length) % CANDY_PLUS.length];
  }
  ring[0] = 'candy';                                  // のりばは いちばん軽い 🍭
  const reach = Math.max(1, Math.min(3, n - 1));
  ring[1 + Math.floor(unit(random) * reach)] = 'star';
  return ring;
}

// ============ 🌀 ぐらぐら かたむき(W-17) ============

/**
 * こぼれる枚数。持っている子ほど多く落とす。総量は pool へ移るだけで消えない。
 *
 * @param {object[]} chars
 * @param {object} [opts] { ratio = 0.6, cap = 20 }
 * @returns {{ spilled: number[], pool: number }}
 */
export function spillCoins(chars, { ratio = 0.6, cap = 20 } = {}) {
  const list = Array.isArray(chars) ? chars : [];
  const r = Math.min(1, Math.max(0, Number(ratio) || 0));
  const lid = Math.max(0, Math.trunc(Number(cap) || 0));
  const spilled = list.map((c) => {
    const coins = Math.max(0, Math.trunc(Number(c?.coins) || 0));
    return Math.min(lid, Math.min(coins, Math.floor(coins * r)));
  });
  return { spilled, pool: spilled.reduce((s, v) => s + v, 0) };
}

/**
 * 転がったコインの行き先。拾ったぶんはそのまま、拾い残しは全員へ均等に配る。
 * 端数は **拾った枚数が多い順**(同数ならコインが少ない順)に1枚ずつ。
 * 「最下位から」ではなく「拾った順」なのは、9.8 の不変条件5(grabs について単調非減少)を
 * 満たすためである(ExecPlan Decision Log #3)。
 *
 * @param {number}   pool  こぼれた総数
 * @param {number[]} grabs 各自が拾った枚数
 * @param {object[]} chars **イベント前の**コイン数を持つスナップショット([{coins}])
 * @returns {number[]} 各自の増分。合計はちょうど pool
 */
export function settleCoinScramble(pool, grabs, chars) {
  const list = Array.isArray(chars) ? chars : [];
  const n = list.length;
  if (!n) return [];
  const total = Math.max(0, Math.trunc(Number(pool) || 0));

  // 拾った枚数は pool を超えない(超えていたら後ろから削る)
  const out = list.map((_, i) => Math.max(0, Math.trunc(Number(grabs?.[i]) || 0)));
  let grabbed = out.reduce((s, v) => s + v, 0);
  for (let i = n - 1; i >= 0 && grabbed > total; i--) {
    const cut = Math.min(out[i], grabbed - total);
    out[i] -= cut;
    grabbed -= cut;
  }

  const rest = total - grabbed;
  const each = Math.floor(rest / n);
  for (let i = 0; i < n; i++) out[i] += each;

  // 端数。拾った枚数の降順 → コインの昇順 → 番号順
  const order = list
    .map((c, i) => ({ i, got: out[i], coins: Math.trunc(Number(c?.coins) || 0) }))
    .sort((a, b) => (b.got - a.got) || (a.coins - b.coins) || (a.i - b.i))
    .map((e) => e.i);
  let frac = rest - each * n;
  for (let k = 0; frac > 0; k++, frac--) out[order[k % n]] += 1;
  return out;
}

// ============ 🫧 しまが ちっちゃく(W-19) ============

/**
 * 48枚の並びから keepEvery ごとに残して 24枚にする。
 * `LAYOUT_48` は 4ゾーン × 12マスなので、偶数間引きで各ゾーン6枚ずつが均等に残る。
 *
 * @param {string[]} layout
 * @param {number} [keepEvery=2]
 * @returns {string[]} 長さ ceil(layout.length / keepEvery)
 */
export function shrinkLayout(layout, keepEvery = 2) {
  const src = Array.isArray(layout) ? layout : [];
  const step = Math.max(1, Math.trunc(Number(keepEvery) || 1));
  const out = [];
  for (let i = 0; i < src.length; i += step) out.push(src[i]);
  return out;
}

/**
 * もとの index → 縮んだ盤の index。沈んだマスは「次に残るマス」へ寄せる。
 * 最後まで残るマスが無いとき(=リングの末尾)は末尾のマスへ丸め、単調非減少を保つ。
 *
 * @param {number}   index    0..keep の最大値
 * @param {number[]} keep     残したマスの もとの index(昇順)
 * @param {number}   newCount 縮んだ盤のマス数
 * @returns {number} 0..newCount-1
 */
export function remapTileIndex(index, keep, newCount) {
  const list = Array.isArray(keep) ? keep : [];
  const n = Math.max(1, Math.trunc(Number(newCount)) || list.length || 1);
  const i = Math.trunc(Number(index) || 0);
  let k = 0;
  while (k < list.length && list[k] < i) k++;
  return Math.min(n - 1, Math.max(0, k));
}

/**
 * 縮んだ盤の index → もとの 48マス系の index。`remapTileIndex` の逆。
 * @param {number}   index
 * @param {number[]} keep
 * @returns {number}
 */
export function restoreTileIndex(index, keep) {
  const list = Array.isArray(keep) ? keep : [];
  if (!list.length) return 0;
  const i = ((Math.trunc(Number(index) || 0) % list.length) + list.length) % list.length;
  return list[i];
}

/**
 * 沈んだマスの上に居た子への お引越し代。
 * @param {boolean} wasSunk
 * @param {number} [coins=4]
 * @returns {number} 0 か coins
 */
export function relocationFee(wasSunk, coins = 4) {
  return wasSunk ? Math.max(0, Math.trunc(Number(coins) || 0)) : 0;
}

// ===== Phase 5 / 5a ここまで =====
