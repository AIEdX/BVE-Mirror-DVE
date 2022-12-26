/// <reference types="babylonjs" />
import type { DVERInitData } from "Meta/Render/DVER";
import type { EngineSettingsData } from "Meta/Data/Settings/EngineSettings.types";
export declare const DVER: {
    UTIL: {
        createPromiseCheck: (data: {
            check: () => boolean;
            onReady?: (() => any) | undefined;
            checkInterval: number;
            failTimeOut?: number | undefined;
            onFail?: (() => any) | undefined;
        }) => Promise<boolean>;
        getEnviorment(): "browser" | "node";
        getAQueue<T>(): import("../Global/Util/Queue.js").Queue<T>;
        merge<T_1, K>(target: T_1, newObject: K): T_1 & K;
        degtoRad(degrees: number): number;
        radToDeg(radians: number): number;
    };
    TC: {
        threadNumber: number;
        threadName: string;
        environment: "browser" | "node";
        _comms: Record<string, import("../Libs/ThreadComm/Comm/Comm.js").CommBase>;
        _commManageras: Record<string, import("../Libs/ThreadComm/Manager/CommManager.js").CommManager>;
        _tasks: Record<string, import("../Libs/ThreadComm/Tasks/Tasks.js").Task<any>>;
        _queues: Map<string, Map<string, import("../Libs/ThreadComm/Queue/SyncedQueue.js").SyncedQueue>>;
        _onDataSync: Record<string, import("../Libs/ThreadComm/Data/DataSync.js").DataSync<any, any>>;
        parent: import("../Libs/ThreadComm/Comm/Comm.js").CommBase;
        __internal: Record<number, Record<number, (data: any, event: any) => void>>;
        __initalized: boolean;
        __expectedPorts: Record<string, boolean>;
        $INIT(threadName: string): Promise<void>;
        getSyncedQueue(threadId: string, queueId: string): import("../Libs/ThreadComm/Queue/SyncedQueue.js").SyncedQueue | undefined;
        addComm(comm: import("../Libs/ThreadComm/Comm/Comm.js").CommBase): void;
        createComm<T_2>(name: string, mergeObject?: T_2): T_2 & import("../Libs/ThreadComm/Comm/Comm.js").CommBase;
        createCommManager(data: import("../Libs/ThreadComm/Meta/Manager/Manager.types.js").CommManagerData): import("../Libs/ThreadComm/Manager/CommManager.js").CommManager;
        getComm(id: string): import("../Libs/ThreadComm/Comm/Comm.js").CommBase;
        getCommManager(id: string): import("../Libs/ThreadComm/Manager/CommManager.js").CommManager;
        __throwError(message: string): never;
        getWorkerPort(): Promise<any>;
        __handleInternalMessage(data: any[], event: any): void;
        __isInternalMessage(data: any[]): boolean;
        __handleTasksDone(tasksId: string, mode: number, threadId: string, tid: string, tasksData: any): void;
        __handleTasksMessage(data: any[]): Promise<void>;
        __isTasks(data: any[]): boolean;
        registerTasks<T_3>(id: string | number, run: (data: T_3, onDone?: Function | undefined) => void, mode?: "async" | "deffered"): import("../Libs/ThreadComm/Tasks/Tasks.js").Task<T_3>;
        __hanldeDataSyncMessage(data: any[]): Promise<void>;
        __isDataSync(data: any[]): boolean;
        onDataSync<T_4, K_1>(dataType: string | number, onSync?: ((data: T_4) => void) | undefined, onUnSync?: ((data: K_1) => void) | undefined): import("../Libs/ThreadComm/Data/DataSync.js").DataSync<T_4, K_1>;
    };
    currentCom: import("../Libs/ThreadComm/Comm/Comm.js").CommBase;
    worldComm: import("../Libs/ThreadComm/Comm/Comm.js").CommBase;
    nexusComm: import("../Libs/ThreadComm/Comm/Comm.js").CommBase & {
        $INIT(): void;
    };
    dataComm: import("../Libs/ThreadComm/Comm/Comm.js").CommBase & {
        $INIT(): void;
    };
    fxComm: import("../Libs/ThreadComm/Comm/Comm.js").CommBase & {
        $INIT(): void;
    };
    richWorldComm: import("../Libs/ThreadComm/Comm/Comm.js").CommBase & {
        $INIT(): void;
    };
    constructorCommManager: import("../Libs/ThreadComm/Manager/CommManager.js").CommManager & {
        $INIT(): void;
        createConstructors(path: string, numBuilders?: number): void;
        setConstructors(constructors: Worker[]): void;
        syncSettings(data: any): void;
    };
    settings: {
        settings: {
            nexus: {
                enabled: boolean;
                autoSyncChunks: boolean;
                autoSyncVoxelPalette: boolean;
            };
            data: {
                enabled: boolean;
                autoSyncChunks: boolean;
            };
            fx: {
                enabled: boolean;
                autoSyncChunks: boolean;
                autoSyncVoxelPalette: boolean;
            };
            server: {
                enabled: boolean;
            };
            richWorld: {
                enabled: boolean;
                autoSyncChunks: boolean;
                autoSyncVoxelPalette: boolean;
            };
            textures: {
                animationTime: number;
                width: number;
                height: number;
            };
            updating: {
                autoRebuild: boolean;
            };
            world: {
                maxX: number;
                minX: number;
                maxZ: number;
                minZ: number;
                maxY: number;
                minY: number;
            };
            regions: {
                regionXPow2: number;
                regionYPow2: number;
                regionZPow2: number;
            };
            chunks: {
                autoHeightMap: boolean;
                chunkXPow2: number;
                chunkYPow2: number;
                chunkZPow2: number;
            };
            voxels: {
                doColors: boolean;
            };
            flow: {
                enable: boolean;
            };
            lighting: {
                doAO: boolean;
                doSunLight: boolean;
                doRGBLight: boolean;
                autoRGBLight: boolean;
                autoSunLight: boolean;
            };
            meshes: {
                clearChachedGeometry: boolean;
                checkMagmaCollisions: boolean;
                checkLiquidCollisions: boolean;
                checkFloraCollisions: boolean;
                checkSolidCollisions: boolean;
                seralize: boolean;
                pickable: boolean;
            };
            materials: {
                mode: string;
                doAO: boolean;
                doSunLight: boolean;
                doRGBLight: boolean;
                disableFloraShaderEffects: boolean;
                disableLiquidShaderEffects: boolean;
            };
        };
        getSettings(): EngineSettingsData;
        syncSettings(data: EngineSettingsData): void;
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
            _hashMask(n: number): number;
            hash(x: number, y: number, z: number): number;
            chunkXPow2: number;
            chunkYPow2: number;
            chunkZPow2: number;
            chunkXSize: number;
            chunkYSize: number;
            chunkZSize: number;
            chunkTotalVoxels: number;
            chunkArea: number;
            regionColumnWidth: number;
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
            __columnPosition: {
                x: number;
                z: number;
                y: number;
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
            getChunkKey(chunkPOS: import("../Meta/Util.types.js").Vector3): string;
            getChunkKeyFromPosition(x: number, y: number, z: number): string;
            getRegionKey(regionPOS: import("../Meta/Util.types.js").Vector3): string;
            getRegionKeyFromPosition(x: number, y: number, z: number): string;
            getVoxelPositionFromChunkPosition(x: number, y: number, z: number, chunkPOS: import("../Meta/Util.types.js").Vector3): {
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
            _columnIndexPosition: {
                x: number;
                y: number;
                z: number;
            };
            getColumnIndex(x: number, z: number, y: number): number;
            getChunkColumnIndex(y: number): number;
            getColumnKey(x: number, z: number, y?: number): string;
            getColumnPosition(x: number, z: number, y?: number): {
                x: number;
                z: number;
                y: number;
            };
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
    };
    renderManager: {
        fogOptions: import("../Meta/Render/Render/Render.options.types.js").RenderFogOptions;
        meshRegister: {
            _dimensions: import("../Meta/Render/Scene/MeshRegister.types.js").MeshRegisterDimensions;
            $INIT(): void;
            dimensions: {
                add(id: string): Map<any, any>;
                get(id: string): Map<string, import("../Meta/Render/Scene/MeshRegister.types.js").MushRegisterRegion> | undefined;
                remove(id: string): boolean;
            };
            region: {
                add(dimensionId: string, x: number, y: number, z: number): import("../Meta/Render/Scene/MeshRegister.types.js").MushRegisterRegion;
                remove(dimensionId: string, x: number, z: number, y?: number): boolean;
                _getRegionData(): import("../Meta/Render/Scene/MeshRegister.types.js").MushRegisterRegion;
                get(dimensionId: string, x: number, y: number, z: number): false | import("../Meta/Render/Scene/MeshRegister.types.js").MushRegisterRegion;
            };
            column: {
                add(dimensionId: string, x: number, z: number, y?: number): import("../Meta/Render/Scene/MeshRegister.types.js").MeshRegisterColumn;
                remove(dimensionId: string, x: number, z: number, y?: number): boolean;
                _getColumnData(position: [x: number, y: number, z: number]): import("../Meta/Render/Scene/MeshRegister.types.js").MeshRegisterColumn;
                get(dimensionId: string, x: number, z: number, y?: number): false | import("../Meta/Render/Scene/MeshRegister.types.js").MeshRegisterColumn | undefined;
            };
            chunk: {
                add(dimensionId: string, x: number, y: number, z: number, mesh: BABYLON.Mesh, substance: import("../Meta/index.js").VoxelTemplateSubstanceType): Map<import("../Meta/index.js").VoxelTemplateSubstanceType, import("../Meta/Render/Scene/MeshRegister.types.js").MeshRegisterChunk>;
                _getChunkData(mesh: BABYLON.Mesh): import("../Meta/Render/Scene/MeshRegister.types.js").MeshRegisterChunk;
                remove(dimensionId: string, x: number, y: number, z: number, substance: import("../Meta/index.js").VoxelTemplateSubstanceType): boolean;
                get(dimensionId: string, x: number, y: number, z: number, substance: import("../Meta/index.js").VoxelTemplateSubstanceType): false | import("../Meta/Render/Scene/MeshRegister.types.js").MeshRegisterChunk;
            };
        };
        meshManager: {
            scene: BABYLON.Scene | null;
            runningUpdate: boolean;
            meshes: Record<import("../Meta/index.js").VoxelSubstanceType, Record<string, Record<string, BABYLON.Mesh>>>;
            meshMakers: Record<import("../Meta/index.js").VoxelSubstanceType, import("./Render/Meshes/DVEMesh.js").DVEMesh>;
            $INIT(scene: BABYLON.Scene): void;
            removeChunk(data: import("../Meta/Tasks/RenderTasks.types.js").RemoveChunkMeshTasks): void;
            updateChunk(data: import("../Meta/Tasks/RenderTasks.types.js").SetChunkMeshTask): void;
            removeColumn(data: import("../Meta/Data/CommonTypes.js").LocationData): void;
            handleItemUpdate(x: number, y: number, z: number, data: any): void;
            handleEntityUpdate(x: number, y: number, z: number, data: any): void;
        };
        meshCuller: {
            $INIT(scene: BABYLON.Scene): void;
        };
        fogData: BABYLON.Vector4;
        effectOptions: import("../Meta/Render/Render/Render.options.types.js").RenderEffectsOptions;
        fo: {
            activeCamera: import("./Render/FloatingOrigin/FOCamera.js").FOCamera | null;
            activeNode: import("./Render/FloatingOrigin/FONode.js").FONode | null;
            getCamera(scene: BABYLON.Scene, name: string, position?: BABYLON.Vector3, canvas?: HTMLCanvasElement | undefined): import("./Render/FloatingOrigin/FOCamera.js").FOCamera;
            getNode(scene: BABYLON.Scene, name: string): import("./Render/FloatingOrigin/FONode.js").FONode;
        };
        shaderBuilder: {
            buildVertexShader(data: import("../Meta/Render/Shaders/Shader.types.js").VertexShaderCreateData, setPosition: string, doAO?: boolean, vars?: string): string;
            buildFragmentShader(fragMain: string, doAO?: boolean, vars?: string): string;
            getDefaultVertexShader(voxelSubstance: import("../Meta/index.js").VoxelTemplateSubstanceType | "Item", data: import("../Meta/Render/Shaders/Shader.types.js").VertexShaderCreateData): string;
            getDefaultFragmentShader(voxelSubstance: import("../Meta/index.js").VoxelTemplateSubstanceType | "Item"): string;
            getSkyBoxVertexShader(): string;
            getSkyBoxFragmentShader(): string;
        };
        textureCreator: {
            context: CanvasRenderingContext2D | null;
            imgWidth: number;
            imgHeight: number;
            _mipMapSizes: number[][];
            defineTextureDimensions(width: number, height: number): void;
            setUpImageCreation(): void;
            createMaterialTexture(name: string, scene: BABYLON.Scene, images: string[], width?: number, height?: number): Promise<BABYLON.RawTexture2DArray[]>;
            _createTextures(name: string, scene: BABYLON.Scene, images: string[], width: number, height: number): Promise<BABYLON.RawTexture2DArray>;
            _loadImages(imgPath: string, width: number, height: number): Promise<Uint8ClampedArray>;
            _combineImageData(totalLength: number, arrays: Uint8ClampedArray[]): Uint8ClampedArray;
        };
        animationManager: {
            animatedMaterials: Record<import("../Meta/index.js").VoxelSubstanceType | "Item", BABYLON.ShaderMaterial>;
            animCount: number;
            animations: {
                uniformShaderId: string;
                keys: number[];
                currentFrame: number;
                currentCount: number;
                keyCounts: number[];
                substance: import("../Meta/index.js").VoxelSubstanceType | "Item";
            }[];
            registerAnimations(voxelSubstanceType: import("../Meta/index.js").VoxelSubstanceType | "Item", animations: number[][], animationTimes: number[][], overlay?: boolean): import("../Meta/Render/Animations/Animation.types.js").ShaderAnimationData;
            registerMaterial(voxelSubstanceType: import("../Meta/index.js").VoxelSubstanceType | "Item", material: BABYLON.ShaderMaterial): void;
            startAnimations(): void;
        };
        solidMaterial: import("./Render/Materials/DVEMaterial.js").DVEMaterial;
        floraMaterial: import("./Render/Materials/DVEMaterial.js").DVEMaterial;
        liquidMaterial: import("./Render/Materials/DVEMaterial.js").DVEMaterial;
        magmaMaterial: import("./Render/Materials/DVEMaterial.js").DVEMaterial;
        itemMaterial: import("./Render/Materials/DVEMaterial.js").DVEMaterial;
        solidMesh: import("./Render/Meshes/DVEMesh.js").DVEMesh;
        floraMesh: import("./Render/Meshes/DVEMesh.js").DVEMesh;
        liquidMesh: import("./Render/Meshes/DVEMesh.js").DVEMesh;
        magmaMesh: import("./Render/Meshes/DVEMesh.js").DVEMesh;
        itemMesh: import("./Render/Meshes/DVEMesh.js").DVEMesh;
        solidStandardMaterial: {
            material: BABYLON.StandardMaterial | null;
            plugin: import("./Render/Materials/Standard/SolidMaterial.bjsmp.js").SolidMaterialPlugin | null;
            $INIT(texture: BABYLON.RawTexture2DArray, scnee: BABYLON.Scene): void;
            getMaterial(): BABYLON.StandardMaterial;
        };
        liquidStandardMaterial: {
            material: BABYLON.StandardMaterial | null;
            reflectionprobe: BABYLON.RenderTargetTexture | null;
            plugin: import("./Render/Materials/Standard/LiquidMaterial.bjsmp.js").LiquidMaterialPlugin | null;
            $INIT(texture: BABYLON.RawTexture2DArray, scene: BABYLON.Scene): void;
            getMaterial(): BABYLON.StandardMaterial;
            addToRenderList(mesh: BABYLON.Mesh): void;
        };
        skyBoxMaterial: {
            material: BABYLON.ShaderMaterial | null;
            time: number;
            getMaterial(): BABYLON.ShaderMaterial | null;
            updateFogOptions(data: BABYLON.Vector4): void;
            setSunLightLevel(level: number): void;
            setBaseLevel(level: number): void;
            updateMaterialSettings(settings: EngineSettingsData): void;
            createMaterial(scene: BABYLON.Scene): BABYLON.ShaderMaterial;
            overrideMaterial(material: any): void;
            runEffects(): void;
        };
        scene: BABYLON.Scene | null;
        updateFogOptions(options: import("../Meta/Util.types.js").RecursivePartial<import("../Meta/Render/Render/Render.options.types.js").RenderFogOptions>): void;
        _setFogData(): void;
        $INIT(scene: BABYLON.Scene): void;
        updateShaderEffectOptions(options: import("../Meta/Util.types.js").RecursivePartial<import("../Meta/Render/Render/Render.options.types.js").RenderEffectsOptions>): void;
        syncSettings(settings: EngineSettingsData): void;
        getScene(): BABYLON.Scene | null;
        createSkyBoxMaterial(scene?: BABYLON.Scene | undefined): BABYLON.ShaderMaterial | null;
        setSunLevel(level: number): void;
        setBaseLevel(level: number): void;
    };
    meshManager: {
        scene: BABYLON.Scene | null;
        runningUpdate: boolean;
        meshes: Record<import("../Meta/index.js").VoxelSubstanceType, Record<string, Record<string, BABYLON.Mesh>>>;
        meshMakers: Record<import("../Meta/index.js").VoxelSubstanceType, import("./Render/Meshes/DVEMesh.js").DVEMesh>;
        $INIT(scene: BABYLON.Scene): void;
        removeChunk(data: import("../Meta/Tasks/RenderTasks.types.js").RemoveChunkMeshTasks): void;
        updateChunk(data: import("../Meta/Tasks/RenderTasks.types.js").SetChunkMeshTask): void;
        removeColumn(data: import("../Meta/Data/CommonTypes.js").LocationData): void;
        handleItemUpdate(x: number, y: number, z: number, data: any): void;
        handleEntityUpdate(x: number, y: number, z: number, data: any): void;
    };
    data: {
        worldBounds: {
            bounds: {
                MinZ: number;
                MaxZ: number;
                MinX: number;
                MaxX: number;
                MinY: number;
                MaxY: number;
            };
            _hashMask(n: number): number;
            hash(x: number, y: number, z: number): number;
            chunkXPow2: number;
            chunkYPow2: number;
            chunkZPow2: number;
            chunkXSize: number;
            chunkYSize: number;
            chunkZSize: number;
            chunkTotalVoxels: number;
            chunkArea: number;
            regionColumnWidth: number;
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
            __columnPosition: {
                x: number;
                z: number;
                y: number;
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
            getChunkKey(chunkPOS: import("../Meta/Util.types.js").Vector3): string;
            getChunkKeyFromPosition(x: number, y: number, z: number): string;
            getRegionKey(regionPOS: import("../Meta/Util.types.js").Vector3): string;
            getRegionKeyFromPosition(x: number, y: number, z: number): string;
            getVoxelPositionFromChunkPosition(x: number, y: number, z: number, chunkPOS: import("../Meta/Util.types.js").Vector3): {
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
            _columnIndexPosition: {
                x: number;
                y: number;
                z: number;
            };
            getColumnIndex(x: number, z: number, y: number): number;
            getChunkColumnIndex(y: number): number;
            getColumnKey(x: number, z: number, y?: number): string;
            getColumnPosition(x: number, z: number, y?: number): {
                x: number;
                z: number;
                y: number;
            };
        };
    };
    textureManager: {
        defaultTexturePath: string;
        processedTextureData: import("../Meta/index.js").TextureProccesedData;
        overlayProcessedTextureData: import("../Meta/index.js").TextureProccesedData;
        textureData: import("../Meta/index.js").TextureData;
        textureExtension: Record<import("../Meta/index.js").TextureTypes, string>;
        textures: Record<import("../Meta/index.js").TextureTypes, import("../Meta/index.js").TextureData[]>;
        uvTextureMap: Record<import("../Meta/index.js").TextureTypes, Record<string, number>>;
        overylayTextures: Record<import("../Meta/index.js").TextureTypes, import("../Meta/index.js").TextureData[]>;
        overlayUVTextureMap: Record<import("../Meta/index.js").TextureTypes, Record<string, number>>;
        normalMapTextures: Record<import("../Meta/index.js").TextureTypes, import("../Meta/index.js").TextureData[]>;
        noramlMapUVTexturesMap: Record<import("../Meta/index.js").TextureTypes, Record<string, number>>;
        textureTypes: import("../Meta/index.js").TextureTypes[];
        _processVariations(texture: import("../Meta/index.js").TextureData, texturePaths: string[], animations: Record<import("../Meta/index.js").TextureTypes, number[][]>, textureAnimatioTimes: Record<import("../Meta/index.js").TextureTypes, number[][]>, extension: string, count: number, path: string, textureType: import("../Meta/index.js").TextureTypes, overlay?: boolean, normalMap?: boolean): number;
        generateTexturesData(overlay?: boolean, normalMap?: boolean): void;
        defineDefaultTexturePath(path: string): void;
        defineDefaultTextureExtension(textureType: import("../Meta/index.js").TextureTypes, ext: string): void;
        getTextureUV(textureType: import("../Meta/index.js").TextureTypes, textureId: string, varation?: string | undefined): number;
        registerTexture(textureType: import("../Meta/index.js").TextureTypes, textureData: import("../Meta/index.js").TextureData): void;
        releaseTextureData(): void;
    };
    renderedEntites: {
        scene: BABYLON.Scene | null;
        entityTemplate: Record<string, {
            template: import("../Meta/index.js").RenderedEntity;
            data: import("../Meta/index.js").RenderedEntityData;
        }>;
        loaedEntities: Record<import("../Meta/index.js").EntityTypes, Record<string, import("../Meta/index.js").RenderedEntityInterface>>;
        setScene(scene: BABYLON.Scene): void;
        registerEntity(id: string, entityData: import("../Meta/index.js").RenderedEntityData, renderedEntity: import("../Meta/index.js").RenderedEntity): void;
        spawnEntity(entityId: string, identiferId: string, positionSBA: SharedArrayBuffer, statesSBA: SharedArrayBuffer): void;
        deSpawnEntity(entityId: string, identiferId: string): false | undefined;
    };
    tasks: {
        setChunk: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<import("../Meta/Tasks/RenderTasks.types.js").SetChunkMeshTask>;
        removeChunk: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<import("../Meta/Tasks/RenderTasks.types.js").RemoveChunkMeshTasks>;
        removeColumn: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<import("../Meta/Data/CommonTypes.js").LocationData>;
        removeColumnsOutsideRadius: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<import("../Meta/Tasks/RenderTasks.types.js").RemoveChunksOutsideDistance>;
    };
    _handleOptions(): void;
    syncSettingsWithWorkers(data: EngineSettingsData): void;
    reStart(data: EngineSettingsData): Promise<void>;
    $INIT(initData: DVERInitData): Promise<void>;
    $SCENEINIT(data: {
        scene: BABYLON.Scene;
    }): Promise<void>;
    __createWorker(path: string): Worker;
};
export declare type DivineVoxelEngineRender = typeof DVER;
