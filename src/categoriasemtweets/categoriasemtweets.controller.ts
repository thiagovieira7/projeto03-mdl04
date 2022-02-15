import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CategoriasemtweetsService } from './categoriasemtweets.service';
import { CreateCategoriasemtweetDto } from './dto/create-categoriasemtweet.dto';
import { UpdateCategoriasemtweetDto } from './dto/update-categoriasemtweet.dto';

@Controller('categoriasemtweets')
export class CategoriasemtweetsController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly categoriasemtweetsService: CategoriasemtweetsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createCategoriasemtweetDto: CreateCategoriasemtweetDto) {
    return this.categoriasemtweetsService.createPrisma(createCategoriasemtweetDto);
  }

  @Get()
  findAll() {
    return this.categoriasemtweetsService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriasemtweetsService.findOnePrisma(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateCategoriasemtweetDto: UpdateCategoriasemtweetDto) {
    return this.categoriasemtweetsService.updatePrisma(+id, updateCategoriasemtweetDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.categoriasemtweetsService.removePrisma(+id);
  }
}
