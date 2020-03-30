import { Body, Controller, Param, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { CustomLogger } from '../../utils/logger/custom-logger.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //認証ログイン(JWT取得)
  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }

  //プロフィール取得
  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }

  //アプリ設定情報取得
  // @UseGuards(JwtAuthGuard)
  // @Get('configuration')
  // getProfile(@Request() req) {
  //   return req.user;
  // }

  //ユーザー一覧取得
  @Get('/')
  async findAll(): Promise<User[]> {
    CustomLogger.log('findAll!!!');
    return this.usersService.findAllUser();
  }

  //新規ユーザー登録
  @Post('/new')
  async create(@Body() createUserDto: CreateUserDto): Promise<void> {
    CustomLogger.log('create scucess');
    return this.usersService.createUserByPassword(createUserDto);
  }

  //ユーザー取得
  @Get(':id')
  async findUser(@Param() params): Promise<User> {
    const user = this.usersService.findUserById(params.id);
    if (user !== undefined) {
      CustomLogger.log(`${params.id} is found!`);
      return user;
    } else {
      CustomLogger.log(`${params.id} is not found...`);
      return;
    }
  }

  //ユーザー更新
  // @UseGuards(JwtAuthGuard)

  //ユーザー削除
  // @UseGuards(JwtAuthGuard)
}
