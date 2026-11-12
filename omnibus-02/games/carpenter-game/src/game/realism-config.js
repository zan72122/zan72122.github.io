// 現実性に関わる寸法と時間を一か所で管理する。
// Three.js の 1 unit は、このゲームではおおむね 1 m として扱う。
export const CUT_STATION = Object.freeze({
  benchRightX: 0.95,
  bladeClearance: 0.025,
  clampInset: 0.12,
  clampMinEdgeInset: 0.075,
});

export const HAMMER_MOTION = Object.freeze({
  readyAngle: 0.82,
  windupAngle: 1.02,
  reboundAngle: 0.30,
  windupSeconds: 0.07,
  strikeSeconds: 0.16,
  reboundSeconds: 0.10,
});

export const FREEPLAY_JOINERY = Object.freeze({
  surfaceOffset: 0.003,
  maxGap: 0.018,
  maxRayDistance: 0.24,
  firstDepth: 0.030,
  finalDepth: 0.052,
});

export const PAINT_ASSIST = Object.freeze({
  minSeconds: 0.8,
  maxSeconds: 2.4,
  secondsPerFace: 0.075,
  brushLift: 0.03,
  handLift: 0.12,
});
