// World layout in metres. y is up, the floor is y = 0.
// The child stands behind lane 3 at +z, facing -z into the store.

export const COUNTER_TOP = 0.95;

export const COUNTER = { x0: -2.35, x1: 1.3, z0: -0.56, z1: 0.46 };

// Conveyor belt: items travel toward +x (left -> right on screen).
export const BELT = { x0: -2.15, x1: -0.4, z0: -0.25, z1: 0.25, top: COUNTER_TOP };

// Scanner-scale glass, flush with the counter.
export const SCANNER = { x0: -0.36, x1: 0.08, z0: -0.25, z1: 0.25, top: COUNTER_TOP - 0.004 };

// Bagging well: a deep stainless tray that collects everything you scan.
export const BIN = { x0: 0.2, x1: 1.16, z0: -0.32, z1: 0.36, floor: 0.6 };

// Where the child stands.
export const CASHIER = { x: -0.14, z: 0.74 };

// Display tower behind the scanner, facing the cashier.
export const DISPLAY = { x: -0.14, z: -0.44 };

// Receipt printer, on the far side so the paper flows to the customers / store.
export const PRINTER = { x: 0.52, z: -0.47 };

// Store envelope.
export const STORE = { x0: -11, x1: 11, z0: -19, z1: 5, h: 4.3 };

// Gondola shelf runs, aisles run along z.
export const GONDOLA_X = [-8.4, -5.6, -2.8, 0, 2.8, 5.6, 8.4];
export const GONDOLA_Z = [-14.6, -4.6];
export const AISLE_X = [-7.0, -4.2, -1.4, 1.4, 4.2, 7.0];

export const MAIN_AISLE_Z = -2.9;
export const BACK_AISLE_Z = -16.4;

// The automatic doors in the glass front.
export const DOOR = { x: 5.5, w: 1.9, h: 2.4 };
