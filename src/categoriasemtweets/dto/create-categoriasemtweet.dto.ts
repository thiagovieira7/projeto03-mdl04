/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCategoriasemtweetDto {

  @IsNotEmpty()
  @IsInt()
  tweetid: number;

  @IsNotEmpty()
  @IsInt()
  categoriaid: number;
}
