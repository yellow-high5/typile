import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { UsersModule } from './domain/users/users.module';
import { AuthModule } from './utils/auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
})
export class AppModule {}
