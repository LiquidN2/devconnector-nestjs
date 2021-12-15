import { IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { Types } from 'mongoose';

export class CreatePostDto {
  @IsOptional()
  @IsString()
  text: string;

  @IsOptional()
  @IsString()
  imageName: string;

  @IsOptional()
  @IsString()
  imageUrl: string;

  @IsOptional()
  // @Transform(({ obj }) => new Types.ObjectId(obj.target))
  target: Types.ObjectId;
}
