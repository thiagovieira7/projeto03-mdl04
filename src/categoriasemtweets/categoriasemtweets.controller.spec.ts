import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasemtweetsController } from './categoriasemtweets.controller';
import { CategoriasemtweetsService } from './categoriasemtweets.service';

describe('CategoriasemtweetsController', () => {
  let controller: CategoriasemtweetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriasemtweetsController],
      providers: [CategoriasemtweetsService],
    }).compile();

    controller = module.get<CategoriasemtweetsController>(CategoriasemtweetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
