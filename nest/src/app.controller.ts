import { Controller, Post, Request, UnauthorizedException, UseGuards } from '@nestjs/common';

import { AuthService } from './utils/auth/auth.service';
import { LocalAuthGuard } from './utils/auth/guards/local-auth.gurad';
import { CustomLogger } from './utils/logger/custom-logger.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  //メールパスワード認証
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async loginByEmailPassword(@Request() req) {
    CustomLogger.log(
      `[User#${req.user.id}] During the email/password authentication...`,
    );
    const access_token = this.authService.login(req.user);
    if (req.user.id && access_token) {
      CustomLogger.log(`[User#${req.user.id}] Get access token. 🔑`);
      return access_token;
    } else {
      throw new UnauthorizedException();
    }
  }

  //Facebook認証
  // @UseGuards(FacebookAuthGuard)
  // @Post('oauth/facebook')
  // async loginByFacebook(@Request() req) {

  // }

  //Github認証
  // @UseGuards(GithubAuthGuard)
  // @Post('oauth/github')
  // async loginByGithub(@Request() req) {

  // }
}
