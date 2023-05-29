import { Hooks } from "divine-hooks";
export const DataHooks = {
    dimension: {
        onRegisterDimension: Hooks.getSyncHook(),
    },
    chunk: {
        onGetAsync: Hooks.getAsyncHook(),
        onGetSync: Hooks.getSyncHook(),
        onNew: Hooks.getAsyncHook(),
        onRemove: Hooks.getSyncHook(),
    },
    column: {
        onGetAsync: Hooks.getAsyncHook(),
        onGetSync: Hooks.getSyncHook(),
        onNew: Hooks.getAsyncHook(),
        onRemove: Hooks.getSyncHook(),
    },
    region: {
        onGetAsync: Hooks.getAsyncHook(),
        onGetSync: Hooks.getSyncHook(),
        onNew: Hooks.getAsyncHook(),
        onRemove: Hooks.getSyncHook(),
    },
    paint: {
        onAddToRGBUpdate: Hooks.getSyncHook(),
        onRichVoxelPaint: Hooks.getSyncHook(),
    },
    settingsSynced: Hooks.getSyncHook(),
};
