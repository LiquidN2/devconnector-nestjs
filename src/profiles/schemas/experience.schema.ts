import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Experience {
  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  position: string;

  @Prop()
  from: Date;

  @Prop()
  to: Date | null;

  @Prop()
  location: string;

  @Prop()
  description: string;
}
