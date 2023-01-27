//types
import { ThreadComm } from "../../../Libs/ThreadComm/ThreadComm.js";
//objects
import { DVER } from "../../DivineVoxelEngineRender.js";
const CCMBase = ThreadComm.createCommManager({
    name: "constructor",
    onPortSet(port, commName) { },
});
const CCM = Object.assign(CCMBase, {
    $INIT() {
        const worldComm = ThreadComm.getComm("world");
        for (const constructor of CCM.__comms) {
            worldComm.connectToComm(constructor);
            constructor.sendMessage("sync-uv-texuture-data", [
                DVER.textureManager.uvTextureMap,
                DVER.textureManager.overlayUVTextureMap,
            ]);
        }
    },
    createConstructors(path, numBuilders = 4) {
        for (let i = 0; i <= numBuilders; i++) {
            const newWorker = new Worker(new URL(path, import.meta.url), {
                type: "module",
            });
            CCM.addPort(newWorker);
        }
    },
    setConstructors(constructors) {
        CCM.addPorts(constructors);
    },
    syncSettings(data) {
        CCM.sendMessageToAll("sync-settings", [data]);
    },
});
export const ConstructorCommManager = CCM;
