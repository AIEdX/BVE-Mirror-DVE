import { NodeManager } from "../../Render/Nodes/NodeManager.js";
import { TextureCreator } from "../Nodes/Textures/TextureCreator.js";
import { TextureManager } from "../Nodes/Textures/TextureManager.js";
import { RenderManager } from "../../Render/Render/RenderManager.js";
export async function $INITFunction(DVER, scene) {
    DVER.render.$INIT(scene);
    await TextureCreator.setUpImageCreation();
    await TextureManager.$INIT();
    DVER.constructorCommManager.syncTextureData(TextureManager.generateTextureUVMap());
    NodeManager.$INIT();
    NodeManager.materials.materials._map.forEach((m) => {
        m.getMaterial().setFloats("lightGradient", RenderManager.lightGradient);
    });
    scene.registerBeforeRender(() => {
        NodeManager.materials.materials._map.forEach((_) => {
            _.updateUniforms();
        });
    });
    setInterval(() => {
        NodeManager.materials.materials._map.forEach((_) => {
            _.runEffects();
        });
    }, 20);
    TextureManager.$START_ANIMATIONS();
}
