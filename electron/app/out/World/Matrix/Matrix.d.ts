import type { ChunkData } from "Meta/World/WorldData/Chunk.types";
import { WorldThreadMatrixRegionData } from "Meta/Matrix/Matrix.types.js";
/**# Matrix
 * ---
 * Holds all shared array buffer.
 */
export declare const Matrix: {
    updateDieTime: number;
    worldBounds: {
        __maxChunkYSize: number;
        bounds: {
            MinZ: number;
            MaxZ: number;
            MinX: number;
            MaxX: number;
            MinY: number;
            MaxY: number;
        };
        chunkXPow2: number;
        chunkYPow2: number;
        chunkZPow2: number;
        chunkXSize: number;
        chunkYSize: number;
        chunkZSize: number;
        chunkTotalVoxels: number;
        chunkArea: number;
        regionXPow2: number;
        regionYPow2: number;
        regionZPow2: number;
        regionXSize: number;
        regionYSize: number;
        regionZSize: number;
        __regionPosition: {
            x: number;
            y: number;
            z: number;
        };
        __worldColumnPosition: {
            x: number;
            z: number;
            y: number;
        };
        __chunkPosition: {
            x: number;
            y: number;
            z: number;
        };
        __voxelPosition: {
            x: number;
            y: number;
            z: number;
        };
        syncBoundsWithArrays(): void;
        setWorldBounds(minX: number, maxX: number, minZ: number, maxZ: number, minY: number, maxY: number): void;
        isPositonOutsideOfBounds(x: number, y: number, z: number): boolean;
        isPositonInBounds(x: number, y: number, z: number): boolean;
        setChunkBounds(pow2X: number, pow2Y: number, pow2Z: number): void;
        setRegionBounds(pow2X: number, pow2Y: number, pow2Z: number): void;
        getRegionPosition(x: number, y: number, z: number): {
            x: number;
            y: number;
            z: number;
        };
        getChunkPosition(x: number, y: number, z: number): {
            x: number;
            y: number;
            z: number;
        };
        getChunkKey(chunkPOS: import("../../Meta/Util.types.js").Position3Matrix): string;
        getChunkKeyFromPosition(x: number, y: number, z: number): string;
        getRegionKey(regionPOS: import("../../Meta/Util.types.js").Position3Matrix): string;
        getRegionKeyFromPosition(x: number, y: number, z: number): string;
        getVoxelPositionFromChunkPosition(x: number, y: number, z: number, chunkPOS: import("../../Meta/Util.types.js").Position3Matrix): {
            x: number;
            y: number;
            z: number;
        };
        getRichPositionKey(x: number, y: number, z: number): string;
        getVoxelPosition(x: number, y: number, z: number): {
            x: number;
            y: number;
            z: number;
        };
        getWorldColumnKey(x: number, z: number, y?: number): string;
        getWorldColumnPosition(x: number, z: number, y?: number): {
            x: number;
            z: number;
            y: number;
        };
    };
    regions: Record<string, WorldThreadMatrixRegionData>;
    isChunkInMatrix(x: number, y: number, z: number): boolean;
    isRegionInMatrix(x: number, y: number, z: number): boolean;
    isChunkLocked(x: number, y: number, z: number): boolean;
    lockChunk(x: number, y: number, z: number): boolean;
    unLockChunk(x: number, y: number, z: number): boolean;
    updateChunkData(x: number, y: number, z: number, run: (chunk: ChunkData) => {}): false | Promise<boolean>;
    releaseChunk(x: number, y: number, z: number): boolean | undefined;
    createMatrixChunkSAB(x: number, y: number, z: number): SharedArrayBuffer[] | false;
    getMatrixChunkSAB(x: number, y: number, z: number): false | SharedArrayBuffer[];
    getMatrixChunkData(x: number, y: number, z: number): false | {
        chunkStates: Uint8Array;
        chunkStatesSAB: SharedArrayBuffer;
    };
    getMatrixRegionData(x: number, y: number, z: number): false | WorldThreadMatrixRegionData;
    addRegionToMatrix(x: number, y: number, z: number): WorldThreadMatrixRegionData;
    removeRegionFromMatrix(x: number, y: number, z: number): false | undefined;
    deleteThreadFromRegion(threadId: string, x: number, y: number, z: number): false | undefined;
};
