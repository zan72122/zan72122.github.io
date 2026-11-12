// 島変貌イベントのレジストリと、イベント共通の親クラス。
// js/minigames/harness.js の GAME_CLASSES と同じ作法で、
// ここが表、各イベントが1ファイルになる。
// board.js はこのファイルだけを import する。

import { TideEvent } from './tide.js';
import { SpinEvent } from './spin.js';
import { TsunamiEvent } from './tsunami.js';
import { FreezeEvent } from './freeze.js';
import { FlipEvent } from './flip.js';
import { EclipseEvent } from './eclipse.js';
import { SkyEvent } from './sky.js';
import { SplitEvent } from './split.js';
import { WheelEvent } from './wheel.js';
import { LeviathanEvent } from './leviathan.js';
// ===== Phase 5 / 5b ここから =====
import { EruptEvent } from './erupt.js';
import { RocketEvent } from './rocket.js';
import { NightEvent } from './night.js';
// ===== Phase 5 / 5b ここまで =====
// ===== Phase 5 / 5a ここから =====
import { AuroraEvent } from './aurora.js';
import { CandyEvent } from './candy.js';
import { TiltEvent } from './tilt.js';
import { ShrinkEvent } from './shrink.js';
// ===== Phase 5 / 5a ここまで =====

/**
 * @typedef {object} WorldEventEntry
 * @property {string}   id                 ?event= のキー。英小文字のみ
 * @property {string}   name               ひらがなの表示名(バナーに出す)
 * @property {string}   icon               絵文字1〜2字
 * @property {number}   minRound           このラウンド以上で抽選対象(1始まり)
 * @property {number}   maxRound           このラウンド以下で抽選対象。Infinity 可
 * @property {boolean}  exclusiveWithBoss  true ならタコすけと同じラウンドでは抽選しない
 * @property {number}   durationSec        所要秒の見積り。予算判定に使う(実測ではない)
 * @property {number}   weight             抽選の基礎重み。大きいほど出やすい。0 は抽選プールから外す
 * @property {string}  [weatherOverride]   WEATHERS のキー。run() 前に setWeather し、後で戻す
 * @property {boolean}  touchesTurn        _takeTurn / _moveCharacter の挙動を変えるか
 * @property {(state: object) => boolean} [condition] 追加の発火条件(純関数)
 * @property {(ctx: object) => WorldEventBase} create
 */

/**
 * 島変貌イベントの一覧。
 * 各フェーズでは、そのフェーズで実装したエントリだけをここに置く。
 * durationSec は Phase 1 の3本が ?event= の再生で計った実測にもとづく上限で、
 * Phase 2 の3本(freeze / flip / eclipse)は設計書 3.2 の見積りである。
 * freeze と flip は そのラウンド ぜんぶに効くので、?event= の再生時間とは意味がちがう。
 * 途中で宝やコインを取りつくすと、実プレイは これより短くなる(設計書 8章 #5)。
 * @type {WorldEventEntry[]}
 */
export const WORLD_EVENTS = [
  { id: 'tide', name: 'うみが ごっそり ひいた', icon: '🐚', minRound: 2, maxRound: 4,
    exclusiveWithBoss: true, durationSec: 56, weight: 10, weatherOverride: 'lowtide',
    touchesTurn: false, create: (c) => new TideEvent(c) },

  { id: 'spin', name: 'ぐるぐる しままわし', icon: '🎠', minRound: 2, maxRound: 4,
    exclusiveWithBoss: false, durationSec: 26, weight: 12,
    touchesTurn: false, create: (c) => new SpinEvent(c) },

  { id: 'tsunami', name: 'ざっぱーん だいつなみ', icon: '🌊', minRound: 3, maxRound: 4,
    exclusiveWithBoss: true, durationSec: 56, weight: 10, weatherOverride: 'tidal',
    touchesTurn: false, condition: (s) => s.totalCoins >= 30,
    create: (c) => new TsunamiEvent(c) },

  { id: 'freeze', name: 'しまが こおった', icon: '❄️', minRound: 2, maxRound: 4,
    exclusiveWithBoss: false, durationSec: 50, weight: 10, weatherOverride: 'frozen',
    touchesTurn: true, create: (c) => new FreezeEvent(c) },

  { id: 'flip', name: 'さかさま じま', icon: '🙃', minRound: 2, maxRound: 4,
    exclusiveWithBoss: true, durationSec: 24, weight: 9, weatherOverride: 'upsidedown',
    touchesTurn: true, create: (c) => new FlipEvent(c) },

  { id: 'eclipse', name: 'まひるの ほしふり', icon: '🌑', minRound: 2, maxRound: 4,
    exclusiveWithBoss: false, durationSec: 45, weight: 8, weatherOverride: 'eclipse',
    touchesTurn: false, condition: (s) => s.maxStars >= 1,
    create: (c) => new EclipseEvent(c) },

  { id: 'sky', name: 'そらとぶ しま', icon: '🏝️', minRound: 3, maxRound: 4,
    exclusiveWithBoss: true, durationSec: 68, weight: 9, weatherOverride: 'sky',
    touchesTurn: false, create: (c) => new SkyEvent(c) },

  // 割れているのは そのラウンドだけだが、チーム分けは最終ラウンドまで のこる。
  // ROUNDS が 4 未満だと チーム戦を味わう前にゲームが終わるので条件に入れる。
  { id: 'split', name: 'しまが まっぷたつ', icon: '✂️', minRound: 3, maxRound: 4,
    exclusiveWithBoss: true, durationSec: 27, weight: 9,
    touchesTurn: false, condition: (s) => s.rounds >= 4,
    create: (c) => new SplitEvent(c) },

  // 🐢 クライマックス。ラウンド4だけ、ゲームぜんたいの物語の山として1回だけ起きる。
  { id: 'awake', name: 'おおきな いきものの せなか', icon: '🐢', minRound: 4, maxRound: 4,
    exclusiveWithBoss: true, durationSec: 72, weight: 14, weatherOverride: 'voyage',
    touchesTurn: false, create: (c) => new LeviathanEvent(c) },

  // 🎲 フィナーレ固定。board.start() 末尾の _worldEvent(0) が id を名指しで呼ぶので、
  // 抽選プールからは weight: 0 で外す。minRound / maxRound も 0 にして
  // chooseWorldEvent の どのラウンドの候補にも入らないようにしてある。
  { id: 'wheel', name: 'しま まるごと だいルーレット', icon: '🎲', minRound: 0, maxRound: 0,
    exclusiveWithBoss: false, durationSec: 52, weight: 0,
    touchesTurn: false, create: (c) => new WheelEvent(c) },

  // ===== Phase 5 / 5b ここから =====
  // 拡張枠3本。既存10件が maxRound: 4 なのは Phase 1〜4 が ROUNDS = 5 を前提に書かれたためで、
  // _worldEvent は CONFIG.WORLD_EVENT_ROUNDS([2 .. ROUNDS-1])で足切りしてから抽選する。
  // だから上限を切る必要がなく、3本は Infinity にして ?rounds= を増やしたときも候補に残す(設計書 9.2)。
  // durationSec は ?event=<id>&turbo=1 の event-start → event-end のヘッドレス実測を
  // 1.6(ヘッドレスは実GPU の約1.6倍に伸びる)で割って切り上げた値である(設計書 9.11 #4)。
  // 実測: erupt 87.8s → 55 ／ rocket 92.6s → 58 ／ night 86.2s → 54。3本とも 90秒の上限内。

  // 🌋 誰のコインも減らない純プラスの1本。天気は その日の空のまま噴火する。
  { id: 'erupt', name: 'だいふんか しんしま たんじょう', icon: '🌋', minRound: 3, maxRound: Infinity,
    exclusiveWithBoss: true, durationSec: 55, weight: 9,
    touchesTurn: false, create: (c) => new EruptEvent(c) },

  // 🚀 島ごと y = 220 の宇宙へ。🌀ぐるぐる星が最大の逆転札。
  { id: 'rocket', name: 'しまロケット はっしゃ', icon: '🚀', minRound: 3, maxRound: Infinity,
    exclusiveWithBoss: true, durationSec: 58, weight: 8, weatherOverride: 'space',
    touchesTurn: false, create: (c) => new RocketEvent(c) },

  // 🌌 星をつないで星座にする。最後の1本をつないだ子が ⭐(手番が後ろほど有利 = 下位救済)。
  { id: 'night', name: 'ほしぞら すごろく', icon: '🌌', minRound: 3, maxRound: Infinity,
    exclusiveWithBoss: true, durationSec: 54, weight: 8, weatherOverride: 'starrynight',
    touchesTurn: false, create: (c) => new NightEvent(c) },
  // ===== Phase 5 / 5b ここまで =====

  // ===== Phase 5 / 5a ここから =====
  // durationSec は ?scenario=round:<id>&turbo=1 のヘッドレス実測 ÷ 1.6 を切り上げた値である
  // (ヘッドレスは実GPU の約1.6倍に伸びる。設計書 9.11 #4 / ExecPlan Decision Log #8)。

  // 🎇 盤面の種別を塗り替える。40秒以内なので タコすけと同じラウンドにも出られる。
  { id: 'aurora', name: 'オーロラの ぬりかえ', icon: '🎇', minRound: 2, maxRound: Infinity,
    exclusiveWithBoss: false, durationSec: 28, weight: 11, weatherOverride: 'aurora',
    touchesTurn: false, create: (c) => new AuroraEvent(c) },

  // 🌈 は「にじの日」だけ。weatherOverride ではなく condition で表す(設計書 9.2 の結論)。
  { id: 'candy', name: 'にじの はしの むこう', icon: '🌈', minRound: 3, maxRound: Infinity,
    exclusiveWithBoss: true, durationSec: 38, weight: 9,
    touchesTurn: false, condition: (s) => s.weather === 'rainbowy',
    create: (c) => new CandyEvent(c) },

  // 🌀 は だいつなみ と 遊びが似るので、同じゲームでは あとから出さない(設計書 9.8)。
  { id: 'tilt', name: 'ぐらぐら かたむき', icon: '🌀', minRound: 2, maxRound: Infinity,
    exclusiveWithBoss: true, durationSec: 55, weight: 10,
    touchesTurn: false,
    condition: (s) => s.totalCoins >= 20 && !s.usedIds.includes('tsunami'),
    create: (c) => new TiltEvent(c) },

  // 🫧 は そのラウンドだけ world.tileCount を 24 にする唯一の本(設計書 9.9)。
  { id: 'shrink', name: 'しまが ちっちゃく なっちゃった', icon: '🫧', minRound: 3, maxRound: Infinity,
    exclusiveWithBoss: true, durationSec: 22, weight: 9, condition: (s) => s.rounds >= 4,
    touchesTurn: true, create: (c) => new ShrinkEvent(c) },
  // ===== Phase 5 / 5a ここまで =====
];

// 親クラスは base.js にある。board.js から見た窓口を1つに保つため、ここから再exportする。
export { WorldEventBase } from './base.js';
