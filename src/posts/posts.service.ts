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

  async findByUserId(userId: string) {
    return this.postModel.find({ user: userId });
  }

  async create(userId: string, body: CreatePostDto) {
    const post = await this.postModel.create({ ...body, user: userId });
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
