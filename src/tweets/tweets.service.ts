import { Injectable } from '@nestjs/common';
import { Tweet } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

@Injectable()
export class TweetsService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  async createPrisma(createTweetDto: CreateTweetDto): Promise<Tweet> {
    return await this.prisma.tweet.create({
      data: { ...createTweetDto },
    });
  }

  async findAllPrisma(): Promise<Tweet[]> {
    return await this.prisma.tweet.findMany();
  }

  async findOnePrisma(id: number): Promise<Tweet> {
    return await this.prisma.tweet.findUnique({ where: {id}});
  }

  async updatePrisma(id: number, _updateTweetDto: UpdateTweetDto): Promise<Tweet> {
    return  await this.prisma.tweet.update({
      data:{..._updateTweetDto},
      where:{id}
  });
  }

  async removePrisma(id: number) {
    return await this.prisma.tweet.delete({ where: {id}});
  }
}
