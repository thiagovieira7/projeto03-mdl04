import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTweetfavoritoDto } from './dto/create-tweetfavorito.dto';
import { UpdateTweetfavoritoDto } from './dto/update-tweetfavorito.dto';
import { Tweetfavorito } from './entities/tweetfavorito.entity';

@Injectable()
export class TweetfavoritoService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  async createPrisma(createTweetfavoritoDto: CreateTweetfavoritoDto): Promise<Tweetfavorito> {
    return await this.prisma.Tweetfavorito.create({
      data: { ...createTweetfavoritoDto },
    });
  }

  async findAllPrisma(): Promise<Tweetfavorito[]> {
    return await this.prisma.Tweetfavorito.findMany();
  }

  async findOnePrisma(id: number): Promise<Tweetfavorito> {
    return await this.prisma.Tweetfavorito.findUnique({ where: {id}});
  }

  async updatePrisma(id: number, _updateTweetfavoritoDto: UpdateTweetfavoritoDto): Promise<Tweetfavorito> {
    return  await this.prisma.Tweetfavorito.update({
      data:{..._updateTweetfavoritoDto},
      where:{id}
  });
  }

  async removePrisma(id: number) {
    return await this.prisma.Tweetfavorito.delete({ where: {id}});
  }
}
