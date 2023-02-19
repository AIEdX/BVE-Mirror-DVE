import type { LocationData } from "voxelspaces";
import type { VoxelTemplateSubstanceType } from "Meta/Data/Voxels/Voxel.types";
export declare type SetChunkMeshTask = [
    location: LocationData,
    meshes: (ChunkMeshData | RemoveChunkTasks)[]
];
export declare type ChunkMeshData = [
    substanceType: VoxelTemplateSubstanceType,
    positions: Float32Array,
    normals: Float32Array,
    indicies: Uint16Array,
    faceData: Float32Array,
    AOColors: Float32Array,
    lightColors: Float32Array,
    colors: Float32Array,
    uvs: Float32Array,
    overlayUVs: Float32Array
];
declare type RemoveChunkTasks = [
    substanceType: VoxelTemplateSubstanceType,
    removeFlag: false
];
export declare type RemoveChunkMeshTasks = [
    location: LocationData,
    substanceType: VoxelTemplateSubstanceType
];
export declare type RemoveChunksOutsideDistance = [
    location: LocationData,
    distance: number
];
export {};
