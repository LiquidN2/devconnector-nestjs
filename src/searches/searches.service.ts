import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from '../users/schemas/user.schema';
import { Profile, ProfileDocument } from '../profiles/schemas/profile.schema';

@Injectable()
export class SearchesService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(Profile.name)
    private readonly profileModel: Model<ProfileDocument>,
  ) {}

  async findProfile(query: string) {
    return this.profileModel.aggregate([
      {
        $match: {
          $or: [
            { handle: { $regex: query, $options: 'i' } },
            { location: { $regex: query, $options: 'i' } },
            { status: { $regex: query, $options: 'i' } },
            { company: { $regex: query, $options: 'i' } },
          ],
        },
      },
      {
        $lookup: {
          from: 'users',
          foreignField: '_id',
          localField: 'user',
          as: 'userInfo',
        },
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [{ $arrayElemAt: ['$userInfo', 0] }, '$$ROOT'],
          },
        },
      },
      {
        $project: {
          id: 1,
          name: 1,
          email: 1,
          avatar: 1,
          status: 1,
          location: 1,
          company: 1,
          handle: 1,
        },
      },
    ]);
  }

  async findUser(query: string) {
    return this.userModel.aggregate([
      {
        $match: {
          $or: [
            { name: { $regex: query, $options: 'i' } },
            { email: { $regex: query, $options: 'i' } },
          ],
        },
      },
      {
        $lookup: {
          from: 'profiles',
          foreignField: 'user',
          localField: '_id',
          as: 'profileInfo',
        },
      },
      {
        $project: {
          id: 1,
          name: 1,
          email: 1,
          avatar: 1,
          profileInfo: {
            status: 1,
            location: 1,
            company: 1,
            handle: 1,
          },
        },
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [{ $arrayElemAt: ['$profileInfo', 0] }, '$$ROOT'],
          },
        },
      },
      {
        $project: { profileInfo: 0 },
      },
    ]);
  }

  async searchPeople(query: string) {
    const handleResults = await this.findProfile(query);
    const nameResults = await this.findUser(query);
    const combinedResults = [...handleResults];
    nameResults.forEach(result => {
      const isDuplicate = combinedResults.some(el => el.id === result.id);
      if (!isDuplicate) combinedResults.push(result);
    });

    return combinedResults;
  }
}
