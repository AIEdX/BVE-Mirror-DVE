//types
import { ChunkBounds } from "../Global/Chunks/ChunkBounds.js";
import { EngineSettings } from "../Global/EngineSettings.js";
import type { DVENInitData } from "Meta/Nexus/DVEN.js";
//matrix
import { MatrixHub } from "../Matrix/MatrixHub.js";
import { WorldMatrix } from "../Matrix/WorldMatrix.js";
//functions
import { InitNexusWorker } from "./Init/InitNexusWorker.js";
import { WorldComm } from "./World/WorldComm.js";
import { EngineSettingsData } from "Meta/index.js";

class DivineVoxelEngineNexusClass {
 engineSettings = new EngineSettings();
 worldMatrix = new WorldMatrix();
 matrixHub = new MatrixHub("nexus", this.worldMatrix);

 worldComm = new WorldComm(this);

 async $INIT(data: DVENInitData) {
  await InitNexusWorker(this, data.onReady, data.onMessage, data.onRestart);
 }

 syncSettings(data: EngineSettingsData) {
  this.engineSettings.syncSettings(data);
  if (data.chunks) {
   this.worldMatrix.chunkBounds.setChunkBounds(
    data.chunks.chunkXPow2,
    data.chunks.chunkYPow2,
    data.chunks.chunkZPow2
   );
   this.worldMatrix.syncChunkBounds();
  }
 }

 /**# Load chunk into Nexus
  * Load a chunk into the shared nexus thread.
  */
 loadChunkIntoNexus(chunkX: number, chunkY: number, chunkZ: number) {}

 /**# Release Chunk From Nexus
  * Remve a chunk in the shared nexus thread.
  */
 releaseChunkFromNexus(chunkX: number, chunkY: number, chunkZ: number) {}
}

export type DivineVoxelEngineNexus = DivineVoxelEngineNexusClass;
export const DVEN = new DivineVoxelEngineNexusClass();
