import {
 SetUpEngine,
 SetUpCanvas,
 SetUpDarkScene,
 SetUpDefaultCamera,
 SetUpDefaultSkybox,
 CreateWorldAxis,
 runRenderLoop,
} from "../Shared/Babylon/index.js";
import { RunInit, SetUpWorkers } from "../Shared/Create/index.js";
import { DVER } from "../../out/Render/DivineVoxelEngineRender.js";
import { RegisterTexutres } from "../Shared/Functions/RegisterTextures.js";

RegisterTexutres(DVER);

const workers = SetUpWorkers(
 import.meta.url,
 "./World/index.js",
 "../Shared/Builder/builder.js",
 "../Shared/Propagators/propagators.js",
);
await DVER.$INIT({
 worldWorker: workers.worldWorker,
 builderWorker: workers.builderWorkers,
 propagationWorker: workers.propagationWorkers,
 lighting: {
  doAO: true,
  doRGBLight: true,
  doSunLight: true,
  autoRGBLight: true,
  autoSunLight: false,
 },
});

const init = async () => {
 const canvas = SetUpCanvas();
 const engine = SetUpEngine(canvas);
 const scene = SetUpDarkScene(engine);
 const camera = SetUpDefaultCamera(scene, canvas);
 SetUpDefaultSkybox(scene);
 CreateWorldAxis(scene, 10);

 await DVER.$SCENEINIT({ scene: scene });
 DVER.renderManager.setSunLevel(1);

 runRenderLoop(engine, scene, camera);
};

RunInit(init);
