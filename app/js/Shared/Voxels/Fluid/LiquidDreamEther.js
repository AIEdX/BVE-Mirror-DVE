export class LiquidDreamEther {
    voxelHelper;
    constructor(voxelHelper) {
        this.voxelHelper = voxelHelper;
    }
    data = {
        name: "Liquid Dream Ether",
        shapeId: "Box",
        id: "dve:liquiddreamether",
        substance: "fluid",
        defaultState: ["dve:liquiddreamether", 0],
    };
    hooks = {};
    trueShapeId = 0;
    getShapeId(voxelData) {
        return this.trueShapeId;
    }
    getUVs(uvs, chunkX, chunkZ, voxelExposedFaceEncodedBit, voxelData) {
        let uv = this.voxelHelper.textureManager.getTextureUV("fluid", "liquid-dream-ether", "still-1");
        if (this.voxelHelper.util.isFaceExposexd(voxelExposedFaceEncodedBit, "top")) {
            uvs.push(uv);
        }
        if (this.voxelHelper.util.isFaceExposexd(voxelExposedFaceEncodedBit, "bottom")) {
            uvs.push(uv);
        }
        if (this.voxelHelper.util.isFaceExposexd(voxelExposedFaceEncodedBit, "east")) {
            uvs.push(uv);
        }
        if (this.voxelHelper.util.isFaceExposexd(voxelExposedFaceEncodedBit, "west")) {
            uvs.push(uv);
        }
        if (this.voxelHelper.util.isFaceExposexd(voxelExposedFaceEncodedBit, "south")) {
            uvs.push(uv);
        }
        if (this.voxelHelper.util.isFaceExposexd(voxelExposedFaceEncodedBit, "north")) {
            uvs.push(uv);
        }
    }
    getAO(data) {
        if (data.exposedFaces[0]) {
            data.aoTemplate.push(1, 1, 1, 1);
        }
        if (data.exposedFaces[1]) {
            data.aoTemplate.push(1, 1, 1, 1);
        }
        if (data.exposedFaces[2]) {
            data.aoTemplate.push(1, 1, 1, 1);
        }
        if (data.exposedFaces[3]) {
            data.aoTemplate.push(1, 1, 1, 1);
        }
        if (data.exposedFaces[4]) {
            data.aoTemplate.push(1, 1, 1, 1);
        }
        if (data.exposedFaces[5]) {
            data.aoTemplate.push(1, 1, 1, 1);
        }
    }
    getLight(data) {
        this.voxelHelper.calculateVoxelLight(data, this);
    }
    process(data) {
        if (data.exposedFaces[0]) {
            data.sunLightTemplate.push(0b1111, 0b1111, 0b1111, 0b1111);
        }
        if (data.exposedFaces[1]) {
            data.sunLightTemplate.push(0b1111, 0b1111, 0b1111, 0b1111);
        }
        if (data.exposedFaces[2]) {
            data.sunLightTemplate.push(0b1111, 0b1111, 0b1111, 0b1111);
        }
        if (data.exposedFaces[3]) {
            data.sunLightTemplate.push(0b1111, 0b1111, 0b1111, 0b1111);
        }
        if (data.exposedFaces[4]) {
            data.sunLightTemplate.push(0b1111, 0b1111, 0b1111, 0b1111);
        }
        if (data.exposedFaces[5]) {
            data.sunLightTemplate.push(0b1111, 0b1111, 0b1111, 0b1111);
        }
    }
}
