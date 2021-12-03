import { Controller, Post, Body, Session, Patch, Param } from '@nestjs/common';

// Custom Decorators
import { CurrentUser } from '../users/decorators/current-user.decorator';

// Interceptors

// Services
import { ProfilesService } from './profiles.service';

// DTOs
import { CreateProfileDto } from './dtos/create-profile.dto';

// Schema

@Controller('/api/profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  async createProfile(@Body() body: CreateProfileDto, @Session() session: any) {
    return this.profilesService.create(session.userId, body);
  }

  @Patch('/:profileId')
  async updateProfile(
    @Body() body: CreateProfileDto,
    @Param('profileId') profileId: string,
  ) {
    return await this.profilesService.update(profileId, body);
  }
}
