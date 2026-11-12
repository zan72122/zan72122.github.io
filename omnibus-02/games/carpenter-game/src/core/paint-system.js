import * as THREE from 'three';
import { clamp } from './util.js';
import { FACE_TILES, faceAtlasPoint, facePlaneSize } from './surface-math.js';

const TILE_SIZE = 128;
const ATLAS_WIDTH = TILE_SIZE * 3;
const ATLAS_HEIGHT = TILE_SIZE * 2;

function makeCanvas() {
  const canvas = document.createElement('canvas');
  canvas.width = ATLAS_WIDTH;
  canvas.height = ATLAS_HEIGHT;
  return canvas;
}

function clearCanvas(canvas) {
  const g = canvas.getContext('2d');
  g.fillStyle = '#000';
  g.fillRect(0, 0, canvas.width, canvas.height);
  return g;
}

class FacePaintMask {
  constructor(size) {
    this.size = size;
    this.canvas = makeCanvas();
    this.g = clearCanvas(this.canvas);
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;
  }

  paint(position, normal, radius) {
    const point = faceAtlasPoint(position, normal, this.size);
    const plane = facePlaneSize(point.face, this.size);
    const rad = clamp(radius / Math.max(0.001, Math.max(...plane)) * TILE_SIZE, 3, TILE_SIZE * 0.7);
    const x = point.atlasU * ATLAS_WIDTH;
    const y = (1 - point.atlasV) * ATLAS_HEIGHT;
    const grd = this.g.createRadialGradient(x, y, 0, x, y, rad);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.68, 'rgba(255,255,255,0.94)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    this.g.fillStyle = grd;
    this.g.beginPath();
    this.g.arc(x, y, rad, 0, Math.PI * 2);
    this.g.fill();
    this.texture.needsUpdate = true;
  }

  fillFace(face) {
    const tile = FACE_TILES[face];
    const y = (1 - tile.row) * TILE_SIZE;
    this.g.fillStyle = '#fff';
    this.g.fillRect(tile.col * TILE_SIZE, y, TILE_SIZE, TILE_SIZE);
    this.texture.needsUpdate = true;
  }

  faceCoverage(face) {
    const tile = FACE_TILES[face];
    const y = (1 - tile.row) * TILE_SIZE;
    const d = this.g.getImageData(tile.col * TILE_SIZE, y, TILE_SIZE, TILE_SIZE).data;
    let painted = 0;
    let total = 0;
    for (let i = 0; i < d.length; i += 4 * 8) {
      total++;
      if (d[i] > 110) painted++;
    }
    return total ? painted / total : 0;
  }

  coverage() {
    let sum = 0;
    for (let face = 0; face < FACE_TILES.length; face++) sum += this.faceCoverage(face);
    return sum / FACE_TILES.length;
  }
}

/** 各木材メッシュの6面へ独立した塗装マスクを持たせる。 */
export class PaintSystem {
  constructor() {
    const emptyCanvas = makeCanvas();
    clearCanvas(emptyCanvas);
    this.emptyTexture = new THREE.CanvasTexture(emptyCanvas);
    this.color = new THREE.Color('#ffb3d1');
    this.color2 = new THREE.Color('#ffb3d1');
    this.gloss = 0;
    this.enabled = 0;
    this.rainbow = 0;
    this.surfaces = new Map();
  }

  clear() {
    for (const [mesh, mask] of this.surfaces) {
      if (mesh.material?.userData.uniforms) mesh.material.userData.uniforms.uPaintMask.value = this.emptyTexture;
      mask.texture.dispose();
    }
    this.surfaces.clear();
  }

  registerMesh(mesh) {
    if (this.surfaces.has(mesh)) return this.surfaces.get(mesh);
    const size = mesh.userData.woodSize;
    if (!size || !mesh.material?.userData.uniforms) return null;
    const mask = new FacePaintMask(size);
    this.surfaces.set(mesh, mask);
    const uniforms = mesh.material.userData.uniforms;
    uniforms.uPaintMask.value = mask.texture;
    uniforms.uObjectSize.value.set(size[0], size[1], size[2]);
    return mask;
  }

  paintAt(mesh, world, localNormal, radius = 0.09) {
    const mask = this.registerMesh(mesh);
    if (!mask) return;
    mesh.updateWorldMatrix(true, false);
    const local = mesh.worldToLocal(world.clone());
    mask.paint(local.toArray(), localNormal.toArray(), radius);
  }

  fillFace(mesh, face) {
    const mask = this.registerMesh(mesh);
    if (mask) mask.fillFace(face);
  }

  faceCoverage(mesh, face) {
    return this.surfaces.get(mesh)?.faceCoverage(face) ?? 0;
  }

  coverage() {
    if (!this.surfaces.size) return 0;
    let sum = 0;
    for (const mask of this.surfaces.values()) sum += mask.coverage();
    return sum / this.surfaces.size;
  }
}

export const paintSystem = new PaintSystem();
