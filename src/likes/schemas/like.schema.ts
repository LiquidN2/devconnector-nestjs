import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Post } from '../../posts/schemas/post.schema';

export type LikeDocument = Like & Document;

@Schema()
export class Like {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  user!: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Post.name })
  post!: Types.ObjectId;
}

export const LikeSchema = SchemaFactory.createForClass(Like);
