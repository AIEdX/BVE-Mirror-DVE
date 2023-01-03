import type { DataHandler } from "Meta/Interfaces/DataLoader/DataHandler.type";
import type { LocationData } from "Meta/Data/CommonTypes.js";
import { RegionDataTool } from "../../Tools/Data/WorldData/RegionDataTool.js";
import { ColumnDataTool } from "../../Tools/Data/WorldData/ColumnDataTool.js";
import { ChunkDataTool } from "../../Tools/Data/WorldData/ChunkDataTool.js";
export declare const WorldDataSerialize: {
    dataHanlder: DataHandler | null;
    regions: RegionDataTool;
    columns: ColumnDataTool;
    chunks: ChunkDataTool;
    $INIT(handler: DataHandler): void;
    loadRegion(location: LocationData): Promise<void>;
    saveRegion(location: LocationData): Promise<false | undefined>;
    serializeRegion(location: LocationData): false | [location: LocationData, buffer: ArrayBuffer][];
    serializeColumn(location: LocationData): false | Uint8Array;
    saveColumn(location: LocationData): Promise<false | undefined>;
    deSerializeRegion(regionBuffers: ArrayBuffer[] | SharedArrayBuffer[]): void;
    deSerializeColumn(columnBuffer: ArrayBuffer | SharedArrayBuffer): void;
    loadColumn(location: LocationData): Promise<void>;
    _readDataIntoBuffer(offset: number, target: Uint8Array, source: ArrayBuffer | SharedArrayBuffer, sourceOffset?: number, sourceLength?: number): number;
};
