export class FullBoxDiagonalIntersection {
    shapeHelper;
    id = "FullBoxDiagonalIntersection";
    width = 0.5;
    depth = 0.5;
    height = 0.5;
    constructor(shapeHelper) {
        this.shapeHelper = shapeHelper;
    }
    faces = {
        0: (data) => {
            data.positions.push(data.position.x - this.width, data.position.y + this.height, data.position.z + -this.depth, data.position.x + this.width, data.position.y + this.height, data.position.z + this.depth, data.position.x + this.width, data.position.y + -this.height, data.position.z + this.depth, data.position.x - this.width, data.position.y + -this.height, data.position.z + -this.depth);
            data.indices.push(data.indicieIndex + 2, data.indicieIndex + 1, data.indicieIndex, data.indicieIndex + 3, data.indicieIndex + 2, data.indicieIndex);
            const uv = data.unTemplate[data.uvTemplateIndex];
            data.uvs.push(0, 0, uv, 1, 0, uv, 1, 1, uv, 0, 1, uv);
            this.shapeHelper.calculateAOColor(data.AOColors, data.aoTemplate, data.aoIndex);
            return {
                newIndicieIndex: data.indicieIndex + 4,
                newUVTemplateIndex: data.uvTemplateIndex + 1,
                newRGBLightIndex: data.rgbLightIndex + 4,
                newColorIndex: data.colorIndex + 4,
                newSunLightIndex: data.sunlightIndex + 4,
                newAOIndex: data.aoIndex + 4,
            };
        },
        1: (data) => {
            data.positions.push(data.position.x + -this.width, data.position.y + this.height, data.position.z + this.depth, data.position.x + this.width, data.position.y + this.height, data.position.z + -this.depth, data.position.x + this.width, data.position.y + -this.height, data.position.z + -this.depth, data.position.x + -this.width, data.position.y + -this.height, data.position.z + this.depth);
            data.indices.push(data.indicieIndex + 2, data.indicieIndex + 1, data.indicieIndex, data.indicieIndex + 3, data.indicieIndex + 2, data.indicieIndex);
            const uv = data.unTemplate[data.uvTemplateIndex];
            data.uvs.push(0, 0, uv, 1, 0, uv, 1, 1, uv, 0, 1, uv);
            this.shapeHelper.calculateAOColor(data.AOColors, data.aoTemplate, data.aoIndex);
            return {
                newIndicieIndex: data.indicieIndex + 4,
                newUVTemplateIndex: data.uvTemplateIndex + 1,
                newRGBLightIndex: data.rgbLightIndex + 4,
                newColorIndex: data.colorIndex + 4,
                newSunLightIndex: data.sunlightIndex + 4,
                newAOIndex: data.aoIndex + 4,
            };
        },
    };
    addToChunkMesh(data) {
        data.position.x += this.width;
        data.position.z += this.depth;
        data.position.y += this.height;
        const newData = this.faces[0](data);
        data.indicieIndex = newData.newIndicieIndex;
        data.uvTemplateIndex = newData.newUVTemplateIndex;
        data.rgbLightIndex = newData.newRGBLightIndex;
        data.aoIndex = newData.newAOIndex;
        data.colorIndex = newData.newColorIndex;
        data.sunlightIndex = newData.newSunLightIndex;
        this.faces[1](data);
        return {
            newIndicieIndex: data.indicieIndex,
            newUVTemplateIndex: data.uvTemplateIndex,
            newColorIndex: data.colorIndex,
            newRGBLightIndex: data.rgbLightIndex,
            newSunLightIndex: data.sunlightIndex,
            newAOIndex: data.aoIndex,
        };
    }
}
