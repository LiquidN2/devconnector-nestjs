import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type ConnectionDocument = Connection & Document;

export enum ConnectionType {
  Pending = 'pending',
  Active = 'active',
  Rejected = 'rejected',
}

export type ConnectionStatus =
  | ConnectionType.Pending
  | ConnectionType.Active
  | ConnectionType.Rejected;

@Schema()
export class Connection {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  requester: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  target: Types.ObjectId;

  @Prop({ default: ConnectionType.Pending })
  status: ConnectionStatus;
}

export const ConnectionSchema = SchemaFactory.createForClass(Connection);
