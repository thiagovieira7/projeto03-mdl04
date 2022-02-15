/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateUsuarioDto {

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsNotEmpty()
  @IsString()
  bio: string;

  @IsNotEmpty()
  @IsString()
  nascimento: string;

}
