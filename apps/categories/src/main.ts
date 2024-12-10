import { NestFactory } from '@nestjs/core';
import { CategoriesModule } from './categories.module';

async function bootstrap() {
  const app = await NestFactory.create(CategoriesModule);
  await app.listen(process.env.port ?? 3000);

  // const rmqService = app.get<RmqService>(RmqService);  // Obtiene el servicio de RabbitMQ
  // app.connectMicroservice(rmqService.getOptions('BILLING'));  // Conecta el microservicio utilizando la configuración de RmqService
  // await app.startAllMicroservices();  // Arranca todos los microservicios



}
bootstrap();
