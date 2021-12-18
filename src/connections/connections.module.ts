import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConnectionsService } from './connections.service';
import { ConnectionsController } from './connections.controller';
import { Connection, ConnectionSchema } from './schemas/connection.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Connection.name, schema: ConnectionSchema },
    ]),
  ],
  providers: [ConnectionsService],
  controllers: [ConnectionsController],
})
export class ConnectionsModule {}
