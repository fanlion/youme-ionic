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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQHlvdW1lLWlvbmljL3BsdWdpbnMveW91bWUtaW0vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sbUJBQW1CLENBQUM7QUFFdkU7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQU4sSUFBWSxRQUlYO0FBSkQsV0FBWSxRQUFRO0lBQ2xCLDJDQUFVLENBQUE7SUFDVixxREFBZSxDQUFBO0lBQ2YsK0NBQVksQ0FBQTtBQUNkLENBQUMsRUFKVyxRQUFRLEtBQVIsUUFBUSxRQUluQjtBQUFBLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBTixJQUFZLFVBWVg7QUFaRCxXQUFZLFVBQVU7SUFDcEIsNkNBQVMsQ0FBQTtJQUNULHFEQUFhLENBQUE7SUFDYixpREFBVyxDQUFBO0lBQ1gsbURBQVksQ0FBQTtJQUNaLDZDQUFTLENBQUE7SUFDVCxxREFBYSxDQUFBO0lBQ2IseURBQWUsQ0FBQTtJQUNmLCtDQUFVLENBQUE7SUFDViw2Q0FBUyxDQUFBO0lBQ1QsNkNBQVMsQ0FBQTtJQUNULGtEQUFZLENBQUE7QUFDZCxDQUFDLEVBWlcsVUFBVSxLQUFWLFVBQVUsUUFZckI7QUFBQSxDQUFDOztJQWlDMkIsMkJBQWlCOzs7O0lBVTVDLHNCQUFJLGFBQUMsTUFBYyxFQUFFLFNBQWlCLEVBQUUsUUFBb0I7SUFjNUQsdUJBQUssYUFBQyxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxLQUFhO0lBT3JELHdCQUFNO0lBV04saUNBQWUsYUFBQyxTQUFpQixFQUFFLFNBQW1CLEVBQUUsYUFBcUIsRUFBRSxjQUFzQjtJQVNyRywyQ0FBeUIsYUFBQyxPQUFpQixFQUFFLEtBQWU7SUFTNUQseUNBQXVCLGFBQUMsT0FBaUIsRUFBRSxLQUFlO0lBVzFELHlDQUF1QixhQUFDLE1BQWMsRUFBRSxRQUFrQixFQUFFLFNBQWlCLEVBQUUsYUFBc0I7SUFPckcsb0NBQWtCO0lBT2xCLHlDQUF1QjtJQVF2Qiw4QkFBWSxhQUFDLE1BQWM7SUFRM0IsK0JBQWEsYUFBQyxNQUFjO0lBUTVCLGdDQUFjLGFBQUMsU0FBaUI7SUFPaEMsK0JBQWE7Ozs7Ozs7O0lBcEhGLE9BQU87UUFEbkIsVUFBVSxFQUFFO09BQ0EsT0FBTztrQkFsRXBCO0VBa0U2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAeW91bWUtaW9uaWMvY29yZSc7XG5cbi8qKlxuICogY2hhdCB0eXBlXG4gKlxuICogQGV4cG9ydFxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZXhwb3J0IGVudW0gQ2hhdFR5cGUge1xuICBVbmtub3cgPSAwLFxuICBQcml2YXRlQ2hhdCA9IDEsXG4gIFJvb21DaGF0ID0gMixcbn07XG5cbi8qKlxuICogc2VydmVyJ3MgbG9jYXRpb25cbiAqXG4gKiBAZXhwb3J0XG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5leHBvcnQgZW51bSBTZXJ2ZXJab25lIHtcbiAgQ2hpbmEgPSAwOyAgICAgICAvLyBDaGluYSAtIGRlZmF1bHRcbiAgU2luZ2Fwb3JlID0gMTsgICAvLyBTaW5nYXBvcmVcbiAgQW1lcmljYSA9IDI7ICAgICAvLyBBbWVyaWNhXG4gIEhvbmdLb25nID0gMzsgICAgLy8gSG9uZ0tvbmdcbiAgS29yZWEgPSA0OyAgICAgICAvLyBLb3JlYVxuICBBdXN0cmFsaWEgPSA1OyAgIC8vIEF1c3RyYWxpYVxuICBEZXV0c2NobGFuZCA9IDY7IC8vIERldXRzY2hsYW5kXG4gIEJyYXppbCA9IDc7ICAgICAgLy8gQnJhemlsXG4gIEluZGlhID0gODsgICAgICAgLy8gSW5kaWFcbiAgSmFwYW4gPSA5OyAgICAgICAvLyBKYXBhblxuICBJcmVsYW5kID0gMTA7ICAgIC8vIElyZWxhbmRcbn07XG5cbi8qKlxuICogQG5hbWUgWW91bWVJTVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBmYWNpbGl0YXRlcyB0aGUgdXNhZ2Ugb2YgWW91bWUgSU0gaW4gYW4gSW9uaWMgYXBwcyB3aXRoIHRoZSBpbnRlZ3JhdGVkIFlvdW1lSU1TREtcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFlvdW1lSU0gfSBmcm9tICdAeW91bWUtaW9uaWMveW91bWUtaW0nO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHlvdW1lSU06IFlvdW1lSU0pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnlvdW1lSU0uaW5pdCgneHh4eHgnLCAneHh4eHgnLCAwKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1lvdW1lSU0nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi15b3VtZS1pbScsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5Zb3VtZUlNQ29yZG92YVBsdWdpbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20veW91bWVzZGsvWW91bWVJTUNvcmRvdmFQbHVnaW4nLFxuICBpbnN0YWxsOiAnY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXlvdW1lLWltJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgWW91bWVJTSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogaW5pdCBzZGtcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFwcEtleSAtIGlhcHAgZGVudGlmaWVyLCBvYnRhaW5lZCBhZnRlciByZWdpc3RlcmluZyBhdCB3d3cueW91bWUuaW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlY3JldEtleSAtIGFwcCBzZWN1cml0eSBrZXksIG9idGFpbmVkIGFmdGVyIHJlZ2lzdGVyaW5nIGF0IHd3dy55b3VtZS5pbVxuICAgKiBAcGFyYW0ge1NlcnZlclpvbmV9IHJlZ2lvbklkIC0gc2VydmVyIHpvbmVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbml0KGFwcEtleTogc3RyaW5nLCBzZWNyZXRLZXk6IHN0cmluZywgcmVnaW9uSWQ6IFNlcnZlclpvbmUpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogbG9naW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJpZCAtIFVzZXIgSUQsIGFzc2lnbmVkIGJ5IHRoZSBjYWxsZXIsIGNhbm5vdCBiZSBhbiBlbXB0eSBzdHJpbmcuIFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgY2FuIG9ubHkgYmUgY29tcG9zZWQgb2YgbGV0dGVycyBvciBudW1iZXJzIG9yIHVuZGVyc2NvcmVzLiBcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBsZW5ndGggaXMgbGltaXRlZCB0byAyNTUgYnl0ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXNzd29yZCAtIExvZ2luIHBhc3N3b3JkLCBjYW4gbm90IGJlIGFuIGVtcHR5IHN0cmluZywgXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbiBiZSBzZXQgdG8gYSBmaXhlZCBzdHJpbmcgd2l0aG91dCBzcGVjaWFsIHJlcXVpcmVtZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9rZW4gLSBVc2VyIHRva2VuLCB1c2VkIHdoZW4gdXNpbmcgc2VydmVyIHRva2VuIGF1dGhlbnRpY2F0aW9uIG1vZGUuIFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBJZiBub3QgdXNlZCwgdG9rZW4gaXMgcGFzc2VkIGluOiBcIlwiLCB0aGUgdG9rZW4gdmFsdWUgaXMgb2J0YWluZWQgYnkgcmVzdEFQSS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dpbih1c2VyaWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgdG9rZW46IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBsb2dvdXRcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIHNlbmQgdGV4dCBtZXNzYWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJSZWN2SWQgLSByZWNpdmVyIGlkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpQ2hhdFR5cGUgLSBjaGF0IHR5cGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ck1zZ0NvbnRlbnQgLSBtZXNzYWdlIGNvbnRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ckF0dGFjaFBhcmFtIC0gYXR0YWNoIG1lc3NhZ2VcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZW5kVGV4dE1lc3NhZ2Uoc3RyUmVjdklkOiBzdHJpbmcsIGlDaGF0VHlwZTogQ2hhdFR5cGUsIHN0ck1zZ0NvbnRlbnQ6IHN0cmluZywgc3RyQXR0YWNoUGFyYW06IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuICBcbiAgLyoqXG4gICAqIHJlZ2lzdCBjYWxsYmFjayBmdW5jdGlvbiBmb3IgcmVjb25uZWN0IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1Y2Nlc3MgLSBjYWxsYmFjayBmdW5jdGlvbiBmb3Igc3VjY2Vzc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcnJvciAtIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBlcnJvclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVnaXN0ZXJSZWNvbm5lY3RDYWxsYmFjayhzdWNjZXNzOiBGdW5jdGlvbiwgZXJyb3I6IEZ1bmN0aW9uKTogdm9pZCB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiByZWdpc3QgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGtpY2sgb3V0IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVudGlvbn0gc3VjY2VzcyAtIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBzdWNjZXNzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVycm9yIC0gY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGVycm9yXG4gICAqIEByZXR1cm5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZWdpc3RlcktpY2tPZmZDYWxsYmFjayhzdWNjZXNzOiBGdW5jdGlvbiwgZXJyb3I6IEZ1bmN0aW9uKTogdm9pZCB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBzdGFydCByZWNvcmQgYXVkaW8gbWVzc2FnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVjdklEIC0gcmVjaXZlcidzIGlkIHByaXZhdGU7IGNoYXQ6IHVzZXJpZO+8jHJvb20gY2hhdDogcm9vbWlkXG4gICAqIEBwYXJhbSB7Q2hhdFR5cGV9IGNoYXRUeXBlIC0gY2hhdFR5cGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4dHJhVGV4dCAtIGV4dHJhIHRleHQgbWVzc2FnZSBmb3Igdm9pY2UgbWVzc2FnZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG5lZWRSZWNvZ25pemUgLSBXaGV0aGVyIHRvIGVuYWJsZSBvbmx5IHJlY29nbml6ZSB2b2ljZSB0ZXh0LCBub3Qgc2VuZCB2b2ljZSBtZXNzYWdlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydFJlY29yZEF1ZGlvTWVzc2FnZShyZWN2SUQ6IHN0cmluZywgY2hhdFR5cGU6IENoYXRUeXBlLCBleHRyYVRleHQ6IHN0cmluZywgbmVlZFJlY29nbml6ZTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBjYW5jZWwgcmVjb3JkIGF1ZGlvIG1lc3NhZ2UsIG5vdCBzZW5kXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNhbmNlbEF1ZGlvTWVzc2FnZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogc3RvcCByZWNvcmQgYXVkaW8gbWVzc2FnZSwgYW5kIHNlbmQgaXRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcEFuZFNlbmRBdWRpb01lc3NhZ2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIGpvaW4gc2luZ2xlIGNoYXJ0IHJvb20gYnkgcm9vbSBpZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcm9vbUlEIC0gcm9vbSBpZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBqb2luQ2hhdFJvb20ocm9vbUlEOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogbGVhdmUgY2hhdCByb29tIGJ5IGlkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByb29tSUQgLSByb29tIGlkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxlYXZlQ2hhdFJvb20ocm9vbUlEOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogc3RhcnQgcGxheSBhdWRpb1xuICAgKiBAcGFyYW0ge3N0cmluZ30gYXVkaW9QYXRoIC0gYXVkaW8gZmlsZSBwYXRoXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0UGxheUF1ZGlvKGF1ZGlvUGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIHN0b3AgcGxheSBhdWRpb1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BQbGF5QXVkaW8oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG59XG4iXX0=