import { Module } from '@nestjs/common';
import { ProductsService } from './products.service'
import { ProductsController } from './products.controller';
import { AuthModule, DatabaseModule, LoggerModule, RmqModule } from '@app/common';
import { ProductsRepository } from './products.repository';
import {
  ProductDocument,
  ProductSchema, 
} from './entities/product.entity';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ProductDocument.name, schema: ProductSchema },
    ]
  ),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        HTTP_PORT: Joi.number().required(),
        RABBIT_MQ_PRODUCT_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/products/.env',
    }),
    RmqModule,
    AuthModule
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
