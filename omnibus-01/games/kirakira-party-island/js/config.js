// ゲーム全体の設定値。数値をいじるだけで難易度・見た目を調整できる。

import { parseBoundedInteger } from './rules.js';

// URLパラメータで回数・時間を調整できる(テスト・お好み用)
// 例: ?rounds=3&mgtime=15&mg=balloon
const qp = new URLSearchParams(typeof location !== 'undefined' ? location.search : '');

const ROUNDS = parseBoundedInteger(qp.get('rounds'), 5, 1, 12);

// テスト用の加速係数。?turbo=1..4(既定 1 = 従来どおり)。
// ゲーム時計(main.js の timeScale)・wait(ms)・showBanner の3か所だけに効く。
// 4 を上限にしているのは、1フレームの dt が 0.05×TURBO になり、
// これ以上あらくすると ホップの着地位置が ずれるためである(調査 §5.4)。
const TURBO = Math.min(4, Math.max(1, Number(qp.get('turbo')) || 1));
export { TURBO };

// 島変貌イベントを抽選するラウンド。
// ラウンド1は「島を覚える回」、最終ラウンドは既存の大一番を邪魔しないので外す。
// ROUNDS が 2 以下なら空配列になり、抽選そのものが行われない。
export function worldEventRounds(rounds) {
  const list = [];
  for (let r = 2; r <= rounds - 1; r++) list.push(r);
  return list;
}

export const CONFIG = {
  ROUNDS,                  // ボードゲームの周回数
  TURBO,                   // テスト用の加速係数(?turbo=)。既定 1
  TILE_COUNT: 48,          // すごろくマスの数(4ゾーン × 12マス)
  BOARD_RADIUS: 16.5,      // マスが並ぶ円の半径
  ISLAND_RADIUS: 30,       // 島の半径
  SEA_SIZE: 340,           // 海の一辺
  HOP_TIME: 0.3,           // 1マス移動にかける秒数
  COIN_TILE_GAIN: 3,
  HEART_TILE_GAIN: 2,
  MINIGAME_WIN_COINS: 5,
  MINIGAME_TIME: parseBoundedInteger(qp.get('mgtime'), 20, 5, 120), // ミニゲーム制限秒
  PIXEL_RATIO_MAX: 2,
  MAX_SIMULATION_STEP: 0.05, // 物理・アニメを一度に進める最大秒数
  MAX_ACTIVE_FRAME_DELTA: 0.25, // 低FPSを追従しつつ巨大な時間飛びを防ぐ
  SUPER_STARS: 2,          // スターこの数でスーパーすがたに変身
  STAR_MIN_FORWARD: 4,     // スターを基準キャラの何マス先から置くか
  STAR_MAX_FORWARD: 8,
  BOSS_TICKLE_GOAL: 5,     // タコすけを笑わせるタップ回数
  BOSS_REWARD_COINS: 5,
  ROPEWAY_DIST: 14,        // ロープウェイで進むマス数
  TURTLE_DIST: 5,          // カメさんで進むマス数
  HOLE_EXIT_DIST: 8,       // どうくつの出口(おとしあなから何マス先か)

  // ---- 島変貌イベント(第2次大型拡張) ----
  WORLD_EVENT_ROUNDS: worldEventRounds(ROUNDS), // 抽選するラウンド([2 .. ROUNDS-1])
  WORLD_EVENT_MAX_SEC: 90,       // 1本の所要秒の上限
  WORLD_EVENT_BOSS_MAX_SEC: 45,  // タコすけと同じラウンドのときの上限

  // ❄️ しまが こおった(W-03)
  ICE_SLIDE_MAX: 3,              // 惰性で余分にすべる最大マス数
  ICE_FLATTEN: 0.75,             // TERRAIN.flatten の目標値(スケートリンクの平らさ)

  // 🏝️ そらとぶ しま(W-01)
  SKY_TILE_COUNT: 12,            // そらのわ(くもリング)のマス数
  SKY_LIFT: 46,                  // islandGroup.position.y の目標(島が浮く高さ)
  SKY_RING_RADIUS: 21.5,         // くもリングの半径(島ローカル)
  SKY_CLOUD_RAISE: 30,           // 上昇中、遠景の雲を どれだけ持ちあげるか(高所の恐怖対策)

  // ✂️ しまが まっぷたつ(W-04)
  SPLIT_GAP: 3.2,                // TERRAIN.splitGap の目標値(わけめの半幅)
  SPLIT_TEAM_BONUS: 5,           // チーム結成ボーナスのコイン

  // 🎲 しま まるごと だいルーレット(W-20)
  WHEEL_MIN_SHARE: 0.12,         // 1色ぶんの最低面積(コイン0の子でも当たる目がある)
  WHEEL_SPINS: 3,                // まわす回数
  WHEEL_BONUS_SPIN: 1,           // 何回目(0始まり)を 最下位2倍幅のボーナス回にするか
  WHEEL_CONSOLATION: 20,         // 1回も当たらなかった子への がんばったで賞
  WHEEL_TAP_WAIT: 5,             // タップを待つ秒数(すぎたら自動で減速をはじめる)

  // 🐢 しまは おおきな いきものの せなか(W-06)
  VOYAGE_SLIDE_MAX: 1,           // 揺れ1回あたり 何マスずれるか
  VOYAGE_SWAYS: 4,               // 揺れの回数
  VOYAGE_JUMPS: 3,               // ジャンプ(コインの雨)の回数
  VOYAGE_TURTLE_SCALE: 11,       // 巨大ガメは ふつうのカメの何倍か
  VOYAGE_LIFT: 6,                // 背中が持ちあがる高さ

  // 🌑 まひるの ほしふり(W-12)
  ECLIPSE_DROP_COUNT: 88,        // 降ってくる星の総数(250ms × 88 = 22秒)
  ECLIPSE_REAL_STARS: 3,         // そのうち本物のスターの数
  ECLIPSE_GRAB_RADIUS: 1.0,      // 星にさわったと判定する半径
  ECLIPSE_PLAYER_SPEED: 4.5,     // プレイヤーの走る速さ(units/s)
  ECLIPSE_CPU_SPEED: 3.6,        // CPU の走る速さ(プレイヤーより すこし おそい)

  // ===== Phase 5 / 5b ここから =====
  // 🌋 だいふんか しんしま たんじょう(W-09)
  ERUPT_ISLE_TILES: 8,           // 新島のほうせきマスの数
  ERUPT_ISLE_RADIUS: 8.5,        // 新島(黒曜石ドーム)の半径
  ERUPT_RING_RADIUS: 5.5,        // ほうせきマスが並ぶ円の半径(新島ローカル)
  ERUPT_ISLE_DIST: 44,           // 島の中心から新島の中心までの距離(本島の縁 r=31 の外)

  // 🚀 しまロケット はっしゃ(W-10)
  ROCKET_LIFT: 220,              // islandGroup.position.y の目標(宇宙の高さ)
  PLANET_COUNT: 8,               // 惑星の数
  ROCKET_PLANET_RADIUS: 30,      // 惑星が散らばる円の半径(島ローカル)

  // 🌌 ほしぞら すごろく(W-11)
  NIGHT_LIFT: 72,                // 星空エリアグループの高さ(scene 直下)
  NIGHT_RING_COUNT: 24,          // 星の輪のマス数
  NIGHT_RING_RADIUS: 15,         // 星の輪の半径(星空エリアローカル)
  // ===== Phase 5 / 5b ここまで =====

  // ===== Phase 5 / 5a ここから =====
  // 🌈 にじの はしの むこう(W-14)。おかしじまは sky のくもリングと同じ「臨時ボード」方式で、
  // Tile も TILE_TYPES も使わない(設計書 9.7 の結論)。
  CANDY_TILE_COUNT: 12,          // おかしじまのマス数
  CANDY_LIFT: 38,                // おかしじまの高さ(scene 直下・y)
  CANDY_RING_RADIUS: 13,         // おかしじまの半径

  // 🌀 ぐらぐら かたむき(W-17)
  TILT_ANGLE: 0.28,              // islandGroup.rotation.z の目標(約16度)
  TILT_COIN_COUNT: 24,           // 斜面を転がるコインの数(専用 InstancedMesh)
  TILT_SPILL_RATIO: 0.6,         // 持っているコインの何割をこぼすか
  TILT_SPILL_CAP: 20,            // 1人あたりの こぼす上限

  // 🫧 しまが ちっちゃく(W-19)
  SHRINK_SCALE: 0.62,            // TERRAIN.shrink の目標値
  SHRINK_KEEP_EVERY: 2,          // 何マスに1つ残すか(48 → 24)
  SHRINK_FEE: 4,                 // 沈んだマスに居た子への お引越し代
  // ===== Phase 5 / 5a ここまで =====
};

// テスト用: ボードイベントを強制(?tile=STORM 等)/イベント即時発火
export const DEBUG = {
  forceTile: qp.get('tile'),
  // ?seed=N … 結果に効く乱数を固定する(js/rng.js)
  seed: qp.get('seed'),
  // ?scenario=wheel-finale … 既知の整合状態を用意してから本番の start() を通す(js/debug.js)
  scenario: qp.get('scenario'),
  // のりもの: boss | coaster | cave | turtle | ropeway | storm
  // 島変貌: tide | spin | tsunami | freeze | flip | eclipse | sky | split | wheel | awake
  // ===== Phase 5 / 5b ここから =====
  // 島変貌(Phase 5 / 5b): erupt | rocket | night
  // ===== Phase 5 / 5b ここまで =====
  // ===== Phase 5 / 5a ここから =====
  // 島変貌(Phase 5 / 5a): aurora | candy | tilt | shrink
  // ===== Phase 5 / 5a ここまで =====
  forceEvent: qp.get('event'),
};

// キャラクター定義(オリジナルの どうぶつフレンズ)
// startTile: それぞれ別のゾーンからスタートして、島じゅうが舞台になる
export const CHARACTERS = [
  {
    id: 'momo', name: 'モモ', species: 'bunny', emoji: '🐰',
    color: 0xffa7c4, accent: 0xffffff, ui: '#ff8fb5', startTile: 0,
  },
  {
    id: 'piyo', name: 'ピヨ', species: 'chick', emoji: '🐤',
    color: 0xffd94d, accent: 0xffaa33, ui: '#ffc93e', startTile: 12,
  },
  {
    id: 'pen', name: 'ペン', species: 'penguin', emoji: '🐧',
    color: 0x6fb7ff, accent: 0xffffff, ui: '#5aa7f7', startTile: 24,
  },
  {
    id: 'kero', name: 'ケロ', species: 'frog', emoji: '🐸',
    color: 0x84d96c, accent: 0xfff6c8, ui: '#63c94f', startTile: 36,
  },
];

// 4つのゾーン(12マスごと)
export const ZONES = [
  { id: 'beach',   name: 'はまべ',     emoji: '🏖️' },
  { id: 'jungle',  name: 'ジャングル', emoji: '🌴' },
  { id: 'volcano', name: 'かざん',     emoji: '🌋' },
  { id: 'park',    name: 'ゆうえんち', emoji: '🎡' },
];

// マス番号 → ゾーン番号(0〜3)。count はリングのマス数で、既定は本島の48。
// 引数化してあるのは、将来マス数の違うリングが増えても同じ関数で引けるようにするため。
export function zoneOfTile(i, count = 48) {
  return Math.floor(((i % count) + count) % count / (count / 4));
}

// マスの種類
export const TILE_TYPES = {
  COIN:    { key: 'COIN',    color: 0x63b3ff, label: 'コイン' },
  HEART:   { key: 'HEART',   color: 0xff9dbe, label: 'ハート' },
  RAINBOW: { key: 'RAINBOW', color: 0xc19bff, label: 'にじワープ' },
  EVENT:   { key: 'EVENT',   color: 0x7fe08a, label: 'はなび' },
  STAR:    { key: 'STAR',    color: 0xffd23e, label: 'スター' },
  STORM:   { key: 'STORM',   color: 0x6b6485, label: 'くろくも' },
  BOMB:    { key: 'BOMB',    color: 0x4a4a58, label: 'ばくだんサイコロ' },
  HOLE:    { key: 'HOLE',    color: 0x8a6a4a, label: 'おとしあな' },
  TURTLE:  { key: 'TURTLE',  color: 0x4fd0c0, label: 'カメさん' },
  ROPEWAY: { key: 'ROPEWAY', color: 0xffb03c, label: 'ロープウェイ' },
  COASTER: { key: 'COASTER', color: 0xff6f9c, label: 'コースター' },
};

// 48マスのならび(ゾーンごとに味付け)。スターは動的に配置される。
const LAYOUT_48 = [
  // 🏖️ はまべ (0-11)
  'COIN', 'COIN', 'HEART', 'COIN', 'RAINBOW', 'COIN',
  'TURTLE', 'COIN', 'COIN', 'HEART', 'STORM', 'COIN',
  // 🌴 ジャングル (12-23)
  'COIN', 'COIN', 'HEART', 'HOLE', 'COIN', 'RAINBOW',
  'ROPEWAY', 'COIN', 'EVENT', 'STORM', 'COIN', 'HEART',
  // 🌋 かざん (24-35)
  'COIN', 'STORM', 'COIN', 'BOMB', 'COIN', 'HEART',
  'EVENT', 'COIN', 'RAINBOW', 'HOLE', 'STORM', 'COIN',
  // 🎡 ゆうえんち (36-47)
  'COIN', 'HEART', 'COIN', 'BOMB', 'RAINBOW', 'COIN',
  'COASTER', 'COIN', 'EVENT', 'HEART', 'STORM', 'COIN',
];

export function buildTileLayout(count) {
  const layout = [];
  for (let i = 0; i < count; i++) {
    let t = LAYOUT_48[i % 48];
    if (DEBUG.forceTile && TILE_TYPES[DEBUG.forceTile] && t === 'COIN') t = DEBUG.forceTile;
    layout.push(t);
  }
  return layout;
}

// 天気:ラウンドごとにうつりかわる(最終ラウンドは夕焼けの大一番)
export function weatherForRound(round, total) {
  if (round >= total) return 'sunset';
  return ['sunny', 'cloudy', 'squall', 'rainbowy'][(round - 1) % 4];
}

// ミニゲームを固定したいとき(?mg=balloon など)
export const FORCED_MINIGAME = qp.get('mg');

export const MINIGAMES = [
  { id: 'balloon', name: 'ふうせん パンパン', icon: '🎈', desc: 'ふうせんを タッチで わろう!' },
  { id: 'fruits',  name: 'フルーツ キャッチ', icon: '🍎', desc: 'かごを うごかして キャッチ!' },
  { id: 'race',    name: 'ぴょんぴょん レース', icon: '🏁', desc: 'タップれんだで はしろう!' },
  { id: 'stars',   name: 'きらきら タッチ', icon: '⭐', desc: 'でてきた ほしを タッチ!' },
  { id: 'fish',    name: 'おさかな すくい', icon: '🐟', desc: 'およぐ おさかなを タッチ!' },
  { id: 'cake',    name: 'ケーキ つみつみ', icon: '🎂', desc: 'タップで スポンジを おとそう!' },
  { id: 'cart',    name: 'トロッコ コースター', icon: '🚂', desc: 'みぎ ひだり タップで ほしあつめ!' },
  { id: 'volcano', name: 'ドッカン かざん', icon: '🌋', desc: 'いわを よけて ほうせき キャッチ!' },
];
