import { PartialType } from '@nestjs/swagger';
import { CreateSeguindoDto } from './create-seguindo.dto';

export class UpdateSeguindoDto extends PartialType(CreateSeguindoDto) {}
