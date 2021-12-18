import { IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

export class CreateConnectionDto {
  @IsMongoId()
  target: Types.ObjectId;
}
