import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CustomLoggerModule } from '../../utils/logger/custom-logger.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [CustomLoggerModule],
  exports: [UsersService],
})
export class UsersModule {}
