import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Comment, CommentDocument } from './schemas/comment.schema';

import { CreateCommentDto } from './dtos/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: Model<CommentDocument>,
  ) {}

  async findByPostId(postId: string) {
    return this.commentModel
      .find({ post: postId })
      .populate('user', ['name', 'avatar']);
  }

  async create(userId: string, body: CreateCommentDto) {
    const comment = await this.commentModel.create({
      user: userId,
      post: body.post,
      text: body.text,
    });

    return await comment.save();
  }

  async delete(userId: string, commentId: string) {
    const query = this.commentModel.findOneAndDelete({
      _id: commentId,
      user: userId,
    });

    return await query.exec();
  }
}
