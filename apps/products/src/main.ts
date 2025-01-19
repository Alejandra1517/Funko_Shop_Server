import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './products.module';
import { ConfigService } from '@nestjs/config';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(ProductsModule);
  const rmqService = app.get<RmqService>(RmqService); // Obtiene el servicio de RabbitMQ
  app.connectMicroservice(rmqService.getOptions('PRODUCT')); // Conecta el microservicio utilizando la configuración de RmqService
  await app.startAllMicroservices(); // Arranca todos los microservicios
 
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  await app.listen(configService.get('HTTP_PORT') || 3002)
}
bootstrap();
