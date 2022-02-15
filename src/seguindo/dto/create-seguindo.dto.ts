/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateSeguindoDto {

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
