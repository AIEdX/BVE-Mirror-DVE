import { EngineSettings } from "../../Data/Settings/EngineSettings.js";
import { TextureCreator } from "./TextureCreator.js";
import { TextureType } from "./TextureType.js";
export const TextureManager = {
    defaultTexturePath: "",
    textureTypes: new Map(),
    uvMap: {},
    getTextureIndex(data, overlay = false) {
        const [textureType, textureId, varation] = data;
        const type = this.getTextureType(textureType);
        if (!type)
            return NaN;
        return type.getTextureIndex(textureId, varation, overlay ? "overlay" : "main");
    },
    _ready: false,
    isReady() {
        return this._ready;
    },
    async $INIT() {
        TextureCreator.defineTextureDimensions(EngineSettings.settings.textures.textureSize, EngineSettings.settings.textures.mipMapSizes);
        for (const [key, type] of this.textureTypes) {
            await type.build();
        }
        this._ready = true;
    },
    $START_ANIMATIONS() {
        setInterval(() => {
            for (const [key, type] of this.textureTypes) {
                type.runAnimations();
            }
        }, 50);
    },
    generateTextureUVMap() {
        const uvMap = {};
        for (const [key, type] of this.textureTypes) {
            uvMap[key] = type.getTextureIndexMap();
        }
        this.uvMap = uvMap;
        return uvMap;
    },
    defineDefaultTexturePath(path) {
        this.defaultTexturePath = path;
    },
    getTextureType(id) {
        const texture = this.textureTypes.get(id);
        if (!texture)
            return false;
        return texture;
    },
    addTextureType(id) {
        const newType = new TextureType(id);
        this.textureTypes.set(id, newType);
        return newType;
    },
    clearTextureData() {
        this.textureTypes.forEach((_) => _.clearSegmentData());
    },
    registerTexture(textureData) {
        if (Array.isArray(textureData)) {
            for (const texture of textureData) {
                const type = this.getTextureType(texture.type);
                if (!type)
                    continue;
                type.addTexture(texture);
                continue;
            }
            return;
        }
        const type = this.getTextureType(textureData.type);
        if (!type)
            return;
        type.addTexture(textureData);
    },
    async createRawDataMap() {
        const map = new Map();
        for (const [typeKey, type] of this.textureTypes) {
            for (const [segKey, segment] of type.segments) {
                for (const data of segment.textures) {
                    if (!data.includeInRawDataMap)
                        continue;
                    if (!data.path && !data.rawData)
                        continue;
                    const key = `${type.id}|${data.id}|default`;
                    if (data.frames) {
                        for (let i = 1; i <= data.frames; i++) {
                            const rawData = await TextureCreator.loadImage(data.rawData
                                ? data.rawData[i - 1]
                                : type._getPath(data, `${key}-${i}`, type.extension));
                            map.set(`${key}-${i}`, rawData);
                        }
                    }
                    else {
                        const rawData = await TextureCreator.loadImage(data.rawData
                            ? data.rawData
                            : type._getPath(data, "default", type.extension));
                        map.set(key, rawData);
                    }
                    if (data.variations) {
                        for (const varId in data.variations) {
                            const varation = data.variations[varId];
                            if (!varation.includeInRawDataMap)
                                continue;
                            const key = `${type.id}|${data.id}|${varId}`;
                            if (data.frames) {
                                for (let i = 1; i <= data.frames; i++) {
                                    const rawData = await TextureCreator.loadImage(data.rawData
                                        ? data.rawData[i - 1]
                                        : type._getPath(data, `${key}-${i}`, type.extension));
                                    map.set(`${key}-${i}`, rawData);
                                }
                            }
                            else {
                                const rawData = await TextureCreator.loadImage(data.rawData
                                    ? data.rawData
                                    : type._getPath(data, varId, type.extension));
                                map.set(key, rawData);
                            }
                        }
                    }
                }
            }
        }
        return map;
    },
};
TextureManager.addTextureType("#dve_solid");
TextureManager.addTextureType("#dve_flora");
TextureManager.addTextureType("#dve_liquid");
