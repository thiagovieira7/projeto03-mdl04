import { Injectable } from '@nestjs/common';
import { Seguidores } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSeguidoreDto } from './dto/create-seguidore.dto';
import { UpdateSeguidoreDto } from './dto/update-seguidore.dto';

@Injectable()
export class SeguidoresService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  async createPrisma(createSeguidoreDto: CreateSeguidoreDto): Promise<Seguidores> {
    return await this.prisma.seguidores.create({
      data: { ...createSeguidoreDto },
    });
  }

  async findAllPrisma(): Promise<Seguidores[]> {
    return await this.prisma.seguidores.findMany();
  }

  async findOnePrisma(id: number): Promise<Seguidores> {
    return await this.prisma.seguidores.findUnique({ where: {id}});
  }

  async updatePrisma(id: number, _updateSeguidoreDto: UpdateSeguidoreDto): Promise<Seguidores> {
    return  await this.prisma.seguidores.update({
      data:{..._updateSeguidoreDto},
      where:{id}
  });
  }

  async removePrisma(id: number) {
    return await this.prisma.seguidores.delete({ where: {id}});
  }
}
