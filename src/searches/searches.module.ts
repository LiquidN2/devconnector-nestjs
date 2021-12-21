import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SearchesService } from './searches.service';
import { SearchesController } from './searches.controller';

import { User, UserSchema } from '../users/schemas/user.schema';
import { Profile, ProfileSchema } from '../profiles/schemas/profile.schema';
import {
  Connection,
  ConnectionSchema,
} from '../connections/schemas/connection.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Profile.name, schema: ProfileSchema },
      { name: Connection.name, schema: ConnectionSchema },
    ]),
  ],
  providers: [SearchesService],
  controllers: [SearchesController],
})
export class SearchesModule {}
