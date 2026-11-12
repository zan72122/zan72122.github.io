/* ==========================================================================
 * assist-utils.js — frame-clock waits for activity assistance
 * ========================================================================== */

export function abortAssist() {
  return new DOMException('Assist cancelled', 'AbortError');
}

export function checkAssist(signal) {
  if (signal?.aborted) throw abortAssist();
}

/**
 * Wait on UI game time, not wall time. Backgrounding or a render pause freezes
 * the sequence instead of letting it silently complete while nothing animates.
 */
export function waitGame(ctx, seconds, signal) {
  checkAssist(signal);
  return new Promise((resolve, reject) => {
    let cancelTimer = null;
    const onAbort = () => {
      cancelTimer?.();
      reject(abortAssist());
    };
    signal?.addEventListener('abort', onAbort, { once: true });
    cancelTimer = ctx.ui?.after?.(Math.max(0, seconds), () => {
      signal?.removeEventListener('abort', onAbort);
      try { checkAssist(signal); resolve(); } catch (error) { reject(error); }
    });
    if (!cancelTimer) {
      signal?.removeEventListener('abort', onAbort);
      resolve();
    }
  });
}

/** Poll a semantic completion condition at the UI's lightweight cadence. */
export async function waitUntil(ctx, predicate, {
  signal, timeout = 12, interval = 0.08
} = {}) {
  let remaining = timeout;
  while (!predicate()) {
    checkAssist(signal);
    if (remaining <= 0) throw new Error('Assist step timed out');
    await waitGame(ctx, Math.min(interval, remaining), signal);
    remaining -= interval;
  }
}

/**
 * Await an existing Clockwork tween so assist code can move the same scene
 * objects as manual play without synthesising pointer events.
 */
export function tweenGame(clock, seconds, frame, {
  signal, ease, onDone
} = {}) {
  checkAssist(signal);
  return new Promise((resolve, reject) => {
    let handle = null;
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      signal?.removeEventListener('abort', onAbort);
      try {
        checkAssist(signal);
        onDone?.();
        resolve();
      } catch (error) {
        reject(error);
      }
    };
    const onAbort = () => {
      if (settled) return;
      settled = true;
      clock?.cancel?.(handle);
      reject(abortAssist());
    };
    signal?.addEventListener('abort', onAbort, { once: true });
    handle = clock?.tween?.(Math.max(0, seconds), frame, { ease, onDone: finish });
    if (!handle) finish();
  });
}
