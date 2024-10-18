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


import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from './users/users.module';
import { LoggerModule } from '@app/common';

@Module({
  imports: [UsersModule, LoggerModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
