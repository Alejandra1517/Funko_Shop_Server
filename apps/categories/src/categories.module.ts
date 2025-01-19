import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service'
import { CategoriesController } from './categories.controller';
import { RmqModule, DatabaseModule, LoggerModule, AuthModule } from '@app/common';
import { CategoriesRepository } from './categories.repository';
import { PRODUCT_SERVICE } from './constants/service';
import {
  CategoryDocument,
  CategorySchema, 
} from './entities/category.entity';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: CategoryDocument.name, schema: CategorySchema },
    ]),
    RmqModule.register({
      name: PRODUCT_SERVICE,
    }),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        HTTP_PORT: Joi.number().required(),
      }),
      envFilePath: './apps/categories/.env',
    }),
    AuthModule,
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoriesRepository],
})
export class CategoriesModule {}
