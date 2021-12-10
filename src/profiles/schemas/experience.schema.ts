import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Experience {
  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  from: Date;

  @Prop({ required: true })
  to: Date | null;
}
