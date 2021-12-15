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
import { CreateEducationDto } from './dtos/create-education.dto';

interface ExperienceData {
  type: 'experience';
  body?: CreateExperienceDto; // POST request body
  id?: string; // required for PATCH request
}

interface EducationData {
  type: 'education';
  body?: CreateEducationDto; // POST request body
  id?: string; // required for PATCH request
}

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

  async findByHandle(handle: string) {
    return this.profileModel
      .findOne({ handle })
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

  // ------------------------
  // CREATE - EXPERIENCE OR EDUCATION
  async addExperienceOrEducation(
    userId: string,
    data: EducationData | ExperienceData,
  ) {
    const { type, body } = data;

    const query = this.profileModel.findOneAndUpdate(
      { user: userId },
      {
        $push: {
          [`${type}s`]: {
            $each: [body],
            $sort: { from: -1 },
          },
        },
      },
      { new: true },
    );

    return await query.exec();
  }

  // ------------------------
  // DELETE - EXPERIENCE OR EDUCATION
  async deleteExperienceOrEducation(
    userId: string,
    data: EducationData | ExperienceData,
  ) {
    const { type, id } = data;
    if (!id) return;

    const query = this.profileModel.findOneAndUpdate(
      { user: userId },
      { $pull: { [`${type}s`]: { _id: id } } }, // e.g $pull : { experiences: { _id: id } }
      { new: true },
    );

    return await query.exec();
  }

  // ------------------------
  // UPDATE - EXPERIENCE OR EDUCATION
  async updateExperienceOrEducation(
    userId: string,
    data: EducationData | ExperienceData,
  ) {
    const { type, id, body } = data;
    if (!id || !data) return;

    const updatedItem = {};

    for (const field in body) {
      updatedItem[`${type}s.$.${field}`] = body[field]; // e.g updatedItem['experiences.$.company'] = body['company']
    }

    const query = this.profileModel.findOneAndUpdate(
      {
        user: userId,
        [`${type}s._id`]: id, // experiences._id: id
      },
      { $set: updatedItem },
      { new: true, upsert: true },
    );

    return await query.exec();
  }
}
