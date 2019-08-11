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
var YoumeIMOriginal = /** @class */ (function (_super) {
    __extends(YoumeIMOriginal, _super);
    function YoumeIMOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YoumeIMOriginal.prototype.init = function (appKey, secretKey, regionId) { return cordova(this, "init", {}, arguments); };
    YoumeIMOriginal.prototype.login = function (userid, password, token) { return cordova(this, "login", {}, arguments); };
    YoumeIMOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    YoumeIMOriginal.prototype.sendTextMessage = function (strRecvId, iChatType, strMsgContent, strAttachParam) { return cordova(this, "sendTextMessage", {}, arguments); };
    YoumeIMOriginal.prototype.registerReconnectCallback = function (success, error) { return cordova(this, "registerReconnectCallback", { "sync": true }, arguments); };
    YoumeIMOriginal.prototype.registerKickOffCallback = function (success, error) { return cordova(this, "registerKickOffCallback", { "sync": true }, arguments); };
    YoumeIMOriginal.prototype.startRecordAudioMessage = function (recvID, chatType, extraText, needRecognize) { return cordova(this, "startRecordAudioMessage", {}, arguments); };
    YoumeIMOriginal.prototype.cancelAudioMessage = function () { return cordova(this, "cancelAudioMessage", {}, arguments); };
    YoumeIMOriginal.prototype.stopAndSendAudioMessage = function () { return cordova(this, "stopAndSendAudioMessage", {}, arguments); };
    YoumeIMOriginal.prototype.joinChatRoom = function (roomID) { return cordova(this, "joinChatRoom", {}, arguments); };
    YoumeIMOriginal.prototype.leaveChatRoom = function (roomID) { return cordova(this, "leaveChatRoom", {}, arguments); };
    YoumeIMOriginal.prototype.startPlayAudio = function (audioPath) { return cordova(this, "startPlayAudio", {}, arguments); };
    YoumeIMOriginal.prototype.stopPlayAudio = function () { return cordova(this, "stopPlayAudio", {}, arguments); };
    YoumeIMOriginal.pluginName = "YoumeIM";
    YoumeIMOriginal.plugin = "cordova-plugin-youme-im";
    YoumeIMOriginal.pluginRef = "cordova.plugins.YoumeIMCordovaPlugin";
    YoumeIMOriginal.repo = "https://github.com/youmesdk/YoumeIMCordovaPlugin";
    YoumeIMOriginal.install = "cordova plugin add cordova-plugin-youme-im";
    YoumeIMOriginal.installVariables = [];
    YoumeIMOriginal.platforms = ["Android"];
    return YoumeIMOriginal;
}(IonicNativePlugin));
var YoumeIM = new YoumeIMOriginal();
export { YoumeIM };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQHlvdW1lLWlvbmljL3BsdWdpbnMveW91bWUtaW0vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sbUJBQW1CLENBQUM7QUFFdkU7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQU4sSUFBWSxRQUlYO0FBSkQsV0FBWSxRQUFRO0lBQ2xCLDJDQUFVLENBQUE7SUFDVixxREFBZSxDQUFBO0lBQ2YsK0NBQVksQ0FBQTtBQUNkLENBQUMsRUFKVyxRQUFRLEtBQVIsUUFBUSxRQUluQjtBQUFBLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBTixJQUFZLFVBWVg7QUFaRCxXQUFZLFVBQVU7SUFDcEIsNkNBQVMsQ0FBQTtJQUNULHFEQUFhLENBQUE7SUFDYixpREFBVyxDQUFBO0lBQ1gsbURBQVksQ0FBQTtJQUNaLDZDQUFTLENBQUE7SUFDVCxxREFBYSxDQUFBO0lBQ2IseURBQWUsQ0FBQTtJQUNmLCtDQUFVLENBQUE7SUFDViw2Q0FBUyxDQUFBO0lBQ1QsNkNBQVMsQ0FBQTtJQUNULGtEQUFZLENBQUE7QUFDZCxDQUFDLEVBWlcsVUFBVSxLQUFWLFVBQVUsUUFZckI7QUFBQSxDQUFDOztJQWlDMkIsMkJBQWlCOzs7O0lBVTVDLHNCQUFJLGFBQUMsTUFBYyxFQUFFLFNBQWlCLEVBQUUsUUFBb0I7SUFjNUQsdUJBQUssYUFBQyxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxLQUFhO0lBT3JELHdCQUFNO0lBV04saUNBQWUsYUFBQyxTQUFpQixFQUFFLFNBQW1CLEVBQUUsYUFBcUIsRUFBRSxjQUFzQjtJQVNyRywyQ0FBeUIsYUFBQyxPQUFpQixFQUFFLEtBQWU7SUFTNUQseUNBQXVCLGFBQUMsT0FBaUIsRUFBRSxLQUFlO0lBVzFELHlDQUF1QixhQUFDLE1BQWMsRUFBRSxRQUFrQixFQUFFLFNBQWlCLEVBQUUsYUFBc0I7SUFPckcsb0NBQWtCO0lBT2xCLHlDQUF1QjtJQVF2Qiw4QkFBWSxhQUFDLE1BQWM7SUFRM0IsK0JBQWEsYUFBQyxNQUFjO0lBUTVCLGdDQUFjLGFBQUMsU0FBaUI7SUFPaEMsK0JBQWE7Ozs7Ozs7O2tCQXRMZjtFQWtFNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQHlvdW1lLWlvbmljL2NvcmUnO1xuXG4vKipcbiAqIGNoYXQgdHlwZVxuICpcbiAqIEBleHBvcnRcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBlbnVtIENoYXRUeXBlIHtcbiAgVW5rbm93ID0gMCxcbiAgUHJpdmF0ZUNoYXQgPSAxLFxuICBSb29tQ2hhdCA9IDIsXG59O1xuXG4vKipcbiAqIHNlcnZlcidzIGxvY2F0aW9uXG4gKlxuICogQGV4cG9ydFxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZXhwb3J0IGVudW0gU2VydmVyWm9uZSB7XG4gIENoaW5hID0gMDsgICAgICAgLy8gQ2hpbmEgLSBkZWZhdWx0XG4gIFNpbmdhcG9yZSA9IDE7ICAgLy8gU2luZ2Fwb3JlXG4gIEFtZXJpY2EgPSAyOyAgICAgLy8gQW1lcmljYVxuICBIb25nS29uZyA9IDM7ICAgIC8vIEhvbmdLb25nXG4gIEtvcmVhID0gNDsgICAgICAgLy8gS29yZWFcbiAgQXVzdHJhbGlhID0gNTsgICAvLyBBdXN0cmFsaWFcbiAgRGV1dHNjaGxhbmQgPSA2OyAvLyBEZXV0c2NobGFuZFxuICBCcmF6aWwgPSA3OyAgICAgIC8vIEJyYXppbFxuICBJbmRpYSA9IDg7ICAgICAgIC8vIEluZGlhXG4gIEphcGFuID0gOTsgICAgICAgLy8gSmFwYW5cbiAgSXJlbGFuZCA9IDEwOyAgICAvLyBJcmVsYW5kXG59O1xuXG4vKipcbiAqIEBuYW1lIFlvdW1lSU1cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZmFjaWxpdGF0ZXMgdGhlIHVzYWdlIG9mIFlvdW1lIElNIGluIGFuIElvbmljIGFwcHMgd2l0aCB0aGUgaW50ZWdyYXRlZCBZb3VtZUlNU0RLXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBZb3VtZUlNIH0gZnJvbSAnQHlvdW1lLWlvbmljL3lvdW1lLWltJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB5b3VtZUlNOiBZb3VtZUlNKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy55b3VtZUlNLmluaXQoJ3h4eHh4JywgJ3h4eHh4JywgMClcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdZb3VtZUlNJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4teW91bWUtaW0nLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuWW91bWVJTUNvcmRvdmFQbHVnaW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3lvdW1lc2RrL1lvdW1lSU1Db3Jkb3ZhUGx1Z2luJyxcbiAgaW5zdGFsbDogJ2NvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi15b3VtZS1pbScsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFlvdW1lSU0gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIGluaXQgc2RrXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBLZXkgLSBpYXBwIGRlbnRpZmllciwgb2J0YWluZWQgYWZ0ZXIgcmVnaXN0ZXJpbmcgYXQgd3d3LnlvdW1lLmltXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWNyZXRLZXkgLSBhcHAgc2VjdXJpdHkga2V5LCBvYnRhaW5lZCBhZnRlciByZWdpc3RlcmluZyBhdCB3d3cueW91bWUuaW1cbiAgICogQHBhcmFtIHtTZXJ2ZXJab25lfSByZWdpb25JZCAtIHNlcnZlciB6b25lXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW5pdChhcHBLZXk6IHN0cmluZywgc2VjcmV0S2V5OiBzdHJpbmcsIHJlZ2lvbklkOiBTZXJ2ZXJab25lKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIGxvZ2luXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyaWQgLSBVc2VyIElELCBhc3NpZ25lZCBieSB0aGUgY2FsbGVyLCBjYW5ub3QgYmUgYW4gZW1wdHkgc3RyaW5nLiBcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIEl0IGNhbiBvbmx5IGJlIGNvbXBvc2VkIG9mIGxldHRlcnMgb3IgbnVtYmVycyBvciB1bmRlcnNjb3Jlcy4gXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgbGVuZ3RoIGlzIGxpbWl0ZWQgdG8gMjU1IGJ5dGVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgLSBMb2dpbiBwYXNzd29yZCwgY2FuIG5vdCBiZSBhbiBlbXB0eSBzdHJpbmcsIFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW4gYmUgc2V0IHRvIGEgZml4ZWQgc3RyaW5nIHdpdGhvdXQgc3BlY2lhbCByZXF1aXJlbWVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuIC0gVXNlciB0b2tlbiwgdXNlZCB3aGVuIHVzaW5nIHNlcnZlciB0b2tlbiBhdXRoZW50aWNhdGlvbiBtb2RlLiBcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgSWYgbm90IHVzZWQsIHRva2VuIGlzIHBhc3NlZCBpbjogXCJcIiwgdGhlIHRva2VuIHZhbHVlIGlzIG9idGFpbmVkIGJ5IHJlc3RBUEkuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9naW4odXNlcmlkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogbG9nb3V0XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBzZW5kIHRleHQgbWVzc2FnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyUmVjdklkIC0gcmVjaXZlciBpZFxuICAgKiBAcGFyYW0ge251bWJlcn0gaUNoYXRUeXBlIC0gY2hhdCB0eXBlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJNc2dDb250ZW50IC0gbWVzc2FnZSBjb250ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJBdHRhY2hQYXJhbSAtIGF0dGFjaCBtZXNzYWdlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZFRleHRNZXNzYWdlKHN0clJlY3ZJZDogc3RyaW5nLCBpQ2hhdFR5cGU6IENoYXRUeXBlLCBzdHJNc2dDb250ZW50OiBzdHJpbmcsIHN0ckF0dGFjaFBhcmFtOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cbiAgXG4gIC8qKlxuICAgKiByZWdpc3QgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHJlY29ubmVjdCBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWNjZXNzIC0gY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHN1Y2Nlc3NcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZXJyb3IgLSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgZXJyb3JcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlZ2lzdGVyUmVjb25uZWN0Q2FsbGJhY2soc3VjY2VzczogRnVuY3Rpb24sIGVycm9yOiBGdW5jdGlvbik6IHZvaWQgeyByZXR1cm47IH1cblxuICAvKipcbiAgICogcmVnaXN0IGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBraWNrIG91dCBldmVudFxuICAgKiBAcGFyYW0ge0Z1bnRpb259IHN1Y2Nlc3MgLSBjYWxsYmFjayBmdW5jdGlvbiBmb3Igc3VjY2Vzc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcnJvciAtIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBlcnJvclxuICAgKiBAcmV0dXJuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVnaXN0ZXJLaWNrT2ZmQ2FsbGJhY2soc3VjY2VzczogRnVuY3Rpb24sIGVycm9yOiBGdW5jdGlvbik6IHZvaWQgeyByZXR1cm47IH1cblxuICAvKipcbiAgICogc3RhcnQgcmVjb3JkIGF1ZGlvIG1lc3NhZ2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlY3ZJRCAtIHJlY2l2ZXIncyBpZCBwcml2YXRlOyBjaGF0OiB1c2VyaWTvvIxyb29tIGNoYXQ6IHJvb21pZFxuICAgKiBAcGFyYW0ge0NoYXRUeXBlfSBjaGF0VHlwZSAtIGNoYXRUeXBlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHRyYVRleHQgLSBleHRyYSB0ZXh0IG1lc3NhZ2UgZm9yIHZvaWNlIG1lc3NhZ2VcbiAgICogQHBhcmFtIHtib29sZWFufSBuZWVkUmVjb2duaXplIC0gV2hldGhlciB0byBlbmFibGUgb25seSByZWNvZ25pemUgdm9pY2UgdGV4dCwgbm90IHNlbmQgdm9pY2UgbWVzc2FnZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRSZWNvcmRBdWRpb01lc3NhZ2UocmVjdklEOiBzdHJpbmcsIGNoYXRUeXBlOiBDaGF0VHlwZSwgZXh0cmFUZXh0OiBzdHJpbmcsIG5lZWRSZWNvZ25pemU6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogY2FuY2VsIHJlY29yZCBhdWRpbyBtZXNzYWdlLCBub3Qgc2VuZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjYW5jZWxBdWRpb01lc3NhZ2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIHN0b3AgcmVjb3JkIGF1ZGlvIG1lc3NhZ2UsIGFuZCBzZW5kIGl0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BBbmRTZW5kQXVkaW9NZXNzYWdlKCk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBqb2luIHNpbmdsZSBjaGFydCByb29tIGJ5IHJvb20gaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJvb21JRCAtIHJvb20gaWRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgam9pbkNoYXRSb29tKHJvb21JRDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIGxlYXZlIGNoYXQgcm9vbSBieSBpZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcm9vbUlEIC0gcm9vbSBpZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsZWF2ZUNoYXRSb29tKHJvb21JRDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIHN0YXJ0IHBsYXkgYXVkaW9cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF1ZGlvUGF0aCAtIGF1ZGlvIGZpbGUgcGF0aFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydFBsYXlBdWRpbyhhdWRpb1BhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBzdG9wIHBsYXkgYXVkaW9cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wUGxheUF1ZGlvKCk6IFByb21pc2U8YW55PiB7IHJldHVybjsgfVxufVxuIl19