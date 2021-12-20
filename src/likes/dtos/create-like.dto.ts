import { IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

export class CreateLikeDto {
  @IsMongoId()
  post: Types.ObjectId;
}
