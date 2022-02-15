import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller('categoria')
export class CategoriaController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaService.createPrisma(createCategoriaDto);
  }

  @Get()
  findAll() {
    return this.categoriaService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaService.findOnePrisma(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriaService.updatePrisma(+id, updateCategoriaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.categoriaService.removePrisma(+id);
  }
}
