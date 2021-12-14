import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type PostDocument = Post & Document;

@Schema({ timestamps: { createdAt: 'created', updatedAt: 'updated' } })
export class Post {
  @Prop({ default: Date.now })
  created!: Date;

  @Prop({ default: Date.now })
  updated!: Date;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  user!: Types.ObjectId;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: User.name,
    default: null,
  })
  target!: Types.ObjectId | null;

  @Prop()
  text: string;

  @Prop()
  imageName: string;

  @Prop()
  imageUrl: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
