import { Body, Controller, Get, NotFoundException, Param, Post, Request, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../../utils/auth/guards/jwt-auth.guard';
import { CustomLogger } from '../../utils/logger/custom-logger.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService, // private readonly authService: AuthService,
  ) {}

  //新規ユーザー登録
  @Post('/new')
  async create(@Body() createUserDto: CreateUserDto): Promise<void> {
    CustomLogger.log(`creating User#${createUserDto.id}`);
    return this.usersService.createUserByPassword(createUserDto);
  }

  //自分のプロフィール取得
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req): Promise<User> {
    CustomLogger.log(`[User#${req.user.id}] get own profile. 👀`);
    const user = this.usersService.findUserById(req.user.id);
    return user;
  }

  //アプリ設定情報取得
  // @UseGuards(JwtAuthGuard)
  // @Get('configuration')
  // getProfile(@Request() req) {
  //   return req.user;
  // }

  //ユーザープロフィール情報一覧取得
  @UseGuards(JwtAuthGuard)
  @Get('/')
  async findAll(@Request() req): Promise<User[]> {
    CustomLogger.log(`[User#${req.user.id}] get all user list. 👀`);
    return this.usersService.findAllUser();
  }

  //個人プロフィール情報取得
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findUser(@Request() req, @Param() params): Promise<User> {
    const user = this.usersService.findUserById(params.id);
    if (user !== undefined) {
      CustomLogger.log(
        `[User#${req.user.id}] get User#${params.id} profile. 👀`,
      );
      return user;
    } else {
      CustomLogger.log(`${params.id} is not found...`);
      throw new NotFoundException();
    }
  }

  //ユーザー更新
  // @UseGuards(JwtAuthGuard)

  //ユーザー削除
  // @UseGuards(JwtAuthGuard)
}
