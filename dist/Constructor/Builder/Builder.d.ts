import type { EngineSettingsData } from "Meta/Data/Settings/EngineSettings.types.js";
import { LocationData } from "voxelspaces";
export declare const Builder: {
    textureManager: {
        textureDataHasBeenSet: boolean;
        data: import("../../index.js").TextureTypeUVMap;
        getTextureUV(data: import("../../index.js").ConstructorTextureData, overlay?: boolean): number;
        setUVTextureMap(data: import("../../index.js").TextureTypeUVMap): void;
        releaseTextureData(): void;
        isReady(): boolean;
    };
    shapeManager: {
        shapes: Map<string, import("../../index.js").VoxelShape>;
        shapeCount: number;
        registerShape(shapeObject: import("../../index.js").VoxelShape): void;
        getShape(shapeId: string): import("../../index.js").VoxelShape;
    };
    chunkMesher: {
        voxelBuildOrder: string[];
        buildChunkMesh(location: LocationData, template: Record<string, import("../../Meta/Constructor/VoxelTemplate.types.js").VoxelTemplate>, LOD?: number): void;
    };
    processor: {
        LOD: number;
        mDataTool: import("../../index.js").ConstructorDataTool;
        nDataTool: import("../../index.js").ConstructorDataTool;
        faceByte: {
            _rotationMap: Record<import("../../Meta/Constructor/Geometry/Geometry.types.js").TextureRotations, number>;
            _rotationReverseMap: Record<number, import("../../Meta/Constructor/Geometry/Geometry.types.js").TextureRotations>;
            _setFaceTextureState: Record<import("../../index.js").DirectionNames, (state: number, faceBit: number) => number>;
            _getFaceTextureState: Record<import("../../index.js").DirectionNames, (faceBit: number) => number>;
            _setFaceRotateState: Record<import("../../index.js").DirectionNames, (state: number, faceBit: number) => number>;
            _getFaceRotateState: Record<import("../../index.js").DirectionNames, (faceBit: number) => number>;
            _markExposedFace: Record<import("../../index.js").DirectionNames, (faceBit: number) => number>;
            _checkExposedFace: Record<import("../../index.js").DirectionNames, (faceBit: number) => boolean>;
            markFaceAsExposed(direction: import("../../index.js").DirectionNames, rawData: number): number;
            isFaceExposed(direction: import("../../index.js").DirectionNames, rawData: number): boolean;
            setFaceRotateState(direction: import("../../index.js").DirectionNames, state: number, rawData: number): number;
            getFaceRotateState(direction: import("../../index.js").DirectionNames, rawData: number): number;
            setFaceTextureState(direction: import("../../index.js").DirectionNames, rotation: import("../../Meta/Constructor/Geometry/Geometry.types.js").TextureRotations, rawData: number): number;
            getFaceTextureState(direction: import("../../index.js").DirectionNames, rawData: number): import("../../Meta/Constructor/Geometry/Geometry.types.js").TextureRotations;
        };
        lightData: {
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
            hasSunLight(sl: number): boolean;
            mixLight(l1: number, l2: number): number;
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
        calculatFlow: typeof import("./Processor/Functions/CalculateFlow.js").CalculateFlow;
        voxellightMixCalc: typeof import("./Processor/Functions/CalculateVoxelLight.js").VoxelLightMixCalc;
        doVoxelLight: typeof import("./Processor/Functions/CalculateVoxelLight.js").CalculateVoxelLight;
        nLocation: LocationData;
        exposedFaces: number[];
        faceStates: number[];
        textureRotation: import("../../Meta/Constructor/Geometry/Geometry.types.js").TextureRotations[];
        settings: {
            doAO: boolean;
            doSun: boolean;
            doRGB: boolean;
            ignoreSun: boolean;
            entity: boolean;
            composedEntity: number;
        };
        faceDataOverride: import("../../Meta/Constructor/OverRide.types.js").FaceDataOverride;
        template: Record<string, import("../../Meta/Constructor/VoxelTemplate.types.js").VoxelTemplate>;
        getVoxelTemplate(): import("../../Meta/Constructor/VoxelTemplate.types.js").VoxelTemplate;
        $INIT(): void;
        cullCheck(face: import("../../index.js").DirectionNames, voxelObject: import("../../index.js").VoxelConstructor, voxelShape: import("../../index.js").VoxelShape, voxelSubstance: string, faceBit: number): number;
        faceStateCheck(face: import("../../index.js").DirectionNames, faceBit: number): number;
        _process(doSecondCheck?: boolean): void;
        makeAllChunkTemplates(location: LocationData, LOD?: number): Record<string, import("../../Meta/Constructor/VoxelTemplate.types.js").VoxelTemplate>;
        syncSettings(settings: EngineSettingsData): void;
        flush(): void;
    };
    substanceRules: {
        rules: Map<string, Map<string, boolean>>;
        parents: Map<string, string>;
        registerSubstance(id: string, substanceCulls?: string[] | undefined, parentId?: string | undefined): void;
        $INIT(): void;
        exposedCheck(subject: string, neightborVoxel: string): boolean;
        getSubstanceParent(id: string): string;
    };
    overrides: {
        overrides: Record<import("../../Meta/Constructor/OverRide.types.js").OverrideTypes, Map<string, Map<string, (data: import("../../Meta/Constructor/OverRide.types.js").FaceDataOverride) => boolean>>>;
        registerOverride(type: import("../../Meta/Constructor/OverRide.types.js").OverrideTypes, subjectId: string, neighborShapeId: string, run: (data: import("../../Meta/Constructor/OverRide.types.js").FaceDataOverride) => boolean): void;
        hasOverride(type: import("../../Meta/Constructor/OverRide.types.js").OverrideTypes, shapeId: string, neighborShapeId: string): boolean;
        runOverride(type: import("../../Meta/Constructor/OverRide.types.js").OverrideTypes, shapeId: string, neighborShapeId: string, data: import("../../Meta/Constructor/OverRide.types.js").FaceDataOverride): boolean;
    };
    dimension: number;
    $INIT(): Promise<void>;
    syncSettings(settings: EngineSettingsData): void;
    buildChunk(location: LocationData, LOD?: number): true | undefined;
    constructEntity(): void;
};
