import { RawTexture2DArray } from "@babylonjs/core/Materials/Textures/rawTexture2DArray.js";
import { Texture } from "@babylonjs/core/Materials/Textures/texture.js";
import { Scene } from "@babylonjs/core/scene.js";
import { Engine } from "@babylonjs/core/Engines/engine.js";
import { Vector3, Vector4 } from "@babylonjs/core/Maths/math.vector.js";
import { Color3 } from "@babylonjs/core/Maths/math.color.js";
import { Effect } from "@babylonjs/core/Materials/effect.js";
import { Mesh } from "@babylonjs/core/Meshes/mesh.js";
import { UniversalCamera } from "@babylonjs/core/Cameras/universalCamera.js";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode.js";
import { ShaderMaterial } from "@babylonjs/core/Materials/shaderMaterial.js";
import { BoundingBox } from "@babylonjs/core/Culling/boundingBox.js";
import { BoundingInfo } from "@babylonjs/core/Culling/boundingInfo.js";
import { VertexData } from "@babylonjs/core/Meshes/mesh.vertexData.js";
export type DVEBabylonSystem  = {
    Scene : typeof  Scene,
    Engine : typeof Engine,
    RawTexture2DArray : typeof RawTexture2DArray,
    Texture :typeof Texture,
    Vector3 : typeof Vector3,
    Vector4 :typeof Vector4,
    UniversalCamera :typeof UniversalCamera,
    TransformNode : typeof TransformNode,
    ShaderMaterial :typeof ShaderMaterial,
    Mesh :typeof Mesh,
    BoundingBox :typeof BoundingBox,
    BoundingInfo : typeof BoundingInfo,
    VertexData : typeof VertexData,
    Effect : typeof Effect,
    Color3 :typeof  Color3,
}


export const DVEBabylon = {
 system: <DVEBabylonSystem> {},
 $INIT(system : DVEBabylonSystem) {
    this.system = system
 }
};
