/* ============================================================================
 * task-queue.js — serialize asynchronous UI work
 * ----------------------------------------------------------------------------
 * A child can tap scene buttons much faster than a scene can finish exiting.
 * This queue keeps those transitions one-at-a-time while returning each task's
 * own result (or error) to its caller. A failed task must not poison the tail:
 * the next tap should still be able to recover the game.
 * ========================================================================== */

export class SerialTaskQueue {
  constructor() {
    this._tail = Promise.resolve();
  }

  run(task) {
    const result = this._tail.then(() => task());
    // Keep a non-rejecting private tail so one failed transition cannot make
    // every later transition skip its work.
    this._tail = result.catch(() => undefined);
    return result;
  }
}

export default SerialTaskQueue;
