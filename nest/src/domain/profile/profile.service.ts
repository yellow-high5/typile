import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async findAllProfile(): Promise<Profile[]> {
    return this.profileRepository.find();
  }

  async findProfileByUsername(username: string): Promise<Profile | undefined> {
    return this.profileRepository.findOne({
      where: { username: username },
    });
  }
}
