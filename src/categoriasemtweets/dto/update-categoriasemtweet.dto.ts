import { PartialType } from '@nestjs/swagger';
import { CreateCategoriasemtweetDto } from './create-categoriasemtweet.dto';

export class UpdateCategoriasemtweetDto extends PartialType(CreateCategoriasemtweetDto) {}
