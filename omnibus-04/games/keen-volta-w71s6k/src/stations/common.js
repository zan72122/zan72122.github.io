// Shared station helpers: domino finger targets and surface sampling.
import * as THREE from 'three';

// Height of the top surface (pip face) of a lying domino at world x.
export function surfaceY(dom, x) {
  dom.root.updateWorldMatrix(true, false);
  const m = dom.root.matrixWorld, v = new THREE.Vector3();
  let best = null, prev = null;
  for (let i = 0; i <= 24; i++) {
    const yl = -dom.H / 2 + (i / 24) * dom.H;
    v.set(-dom.T / 2, yl, 0).applyMatrix4(m);
    if (prev && ((prev.x - x) * (v.x - x) <= 0)) {
      const u = (x - prev.x) / ((v.x - prev.x) || 1e-6); best = prev.y + (v.y - prev.y) * u; break;
    }
    prev = v.clone();
  }
  return best;
}

// A push target for a standing domino driven by a TipController.
export function pushTarget(game, id, dom, tip, { enabled, locked, onGrab, onDrag, onRelease, radius = 70, dirPref = 1 } = {}) {
  let grabX = 0, z = 0, lockedNow = false;
  return game.target({
    id, radius,
    enabled: () => tip.mode === 'stand' && (!enabled || enabled()),
    anchor: () => dom.worldPoint(new THREE.Vector3(0, dom.H * 0.3, 0)),
    pick: (sx, sy) => game.distToDomino(dom, sx, sy),
    down: (g) => {
      lockedNow = !!(locked && locked());
      if (lockedNow) { tip.rock(0.07); return; }   // too early: it only rocks heavily on its edge
      z = dom.worldPoint(new THREE.Vector3()).z;
      grabX = game.input.onPlaneZ(g.x, g.y, z).x; tip.grab(); onGrab && onGrab();
    },
    move: (g) => { if (lockedNow) return; const x = game.input.onPlaneZ(g.x, g.y, z).x; tip.drag(x - grabX); onDrag && onDrag(tip.a); },
    up: (g) => {
      if (lockedNow) return;
      const top = dom.worldPoint(new THREE.Vector3(0, dom.H / 2, 0));
      const ppm = game.input.pxPerMetre(top);
      if (g.cancelled) { if (tip.mode === 'held') tip.mode = 'stand'; return; }   // interrupted: it just rocks back
      if (g.tap) { tip.mode = 'stand'; tip.nudge(dirPref); }
      else if (tip.mode === 'held' && Math.abs(g.dy) > 40 && Math.abs(g.dy) > Math.abs(g.dx) * 1.5) { tip.mode = 'stand'; tip.nudge(dirPref); } // a deliberate swipe on it: push
      else tip.release((g.vx * 1000) / ppm);
      onRelease && onRelease(tip.mode);
    },
  });
}
