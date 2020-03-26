import * as uuid from 'uuid/v4';

export interface Profile {
  id: uuid;
  name: string;
  avatar: URL;
  birth: Date;
  biography: string;
}
