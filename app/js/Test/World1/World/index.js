import { DivineVoxelEngineWorld } from "../../../Core/Contexts/World/DivineVoxelEngineWorld.js";
import { RegisterTexutres } from "./Functions/RegisterTextures.js";
import { RegisterVoxels } from "./Functions/RegisterVoxels.js";
const DVEW = new DivineVoxelEngineWorld(self);
RegisterTexutres(DVEW);
RegisterVoxels(DVEW);
DVEW.$INIT();
