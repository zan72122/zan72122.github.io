/**
 * Own one pointer for the lifetime of a gesture.
 *
 * Pointer Events may deliver a second finger while the first is dragging.
 * Activities are intentionally single-touch, so accepting that second stream
 * would teleport the active prop or prematurely finish a stroke.
 */
export class PrimaryPointer {
  constructor() {
    this.pointerId = null;
  }

  claim(event) {
    if (this.pointerId !== null) return this.pointerId === event.pointerId;
    this.pointerId = event.pointerId;
    return true;
  }

  owns(event) {
    return this.pointerId !== null && this.pointerId === event.pointerId;
  }

  release(event) {
    if (!this.owns(event)) return false;
    this.pointerId = null;
    return true;
  }

  reset() {
    this.pointerId = null;
  }
}
