import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Delete,
  Param,
} from '@nestjs/common';

// Types
import { JwtPayloadDecoded } from '../auth/strategies/jwt.strategy';

// Guards

// Decorators
import { CurrentUser } from '../users/decorators/current-user.decorator';

// Service
import { CommentsService } from './comments.service';

// Dto
import { CreateCommentDto } from './dtos/create-comment.dto';

@Controller('/api/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get('')
  async getCommentsByPostId(@Query('postId') postId: string) {
    return await this.commentsService.findByPostId(postId);
  }

  @Post('')
  async createComment(
    @CurrentUser() user: JwtPayloadDecoded,
    @Body() body: CreateCommentDto,
  ) {
    return await this.commentsService.create(user.userId, body);
  }

  @Delete('/:commentId')
  async deleteComment(
    @CurrentUser() user: JwtPayloadDecoded,
    @Param('commentId') commentId: string,
  ) {
    return await this.commentsService.delete(user.userId, commentId);
  }
}
