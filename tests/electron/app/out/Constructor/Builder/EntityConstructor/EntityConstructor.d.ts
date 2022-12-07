export declare const EntityConstructor: {
    voxelData: Uint32Array[];
    _3dArray: {
        bounds: {
            x: number;
            y: number;
            z: number;
        };
        _position: {
            x: number;
            y: number;
            z: number;
        };
        setBounds(x: number, y: number, z: number): void;
        getValue(x: number, y: number, z: number, array: number[] | Uint32Array): number;
        getValueUseObj(position: import("../../../Meta/Util.types.js").Vector3, array: number[] | Uint32Array): number;
        getValueUseObjSafe(position: import("../../../Meta/Util.types.js").Vector3, array: number[] | Uint32Array): number;
        setValue(x: number, y: number, z: number, array: number[] | Uint32Array, value: number): void;
        setValueUseObj(position: import("../../../Meta/Util.types.js").Vector3, array: number[] | Uint32Array, value: number): void;
        setValueUseObjSafe(position: import("../../../Meta/Util.types.js").Vector3, array: number[] | Uint32Array, value: number): void;
        deleteValue(x: number, y: number, z: number, array: number[] | Uint32Array): void;
        deleteUseObj(position: import("../../../Meta/Util.types.js").Vector3, array: number[] | Uint32Array): void;
        getIndex(x: number, y: number, z: number): number;
        getXYZ(index: number): import("../../../Meta/Util.types.js").Vector3;
    };
    voxelReader: {
        getLevel(stateData: number): number;
        setLevel(stateData: number, level: number): number;
        getLevelState(stateData: number): number;
        setLevelState(stateData: number, levelState: number): number;
        getShapeState(voxelData: number): number;
        setShapeState(voxelData: number, shapeState: number): number;
    };
    lightByte: {
        SRS: number;
        _lightValues: [s: number, r: number, g: number, b: number];
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
        getLightValues(value: number): [s: number, r: number, g: number, b: number];
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
    pos: {
        x: number;
        y: number;
        z: number;
    };
    totalComposed: number;
    width: number;
    depth: number;
    height: number;
    setEntityData(x: number, y: number, z: number, width: number, height: number, depth: number, composed: number, voxelData: Uint32Array[]): void;
    getVoxel(x: number, y: number, z: number, composed?: number): [
        string,
        number
    ] | false;
    getLevel(x: number, y: number, z: number, composed?: number): number;
    getLevelState(x: number, y: number, z: number, composed?: number): number;
    getShapeState(x: number, y: number, z: number, composed?: number): number;
    getLight(x: number, y: number, z: number, composed?: number): number;
    clearEntityData(): void;
};
