"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllListeners = exports.addListener = void 0;
var react_native_1 = require("react-native");
var ClipboardTurboModule = react_native_1.TurboModuleRegistry.getEnforcing('RNCClipboard');
exports.default = ClipboardTurboModule;
var EVENT_NAME = 'RNCClipboard_TEXT_CHANGED';
var eventEmitter = new react_native_1.NativeEventEmitter(ClipboardTurboModule);
var listenerCount = eventEmitter.listenerCount;
// listenerCount is only available from RN 0.64
// Older versions only have `listeners`
if (!listenerCount) {
    listenerCount = function (eventType) {
        // @ts-ignore
        return eventEmitter.listeners(eventType).length;
    };
}
else {
    listenerCount = eventEmitter.listenerCount.bind(eventEmitter);
}
var addListener = function (callback) {
    if (listenerCount(EVENT_NAME) === 0) {
        ClipboardTurboModule.setListener();
    }
    var res = eventEmitter.addListener(EVENT_NAME, callback);
    // Path the remove call to also remove the native listener
    // if we no longer have listeners
    // @ts-ignore
    res._remove = res.remove;
    res.remove = function () {
        // @ts-ignore
        this._remove();
        if (listenerCount(EVENT_NAME) === 0) {
            ClipboardTurboModule.removeListener();
        }
    };
    return res;
};
exports.addListener = addListener;
var removeAllListeners = function () {
    eventEmitter.removeAllListeners(EVENT_NAME);
    ClipboardTurboModule.removeListener();
};
exports.removeAllListeners = removeAllListeners;
