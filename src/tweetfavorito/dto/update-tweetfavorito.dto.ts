import { PartialType } from '@nestjs/swagger';
import { CreateTweetfavoritoDto } from './create-tweetfavorito.dto';

export class UpdateTweetfavoritoDto extends PartialType(CreateTweetfavoritoDto) {}
