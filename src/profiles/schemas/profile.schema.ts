import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Education } from './education.schema';
import { Experience } from './experience.schema';

export type ProfileDocument = Profile & Document;

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

  @Prop()
  linkedIn: string;

  @Prop([String])
  skills: string[];

  @Prop([Education])
  educations: Education[];

  @Prop([Experience])
  experiences: Experience[];
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
