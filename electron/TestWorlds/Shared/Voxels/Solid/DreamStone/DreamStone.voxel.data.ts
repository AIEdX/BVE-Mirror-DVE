import { VoxelData } from "../../../../../out/Meta/index";

export const DreamStoneVoxelData: VoxelData = {
 name: "Dream Stone",
 shapeId: "Box",
 id: "dve:dreamstone",
 substance: "solid",
 states: ['no-grass'],
 material : "stone",
 hardnress : 1000,
 physics : {
    collider : "Box",
    checkCollisions : true
 }
};
