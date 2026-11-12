// テスト用の決定的な乱数。?seed=N があるときだけ固定列になる。
// 結果に効く10か所(サイコロ・CPU待ち・iceSlide・触手・イベント抽選・スター配置・
// ルーレットの当選)だけが rand() を使い、紙ふぶき・雲・草木は Math.random のまま残す。
// 装飾系は毎フレーム乱数を消費するので、そこまで固定すると fps で列がずれて逆に非決定になる。

import { DEBUG } from './config.js';

// mulberry32: 32bit 状態の小さな PRNG。同じ種なら必ず同じ列になる。
function mulberry32(a) {
  return function next() {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const raw = DEBUG.seed;
const ok = raw != null && raw !== '' && Number.isFinite(Number(raw));

/** ?seed= が有効なら その整数、無ければ null(= 非決定) */
export const SEED = ok ? (Number(raw) | 0) : null;

const gen = SEED === null ? Math.random : mulberry32(SEED);

/** 0 以上 1 未満。?seed= が無ければ Math.random と同じ非決定。 */
export const rand = () => gen();
