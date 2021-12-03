import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: { createdAt: 'created', updatedAt: 'updated' } })
export class User {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true, unique: true })
  email!: string;

  @Prop({ required: true })
  password!: string;

  @Prop({ default: '' })
  avatar!: string;

  @Prop({ default: Date.now })
  created!: Date;

  @Prop({ default: Date.now })
  updated!: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
