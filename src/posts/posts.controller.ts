import {
  Controller,
  UseGuards,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  Body,
} from '@nestjs/common';

// Types
import { JwtPayloadDecoded } from '../auth/strategies/jwt.strategy';

// Guards
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

// Decorators
import { CurrentUser } from '../users/decorators/current-user.decorator';

// Services
import { PostsService } from './posts.service';

// Dtos
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('/api/posts')
@UseGuards(JwtAuthGuard)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/me')
  async getMyPosts(@CurrentUser() user: JwtPayloadDecoded) {
    return await this.postsService.findByUserId(user.userId);
  }

  @Post('/')
  async createPost(
    @CurrentUser() user: JwtPayloadDecoded,
    @Body() body: CreatePostDto,
  ) {
    return await this.postsService.create(user.userId, body);
  }

  @Patch('/:postId')
  async updatePost(
    @CurrentUser() user: JwtPayloadDecoded,
    @Param('postId') postId: string,
    @Body() body: CreatePostDto,
  ) {
    return await this.postsService.update(user.userId, postId, body);
  }

  @Delete('/:postId')
  async deletePost(
    @CurrentUser() user: JwtPayloadDecoded,
    @Param('postId') postId: string,
  ) {
    return await this.postsService.delete(user.userId, postId);
  }
}
