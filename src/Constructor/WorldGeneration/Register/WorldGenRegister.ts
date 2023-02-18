import type { RawVoxelData } from "Meta/Data/Voxels/Voxel.types.js";
import type { LocationData } from "Libs/voxelSpaces/Types/VoxelSpaces.types.js";

import { BrushTool } from "../../../Tools/Brush/Brush.js";
import { ThreadComm } from "../../../Libs/ThreadComm/ThreadComm.js";
import { WorldSpaces } from "../../../Data/World/WorldSpaces.js";
import { ChunkDataTool } from "../../../Tools/Data/WorldData/ChunkDataTool.js";

const brush = new BrushTool();
const dataTool = brush._dt;
const chunkTool = new ChunkDataTool();
export const WorldGenRegister = {
 MAX_ATTEMPTS: 100,
 _requests: <
  Map<
   string,
   {
    attempts: number;
    dimension: string;
    chunks: Map<string, [x: number, y: number, z: number]>;
    voxels: [x: number, y: number, z: number, data: RawVoxelData][];
   }
  >
 >new Map(),

 registerRequest(dimension: string, x: number, y: number, z: number) {
  const id = `${dimension}-${x}-${y}-${z}`;
  this._requests.set(id, {
   attempts: 0,
   chunks: new Map(),
   dimension: dimension,
   voxels: [],
  });
  return id;
 },

 addToRequest(
  registerId: string,
  location: LocationData,
  rawData: RawVoxelData
 ) {
  const requests = this._requests.get(registerId);
  if (!requests) return;
  const chunkPOS = WorldSpaces.chunk.getPositionLocation(location);
  const chunkKey = WorldSpaces.chunk.getKeyLocation(location);
  if (!chunkTool.loadInAtLocation(location)) {
   if (!requests.chunks.has(chunkKey)) {
    const world = ThreadComm.getComm("world");

    world.runTasks("add-chunk", [
     requests.dimension,
     chunkPOS.x,
     chunkPOS.y,
     chunkPOS.z,
    ]);
    requests.chunks.set(chunkKey, [chunkPOS.x, chunkPOS.y, chunkPOS.z]);
   }
  }
  const [dim, x, y, z] = location;
  requests.voxels.push([x, y, z, rawData]);
 },

 attemptRequestFullFill(registerId: string) {
  const requests = this._requests.get(registerId);
  if (!requests) return true;
  chunkTool.setDimension(requests.dimension);
  const world = ThreadComm.getComm("world");
  let done = true;
  for (const [key, pos] of requests.chunks) {
   if (!chunkTool.loadInAt(pos[0], pos[1], pos[2])) {
    done = false;
    world.runTasks("add-chunk", [requests.dimension, pos[0], pos[1], pos[2]]);
   }
  }
  if (!done) {
 
   requests.attempts++;
   if (requests.attempts >= this.MAX_ATTEMPTS) {
    console.error(`World gen requests cancled after max attempts`, requests);
    this._requests.delete(registerId);
    return true;
   }
   return false;
  }
  brush.setDimension(requests.dimension);
  const voxels = requests.voxels;
  brush.start();
  while (voxels.length) {
   const data = voxels.shift();
   if (!data) break;
   brush.setXYZ(data[0], data[1], data[2]).setRaw(data[3]).paint();
  }
  brush.stop();
  this._requests.delete(registerId);
  return true;
 },
};
