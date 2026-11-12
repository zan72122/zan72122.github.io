// Authored town. Axes: +x = east = direction of gravity ("down"),
// +y = up (sky), +z = south (toward the camera). Gameplay happens in the plane z = 0.
//
// A house is a pile of "floors": every west-facing surface is something you can
// stand on, windows and doors are holes you fall through, and the sky past the
// eastern edge of town is the bottom of the world.

export const G = 9.8;        // gravity magnitude, along +x
export const PZ = 0;          // gameplay plane

// storey levels shared by the houses
export const FOUND = 0.45, CLEAR = 2.4, SLAB = 0.3;
export const F = [FOUND, FOUND + CLEAR + SLAB];          // floor y of each storey
export const C = [FOUND + CLEAR, FOUND + CLEAR * 2 + SLAB]; // ceiling y
export const EAVE = C[1] + 0.25;

export const LEVEL = {
  bounds: { x0: -40, x1: 70 },

  buildings: [
    // upstream apartment block: its high balconies keep dropping things into the sky
    { id: 'M', type: 'mansion', x0: -30, x1: -9, zf: 3.2, zb: -9, floors: 8, floorH: 2.95, color: 0xe4ddd0 },

    { id: 'A', type: 'house', x0: 0, x1: 8.4, zf: 1.0, zb: -7.2,
      wall: { tex: 'siding', color: 0xe3dccd }, trim: 0x4a4744,
      roof: { ridge: 'z', pitch: 0.5, overhang: 0.55, tex: 'slate', color: 0x3c3f44 },
      rooms: [
        { storey: 0, x0: 0, x1: 8.4, kind: 'ldk' },
        { storey: 1, x0: 0, x1: 4.2, kind: 'kids' },
        { storey: 1, x0: 4.2, x1: 8.4, kind: 'bed' },
      ],
      openings: [
        { id: 'A-W1', wall: 'west', storey: 0, y0: 1.25, y1: 2.35, open: false },
        { id: 'A-W2', wall: 'west', storey: 1, y0: 3.95, y1: 5.05, open: true },
        { id: 'A-D2', wall: 4.2, storey: 1, y0: F[1], y1: F[1] + 2.0, open: false, kind: 'door' },
        { id: 'A-E1', wall: 'east', storey: 0, y0: 1.3, y1: 2.4, open: true, grandma: true },
        { id: 'A-E2', wall: 'east', storey: 1, y0: 4.75, y1: 5.4, open: true },
      ],
      front: { balcony: { storey: 1, x0: 4.5, x1: 7.9 }, door: { x: 6.9 }, bigWindow: true },
    },

    { id: 'B', type: 'house', x0: 12.4, x1: 20.4, zf: 1.0, zb: -7.0,
      wall: { tex: 'stucco', color: 0xcfc6b8 }, trim: 0x2f2d2b,
      roof: { ridge: 'x', pitch: 0.45, overhang: 0.6, tex: 'kawara', color: 0x55585e },
      rooms: [
        { storey: 0, x0: 12.4, x1: 20.4, kind: 'kitchen' },
        { storey: 1, x0: 12.4, x1: 16.4, kind: 'washitsu' },
        { storey: 1, x0: 16.4, x1: 20.4, kind: 'study' },
      ],
      openings: [
        { id: 'B-W1', wall: 'west', storey: 0, y0: 1.45, y1: 2.45, open: true },
        { id: 'B-W2', wall: 'west', storey: 1, y0: 3.95, y1: 4.75, open: true },
        { id: 'B-D2', wall: 16.4, storey: 1, y0: F[1], y1: F[1] + 2.0, open: false, kind: 'door' },
        { id: 'B-E1', wall: 'east', storey: 0, y0: 1.25, y1: 2.35, open: false },
        { id: 'B-E2', wall: 'east', storey: 1, y0: 3.95, y1: 4.85, open: false },
      ],
      // stairwell: a ladder in sideways gravity (risers become footholds)
      stairs: { x0: 13.4, x1: 16.325 },
      front: { balcony: null, door: { x: 13.4 }, bigWindow: true, bay: true },
    },

    { id: 'C', type: 'shop', x0: 28.4, x1: 36.2, zf: 1.2, zb: -6.5,
      wall: { tex: 'stucco', color: 0xd8d2c6 }, trim: 0x2a2a2a,
      roof: { ridge: 'flat', tex: 'concrete', color: 0x9a9894 },
      rooms: [
        { storey: 0, x0: 28.4, x1: 36.2, kind: 'shop' },
        { storey: 1, x0: 28.4, x1: 36.2, kind: 'living' },
      ],
      openings: [
        { id: 'C-W1', wall: 'west', storey: 0, y0: F[0], y1: F[0] + 2.05, open: true, kind: 'door' },
        { id: 'C-W2', wall: 'west', storey: 1, y0: 3.95, y1: 5.0, open: false },
        { id: 'C-E1', wall: 'east', storey: 0, y0: F[0] + 0.2, y1: F[0] + 2.1, open: false, kind: 'door' },
        { id: 'C-E2', wall: 'east', storey: 1, y0: 3.95, y1: 5.0, open: false },
      ],
      front: { shop: true, awning: 0x2f6b4f },
    },

    // park toilet: a small concrete block in the park
    { id: 'T', type: 'block', x0: 51.0, x1: 53.4, zf: -1.2, zb: -4.2, h: 2.7, color: 0xcfcac0, zPlane: false },
  ],

  // x ranges of ground surfaces in front / between buildings
  streets: [
    { x0: -9, x1: 0, kind: 'road' },
    { x0: 8.4, x1: 12.4, kind: 'alley' },
    { x0: 20.4, x1: 28.4, kind: 'road' },
    { x0: 36.2, x1: 58, kind: 'park' },
  ],
  edgeX: 58, // east edge of town: past this, the ground falls away to the river

  props: [
    { type: 'pole', x: -3.6, z: 0, h: 11, id: 'P0', bolts: [1.6, 6.3] },
    { type: 'pole', x: 26.9, z: -1.6, h: 11, id: 'P1', bolts: null },
    { type: 'pole', x: 44.0, z: 4.6, h: 10, id: 'P2', bolts: null },
    { type: 'truck', x: -9.3, z: 4.2 },
    { type: 'vending', x: -8.8, z: 4.3 },
    { type: 'ac', x: 8.4, y: 3.3, z: -2.2, side: 'east' },
    { type: 'ac', x: 20.4, y: 0.5, z: -3.2, side: 'east' },
    { type: 'futon', x: 12.4, y0: 0.2, y1: 1.3, id: 'FUTON' },
    { type: 'laundryLine', x: 8.4, z0: -4.6, z1: -1.0, y: 3.35 },
    { type: 'tree', x: 24.2, z: 0, trunkH: 3.2, crown: 3.0, id: 'TREE', persimmon: true },
    { type: 'tree', x: 39.0, z: -4.5, trunkH: 2.6, crown: 2.6 },
    { type: 'tree', x: 55.2, z: -3.2, trunkH: 2.8, crown: 2.8 },
    { type: 'swing', x: 40.2, z: 0, h: 2.45, id: 'SWING' },
    { type: 'jungle', x0: 45.2, z: 0, id: 'JUNGLE' },
    { type: 'fence', x: 57.6, h: 12, id: 'FENCE' },
    { type: 'bench', x: 49.0, z: 3.0 },
    { type: 'sandbox', x0: 42.5, x1: 44.5, z: 2.4 },
    { type: 'blockwall', x0: 0.6, x1: 8.0, z: 3.2, h: 0.95 },
    { type: 'blockwall', x0: 12.8, x1: 20.0, z: 3.2, h: 0.95 },
    { type: 'bike', x: 7.6, z: 2.4 },
    { type: 'mirror', x: 20.7, z: 1.9 },
    { type: 'lamp', x: 36.8, z: 4.8 },
  ],

  // delivery route. `at` = where the recipient stands; `feet` = the floor x they stand on.
  stops: [
    { id: 'R1', who: 'grandpa', place: 'wallA', feet: 0, y: 3.05, z: 0.1, facing: -1, gift: 'hat' },
    { id: 'R2', who: 'boy', place: 'kidsroom', feet: 4.2 - 0.075, y: 3.6, z: 0.55, gift: 'ball', pop: 'ball', after: ['open:A-D2'] },
    { id: 'R3', who: 'grandma', place: 'windowA', lean: { x: 8.4, y: 1.5, z: 0.05 }, gift: 'flowers' },
    { id: 'R4', who: 'mom', place: 'kitchenB', feet: 20.4 - 0.075, y: 1.5, z: -1.6, gift: 'pan', pop: 'apple', after: ['open:B-E1'] },
    { id: 'R5', who: 'girl', place: 'tree', feet: 24.02, y: 4.55, z: 0.2, gift: 'basket' },
    { id: 'R6', who: 'shopkeeper', place: 'shop', feet: 36.2 - 0.075, y: 1.55, z: -1.2, gift: 'apron', pop: 'watermelon', after: ['open:C-E1'] },
    { id: 'R7', who: 'kids', place: 'fence', feet: 57.6 - 0.04, y: 7.6, z: 0, gift: 'balloons', final: true },
  ],

  start: { hold: 'P0', y: 3.05 },
};
