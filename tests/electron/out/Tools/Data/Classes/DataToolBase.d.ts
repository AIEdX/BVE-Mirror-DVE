import type { RemoteTagManager } from "Libs/DivineBinaryTags/RemoteTagManager";
import type { LocationData } from "Meta/Data/CommonTypes";
export declare class DataToolWorldBound {
    dimension: string;
    position: {
        x: number;
        y: number;
        z: number;
    };
    setDimension(dimensionId: string): this;
    getLocation(): LocationData;
    setPosition(x: number, y: number, z: number): this;
}
export declare class DataToolBase extends DataToolWorldBound {
    tags: RemoteTagManager;
    _c: ArrayBuffer | SharedArrayBuffer | DataView;
    constructor();
    getTagValue(id: string): number;
    setTagValue(id: string, value: number): boolean;
    getArrayTagValue(id: string, index: number): number;
    setArrayTagValue(id: string, index: number, value: number): number | void;
    setBuffer(buffer: ArrayBuffer | DataView | SharedArrayBuffer): void;
    getBufferSize(): number;
}
export declare class PositionBoundDataTool extends DataToolBase {
    constructor();
    getPositionData(): {
        x: number;
        y: number;
        z: number;
    };
    setPositionData(x: number, y: number, z: number): {
        x: number;
        y: number;
        z: number;
    };
    setDimensionId(dimensionId: string): void;
    getDimensionId(): string;
    getLocationData(): LocationData;
}
