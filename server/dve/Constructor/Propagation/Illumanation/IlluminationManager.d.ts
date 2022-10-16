import type { Queue } from "Global/Util/Queue.js";
import { runRGBFloodFillAt, runRGBFloodRemove, runRGBFloodRemoveAt, runRGBFloodFill } from "./Functions/RGBFloodLight.js";
import { PopulateWorldColumnWithSunLight, RunSunLightFloodDown, RunSunLightFloodOut, runSunLightRemove, runSunLightRemoveAt, runSunLightUpdate, runSunLightUpdateAt, RunSunLightUpdateAtMaxY, SunLightAboveCheck } from "./Functions/SunLight.js";
export declare const IlluminationManager: {
    lightByte: {
        SRS: number;
        _lightValues: number[];
        getS(value: number): number;
        getR(value: number): number;
        getG(value: number): number;
        getB(value: number): number;
        setS(value: number, sl: number): number;
        setR(value: number, sl: number): number;
        setG(value: number, sl: number): number;
        setB(value: number, sl: number): number;
        removeS(sl: number): number;
        hasRGBLight(sl: number): boolean;
        getRGB(sl: number): number;
        setRGB(value: number, sl: number): number;
        decodeLightFromVoxelData(voxelData: number): number;
        encodeLightIntoVoxelData(voxelData: number, encodedLight: number): number;
        setLightValues(values: number[]): number;
        getLightValues(value: number): number[];
        isLessThanForRGBRemove(n1: number, n2: number): boolean;
        isLessThanForRGBAdd(n1: number, n2: number): boolean;
        isGreaterOrEqualThanForRGBRemove(n1: number, n2: number): boolean;
        getMinusOneForRGB(sl: number, nl: number): number;
        removeRGBLight(sl: number): number;
        getFullSunLight(sl: number): number;
        isLessThanForSunAdd(n1: number, n2: number): boolean;
        isLessThanForSunAddDown(n1: number, n2: number): boolean;
        isLessThanForSunAddUp(n1: number, n2: number): boolean;
        getSunLightForUnderVoxel(sl: number, nl: number): number;
        getMinusOneForSun(sl: number, nl: number): number;
        isLessThanForSunRemove(n1: number, sl: number): boolean;
        isGreaterOrEqualThanForSunRemove(n1: number, sl: number): boolean;
        sunLightCompareForDownSunRemove(n1: number, sl: number): boolean;
        removeSunLight(sl: number): number;
        minusOneForAll(sl: number): number;
    };
    air: number[];
    dimension: number;
    runSunLightUpdateAt: typeof runSunLightUpdateAt;
    runSunLightUpdate: typeof runSunLightUpdate;
    runSunLightRemove: typeof runSunLightRemove;
    runSunLightRemoveAt: typeof runSunLightRemoveAt;
    populateWorldColumnWithSunLight: typeof PopulateWorldColumnWithSunLight;
    runSunLightUpdateAtMaxY: typeof RunSunLightUpdateAtMaxY;
    runSunLightFloodDown: typeof RunSunLightFloodDown;
    runSunLightFloodOut: typeof RunSunLightFloodOut;
    sunLightAboveCheck: typeof SunLightAboveCheck;
    _sunLightUpdateQue: Queue<number[]>;
    _sunLightFloodDownQue: Queue<number[]>;
    _sunLightFloodOutQue: Record<string, Queue<number[]>>;
    _sunLightRemoveQue: number[][];
    runRGBFloodFillAt: typeof runRGBFloodFillAt;
    runRGBFloodFill: typeof runRGBFloodFill;
    runRGBFloodRemoveAt: typeof runRGBFloodRemoveAt;
    runRGBFloodRemove: typeof runRGBFloodRemove;
    _RGBlightUpdateQue: number[][];
    _RGBlightRemovalQue: number[][];
    _visitMap: Record<string, boolean>;
    checkForSunLight(x: number, y: number, z: number): void;
    checkForRGBLight(x: number, y: number, z: number): void;
};
