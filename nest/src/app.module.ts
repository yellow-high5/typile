import { Module } from '@nestjs/common';
import { UsersModule } from './domain/users/users.module';
import { AuthModule } from './utils/auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
})
export class AppModule {}
