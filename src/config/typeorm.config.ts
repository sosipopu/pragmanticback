import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm/entities/User';

export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: configService.get<string>('DATABASE_HOST'),
      port: parseInt(configService.get<string>('DATABASE_PORT')),
      username: configService.get<string>('DATABASE_USER'),
      password: configService.get<string>('DATABASE_PASS'),
      database: configService.get<string>('DATABASE_NAME'),
      entities: [UserEntity],
      synchronize: true,
    };
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],

  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),

  inject: [ConfigService],
};
