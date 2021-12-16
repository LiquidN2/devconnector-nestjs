import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Like, LikeDocument } from './schemas/like.schema';

import { CreateLikeDto } from './dtos/create-like.dto';

@Injectable()
export class LikesService {
  constructor(
    @InjectModel(Like.name) private readonly likeModel: Model<LikeDocument>,
  ) {}

  async findByPostId(postId: string) {
    return this.likeModel.aggregate([
      { $match: { post: new Types.ObjectId(postId) } },
    ]);
  }

  async create(userId: string, body: CreateLikeDto) {
    const like = await this.likeModel.findOne({
      user: userId,
      post: body.post,
    });

    if (like) {
      throw new BadRequestException('post is already liked');
    }

    const newLike = await this.likeModel.create({
      ...body,
      user: userId,
    });

    return await newLike.save();
  }

  async delete(userId: string, likeId: string) {
    const query = this.likeModel.findOneAndDelete({
      user: userId,
      _id: likeId,
    });

    return await query.exec();
  }

  async summarizeLikesByPostId(postId: string, userId: string) {
    const count = await this.likeModel.count({ post: postId });
    const like = await this.likeModel.find({ post: postId, user: userId });

    return { count, isLiked: !!like };
  }
}
