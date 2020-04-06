import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';

@Module({
  providers: [ProfileService],
  imports: [TypeOrmModule.forFeature([Profile])],
  exports: [ProfileService],
})
export class ProfileModule {}
