import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activer CORS pour toutes les origines (si nécessaire)
  app.enableCors({
    origin: 'http://localhost:3000', // Permet uniquement les requêtes depuis localhost:3000
    methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Autorise les méthodes que vous souhaitez
    allowedHeaders: ['Content-Type', 'Authorization'], // Autorise les en-têtes nécessaires
  });

  await app.listen(4000);
}
bootstrap();
