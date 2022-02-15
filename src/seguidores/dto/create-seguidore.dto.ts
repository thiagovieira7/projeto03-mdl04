/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateSeguidoreDto {

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
