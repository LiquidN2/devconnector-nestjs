import { IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateLikeDto {
  @IsString()
  post: Types.ObjectId;
}
