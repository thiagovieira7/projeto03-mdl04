import { PartialType } from '@nestjs/swagger';
import { CreateSeguidoreDto } from './create-seguidore.dto';

export class UpdateSeguidoreDto extends PartialType(CreateSeguidoreDto) {}
