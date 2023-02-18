//types
import type { RecursivePartial } from "Meta/Util.types.js";
import type { Scene, Vector4 } from "babylonjs";

//built in
import { DVEMesh } from "./Meshes/DVEMesh.js";
//objects
import { FOManager } from "./FloatingOrigin/FoManager.js";
import { EngineSettings } from "../../Data/Settings/EngineSettings.js";

//materials
import { SkyBoxMaterial } from "./Materials/SkyBox/SkyBoxMaterial.js";
import {
 RenderFogOptions,
 DVERenderEffectsOptions,
} from "Meta/Render/Render/Render.options.types.js";
import { MeshRegister } from "../Scene/MeshRegister.js";
import { MeshManager } from "../Scene/MeshManager.js";
import { MeshCuller } from "../Scene/MeshCuller.js";
import { DVEShaders } from "./Shaders/DVEShaders.js";
import { DVEMaterial } from "./Materials/DVEMaterial.js";
import { DVEBabylon } from "../Babylon/DVEBabylon.js";

export const RenderManager = {
 fogOptions: <RenderFogOptions>{},
 meshRegister: MeshRegister,
 meshManager: MeshManager,
 meshCuller: MeshCuller,

 fogData: <Vector4>{},

 effectOptions: <DVERenderEffectsOptions>{
  floraEffects: false,
  liquidEffects: false,
 },

 fo: FOManager,

 shaders: DVEShaders,

 solidMaterial: <DVEMaterial>{},
 floraMaterial: <DVEMaterial>{},
 liquidMaterial: <DVEMaterial>{},

 solidMesh: <DVEMesh>{},
 floraMesh: <DVEMesh>{},
 liquidMesh: <DVEMesh>{},

 skyBoxMaterial: SkyBoxMaterial,

 scene: <Scene | null>null,

 updateFogOptions(options: RecursivePartial<RenderFogOptions>) {
  for (const key of Object.keys(options)) {
   //@ts-ignore
   const data = options[key];
   if (typeof data == "object") {
    for (const key2 of Object.keys(data)) {
     const data2 = data[key2];
     (this as any).fogOptions[key][key2] = data2;
    }
   } else {
    (this as any).fogOptions[key] = data;
   }
  }

  if (options.color && this.scene) {
   //@ts-ignore
   this.scene.fogColor = options.color;
  }

  if (this.fogOptions.mode == "volumetric") {
   this.fogData.x = 1;
  }
  if (this.fogOptions.mode == "animated-volumetric") {
   this.fogData.x = 2;
  }
  this.fogData.y = this.fogOptions.density;
  this.fogData.z = this.fogOptions.volumetricOptions.heightFactor;
  this.fogData = this.fogData;
  this._setFogData();
 },

 _setFogData() {
  const fogData = this.fogData;
  this.solidMaterial.updateFogOptions(fogData);
  this.liquidMaterial.updateFogOptions(fogData);
  this.floraMaterial.updateFogOptions(fogData);

  this.skyBoxMaterial.updateFogOptions(fogData);
 },

 $INIT(scene: Scene) {
  this.solidMaterial = new DVEMaterial("#dve_solid", {
   alphaBlending: false,
   alphaTesting: true,
  });
  this.solidMesh = new DVEMesh("#dve_solid", this.solidMaterial);
  this.floraMaterial = new DVEMaterial("#dve_flora", {
   alphaBlending: false,
   alphaTesting: true,
  });
  this.floraMesh = new DVEMesh("#dve_flora", this.floraMaterial);
  this.liquidMaterial = new DVEMaterial("#dve_liquid", {
   alphaBlending: true,
   alphaTesting: false,
  });
  this.liquidMesh = new DVEMesh("#dve_liquid", this.liquidMaterial);

  this.fogData = new DVEBabylon.system.Vector4();
  (this.fogOptions = {
   mode: "volumetric",
   density: 0.0005,
   color: new DVEBabylon.system.Color3(1, 1, 1),
   volumetricOptions: {
    heightFactor: 0.25,
   },
  }),
   this.updateFogOptions(this.fogOptions);
  this._setFogData();
  this.scene = scene;

  this.meshManager.$INIT(scene);
  this.meshCuller.$INIT(scene);
  this.syncSettings();
 },

 updateShaderEffectOptions(options: RecursivePartial<DVERenderEffectsOptions>) {
  if (options.floraEffects !== undefined) {
   this.effectOptions.floraEffects = options.floraEffects;
  }
  if (options.liquidEffects !== undefined) {
   this.effectOptions.liquidEffects = options.liquidEffects;
  }

  this.solidMaterial.updateMaterialSettings(EngineSettings.settings);
  this.floraMaterial.updateMaterialSettings(EngineSettings.settings);

  this.liquidMaterial.updateMaterialSettings(EngineSettings.settings);
 },

 syncSettings() {
  this.solidMesh.syncSettings(EngineSettings.getSettings());
  this.floraMesh.syncSettings(EngineSettings.getSettings());
  this.liquidMesh.syncSettings(EngineSettings.getSettings());
  //this.magmaMesh.syncSettings(settings);
 },

 getScene() {
  return this.scene;
 },

 getDefaultCamera(scene: Scene) {
  const camera = new DVEBabylon.system.UniversalCamera(
   "",
   DVEBabylon.system.Vector3.Zero(),
   scene
  );
  camera.touchAngularSensibility = 10000;
  camera.speed = 1;
  camera.keysUp.push(87); // W
  camera.keysDown.push(83); // D
  camera.keysLeft.push(65); // A
  camera.keysRight.push(68); // S
  camera.keysUpward.push(69); // E
  camera.keysDownward.push(81); // Q
  camera.minZ = 0.01;
  camera.maxZ = 1000;
  camera.fov = 1.2;
  camera.attachControl(scene.getEngine().getRenderingCanvas(), true);
  scene.activeCamera = camera;
  scene.collisionsEnabled = false;
  return camera;
 },

 createSkyBoxMaterial(scene?: Scene) {
  if (!this.scene && !scene) {
   throw new Error(`Must set a scene first.`);
  }
  if (!this.scene && scene) {
   this.skyBoxMaterial.createMaterial(scene);
  }
  if (this.scene && !scene) {
   this.skyBoxMaterial.createMaterial(this.scene);
  }
  return this.skyBoxMaterial.getMaterial();
 },

 setSunLevel(level: number) {
  this.solidMaterial.setSunLightLevel(level);
  this.liquidMaterial.setSunLightLevel(level);
  this.floraMaterial.setSunLightLevel(level);
 },
 setBaseLevel(level: number) {
  this.solidMaterial.setBaseLevel(level);
  this.liquidMaterial.setBaseLevel(level);
  this.floraMaterial.setBaseLevel(level);
 },
};
