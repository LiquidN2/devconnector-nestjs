import {
  IsString,
  IsAlphanumeric,
  IsOptional,
  MaxLength,
  IsArray,
} from 'class-validator';
// import { Transform, Type } from 'class-transformer';

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
  @IsArray()
  @MaxLength(20, { each: true })
  // @Transform(({ obj }) => obj.skills.split(',')) // transform string to array
  skills: string[];

  @IsOptional()
  educations: Education[];
}
