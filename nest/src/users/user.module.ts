import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { LoggerModule } from '../logger.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [LoggerModule],
})
export class UsersModule {}
