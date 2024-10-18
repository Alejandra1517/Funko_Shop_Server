// import { Module } from '@nestjs/common';
// import {
//   ConfigService,
//   ConfigModule as NestConfigModule,
// } from '@nestjs/config';

// @Module({
//   imports: [NestConfigModule.forRoot()],
//   providers: [ConfigService],
//   exports: [ConfigService],
// })
// export class ConfigModule {}


import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    NestConfigModule.forRoot({
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
