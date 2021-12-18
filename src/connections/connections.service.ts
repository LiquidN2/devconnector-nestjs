import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Connection, ConnectionDocument } from './schemas/connection.schema';

import { CreateConnectionDto } from './dtos/create-connection.dto';
import { UpdateConnectionDto } from './dtos/update-connection.dto';

@Injectable()
export class ConnectionsService {
  constructor(
    @InjectModel(Connection.name)
    private readonly connectionModel: Model<ConnectionDocument>,
  ) {}

  async findByUserId(userId: string) {
    return this.connectionModel.find({
      $or: [{ requester: userId }, { target: userId }],
    });
  }

  async create(userId: string, body: CreateConnectionDto) {
    if (!body.target || userId === body.target.toString()) {
      throw new BadRequestException(
        'Target is missing or is the same as requester',
      );
    }

    // check if connection exists
    const existingConnection = await this.connectionModel.findOne({
      $or: [
        { $and: [{ requester: userId }, { target: body.target }] },
        { $and: [{ requester: body.target }, { target: userId }] },
      ],
    });

    if (existingConnection) {
      throw new BadRequestException('Existing connection');
    }

    const connection = await this.connectionModel.create({
      requester: userId,
      target: body.target,
    });

    return await connection.save();
  }

  async delete(userId: string, connectionId: string) {
    const query = this.connectionModel.findOneAndDelete({
      $and: [
        { _id: connectionId },
        { $or: [{ requester: userId }, { target: userId }] },
      ],
    });

    return await query.exec();
  }

  async update(
    userId: string,
    connectionId: string,
    body: UpdateConnectionDto,
  ) {
    const connection = await this.connectionModel.findById(connectionId);
    if (userId !== connection.target.toString()) {
      throw new UnauthorizedException(
        'Not authorized to approve this connection',
      );
    }

    Object.assign(connection, body);

    return await connection.save();
  }
}
