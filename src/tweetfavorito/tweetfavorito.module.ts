import { Module } from '@nestjs/common';
import { TweetfavoritoService } from './tweetfavorito.service';
import { TweetfavoritoController } from './tweetfavorito.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TweetfavoritoController],
  providers: [TweetfavoritoService],
})
export class TweetfavoritoModule {}
