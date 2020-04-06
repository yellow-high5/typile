import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUserByPassword(user: CreateUserDto): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email: email } });
  }

  async findUserById(id: string): Promise<User | undefined> {
    return this.userRepository.findOne(id, {
      relations: ['profile', 'configuration'],
    });
  }

  async deleteUserById(id: string): Promise<void> {
    this.userRepository.delete(id);
    return;
  }
}
