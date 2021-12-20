import { IsString, IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

export class CreateCommentDto {
  @IsMongoId()
  post: Types.ObjectId;

  @IsString()
  text: string;
}
