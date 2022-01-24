import type { FluidMaterial } from "Core/Render/Materials/Fluid/FluidMaterial";

export class FluidMesh {
 mesh: BABYLON.Mesh;

 scene : BABYLON.Scene;
 beenCreated: boolean = false;

 constructor(private material: FluidMaterial) {}

 async rebuildMeshGeometory(
  positions: Float32Array,
  indicies: Int32Array,
  linearcColors: Float32Array,
  fullColors: Float32Array,
  uvs: Float32Array
 ) {
   console.log("update");
  const chunkVertexData = new BABYLON.VertexData();
  // const calculatedNormals: number[] = [];

  chunkVertexData.positions = positions;
  chunkVertexData.indices = indicies;
  // chunkVertexData.normals = calculatedNormals;

  // BABYLON.VertexData.ComputeNormals(positions, indicies, calculatedNormals);
  chunkVertexData.applyToMesh(this.mesh, true);

  this.mesh.setVerticesData("cuv3", uvs, false, 3);
  //this.mesh.setVerticesData("colors", fullColors, false, 4);

  /*   this.mesh.unfreezeWorldMatrix();
  //Babylon throws an error but this functions works
  //So wrapped it in this for now. It works though
  try {
   this.mesh.updateFacetData();
  } catch (error: any) {}

  this.mesh.freezeWorldMatrix(); */
 }

 createTemplateMesh(scene: BABYLON.Scene) {
  this.mesh = new BABYLON.Mesh("fluid", scene);
  this.scene = scene;
  this.mesh.isPickable = false;
  this.mesh.alphaIndex = 1;
  this.mesh.checkCollisions = false;
  this.mesh.visibility = 0.1;
  this.mesh.hasVertexAlpha = true;
  return this.mesh;
 }

 async createMeshGeometory(
  positions: Float32Array,
  indicies: Int32Array,
  linearColors: Float32Array,
  fullColors: Float32Array,
  uvs: Float32Array
 ) {
  this.mesh.material = this.material.getMaterial();
  this.beenCreated = true;
  const chunkVertexData = new BABYLON.VertexData();
  chunkVertexData.positions = positions;
  chunkVertexData.indices = indicies;

  chunkVertexData.applyToMesh(this.mesh, true);

  this.mesh.setVerticesData("cuv3", uvs, false, 3);
 //  this.mesh.setVerticesData("colors", fullColors, false, 4);


 // this.mesh.material = new BABYLON.StandardMaterial("",this.scene);
  this.mesh.freezeWorldMatrix();

  return this.mesh;
 }
}
