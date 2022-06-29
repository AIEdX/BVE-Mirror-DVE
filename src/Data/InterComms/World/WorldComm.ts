import { WorldToConstructorMessages } from "../../../Constants/InterComms/WorldToConstructor.js";
import { CreateInterComm } from "../../../Comms/InterComm.js";
import { DVED } from "Data/DivineStarVoxelEngineData.js";

const worldComm = CreateInterComm("data-world", {});
export const WorldComm = worldComm;
worldComm.onMessage = (event) => {
 DVED.matrixHub.onMessage(event, (messageEvent) => {});
 if (event.data[0] == "set-world-port") {
    DVED.__connectedToWorld = true;
 }
};


worldComm.messageFunctions[WorldToConstructorMessages.RGBlightUpdate] = (
 data
) => {



};

