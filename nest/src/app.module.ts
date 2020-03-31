import { Module } from '@nestjs/common';
import { UsersModule } from './domain/users/users.module';
import { AuthModule } from './utils/auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
