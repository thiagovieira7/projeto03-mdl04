import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Categoriasemtweets } from '@prisma/client'
import { CreateCategoriasemtweetDto } from './dto/create-categoriasemtweet.dto';
import { UpdateCategoriasemtweetDto } from './dto/update-categoriasemtweet.dto';

@Injectable()
export class CategoriasemtweetsService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  async createPrisma(createCategoriasemtweetsDto: CreateCategoriasemtweetDto): Promise<Categoriasemtweets> {
    return await this.prisma.Categoriasemtweets.create({
      data: { ...createCategoriasemtweetsDto },
    });
  }

  async findAllPrisma(): Promise<Categoriasemtweets[]> {
    return await this.prisma.Categoriasemtweets.findMany();
  }

  async findOnePrisma(id: number): Promise<Categoriasemtweets> {
    return await this.prisma.Categoriasemtweets.findUnique({ where: {id}});
  }

  async updatePrisma(id: number, _updateCategoriasemtweetsDto: UpdateCategoriasemtweetDto): Promise<Categoriasemtweets> {
    return  await this.prisma.Categoriasemtweets.update({
      data:{..._updateCategoriasemtweetsDto},
      where:{id}
  });
  }

  async removePrisma(id: number) {
    return await this.prisma.Categoriasemtweets.delete({ where: {id}});
  }
}
