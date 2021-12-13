import { IsString, IsDate, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateEducationDto {
  @IsString()
  school: string;

  @IsString()
  qualification: string;

  @IsDate()
  @Transform(({ obj }) => new Date(obj.from)) // transform to Date
  from: Date;

  @IsDate()
  @Transform(({ obj }) => (obj.to ? new Date(obj.to) : null)) // transform to Date
  to: Date | null;

  @IsString()
  location: string;

  @IsOptional()
  @IsString()
  description: string;
}
