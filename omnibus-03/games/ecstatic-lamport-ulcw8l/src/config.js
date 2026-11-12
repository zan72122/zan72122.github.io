/**
 * config.js — すべてのチューニング値、スポット、キャラクター、技テーブル。
 * ゲームデザインの「設計図」はここに集約する。
 */

export const PHYS = {
  gravity: -18.5,          // m/s^2 (アーケード寄り。実測9.8では滞空が間延びする)
  airDrag: 0.06,           // 速度に比例する空気抵抗
  terminal: 42.0,          // 落下速度の上限
  // 慣性モーメント(正規化)。形が締まるほど小さく=速く回る。
  inertia: { tuck: 0.42, pike: 0.62, layout: 1.15, entry: 1.25, launch: 0.9 },
  // 姿勢ごとの L の自然減衰。伸型は体が空気を受けて回転が落ちていく。
  // → Flip Diving の「離せば止まる」感触を残しつつ、止まるまでに高度を使わせる。
  shapeDamp: { tuck: 0.0, pike: 0.35, layout: 1.6 },
  spinTorque: 5.0,         // 入力保持で角運動量Lが増える速さ(約0.9秒で上限)
  spinCounter: 8.0,        // 逆方向入力でLを削る速さ
  maxL: 4.4,               // 角運動量の上限。抱え型で約10rad/s = 1.6回転/秒。
                           // 回転は「安い資源」にしない。低い台で4回転できたら緊張感が消える。
  flareDamp: 5.2,          // ブレーキ(フレア)でLが減る係数
  twistRate: 6.5,          // ひねりの角速度 rad/s
  twistDrag: 0.9,
  waterLevel: 0.0,
  // 水中挙動
  buoyancy: 30.0,
  waterDrag: 3.2,
};

export const TIME = {
  // 着水まで残りこの秒数でスローモーション開始。
  // 「高さ」ではなく「残り時間」で切るのが要点。低い台でも高い台でも、
  // 微調整に使える猶予がまったく同じになる。
  slowMoTime: 0.45,
  slowMoStart: 6.2,        // (未使用: 旧仕様の名残)
  slowMoScale: 0.28,
  slowMoBlend: 0.16,
  entryFreeze: 0.55,       // 着水後の演出時間(実時間秒)
};

/** 空中の姿勢(シェイプ)。回転速度と得点倍率のトレードオフが核心。 */
export const SHAPES = {
  tuck:   { key: 'tuck',   label: 'TUCK',   jp: '抱え型',   mult: 1.0,  color: '#7ee0ff' },
  pike:   { key: 'pike',   label: 'PIKE',   jp: 'えび型',   mult: 1.7,  color: '#ffd166' },
  layout: { key: 'layout', label: 'LAYOUT', jp: '伸型',     mult: 2.3,  color: '#ff8fd0' },
};

/** 入水評価。ここが Flip Diving の全緊張が集まる一点。 */
export const ENTRY_GRADES = [
  { key: 'rip',    label: 'RIP ENTRY!', jp: '完璧',   maxAngle: 7,   maxSpin: 1.6, mult: 3.4, hue: 190 },
  { key: 'clean',  label: 'CLEAN',      jp: 'きれい', maxAngle: 17,  maxSpin: 3.0, mult: 2.1, hue: 140 },
  { key: 'ok',     label: 'OK',         jp: 'まずまず', maxAngle: 38, maxSpin: 5.5, mult: 1.15, hue: 60 },
  { key: 'sloppy', label: 'SLOPPY',     jp: '雑',     maxAngle: 62,  maxSpin: 9.0, mult: 0.6,  hue: 28 },
  { key: 'flop',   label: 'BELLY FLOP', jp: '腹打ち', maxAngle: 999, maxSpin: 999, mult: 0.18, hue: 0 },
];

/** 得点式のパラメータ */
export const SCORE = {
  rotationExp: 1.42,       // 回転数の指数。欲張るほど跳ねる
  rotationBase: 120,
  twistBonus: 210,
  heightBonus: 9.0,        // 落差1mあたり
  ringBonus: 320,
  coinValue: 45,
  coinCurrency: 15,       // コインは直接お金にもなる
  wallKickBonus: 260,
  perfectTakeoff: 300,
  noRotationPenalty: 0.35, // 全く回らないと「ただ落ちただけ」
  coinsPerPoint: 1 / 55,
  varietyStep: 0.3,        // ラン中に新しい技を出すたび加算される倍率
  varietyMax: 3.5,
  repeatDecay: 0.55,       // 同じ技の繰り返しは価値が下がる
  // 「その姿勢を実際に保った」と認める最小回転量(回転)。
  // 伸型は角運動量が落ちるので、早く開いて耐えないと 0.25 に届かない。
  shapeHoldRot: 0.16,
  allShapesBonus: 0.5,    // 抱え→えび→伸 を全部通したときの加算
};

/** ラン構成: 1ランは5ダイブ。最後は "THE BIG ONE" で3倍賭け。 */
export const RUN = {
  dives: 5,
  bigOneIndex: 4,
  bigOneMult: 3.0,
};

export const CHARACTERS = [
  {
    id: 'rookie', name: 'ルーキー', en: 'Rookie', cost: 0,
    desc: '素直な性能。まずはこの子で基礎を固める。',
    skin: 0xf3c9a0, suit: 0x2f6fd0, hair: 0x3a2a1c,
    power: 1.0, inertia: 1.0, spin: 1.0, splash: 1.0, coinMult: 1.0, build: 'normal',
  },
  {
    id: 'gymnast', name: 'たいそう選手', en: 'Gymnast', cost: 900,
    desc: '回転が速く空中で細かく効く。跳躍力は控えめ。',
    skin: 0xe8b98c, suit: 0xd0245f, hair: 0x1d1512,
    power: 0.9, inertia: 0.78, spin: 1.28, splash: 0.85, coinMult: 1.0, build: 'slim',
  },
  {
    id: 'muscle', name: 'マッスル', en: 'Bodybuilder', cost: 1800,
    desc: '爆発的な跳躍。ただし重く、回転は鈍く水しぶきも巨大。',
    skin: 0xd79a63, suit: 0x2a2a33, hair: 0x2b1d10,
    power: 1.32, inertia: 1.42, spin: 0.82, splash: 1.7, coinMult: 1.0, build: 'bulk',
  },
  {
    id: 'suit', name: 'サラリーマン', en: 'Businessman', cost: 2600,
    desc: '性能は平凡だがコイン獲得+60%。稼ぎ頭。',
    skin: 0xf0c4a2, suit: 0x30364a, hair: 0x201812,
    power: 0.98, inertia: 1.05, spin: 0.98, splash: 1.1, coinMult: 1.6, build: 'normal',
  },
  {
    id: 'penguin', name: 'ペンギン', en: 'Penguin Suit', cost: 4200,
    desc: '異常に良く回り、水しぶきは最小。跳躍は低い。バカ強い。',
    skin: 0x1b2030, suit: 0x11151f, hair: 0xffb020,
    power: 0.84, inertia: 0.6, spin: 1.45, splash: 0.5, coinMult: 1.0, build: 'round',
  },
  {
    id: 'astro', name: 'うちゅうひこうし', en: 'Astronaut', cost: 7000,
    desc: '個人重力場を展開。滞空が長く、空中でやりたい放題。',
    skin: 0xdfe6f2, suit: 0xe8eef7, hair: 0x9aa7bb,
    power: 1.1, inertia: 1.0, spin: 1.0, splash: 0.9, coinMult: 1.1, build: 'bulk',
    gravityMult: 0.68,
  },
];

/**
 * スポット定義。
 * height = 水面からの飛び込み台の高さ。rings/coins は台のローカル座標(前方 +Z)。
 */
export const SPOTS = [
  {
    id: 'dock', name: 'ボートの桟橋', en: 'Boat Dock', cost: 0, starsToUnlock: 0,
    height: 7.5, theme: 'lagoon', wind: 0,
    tint: 0x8fd6ff, water: 0x1fa5c9, fog: 0xbfe9ff,
    thresholds: [8000, 25000, 55000],
    desc: '穏やかなラグーン。基本の前宙と入水を体に入れる場所。',
  },
  {
    id: 'palm', name: 'ヤシの岩場', en: 'Palm Cliff', cost: 0, starsToUnlock: 2,
    height: 15.0, theme: 'tropic', wind: 0.6,
    tint: 0x9ae7c8, water: 0x109a9e, fog: 0xcaf3e4,
    thresholds: [12000, 34000, 72000],
    desc: '本格的な高さ。二回転以上を安全に収める練習に最適。',
  },
  {
    id: 'falls', name: '滝の岩棚', en: 'Waterfall Ledge', cost: 1200, starsToUnlock: 5,
    height: 23.0, theme: 'falls', wind: 1.5,
    tint: 0x86c9ff, water: 0x0f7fb8, fog: 0xd6ecff,
    thresholds: [20000, 50000, 105000],
    desc: '横風あり。滝つぼは荒れていて入水判定がシビア。',
  },
  {
    id: 'ruins', name: '古代の遺跡', en: 'Ancient Ruins', cost: 3500, starsToUnlock: 8,
    height: 31.0, theme: 'ruins', wind: 1.0,
    tint: 0xffd9a0, water: 0x1d7f8f, fog: 0xffe9c9,
    thresholds: [28000, 68000, 145000],
    desc: '崩れた神殿の頂。壁が近く、ウォールキックで高度を稼げる。',
    wallKick: true,
  },
  {
    id: 'crane', name: '港のクレーン', en: 'Sky Crane', cost: 8000, starsToUnlock: 11,
    height: 44.0, theme: 'harbor', wind: 2.2,
    tint: 0xb9c7e8, water: 0x18566f, fog: 0xd9e2f5,
    thresholds: [38000, 92000, 195000],
    desc: '正気の沙汰ではない高さ。落差ボーナスが莫大。強風注意。',
  },
  {
    id: 'volcano', name: '火山の縁', en: 'Volcano Rim', cost: 16000, starsToUnlock: 14,
    height: 56.0, theme: 'volcano', wind: 1.8,
    tint: 0xff9a5a, water: 0x0d2b3f, fog: 0x3a1e28, night: true,
    thresholds: [50000, 120000, 255000],
    desc: '夜の火口。火の粉が舞い、下は冷えた黒い水。最終試練。',
    wallKick: true,
  },
];

/** 回転数 → 呼称 */
export const ROTATION_NAMES = [
  [0.35, 'ダイブ',      'Dive'],
  [0.75, 'ハーフ',      'Half'],
  [1.25, 'シングル',    'Single'],
  [1.75, 'ワン半',      'One-and-a-Half'],
  [2.25, 'ダブル',      'Double'],
  [2.75, 'ダブル半',    'Two-and-a-Half'],
  [3.25, 'トリプル',    'Triple'],
  [3.75, 'トリプル半',  'Three-and-a-Half'],
  [4.25, 'クアッド',    'Quad'],
  [5.25, 'クイント',    'Quint'],
  [6.25, 'セクスタプル', 'Sextuple'],
  [99,   'インセイン',  'Insane'],
];

export const TWIST_NAMES = [
  [0.4, '', ''],
  [0.9, 'ハーフツイスト', 'Half Twist'],
  [1.4, 'フルツイスト',   'Full Twist'],
  [1.9, '1.5ツイスト',    'One-and-a-Half Twist'],
  [2.9, 'ダブルツイスト', 'Double Twist'],
  [99,  'トリプルツイスト', 'Triple Twist'],
];
