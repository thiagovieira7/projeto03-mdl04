import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';
import { Usuario } from '@prisma/client';
import { LoginDto } from 'src/auth/dto/login.dto';
import { JwtPayload } from 'src/auth/jwt.strategy';

@Injectable()
export class UsuariosService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUsuarioDto): Promise<Usuario> {
    data.senha = await bcrypt.hash(data.senha, 10);
    return await this.prisma.usuario.create({ data });
  }

  async findByLogin(login: LoginDto): Promise<Usuario>{
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: login.email,
      },
    })

    if(!user) {
      throw new HttpException('usuario nao encontrado',HttpStatus.NOT_FOUND);
    }

    const senhaIgual = await bcrypt.compare(login.senha, user.senha);

    if (!senhaIgual) {
      throw new HttpException('senha invalida', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async validateUser(payload: JwtPayload): Promise<Usuario> {
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: payload.email,
      }
    });

    if(!user){
      throw new HttpException('Token Invalido', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async findAllPrisma(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany();
  }

  async findOnePrisma(id: number): Promise<Usuario> {
    return await this.prisma.usuario.findUnique({ where: {id}});
  }

  async updatePrisma(id: number, _updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    return  await this.prisma.usuario.update({
      data:{..._updateUsuarioDto},
      where:{id}
  });
  }

  async removePrisma(id: number) {
    return await this.prisma.usuario.delete({ where: {id}});
  }
}

