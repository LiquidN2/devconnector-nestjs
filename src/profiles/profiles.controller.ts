import {
  Controller,
  Get,
  Post,
  Body,
  Session,
  Patch,
  Param,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';

// Types
import { JwtPayloadDecoded } from '../auth/strategies/jwt.strategy';

// Guards
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

// Interceptors

// Custom Decorators
import { CurrentUser } from '../users/decorators/current-user.decorator';

// Services
import { ProfilesService } from './profiles.service';

// DTOs
import { CreateProfileDto } from './dtos/create-profile.dto';

// Schema

@Controller('/api/profiles')
@UseGuards(JwtAuthGuard)
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  async createProfile(
    @Body() body: CreateProfileDto,
    @CurrentUser() user: JwtPayloadDecoded,
  ) {
    return await this.profilesService.create(user.userId, body);
  }

  @Get('/me')
  async findMyProfile(@CurrentUser() user: JwtPayloadDecoded) {
    const profile = await this.profilesService.findByUserId(user.userId);
    if (!profile) {
      throw new NotFoundException('profile not found');
    }
    return profile;
  }

  @Patch('/me')
  async updateMyProfile(
    @Body() body: CreateProfileDto,
    @CurrentUser() user: JwtPayloadDecoded,
  ) {
    return await this.profilesService.updateByUserId(user.userId, body);
  }

  @Patch('/:profileId')
  async updateProfile(
    @Body() body: CreateProfileDto,
    @Param('profileId') profileId: string,
  ) {
    return await this.profilesService.update(profileId, body);
  }
}
