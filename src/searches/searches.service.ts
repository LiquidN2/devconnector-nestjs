import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from '../users/schemas/user.schema';
import { Profile, ProfileDocument } from '../profiles/schemas/profile.schema';
import { userInfo } from 'os';

@Injectable()
export class SearchesService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(Profile.name)
    private readonly profileModel: Model<ProfileDocument>,
  ) {}

  async findProfile(query: string) {
    const aggregate = this.profileModel.aggregate([
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
        $project: {
          handle: 1,
          status: 1,
          location: 1,
          company: 1,
          userInfo: 1,
        },
      },
    ]);

    const profiles = await aggregate.exec();

    return profiles.map(profile => ({
      _id: profile.userInfo[0]._id,
      handle: profile.handle,
      status: profile.status,
      location: profile.location,
      company: profile.company,
      name: profile.userInfo[0].name,
      email: profile.userInfo[0].email,
      avatar: profile.userInfo[0].avatar,
    }));
  }

  async findUser(query: string) {
    const aggregate = this.userModel.aggregate([
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
    ]);

    const users = await aggregate.exec();

    return users.map(user => ({
      _id: user._id,
      avatar: user.avatar,
      email: user.email,
      name: user.name,
      status: user.profileInfo[0].status,
      location: user.profileInfo[0].location,
      handle: user.profileInfo[0].handle,
      company: user.profileInfo[0].company,
    }));
  }

  async searchPeople(query: string) {
    if (!query) return [];

    const profileResults = await this.findProfile(query);
    const userResults = await this.findUser(query);
    const combinedResults = [...profileResults];
    userResults.forEach(result => {
      const isDuplicate = combinedResults.some(
        el => el._id.toString() === result._id.toString(),
      );
      if (!isDuplicate) combinedResults.push(result);
    });

    return combinedResults;
  }
}
