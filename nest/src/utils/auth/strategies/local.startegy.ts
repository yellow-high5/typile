import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  //現在、実際に渡すのはemailではなく、username
  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password); //usernameとemailの違い(passport-localに修正を加える)
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
