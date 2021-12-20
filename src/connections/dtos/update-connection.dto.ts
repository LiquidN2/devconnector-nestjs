import { IsIn } from 'class-validator';

import { ConnectionType, ConnectionStatus } from '../schemas/connection.schema';

export class UpdateConnectionDto {
  @IsIn([
    ConnectionType.Active,
    ConnectionType.Pending,
    ConnectionType.Rejected,
  ])
  status: ConnectionStatus;
}
