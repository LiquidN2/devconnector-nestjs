import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';

// Types
import { JwtPayloadDecoded } from '../auth/strategies/jwt.strategy';

// Guards
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

// Decorators
import { CurrentUser } from '../users/decorators/current-user.decorator';

// Services
import { LikesService } from './likes.service';

// Dto
import { CreateLikeDto } from './dtos/create-like.dto';

@Controller('/api/likes')
@UseGuards(JwtAuthGuard)
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Get('')
  async getLikesByPostId(@Query('postId') postId: string) {
    return await this.likesService.findByPostId(postId);
  }

  @Get('summary')
  async getLikesSummary(
    @Query('postId') postId: string,
    @CurrentUser() user: JwtPayloadDecoded,
  ) {
    return await this.likesService.summarizeLikesByPostId(postId, user.userId);
  }

  @Post('')
  async createLike(
    @CurrentUser() user: JwtPayloadDecoded,
    @Body() body: CreateLikeDto,
  ) {
    // return body;
    return await this.likesService.create(user.userId, body);
  }

  @Delete('/:likeId')
  async deleteLike(
    @CurrentUser() user: JwtPayloadDecoded,
    @Param('likeId') likeId: string,
  ) {
    return await this.likesService.delete(user.userId, likeId);
  }

  @Delete('/postId/:postId')
  async deleteLikeByPostId(
    @CurrentUser() user: JwtPayloadDecoded,
    @Param('postId') postId: string,
  ) {
    return await this.likesService.deleteByPostId(user.userId, postId);
  }
}
