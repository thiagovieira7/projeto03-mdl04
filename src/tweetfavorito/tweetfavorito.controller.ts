import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TweetfavoritoService } from './tweetfavorito.service';
import { CreateTweetfavoritoDto } from './dto/create-tweetfavorito.dto';
import { UpdateTweetfavoritoDto } from './dto/update-tweetfavorito.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('tweetfavorito')
export class TweetfavoritoController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly tweetfavoritoService: TweetfavoritoService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createTweetfavoritoDto: CreateTweetfavoritoDto) {
    return this.tweetfavoritoService.createPrisma(createTweetfavoritoDto);
  }

  @Get()
  findAll() {
    return this.tweetfavoritoService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweetfavoritoService.findOnePrisma(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateTweetfavoritoDto: UpdateTweetfavoritoDto) {
    return this.tweetfavoritoService.updatePrisma(+id, updateTweetfavoritoDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.tweetfavoritoService.removePrisma(+id);
  }
}
