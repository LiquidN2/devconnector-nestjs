import { IsString, IsAlphanumeric, Matches } from 'class-validator';

export class CreateProfileDto {
  @IsAlphanumeric()
  handle: string;
}
