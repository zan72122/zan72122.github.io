/** Pure, renderer-free contract for the four laundry-finishing steps. */

export const LAUNDRY_FINISH_STEPS = Object.freeze([
  'finish:pair:0',
  'finish:pair:1',
  'finish:fold',
  'finish:put-away'
]);

const PAIRS = Object.freeze(['rose', 'sun']);

export function createLaundryFinishState() {
  return { index: 0, selectedSock: null };
}

export function laundryFinishStep(state) {
  return LAUNDRY_FINISH_STEPS[state?.index] || null;
}

function sockParts(id) {
  const [pair, side] = String(id || '').split(':');
  if (!PAIRS.includes(pair) || !['left', 'right'].includes(side)) return null;
  return { pair, side };
}

/**
 * Apply one child-facing action without mutating the previous state.
 * A pair step intentionally needs two taps; wrong socks leave the step intact.
 */
export function applyLaundryFinishAction(state, action) {
  const current = state || createLaundryFinishState();
  const step = laundryFinishStep(current);
  if (!step) return { state: current, result: 'done' };

  if (step.startsWith('finish:pair:')) {
    if (action?.type !== 'sock') return { state: current, result: 'wrong' };
    const sock = sockParts(action.id);
    const expected = PAIRS[current.index];
    if (!sock || sock.pair !== expected) return { state: current, result: 'wrong' };

    if (!current.selectedSock) {
      return {
        state: { ...current, selectedSock: action.id },
        result: 'selected'
      };
    }

    const selected = sockParts(current.selectedSock);
    if (!selected || selected.side === sock.side) {
      return { state: current, result: 'wrong' };
    }
    return {
      state: { index: current.index + 1, selectedSock: null },
      result: 'advanced'
    };
  }

  const expectedType = step === 'finish:fold' ? 'fold' : 'put-away';
  if (action?.type !== expectedType) return { state: current, result: 'wrong' };
  return {
    state: { index: current.index + 1, selectedSock: null },
    result: current.index + 1 >= LAUNDRY_FINISH_STEPS.length ? 'complete' : 'advanced'
  };
}

/** Assist advances exactly one semantic step, including a complete sock pair. */
export function assistLaundryFinish(state) {
  const current = state || createLaundryFinishState();
  const step = laundryFinishStep(current);
  if (!step) return current;
  return { index: current.index + 1, selectedSock: null };
}

