import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from 'youme-ionic/core';

/**
 * chat type
 *
 * @export
 * @enum {number}
 */
export enum ChatType {
  Unknow = 0,
  PrivateChat = 1,
  RoomChat = 2,
};

/**
 * server's location
 *
 * @export
 * @enum {number}
 */
export enum ServerZone {
  China = 0;       // China - default
  Singapore = 1;   // Singapore
  America = 2;     // America
  HongKong = 3;    // HongKong
  Korea = 4;       // Korea
  Australia = 5;   // Australia
  Deutschland = 6; // Deutschland
  Brazil = 7;      // Brazil
  India = 8;       // India
  Japan = 9;       // Japan
  Ireland = 10;    // Ireland
};

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
  plugin: 'cordova-plugin-youme-im',
  pluginRef: 'cordova.plugins.YoumeIMCordovaPlugin',
  repo: 'https://github.com/youmesdk/YoumeIMCordovaPlugin',
  install: 'cordova plugin add cordova-plugin-youme-im',
  installVariables: [],
  platforms: ['Android']
})
@Injectable()
export class YoumeIM extends IonicNativePlugin {

  /**
   * init sdk
   * 
   * @param {string} appKey - iapp dentifier, obtained after registering at www.youme.im
   * @param {string} secretKey - app security key, obtained after registering at www.youme.im
   * @param {ServerZone} regionId - server zone
   * @return {Promise<any>}
   * @memberof YoumeIM
   */
  @Cordova()
  init(appKey: string, secretKey: string, regionId: ServerZone): Promise<any> { return; }

  /**
   * login
   * 
   * @param {string} userid - User ID, assigned by the caller, cannot be an empty string. 
   *                          It can only be composed of letters or numbers or underscores. 
   *                          The length is limited to 255 bytes.
   * @param {string} password - Login password, can not be an empty string, 
   *                            can be set to a fixed string without special requirements
   * @param {string} token - User token, used when using server token authentication mode. 
   *                         If not used, token is passed in: "", the token value is obtained by restAPI.
   * @return {Promise<any>}
   * @memberof YoumeIM
   */
  @Cordova()
  login(userid: string, password: string, token: string): Promise<any> { return; }

  /**
   * logout
   *
   * @memberof YoumeIM
   * @return {Promise<any>}
   * @memberof YoumeIM
   */
  @Cordova()
  logout(): Promise<any> { return; }

  /**
   * send text message
   *
   * @param {string} strRecvId - reciver id
   * @param {number} iChatType - chat type
   * @param {string} strMsgContent - message content
   * @param {string} strAttachParam - attach message
   * @return {Promise<any>}
   * @memberof YoumeIM
   */
  @Cordova()
  sendTextMessage(strRecvId: string, iChatType: ChatType, strMsgContent: string, strAttachParam: string): Promise<any> { return; }
  
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
   * @param {string} recvID - reciver's id private; chat: userid，room chat: roomid
   * @param {ChatType} chatType - chatType
   * @param {string} extraText - extra text message for voice message
   * @param {boolean} needRecognize - Whether to enable only recognize voice text, not send voice messages
   * @returns {Promise<any>}
   * @memberof YoumeIM
   */
  @Cordova()
  startRecordAudioMessage(recvID: string, chatType: ChatType, extraText: string, needRecognize: boolean): Promise<any> { return; }

  /**
   * cancel record audio message, not send
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
   * @param {string} roomID - room id
   * @returns {Promise<any>}
   * @memberof YoumeIM
   */
  @Cordova()
  joinChatRoom(roomID: string): Promise<any> { return; }

  /**
   * leave chat room by id
   *
   * @param {string} roomID - room id
   * @returns {Promise<any>}
   * @memberof YoumeIM
   */
  @Cordova()
  leaveChatRoom(roomID: string): Promise<any> { return; }

  /**
   * start play audio
   *
   * @param {string} audioPath - audio file path
   * @returns {Promise<any>}
   * @memberof YoumeIM
   */
  @Cordova()
  startPlayAudio(audioPath: string): Promise<any> { return; }

  /**
   * stop play audio
   * 
   * @return {Promise<any>}
   * @memberof YoumeIM
   */
  @Cordova()
  stopPlayAudio(): Promise<any> { return; }
}
