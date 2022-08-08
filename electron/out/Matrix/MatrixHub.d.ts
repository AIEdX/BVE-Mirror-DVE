import { InterCommPortTypes } from "Meta/Comms/InterComm.types.js";
/**# Matrix Hub
 * ---
 * Handles messages from the WorldData thread.
 * It syncs the chunk data.
 */
export declare const MatrixHub: {
    worldPort: InterCommPortTypes | undefined;
    threadName: string;
    __threadNameSet: boolean;
    messageFunctions: Record<string, (data: any, event: MessageEvent) => any | void>;
    isReady(): boolean;
    onMessage(event: MessageEvent, runAfter: (event: MessageEvent) => any | void): void;
    /**# Request Chunk Sync
     *
     * Will sync a chunk if it exists.
     *
     */
    requestChunkSync(x: number, y: number, z: number): Promise<boolean | undefined>;
    /**# Request Chunk Load
     *
     * Will sync a chunk if it exists.
     *
     */
    requestChunkLoad(x: number, y: number, z: number): Promise<boolean | undefined>;
    requestChunkRelease(chunkX: number, chunkY: number, chunkZ: number): void;
    _setWorldPort(port: MessagePort): void;
    _syncChunk(data: any[]): void;
    _syncVoxelData(data: any[]): void;
    _releaseChunk(data: any[]): void;
    _syncGlobalVoxelPalette(data: any[]): void;
    _setThreadName(data: any[]): void;
};
