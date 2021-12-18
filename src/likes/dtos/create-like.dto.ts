import { IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateLikeDto {
  @IsString()
  // @Transform(({ obj }) => new Types.ObjectId(obj.post))
  post: Types.ObjectId;
}
