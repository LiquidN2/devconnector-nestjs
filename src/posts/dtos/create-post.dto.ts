import { IsOptional, IsString } from 'class-validator';
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
  target: Types.ObjectId;
}
