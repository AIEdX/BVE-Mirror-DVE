import type { ChunkSyncData, ChunkUnSyncData, VoxelDataSync, VoxelPaletteSyncData } from "Meta/Data/DataSync.types.js";
export declare const DataSyncHub: {
    chunk: import("../Libs/ThreadComm/Data/DataSync.js").DataSync<ChunkSyncData, ChunkUnSyncData>;
    voxelPalette: import("../Libs/ThreadComm/Data/DataSync.js").DataSync<VoxelPaletteSyncData, any>;
    voxelData: import("../Libs/ThreadComm/Data/DataSync.js").DataSync<VoxelDataSync, any>;
};
