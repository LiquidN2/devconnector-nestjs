import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class SigninDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
