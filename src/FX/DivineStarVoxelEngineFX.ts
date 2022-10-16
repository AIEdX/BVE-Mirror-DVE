//types
import type { EngineSettingsData } from "Meta/index.js";
//matrix
import { WorldMatrix } from "../Matrix/WorldMatrix.js";
//objects
import { EngineSettings } from "../Global/EngineSettings.js";
import { Util } from "../Global/Util.helper.js";
import { WorldBounds } from "../Data/World/WorldBounds.js";
//intercomms
import { WorldComm } from "./InterComms/World/WorldComm.js";
import { ParentComm } from "./InterComms/Parent/ParentComm.js";
//functions
import { InitWorker } from "./Init/InitWorker.js";
import { DVEFXInitData } from "Meta/FX/DVEFX.js";
import { DataSyncNode } from "../Data/DataSyncNode.js";
import { DataManager } from "../Data/DataManager.js";

export const DVEFX = {
 environment: <"node" | "browser">"browser",
 __settingsHaveBeenSynced: false,
 _3dFlatArray: Util.getFlat3DArray(),
 worldBounds: WorldBounds,
 UTIL: Util,
 settings: EngineSettings,

 dataSyncNode: DataSyncNode,
 data: DataManager,

 worldMatrix: WorldMatrix,


 worldComm: WorldComm,
 parentComm: ParentComm,

 syncSettings(data: EngineSettingsData) {
  this.settings.syncSettings(data);
  this.settings.syncWithWorldBounds(this.worldBounds);
  this.__settingsHaveBeenSynced = true;
 },
 reStart() {},

 isReady() {
  return DVEFX.worldComm.isPortSet() && DVEFX.__settingsHaveBeenSynced;
 },

 async $INIT(data: DVEFXInitData) {
  await InitWorker(this, data);
 },
};

export type DivineVoxelEngineFX = typeof DVEFX;
