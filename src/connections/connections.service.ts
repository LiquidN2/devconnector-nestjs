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
    const connectionAgg = this.connectionModel.aggregate([
      {
        $match: {
          $or: [
            { requester: new Types.ObjectId(userId) },
            { target: new Types.ObjectId(userId) },
          ],
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'requester',
          foreignField: '_id',
          as: 'requesterUser',
        },
      },
      {
        $unwind: '$requesterUser',
      },
      {
        $lookup: {
          from: 'users',
          localField: 'target',
          foreignField: '_id',
          as: 'targetUser',
        },
      },
      {
        $unwind: '$targetUser',
      },
      {
        $lookup: {
          from: 'profiles',
          localField: 'requester',
          foreignField: 'user',
          as: 'requesterProfile',
        },
      },
      {
        $unwind: '$requesterProfile',
      },
      {
        $lookup: {
          from: 'profiles',
          localField: 'target',
          foreignField: 'user',
          as: 'targetProfile',
        },
      },
      {
        $unwind: '$targetProfile',
      },
      {
        $project: {
          id: 1,
          status: 1,
          requester: 1,
          target: 1,
          requesterUser: { name: 1, email: 1, avatar: 1 },
          targetUser: { name: 1, email: 1, avatar: 1 },
          requesterProfile: { status: 1, company: 1, location: 1 },
          targetProfile: { status: 1, company: 1, location: 1 },
        },
      },
    ]);

    const connections = await connectionAgg.exec();

    return connections.map(connection => {
      if (userId === connection.target.toString()) {
        return {
          _id: connection._id,
          connectionStatus: connection.status,
          as: 'requester',
          userId: connection.requester,
          // userInfo: connection.requesterUser,
          name: connection.requesterUser.name,
          email: connection.requesterUser.email,
          avatar: connection.requesterUser.avatar,
          // profileInfo: connection.requesterProfile,
          profileStatus: connection.requesterProfile.status,
          company: connection.requesterProfile.company,
          location: connection.requesterProfile.location,
        };
      }

      return {
        _id: connection._id,
        connectionStatus: connection.status,
        as: 'target',
        userId: connection.target,
        // userInfo: connection.targetUser,
        name: connection.targetUser.name,
        email: connection.targetUser.email,
        avatar: connection.targetUser.avatar,
        // profileInfo: connection.targetProfile,
        profileStatus: connection.targetProfile.status,
        company: connection.targetProfile.company,
        location: connection.targetProfile.location,
      };
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
