import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Education {
  @Prop({ required: true })
  school: string;

  @Prop({ required: true })
  qualification: string;

  @Prop()
  from: Date;

  @Prop()
  to: Date | null;

  @Prop()
  location: string;

  @Prop()
  description: string;
}
