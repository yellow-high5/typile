import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: '1',
        email: 'user@sample.com',
        tel: '080-0000-1111',
        password: 'p@ssw0rd',
        provider: 'password',
        profile: '1',
        configuration: '1',
        notification: '1',
      },
    ];
  }

  async createUserByPassword(user: User): Promise<void> {
    this.users.push(user);
  }

  async createUserByFacebook(): Promise<void> {
    let user: User = {
      id: '3',
      email: 'user-facebook@sample.com',
      tel: '080-0000-2222',
      password: 'p@ssw0rd',
      provider: 'facebook',
      profile: '2',
      configuration: '2',
      notification: '2',
    };
  }

  async findAllUser(): Promise<User[]> {
    return this.users;
  }

  async findUserById(id: string): Promise<User | undefined> {
    return this.users.find(user => {
      user.id === id;
    });
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => {
      user.email === email;
    });
  }

  // @UseGuards(AuthGuard)
  // async updateUser(): Promise<User | undefined> {
  //   ユーザー更新処理
  // }

  // @UseGuards(AuthGuard)
  // async deleteUserById(id: string): Promise<void> {
  //   ユーザー削除処理
  // }
}
