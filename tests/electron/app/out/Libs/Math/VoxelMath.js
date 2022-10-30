import { BoundingBox } from "./Classes/BoundingBox.js";
import { Plane } from "./Classes/Plane.js";
import { SimpleBoundingBox } from "./Classes/SimpleBoundingBox.js";
import { Vector3 } from "./Classes/Vector3.js";
import { VisitAll } from "./Functions/VisitAll.js";
/**# Voxel Math
 * ---
 * Can be used in any thread that needs it.
 * Has functions for collision detection, finding voxels in a direction, and path finding.
 */
export const VoxelMath = {
    visitAll: VisitAll,
    getVector3(x, y, z) {
        return new Vector3(x, y, z);
    },
    getPlane(pv1, pv2, pv3, pv4) {
        return new Plane({
            v1: pv1,
            v2: pv2,
            v3: pv3,
            v4: pv4,
        });
    },
    getSimpleBoundingBox(origin, dimensions) {
        return new SimpleBoundingBox(origin, dimensions);
    },
    getBoundingBox(data) {
        return new BoundingBox(data);
    },
    convertToOriginGridSpace(position) {
        position[0] = Math.round(position[0]) + 0.5;
        position[1] = Math.round(position[1]) + 0.5;
        position[2] = Math.round(position[2]) + 0.5;
        return position;
    },
};
