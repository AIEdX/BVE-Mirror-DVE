export const ShapeManager = {
    shapes: {},
    shapeMap: {},
    shapeCount: 0,
    registerShape(shapeObject) {
        this.shapes[this.shapeCount] = shapeObject;
        this.shapeMap[shapeObject.id] = this.shapeCount;
        this.shapeCount++;
    },
    getShape(shapeId) {
        if (!this.shapes[shapeId]) {
            throw new Error(`%${shapeId} does not exists.`);
        }
        return this.shapes[shapeId];
    },
    getShapeMap() {
        return this.shapeMap;
    },
};
