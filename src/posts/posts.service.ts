import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Post, PostDocument } from './schemas/post.schema';

import { CreatePostDto } from './dtos/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>,
  ) {}

  async findByTarget(target: string) {
    // return this.postModel
    //   .find({ user: userId })
    //   .populate('user', ['email', 'name', 'avatar']);

    return this.postModel.aggregate([
      {
        $match: { target: new Types.ObjectId(target) }, // get target a user
      },
      {
        $lookup: {
          from: 'profiles',
          localField: 'user',
          foreignField: 'user',
          as: 'profileInfo',
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'user',
          foreignField: '_id',
          as: 'userInfo',
        },
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              { $arrayElemAt: ['$profileInfo', 0] },
              { $arrayElemAt: ['$userInfo', 0] },
              '$$ROOT',
            ],
          },
        },
      },
      {
        $project: {
          text: 1,
          user: 1,
          avatar: 1,
          name: 1,
          status: 1,
          created: 1,
          updated: 1,
        },
      },
      {
        $sort: { created: -1 },
      },
    ]);
  }

  async create(userId: string, body: CreatePostDto) {
    const post = await this.postModel.create({
      ...body,
      user: userId,
      target: body.target ? body.target : userId,
    });
    return await post.save();
  }

  async update(userId: string, postId: string, attrs: Partial<PostDocument>) {
    const post = await this.postModel.findOne({
      id: postId,
      user: userId,
    });

    if (!post) {
      throw new NotFoundException('post not found');
    }

    Object.assign(post, attrs);

    return await post.save();
  }

  async delete(userId: string, postId: string) {
    const query = this.postModel.findOneAndDelete({
      id: postId,
      user: userId,
    });

    return await query.exec();
  }
}
