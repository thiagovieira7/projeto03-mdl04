import { Test, TestingModule } from '@nestjs/testing';
import { TweetfavoritoController } from './tweetfavorito.controller';
import { TweetfavoritoService } from './tweetfavorito.service';

describe('TweetfavoritoController', () => {
  let controller: TweetfavoritoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TweetfavoritoController],
      providers: [TweetfavoritoService],
    }).compile();

    controller = module.get<TweetfavoritoController>(TweetfavoritoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
