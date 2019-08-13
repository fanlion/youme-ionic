var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@youme-ionic/core';
/**
 * chat type
 *
 * @export
 * @enum {number}
 */
export var ChatType;
(function (ChatType) {
    ChatType[ChatType["Unknow"] = 0] = "Unknow";
    ChatType[ChatType["PrivateChat"] = 1] = "PrivateChat";
    ChatType[ChatType["RoomChat"] = 2] = "RoomChat";
})(ChatType || (ChatType = {}));
;
/**
 * file type
 *
 * @export
 * @enum {number}
 */
export var FileType;
(function (FileType) {
    FileType[FileType["Other"] = 0] = "Other";
    FileType[FileType["Audio"] = 1] = "Audio";
    FileType[FileType["Image"] = 2] = "Image";
    FileType[FileType["Video"] = 3] = "Video";
})(FileType || (FileType = {}));
/**
 * server's location
 *
 * @export
 * @enum {number}
 */
export var ServerZone;
(function (ServerZone) {
    ServerZone[ServerZone["China"] = 0] = "China";
    ServerZone[ServerZone["Singapore"] = 1] = "Singapore";
    ServerZone[ServerZone["America"] = 2] = "America";
    ServerZone[ServerZone["HongKong"] = 3] = "HongKong";
    ServerZone[ServerZone["Korea"] = 4] = "Korea";
    ServerZone[ServerZone["Australia"] = 5] = "Australia";
    ServerZone[ServerZone["Deutschland"] = 6] = "Deutschland";
    ServerZone[ServerZone["Brazil"] = 7] = "Brazil";
    ServerZone[ServerZone["India"] = 8] = "India";
    ServerZone[ServerZone["Japan"] = 9] = "Japan";
    ServerZone[ServerZone["Ireland"] = 10] = "Ireland";
})(ServerZone || (ServerZone = {}));
;
var YoumeIM = /** @class */ (function (_super) {
    __extends(YoumeIM, _super);
    function YoumeIM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YoumeIM.prototype.init = function (appKey, secretKey, regionId) { return cordova(this, "init", {}, arguments); };
    YoumeIM.prototype.login = function (userid, password, token) { return cordova(this, "login", {}, arguments); };
    YoumeIM.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    YoumeIM.prototype.sendTextMessage = function (strRecvId, iChatType, strMsgContent, strAttachParam) { return cordova(this, "sendTextMessage", {}, arguments); };
    YoumeIM.prototype.registerReconnectCallback = function (success, error) { return cordova(this, "registerReconnectCallback", { "sync": true }, arguments); };
    YoumeIM.prototype.registerKickOffCallback = function (success, error) { return cordova(this, "registerKickOffCallback", { "sync": true }, arguments); };
    YoumeIM.prototype.startRecordAudioMessage = function (recvID, chatType, extraText, needRecognize) { return cordova(this, "startRecordAudioMessage", {}, arguments); };
    YoumeIM.prototype.cancelAudioMessage = function () { return cordova(this, "cancelAudioMessage", {}, arguments); };
    YoumeIM.prototype.stopAndSendAudioMessage = function () { return cordova(this, "stopAndSendAudioMessage", {}, arguments); };
    YoumeIM.prototype.joinChatRoom = function (roomID) { return cordova(this, "joinChatRoom", {}, arguments); };
    YoumeIM.prototype.leaveChatRoom = function (roomID) { return cordova(this, "leaveChatRoom", {}, arguments); };
    YoumeIM.prototype.startPlayAudio = function (audioPath) { return cordova(this, "startPlayAudio", {}, arguments); };
    YoumeIM.prototype.stopPlayAudio = function () { return cordova(this, "stopPlayAudio", {}, arguments); };
    YoumeIM.prototype.sendFileMessage = function (strRecvId, iChatType, filePath, strAttachParam, fileType) { return cordova(this, "sendFileMessage", {}, arguments); };
    YoumeIM.prototype.switchTransType = function (transType) { return cordova(this, "switchTransType", {}, arguments); };
    YoumeIM.pluginName = "YoumeIM";
    YoumeIM.plugin = "cordova-plugin-youme-im";
    YoumeIM.pluginRef = "cordova.plugins.YoumeIMCordovaPlugin";
    YoumeIM.repo = "https://github.com/youmesdk/YoumeIMCordovaPlugin";
    YoumeIM.install = "cordova plugin add cordova-plugin-youme-im";
    YoumeIM.installVariables = [];
    YoumeIM.platforms = ["Android"];
    YoumeIM = __decorate([
        Injectable()
    ], YoumeIM);
    return YoumeIM;
}(IonicNativePlugin));
export { YoumeIM };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQHlvdW1lLWlvbmljL3BsdWdpbnMveW91bWUtaW0vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sbUJBQW1CLENBQUM7QUFFdkU7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQU4sSUFBWSxRQUlYO0FBSkQsV0FBWSxRQUFRO0lBQ2xCLDJDQUFVLENBQUE7SUFDVixxREFBZSxDQUFBO0lBQ2YsK0NBQVksQ0FBQTtBQUNkLENBQUMsRUFKVyxRQUFRLEtBQVIsUUFBUSxRQUluQjtBQUFBLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBTixJQUFZLFFBS1g7QUFMRCxXQUFZLFFBQVE7SUFDbEIseUNBQVMsQ0FBQTtJQUNULHlDQUFTLENBQUE7SUFDVCx5Q0FBUyxDQUFBO0lBQ1QseUNBQVMsQ0FBQTtBQUNYLENBQUMsRUFMVyxRQUFRLEtBQVIsUUFBUSxRQUtuQjtBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFOLElBQVksVUFZWDtBQVpELFdBQVksVUFBVTtJQUNwQiw2Q0FBUyxDQUFBO0lBQ1QscURBQWEsQ0FBQTtJQUNiLGlEQUFXLENBQUE7SUFDWCxtREFBWSxDQUFBO0lBQ1osNkNBQVMsQ0FBQTtJQUNULHFEQUFhLENBQUE7SUFDYix5REFBZSxDQUFBO0lBQ2YsK0NBQVUsQ0FBQTtJQUNWLDZDQUFTLENBQUE7SUFDVCw2Q0FBUyxDQUFBO0lBQ1Qsa0RBQVksQ0FBQTtBQUNkLENBQUMsRUFaVyxVQUFVLEtBQVYsVUFBVSxRQVlyQjtBQUFBLENBQUM7O0lBaUMyQiwyQkFBaUI7Ozs7SUFVNUMsc0JBQUksYUFBQyxNQUFjLEVBQUUsU0FBaUIsRUFBRSxRQUFvQjtJQWM1RCx1QkFBSyxhQUFDLE1BQWMsRUFBRSxRQUFnQixFQUFFLEtBQWE7SUFPckQsd0JBQU07SUFXTixpQ0FBZSxhQUFDLFNBQWlCLEVBQUUsU0FBbUIsRUFBRSxhQUFxQixFQUFFLGNBQXNCO0lBU3JHLDJDQUF5QixhQUFDLE9BQWlCLEVBQUUsS0FBZTtJQVM1RCx5Q0FBdUIsYUFBQyxPQUFpQixFQUFFLEtBQWU7SUFXMUQseUNBQXVCLGFBQUMsTUFBYyxFQUFFLFFBQWtCLEVBQUUsU0FBaUIsRUFBRSxhQUFzQjtJQU9yRyxvQ0FBa0I7SUFPbEIseUNBQXVCO0lBUXZCLDhCQUFZLGFBQUMsTUFBYztJQVEzQiwrQkFBYSxhQUFDLE1BQWM7SUFRNUIsZ0NBQWMsYUFBQyxTQUFpQjtJQU9oQywrQkFBYTtJQWFiLGlDQUFlLGFBQUMsU0FBaUIsRUFBRSxTQUFtQixFQUFJLFFBQWdCLEVBQUUsY0FBc0IsRUFBRSxRQUFrQjtJQVV0SCxpQ0FBZSxhQUFDLFNBQTBCOzs7Ozs7OztJQTNJL0IsT0FBTztRQURuQixVQUFVLEVBQUU7T0FDQSxPQUFPO2tCQS9FcEI7RUErRTZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0B5b3VtZS1pb25pYy9jb3JlJztcblxuLyoqXG4gKiBjaGF0IHR5cGVcbiAqXG4gKiBAZXhwb3J0XG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5leHBvcnQgZW51bSBDaGF0VHlwZSB7XG4gIFVua25vdyA9IDAsXG4gIFByaXZhdGVDaGF0ID0gMSxcbiAgUm9vbUNoYXQgPSAyLFxufTtcblxuLyoqXG4gKiBmaWxlIHR5cGVcbiAqXG4gKiBAZXhwb3J0XG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5leHBvcnQgZW51bSBGaWxlVHlwZSB7XG4gIE90aGVyID0gMCxcbiAgQXVkaW8gPSAxLFxuICBJbWFnZSA9IDIsXG4gIFZpZGVvID0gMyxcbn1cblxuLyoqXG4gKiBzZXJ2ZXIncyBsb2NhdGlvblxuICpcbiAqIEBleHBvcnRcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBlbnVtIFNlcnZlclpvbmUge1xuICBDaGluYSA9IDA7ICAgICAgIC8vIENoaW5hIC0gZGVmYXVsdFxuICBTaW5nYXBvcmUgPSAxOyAgIC8vIFNpbmdhcG9yZVxuICBBbWVyaWNhID0gMjsgICAgIC8vIEFtZXJpY2FcbiAgSG9uZ0tvbmcgPSAzOyAgICAvLyBIb25nS29uZ1xuICBLb3JlYSA9IDQ7ICAgICAgIC8vIEtvcmVhXG4gIEF1c3RyYWxpYSA9IDU7ICAgLy8gQXVzdHJhbGlhXG4gIERldXRzY2hsYW5kID0gNjsgLy8gRGV1dHNjaGxhbmRcbiAgQnJhemlsID0gNzsgICAgICAvLyBCcmF6aWxcbiAgSW5kaWEgPSA4OyAgICAgICAvLyBJbmRpYVxuICBKYXBhbiA9IDk7ICAgICAgIC8vIEphcGFuXG4gIElyZWxhbmQgPSAxMDsgICAgLy8gSXJlbGFuZFxufTtcblxuLyoqXG4gKiBAbmFtZSBZb3VtZUlNXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGZhY2lsaXRhdGVzIHRoZSB1c2FnZSBvZiBZb3VtZSBJTSBpbiBhbiBJb25pYyBhcHBzIHdpdGggdGhlIGludGVncmF0ZWQgWW91bWVJTVNES1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgWW91bWVJTSB9IGZyb20gJ0B5b3VtZS1pb25pYy95b3VtZS1pbSc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgeW91bWVJTTogWW91bWVJTSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMueW91bWVJTS5pbml0KCd4eHh4eCcsICd4eHh4eCcsIDApXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnWW91bWVJTScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXlvdW1lLWltJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLllvdW1lSU1Db3Jkb3ZhUGx1Z2luJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS95b3VtZXNkay9Zb3VtZUlNQ29yZG92YVBsdWdpbicsXG4gIGluc3RhbGw6ICdjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4teW91bWUtaW0nLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBZb3VtZUlNIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBpbml0IHNka1xuICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwS2V5IC0gaWFwcCBkZW50aWZpZXIsIG9idGFpbmVkIGFmdGVyIHJlZ2lzdGVyaW5nIGF0IHd3dy55b3VtZS5pbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VjcmV0S2V5IC0gYXBwIHNlY3VyaXR5IGtleSwgb2J0YWluZWQgYWZ0ZXIgcmVnaXN0ZXJpbmcgYXQgd3d3LnlvdW1lLmltXG4gICAqIEBwYXJhbSB7U2VydmVyWm9uZX0gcmVnaW9uSWQgLSBzZXJ2ZXIgem9uZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluaXQoYXBwS2V5OiBzdHJpbmcsIHNlY3JldEtleTogc3RyaW5nLCByZWdpb25JZDogU2VydmVyWm9uZSk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBsb2dpblxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcmlkIC0gVXNlciBJRCwgYXNzaWduZWQgYnkgdGhlIGNhbGxlciwgY2Fubm90IGJlIGFuIGVtcHR5IHN0cmluZy4gXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICBJdCBjYW4gb25seSBiZSBjb21wb3NlZCBvZiBsZXR0ZXJzIG9yIG51bWJlcnMgb3IgdW5kZXJzY29yZXMuIFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGxlbmd0aCBpcyBsaW1pdGVkIHRvIDI1NSBieXRlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIC0gTG9naW4gcGFzc3dvcmQsIGNhbiBub3QgYmUgYW4gZW1wdHkgc3RyaW5nLCBcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuIGJlIHNldCB0byBhIGZpeGVkIHN0cmluZyB3aXRob3V0IHNwZWNpYWwgcmVxdWlyZW1lbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlbiAtIFVzZXIgdG9rZW4sIHVzZWQgd2hlbiB1c2luZyBzZXJ2ZXIgdG9rZW4gYXV0aGVudGljYXRpb24gbW9kZS4gXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIElmIG5vdCB1c2VkLCB0b2tlbiBpcyBwYXNzZWQgaW46IFwiXCIsIHRoZSB0b2tlbiB2YWx1ZSBpcyBvYnRhaW5lZCBieSByZXN0QVBJLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ2luKHVzZXJpZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCB0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIGxvZ291dFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogc2VuZCB0ZXh0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clJlY3ZJZCAtIHJlY2l2ZXIgaWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlDaGF0VHlwZSAtIGNoYXQgdHlwZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyTXNnQ29udGVudCAtIG1lc3NhZ2UgY29udGVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyQXR0YWNoUGFyYW0gLSBhdHRhY2ggbWVzc2FnZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbmRUZXh0TWVzc2FnZShzdHJSZWN2SWQ6IHN0cmluZywgaUNoYXRUeXBlOiBDaGF0VHlwZSwgc3RyTXNnQ29udGVudDogc3RyaW5nLCBzdHJBdHRhY2hQYXJhbTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG4gIFxuICAvKipcbiAgICogcmVnaXN0IGNhbGxiYWNrIGZ1bmN0aW9uIGZvciByZWNvbm5lY3QgZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3VjY2VzcyAtIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBzdWNjZXNzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVycm9yIC0gY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGVycm9yXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZWdpc3RlclJlY29ubmVjdENhbGxiYWNrKHN1Y2Nlc3M6IEZ1bmN0aW9uLCBlcnJvcjogRnVuY3Rpb24pOiB2b2lkIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdCBjYWxsYmFjayBmdW5jdGlvbiBmb3Iga2ljayBvdXQgZXZlbnRcbiAgICogQHBhcmFtIHtGdW50aW9ufSBzdWNjZXNzIC0gY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHN1Y2Nlc3NcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZXJyb3IgLSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgZXJyb3JcbiAgICogQHJldHVyblxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlZ2lzdGVyS2lja09mZkNhbGxiYWNrKHN1Y2Nlc3M6IEZ1bmN0aW9uLCBlcnJvcjogRnVuY3Rpb24pOiB2b2lkIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIHN0YXJ0IHJlY29yZCBhdWRpbyBtZXNzYWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWN2SUQgLSByZWNpdmVyJ3MgaWQ7IHByaXZhdGUgY2hhdDogdXNlcmlk77yMcm9vbSBjaGF0OiByb29taWRcbiAgICogQHBhcmFtIHtDaGF0VHlwZX0gY2hhdFR5cGUgLSBjaGF0VHlwZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXh0cmFUZXh0IC0gZXh0cmEgdGV4dCBtZXNzYWdlIGZvciB2b2ljZSBtZXNzYWdlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbmVlZFJlY29nbml6ZSAtIFdoZXRoZXIgdG8gZW5hYmxlIG9ubHkgcmVjb2duaXplIHZvaWNlIHRleHQsIG5vdCBzZW5kIHZvaWNlIG1lc3NhZ2VzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0UmVjb3JkQXVkaW9NZXNzYWdlKHJlY3ZJRDogc3RyaW5nLCBjaGF0VHlwZTogQ2hhdFR5cGUsIGV4dHJhVGV4dDogc3RyaW5nLCBuZWVkUmVjb2duaXplOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIGNhbmNlbCByZWNvcmQgYXVkaW8gbWVzc2FnZSwgbm90IHNlbmRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2FuY2VsQXVkaW9NZXNzYWdlKCk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBzdG9wIHJlY29yZCBhdWRpbyBtZXNzYWdlLCBhbmQgc2VuZCBpdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wQW5kU2VuZEF1ZGlvTWVzc2FnZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogam9pbiBzaW5nbGUgY2hhcnQgcm9vbSBieSByb29tIGlkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByb29tSUQgLSByb29tIGlkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGpvaW5DaGF0Um9vbShyb29tSUQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBsZWF2ZSBjaGF0IHJvb20gYnkgaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJvb21JRCAtIHJvb20gaWRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbGVhdmVDaGF0Um9vbShyb29tSUQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBzdGFydCBwbGF5IGF1ZGlvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdWRpb1BhdGggLSBhdWRpbyBmaWxlIHBhdGhcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRQbGF5QXVkaW8oYXVkaW9QYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogc3RvcCBwbGF5IGF1ZGlvXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcFBsYXlBdWRpbygpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogc2VuZCBmaWxlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJSZWN2SWQgLSByZWNpdmVyJ3MgaWQsIHByaXZhdGUgY2hhdDogdXNlcmlk77yMcm9vbSBjaGF0OiByb29taWRcbiAgICogQHBhcmFtIHtDaGF0VHlwZX0gaUNoYXRUeXBlIC0gQ2hhdFR5cGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVQYXRoIC0gZmlsZSBwYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJBdHRhY2hQYXJhbSAtIGF0dGFjaCBzdHJpbmcgbWVzc2FnZVxuICAgKiBAcGFyYW0ge0ZpbGVUeXBlfSBmaWxlVHlwZSAtIEZpbGVUeXBlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbmRGaWxlTWVzc2FnZShzdHJSZWN2SWQ6IHN0cmluZywgaUNoYXRUeXBlOiBDaGF0VHlwZTogLCBmaWxlUGF0aDogc3RyaW5nLCBzdHJBdHRhY2hQYXJhbTogc3RyaW5nLCBmaWxlVHlwZTogRmlsZVR5cGUpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogc3dpdGNoIHRyYW5zZmVyIGZpbGUgdHlwZVxuICAgKlxuICAgKiBAcGFyYW0geyhzdHJpbmcgfCBudW1iZXIpfSB0cmFuc1R5cGUgLSAwIG1lc3NhZ2Ugd2lsbCBkZWxpdmVyeSBkaXJlY3RseTtcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSBtZWFucyBqdXN0IGNjIHRvIGFwcCBzZXJ2ZXIsIG5vdCBkZWxpdmVyeSBkaXJlY3RseVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzd2l0Y2hUcmFuc1R5cGUodHJhbnNUeXBlOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cbn0iXX0=