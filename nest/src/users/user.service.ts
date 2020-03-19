import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { MyLogger } from '../my-logger.service';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  constructor(private myLogger: MyLogger) {
    this.myLogger.setContext('UsersService');
  }

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    this.myLogger.warn('Users Find All List');
    return this.users;
  }
}
