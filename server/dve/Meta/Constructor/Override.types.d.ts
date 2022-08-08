import { VoxelSubstanceType } from "Meta/index";
import { DirectionNames } from "Meta/Util.types";
import { VoxelShapeInterface } from "Meta/Constructor/VoxelShape.types";
export declare type CullFaceOverride = {
    face: DirectionNames;
    substanceResult: boolean;
    shapeState: number;
    voxelSubstance: VoxelSubstanceType;
    voxelId: string;
    neighborVoxelSubstance: VoxelSubstanceType;
    neighborVoxelId: string;
    neighborVoxelShape: VoxelShapeInterface;
    neighborVoxelShapeState: number;
    x: number;
    y: number;
    z: number;
};
export declare type AOAddOVerRide = {
    face: DirectionNames;
    substanceResult: boolean;
    shapeState: number;
    voxelSubstance: VoxelSubstanceType;
    voxelId: string;
    neighborVoxelSubstance: VoxelSubstanceType;
    neighborVoxelId: string;
    neighborVoxelShape: VoxelShapeInterface;
    neighborVoxelShapeState: number;
    x: number;
    y: number;
    z: number;
    nx: number;
    ny: number;
    nz: number;
};
