import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasemtweetsService } from './categoriasemtweets.service';

describe('CategoriasemtweetsService', () => {
  let service: CategoriasemtweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriasemtweetsService],
    }).compile();

    service = module.get<CategoriasemtweetsService>(CategoriasemtweetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
