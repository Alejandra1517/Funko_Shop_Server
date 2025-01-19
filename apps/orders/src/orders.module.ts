import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { AuthModule, DatabaseModule, LoggerModule, RmqModule } from '@app/common';
import { OrdersRepository } from './orders.repository';
import {
  OrderDocument,
  OrderSchema,
} from './entities/order.entity';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: OrderDocument.name, schema: OrderSchema },
    ]),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        HTTP_PORT: Joi.number().required(),
      }),
      envFilePath: './apps/orders/.env',
    }),
    // ClientsModule.registerAsync([
    //   {
    //     name: AUTH_SERVICE,
    //     useFactory: (configService: ConfigService) => ({
    //       transport: Transport.TCP,
    //       options: {
    //         host: configService.get('AUTH_HOST'),
    //         port: configService.get('AUTH_PORT'),
    //       },
    //     }),
    //     inject: [ConfigService],
    //   },
    // ]),
    RmqModule,
    AuthModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
})
export class OrdersModule {}
