import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Education {
  @Prop({ required: true })
  school: string;

  @Prop({ required: true })
  qualification: string;

  @Prop({ required: true })
  from: Date;

  @Prop({ required: true })
  to: Date | null;
}