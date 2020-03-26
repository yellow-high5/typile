import * as uuid from 'uuid/v4';

export interface User {
  id: uuid; // UUIDにする
  email: string;
  tel: string;
  password: string; //エンコードされた文字列にする
  oauthProvider: string; // ENUM[Email&Password, Facebook, Twitter, Github]にする
  profile: uuid; //UUIDにする
  configuration: uuid;
  notification: uuid;
}
