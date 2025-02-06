import { NestFactory } from '@nestjs/core';
import { CartModule } from './cart.module';

async function bootstrap() {
  const app = await NestFactory.create(CartModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();


// import { NestFactory } from '@nestjs/core';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
//     transport: Transport.RMQ,
//     options: {
//       urls: ['amqp://localhost:5672'],
//       queue: 'products_queue',
//       queueOptions: { durable: true },
//     },
//   });
//   await app.listen();
// }
// bootstrap();
