import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';

// import { User } from './interfaces/user.interface';
@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUserByPassword(user: User): Promise<void> {
    this.userRepository.save(user);
  }

  // async createUserByFacebook(): Promise<void> {
  // }

  async findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findUserById(id: string): Promise<User | undefined> {
    return this.userRepository.findOne(id);
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email: email } });
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
