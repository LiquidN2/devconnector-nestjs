import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Profile, ProfileDocument } from './schemas/profile.schema';
import { CreateProfileDto } from './dtos/create-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile.name)
    private readonly profileModel: Model<ProfileDocument>,
  ) {}

  async findById(id: string) {
    return this.profileModel.findById(id);
  }

  async findByUserId(userId: string) {
    return this.profileModel
      .findOne({ user: new Types.ObjectId(userId) })
      .populate('user', ['name', 'email', 'avatar']);
  }

  async create(userId: string, createProfileDto: CreateProfileDto) {
    const profile = await this.findByUserId(userId);
    if (profile) {
      throw new BadRequestException('profile already exists');
    }

    const profileData = { ...createProfileDto, user: userId };

    const newProfile = await this.profileModel.create(profileData);

    return await newProfile.save();
  }

  async update(profileId: string, attrs: Partial<ProfileDocument>) {
    const profile = await this.profileModel.findById(profileId);
    if (!profile) {
      throw new NotFoundException('profile not found');
    }

    Object.assign(profile, attrs);

    return await profile.save();
  }

  async updateByUserId(userId: string, attrs: Partial<ProfileDocument>) {
    const profile = await this.findByUserId(userId);
    if (!profile) {
      throw new NotFoundException('profile not found');
    }
    return await this.update(profile._id, attrs);
  }
}
