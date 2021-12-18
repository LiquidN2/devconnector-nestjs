import { IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateCommentDto {
  @IsString()
  post: Types.ObjectId;

  @IsString()
  text: string;
}
