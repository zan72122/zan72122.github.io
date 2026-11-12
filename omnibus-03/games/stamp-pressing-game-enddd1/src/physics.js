/**
 * 物理・接触に関する描画非依存の規則。
 *
 * このゲームは剛体エンジンではなく、拘束付きのキネマティック移動を使う。
 * そのため「次の位置を決めてから描く」のではなく、接触面と接触パッチを
 * ひとつの規則から求め、印章・紙・印影の全てが同じ値を参照する。
 */

export const DENT_CORE_RATIO = 0.90;
export const DENT_SHOULDER_RATIO = 1.08;
export const DENT_RIM_RATIO = 1.35;
export const DENT_RIM_HEIGHT = 0.16;

export function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

export function smoothstep01(value) {
  const t = clamp01(value);
  return t * t * (3 - 2 * t);
}

/**
 * 平らな印面に紙が沿うよう、印面内は同じ深さに拘束する。
 * 外側だけを滑らかに戻し、そのさらに外へ小さな盛り上がりを作る。
 */
export function dentDisplacementAt(x, z, dents = []) {
  let displacement = 0;
  for (const dent of dents) {
    if (!dent || dent.depth <= 0 || dent.radius <= 0) continue;
    const distance = Math.hypot(x - dent.x, z - dent.z);
    const core = dent.radius * DENT_CORE_RATIO;
    const shoulder = dent.radius * DENT_SHOULDER_RATIO;
    const rimEnd = dent.radius * DENT_RIM_RATIO;

    if (distance <= core) {
      displacement -= dent.depth;
    } else if (distance < shoulder) {
      const blend = smoothstep01((distance - core) / (shoulder - core));
      displacement -= dent.depth * (1 - blend);
    } else if (distance < rimEnd) {
      const rimT = (distance - shoulder) / (rimEnd - shoulder);
      displacement += dent.depth * DENT_RIM_HEIGHT * Math.sin(rimT * Math.PI);
    }
  }
  return displacement;
}

/** 円と、中心まわりに回転した矩形の交差。 */
export function circleIntersectsRotatedRect(
  circleX, circleZ, radius,
  rectX, rectZ, halfWidth, halfDepth, angle = 0,
) {
  const dx = circleX - rectX;
  const dz = circleZ - rectZ;
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  const localX = dx * c + dz * s;
  const localZ = -dx * s + dz * c;
  const nearestX = Math.max(-halfWidth, Math.min(halfWidth, localX));
  const nearestZ = Math.max(-halfDepth, Math.min(halfDepth, localZ));
  return Math.hypot(localX - nearestX, localZ - nearestZ) <= radius;
}

/** 印面円盤の下にある紙面の最高点を、中心と同心円上から保守的に求める。 */
export function highestPaperSurface(
  x, z, radius, bodyTop, dents = [], radialSamples = 24,
) {
  let highest = bodyTop + dentDisplacementAt(x, z, dents);
  for (const ring of [0.5, 1]) {
    for (let i = 0; i < radialSamples; i++) {
      const angle = (i / radialSamples) * Math.PI * 2;
      const sampleX = x + Math.cos(angle) * radius * ring;
      const sampleZ = z + Math.sin(angle) * radius * ring;
      highest = Math.max(highest, bodyTop + dentDisplacementAt(sampleX, sampleZ, dents));
    }
  }
  return highest;
}

/**
 * 印章の円形衝突プロキシの下で最も高い面を返す。
 * postage は {x,z,halfWidth,halfDepth,angle,top} の形で省略可能。
 */
export function contactSurfaceHeight({
  x, z, radius, bodyTop, dents = [], postage = null,
}) {
  let highest = highestPaperSurface(x, z, radius, bodyTop, dents);
  if (postage && circleIntersectsRotatedRect(
    x, z, radius,
    postage.x, postage.z,
    postage.halfWidth, postage.halfDepth,
    postage.angle || 0,
  )) {
    highest = Math.max(highest, postage.top);
  }
  return highest;
}

/** フレームレートに依存しない指数減衰係数。 */
export function dampingAlpha(rate, dt) {
  return 1 - Math.exp(-Math.max(0, rate) * Math.max(0, dt));
}
