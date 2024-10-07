import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 4000;
  
  // Enable CORS
  app.enableCors();

  // Configure Swagger
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('my-api')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Start the application
  await app.listen(port);
  
  // Log the server URL when the app starts
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`Swagger documentation available at http://localhost:${port}/api`);
}

bootstrap();