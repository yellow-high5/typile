import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Configuration } from './configuration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Configuration])],
})
export class ConfigurationModule {}
