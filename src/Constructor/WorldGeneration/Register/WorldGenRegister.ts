import { BrushTool } from "../../../Tools/Brush/Brush.js";
import { WorldBounds } from "../../../Data/World/WorldBounds.js";
import { ThreadComm } from "../../../Libs/ThreadComm/ThreadComm.js";

const brush = new BrushTool();
const dataTool = brush._dt;
export const WorldGenRegister = {
 _requests: <
  Map<
   string,
   {
    dimension: string;
    chunks: Map<string, [x: number, y: number, z: number]>;
    voxels: [x: number, y: number, z: number, data: number[]][];
   }
  >
 >new Map(),

 registerRequest(dimension: string, x: number, y: number, z: number) {
  const id = `${dimension}-${x}-${y}-${z}`;
  this._requests.set(id, {
   chunks: new Map(),
   dimension: dimension,
   voxels: [],
  });
  return id;
 },

 addToRequest(
  registerId: string,
  x: number,
  y: number,
  z: number,
  rawData: number[]
 ) {
  const requests = this._requests.get(registerId);
  if (!requests) return;
  const chunkPOS = WorldBounds.getChunkPosition(x, y, z);
  const chunkKey = WorldBounds.getChunkKey(chunkPOS);
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

  requests.voxels.push([x, y, z, rawData]);
 },

 attemptRequestFullFill(registerId: string) {
  const requests = this._requests.get(registerId);
  if (!requests) return true;

  let done = true;
  for (const [key, pos] of requests.chunks) {
   if (!dataTool.loadIn(pos[0], pos[1], pos[2])) {
    done = false;
    break;
   }
  }
  if (!done) return false;
  brush.setDimension(requests.dimension);
  const voxels = requests.voxels;
  while (voxels.length) {
   const data = voxels.shift();
   if (!data) break;
   brush.setXYZ(data[0], data[1], data[2]).setRaw(data[3]).paint();
  }
  this._requests.delete(registerId);
  return true;
 },
};
