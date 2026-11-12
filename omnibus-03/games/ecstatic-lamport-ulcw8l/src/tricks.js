/**
 * tricks.js — 技の検出・命名・得点計算。
 *
 * 設計の核:
 *  1) 回転数は「欲」を煽るために指数(1.42)で伸ばす。もう半回転欲しくなる。
 *  2) 姿勢(TUCK/PIKE/LAYOUT)は回転速度と得点倍率のトレードオフ。
 *     速く回すほど点が安く、伸ばして回すほど高いが回りきらない。
 *  3) ラン中に同じ技を繰り返すと価値が減衰し、新しい技を出すと倍率が伸びる。
 *     → 「同じ技を安定させる」だけでは頭打ちになり、常に挑戦を強いられる。
 */

import { SHAPES, SCORE, ENTRY_GRADES, ROTATION_NAMES, TWIST_NAMES } from './config.js';

const TAU = Math.PI * 2;

export class TrickTracker {
  constructor() { this.reset(); }

  reset() {
    this.rot = 0;                  // 符号付き累積回転(rad)。+ が前方向
    this.absRot = 0;
    this.fwdRot = 0;
    this.backRot = 0;
    this.twistRot = 0;
    this.shapeRot = { tuck: 0, pike: 0, layout: 0 };
    this.shapeSeq = [];
    this.rings = 0;
    this.coins = 0;
    this.wallKicks = 0;
    this.perfectTakeoff = false;
    this.fallHeight = 0;
    this.maxHeight = 0;
    this.airTime = 0;
    this.halfMarks = 0;            // 効果音用の半回転カウンタ
  }

  /** 毎フレーム呼ぶ。dTheta はピッチ回転量(rad)、dTwist はひねり量(rad)。 */
  step(dTheta, dTwist, shape, dt) {
    this.rot += dTheta;
    const a = Math.abs(dTheta);
    this.absRot += a;
    if (dTheta > 0) this.fwdRot += a; else this.backRot += a;
    this.shapeRot[shape] = (this.shapeRot[shape] || 0) + a;
    if (a > 1e-4) {
      const last = this.shapeSeq[this.shapeSeq.length - 1];
      if (last !== shape) this.shapeSeq.push(shape);
    }
    this.twistRot += Math.abs(dTwist);
    this.airTime += dt;
  }

  /** 半回転を跨いだら true(ヒュン音のトリガ) */
  consumeHalfTurn() {
    const marks = Math.floor(this.absRot / Math.PI);
    if (marks > this.halfMarks) { this.halfMarks = marks; return true; }
    return false;
  }

  get rotations() { return this.absRot / TAU; }
  get twists() { return this.twistRot / TAU; }

  /** 支配的な姿勢(回転量で重み付け) */
  get dominantShape() {
    let best = 'layout', v = -1;
    for (const k of Object.keys(this.shapeRot)) if (this.shapeRot[k] > v) { v = this.shapeRot[k]; best = k; }
    return v <= 0 ? 'layout' : best;
  }

  /**
   * 姿勢倍率。
   * 「実際に保った中で最も難しい姿勢」で評価する — 実際の飛込競技の採点と同じ考え方。
   * 抱え型で溜めた回転を、水面手前で伸型に開いて 1/4 回転耐える。これが最高倍率への道。
   * 角運動量は伸型で急速に落ちるので、開くのが遅いと 0.25 回転に届かない。
   */
  get shapeMult() {
    const { best, held } = this._scored();
    if (!best) return SHAPES[this.dominantShape].mult;
    return SHAPES[best].mult + (held >= 3 ? SCORE.allShapesBonus : 0);
  }

  _scored() {
    const need = SCORE.shapeHoldRot * TAU;
    let best = null, held = 0;
    for (const k of ['tuck', 'pike', 'layout']) {
      if (this.shapeRot[k] >= need) {
        held++;
        if (!best || SHAPES[k].mult > SHAPES[best].mult) best = k;
      }
    }
    return { best, held };
  }

  /** 得点に採用された姿勢。技名とバリエーション判定もこれを使う。 */
  get scoredShape() { return this._scored().best || this.dominantShape; }
  get heldCount() { return this._scored().held; }

  /** その姿勢を「保った」と認められたか(HUD 用) */
  heldShapes() {
    const need = SCORE.shapeHoldRot * TAU;
    return { tuck: this.shapeRot.tuck >= need, pike: this.shapeRot.pike >= need, layout: this.shapeRot.layout >= need };
  }

  get direction() {
    const mixed = this.fwdRot > 0.4 * TAU && this.backRot > 0.4 * TAU;
    if (mixed) return 'reverse';
    return this.backRot > this.fwdRot ? 'back' : 'front';
  }
}

function pickName(table, value) {
  for (const row of table) if (value < row[0]) return row;
  return table[table.length - 1];
}

/** 技名を組み立てる。日本語と英語の両方を返す。 */
export function nameTrick(t) {
  const rotName = pickName(ROTATION_NAMES, t.rotations);
  const twName = pickName(TWIST_NAMES, t.twists);
  const shape = SHAPES[t.scoredShape];
  const dir = t.direction;

  if (t.rotations < 0.3 && t.twists < 0.4) {
    return { jp: 'スワンダイブ', en: 'Swan Dive' };
  }

  const dirJp = dir === 'back' ? 'ガイナー' : dir === 'reverse' ? 'リバース' : 'フロント';
  const dirEn = dir === 'back' ? 'Gainer' : dir === 'reverse' ? 'Reverse' : 'Front';

  const multiShape = t.heldCount >= 3;
  const shapeJp = multiShape ? `${shape.jp}コンボ` : shape.jp;
  const shapeEn = multiShape ? `${shape.label} Combo` : shape.label;

  let jp = `${rotName[1]}${dirJp} ${shapeJp}`;
  let en = `${rotName[2]} ${dirEn} ${shapeEn}`;
  if (twName[1]) { jp += ` + ${twName[1]}`; en += ` w/ ${twName[2]}`; }
  return { jp, en };
}

/** 入水角と残留角速度から評価を決める。 */
export function gradeEntry(angleDeg, spinAbs, headFirst) {
  const a = Math.abs(angleDeg);
  for (const g of ENTRY_GRADES) {
    if (a <= g.maxAngle && spinAbs <= g.maxSpin) {
      // 足からの入水は頭からより一段甘く見るが、RIP は頭からのみ。
      if (g.key === 'rip' && !headFirst) return ENTRY_GRADES[1];
      return g;
    }
  }
  return ENTRY_GRADES[ENTRY_GRADES.length - 1];
}

/**
 * 1ダイブの得点。
 * @param {TrickTracker} t
 * @param {object} grade  gradeEntry の戻り値
 * @param {object} opts   { fallHeight, bigOne, varietyMult, repeatCount, coinMult }
 */
export function scoreDive(t, grade, opts) {
  const rotations = t.rotations;
  const rotBase = Math.pow(rotations, SCORE.rotationExp) * SCORE.rotationBase;
  const shapeMult = t.shapeMult;

  let raw = rotBase * shapeMult;
  raw += t.twists * SCORE.twistBonus;
  raw += t.rings * SCORE.ringBonus;
  raw += t.coins * SCORE.coinValue;
  raw += t.wallKicks * SCORE.wallKickBonus;
  if (t.perfectTakeoff) raw += SCORE.perfectTakeoff;
  if (rotations < 0.25) raw *= SCORE.noRotationPenalty;

  const heightMult = 1 + Math.max(0, opts.fallHeight) / 40;
  const repeatFactor = Math.pow(SCORE.repeatDecay, Math.max(0, opts.repeatCount || 0));
  const bigOne = opts.bigOne ? 1 : 0;

  const total = raw * heightMult * grade.mult * (opts.varietyMult || 1) * repeatFactor
    * (bigOne ? 3 : 1);

  return {
    total: Math.round(total),
    raw: Math.round(raw),
    rotations,
    twists: t.twists,
    shapeMult,
    heightMult,
    entryMult: grade.mult,
    varietyMult: opts.varietyMult || 1,
    repeatFactor,
    bigOne: !!opts.bigOne,
    rings: t.rings,
    coins: t.coins,
    wallKicks: t.wallKicks,
    perfectTakeoff: t.perfectTakeoff,
    grade,
  };
}

/** 技のユニークキー(バリエーション判定用) */
export function trickKey(t) {
  const rotName = pickName(ROTATION_NAMES, t.rotations)[2];
  return `${t.direction}|${rotName}|${t.scoredShape}|${Math.round(t.twists)}`;
}

/** ラン全体の状態(バリエーション倍率を育てる) */
export class RunState {
  constructor(spot, bigOneIndex) {
    this.spot = spot;
    this.bigOneIndex = bigOneIndex;
    this.diveIndex = 0;
    this.total = 0;
    this.dives = [];
    this.used = new Map();
    this.varietyMult = 1;
    this.bestDive = 0;
    this.rips = 0;
  }

  keyCount(key) { return this.used.get(key) || 0; }

  commit(key, result) {
    const c = this.used.get(key) || 0;
    this.used.set(key, c + 1);
    if (c === 0 && this.diveIndex > 0) {
      this.varietyMult = Math.min(SCORE.varietyMax, this.varietyMult + SCORE.varietyStep);
    }
    this.total += result.total;
    this.bestDive = Math.max(this.bestDive, result.total);
    if (result.grade.key === 'rip') this.rips++;
    this.dives.push(result);
    this.diveIndex++;
  }

  get finished() { return this.diveIndex >= this.bigOneIndex + 1; }
  get isBigOne() { return this.diveIndex === this.bigOneIndex; }
}

export function starsFor(spot, runTotal) {
  let s = 0;
  for (const th of spot.thresholds) if (runTotal >= th) s++;
  return s;
}
