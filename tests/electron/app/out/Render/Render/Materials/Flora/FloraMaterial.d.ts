import type { EngineSettingsData } from "Meta/Data/Settings/EngineSettings.types";
import type { MaterialCreateData } from "Meta/Render/Materials/Material.types.js";
export declare const FloraMaterial: {
    material: BABYLON.ShaderMaterial | null;
    doEffects: boolean;
    time: number;
    getMaterial(): BABYLON.ShaderMaterial | null;
    updateFogOptions(data: BABYLON.Vector4): void;
    updateEffects(doEffects: boolean): void;
    setSunLightLevel(level: number): void;
    setBaseLevel(level: number): void;
    updateMaterialSettings(settings: EngineSettingsData): void;
    createMaterial(data: MaterialCreateData): BABYLON.ShaderMaterial;
    runEffects(): void;
};
