import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@youme-ionic/core';

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
 * file type
 *
 * @export
 * @enum {number}
 */
export enum FileType {
  Other = 0,
  Audio = 1,
  Image = 2,
  Video = 3,
}

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
 * @name YoumeIM
 * @description
 * This plugin facilitates the usage of Youme IM in an Ionic apps with the integrated YoumeIMSDK
 *
 * @usage
 * ```typescript
 * import { YoumeIM } from '@youme-ionic/youme-im';
 *
 *
 * constructor(private youmeIM: YoumeIM) { }
 *
 * ...
 *
 *
 * this.youmeIM.init('xxxxx', 'xxxxx', 0)
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
   * @param {string} appKey - iapp dentifier, obtained after registering at www.youme.im
   * @param {string} secretKey - app security key, obtained after registering at www.youme.im
   * @param {ServerZone} regionId - server zone
   * @return {Promise<any>}
   */
  @Cordova()
  init(appKey: string, secretKey: string, regionId: ServerZone): Promise<any> { return; }

  /**
   * login
   * @param {string} userid - User ID, assigned by the caller, cannot be an empty string. 
   *                          It can only be composed of letters or numbers or underscores. 
   *                          The length is limited to 255 bytes.
   * @param {string} password - Login password, can not be an empty string, 
   *                            can be set to a fixed string without special requirements
   * @param {string} token - User token, used when using server token authentication mode. 
   *                         If not used, token is passed in: "", the token value is obtained by restAPI.
   * @return {Promise<any>}
   */
  @Cordova()
  login(userid: string, password: string, token: string): Promise<any> { return; }

  /**
   * logout
   * @return {Promise<any>}
   */
  @Cordova()
  logout(): Promise<any> { return; }

  /**
   * send text message
   * @param {string} strRecvId - reciver id
   * @param {number} iChatType - chat type
   * @param {string} strMsgContent - message content
   * @param {string} strAttachParam - attach message
   * @return {Promise<any>}
   */
  @Cordova()
  sendTextMessage(strRecvId: string, iChatType: ChatType, strMsgContent: string, strAttachParam: string): Promise<any> { return; }
  
  /**
   * regist callback function for reconnect event
   * @param {Function} success - callback function for success
   * @param {Function} error - callback function for error
   * @return {Promise<any>}
   */
  @Cordova({ sync: true })
  registerReconnectCallback(success: Function, error: Function): void { return; }

  /**
   * regist callback function for kick out event
   * @param {Funtion} success - callback function for success
   * @param {Function} error - callback function for error
   * @return
   */
  @Cordova({ sync: true })
  registerKickOffCallback(success: Function, error: Function): void { return; }

  /**
   * regist callback function for message event
   *
   * @param {Function} success - callback function for success
   * @param {Function} error - callback function for error
   * @returns {void}
   */
  @Cordova({ sync: true })
  registerMsgEventCallback(success: Function, error: Function): void { return; }

  /**
   * start record audio message
   * @param {string} recvID - reciver's id; private chat: userid，room chat: roomid
   * @param {ChatType} chatType - chatType
   * @param {string} extraText - extra text message for voice message
   * @param {boolean} needRecognize - Whether to enable only recognize voice text, not send voice messages
   * @returns {Promise<any>}
   */
  @Cordova()
  startRecordAudioMessage(recvID: string, chatType: ChatType, extraText: string, needRecognize: boolean): Promise<any> { return; }

  /**
   * cancel record audio message, not send
   * @returns {Promise<any>}
   */
  @Cordova()
  cancelAudioMessage(): Promise<any> { return; }

  /**
   * stop record audio message, and send it
   * @returns {Promise<any>}
   */
  @Cordova()
  stopAndSendAudioMessage(): Promise<any> { return; }

  /**
   * join single chart room by room id
   * @param {string} roomID - room id
   * @returns {Promise<any>}
   */
  @Cordova()
  joinChatRoom(roomID: string): Promise<any> { return; }

  /**
   * leave chat room by id
   * @param {string} roomID - room id
   * @returns {Promise<any>}
   */
  @Cordova()
  leaveChatRoom(roomID: string): Promise<any> { return; }

  /**
   * start play audio
   * @param {string} audioPath - audio file path
   * @returns {Promise<any>}
   */
  @Cordova()
  startPlayAudio(audioPath: string): Promise<any> { return; }

  /**
   * stop play audio
   * @return {Promise<any>}
   */
  @Cordova()
  stopPlayAudio(): Promise<any> { return; }

  /**
   * send file
   *
   * @param {string} strRecvId - reciver's id, private chat: userid，room chat: roomid
   * @param {ChatType} iChatType - ChatType
   * @param {string} filePath - file path
   * @param {string} strAttachParam - attach string message
   * @param {FileType} fileType - FileType
   * @returns {Promise<any>}
   */
  @Cordova()
  sendFileMessage(strRecvId: string, iChatType: ChatType: , filePath: string, strAttachParam: string, fileType: FileType): Promise<any> { return; }

  /**
   * switch transfer file type
   *
   * @param {(string | number)} transType - 0 message will delivery directly;
   *                                        1 means just cc to app server, not delivery directly
   * @returns {Promise<any>}
   */
  @Cordova()
  switchTransType(transType: string | number): Promise<any> { return; }
}