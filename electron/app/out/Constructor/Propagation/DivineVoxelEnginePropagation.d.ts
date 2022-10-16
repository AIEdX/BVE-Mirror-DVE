import type { VoxelSubstanceType } from "Meta/index.js";
export declare const DVEP: {
    illumination: {
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
        runSunLightUpdateAt: typeof import("./Illumanation/Functions/SunLight.js").runSunLightUpdateAt;
        runSunLightUpdate: typeof import("./Illumanation/Functions/SunLight.js").runSunLightUpdate;
        runSunLightRemove: typeof import("./Illumanation/Functions/SunLight.js").runSunLightRemove;
        runSunLightRemoveAt: typeof import("./Illumanation/Functions/SunLight.js").runSunLightRemoveAt;
        populateWorldColumnWithSunLight: typeof import("./Illumanation/Functions/SunLight.js").PopulateWorldColumnWithSunLight;
        runSunLightUpdateAtMaxY: typeof import("./Illumanation/Functions/SunLight.js").RunSunLightUpdateAtMaxY;
        runSunLightFloodDown: typeof import("./Illumanation/Functions/SunLight.js").RunSunLightFloodDown;
        runSunLightFloodOut: typeof import("./Illumanation/Functions/SunLight.js").RunSunLightFloodOut;
        sunLightAboveCheck: typeof import("./Illumanation/Functions/SunLight.js").SunLightAboveCheck;
        _sunLightUpdateQue: import("../../Global/Util/Queue.js").Queue<number[]>;
        _sunLightFloodDownQue: import("../../Global/Util/Queue.js").Queue<number[]>;
        _sunLightFloodOutQue: Record<string, import("../../Global/Util/Queue.js").Queue<number[]>>;
        _sunLightRemoveQue: number[][];
        runRGBFloodFillAt: typeof import("./Illumanation/Functions/RGBFloodLight.js").runRGBFloodFillAt;
        runRGBFloodFill: typeof import("./Illumanation/Functions/RGBFloodLight.js").runRGBFloodFill;
        runRGBFloodRemoveAt: typeof import("./Illumanation/Functions/RGBFloodLight.js").runRGBFloodRemoveAt;
        runRGBFloodRemove: typeof import("./Illumanation/Functions/RGBFloodLight.js").runRGBFloodRemove;
        _RGBlightUpdateQue: number[][];
        _RGBlightRemovalQue: number[][];
        _visitMap: Record<string, boolean>;
        checkForSunLight(x: number, y: number, z: number): void;
        checkForRGBLight(x: number, y: number, z: number): void;
    };
    flow: {
        currentVoxel: string;
        worldMatrx: {
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
                getValue(x: number, y: number, z: number, array: Uint32Array): number;
                getValueUseObj(position: import("Meta/index.js").Position3Matrix, array: Uint32Array): number;
                getValueUseObjSafe(position: import("Meta/index.js").Position3Matrix, array: Uint32Array): number;
                setValue(x: number, y: number, z: number, array: Uint32Array, value: number): void;
                setValueUseObj(position: import("Meta/index.js").Position3Matrix, array: Uint32Array, value: number): void;
                setValueUseObjSafe(position: import("Meta/index.js").Position3Matrix, array: Uint32Array, value: number): void;
                deleteValue(x: number, y: number, z: number, array: Uint32Array): void;
                deleteUseObj(position: import("Meta/index.js").Position3Matrix, array: Uint32Array): void;
                getIndex(x: number, y: number, z: number): number;
                getXYZ(index: number): import("Meta/index.js").Position3Matrix;
            };
            worldBounds: {
                __maxChunkYSize: number;
                bounds: {
                    MinZ: number;
                    MaxZ: number;
                    MinX: number;
                    MaxX: number;
                    MinY: number;
                    MaxY: number;
                };
                chunkXPow2: number;
                chunkYPow2: number;
                chunkZPow2: number;
                chunkXSize: number;
                chunkYSize: number;
                chunkZSize: number;
                chunkTotalVoxels: number;
                chunkArea: number;
                regionXPow2: number;
                regionYPow2: number;
                regionZPow2: number;
                regionXSize: number;
                regionYSize: number;
                regionZSize: number;
                __regionPosition: {
                    x: number;
                    y: number;
                    z: number;
                };
                __worldColumnPosition: {
                    x: number;
                    z: number;
                    y: number;
                };
                __chunkPosition: {
                    x: number;
                    y: number;
                    z: number;
                };
                __voxelPosition: {
                    x: number;
                    y: number;
                    z: number;
                };
                syncBoundsWithArrays(): void;
                setWorldBounds(minX: number, maxX: number, minZ: number, maxZ: number, minY: number, maxY: number): void;
                isPositonOutsideOfBounds(x: number, y: number, z: number): boolean;
                isPositonInBounds(x: number, y: number, z: number): boolean;
                setChunkBounds(pow2X: number, pow2Y: number, pow2Z: number): void;
                setRegionBounds(pow2X: number, pow2Y: number, pow2Z: number): void;
                getRegionPosition(x: number, y: number, z: number): {
                    x: number;
                    y: number;
                    z: number;
                };
                getChunkPosition(x: number, y: number, z: number): {
                    x: number;
                    y: number;
                    z: number;
                };
                getChunkKey(chunkPOS: import("Meta/index.js").Position3Matrix): string;
                getChunkKeyFromPosition(x: number, y: number, z: number): string;
                getRegionKey(regionPOS: import("Meta/index.js").Position3Matrix): string;
                getRegionKeyFromPosition(x: number, y: number, z: number): string;
                getVoxelPositionFromChunkPosition(x: number, y: number, z: number, chunkPOS: import("Meta/index.js").Position3Matrix): {
                    x: number;
                    y: number;
                    z: number;
                };
                getRichPositionKey(x: number, y: number, z: number): string;
                getVoxelPosition(x: number, y: number, z: number): {
                    x: number;
                    y: number;
                    z: number;
                };
                getWorldColumnKey(x: number, z: number, y?: number): string;
                getWorldColumnPosition(x: number, z: number, y?: number): {
                    x: number;
                    z: number;
                    y: number;
                };
            };
            voxelByte: {
                setId(id: number, value: number): number;
                getId(value: number): number;
                decodeLightFromVoxelData(voxelData: number): number;
                encodeLightIntoVoxelData(voxelData: number, encodedLight: number): number;
                decodeLevelFromVoxelData(stateData: number): number;
                encodeLevelIntoVoxelData(stateData: number, level: number): number;
                decodeLevelStateFromVoxelData(stateData: number): number;
                encodeLevelStateIntoVoxelData(stateData: number, levelState: number): number;
                getShapeState(voxelData: number): number;
                setShapeState(voxelData: number, shapeState: number): number;
            };
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
            heightByte: {
                _getHeightMapData: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (byteData: number) => number>;
                _setHeightMapData: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (height: number, byteData: number) => number>;
                _markSubstanceAsNotExposed: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (data: number) => number>;
                _markSubstanceAsExposed: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (data: number) => number>;
                _isSubstanceExposed: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (data: number) => boolean>;
                getStartingHeightMapValue(): number;
                initalizeChunk(chunkData: DataView): void;
                updateChunkMinMax(voxelPOS: import("Meta/index.js").Position3Matrix, chunkData: DataView): void;
                getChunkMin(chunkData: DataView): number;
                getChunkMax(chunkData: DataView): number;
                calculateHeightRemoveDataForSubstance(height: number, substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, heightMap: DataView): boolean | undefined;
                calculateHeightAddDataForSubstance(height: number, substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
                getLowestExposedVoxel(x: number, z: number, chunk: DataView): number;
                getHighestExposedVoxel(x: number, z: number, chunk: DataView): number;
                isSubstanceExposed(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): boolean;
                markSubstanceAsExposed(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
                markSubstanceAsNotExposed(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
                setMinYForSubstance(height: number, substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
                getMinYForSubstance(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): number;
                setMaxYForSubstance(height: number, substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
                getMaxYForSubstance(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): number;
            };
            chunkReader: {
                chunkByteSize: number;
                indexSizes: {
                    header: number;
                    states: number;
                    position: number;
                    minMax: number;
                    heightMap: number;
                    voxelData: number;
                    voxelStateData: number;
                };
                indexes: {
                    header: number;
                    states: number;
                    position: number;
                    minMax: number;
                    heightMap: number;
                    voxelData: number;
                    voxelStateData: number;
                };
                byteLengths: {
                    heightMapData: number;
                    voxelData: number;
                    voxelStateData: number;
                };
                syncSettings(): void;
                _getVoxelDataIndex(x: number, y: number, z: number): number;
                _getVoxelStateDataIndex(x: number, y: number, z: number): number;
                _chunkPositon: {
                    x: number;
                    y: number;
                    z: number;
                };
                getChunkPosition(chunk: DataView): {
                    x: number;
                    y: number;
                    z: number;
                };
                setChunkPosition(chunk: DataView, position: import("Meta/index.js").Position3Matrix): void;
                getVoxelChunkDataIndex(x: number, y: number, z: number, secondary?: boolean): number;
                hmBounds: {
                    x: number;
                    y: number;
                    z: number;
                };
                _getHeightMapIndex(x: number, y: number, z: number): number;
                getHeightMapIndex(x: number, y: number, z: number): number;
                getVoxelData(chunkData: DataView, x: number, y: number, z: number, secondary?: boolean): number;
                setVoxelData(chunkData: DataView, x: number, y: number, z: number, data: number, secondary?: boolean): void;
                getVoxelDataUseObj(chunkData: DataView, position: import("Meta/index.js").Position3Matrix, secondary?: boolean): number;
                setVoxelDataUseObj(chunkData: DataView, position: import("Meta/index.js").Position3Matrix, data: number, secondary?: boolean): void;
                getHeightMapData(chunkData: DataView, x: number, y: number, z: number): number;
                setHeightMapData(chunkData: DataView, x: number, y: number, z: number, data: number): void;
                getChunkMinData(chunkData: DataView): number;
                setChunkMinData(chunkData: DataView, data: number): void;
                getChunkMaxData(chunkData: DataView): number;
                setChunkMaxData(chunkData: DataView, data: number): void;
            };
            voxelMatrix: {
                byteLength: {
                    substance: number;
                    shapeId: number;
                    hardness: number;
                    material: number;
                    checkCollision: number;
                    colliderId: number;
                    lightSource: number;
                    lightValue: number;
                    totalLength: number;
                };
                indexes: {
                    substance: number;
                    shapeId: number;
                    hardness: number;
                    material: number;
                    checkCollision: number;
                    colliderId: number;
                    lightSource: number;
                    lightValue: number;
                };
                matrixMap: {
                    substanceMap: Record<VoxelSubstanceType, number>;
                    substanceRecord: Record<number, VoxelSubstanceType>;
                };
                voxelData: {
                    substance: number;
                    shapeId: number;
                    hardness: number;
                    material: number;
                    checkCollision: number;
                    colliderId: number;
                    lightSource: number;
                    lightValue: number;
                };
                voxelDataView: DataView;
                voxelMap: Uint16Array;
                syncData(voxelBuffer: SharedArrayBuffer, voxelMapBuffer: SharedArrayBuffer): void;
                getVoxelData(id: number): {
                    substance: number;
                    shapeId: number;
                    hardness: number;
                    material: number;
                    checkCollision: number;
                    colliderId: number;
                    lightSource: number;
                    lightValue: number;
                };
                getSubstance(id: number): number;
                getTrueSubstance(id: number): VoxelSubstanceType;
                getShapeId(id: number): number;
                getHardness(id: number): number;
                getCheckCollisions(id: number): number;
                getColliderId(id: number): number;
                isLightSource(id: number): boolean;
                getLightValue(id: number): number;
            };
            _air: [string, number];
            _barrier: [string, number];
            updateDieTime: number;
            loadDieTime: number;
            regions: import("../../Meta/Matrix/Matrix.types.js").MatrixLoadedRegion;
            chunks: Record<string, Uint32Array>;
            chunkStates: Record<string, Uint8Array>;
            paletteMode: number;
            voxelPalette: Record<number, string>;
            voxelPaletteMap: Record<string, number>;
            voxelManager: import("../../Meta/Voxels/VoxelManager.types.js").VoxelManagerInterface | null;
            lightValueFunctions: {
                r: (value: number) => number;
                g: (value: number) => number;
                b: (value: number) => number;
                s: (value: number) => number;
            };
            threadName: string;
            setVoxelManager(voxelManager: import("../../Meta/Voxels/VoxelManager.types.js").VoxelManagerInterface): void;
            syncChunkBounds(): void;
            getVoxelPaletteNumericId(voxelId: string, voxelState: number): number;
            awaitChunkLoad(x: number, y: number, z: number, timeout?: number): Promise<boolean>;
            __setGlobalVoxelPalette(palette: Record<number, string>, map: Record<string, number>): void;
            getVoxel(x: number, y: number, z: number, secondary?: boolean): false | [string, number];
            getVoxelShapeState(x: number, y: number, z: number): number;
            getLevel(x: number, y: number, z: number): number;
            setLevel(level: number, x: number, y: number, z: number): void;
            getLevelState(x: number, y: number, z: number): number;
            setLevelState(state: number, x: number, y: number, z: number): void;
            setVoxel(voxelId: string, voxelStateId: number, shapeState: number, x: number, y: number, z: number): false | undefined;
            __handleHeightMapUpdateForVoxelAdd(voxelPOS: import("Meta/index.js").Position3Matrix, voxelSubstance: VoxelSubstanceType, chunk: import("../../Meta/Matrix/Matrix.types.js").MatrixLoadedChunk): void;
            getVoxelPaletteIdForWorldGen(voxelId: string, voxelStateId: number): number;
            getVoxelData(x: number, y: number, z: number, secondary?: boolean): false | import("Meta/index.js").VoxelData;
            _createRegion(x: number, y: number, z: number): {
                chunks: {};
            };
            __setChunk(x: number, y: number, z: number, chunkData: SharedArrayBuffer, chunkStates: SharedArrayBuffer): void;
            getVoxelSubstance(x: number, y: number, z: number, secondary?: boolean): VoxelSubstanceType;
            getVoxelShapeId(x: number, y: number, z: number, secondary?: boolean): number;
            isVoxelALightSource(x: number, y: number, z: number, secondary?: boolean): boolean;
            getLightSourceValue(x: number, y: number, z: number, secondary?: boolean): number;
            isAir(x: number, y: number, z: number): boolean;
            getRegion(x: number, y: number, z: number): false | {
                palette?: import("../../Meta/World/WorldData/World.types.js").WorldRegionPalette | undefined;
                chunks: Record<string, Record<string, import("../../Meta/Matrix/Matrix.types.js").MatrixLoadedChunk>>;
            };
            __removeChunk(x: number, y: number, z: number): false | undefined;
            getChunk(x: number, y: number, z: number): false | import("../../Meta/Matrix/Matrix.types.js").MatrixLoadedChunk;
            getWorldColumn(x: number, z: number, y?: number): false | Record<string, import("../../Meta/Matrix/Matrix.types.js").MatrixLoadedChunk>;
            isChunkLocked(x: number, y: number, z: number): boolean;
            lockChunk(x: number, y: number, z: number): boolean;
            unLockChunk(x: number, y: number, z: number): boolean;
            updateChunkData(x: number, y: number, z: number, run: (chunk: import("../../Meta/Matrix/Matrix.types.js").MatrixLoadedChunk) => {}): false | Promise<boolean>;
            setData(x: number, y: number, z: number, data: number, state?: boolean): boolean;
            getData(x: number, y: number, z: number, state?: boolean): number;
            getVoxelNumberID(x: number, y: number, z: number, secondary?: boolean): number | false;
            getLight(x: number, y: number, z: number): number;
            setAir(x: number, y: number, z: number, lightValue: number): void;
            setFullSun(x: number, y: number, z: number): void;
            setLight(x: number, y: number, z: number, lightValue: number): void;
            getLightValue(x: number, y: number, z: number, type: "r" | "g" | "b" | "s"): number;
            sameVoxel(x: number, y: number, z: number, cx: number, cy: number, cz: number): boolean;
        };
        _visitedMap: Record<string, boolean>;
        _flowQue: number[][];
        _flowRemoveQue: number[][];
        runRemovePropagation: typeof import("./Flow/Functions/RunFlowRemove.js").RunRemovePropagation;
        runFlowReduce: typeof import("./Flow/Functions/RunFlowRemove.js").RunFlowReduce;
        runFlowRemove: typeof import("./Flow/Functions/RunFlowRemove.js").RunFlowRemove;
        runFlow: typeof import("./Flow/Functions/RunFlow.js").RunFlow;
        runFlowNoChunkRebuild: typeof import("./Flow/Functions/RunFlowNoChunkBuild.js").RunFlowNoChunkBuild;
        runFlowIncrease: typeof import("./Flow/Functions/RunFlow.js").RunFlowIncrease;
        runFlowPropagation: typeof import("./Flow/Functions/RunFlow.js").RunFlowPropagation;
        rebuildQue: number[][];
        rebuildMap: Record<string, boolean>;
        addToMap(x: number, y: number, z: number): void;
        inMap(x: number, y: number, z: number): boolean;
        setVoxel(level: number, levelState: number, x: number, y: number, z: number): void;
        runRemoveCheck(x: number, y: number, z: number): void;
        setCurrentVoxel(x: number, y: number, z: number): boolean;
        runRebuildQue(): void;
        __addToRebuildQue(x: number, y: number, z: number): void;
        resetRebuildQue(): void;
        addToRebuildQue(x: number, y: number, z: number, sync?: boolean): void;
        setLevel(level: number, x: number, y: number, z: number): void;
        removeVoxel(x: number, y: number, z: number): void;
        getLevel(x: number, y: number, z: number): number;
        getLevelState(x: number, y: number, z: number): number;
        canFlowOutwardTest(x: number, y: number, z: number): boolean;
        canFlowDownardTest(x: number, y: number, z: number): boolean;
        flowDownTest(x: number, y: number, z: number): boolean;
        wait(ms: number): Promise<unknown>;
        getAbsorbLight(x: number, y: number, z: number): number;
    };
    rebuildQueMap: Record<string, boolean>;
    $INIT(): void;
    addToRebuildQue(x: number, y: number, z: number, substance: VoxelSubstanceType | "all"): void;
    resetRebuildQue(): void;
    runRebuildQue(): void;
    runRGBFloodFill(x: number, y: number, z: number): void;
    runRGBFloodRemove(x: number, y: number, z: number): void;
    runSunLightForWorldColumn(x: number, z: number, maxY: number): void;
    runSunFloodFillAtMaxY(x: number, z: number, maxY: number): void;
    runSunFloodFillMaxYFlood(x: number, z: number, maxY: number): void;
    runSunLightUpdate(x: number, y: number, z: number): void;
    runSunLightRemove(x: number, y: number, z: number): void;
    updateFlowAt(x: number, y: number, z: number): Promise<void>;
    removeFlowAt(x: number, y: number, z: number): Promise<void>;
};
export declare type DivineVoxelEnginePropagation = typeof DVEP;
