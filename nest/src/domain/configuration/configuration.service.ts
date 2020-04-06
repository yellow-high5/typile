import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Configuration } from './configuration.entity';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';

@Injectable()
export class ConfigurationService {
  constructor(
    @InjectRepository(Configuration)
    private ConfigurationRepostiory: Repository<Configuration>,
  ) {}

  async createConfiguration(
    Configuration: CreateConfigurationDto,
  ): Promise<Configuration> {
    return await this.ConfigurationRepostiory.save(Configuration);
  }

  async findConfigurationByID(id: string): Promise<Configuration | undefined> {
    return this.ConfigurationRepostiory.findOne(id);
  }

  async updateConfigurationByID(
    Configuration: UpdateConfigurationDto,
  ): Promise<Configuration> {
    return await this.ConfigurationRepostiory.save(Configuration);
  }
}
