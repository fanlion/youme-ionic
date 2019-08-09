import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from 'youme-ionic/core';
import { Observable } from 'rxjs';

/**
 * @name Youme IM
 * @description
 * This plugin facilitates the usage of Youme IM in an Ionic apps with the integrated YoumeIMSDK
 *
 * @usage
 * ```typescript
 * import { YoumeIM } from 'youme-ionic/youme-im';
 *
 *
 * constructor(private youmeIM: YoumeIM) { }
 *
 * ...
 *
 *
 * this.youmeIM.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'YoumeIM',
  plugin: 'https://github.com/youmesdk/YoumeIMCordovaPlugin.git', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.YoumeIMCordovaPlugin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/youmesdk/YoumeIMCordovaPlugin', // the github repository URL for the plugin
  install: 'cordova plugin add YoumeIMCordovaPlugin', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class YoumeIM extends IonicNativePlugin {

  /**
   * init sdk
   * 
   * @param appKey {string} 
   * @param secretKey {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   * @memberof YoumeIM
   */
  @Cordova()
  init(appKey: string, secretKey: string, regionId: string): Promise<any> { return; }

  /**
   * 
   * login
   * 
   * @param userid {string} 
   * @param password {string}
   * @param token {string}
   * @return {Promise<any>} Returns a promise
   * @memberof YoumeIM
   */
  @Cordova()
  login(userid: string, password: string, token: string): Promise<any> { return; }

  /**
   *
   * logout sdk
   *
   * @memberof YoumeIM
   * @return {Promise<any>} Returns Promise
   * @memberof YoumeIM
   */
  @Cordova()
  logout(): Promise<any> { return; }

  /**
   * send text message
   *
   * @param strRecvId {string}
   * @param iChatType {number} 
   * @param strMsgContent {string} 
   * @param strAttachParam  {string} 
   * @returns {Promise<any>}
   * @return {Promise<any>} Returns Promise
   * @memberof YoumeIM
   */
  @Cordova()
  sendTextMessage(strRecvId: string, iChatType: number, strMsgContent: string, strAttachParam: string): Promise<any> { return; }
  
  /**
   * regist callback for reconnect event
   * 
   * @memberof YoumeIM
   */
  @Cordova()
  registerReconnectCallback() { return; }

  /**
   * regist callback for kick out event
   *
   * @memberof YoumeIM
   * @return
   */
  @Cordova()
  registerKickOffCallback() { return; }

  /**
   * 
   * start record audio message
   * 
   * @memberof YoumeIM
   * @param recvID {string}
   * @param chatType {number}
   * @param extraText {string}
   * @param needRecognize {boolean}
   * @return {Promise<any>} Returns Promise
   */
  @Cordova()
  startRecordAudioMessage(recvID: string, chatType: number, extraText: string, needRecognize: boolean): Promise<any> { return; }

  /**
   * cancel audio message
   * 
   * @memberof YoumeIM
   * @return {Promise<any>} Returns Promise
   */
  @Cordova()
  cancelAudioMessage(): Promise<any> { return; }

  /**
   * stop record audio message, and send it
   * 
   * @memberof YoumeIM
   * @return {Promise<any>} Returns Promise
   */
  @Cordova()
  stopAndSendAudioMessage(): Promise<any> { return; }

  /**
   * join single chart room by room id
   * 
   * @memberof YoumeIM
   * @param roomID {string} room id
   * @return {Promise<any>} Returns Promise
   */
  @Cordova()
  joinChatRoom(roomID: string): Promise<any> { return; }

  /**
   * leave chat room by id
   * 
   * @memberof YoumeIM
   * @param roomID {string} roomt id
   * @return {Promise<any>} Returns Promise
   */
  @Cordova()
  leaveChatRoom(roomID: string): Promise<any> { return; }

  /**
   * start play audio
   * 
   * @memberof YoumeIM
   * @param audioPath {string} audio path
   * @return {Promise<any>} Returns Promise
   */
  @Cordova()
  startPlayAudio(audioPath: string): Promise<any> { return; }

  /**
   * stop play audio
   * 
   * @memberof YoumeIM
   * @return {Promise<any>} Returns Promise
   */
  @Cordova()
  stopPlayAudio(): Promise<any> { return; }
}
