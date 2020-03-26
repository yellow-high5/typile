import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { CustomLoggerModule } from '../../utils/logger/custom-logger.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [CustomLoggerModule],
})
export class UsersModule {}
