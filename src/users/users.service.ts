import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dtos/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.model.create(createUserDto);
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
