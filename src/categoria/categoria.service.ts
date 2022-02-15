import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}
  
  async createPrisma(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    return await this.prisma.categoria.create({
      data: { ...createCategoriaDto },
    });
  }

  async findAllPrisma(): Promise<Categoria[]> {
    return await this.prisma.categoria.findMany();
  }

  async findOnePrisma(id: number): Promise<Categoria> {
    return await this.prisma.categoria.findUnique({ where: {id}});
  }

  async updatePrisma(id: number, _updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {
    return  await this.prisma.categoria.update({
      data:{..._updateCategoriaDto},
      where:{id}
  });
  }

  async removePrisma(id: number) {
    return await this.prisma.categoria.delete({ where: {id}});
  }
}
