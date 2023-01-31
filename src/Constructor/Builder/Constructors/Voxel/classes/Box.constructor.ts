import { ConstructorHooks } from "../../../../Hooks/ConstructorHooks.js";
import type { ConstructorTextureData } from "Meta/Constructor/Constructor.types.js";
import type { VoxelConstructor } from "Meta/Constructor/Voxel.types";

import { VoxelTemplater } from "../../../Tools/VoxelTemplater.js";
import type { DirectionNames } from "Meta/Util.types.js";
export class BoxVoxelConstructor implements VoxelConstructor {
 textures: number[] = [];
 constructor(
  public id: string,
  textures:
   | ConstructorTextureData
   | Record<DirectionNames, ConstructorTextureData>
 ) {
  ConstructorHooks.texturesRegistered.addToRun((textureManager) => {
   if (Array.isArray(textures)) {
    let i = 6;
    while (i--) {
     this.textures.push(textureManager.getTextureUV(textures));
    }
    return;
   }
   this.textures.push(textureManager.getTextureUV(textures.top));
   this.textures.push(textureManager.getTextureUV(textures.bottom));
   this.textures.push(textureManager.getTextureUV(textures.east));
   this.textures.push(textureManager.getTextureUV(textures.west));
   this.textures.push(textureManager.getTextureUV(textures.south));
   this.textures.push(textureManager.getTextureUV(textures.north));
  });
 }
 process(templater: typeof VoxelTemplater) {
  if (templater.isFaceExpposed("top")) {
   templater.addUV(this.textures[0]).addOverlayUVs([0]);
  }
  if (templater.isFaceExpposed("bottom")) {
   templater.addUV(this.textures[1]).addOverlayUVs([0]);
  }
  if (templater.isFaceExpposed("east")) {
   templater.addUV(this.textures[2]).addOverlayUVs([0]);
  }
  if (templater.isFaceExpposed("west")) {
   templater.addUV(this.textures[3]).addOverlayUVs([0]);
  }
  if (templater.isFaceExpposed("south")) {
   templater.addUV(this.textures[4]).addOverlayUVs([0]);
  }
  if (templater.isFaceExpposed("north")) {
   templater.addUV(this.textures[5]).addOverlayUVs([0]);
  }
  templater.processVoxelLight();
 }
}

export type PillarBoxVoxelConstructorData = {
 top: ConstructorTextureData;
 bottom: ConstructorTextureData;
 sideMiddle: ConstructorTextureData;
 sideBottom: ConstructorTextureData;
 sideTop: ConstructorTextureData;
 sideFloat: ConstructorTextureData;
};
export class PillarBoxVoxelConstructor {
 textures: [
  top: number,
  bottom: number,
  sideMiddle: number,
  sideBottom: number,
  sideTop: number,
  sideFloat: number
 ];
 constructor(public id: string, textures: PillarBoxVoxelConstructorData) {
  ConstructorHooks.texturesRegistered.addToRun((textureManager) => {
   this.textures = [
    textureManager.getTextureUV(textures.top),
    textureManager.getTextureUV(textures.bottom),
    textureManager.getTextureUV(textures.sideMiddle),
    textureManager.getTextureUV(textures.sideBottom),
    textureManager.getTextureUV(textures.sideTop),
    textureManager.getTextureUV(textures.sideFloat),
   ];
  });
 }
 process(templater: typeof VoxelTemplater) {
  const topCheck = templater.currentVoxel.isSameVoxel(
   templater.currentVoxel.x,
   templater.currentVoxel.y + 1,
   templater.currentVoxel.z
  );
  const bottomCheck = templater.currentVoxel.isSameVoxel(
   templater.currentVoxel.x,
   templater.currentVoxel.y,
   templater.currentVoxel.z
  );

  let side = -1;
  determineText: if (side) {
   if (topCheck && bottomCheck) {
    side = this.textures[2];
    break determineText;
   }
   if (topCheck && !bottomCheck) {
    side = this.textures[3];
    break determineText;
   }
   if (!topCheck && bottomCheck) {
    side = this.textures[4];
    break determineText;
   }
   if (!topCheck && !bottomCheck) {
    side = this.textures[5];
    break determineText;
   }
   side = 0;
  }

  if (templater.isFaceExpposed("top")) {
   templater.addUV(this.textures[0]).addOverlayUVs([0]);
  }
  if (templater.isFaceExpposed("bottom")) {
   templater.addUV(this.textures[1]).addOverlayUVs([0]);
  }
  if (templater.isFaceExpposed("east")) {
   templater.addUV(side).addOverlayUVs([0]);
  }
  if (templater.isFaceExpposed("west")) {
   templater.addUV(side).addOverlayUVs([0]);
  }
  if (templater.isFaceExpposed("south")) {
   templater.addUV(side).addOverlayUVs([0]);
  }
  if (templater.isFaceExpposed("north")) {
   templater.addUV(side).addOverlayUVs([0]);
  }
  templater.processVoxelLight();
 }
}
