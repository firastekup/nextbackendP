import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;

  await app.listen(port);
  
  // Log the server URL when the app starts
  console.log(`Server is running at http://localhost:${port}`);
}

bootstrap();
