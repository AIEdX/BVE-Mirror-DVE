export function InitNexusWorker(DVEN, onReady, onMessage, onRestart) {
    const messageFunctions = {
        "connect-world": (data, eventData) => {
            const port = eventData.ports[0];
            DVEN.worldComm.setWorldPort(port);
            onReady();
        },
        "sync-settings": (data, eventData) => {
            const settings = data[1];
            DVEN.syncSettings(settings);
        },
    };
    addEventListener("message", (event) => {
        const eventData = event.data;
        const message = eventData[0];
        if (messageFunctions[message]) {
            messageFunctions[message](eventData, event);
        }
    });
}
