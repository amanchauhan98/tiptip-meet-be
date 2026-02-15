import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // run now

  app.enableCors({
    origin: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  await app.listen(process.env.PORT || 3001);
  console.log(`🚀 Backend running on http://localhost:${process.env.PORT || 3001}`);
}
bootstrap();
