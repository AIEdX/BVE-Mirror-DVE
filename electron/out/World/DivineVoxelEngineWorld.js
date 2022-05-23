//objects
import { EngineSettings } from "../Global/EngineSettings.js";
import { Util } from "../Global/Util.helper.js";
import { WorldData } from "./WorldData/WorldData.js";
import { WorldGeneration } from "./WorldGenration/WorldGeneration.js";
import { MatrixCentralHub } from "./Matrix/MatrixCentralHub.js";
import { Matrix } from "./Matrix/Matrix.js";
import { VoxelManager } from "./Voxels/VoxelManager.js";
//inter comms
import { NexusComm } from "./InterComms/Nexus/NexusComm.js";
import { RenderComm } from "./InterComms/Render/RenderComm.js";
import { BuilderCommManager } from "./InterComms/Builder/BuilderCommManager.js";
import { PropagationCommManager } from "./InterComms/Propagators/PropagationCommManager.js";
//functions
import { InitWorldWorker } from "./Init/InitWorldWorker.js";
import { QueuesManager } from "./Queues/QueuesManager.js";
/**# Divine Voxel Engine World
 * ---
 * This handles everything in the world worker context.
 */
export const DVEW = {
    environment: "browser",
    _3dFlatArray: Util.getFlat3DArray(),
    worldBounds: Util.getWorldBounds(),
    __settingsHaveBeenSynced: false,
    __renderIsDone: false,
    UTIL: Util,
    engineSettings: EngineSettings,
    matrix: Matrix,
    matrixCentralHub: MatrixCentralHub,
    nexusComm: NexusComm,
    renderComm: RenderComm,
    builderCommManager: BuilderCommManager,
    propagationCommManager: PropagationCommManager,
    worldGeneration: WorldGeneration,
    worldData: WorldData,
    voxelManager: VoxelManager,
    queues: QueuesManager,
    isReady() {
        let ready = DVEW.builderCommManager.isReady() &&
            DVEW.propagationCommManager.isReady() &&
            DVEW.__settingsHaveBeenSynced &&
            DVEW.__renderIsDone;
        return ready;
    },
    syncSettings(data) {
        this.engineSettings.syncSettings(data);
        if (data.chunks) {
            this.worldBounds.setChunkBounds(data.chunks.chunkXPow2, data.chunks.chunkYPow2, data.chunks.chunkZPow2);
            this.worldBounds.syncBoundsWithFlat3DArray(this._3dFlatArray);
        }
        if (data.regions) {
            this.worldBounds.setRegionBounds(data.regions.regionXPow2, data.regions.regionYPow2, data.regions.regionZPow2);
        }
        this.__settingsHaveBeenSynced = true;
    },
    runRGBLightUpdateQue() {
        const queue = this.worldData.getRGBLightUpdateQue();
        while (queue.length != 0) {
            const position = queue.shift();
            if (!position)
                break;
            this.worldGeneration.illumantionManager.runRGBFloodFillAt(position[0], position[1], position[2]);
        }
        this.worldData.clearRGBLightUpdateQue();
    },
    clearRGBLightUpdateQue() {
        this.worldData.clearRGBLightUpdateQue();
    },
    runRGBLightRemoveQue() {
        const queue = this.worldData.getRGBLightRemoveQue();
        while (queue.length != 0) {
            const position = queue.shift();
            if (!position)
                break;
            this.worldGeneration.illumantionManager.runRGBFloodRemoveAt(true, position[0], position[1], position[2]);
        }
        this.worldData.clearRGBLightRemoveQue();
    },
    clearRGBLightRemoveQue() {
        this.worldData.clearRGBLightRemoveQue();
    },
    runChunkRebuildQue() {
        const queue = this.worldData.getChunkRebuildQue();
        while (queue.length != 0) {
            const position = queue.shift();
            if (!position)
                break;
            const substance = this.worldData.getSubstanceNeededToRebuild(position[0], position[1], position[2]);
            if (substance.all) {
                this.buildChunk(position[0], position[1], position[2]);
            }
        }
        this.worldData.clearChunkRebuildQue();
    },
    clearChunkRebuildQue() {
        this.worldData.clearChunkRebuildQue();
    },
    /**# Remove Chunk
     * ---
     * Removes a chunk from the render thread.
     * Can also delete the chunk from world ata.
     */
    removeChunk(chunkX, chunkY, chunkZ, deleteChunk = false) {
        const chunk = this.worldData.getChunk(chunkX, chunkY, chunkZ);
        if (!chunk)
            return false;
        this.renderComm.sendMessage("remove-chunk", [chunkX, chunkY, chunkZ]);
        if (deleteChunk) {
            this.worldData.removeChunk(chunkX, chunkY, chunkZ);
            this.matrixCentralHub.releaseChunk(chunkX, chunkY, chunkZ);
        }
        return true;
    },
    /**# Delete Chunk
     * ---
     * Deletes a chunk from world data and releases it from all threads.
     */
    deleteChunk(chunkX, chunkY, chunkZ) {
        this.worldData.removeChunk(chunkX, chunkY, chunkZ);
        this.matrixCentralHub.releaseChunk(chunkX, chunkY, chunkZ);
    },
    buildChunk(chunkX, chunkY, chunkZ) {
        this.builderCommManager.requestFullChunkBeBuilt(chunkX, chunkY, chunkZ);
    },
    async $INIT(data) {
        await InitWorldWorker(this, data);
    },
};
DVEW.environment = Util.getEnviorment();
