import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LikesService } from './likes.service';
import { Like, LikeSchema } from './schemas/like.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Like.name, schema: LikeSchema }]),
  ],
  providers: [LikesService],
})
export class LikesModule {}
