import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service'
import { CategoriesController } from './categories.controller';
import { AUTH_SERVICE, DatabaseModule, LoggerModule } from '@app/common';
import { CategoriesRepository } from './categories.repository';
import {
  CategoryDocument,
  CategorySchema, 
} from './entities/category.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: CategoryDocument.name, schema: CategorySchema },
    ]),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        HTTP_PORT: Joi.number().required(),
      }),
      envFilePath: './apps/categories/.env',
    }),
  
  
    // ClientsModule.register([
    //   {
    //     name: 'CATEGORIES_SERVICE',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: ['amqp://localhost:5672'], // URL de RabbitMQ
    //       queue: 'categories_queue', // Cola específica
    //       queueOptions: { durable: true },
    //     },
    //   },
    // ]),
    
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoriesRepository],
})
export class CategoriesModule {}
