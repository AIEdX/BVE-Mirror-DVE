import { DirectionNames } from "Meta/Util.types";
export declare const FaceByte: {
    _setFaceTextureState: Record<DirectionNames, (state: number, faceBit: number) => number>;
    _getFaceTextureState: Record<DirectionNames, (faceBit: number) => number>;
    _setFaceRotateState: Record<DirectionNames, (state: number, faceBit: number) => number>;
    _getFaceRotateState: Record<DirectionNames, (faceBit: number) => number>;
    markExposedFace: Record<DirectionNames, (faceBit: number) => number>;
    checkExposedFace: Record<DirectionNames, (faceBit: number) => boolean>;
    markFaceAsExposed(direction: DirectionNames, rawData: number): number;
    isFaceExposed(direction: DirectionNames, rawData: number): boolean;
    setFaceRotateState(direction: DirectionNames, state: number, rawData: number): number;
    getFaceRotateState(direction: DirectionNames, rawData: number): number;
    setFaceTextureState(direction: DirectionNames, state: number, rawData: number): number;
    getFaceTextureState(direction: DirectionNames, rawData: number): number;
};
