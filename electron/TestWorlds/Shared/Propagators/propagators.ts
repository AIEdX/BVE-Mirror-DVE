import { RegisterVoxels } from "../Functions/RegisterVoxelData.js";
import { DVEP } from "../../../out/Propagation/DivineVoxelEngineWorldPropagation.js";

RegisterVoxels(DVEP);
(async () => {
 await DVEP.$INIT({ onReady: () => {} });
})();
