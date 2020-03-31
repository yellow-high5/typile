import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './utils/auth/auth.service';
import { CustomLogger } from './utils/logger/custom-logger.service';
import { LocalAuthGuard } from './utils/auth/guards/local-auth.gurad';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  //メールパスワード認証
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async loginByEmailPassword(@Request() req) {
    CustomLogger.log(`User#${req.user.id} attempting access`);
    return this.authService.login(req.user);
  }

  //Facebook認証
  // @UseGuards(FacebookAuthGuard)
  // @Post('oauth/facebook')
  // async loginByFacebook(@Request() req) {

  // }

  //Google認証
  // @UseGuards(GoogleAuthGuard)
  // @Post('oauth/google')
  // async loginByGoogle(@Request() req) {

  // }

  //Github認証
  // @UseGuards(GithubAuthGuard)
  // @Post('oauth/github')
  // async loginByGithub(@Request() req) {

  // }

  //Twitter認証
  // @UseGuards(TwitterAuthGuard)
  // @Post('oauth/twitter')
  // async loginByTwitter(@Request() req) {

  // }
}
