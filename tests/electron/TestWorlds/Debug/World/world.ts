import { RegisterVoxels } from "../../Shared/Functions/RegisterVoxelData.js";

import { WorldGen } from "./WorldGen/WorldGen.js";
import { DVEW } from "../../../out/World/DivineVoxelEngineWorld.js";
import { RegisterItemData } from "../../Shared/Functions/RegisterItemData.js";
import { GetAnalyzerCubeWorld } from "../../Shared/Debug/Anaylzer/Cube.js";

RegisterVoxels(DVEW);
RegisterItemData(DVEW);
await DVEW.$INIT();
const builder = DVEW.getBuilder();
const dataTool = DVEW.getDataTool();
const brush = DVEW.getBrush();
DVEW.data.dimensions.registerDimension("other", {
 liquidFlowSpeed: 1,
 magmaFlowSpeed: 1,
 sunLight: true,
});

for (let x = -16; x <= 16; x += 16) {
 for (let z = -16; z <= 16; z += 16) {
  WorldGen.generateChunk("main", x, z);
 }
}
for (let x = -64; x <= -32; x += 16) {
 for (let z = -64; z <= -32; z += 16) {
  WorldGen.generateChunk("other", x, z);
 }
}

builder.setDimension("main");
for (let x = -16; x <= 16; x += 16) {
 for (let z = -16; z <= 16; z += 16) {
  builder.setXZ(x, z).buildColumn();
 }
}

for (let x = 0; x < 16; x++) {
 let y = 5;
 for (let z = 0; z <= 10; z += 1) {
  brush.setId("dve:dreamstone-stair");
  if (x == 0 || x == 15) {
   brush.setId("dve:dreamstone");
  }
  brush.setXYZ(x, y, z).setShapeState(0).paint().clear();
  y++;
 }
}
brush.setId("dve:debugbox").setXYZ(20, 7, 0).paint();
builder.setDimension("other");
for (let x = -64; x <= -32; x += 16) {
 for (let z = -64; z <= -32; z += 16) {
  builder.setXZ(x, z).buildColumn();
 }
}

GetAnalyzerCubeWorld(DVEW);

const tasks = DVEW.getTasksTool();

tasks.generate.deferred.run(0, 1, 2, [], (d: any) => {
 console.log("all done");
});

(self as any).DVEW = DVEW;
(self as any).dataTool = dataTool;
