import type { AddVoxelData } from "Meta/Data/WorldData.types";
import { DataTool } from "../../Tools/Data/DataTool.js";
import type { RawVoxelData } from "Meta/Data/Voxels/Voxel.types.js";
import { LocationBoundTool } from "../Classes/LocationBoundTool.js";
export declare class BrushTool extends LocationBoundTool {
    data: AddVoxelData;
    _update: boolean;
    _dt: DataTool;
    setData(data: Partial<AddVoxelData>): this;
    setId(id: string, state?: number, shapeState?: number): this;
    setDimension(dimensionId: string): this;
    setSecondaryId(id: string, state?: number): this;
    setState(state: number): this;
    setShapeState(state: number): this;
    setLevel(level: number): this;
    setLevelState(levelState: number): this;
    clear(): void;
    setRaw(data: RawVoxelData): this;
    getRaw(): RawVoxelData;
    getData(): AddVoxelData;
    paint(): this;
    erase(): this;
    start(): this;
    stop(): this;
}
