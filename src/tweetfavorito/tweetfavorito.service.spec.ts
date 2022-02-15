import { Test, TestingModule } from '@nestjs/testing';
import { TweetfavoritoService } from './tweetfavorito.service';

describe('TweetfavoritoService', () => {
  let service: TweetfavoritoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetfavoritoService],
    }).compile();

    service = module.get<TweetfavoritoService>(TweetfavoritoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
