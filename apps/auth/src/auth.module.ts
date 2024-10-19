import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from './users/users.module';
import { LoggerModule } from '@app/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    UsersModule,
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION: Joi.string().required(),
        PORT: Joi.number().required(), //we wil setup this env later
      }),
    }),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configService.get<string>('JWT_EXPIRATION')}s`,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}



// import { Module } from '@nestjs/common';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
// import { UsersModule } from './users/users.module';
// import { LoggerModule } from '@app/common';
// import { JwtModule } from '@nestjs/jwt';
// import { ConfigService } from '@nestjs/config';

// @Module({
//   imports: [
//     UsersModule,
//     LoggerModule,
//     JwtModule.registerAsync({
//       useFactory: (configService: ConfigService) => ({
//         secret: configService.get<string>('JWT_SECRET'), //JWT_SECRET not yet defined
//         signOptions: {
//           expiresIn: `${configService.get<string>('JWT_EXPIRATION')}s`, //JWT_EXPIRATION not yet defined
//         },
//       }),
//     }),
//   ],
//   controllers: [AuthController],
//   providers: [AuthService],
// })
// export class AuthModule {}

// import { Module } from '@nestjs/common';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
// import { UsersModule } from './users/users.module';
// import { LoggerModule } from '@app/common';
// import { ConfigModule } from '../../../libs/common/src/config/config.module';
// import { DatabaseModule } from '../../../libs/common/src/database/database.module';

// @Module({
//   imports: [UsersModule, LoggerModule, ConfigModule, DatabaseModule],
//   controllers: [AuthController],
//   providers: [AuthService],
// })
// export class AuthModule {}