import { Profile } from '../../profile/profile.entity';

export class CreateUserDto {
  email: string;
  tel: string;
  password: string;
  provider: string;
  profile: Profile;
  //configuration: Configuration;
  configuration: string;
}
