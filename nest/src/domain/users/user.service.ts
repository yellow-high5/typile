import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CustomLogger } from '../../utils/logger/custom-logger.service';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  constructor(private readonly customLogger: CustomLogger) {
    this.customLogger.setContext('UsersService');
  }

  create(user: User): void {
    this.users.push(user);
  }

  find(id?: number, name?: string): User {
    return this.users[0];
  }

  findAll(): User[] {
    this.customLogger.warn('Users Find All List');
    return this.users;
  }

  update(user: User): void {}

  delete(user: User): void {
    this.users.pop(user);
  }
}
