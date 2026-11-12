// やわらかそざいあそび - device tilt gravity & shake detection.
// The blob lives in a side-view tray: tilting the device rotates gravity like
// a real box of goo. When the device lies flat, in-plane gravity fades to zero
// and the toy naturally becomes a top-down clay table.
(function () {
  'use strict';
  const GAME = window.GAME;
  const U = GAME.U;

  const Motion = {
    // Screen-space gravity direction * strength (1 = fully upright device).
    gx: 0,
    gy: 1,
    enabled: false,      // receiving real sensor data
    available: false,    // sensor API exists at all
    needsPermission: false, // iOS 13+ requestPermission dance
    granted: false,
    shakeEnergy: 0,      // decaying 0..1, drives jiggle impulses
    _override: null,     // test hook
    _sgx: 0, _sgy: 1,    // smoothed sensor values
    _lastAccel: null,
  };

  // iOS reports accelerationIncludingGravity with the opposite sign convention
  // from the W3C spec; requestPermission() existing is a reliable iOS marker.
  const IS_IOS_MOTION =
    typeof DeviceMotionEvent !== 'undefined' &&
    typeof DeviceMotionEvent.requestPermission === 'function';

  function screenAngle() {
    if (screen.orientation && typeof screen.orientation.angle === 'number') {
      return screen.orientation.angle;
    }
    return typeof window.orientation === 'number' ? window.orientation : 0;
  }

  function onMotion(e) {
    const ag = e.accelerationIncludingGravity;
    if (!ag || ag.x == null) return;
    Motion.enabled = true;

    // Gravity direction in device coords (x right, y toward device top).
    const s = IS_IOS_MOTION ? 1 : -1;
    let dx = (s * ag.x) / 9.81;
    let dy = (s * ag.y) / 9.81;

    // Rotate into the unrotated-portrait frame, then flip y to screen-down.
    const a = (screenAngle() * Math.PI) / 180;
    const c = Math.cos(a), sn = Math.sin(a);
    const rx = dx * c + dy * sn;
    const ry = -dx * sn + dy * c;
    const gx = U.clamp(rx, -1.2, 1.2);
    const gy = U.clamp(-ry, -1.2, 1.2);

    Motion._sgx = U.lerp(Motion._sgx, gx, 0.25);
    Motion._sgy = U.lerp(Motion._sgy, gy, 0.25);

    // Shake: jerk of the raw acceleration (works even without e.acceleration).
    const la = Motion._lastAccel;
    if (la) {
      const jerk = Math.hypot(ag.x - la.x, ag.y - la.y, (ag.z || 0) - la.z);
      if (jerk > 14) Motion.shakeEnergy = Math.min(1, Motion.shakeEnergy + jerk / 60);
    }
    Motion._lastAccel = { x: ag.x, y: ag.y, z: ag.z || 0 };
  }

  Motion.init = function () {
    Motion.available = typeof DeviceMotionEvent !== 'undefined';
    Motion.needsPermission = IS_IOS_MOTION;
    if (Motion.available && !Motion.needsPermission) {
      window.addEventListener('devicemotion', onMotion);
    }
  };

  // Must be called from a user gesture on iOS.
  Motion.requestPermission = function () {
    if (!Motion.needsPermission) return Promise.resolve(Motion.available);
    return DeviceMotionEvent.requestPermission()
      .then((res) => {
        Motion.granted = res === 'granted';
        if (Motion.granted) window.addEventListener('devicemotion', onMotion);
        return Motion.granted;
      })
      .catch(() => false);
  };

  Motion.update = function (dt) {
    Motion.shakeEnergy = Math.max(0, Motion.shakeEnergy - dt * 2.2);
    if (Motion._override) {
      Motion.gx = Motion._override.gx;
      Motion.gy = Motion._override.gy;
      return;
    }
    if (Motion.enabled) {
      Motion.gx = Motion._sgx;
      Motion.gy = Motion._sgy;
    } else {
      Motion.gx = 0;
      Motion.gy = 1;
    }
  };

  // Test hook: force a gravity direction (pass null to clear).
  Motion.setTiltForTest = function (gx, gy) {
    Motion._override = gx == null ? null : { gx, gy };
    Motion.update(0);
  };
  Motion.shakeForTest = function () { Motion.shakeEnergy = 1; };

  GAME.Motion = Motion;
})();
