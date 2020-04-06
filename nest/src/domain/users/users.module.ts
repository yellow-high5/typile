import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomLoggerModule } from '../../utils/logger/custom-logger.module';
import { ProfileModule } from '../profile/profile.module';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    CustomLoggerModule,
    TypeOrmModule.forFeature([User]),
    ProfileModule,
  ],
  exports: [UsersService],
})
export class UsersModule {}
