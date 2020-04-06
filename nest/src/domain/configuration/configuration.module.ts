import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Configuration } from './configuration.entity';
import { ConfigurationService } from './configuration.service';

@Module({
  providers: [ConfigurationService],
  imports: [TypeOrmModule.forFeature([Configuration])],
  exports: [ConfigurationService],
})
export class ConfigurationModule {}
