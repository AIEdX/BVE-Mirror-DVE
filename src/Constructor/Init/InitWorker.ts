import type { DivineVoxelEngineConstructor } from "Constructor/DivineVoxelEngineConstructor";
import { ThreadComm } from "threadcomm"

export async function InitWorker(DVEC: DivineVoxelEngineConstructor) {
 await ThreadComm.$INIT("constructor");
 DVEC.builder.$INIT();
 DVEC.tasksQueue.$INIT();
 await DVEC.UTIL.createPromiseCheck({
  check: () => {
   return DVEC.isReady();
  },
  onReady() {},
  checkInterval: 1,
 });

}
