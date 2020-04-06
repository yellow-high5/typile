import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Request, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../../utils/auth/guards/jwt-auth.guard';
import { CustomLogger } from '../../utils/logger/custom-logger.service';
import { Profile } from '../profile/profile.entity';
import { ProfileService } from '../profile/profile.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly profileService: ProfileService,
  ) {}

  @Post('/new')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<void> {
    const user: User = await this.usersService.createUserByPassword(
      createUserDto,
    );
    CustomLogger.log(`[User#${user.id}] Start using service account. 🎉`);
    return;
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async getMe(@Request() req): Promise<User> {
    CustomLogger.log(`[User#${req.user.id}] Get own account. 👀`);
    const user = await this.usersService.findUserById(req.user.id);
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async findAllProfile(@Request() req): Promise<Profile[]> {
    CustomLogger.log(`[User#${req.user.id}] Get All Profile. 👀`);
    return await this.profileService.findAllProfile();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:username')
  async findUserProfile(@Request() req, @Param() params): Promise<Profile> {
    const profile = await this.profileService.findProfileByUsername(
      params.username,
    );
    if (profile !== undefined) {
      CustomLogger.log(`[User#${req.user.id}] Get Profile#${profile.id}. 👀`);
      return profile;
    } else {
      CustomLogger.log(`[User#${req.user.id}] Cannot found profile...`);
      throw new NotFoundException();
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete')
  async deleteUser(@Request() req): Promise<void> {
    this.usersService.deleteUserById(req.user.id);
  }
}
