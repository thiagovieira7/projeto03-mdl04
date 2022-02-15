import { Injectable } from '@nestjs/common';
import { Seguindo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';
import { UpdateSeguindoDto } from './dto/update-seguindo.dto';

@Injectable()
export class SeguindoService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  async createPrisma(createSeguindoDto: CreateSeguindoDto): Promise<Seguindo> {
    return await this.prisma.seguindo.create({
      data: { ...createSeguindoDto },
    });
  }

  async findAllPrisma(): Promise<Seguindo[]> {
    return await this.prisma.seguindo.findMany();
  }

  async findOnePrisma(id: number): Promise<Seguindo> {
    return await this.prisma.seguindo.findUnique({ where: {id}});
  }

  async updatePrisma(id: number, _updateSeguindoDto: UpdateSeguindoDto): Promise<Seguindo> {
    return  await this.prisma.seguindo.update({
      data:{..._updateSeguindoDto},
      where:{id}
  });
  }

  async removePrisma(id: number) {
    return await this.prisma.seguindo.delete({ where: {id}});
  }
}
