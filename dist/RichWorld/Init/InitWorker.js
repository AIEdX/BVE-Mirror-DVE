import { RichWorldThreadState } from "../Threads/RichWorldThreadState.js";
import { ThreadComm } from "threadcomm";
export async function InitWorker(DVERW) {
    let parent = "render";
    if (DVERW.environment == "node") {
        parent = "server";
    }
    await ThreadComm.$INIT("rich-world", parent);
    await DVERW.UTIL.createPromiseCheck({
        check: () => {
            return RichWorldThreadState.isReady();
        },
        checkInterval: 1,
    });
}
