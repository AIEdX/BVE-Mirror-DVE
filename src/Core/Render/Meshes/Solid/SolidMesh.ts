import type { SolidMaterial } from "Core/Render/Materials/Solid/SolidMaterial";
import { VoxelMeshInterface } from "Meta/Core/Meshes/VoxelMesh.interface";

export class SolidMesh implements VoxelMeshInterface {
 constructor(private material: SolidMaterial) {}
 async rebuildMeshGeometory(
  mesh: BABYLON.Mesh,
  chunkX: number,
  chunkZ: number,
  positions: Float32Array,
  indicies: Int32Array,
  aoColors: Float32Array,
  rgbLightColors: Float32Array,
  sunLightColors: Float32Array,
  colors: Float32Array,
  uvs: Float32Array
 ) {
  mesh.unfreezeWorldMatrix();
  const chunkVertexData = new BABYLON.VertexData();

  chunkVertexData.positions = positions;
  chunkVertexData.indices = indicies;
  chunkVertexData.applyToMesh(mesh, true);

  mesh.setVerticesData("cuv3", uvs, false, 3);
  mesh.setVerticesData("aoColors", aoColors, false, 4);
  mesh.setVerticesData("rgbLightColors", rgbLightColors, false, 4);
  mesh.setVerticesData("sunLightColors", sunLightColors, false, 4);
  mesh.setVerticesData("colors", colors, false, 4);
  mesh.freezeWorldMatrix();
 }

 createTemplateMesh(scene: BABYLON.Scene) {
  const mesh = new BABYLON.Mesh("solid", scene);
  mesh.alphaIndex = 0;
  mesh.isPickable = false;
  mesh.checkCollisions = true;

  return mesh;
 }

 async createMeshGeometory(
  mesh: BABYLON.Mesh,
  chunkX: number,
  chunkZ: number,
  positions: Float32Array,
  indicies: Int32Array,
  aoColors: Float32Array,
  rgbLightColors: Float32Array,
  sunLightColors: Float32Array,
  colors: Float32Array,
  uvs: Float32Array
 ) {
  const chunkVertexData = new BABYLON.VertexData();

  chunkVertexData.positions = positions;
  chunkVertexData.indices = indicies;
  // chunkVertexData.colors = linearColors;
  chunkVertexData.applyToMesh(mesh, true);

  mesh.setVerticesData("cuv3", uvs, false, 3);
  mesh.setVerticesData("aoColors", aoColors, false, 4);
  mesh.setVerticesData("rgbLightColors", rgbLightColors, false, 4);
  mesh.setVerticesData("sunLightColors", sunLightColors, false, 4);
  mesh.setVerticesData("colors", colors, false, 4);

  mesh.material = this.material.getMaterial();
  mesh.freezeWorldMatrix();
  return mesh;
 }
}
