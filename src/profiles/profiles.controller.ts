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
  Delete,
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
import { CreateExperienceDto } from './dtos/create-experience.dto';

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

  @Post('/me/experiences')
  async addMyExperience(
    @Body() body: CreateExperienceDto,
    @CurrentUser() user: JwtPayloadDecoded,
  ) {
    // console.log(typeof body.from);
    return await this.profilesService.addExperience(user.userId, body);
  }

  @Patch('/me/experiences/:experienceId')
  async updateMyExperience(
    @Body() body: CreateExperienceDto,
    @CurrentUser() user: JwtPayloadDecoded,
    @Param('experienceId') experienceId: string,
  ) {
    return await this.profilesService.updateExperience(
      user.userId,
      experienceId,
      body,
    );
  }

  @Delete('/me/experiences/:experienceId')
  async deleteMyExperience(
    @CurrentUser() user: JwtPayloadDecoded,
    @Param('experienceId') experienceId: string,
  ) {
    return await this.profilesService.deleteExperience(
      user.userId,
      experienceId,
    );
  }
}
