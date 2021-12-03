import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type ProfileDocument = Profile & Document;

@Schema()
class Education {
  @Prop({ required: true })
  school: string;

  @Prop({ required: true })
  qualification: string;
}

@Schema({ timestamps: { createdAt: 'created', updatedAt: 'updated' } })
export class Profile {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  user!: Types.ObjectId;

  @Prop({ required: true, maxlength: 40, unique: true })
  handle!: string;

  @Prop({ default: Date.now })
  created!: Date;

  @Prop({ default: Date.now })
  updated!: Date;

  @Prop()
  company: string;

  @Prop()
  website: string;

  @Prop()
  location: string;

  @Prop()
  status: string;

  @Prop()
  bio: string;

  @Prop()
  githubUser: string;

  @Prop([String])
  skills: string[];

  // @Prop([Education])
  // education: Education[];
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
