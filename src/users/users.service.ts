import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
const gravatar = require('gravatar');

import { CreateUserDto } from './dtos/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // Fetch Gravatar Url
    const avatar = gravatar.url(createUserDto.email, {
      s: '200', // size
      r: 'pg', // rating
      d: 'mm', // default
    });

    const userData = { ...createUserDto, avatar };

    const user = await this.model.create(userData);

    return await user.save();
  }

  async remove(id: string) {
    return this.model.remove({ id });
  }

  async findById(id: string) {
    return this.model.findById(id);
  }

  async findByEmail(email: string) {
    return this.model.findOne({ email });
  }
}
