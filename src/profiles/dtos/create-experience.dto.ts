import { IsString, IsDate, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateExperienceDto {
  @IsString()
  company: string;

  @IsString()
  position: string;

  @IsOptional()
  @IsDate()
  @Transform(({ obj }) => new Date(obj.from)) // transform to Date
  from: Date;

  @IsOptional()
  @IsDate()
  @Transform(({ obj }) => (obj.to ? new Date(obj.to) : null)) // transform to Date
  to: Date | null;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  location: string;
}
