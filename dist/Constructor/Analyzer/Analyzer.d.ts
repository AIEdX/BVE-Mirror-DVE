import type { UpdateTasksO } from "Meta/Tasks/Tasks.types.js";
import type { LocationData } from "voxelspaces";
export declare const Analyzer: {
    updater: {
        _voxels: Map<string, (locaton: LocationData, deltaTime: number, anayzer: any, DVEC: {
            environment: "node" | "browser";
            __settingsHaveBeenSynced: boolean;
            UTIL: {
                createPromiseCheck: (data: {
                    check: () => boolean;
                    onReady?: (() => any) | undefined;
                    checkInterval: number;
                    failTimeOut?: number | undefined;
                    onFail?: (() => any) | undefined;
                }) => Promise<boolean>;
                getEnviorment(): "node" | "browser";
                getAQueue<T>(): import("../../Global/Util/Queue.js").Queue<T>;
                merge<T_1, K>(target: T_1, newObject: K): T_1 & K;
                degtoRad(degrees: number): number;
                radToDeg(radians: number): number;
                convertBufferToSAB(buffer: ArrayBuffer): SharedArrayBuffer;
                converSABToBuffer(buffer: SharedArrayBuffer): ArrayBuffer;
            };
            settings: {
                enviorment: "node" | "browser";
                settings: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData;
                getSettings(): import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData;
                syncSettings(data: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData): void;
                __syncWithObjects(): void;
                syncWithWorldBounds(worldBounds: {
                    bounds: {
                        MinZ: number;
                        MaxZ: number;
                        MinX: number;
                        MaxX: number;
                        MinY: number;
                        MaxY: number;
                    };
                    setWorldBounds(minX: number, maxX: number, minZ: number, maxZ: number, minY: number, maxY: number): void;
                }): void;
                getSettingsCopy(): any;
                syncChunkInRichWorldThread(): boolean;
                richDataEnabled(): boolean;
                syncChunkInFXThread(): boolean;
                syncChunkInDataThread(): boolean;
                syncChunksInNexusThread(): boolean;
                doSunPropagation(): boolean;
                doRGBPropagation(): boolean;
                doLight(): boolean;
                doFlow(): boolean;
                saveWorldData(): boolean;
                isServer(): boolean;
                isClient(): boolean;
            };
            propagation: {
                expolosion: {
                    run(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: number;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            flow: {
                                update: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                                rmeove: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                    noRemoveMap: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                            };
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                            queue: [x: number, y: number, z: number][];
                            map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): number;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                };
                flow: {
                    update(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: null;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            flow: {
                                update: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                                rmeove: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                    noRemoveMap: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                            };
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): null;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): Promise<void>;
                    remove(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: null;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            flow: {
                                update: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                                rmeove: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                    noRemoveMap: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                            };
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): null;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): Promise<void>;
                };
                worldSun: {
                    run(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: null;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            sun: number[];
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): null;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                };
                rgb: {
                    update(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: any;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): any;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                    remove(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: any;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): any;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                };
                sun: {
                    update(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: any;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): any;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                    remove(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: any;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): any;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                };
            };
            worldGen: {
                worldGen: import("../../index.js").WorldGenInterface | null;
                register: {
                    MAX_ATTEMPTS: number;
                    _requests: Map<string, {
                        attempts: number;
                        dimension: string;
                        chunks: Map<string, [x: number, y: number, z: number]>;
                        voxels: [x: number, y: number, z: number, data: import("../../index.js").RawVoxelData][];
                    }>;
                    registerRequest(dimension: string, x: number, y: number, z: number): string;
                    addToRequest(registerId: string, location: LocationData, rawData: import("../../index.js").RawVoxelData): void;
                    attemptRequestFullFill(registerId: string): boolean;
                };
                worldBounds: {
                    bounds: {
                        MinZ: number;
                        MaxZ: number;
                        MinX: number;
                        MaxX: number;
                        MinY: number;
                        MaxY: number;
                    };
                    setWorldBounds(minX: number, maxX: number, minZ: number, maxZ: number, minY: number, maxY: number): void;
                };
                _brushes: any[];
                setWorldGen(worldGen: import("../../index.js").WorldGenInterface): void;
                generate(data: import("Meta/Tasks/Tasks.types.js").GenerateTasks, onDone: Function): void;
                getBrush(): import("../../Tools/Brush/Brush.js").BrushTool & {
                    requestsId: string;
                    paint(this: import("../../Tools/Brush/Brush.js").BrushTool): import("../../Tools/Brush/Brush.js").BrushTool;
                };
            };
            builder: {
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
                    calculatFlow: typeof import("../Builder/Processor/Functions/CalculateFlow.js").CalculateFlow;
                    voxellightMixCalc: typeof import("../Builder/Processor/Functions/CalculateVoxelLight.js").VoxelLightMixCalc;
                    doVoxelLight: typeof import("../Builder/Processor/Functions/CalculateVoxelLight.js").CalculateVoxelLight;
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
                    syncSettings(settings: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData): void;
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
                syncSettings(settings: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData): void;
                buildChunk(location: LocationData, LOD?: number): true | undefined;
                constructEntity(): void;
            };
            analyzer: any;
            dataSyncNode: {
                _states: Record<string, boolean>;
                isReady(): boolean;
                voxelPalette: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").VoxelPaletteSyncData, any>;
                voxelData: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").VoxelDataSync, any>;
                dimension: import("threadcomm").DataSync<import("../../Meta/Data/DimensionData.types.js").DimensionData, void>;
                chunk: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").WorldDataSync, LocationData>;
                column: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").WorldDataSync, LocationData>;
                region: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").WorldDataSync, LocationData>;
                regionHeader: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").WorldDataSync, LocationData>;
                chunkTags: import("threadcomm").DataSync<import("divine-binary-tags").RemoteTagManagerInitData, void>;
                columnTags: import("threadcomm").DataSync<import("divine-binary-tags").RemoteTagManagerInitData, void>;
                regionTags: import("threadcomm").DataSync<import("divine-binary-tags").RemoteTagManagerInitData[], void>;
                stringMap: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").RegisterStringMapSync, void>;
            };
            data: {
                dimensions: {
                    _count: number;
                    dimensionRecord: Record<string, number>;
                    dimensionMap: Record<number, string>;
                    __defaultDimensionOptions: import("../../Meta/Data/DimensionData.types.js").DimensionOptions;
                    _dimensions: Record<string, import("../../Meta/Data/DimensionData.types.js").DimensionData>;
                    registerDimension(id: string, option: import("../../Meta/Data/DimensionData.types.js").DimensionOptions): void;
                    getDimension(id: string | number): import("../../Meta/Data/DimensionData.types.js").DimensionData;
                    getDimensionStringId(id: string | number): string;
                    getDimensionNumericId(id: string | number): number;
                };
                voxelTags: {
                    voxelIndex: Uint16Array;
                    id: string;
                    sync(voxelMap: Uint16Array): void;
                    setVoxel(id: number): void;
                    initData: import("divine-binary-tags").RemoteTagManagerInitData;
                    $INIT(data: import("divine-binary-tags").RemoteTagManagerInitData): void;
                    byteOffSet: number;
                    tagSize: number;
                    tagIndexes: number;
                    data: DataView;
                    indexMap: Map<string, number>;
                    index: DataView;
                    setBuffer(data: DataView | import("divine-binary-tags").BufferTypes): void;
                    getBuffer(): ArrayBuffer;
                    setTagIndex(index: number): void;
                    getTag(id: string): number;
                    setTag(id: string, value: number): boolean;
                    getArrayTagValue(id: string, index: number): number;
                    getArrayTagByteIndex(id: string, index: number): number;
                    setArrayTagValue(id: string, index: number, value: number): number | void;
                    loopThroughTags(run: (id: string, value: number) => void): void;
                    loopThroughIndex(run: (data: number[]) => void): void;
                    loopThroughAllIndexTags(run: (id: string, value: number, index: number) => void): void;
                };
                world: {
                    _currentionDimension: string;
                    paint: {
                        _dt: import("../../Tools/Data/DataTool.js").DataTool;
                        voxel(location: LocationData, data: import("../../Meta/Data/WorldData.types.js").AddVoxelData, update?: boolean): void;
                        __paint(location: LocationData, data: import("../../Meta/Data/WorldData.types.js").AddVoxelData, update?: boolean): false | undefined;
                        erase(location: LocationData): void;
                    };
                };
                worldRegister: {
                    _dimensions: import("../../Meta/Data/WorldData.types.js").WorldDimensions;
                    _cacheOn: boolean;
                    _chunkCache: Map<string, import("../../Meta/Data/WorldData.types.js").ChunkData>;
                    _columnCache: Map<string, import("../../Meta/Data/WorldData.types.js").Column>;
                    cache: {
                        enable(): void;
                        disable(): void;
                        _addChunk(key: string, data: import("../../Meta/Data/WorldData.types.js").ChunkData): void;
                        _addColumn(key: string, data: import("../../Meta/Data/WorldData.types.js").Column): void;
                        _getChunk(key: string): import("../../Meta/Data/WorldData.types.js").ChunkData | undefined;
                        _getColumn(key: string): import("../../Meta/Data/WorldData.types.js").Column | undefined;
                    };
                    dimensions: {
                        add(id: string | number): Map<any, any>;
                        get(id: string | number): Map<string, import("../../Meta/Data/WorldData.types.js").Region> | undefined;
                    };
                    region: {
                        add(location: LocationData, sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").Region;
                        _getRegionData(sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").Region;
                        get(location: LocationData): false | import("../../Meta/Data/WorldData.types.js").Region;
                        remove(location: LocationData): boolean;
                    };
                    column: {
                        add(location: LocationData, sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").Column | undefined;
                        _getColumnData(sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").Column;
                        get(location: LocationData): false | import("../../Meta/Data/WorldData.types.js").Column;
                        remove(location: LocationData): boolean;
                        fill(location: LocationData): void;
                        height: {
                            getRelative(location: LocationData): number;
                            getAbsolute(location: LocationData): number;
                        };
                    };
                    chunk: {
                        add(location: LocationData, sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").ChunkData | undefined;
                        _getChunkData(sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").ChunkData;
                        addFromServer(chunkBuffer: ArrayBuffer): import("../../Meta/Data/WorldData.types.js").ChunkData | undefined;
                        get(location: LocationData): false | import("../../Meta/Data/WorldData.types.js").ChunkData | undefined;
                        remove(location: LocationData): boolean;
                    };
                };
                columnTags: import("divine-binary-tags").RemoteTagManager;
                worldBounds: {
                    bounds: {
                        MinZ: number;
                        MaxZ: number;
                        MinX: number;
                        MaxX: number;
                        MinY: number;
                        MaxY: number;
                    };
                    setWorldBounds(minX: number, maxX: number, minZ: number, maxZ: number, minY: number, maxY: number): void;
                };
                spaces: {
                    region: import("voxelspaces/Classes/VoxelSpace.js").VoxelSpace & {
                        chunkBounds: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        columnBounds: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        getChunkVolume(): number;
                        getColumnVolume(): number;
                    };
                    column: import("voxelspaces/Classes/VoxelSpace.js").VoxelSpace;
                    chunk: import("voxelspaces/Classes/VoxelSpace.js").VoxelSpace & {
                        _regionPosition: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        getRegionPositonx(): {
                            x: number;
                            y: number;
                            z: number;
                            copy(): any;
                            copyTo(vec3: {
                                x: number;
                                y: number;
                                z: number;
                            }): void;
                            toString(): string;
                            multiply(vec3: {
                                x: number;
                                y: number;
                                z: number;
                            }): any;
                        };
                        getRegionPositonxXYZ(x: number, y: number, z: number): {
                            x: number;
                            y: number;
                            z: number;
                            copy(): any;
                            copyTo(vec3: {
                                x: number;
                                y: number;
                                z: number;
                            }): void;
                            toString(): string;
                            multiply(vec3: {
                                x: number;
                                y: number;
                                z: number;
                            }): any;
                        };
                        getRegionIndex(): number;
                        getRegionIndexXYZ(x: number, y: number, z: number): number;
                    };
                    voxel: import("voxelspaces/Classes/VoxelSpace.js").VoxelSpace;
                    setDimensions(data: {
                        regions: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        columns: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        chunks: {
                            x: number;
                            y: number;
                            z: number;
                        };
                    }): void;
                } & {
                    $INIT(settings: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData): void;
                };
                register: {
                    stringMaps: {
                        segments: Map<string, Map<string, string[]>>;
                        syncStringMap(data: import("../../Meta/Data/DataSync.types.js").RegisterStringMapSync): void;
                        getStringMapValue(segment: string, id: string, index: number): string;
                    };
                };
                chunkTags: import("divine-binary-tags").RemoteTagManager;
                regionTags: import("divine-binary-tags").RemoteTagManager;
                regionHeaderReigster: {
                    _headers: Map<string, Map<string, {
                        data: DataView;
                        buffer: SharedArrayBuffer;
                    }>>;
                    remove(location: LocationData): boolean;
                    add(location: LocationData, buffer: SharedArrayBuffer): void;
                    get(location: LocationData): false | {
                        data: DataView;
                        buffer: SharedArrayBuffer;
                    } | undefined;
                    isStored(location: LocationData): 0 | 1 | -1;
                };
            };
            voxelManager: {
                voxelObjects: Map<string, import("../../index.js").VoxelConstructor>;
                getVoxel(id: string): import("../../index.js").VoxelConstructor;
                registerVoxel(voxel: import("../../index.js").VoxelConstructor | import("../../index.js").VoxelConstructor[]): void;
                defaults: {
                    box: {
                        simple(id: string, textures: import("../../index.js").ConstructorTextureData | Record<import("../../index.js").DirectionNames, import("../../index.js").ConstructorTextureData>): import("../Builder/Constructors/Voxel/classes/Box.constructor.js").BoxVoxelConstructor;
                        pillar(id: string, textures: import("../Builder/Constructors/Voxel/classes/Box.constructor.js").PillarBoxVoxelConstructorData): import("../Builder/Constructors/Voxel/classes/Box.constructor.js").PillarBoxVoxelConstructor;
                    };
                    panel: {
                        simple(id: string, texture: import("../../index.js").ConstructorTextureData): import("../Builder/Constructors/Voxel/classes/Panel.constructor.js").PanelVoxelConstructor;
                    };
                    liquid: {
                        simple(id: string, textures: [import("../../index.js").ConstructorTextureData, import("../../index.js").ConstructorTextureData]): import("../Builder/Constructors/Voxel/classes/Liquid.constructor.js").LiquidVoxelConstructor;
                    };
                };
            };
            TC: {
                threadNumber: number;
                threadName: string;
                environment: "node" | "browser";
                _comms: Record<string, import("threadcomm").CommBase>;
                _commManageras: Record<string, import("threadcomm").CommManager>;
                _tasks: Record<string, import("threadcomm").Task<any>>;
                _queues: Map<string, Map<string, import("threadcomm/Queue/SyncedQueue.js").SyncedQueue>>;
                _onDataSync: Record<string, import("threadcomm").DataSync<any, any>>;
                parent: import("threadcomm").CommBase;
                __internal: Record<number, Record<number, (data: any, event: any) => void>>;
                __initalized: boolean;
                __expectedPorts: Record<string, boolean>;
                $INIT(threadName: string): Promise<void>;
                getSyncedQueue(threadId: string, queueId: string): import("threadcomm/Queue/SyncedQueue.js").SyncedQueue | undefined;
                addComm(comm: import("threadcomm").CommBase): void;
                createComm<T_2>(name: string, mergeObject?: T_2 | undefined): T_2 & import("threadcomm").CommBase;
                createCommManager(data: import("threadcomm/Meta/Manager/Manager.types.js").CommManagerData): import("threadcomm").CommManager;
                getComm(id: string): import("threadcomm").CommBase;
                getCommManager(id: string): import("threadcomm").CommManager;
                __throwError(message: string): never;
                getWorkerPort(): Promise<any>;
                __handleInternalMessage(data: any[], event: any): void;
                __isInternalMessage(data: any[]): boolean;
                __handleTasksDone(tasksId: string, mode: number, threadId: string, tid: string, tasksData: any): void;
                __handleTasksMessage(data: any[]): Promise<void>;
                __isTasks(data: any[]): boolean;
                registerTasks<T_1>(id: string | number, run: (data: T_1, onDone?: Function | undefined) => void, mode?: "async" | "deffered" | undefined): import("threadcomm").Task<T_1>;
                __hanldeDataSyncMessage(data: any[]): Promise<void>;
                __isDataSync(data: any[]): boolean;
                onDataSync<T_2, K_1>(dataType: string | number, onSync?: ((data: T_2) => void) | undefined, onUnSync?: ((data: K_1) => void) | undefined): import("threadcomm").DataSync<T_2, K_1>;
            };
            parentComm: import("threadcomm").CommBase;
            worldComm: import("threadcomm").CommBase;
            tasks: {
                data: {
                    syncTextures: import("threadcomm").Task<any>;
                };
                build: {
                    chunk: {
                        tasks: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>>;
                        run(data: import("Meta/Tasks/Tasks.types.js").BuildTasks): Promise<void>;
                    };
                    column: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                };
                voxelUpdate: {
                    erase: import("threadcomm").Task<UpdateTasksO>;
                    paint: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").PaintTasks>;
                };
                explosion: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").ExplosionTasks>;
                worldSun: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").WorldSunTask>;
                worldGen: {
                    generate: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").GenerateTasks>;
                };
                anaylzer: {
                    propagation: import("threadcomm").Task<UpdateTasksO>;
                    update: import("threadcomm").Task<UpdateTasksO>;
                };
                flow: {
                    update: import("threadcomm").Task<UpdateTasksO>;
                    remove: import("threadcomm").Task<UpdateTasksO>;
                };
                rgb: {
                    update: import("threadcomm").Task<UpdateTasksO>;
                    remove: import("threadcomm").Task<UpdateTasksO>;
                };
                sun: {
                    update: import("threadcomm").Task<UpdateTasksO>;
                    remove: import("threadcomm").Task<UpdateTasksO>;
                };
            };
            tasksQueue: {
                tasks: Map<import("Meta/Tasks/Tasks.types.js").Priorities, [id: string, data: any][]>;
                addTasks(priority: import("Meta/Tasks/Tasks.types.js").Priorities, data: any, run: (data: any) => void): void;
                $INIT(): void;
            };
            hooks: {
                texturesRegistered: import("divine-hooks/Classes/SyncHook.js").SyncHook<{
                    textureDataHasBeenSet: boolean;
                    data: import("../../index.js").TextureTypeUVMap;
                    getTextureUV(data: import("../../index.js").ConstructorTextureData, overlay?: boolean): number;
                    setUVTextureMap(data: import("../../index.js").TextureTypeUVMap): void;
                    releaseTextureData(): void;
                    isReady(): boolean;
                }, void>;
            };
            syncSettings(data: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData): void;
            reStart(): void;
            isReady(): boolean;
            $INIT(): Promise<void>;
            getDataTool(): import("../../index.js").ConstructorDataTool;
        }) => void>;
        registerVoxel(id: string, run: (locaton: LocationData, deltaTime: number, anayzer: any, DVEC: {
            environment: "node" | "browser";
            __settingsHaveBeenSynced: boolean;
            UTIL: {
                createPromiseCheck: (data: {
                    check: () => boolean;
                    onReady?: (() => any) | undefined;
                    checkInterval: number;
                    failTimeOut?: number | undefined;
                    onFail?: (() => any) | undefined;
                }) => Promise<boolean>;
                getEnviorment(): "node" | "browser";
                getAQueue<T>(): import("../../Global/Util/Queue.js").Queue<T>;
                merge<T_1, K>(target: T_1, newObject: K): T_1 & K;
                degtoRad(degrees: number): number;
                radToDeg(radians: number): number;
                convertBufferToSAB(buffer: ArrayBuffer): SharedArrayBuffer;
                converSABToBuffer(buffer: SharedArrayBuffer): ArrayBuffer;
            };
            settings: {
                enviorment: "node" | "browser";
                settings: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData;
                getSettings(): import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData;
                syncSettings(data: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData): void;
                __syncWithObjects(): void;
                syncWithWorldBounds(worldBounds: {
                    bounds: {
                        MinZ: number;
                        MaxZ: number;
                        MinX: number;
                        MaxX: number;
                        MinY: number;
                        MaxY: number;
                    };
                    setWorldBounds(minX: number, maxX: number, minZ: number, maxZ: number, minY: number, maxY: number): void;
                }): void;
                getSettingsCopy(): any;
                syncChunkInRichWorldThread(): boolean;
                richDataEnabled(): boolean;
                syncChunkInFXThread(): boolean;
                syncChunkInDataThread(): boolean;
                syncChunksInNexusThread(): boolean;
                doSunPropagation(): boolean;
                doRGBPropagation(): boolean;
                doLight(): boolean;
                doFlow(): boolean;
                saveWorldData(): boolean;
                isServer(): boolean;
                isClient(): boolean;
            };
            propagation: {
                expolosion: {
                    run(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: number;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            flow: {
                                update: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                                rmeove: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                    noRemoveMap: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                            };
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                            queue: [x: number, y: number, z: number][];
                            map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): number;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                };
                flow: {
                    update(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: null;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            flow: {
                                update: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                                rmeove: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                    noRemoveMap: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                            };
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): null;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): Promise<void>;
                    remove(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: null;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            flow: {
                                update: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                                rmeove: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                    noRemoveMap: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                            };
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): null;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): Promise<void>;
                };
                worldSun: {
                    run(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: null;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            sun: number[];
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): null;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                };
                rgb: {
                    update(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: any;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): any;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                    remove(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: any;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): any;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                };
                sun: {
                    update(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: any;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): any;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                    remove(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: any;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): any;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                };
            };
            worldGen: {
                worldGen: import("../../index.js").WorldGenInterface | null;
                register: {
                    MAX_ATTEMPTS: number;
                    _requests: Map<string, {
                        attempts: number;
                        dimension: string;
                        chunks: Map<string, [x: number, y: number, z: number]>;
                        voxels: [x: number, y: number, z: number, data: import("../../index.js").RawVoxelData][];
                    }>;
                    registerRequest(dimension: string, x: number, y: number, z: number): string;
                    addToRequest(registerId: string, location: LocationData, rawData: import("../../index.js").RawVoxelData): void;
                    attemptRequestFullFill(registerId: string): boolean;
                };
                worldBounds: {
                    bounds: {
                        MinZ: number;
                        MaxZ: number;
                        MinX: number;
                        MaxX: number;
                        MinY: number;
                        MaxY: number;
                    };
                    setWorldBounds(minX: number, maxX: number, minZ: number, maxZ: number, minY: number, maxY: number): void;
                };
                _brushes: any[];
                setWorldGen(worldGen: import("../../index.js").WorldGenInterface): void;
                generate(data: import("Meta/Tasks/Tasks.types.js").GenerateTasks, onDone: Function): void;
                getBrush(): import("../../Tools/Brush/Brush.js").BrushTool & {
                    requestsId: string;
                    paint(this: import("../../Tools/Brush/Brush.js").BrushTool): import("../../Tools/Brush/Brush.js").BrushTool;
                };
            };
            builder: {
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
                    calculatFlow: typeof import("../Builder/Processor/Functions/CalculateFlow.js").CalculateFlow;
                    voxellightMixCalc: typeof import("../Builder/Processor/Functions/CalculateVoxelLight.js").VoxelLightMixCalc;
                    doVoxelLight: typeof import("../Builder/Processor/Functions/CalculateVoxelLight.js").CalculateVoxelLight;
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
                    syncSettings(settings: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData): void;
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
                syncSettings(settings: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData): void;
                buildChunk(location: LocationData, LOD?: number): true | undefined;
                constructEntity(): void;
            };
            analyzer: any;
            dataSyncNode: {
                _states: Record<string, boolean>;
                isReady(): boolean;
                voxelPalette: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").VoxelPaletteSyncData, any>;
                voxelData: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").VoxelDataSync, any>;
                dimension: import("threadcomm").DataSync<import("../../Meta/Data/DimensionData.types.js").DimensionData, void>;
                chunk: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").WorldDataSync, LocationData>;
                column: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").WorldDataSync, LocationData>;
                region: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").WorldDataSync, LocationData>;
                regionHeader: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").WorldDataSync, LocationData>;
                chunkTags: import("threadcomm").DataSync<import("divine-binary-tags").RemoteTagManagerInitData, void>;
                columnTags: import("threadcomm").DataSync<import("divine-binary-tags").RemoteTagManagerInitData, void>;
                regionTags: import("threadcomm").DataSync<import("divine-binary-tags").RemoteTagManagerInitData[], void>;
                stringMap: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").RegisterStringMapSync, void>;
            };
            data: {
                dimensions: {
                    _count: number;
                    dimensionRecord: Record<string, number>;
                    dimensionMap: Record<number, string>;
                    __defaultDimensionOptions: import("../../Meta/Data/DimensionData.types.js").DimensionOptions;
                    _dimensions: Record<string, import("../../Meta/Data/DimensionData.types.js").DimensionData>;
                    registerDimension(id: string, option: import("../../Meta/Data/DimensionData.types.js").DimensionOptions): void;
                    getDimension(id: string | number): import("../../Meta/Data/DimensionData.types.js").DimensionData;
                    getDimensionStringId(id: string | number): string;
                    getDimensionNumericId(id: string | number): number;
                };
                voxelTags: {
                    voxelIndex: Uint16Array;
                    id: string;
                    sync(voxelMap: Uint16Array): void;
                    setVoxel(id: number): void;
                    initData: import("divine-binary-tags").RemoteTagManagerInitData;
                    $INIT(data: import("divine-binary-tags").RemoteTagManagerInitData): void;
                    byteOffSet: number;
                    tagSize: number;
                    tagIndexes: number;
                    data: DataView;
                    indexMap: Map<string, number>;
                    index: DataView;
                    setBuffer(data: DataView | import("divine-binary-tags").BufferTypes): void;
                    getBuffer(): ArrayBuffer;
                    setTagIndex(index: number): void;
                    getTag(id: string): number;
                    setTag(id: string, value: number): boolean;
                    getArrayTagValue(id: string, index: number): number;
                    getArrayTagByteIndex(id: string, index: number): number;
                    setArrayTagValue(id: string, index: number, value: number): number | void;
                    loopThroughTags(run: (id: string, value: number) => void): void;
                    loopThroughIndex(run: (data: number[]) => void): void;
                    loopThroughAllIndexTags(run: (id: string, value: number, index: number) => void): void;
                };
                world: {
                    _currentionDimension: string;
                    paint: {
                        _dt: import("../../Tools/Data/DataTool.js").DataTool;
                        voxel(location: LocationData, data: import("../../Meta/Data/WorldData.types.js").AddVoxelData, update?: boolean): void;
                        __paint(location: LocationData, data: import("../../Meta/Data/WorldData.types.js").AddVoxelData, update?: boolean): false | undefined;
                        erase(location: LocationData): void;
                    };
                };
                worldRegister: {
                    _dimensions: import("../../Meta/Data/WorldData.types.js").WorldDimensions;
                    _cacheOn: boolean;
                    _chunkCache: Map<string, import("../../Meta/Data/WorldData.types.js").ChunkData>;
                    _columnCache: Map<string, import("../../Meta/Data/WorldData.types.js").Column>;
                    cache: {
                        enable(): void;
                        disable(): void;
                        _addChunk(key: string, data: import("../../Meta/Data/WorldData.types.js").ChunkData): void;
                        _addColumn(key: string, data: import("../../Meta/Data/WorldData.types.js").Column): void;
                        _getChunk(key: string): import("../../Meta/Data/WorldData.types.js").ChunkData | undefined;
                        _getColumn(key: string): import("../../Meta/Data/WorldData.types.js").Column | undefined;
                    };
                    dimensions: {
                        add(id: string | number): Map<any, any>;
                        get(id: string | number): Map<string, import("../../Meta/Data/WorldData.types.js").Region> | undefined;
                    };
                    region: {
                        add(location: LocationData, sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").Region;
                        _getRegionData(sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").Region;
                        get(location: LocationData): false | import("../../Meta/Data/WorldData.types.js").Region;
                        remove(location: LocationData): boolean;
                    };
                    column: {
                        add(location: LocationData, sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").Column | undefined;
                        _getColumnData(sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").Column;
                        get(location: LocationData): false | import("../../Meta/Data/WorldData.types.js").Column;
                        remove(location: LocationData): boolean;
                        fill(location: LocationData): void;
                        height: {
                            getRelative(location: LocationData): number;
                            getAbsolute(location: LocationData): number;
                        };
                    };
                    chunk: {
                        add(location: LocationData, sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").ChunkData | undefined;
                        _getChunkData(sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").ChunkData;
                        addFromServer(chunkBuffer: ArrayBuffer): import("../../Meta/Data/WorldData.types.js").ChunkData | undefined;
                        get(location: LocationData): false | import("../../Meta/Data/WorldData.types.js").ChunkData | undefined;
                        remove(location: LocationData): boolean;
                    };
                };
                columnTags: import("divine-binary-tags").RemoteTagManager;
                worldBounds: {
                    bounds: {
                        MinZ: number;
                        MaxZ: number;
                        MinX: number;
                        MaxX: number;
                        MinY: number;
                        MaxY: number;
                    };
                    setWorldBounds(minX: number, maxX: number, minZ: number, maxZ: number, minY: number, maxY: number): void;
                };
                spaces: {
                    region: import("voxelspaces/Classes/VoxelSpace.js").VoxelSpace & {
                        chunkBounds: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        columnBounds: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        getChunkVolume(): number;
                        getColumnVolume(): number;
                    };
                    column: import("voxelspaces/Classes/VoxelSpace.js").VoxelSpace;
                    chunk: import("voxelspaces/Classes/VoxelSpace.js").VoxelSpace & {
                        _regionPosition: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        getRegionPositonx(): {
                            x: number;
                            y: number;
                            z: number;
                            copy(): any;
                            copyTo(vec3: {
                                x: number;
                                y: number;
                                z: number;
                            }): void;
                            toString(): string;
                            multiply(vec3: {
                                x: number;
                                y: number;
                                z: number;
                            }): any;
                        };
                        getRegionPositonxXYZ(x: number, y: number, z: number): {
                            x: number;
                            y: number;
                            z: number;
                            copy(): any;
                            copyTo(vec3: {
                                x: number;
                                y: number;
                                z: number;
                            }): void;
                            toString(): string;
                            multiply(vec3: {
                                x: number;
                                y: number;
                                z: number;
                            }): any;
                        };
                        getRegionIndex(): number;
                        getRegionIndexXYZ(x: number, y: number, z: number): number;
                    };
                    voxel: import("voxelspaces/Classes/VoxelSpace.js").VoxelSpace;
                    setDimensions(data: {
                        regions: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        columns: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        chunks: {
                            x: number;
                            y: number;
                            z: number;
                        };
                    }): void;
                } & {
                    $INIT(settings: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData): void;
                };
                register: {
                    stringMaps: {
                        segments: Map<string, Map<string, string[]>>;
                        syncStringMap(data: import("../../Meta/Data/DataSync.types.js").RegisterStringMapSync): void;
                        getStringMapValue(segment: string, id: string, index: number): string;
                    };
                };
                chunkTags: import("divine-binary-tags").RemoteTagManager;
                regionTags: import("divine-binary-tags").RemoteTagManager;
                regionHeaderReigster: {
                    _headers: Map<string, Map<string, {
                        data: DataView;
                        buffer: SharedArrayBuffer;
                    }>>;
                    remove(location: LocationData): boolean;
                    add(location: LocationData, buffer: SharedArrayBuffer): void;
                    get(location: LocationData): false | {
                        data: DataView;
                        buffer: SharedArrayBuffer;
                    } | undefined;
                    isStored(location: LocationData): 0 | 1 | -1;
                };
            };
            voxelManager: {
                voxelObjects: Map<string, import("../../index.js").VoxelConstructor>;
                getVoxel(id: string): import("../../index.js").VoxelConstructor;
                registerVoxel(voxel: import("../../index.js").VoxelConstructor | import("../../index.js").VoxelConstructor[]): void;
                defaults: {
                    box: {
                        simple(id: string, textures: import("../../index.js").ConstructorTextureData | Record<import("../../index.js").DirectionNames, import("../../index.js").ConstructorTextureData>): import("../Builder/Constructors/Voxel/classes/Box.constructor.js").BoxVoxelConstructor;
                        pillar(id: string, textures: import("../Builder/Constructors/Voxel/classes/Box.constructor.js").PillarBoxVoxelConstructorData): import("../Builder/Constructors/Voxel/classes/Box.constructor.js").PillarBoxVoxelConstructor;
                    };
                    panel: {
                        simple(id: string, texture: import("../../index.js").ConstructorTextureData): import("../Builder/Constructors/Voxel/classes/Panel.constructor.js").PanelVoxelConstructor;
                    };
                    liquid: {
                        simple(id: string, textures: [import("../../index.js").ConstructorTextureData, import("../../index.js").ConstructorTextureData]): import("../Builder/Constructors/Voxel/classes/Liquid.constructor.js").LiquidVoxelConstructor;
                    };
                };
            };
            TC: {
                threadNumber: number;
                threadName: string;
                environment: "node" | "browser";
                _comms: Record<string, import("threadcomm").CommBase>;
                _commManageras: Record<string, import("threadcomm").CommManager>;
                _tasks: Record<string, import("threadcomm").Task<any>>;
                _queues: Map<string, Map<string, import("threadcomm/Queue/SyncedQueue.js").SyncedQueue>>;
                _onDataSync: Record<string, import("threadcomm").DataSync<any, any>>;
                parent: import("threadcomm").CommBase;
                __internal: Record<number, Record<number, (data: any, event: any) => void>>;
                __initalized: boolean;
                __expectedPorts: Record<string, boolean>;
                $INIT(threadName: string): Promise<void>;
                getSyncedQueue(threadId: string, queueId: string): import("threadcomm/Queue/SyncedQueue.js").SyncedQueue | undefined;
                addComm(comm: import("threadcomm").CommBase): void;
                createComm<T_2>(name: string, mergeObject?: T_2 | undefined): T_2 & import("threadcomm").CommBase;
                createCommManager(data: import("threadcomm/Meta/Manager/Manager.types.js").CommManagerData): import("threadcomm").CommManager;
                getComm(id: string): import("threadcomm").CommBase;
                getCommManager(id: string): import("threadcomm").CommManager;
                __throwError(message: string): never;
                getWorkerPort(): Promise<any>;
                __handleInternalMessage(data: any[], event: any): void;
                __isInternalMessage(data: any[]): boolean;
                __handleTasksDone(tasksId: string, mode: number, threadId: string, tid: string, tasksData: any): void;
                __handleTasksMessage(data: any[]): Promise<void>;
                __isTasks(data: any[]): boolean;
                registerTasks<T_1>(id: string | number, run: (data: T_1, onDone?: Function | undefined) => void, mode?: "async" | "deffered" | undefined): import("threadcomm").Task<T_1>;
                __hanldeDataSyncMessage(data: any[]): Promise<void>;
                __isDataSync(data: any[]): boolean;
                onDataSync<T_2, K_1>(dataType: string | number, onSync?: ((data: T_2) => void) | undefined, onUnSync?: ((data: K_1) => void) | undefined): import("threadcomm").DataSync<T_2, K_1>;
            };
            parentComm: import("threadcomm").CommBase;
            worldComm: import("threadcomm").CommBase;
            tasks: {
                data: {
                    syncTextures: import("threadcomm").Task<any>;
                };
                build: {
                    chunk: {
                        tasks: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>>;
                        run(data: import("Meta/Tasks/Tasks.types.js").BuildTasks): Promise<void>;
                    };
                    column: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                };
                voxelUpdate: {
                    erase: import("threadcomm").Task<UpdateTasksO>;
                    paint: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").PaintTasks>;
                };
                explosion: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").ExplosionTasks>;
                worldSun: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").WorldSunTask>;
                worldGen: {
                    generate: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").GenerateTasks>;
                };
                anaylzer: {
                    propagation: import("threadcomm").Task<UpdateTasksO>;
                    update: import("threadcomm").Task<UpdateTasksO>;
                };
                flow: {
                    update: import("threadcomm").Task<UpdateTasksO>;
                    remove: import("threadcomm").Task<UpdateTasksO>;
                };
                rgb: {
                    update: import("threadcomm").Task<UpdateTasksO>;
                    remove: import("threadcomm").Task<UpdateTasksO>;
                };
                sun: {
                    update: import("threadcomm").Task<UpdateTasksO>;
                    remove: import("threadcomm").Task<UpdateTasksO>;
                };
            };
            tasksQueue: {
                tasks: Map<import("Meta/Tasks/Tasks.types.js").Priorities, [id: string, data: any][]>;
                addTasks(priority: import("Meta/Tasks/Tasks.types.js").Priorities, data: any, run: (data: any) => void): void;
                $INIT(): void;
            };
            hooks: {
                texturesRegistered: import("divine-hooks/Classes/SyncHook.js").SyncHook<{
                    textureDataHasBeenSet: boolean;
                    data: import("../../index.js").TextureTypeUVMap;
                    getTextureUV(data: import("../../index.js").ConstructorTextureData, overlay?: boolean): number;
                    setUVTextureMap(data: import("../../index.js").TextureTypeUVMap): void;
                    releaseTextureData(): void;
                    isReady(): boolean;
                }, void>;
            };
            syncSettings(data: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData): void;
            reStart(): void;
            isReady(): boolean;
            $INIT(): Promise<void>;
            getDataTool(): import("../../index.js").ConstructorDataTool;
        }) => void): void;
        getVoxel(id: string): false | ((locaton: LocationData, deltaTime: number, anayzer: any, DVEC: {
            environment: "node" | "browser";
            __settingsHaveBeenSynced: boolean;
            UTIL: {
                createPromiseCheck: (data: {
                    check: () => boolean;
                    onReady?: (() => any) | undefined;
                    checkInterval: number;
                    failTimeOut?: number | undefined;
                    onFail?: (() => any) | undefined;
                }) => Promise<boolean>;
                getEnviorment(): "node" | "browser";
                getAQueue<T>(): import("../../Global/Util/Queue.js").Queue<T>;
                merge<T_1, K>(target: T_1, newObject: K): T_1 & K;
                degtoRad(degrees: number): number;
                radToDeg(radians: number): number;
                convertBufferToSAB(buffer: ArrayBuffer): SharedArrayBuffer;
                converSABToBuffer(buffer: SharedArrayBuffer): ArrayBuffer;
            };
            settings: {
                enviorment: "node" | "browser";
                settings: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData;
                getSettings(): import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData;
                syncSettings(data: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData): void;
                __syncWithObjects(): void;
                syncWithWorldBounds(worldBounds: {
                    bounds: {
                        MinZ: number;
                        MaxZ: number;
                        MinX: number;
                        MaxX: number;
                        MinY: number;
                        MaxY: number;
                    };
                    setWorldBounds(minX: number, maxX: number, minZ: number, maxZ: number, minY: number, maxY: number): void;
                }): void;
                getSettingsCopy(): any;
                syncChunkInRichWorldThread(): boolean;
                richDataEnabled(): boolean;
                syncChunkInFXThread(): boolean;
                syncChunkInDataThread(): boolean;
                syncChunksInNexusThread(): boolean;
                doSunPropagation(): boolean;
                doRGBPropagation(): boolean;
                doLight(): boolean;
                doFlow(): boolean;
                saveWorldData(): boolean;
                isServer(): boolean;
                isClient(): boolean;
            };
            propagation: {
                expolosion: {
                    run(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: number;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            flow: {
                                update: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                                rmeove: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                    noRemoveMap: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                            };
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                            queue: [x: number, y: number, z: number][];
                            map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): number;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                };
                flow: {
                    update(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: null;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            flow: {
                                update: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                                rmeove: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                    noRemoveMap: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                            };
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): null;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): Promise<void>;
                    remove(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: null;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            flow: {
                                update: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                                rmeove: {
                                    queue: number[][];
                                    map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                    noRemoveMap: import("../../Global/Util/VisistedMap.js").VisitedMap;
                                };
                            };
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): null;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): Promise<void>;
                };
                worldSun: {
                    run(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: null;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            sun: number[];
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): null;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                };
                rgb: {
                    update(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: any;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): any;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                    remove(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: any;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): any;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                };
                sun: {
                    update(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: any;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): any;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                    remove(tasks: {
                        rebuildQueMap: Map<string, boolean>;
                        comm: import("threadcomm").CommBase;
                        priority: import("Meta/Tasks/Tasks.types.js").Priorities;
                        LOD: number;
                        syncQueue: LocationData[];
                        aSyncQueue: LocationData[];
                        buildMode: "sync" | "async";
                        buildTasks: import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                        rebuildTasks: import("Meta/Tasks/Tasks.types.js").AddToRebuildQueue;
                        tasksType: string;
                        origin: LocationData;
                        data: any;
                        buildQueue: string;
                        originThread: string;
                        queues: {
                            rgb: {
                                update: number[];
                                rmeove: number[];
                                map: import("../../Global/Util/VisistedMap.js").VisitedMap;
                            };
                            sun: {
                                update: number[];
                                rmeove: number[];
                            };
                        };
                        start(): any;
                        stop(): any;
                        setPriority(priority: import("Meta/Tasks/Tasks.types.js").Priorities): any;
                        getData(): any;
                        getOriginThread(): LocationData;
                        getBuildQueue(): string;
                        getOrigin(): LocationData;
                        needsRebuild(): boolean;
                        needsToUpdateOriginThread(): boolean;
                        setBuldMode(mode: "sync" | "async"): any;
                        addToRebuildQueue(x: number, y: number, z: number): boolean;
                        addNeighborsToRebuildQueue(x: number, y: number, z: number): false | any | undefined;
                        runRebuildQueue(): any;
                    }): void;
                };
            };
            worldGen: {
                worldGen: import("../../index.js").WorldGenInterface | null;
                register: {
                    MAX_ATTEMPTS: number;
                    _requests: Map<string, {
                        attempts: number;
                        dimension: string;
                        chunks: Map<string, [x: number, y: number, z: number]>;
                        voxels: [x: number, y: number, z: number, data: import("../../index.js").RawVoxelData][];
                    }>;
                    registerRequest(dimension: string, x: number, y: number, z: number): string;
                    addToRequest(registerId: string, location: LocationData, rawData: import("../../index.js").RawVoxelData): void;
                    attemptRequestFullFill(registerId: string): boolean;
                };
                worldBounds: {
                    bounds: {
                        MinZ: number;
                        MaxZ: number;
                        MinX: number;
                        MaxX: number;
                        MinY: number;
                        MaxY: number;
                    };
                    setWorldBounds(minX: number, maxX: number, minZ: number, maxZ: number, minY: number, maxY: number): void;
                };
                _brushes: any[];
                setWorldGen(worldGen: import("../../index.js").WorldGenInterface): void;
                generate(data: import("Meta/Tasks/Tasks.types.js").GenerateTasks, onDone: Function): void;
                getBrush(): import("../../Tools/Brush/Brush.js").BrushTool & {
                    requestsId: string;
                    paint(this: import("../../Tools/Brush/Brush.js").BrushTool): import("../../Tools/Brush/Brush.js").BrushTool;
                };
            };
            builder: {
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
                    calculatFlow: typeof import("../Builder/Processor/Functions/CalculateFlow.js").CalculateFlow;
                    voxellightMixCalc: typeof import("../Builder/Processor/Functions/CalculateVoxelLight.js").VoxelLightMixCalc;
                    doVoxelLight: typeof import("../Builder/Processor/Functions/CalculateVoxelLight.js").CalculateVoxelLight;
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
                    syncSettings(settings: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData): void;
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
                syncSettings(settings: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData): void;
                buildChunk(location: LocationData, LOD?: number): true | undefined;
                constructEntity(): void;
            };
            analyzer: any;
            dataSyncNode: {
                _states: Record<string, boolean>;
                isReady(): boolean;
                voxelPalette: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").VoxelPaletteSyncData, any>;
                voxelData: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").VoxelDataSync, any>;
                dimension: import("threadcomm").DataSync<import("../../Meta/Data/DimensionData.types.js").DimensionData, void>;
                chunk: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").WorldDataSync, LocationData>;
                column: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").WorldDataSync, LocationData>;
                region: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").WorldDataSync, LocationData>;
                regionHeader: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").WorldDataSync, LocationData>;
                chunkTags: import("threadcomm").DataSync<import("divine-binary-tags").RemoteTagManagerInitData, void>;
                columnTags: import("threadcomm").DataSync<import("divine-binary-tags").RemoteTagManagerInitData, void>;
                regionTags: import("threadcomm").DataSync<import("divine-binary-tags").RemoteTagManagerInitData[], void>;
                stringMap: import("threadcomm").DataSync<import("../../Meta/Data/DataSync.types.js").RegisterStringMapSync, void>;
            };
            data: {
                dimensions: {
                    _count: number;
                    dimensionRecord: Record<string, number>;
                    dimensionMap: Record<number, string>;
                    __defaultDimensionOptions: import("../../Meta/Data/DimensionData.types.js").DimensionOptions;
                    _dimensions: Record<string, import("../../Meta/Data/DimensionData.types.js").DimensionData>;
                    registerDimension(id: string, option: import("../../Meta/Data/DimensionData.types.js").DimensionOptions): void;
                    getDimension(id: string | number): import("../../Meta/Data/DimensionData.types.js").DimensionData;
                    getDimensionStringId(id: string | number): string;
                    getDimensionNumericId(id: string | number): number;
                };
                voxelTags: {
                    voxelIndex: Uint16Array;
                    id: string;
                    sync(voxelMap: Uint16Array): void;
                    setVoxel(id: number): void;
                    initData: import("divine-binary-tags").RemoteTagManagerInitData;
                    $INIT(data: import("divine-binary-tags").RemoteTagManagerInitData): void;
                    byteOffSet: number;
                    tagSize: number;
                    tagIndexes: number;
                    data: DataView;
                    indexMap: Map<string, number>;
                    index: DataView;
                    setBuffer(data: DataView | import("divine-binary-tags").BufferTypes): void;
                    getBuffer(): ArrayBuffer;
                    setTagIndex(index: number): void;
                    getTag(id: string): number;
                    setTag(id: string, value: number): boolean;
                    getArrayTagValue(id: string, index: number): number;
                    getArrayTagByteIndex(id: string, index: number): number;
                    setArrayTagValue(id: string, index: number, value: number): number | void;
                    loopThroughTags(run: (id: string, value: number) => void): void;
                    loopThroughIndex(run: (data: number[]) => void): void;
                    loopThroughAllIndexTags(run: (id: string, value: number, index: number) => void): void;
                };
                world: {
                    _currentionDimension: string;
                    paint: {
                        _dt: import("../../Tools/Data/DataTool.js").DataTool;
                        voxel(location: LocationData, data: import("../../Meta/Data/WorldData.types.js").AddVoxelData, update?: boolean): void;
                        __paint(location: LocationData, data: import("../../Meta/Data/WorldData.types.js").AddVoxelData, update?: boolean): false | undefined;
                        erase(location: LocationData): void;
                    };
                };
                worldRegister: {
                    _dimensions: import("../../Meta/Data/WorldData.types.js").WorldDimensions;
                    _cacheOn: boolean;
                    _chunkCache: Map<string, import("../../Meta/Data/WorldData.types.js").ChunkData>;
                    _columnCache: Map<string, import("../../Meta/Data/WorldData.types.js").Column>;
                    cache: {
                        enable(): void;
                        disable(): void;
                        _addChunk(key: string, data: import("../../Meta/Data/WorldData.types.js").ChunkData): void;
                        _addColumn(key: string, data: import("../../Meta/Data/WorldData.types.js").Column): void;
                        _getChunk(key: string): import("../../Meta/Data/WorldData.types.js").ChunkData | undefined;
                        _getColumn(key: string): import("../../Meta/Data/WorldData.types.js").Column | undefined;
                    };
                    dimensions: {
                        add(id: string | number): Map<any, any>;
                        get(id: string | number): Map<string, import("../../Meta/Data/WorldData.types.js").Region> | undefined;
                    };
                    region: {
                        add(location: LocationData, sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").Region;
                        _getRegionData(sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").Region;
                        get(location: LocationData): false | import("../../Meta/Data/WorldData.types.js").Region;
                        remove(location: LocationData): boolean;
                    };
                    column: {
                        add(location: LocationData, sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").Column | undefined;
                        _getColumnData(sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").Column;
                        get(location: LocationData): false | import("../../Meta/Data/WorldData.types.js").Column;
                        remove(location: LocationData): boolean;
                        fill(location: LocationData): void;
                        height: {
                            getRelative(location: LocationData): number;
                            getAbsolute(location: LocationData): number;
                        };
                    };
                    chunk: {
                        add(location: LocationData, sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").ChunkData | undefined;
                        _getChunkData(sab: SharedArrayBuffer): import("../../Meta/Data/WorldData.types.js").ChunkData;
                        addFromServer(chunkBuffer: ArrayBuffer): import("../../Meta/Data/WorldData.types.js").ChunkData | undefined;
                        get(location: LocationData): false | import("../../Meta/Data/WorldData.types.js").ChunkData | undefined;
                        remove(location: LocationData): boolean;
                    };
                };
                columnTags: import("divine-binary-tags").RemoteTagManager;
                worldBounds: {
                    bounds: {
                        MinZ: number;
                        MaxZ: number;
                        MinX: number;
                        MaxX: number;
                        MinY: number;
                        MaxY: number;
                    };
                    setWorldBounds(minX: number, maxX: number, minZ: number, maxZ: number, minY: number, maxY: number): void;
                };
                spaces: {
                    region: import("voxelspaces/Classes/VoxelSpace.js").VoxelSpace & {
                        chunkBounds: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        columnBounds: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        getChunkVolume(): number;
                        getColumnVolume(): number;
                    };
                    column: import("voxelspaces/Classes/VoxelSpace.js").VoxelSpace;
                    chunk: import("voxelspaces/Classes/VoxelSpace.js").VoxelSpace & {
                        _regionPosition: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        getRegionPositonx(): {
                            x: number;
                            y: number;
                            z: number;
                            copy(): any;
                            copyTo(vec3: {
                                x: number;
                                y: number;
                                z: number;
                            }): void;
                            toString(): string;
                            multiply(vec3: {
                                x: number;
                                y: number;
                                z: number;
                            }): any;
                        };
                        getRegionPositonxXYZ(x: number, y: number, z: number): {
                            x: number;
                            y: number;
                            z: number;
                            copy(): any;
                            copyTo(vec3: {
                                x: number;
                                y: number;
                                z: number;
                            }): void;
                            toString(): string;
                            multiply(vec3: {
                                x: number;
                                y: number;
                                z: number;
                            }): any;
                        };
                        getRegionIndex(): number;
                        getRegionIndexXYZ(x: number, y: number, z: number): number;
                    };
                    voxel: import("voxelspaces/Classes/VoxelSpace.js").VoxelSpace;
                    setDimensions(data: {
                        regions: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        columns: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        chunks: {
                            x: number;
                            y: number;
                            z: number;
                        };
                    }): void;
                } & {
                    $INIT(settings: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData): void;
                };
                register: {
                    stringMaps: {
                        segments: Map<string, Map<string, string[]>>;
                        syncStringMap(data: import("../../Meta/Data/DataSync.types.js").RegisterStringMapSync): void;
                        getStringMapValue(segment: string, id: string, index: number): string;
                    };
                };
                chunkTags: import("divine-binary-tags").RemoteTagManager;
                regionTags: import("divine-binary-tags").RemoteTagManager;
                regionHeaderReigster: {
                    _headers: Map<string, Map<string, {
                        data: DataView;
                        buffer: SharedArrayBuffer;
                    }>>;
                    remove(location: LocationData): boolean;
                    add(location: LocationData, buffer: SharedArrayBuffer): void;
                    get(location: LocationData): false | {
                        data: DataView;
                        buffer: SharedArrayBuffer;
                    } | undefined;
                    isStored(location: LocationData): 0 | 1 | -1;
                };
            };
            voxelManager: {
                voxelObjects: Map<string, import("../../index.js").VoxelConstructor>;
                getVoxel(id: string): import("../../index.js").VoxelConstructor;
                registerVoxel(voxel: import("../../index.js").VoxelConstructor | import("../../index.js").VoxelConstructor[]): void;
                defaults: {
                    box: {
                        simple(id: string, textures: import("../../index.js").ConstructorTextureData | Record<import("../../index.js").DirectionNames, import("../../index.js").ConstructorTextureData>): import("../Builder/Constructors/Voxel/classes/Box.constructor.js").BoxVoxelConstructor;
                        pillar(id: string, textures: import("../Builder/Constructors/Voxel/classes/Box.constructor.js").PillarBoxVoxelConstructorData): import("../Builder/Constructors/Voxel/classes/Box.constructor.js").PillarBoxVoxelConstructor;
                    };
                    panel: {
                        simple(id: string, texture: import("../../index.js").ConstructorTextureData): import("../Builder/Constructors/Voxel/classes/Panel.constructor.js").PanelVoxelConstructor;
                    };
                    liquid: {
                        simple(id: string, textures: [import("../../index.js").ConstructorTextureData, import("../../index.js").ConstructorTextureData]): import("../Builder/Constructors/Voxel/classes/Liquid.constructor.js").LiquidVoxelConstructor;
                    };
                };
            };
            TC: {
                threadNumber: number;
                threadName: string;
                environment: "node" | "browser";
                _comms: Record<string, import("threadcomm").CommBase>;
                _commManageras: Record<string, import("threadcomm").CommManager>;
                _tasks: Record<string, import("threadcomm").Task<any>>;
                _queues: Map<string, Map<string, import("threadcomm/Queue/SyncedQueue.js").SyncedQueue>>;
                _onDataSync: Record<string, import("threadcomm").DataSync<any, any>>;
                parent: import("threadcomm").CommBase;
                __internal: Record<number, Record<number, (data: any, event: any) => void>>;
                __initalized: boolean;
                __expectedPorts: Record<string, boolean>;
                $INIT(threadName: string): Promise<void>;
                getSyncedQueue(threadId: string, queueId: string): import("threadcomm/Queue/SyncedQueue.js").SyncedQueue | undefined;
                addComm(comm: import("threadcomm").CommBase): void;
                createComm<T_2>(name: string, mergeObject?: T_2 | undefined): T_2 & import("threadcomm").CommBase;
                createCommManager(data: import("threadcomm/Meta/Manager/Manager.types.js").CommManagerData): import("threadcomm").CommManager;
                getComm(id: string): import("threadcomm").CommBase;
                getCommManager(id: string): import("threadcomm").CommManager;
                __throwError(message: string): never;
                getWorkerPort(): Promise<any>;
                __handleInternalMessage(data: any[], event: any): void;
                __isInternalMessage(data: any[]): boolean;
                __handleTasksDone(tasksId: string, mode: number, threadId: string, tid: string, tasksData: any): void;
                __handleTasksMessage(data: any[]): Promise<void>;
                __isTasks(data: any[]): boolean;
                registerTasks<T_1>(id: string | number, run: (data: T_1, onDone?: Function | undefined) => void, mode?: "async" | "deffered" | undefined): import("threadcomm").Task<T_1>;
                __hanldeDataSyncMessage(data: any[]): Promise<void>;
                __isDataSync(data: any[]): boolean;
                onDataSync<T_2, K_1>(dataType: string | number, onSync?: ((data: T_2) => void) | undefined, onUnSync?: ((data: K_1) => void) | undefined): import("threadcomm").DataSync<T_2, K_1>;
            };
            parentComm: import("threadcomm").CommBase;
            worldComm: import("threadcomm").CommBase;
            tasks: {
                data: {
                    syncTextures: import("threadcomm").Task<any>;
                };
                build: {
                    chunk: {
                        tasks: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").PriorityTask<import("Meta/Tasks/Tasks.types.js").BuildTasks>>;
                        run(data: import("Meta/Tasks/Tasks.types.js").BuildTasks): Promise<void>;
                    };
                    column: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").BuildTasks>;
                };
                voxelUpdate: {
                    erase: import("threadcomm").Task<UpdateTasksO>;
                    paint: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").PaintTasks>;
                };
                explosion: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").ExplosionTasks>;
                worldSun: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").WorldSunTask>;
                worldGen: {
                    generate: import("threadcomm").Task<import("Meta/Tasks/Tasks.types.js").GenerateTasks>;
                };
                anaylzer: {
                    propagation: import("threadcomm").Task<UpdateTasksO>;
                    update: import("threadcomm").Task<UpdateTasksO>;
                };
                flow: {
                    update: import("threadcomm").Task<UpdateTasksO>;
                    remove: import("threadcomm").Task<UpdateTasksO>;
                };
                rgb: {
                    update: import("threadcomm").Task<UpdateTasksO>;
                    remove: import("threadcomm").Task<UpdateTasksO>;
                };
                sun: {
                    update: import("threadcomm").Task<UpdateTasksO>;
                    remove: import("threadcomm").Task<UpdateTasksO>;
                };
            };
            tasksQueue: {
                tasks: Map<import("Meta/Tasks/Tasks.types.js").Priorities, [id: string, data: any][]>;
                addTasks(priority: import("Meta/Tasks/Tasks.types.js").Priorities, data: any, run: (data: any) => void): void;
                $INIT(): void;
            };
            hooks: {
                texturesRegistered: import("divine-hooks/Classes/SyncHook.js").SyncHook<{
                    textureDataHasBeenSet: boolean;
                    data: import("../../index.js").TextureTypeUVMap;
                    getTextureUV(data: import("../../index.js").ConstructorTextureData, overlay?: boolean): number;
                    setUVTextureMap(data: import("../../index.js").TextureTypeUVMap): void;
                    releaseTextureData(): void;
                    isReady(): boolean;
                }, void>;
            };
            syncSettings(data: import("../../Meta/Data/Settings/EngineSettings.types.js").EngineSettingsData): void;
            reStart(): void;
            isReady(): boolean;
            $INIT(): Promise<void>;
            getDataTool(): import("../../index.js").ConstructorDataTool;
        }) => void);
    };
    processor: {
        columnTool: import("../../Tools/Data/WorldData/ColumnDataTool.js").ColumnDataTool;
        chunkTool: import("../../Tools/Data/WorldData/ChunkDataTool.js").ChunkDataTool;
        goThroughColumn<T_3>(location: LocationData, run: (x: number, y: number, z: number, column: import("../../Tools/Data/WorldData/ColumnDataTool.js").ColumnDataTool) => void): void;
    };
    _flowChecks: number[][];
    runPropagation(data: UpdateTasksO): Promise<void>;
    runUpdate(data: UpdateTasksO): Promise<void>;
};
