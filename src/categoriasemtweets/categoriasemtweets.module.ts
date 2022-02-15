import { Module } from '@nestjs/common';
import { CategoriasemtweetsService } from './categoriasemtweets.service';
import { CategoriasemtweetsController } from './categoriasemtweets.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CategoriasemtweetsController],
  providers: [CategoriasemtweetsService],
})
export class CategoriasemtweetsModule {}
