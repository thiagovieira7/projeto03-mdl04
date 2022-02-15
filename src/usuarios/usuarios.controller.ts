import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('usuarios')
export class UsuariosController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOnePrisma(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateUsuarioDto) {
    return this.usuariosService.updatePrisma(+id, updateFilmeDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.usuariosService.removePrisma(+id);
  }
}
