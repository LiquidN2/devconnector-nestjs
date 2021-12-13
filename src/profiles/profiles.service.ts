import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Profile, ProfileDocument } from './schemas/profile.schema';
import { CreateProfileDto } from './dtos/create-profile.dto';
import { CreateExperienceDto } from './dtos/create-experience.dto';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile.name)
    private readonly profileModel: Model<ProfileDocument>,
  ) {}

  // ------------------------
  // FIND
  async findById(id: string) {
    return this.profileModel
      .findById(id)
      .populate('user', ['name', 'email', 'avatar']);
  }

  async findByUserId(userId: string) {
    return this.profileModel
      .findOne({ user: new Types.ObjectId(userId) })
      .populate('user', ['name', 'email', 'avatar']);
  }

  // ------------------------
  // CREATE
  async create(userId: string, createProfileDto: CreateProfileDto) {
    const profile = await this.findByUserId(userId);
    if (profile) {
      throw new BadRequestException('profile already exists');
    }

    const profileData = { ...createProfileDto, user: userId };

    const newProfile = await this.profileModel.create(profileData);

    return await newProfile.save();
  }

  // ------------------------
  // UPDATE
  async update(profileId: string, attrs: Partial<ProfileDocument>) {
    const profile = await this.findById(profileId);
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

  async addExperience(userId: string, newExperience: CreateExperienceDto) {
    const query = this.profileModel.findOneAndUpdate(
      { user: userId },
      { $push: { experiences: newExperience } },
      { new: true },
    );

    return await query.exec();
  }

  async deleteExperience(userId: string, experienceId: string) {
    const query = this.profileModel.findOneAndUpdate(
      { user: userId },
      { $pull: { experiences: { _id: experienceId } } },
      { new: true },
    );

    return await query.exec();
  }

  async updateExperience(
    userId: string,
    experienceId: string,
    experience: CreateExperienceDto,
  ) {
    const updatedExperience = {};

    for (const field in experience) {
      updatedExperience[`experiences.$.${field}`] = experience[field];
    }

    const query = this.profileModel.findOneAndUpdate(
      {
        user: userId,
        'experiences._id': experienceId,
      },
      { $set: updatedExperience },
      { new: true, upsert: true },
    );

    return await query.exec();
  }
}
