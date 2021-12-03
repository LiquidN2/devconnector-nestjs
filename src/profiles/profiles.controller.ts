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

// Guards
import { AuthGuard } from '../guards/auth.guard';

// Interceptors

// Services
import { ProfilesService } from './profiles.service';

// DTOs
import { CreateProfileDto } from './dtos/create-profile.dto';

// Schema

@Controller('/api/profiles')
@UseGuards(AuthGuard)
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  async createProfile(@Body() body: CreateProfileDto, @Session() session: any) {
    return this.profilesService.create(session.userId, body);
  }

  @Get('/me')
  async findMyProfile(@Session() session: any) {
    const { userId } = session;
    const profile = await this.profilesService.findByUserId(userId);
    if (!profile) {
      throw new NotFoundException('profile not found');
    }
    return profile;
  }

  @Patch('/me')
  async updateMyProfile(
    @Body() body: CreateProfileDto,
    @Session() session: any,
  ) {
    // console.log(session);
    const { userId } = session;
    return this.profilesService.updateByUserId(userId, body);
  }

  @Patch('/:profileId')
  async updateProfile(
    @Body() body: CreateProfileDto,
    @Param('profileId') profileId: string,
  ) {
    return await this.profilesService.update(profileId, body);
  }
}
