import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';  // Assurez-vous d'importer AppController
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],  // Ajouter ici le contrôleur AppController
      providers: [AppService],       // Ajouter le service ici
    }).compile();

    appController = app.get<AppController>(AppController);  // Récupération du contrôleur
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
