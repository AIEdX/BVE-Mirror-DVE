import type { ChunkVoxels, ChunkData } from "Meta/Chunks/Chunk.types";
import {
 GetRelativeVoxelData,
 GetVoxelData,
} from "./Functions/GetVoxelData.js";
import type { DivineVoxelEngineWorld } from "World/DivineVoxelEngineWorld.js";
import type { ChunkProcessor } from "../Chunks/ChunkProcessor.js";
import {
 CalculateVoxelRGBLight,
 VoxelRGBLightMixCalc,
} from "./Functions/CalculateVoxelRGBLight.js";
import { InfoByte } from "Global/Util/InfoByte.js";
import { LightByte } from "Global/Util/LightByte.js";
import { VoxelSunLightMixCalc } from "./Functions/CalculateVoxelSunLight.js";
import { VoxelInteface } from "Meta/World/Voxels/Voxel.types.js";

export class WorldData {
 renderDistance = 20;

 chunkXPow2 = 4;
 chunkZPow2 = 4;
 chunkYPow2 = 7;
 private chunkProccesor: ChunkProcessor;

 chunks: Record<string, ChunkData> = {};
 getVoxelData = GetVoxelData;
 getRelativeVoxelData = GetRelativeVoxelData;
 calculdateVoxelLight = CalculateVoxelRGBLight;
 voxelRGBLightMixCalc = VoxelRGBLightMixCalc;
 voxelSunLightMixCalc = VoxelSunLightMixCalc;

 infoByte: InfoByte;
 lightByte: LightByte;

 substanceRules: Record<string, boolean> = {
  "solid-solid": false,
  "solid-flora": true,
  "solid-transparent": true,
  "solid-fluid": true,
  "solid-magma": true,

  "transparent-solid": true,
  "transparent-flora": true,
  "transparent-transparent": true,
  "transparent-fluid": true,
  "transparent-magma": true,

  "flora-solid": true,
  "flora-flora": true,
  "flora-transparent": true,
  "flora-fluid": true,
  "flora-magma": true,


  "fluid-solid": false,
  "fluid-flora": true,
  "fluid-transparent": true,
  "fluid-fluid": false,
  "fluid-magma": true,

  "magma-solid": false,
  "magma-flora": true,
  "magma-transparent": true,
  "magma-fluid": true,
  "magma-magma": false,
 };

 constructor(public DVEW: DivineVoxelEngineWorld) {
  this.infoByte = this.DVEW.UTIL.getInfoByte();
  this.lightByte = this.DVEW.UTIL.getLightByte();
 }

 getCurrentWorldDataSize() {
  const data = JSON.stringify(this.chunks);
  return new Blob([data]).size;
 }
 getCurrentWorldDataString() {
  return JSON.stringify(this.chunks);
 }

 faceCheck(
  voxel: VoxelInteface,
  voxelData: any[],
  x: number,
  y: number,
  z: number
 ) {
  if (voxelData[0] < 0) return true;
  const chunkX = (x >> this.chunkXPow2) << this.chunkXPow2;
  const chunkY = (y >> this.chunkYPow2) << this.chunkYPow2;
  const chunkZ = (z >> this.chunkXPow2) << this.chunkXPow2;
  const chunk = this.chunks[`${chunkX}-${chunkZ}-${chunkY}`];
  if (!chunk || chunk.isEmpty) {
   return true;
  }

  let voxelX = Math.abs(x - chunkX);
  if (x < 0) {
   if (x == chunkX + 15) {
    voxelX = 15;
   }
  }
  let voxelZ = Math.abs(z - chunkZ);
  if (z < 0) {
   if (z == chunkZ + 15) {
    voxelZ = 15;
   }
  }
  let voxelY = Math.abs(y - chunkY);
  if (y < 0) {
   if (y == chunkY + 127) {
    voxelY = 127;
   }
  }
  if (
   chunk.voxels[voxelX] &&
   chunk.voxels[voxelX][voxelZ] &&
   chunk.voxels[voxelX][voxelZ][voxelY]
  ) {
   const voxelId = chunk.voxels[voxelX][voxelZ][voxelY][0];
   if (voxelId < 0) return true;
   let voxelPallet = chunk.voxelPallet;
   if (!voxelPallet) {
    voxelPallet = this.DVEW.worldGeneration.globalVoxelPallet;
   }

   const voxelCheck = this.DVEW.voxelManager.getVoxel(voxelPallet[voxelId][0]);
   if (
    this.substanceRules[`${voxel.data.substance}-${voxelCheck.data.substance}`]
   ) {
    return true;
   } else {
    return false;
   }
  } else {
   return true;
  }
 }

 getData(x: number, y: number, z: number) {
  const chunkX = (x >> this.chunkXPow2) << this.chunkXPow2;
  const chunkY = (y >> this.chunkYPow2) << this.chunkYPow2;
  const chunkZ = (z >> this.chunkXPow2) << this.chunkXPow2;
  const chunk = this.chunks[`${chunkX}-${chunkZ}-${chunkY}`];
  if (!chunk || chunk.isEmpty) {
   return false;
  }
  let voxelX = Math.abs(x - chunkX);
  if (x < 0) {
   if (x == chunkX + 15) {
    voxelX = 15;
   }
  }
  let voxelZ = Math.abs(z - chunkZ);
  if (z < 0) {
   if (z == chunkZ + 15) {
    voxelZ = 15;
   }
  }
  let voxelY = Math.abs(y - chunkY);
  if (y < 0) {
   if (y == chunkY + 127) {
    voxelY = 127;
   }
  }
  if (
   chunk.voxels[voxelX] &&
   chunk.voxels[voxelX][voxelZ] &&
   chunk.voxels[voxelX][voxelZ][voxelY]
  ) {
   return chunk.voxels[voxelX][voxelZ][voxelY];
  } else {
   return false;
  }
 }

 _copy(data: any) {
  return [...data];
 }

 setData(x: number, y: number, z: number, data: number[]) {
  const chunkX = (x >> this.chunkXPow2) << this.chunkXPow2;
  const chunkY = (y >> this.chunkYPow2) << this.chunkYPow2;
  const chunkZ = (z >> this.chunkXPow2) << this.chunkXPow2;
  const chunk = this.chunks[`${chunkX}-${chunkZ}-${chunkY}`];
  if (!chunk || chunk.isEmpty) {
   return false;
  }
  let voxelX = Math.abs(x - chunkX);
  if (x < 0) {
   if (x == chunkX + 15) {
    voxelX = 15;
   }
  }
  let voxelZ = Math.abs(z - chunkZ);
  if (z < 0) {
   if (z == chunkZ + 15) {
    voxelZ = 15;
   }
  }
  let voxelY = Math.abs(y - chunkY);
  if (y < 0) {
   if (y == chunkY + 127) {
    voxelY = 127;
   }
  }
  const voxels = chunk.voxels;
  voxels[voxelX] ??= [];
  voxels[voxelX][voxelZ] ??= [];
  voxels[voxelX][voxelZ][voxelY] = this._copy(data);
 }

 getChunk(chunkX: number, chunkY: number, chunkZ: number): ChunkData | false {
  if (!this.chunks[`${chunkX}-${chunkZ}-${chunkY}`]) {
   return false;
  }
  return this.chunks[`${chunkX}-${chunkZ}-${chunkY}`];
 }

 removeChunk(chunkX: number, chunkY: number, chunkZ: number) {
  delete this.chunks[`${chunkX}-${chunkZ}-${chunkY}`];
 }

 setChunk(chunkX: number, chunkY: number, chunkZ: number, chunk: ChunkData) {
  this.chunks[`${chunkX}-${chunkZ}-${chunkY}`] = chunk;
 }

 getChunkPosition(x: number, y: number, z: number) {
  return [
   (x >> this.chunkXPow2) << this.chunkXPow2,
   (y >> this.chunkYPow2) << this.chunkYPow2,
   (z >> this.chunkXPow2) << this.chunkXPow2,
  ];
 }

 requestVoxelAdd(
  chunkX: number,
  chunkY: number,
  chunkZ: number,
  x: number,
  y: number,
  z: number,
  voxelPalletId: number = 1
 ): false | ChunkVoxels {
  const chunk = this.chunks[`${chunkX}-${chunkZ}-${chunkY}`];
  const relativePOS = this._getRelativeChunkPosition(
   chunkX,
   chunkY,
   chunkZ,
   x,
   y,
   z
  );
  const relativeX = relativePOS[0];
  const relativeZ = relativePOS[1];
  const relativeY = relativePOS[2];
  const chunkVoxels = chunk.voxels;
  let pallet = chunk.voxelPallet;
  if (!pallet) {
   pallet = this.DVEW.worldGeneration.getGlobalVoxelPallet();
  }
  if (!chunkVoxels[relativeX][relativeZ]) {
   chunkVoxels[relativeX][relativeZ] ??= [];
   chunkVoxels[relativeX][relativeZ][relativeY] = [
    voxelPalletId,
    0,
    0xffffffff,
   ];

   const template = this.DVEW.chunkProccesor.makeAllChunkTemplates(
    chunk,
    pallet,
    chunkX,
    chunkY,
    chunkZ
   );
   this.DVEW.builderManager.requestFullChunkBeBuilt(
    chunkX,
    chunkY,
    chunkZ,
    template
   );

   this._checkNearbyChunksToRebuild(
    chunkX,
    chunkY,
    chunkZ,
    relativeX,
    relativeZ
   );
  } else if (!chunkVoxels[relativeX][relativeZ][relativeY]) {
   chunkVoxels[relativeX][relativeZ][relativeY] = [
    voxelPalletId,
    0,
    0xffffffff,
   ];
   const template = this.DVEW.chunkProccesor.makeAllChunkTemplates(
    chunk,
    pallet,
    chunkX,
    chunkY,
    chunkZ
   );

   this.DVEW.builderManager.requestFullChunkBeBuilt(
    chunkX,
    chunkY,
    chunkZ,
    template
   );

   this._checkNearbyChunksToRebuild(
    chunkX,
    chunkY,
    chunkZ,
    relativeX,
    relativeZ
   );
  }

  return false;
 }

 _checkNearbyChunksToRebuild(
  chunkX: number,
  chunkY: number,
  chunkZ: number,
  relativeX: number,
  relativeZ: number
 ) {
  let updated = false;
  buildChunkX0: if (relativeX == 0) {
   const newChunkX = chunkX - 16;
   const newChunkZ = chunkZ;
   const newChunkY = chunkY;
   const chunk = this.getChunk(newChunkX, newChunkY, newChunkZ);
   if (!chunk) break buildChunkX0;
   let pallet = chunk.voxelPallet;
   if (!pallet) {
    pallet = this.DVEW.worldGeneration.getGlobalVoxelPallet();
   }
   updated = true;
   const template = this.DVEW.chunkProccesor.makeAllChunkTemplates(
    chunk,
    pallet,
    newChunkX,
    newChunkY,
    newChunkZ
   );
   this.DVEW.builderManager.requestFullChunkBeBuilt(
    newChunkX,
    newChunkY,
    newChunkZ,
    template
   );
  }
  buildChunkX15: if (relativeX == 15) {
   const newChunkX = chunkX + 16;
   const newChunkZ = chunkZ;
   const newChunkY = chunkY;
   const chunk = this.getChunk(newChunkX, newChunkY, newChunkZ);
   if (!chunk) break buildChunkX15;
   let pallet = chunk.voxelPallet;
   if (!pallet) {
    pallet = this.DVEW.worldGeneration.getGlobalVoxelPallet();
   }
   updated = true;
   const template = this.DVEW.chunkProccesor.makeAllChunkTemplates(
    chunk,
    pallet,
    newChunkX,
    newChunkY,
    newChunkZ
   );
   this.DVEW.builderManager.requestFullChunkBeBuilt(
    newChunkX,
    newChunkY,
    newChunkZ,
    template
   );
  }
  buildChunkZ0: if (relativeZ == 0) {
   const newChunkX = chunkX;
   const newChunkZ = chunkZ - 16;
   const newChunkY = chunkY;
   const chunk = this.getChunk(newChunkX, newChunkY, newChunkZ);
   if (!chunk) break buildChunkZ0;
   let pallet = chunk.voxelPallet;
   if (!pallet) {
    pallet = this.DVEW.worldGeneration.getGlobalVoxelPallet();
   }
   updated = true;
   const template = this.DVEW.chunkProccesor.makeAllChunkTemplates(
    chunk,
    pallet,
    newChunkX,
    newChunkY,
    newChunkZ
   );
   this.DVEW.builderManager.requestFullChunkBeBuilt(
    newChunkX,
    newChunkY,
    newChunkZ,
    template
   );
  }
  buildChunkZ15: if (relativeZ == 15) {
   const newChunkX = chunkX;
   const newChunkZ = chunkZ + 16;
   const newChunkY = chunkY;
   const chunk = this.getChunk(newChunkX, newChunkY, newChunkZ);
   if (!chunk) break buildChunkZ15;
   let pallet = chunk.voxelPallet;
   if (!pallet) {
    pallet = this.DVEW.worldGeneration.getGlobalVoxelPallet();
   }
   updated = true;
   const template = this.DVEW.chunkProccesor.makeAllChunkTemplates(
    chunk,
    pallet,
    newChunkX,
    newChunkY,
    newChunkZ
   );
   this.DVEW.builderManager.requestFullChunkBeBuilt(
    newChunkX,
    newChunkY,
    newChunkZ,
    template
   );
  }
  buildChunkX15Z15: if (relativeZ == 15 && relativeX == 15) {
   const newChunkX = chunkX + 16;
   const newChunkZ = chunkZ + 16;
   const newChunkY = chunkY;
   const chunk = this.getChunk(newChunkX, newChunkY, newChunkZ);
   if (!chunk) break buildChunkX15Z15;
   let pallet = chunk.voxelPallet;
   if (!pallet) {
    pallet = this.DVEW.worldGeneration.getGlobalVoxelPallet();
   }
   updated = true;
   const template = this.DVEW.chunkProccesor.makeAllChunkTemplates(
    chunk,
    pallet,
    newChunkX,
    newChunkY,
    newChunkZ
   );
   this.DVEW.builderManager.requestFullChunkBeBuilt(
    newChunkX,
    newChunkY,
    newChunkZ,
    template
   );
  }
  buildChunkX0Z0: if (relativeZ == 0 && relativeX == 0) {
   const newChunkX = chunkX - 16;
   const newChunkZ = chunkZ - 16;
   const newChunkY = chunkY;
   const chunk = this.getChunk(newChunkX, newChunkY, newChunkZ);
   if (!chunk) break buildChunkX0Z0;
   let pallet = chunk.voxelPallet;
   if (!pallet) {
    pallet = this.DVEW.worldGeneration.getGlobalVoxelPallet();
   }
   updated = true;
   const template = this.DVEW.chunkProccesor.makeAllChunkTemplates(
    chunk,
    pallet,
    newChunkX,
    newChunkY,
    newChunkZ
   );
   this.DVEW.builderManager.requestFullChunkBeBuilt(
    newChunkX,
    newChunkY,
    newChunkZ,
    template
   );
  }
  buildChunkX15Z0: if (relativeZ == 0 && relativeX == 15) {
   const newChunkX = chunkX + 16;
   const newChunkZ = chunkZ - 16;
   const newChunkY = chunkY;
   const chunk = this.getChunk(newChunkX, newChunkY, newChunkZ);
   if (!chunk) break buildChunkX15Z0;
   let pallet = chunk.voxelPallet;
   if (!pallet) {
    pallet = this.DVEW.worldGeneration.getGlobalVoxelPallet();
   }
   updated = true;
   const template = this.DVEW.chunkProccesor.makeAllChunkTemplates(
    chunk,
    pallet,
    newChunkX,
    newChunkY,
    newChunkZ
   );
   this.DVEW.builderManager.requestFullChunkBeBuilt(
    newChunkX,
    newChunkY,
    newChunkZ,
    template
   );
  }
  buildChunkX0Z15: if (relativeZ == 15 && relativeX == 0) {
   const newChunkX = chunkX - 16;
   const newChunkZ = chunkZ + 16;
   const newChunkY = chunkY;
   const chunk = this.getChunk(newChunkX, newChunkY, newChunkZ);
   if (!chunk) break buildChunkX0Z15;
   let pallet = chunk.voxelPallet;
   if (!pallet) {
    pallet = this.DVEW.worldGeneration.getGlobalVoxelPallet();
   }
   updated = true;
   const template = this.DVEW.chunkProccesor.makeAllChunkTemplates(
    chunk,
    pallet,
    newChunkX,
    newChunkY,
    newChunkZ
   );
   this.DVEW.builderManager.requestFullChunkBeBuilt(
    newChunkX,
    newChunkY,
    newChunkZ,
    template
   );
  }
  if (updated) {
   this.DVEW.buildFluidMesh();
  }
 }

 _getRelativeChunkPosition(
  chunkX: number,
  chunkY: number,
  chunkZ: number,
  x: number,
  y: number,
  z: number
 ) {
  let relativeX = Math.abs(x - chunkX);
  if (x < 0) {
   if (x == chunkX + 15) {
    relativeX = 15;
   }
  }
  let relativeZ = Math.abs(z - chunkZ);
  if (z < 0) {
   if (z == chunkZ + 15) {
    relativeZ = 15;
   }
  }
  let realtiveY = Math.abs(y - chunkY);
  if (y < 0) {
   if (y == chunkY + 127) {
    realtiveY = 127;
   }
  }

  return [relativeX, relativeZ, realtiveY];
 }

 requestVoxelBeRemove(
  chunkX: number,
  chunkY: number,
  chunkZ: number,
  x: number,
  y: number,
  z: number,
  blockId: number = 1
 ): false | ChunkVoxels {
  const chunk = this.getChunk(chunkX, chunkY, chunkZ);
  if (!chunk) return false;

  const relativePOS = this._getRelativeChunkPosition(
   chunkX,
   chunkY,
   chunkZ,
   x,
   y,
   z
  );
  const relativeX = relativePOS[0];
  const relativeZ = relativePOS[1];
  const relativeY = relativePOS[2];
  const chunkVoxels = chunk.voxels;
  let pallet = chunk.voxelPallet;
  if (!pallet) {
   pallet = this.DVEW.worldGeneration.getGlobalVoxelPallet();
  }

  if (!chunkVoxels[relativeX]) return false;
  if (!chunkVoxels[relativeX][relativeZ]) return false;
  if (chunkVoxels[relativeX][relativeZ][relativeY]) {
   delete chunkVoxels[relativeX][relativeZ][relativeY];

   this._checkNearbyChunksToRebuild(
    chunkX,
    chunkY,
    chunkZ,
    relativeX,
    relativeZ
   );

   const template = this.DVEW.chunkProccesor.makeAllChunkTemplates(
    chunk,
    pallet,
    chunkX,
    chunkY,
    chunkZ
   );
   this.DVEW.builderManager.requestFullChunkBeBuilt(
    chunkX,
    chunkY,
    chunkZ,
    template
   );

   this.DVEW.buildFluidMesh();

   return chunkVoxels;
  } else {
   return false;
  }
 }
}
