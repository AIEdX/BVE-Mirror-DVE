import type { VoxelProcessData } from "Meta/Voxels/Voxel.types";
import { DivineVoxelEngineBuilder } from "index.js";
import type { VoxelBuilderThreadObject, VoxelData } from "../../Meta/index";
import { CalculateVoxelLight, VoxelLightMixCalc } from "./Functions/CalculateVoxelLight.js";
import type { VoxelByte } from "Global/Util/VoxelByte.js";
import type { LightByte } from "Global/Util/LightByte.js";
export declare class VoxelHelper {
    DVEB: DivineVoxelEngineBuilder;
    voxellightMixCalc: typeof VoxelLightMixCalc;
    calculdateVoxelLight: typeof CalculateVoxelLight;
    voxelByte: typeof VoxelByte;
    lightByte: typeof LightByte;
    substanceRules: Record<string, boolean>;
    lightValueFunctions: {
        r: (value: number) => number;
        g: (value: number) => number;
        b: (value: number) => number;
        s: (value: number) => number;
    };
    constructor(DVEB: DivineVoxelEngineBuilder);
    getTrueShapeId(id: string): number;
    getTrueFluidShapeId(id: string): number;
    voxelFaceCheck(voxel: VoxelBuilderThreadObject, voxelData: number, x: number, y: number, z: number): boolean;
    /**# Get Light
     * ---
     * Returns the raw light value for a voxel.
     * @param x
     * @param y
     * @param z
     * @returns
     */
    getLight(x: number, y: number, z: number): number;
    getLightValue(x: number, y: number, z: number, type: "r" | "g" | "b" | "s"): number;
    processVoxelLight(data: VoxelProcessData, voxel: VoxelData): void;
    calculateVoxelLight(data: VoxelProcessData, voxel: VoxelData): void;
    calculateVoxelAO(data: VoxelProcessData, voxel: VoxelData): void;
}
