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
  plugin: 'cordova-plugin-youme-im', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.YoumeIMCordovaPlugin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/youmesdk/YoumeIMCordovaPlugin', // the github repository URL for the plugin
  install: 'cordova plugin add cordova-plugin-youme-im', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class YoumeIM extends IonicNativePlugin {

  /**
   * init sdk
   * 
   * @param {string} appKey 
   * @param {number} secretKey - Another param to configure something
   * @return {Promise<any>} - Returns a promise that resolves when something happens
   * @memberof YoumeIM
   */
  @Cordova()
  init(appKey: string, secretKey: string, regionId: string): Promise<any> { return; }

  /**
   * login
   * 
   * @param {string} userid 
   * @param {string} password
   * @param {string} token
   * @return {Promise<any>} - Returns a promise
   * @memberof YoumeIM
   */
  @Cordova()
  login(userid: string, password: string, token: string): Promise<any> { return; }

  /**
   * logout sdk
   *
   * @memberof YoumeIM
   * @return {Promise<any>} - Returns Promise
   * @memberof YoumeIM
   */
  @Cordova()
  logout(): Promise<any> { return; }

  /**
   * send text message
   *
   * @param {string} strRecvId
   * @param {number} iChatType
   * @param {string} strMsgContent
   * @param {string} strAttachParam
   * @return {Promise<any>} - Returns Promise
   * @memberof YoumeIM
   */
  @Cordova()
  sendTextMessage(strRecvId: string, iChatType: number, strMsgContent: string, strAttachParam: string): Promise<any> { return; }
  
  /**
   * regist callback function for reconnect event
   * 
   * @param {Function} success - callback function for success
   * @param {Function} error - callback function for error
   * @memberof YoumeIM
   */
  @Cordova({ sync: true })
  registerReconnectCallback(success: Function, error: Function): void { return; }

  /**
   * regist callback function for kick out event
   * 
   * @param {Funtion} success - callback function for success
   * @param {Function} error - callback function for error
   * @memberof YoumeIM
   * @return
   */
  @Cordova({ sync: true })
  registerKickOffCallback(success: Function, error: Function): void { return; }

  /**
   * start record audio message
   *
   * @param {string} recvID
   * @param {number} chatType
   * @param {string} extraText
   * @param {boolean} needRecognize
   * @returns {Promise<any>}
   * @memberof YoumeIM
   */
  @Cordova()
  startRecordAudioMessage(recvID: string, chatType: number, extraText: string, needRecognize: boolean): Promise<any> { return; }

  /**
   * cancel audio message
   *
   * @returns {Promise<any>}
   * @memberof YoumeIM
   */
  @Cordova()
  cancelAudioMessage(): Promise<any> { return; }

  /**
   * stop record audio message, and send it
   *
   * @returns {Promise<any>}
   * @memberof YoumeIM
   */
  @Cordova()
  stopAndSendAudioMessage(): Promise<any> { return; }

  /**
   * join single chart room by room id
   *
   * @param {string} roomID
   * @returns {Promise<any>}
   * @memberof YoumeIM
   */
  @Cordova()
  joinChatRoom(roomID: string): Promise<any> { return; }

  /**
   * leave chat room by id
   *
   * @param {string} roomID
   * @returns {Promise<any>}
   * @memberof YoumeIM
   */
  @Cordova()
  leaveChatRoom(roomID: string): Promise<any> { return; }

  /**
   * start play audio
   *
   * @param {string} audioPath
   * @returns {Promise<any>}
   * @memberof YoumeIM
   */
  @Cordova()
  startPlayAudio(audioPath: string): Promise<any> { return; }

  /**
   * stop play audio
   * 
   * @return {Promise<any>} Returns Promise
   * @memberof YoumeIM
   */
  @Cordova()
  stopPlayAudio(): Promise<any> { return; }
}
