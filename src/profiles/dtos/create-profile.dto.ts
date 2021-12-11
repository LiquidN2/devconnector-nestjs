import {
  IsString,
  IsAlphanumeric,
  IsOptional,
  MaxLength,
} from 'class-validator';

import { Education } from '../schemas/education.schema';

export class CreateProfileDto {
  @IsOptional()
  @IsAlphanumeric()
  handle: string;

  @IsOptional()
  @IsString()
  location: string;

  @IsOptional()
  @IsString()
  github: string;

  @IsOptional()
  @IsString()
  linkedIn: string;

  @IsOptional()
  @IsString()
  website: string;

  @IsOptional()
  @IsString()
  about: string;

  @IsOptional()
  @IsString()
  status: string;

  @IsOptional()
  @MaxLength(20, { each: true })
  skills: string[];

  @IsOptional()
  educations: Education[];
}
