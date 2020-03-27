import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post("/login")
  // async login(): Promise<User> {

  // }

  @Post('/new')
  async create(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.usersService.createUserByPassword(createUserDto);
  }

  @Get('/')
  async findAll(): Promise<User[]> {
    return this.usersService.findAllUser();
  }

  // @Get(':id')
  // async findUser(id: string): Promise<User> {
  //   return this.usersService.findUserById(id);
  // }
}
