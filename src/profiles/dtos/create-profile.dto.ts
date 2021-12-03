import { IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  handle: string;
}
