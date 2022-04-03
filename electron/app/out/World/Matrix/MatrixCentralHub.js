/**# Matrix Thread Central Hub
 *---
 * Hanldes all syncing and releasing of data between chunk bound threads.
 */
export class MatrixCentralHub {
    DVEW;
    threads = {};
    constructor(DVEW) {
        this.DVEW = DVEW;
    }
    _threadMessageFunctions = {
        "matrix-sync-chunk": (data, event) => {
            const thread = data[1];
            const chunkX = data[2];
            const chunkY = data[3];
            const chunkZ = data[4];
            console.log("MATRIX SYNC CHUNK");
            console.log(thread, chunkX, chunkY, chunkZ);
            this.syncChunkInThread(thread, chunkX, chunkY, chunkZ);
        },
        "matrix-release-chunk": (data, event) => {
            const thread = data[1];
            const chunkX = data[2];
            const chunkY = data[3];
            const chunkZ = data[4];
            this.releaseChunkInThread(thread, chunkX, chunkY, chunkZ);
        },
        "sync-global-voxel-palette": (data, event) => {
            const thread = data[1];
            this.syncGlobalVoxelPaletteInThread(thread);
        },
        "sync-region-voxel-palette": (data, event) => {
            const thread = data[1];
            const regionX = data[2];
            const regionY = data[3];
            const regionZ = data[4];
            this.syncRegionVoxelPaletteInThread(thread, regionX, regionY, regionZ);
        },
        "release-region-voxel-palette": (data, event) => {
            const thread = data[1];
            const regionX = data[2];
            const regionY = data[3];
            const regionZ = data[4];
            this.releaseRegionVoxelPaletteInThread(thread, regionX, regionY, regionZ);
        },
    };
    registerThread(threadId, thread) {
        const channel = new MessageChannel();
        const port = channel.port1;
        thread.postMessage(["set-world-port"], [port]);
        this.threads[threadId] = thread;
        channel.port2.onmessage = (event) => {
            const data = event.data;
            if (data && data[0]) {
                const message = data[0];
                if (this._threadMessageFunctions[message]) {
                    this._threadMessageFunctions[message](data, event);
                }
            }
        };
    }
    syncChunk(chunkX, chunkY, chunkZ) {
        const chunkSABs = this.DVEW.matrix.createChunkSAB(chunkX, chunkY, chunkZ);
        if (!chunkSABs)
            return false;
        for (const threadId of Object.keys(this.threads)) {
            this.threads[threadId].postMessage([
                "sync-chunk",
                chunkSABs[0],
                chunkSABs[1],
                chunkX,
                chunkY,
                chunkZ,
            ]);
        }
    }
    syncChunkInThread(threadId, chunkX, chunkY, chunkZ) {
        const chunkSABs = this.DVEW.matrix.createChunkSAB(chunkX, chunkY, chunkZ);
        if (!chunkSABs)
            return false;
        console.log("SYNCYING THREAD");
        this.threads[threadId].postMessage([
            "sync-chunk",
            chunkSABs[0],
            chunkSABs[1],
            chunkX,
            chunkY,
            chunkZ,
        ]);
    }
    releaseChunk(chunkX, chunkY, chunkZ) {
        for (const threadId of Object.keys(this.threads)) {
            this.threads[threadId].postMessage([
                "release-chunk",
                chunkX,
                chunkY,
                chunkZ,
            ]);
        }
    }
    releaseChunkInThread(threadId, chunkX, chunkY, chunkZ) {
        this.threads[threadId].postMessage(["release-chunk", chunkX, chunkY, chunkZ]);
    }
    syncGlobalVoxelPalette() {
        const globalVoxelPalette = this.DVEW.worldGeneration.voxelPalette.getGlobalVoxelPalette();
        for (const threadId of Object.keys(this.threads)) {
            this.threads[threadId].postMessage([
                "sync-global-palette",
                globalVoxelPalette,
            ]);
        }
    }
    syncGlobalVoxelPaletteInThread(threadId) {
        const globalVoxelPalette = this.DVEW.worldGeneration.voxelPalette.getGlobalVoxelPalette();
        this.threads[threadId].postMessage([
            "sync-global-palette",
            globalVoxelPalette,
        ]);
    }
    syncRegionVoxelPalette(regionX, regionY, regionZ) {
        const region = this.DVEW.worldData.getRegion(regionX, regionY, regionZ);
        if (!region)
            return false;
        const regionVoxelPalette = region.palette;
        if (!regionVoxelPalette)
            return false;
        for (const threadId of Object.keys(this.threads)) {
            this.threads[threadId].postMessage([
                "sync-region-palette",
                regionVoxelPalette,
                regionX,
                regionY,
                regionZ,
            ]);
        }
    }
    syncRegionVoxelPaletteInThread(threadId, regionX, regionY, regionZ) {
        const region = this.DVEW.worldData.getRegion(regionX, regionY, regionZ);
        if (!region)
            return false;
        const regionVoxelPalette = region.palette;
        if (!regionVoxelPalette)
            return false;
        this.threads[threadId].postMessage([
            "sync-region-palette",
            regionVoxelPalette,
            regionX,
            regionY,
            regionZ,
        ]);
    }
    releaseRegionVoxelPalette(regionX, regionY, regionZ) {
        for (const threadId of Object.keys(this.threads)) {
            this.threads[threadId].postMessage([
                "release-region-palette",
                regionX,
                regionY,
                regionZ,
            ]);
        }
    }
    releaseRegionVoxelPaletteInThread(threadId, regionX, regionY, regionZ) {
        this.threads[threadId].postMessage([
            "release-region-palette",
            regionX,
            regionY,
            regionZ,
        ]);
    }
}
