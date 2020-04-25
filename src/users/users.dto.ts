import { IsString } from 'class-validator';

export class Usersdto {
  @IsString() readonly username: string;
  @IsString() password: string;
}