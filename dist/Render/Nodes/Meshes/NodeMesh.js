import { DVEBabylon } from "../../Babylon/DVEBabylon.js";
import { NodeManager } from "../NodeManager.js";
import { RenderManager } from "../../Render/RenderManager.js";
import { FOManager } from "../../Render/FloatingOrigin/FoManager.js";
export class NodeMesh {
    data;
    meshes = [];
    pickable = false;
    checkCollisions = false;
    seralize = false;
    clearCachedGeometry = false;
    defaultBb;
    constructor(data) {
        this.data = data;
    }
    createMesh(data) {
        const scene = RenderManager.scene;
        if (!scene)
            return false;
        if (!this.defaultBb) {
            this.defaultBb = new DVEBabylon.system.BoundingInfo(DVEBabylon.system.Vector3.Zero(), new DVEBabylon.system.Vector3(16, 16, 16));
        }
        let mesh = new DVEBabylon.system.Mesh(this.data.id, scene);
        mesh.isPickable = this.pickable;
        mesh.checkCollisions = this.checkCollisions;
        mesh.type = "node";
        if (!this.checkCollisions) {
            mesh.doNotSyncBoundingInfo = true;
        }
        mesh.doNotSerialize = this.seralize;
        mesh.cullingStrategy = DVEBabylon.system.Mesh.CULLINGSTRATEGY_STANDARD;
        const mat = NodeManager.materials.get(this.data.materialId);
        if (!mat) {
            throw new Error(`Material: ${this.data.materialId} does not exist`);
        }
        mesh.material = mat.getMaterial();
        if (FOManager.activeNode) {
            mesh.parent = FOManager.activeNode;
        }
        const atrs = mat.shader.data.mesh.getAttributes();
        for (const [id, stride] of atrs) {
            mesh.setVerticesData(id, [0], false, stride);
        }
        mesh.position.x = data[0][1];
        mesh.position.y = data[0][2];
        mesh.position.z = data[0][3];
        const vertexData = new DVEBabylon.system.VertexData();
        for (const [id, attribute, stride] of data[1]) {
            if (id == "position") {
                vertexData.positions = attribute;
                continue;
            }
            if (id == "normal") {
                vertexData.normals = attribute;
                continue;
            }
            if (id == "indices") {
                vertexData.indices = attribute;
                continue;
            }
            mesh.setVerticesData(id, attribute, false, stride);
        }
        vertexData.applyToMesh(mesh, false);
        mesh.isVisible = true;
        mesh.setEnabled(true);
        return mesh;
    }
    syncSettings(settings) {
        if (settings.meshes.pickable) {
            this.pickable = true;
        }
        if (settings.meshes.clearChachedGeometry) {
            this.clearCachedGeometry = true;
        }
        if (settings.meshes.seralize) {
            this.seralize = true;
        }
    }
    _clearCached(mesh) {
        if (this.clearCachedGeometry) {
            if (mesh.subMeshes) {
                for (const sm of mesh.subMeshes) {
                    sm.setBoundingInfo(this.defaultBb);
                }
            }
            mesh.geometry?.clearCachedData();
        }
    }
}
