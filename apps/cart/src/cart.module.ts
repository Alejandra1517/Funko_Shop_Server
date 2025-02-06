import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartDocument, CartSchema } from './entities';
import { CartItemModule } from './cart-item/cart-item.module';
import { CartRepository } from './cart.repository';
import { AuthModule, RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { PRODUCT_SERVICE, USER_SERVICE } from './constants/service';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CartDocument.name, schema: CartSchema },
    ]),
    RmqModule.register({
      name: PRODUCT_SERVICE,
    }),
    RmqModule.register({
      name: USER_SERVICE,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        HTTP_PORT: Joi.number().required(),
      }),
      envFilePath: './apps/categories/.env',
    }),
    AuthModule,
    CartItemModule,
  ],
  controllers: [CartController],
  providers: [CartService, CartRepository],
})
export class CartModule {}
