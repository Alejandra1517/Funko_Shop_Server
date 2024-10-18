// import { Module } from '@nestjs/common';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
// import { UsersModule } from './users/users.module';

// @Module({
//   imports: [UsersModule],
//   controllers: [AuthController],
//   providers: [AuthService],
// })
// export class AuthModule {}

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from './users/users.module';
// import { LoggerModule } from '@app/common';
import { ConfigModule } from '../../../libs/common/src/config/config.module';
import { DatabaseModule } from '../../../libs/common/src/database/database.module';

@Module({
  imports: [UsersModule, ConfigModule, DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
