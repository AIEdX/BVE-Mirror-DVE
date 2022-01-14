/// <reference types="babylonjs" />
import type { ChunkMaterial } from "Core/Render/Materials/Chunk/ChunkMaterial";
import { VoxelMeshInterface } from "Meta/Core/Meshes/VoxelMesh.interface";
export declare class ChunkMesh implements VoxelMeshInterface {
    private material;
    constructor(material: ChunkMaterial);
    rebuildMeshGeometory(chunkMesh: BABYLON.Mesh, chunkX: number, chunkZ: number, positions: Float32Array, indicies: Int32Array, linearcColors: Float32Array, fullColors: Float32Array, uvs: Float32Array): void;
    createTemplateMesh(scene: BABYLON.Scene): BABYLON.Mesh;
    createMeshGeometory(chunkMesh: BABYLON.Mesh, chunkX: number, chunkZ: number, positions: Float32Array, indicies: Int32Array, linearColors: Float32Array, fullColors: Float32Array, uvs: Float32Array): BABYLON.Mesh;
}
