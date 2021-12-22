import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Get,
  Delete,
  Query,
} from '@nestjs/common';

// Types
import { JwtPayloadDecoded } from '../auth/strategies/jwt.strategy';

// Decorators
import { CurrentUser } from '../users/decorators/current-user.decorator';

// Services
import { ConnectionsService } from './connections.service';

// Dto
import { CreateConnectionDto } from './dtos/create-connection.dto';
import { UpdateConnectionDto } from './dtos/update-connection.dto';

@Controller('/api/connections')
export class ConnectionsController {
  constructor(private readonly connectionsService: ConnectionsService) {}

  @Get('')
  async getConnectionsForUser(@Query('userId') userId: string) {
    return await this.connectionsService.findByUserId(userId);
  }

  @Get('/me')
  async getMyConnections(@CurrentUser() user: JwtPayloadDecoded) {
    return await this.connectionsService.findByUserId(user.userId);
  }

  @Post('')
  async createConnection(
    @CurrentUser() user: JwtPayloadDecoded,
    @Body() body: CreateConnectionDto,
  ) {
    return await this.connectionsService.create(user.userId, body);
  }

  @Patch('/:connectionId')
  async updateConnection(
    @CurrentUser() user: JwtPayloadDecoded,
    @Param('connectionId') connectionId: string,
    @Body() body: UpdateConnectionDto,
  ) {
    return await this.connectionsService.update(
      user.userId,
      connectionId,
      body,
    );
  }

  @Delete('/:connectionId')
  async deleteConnection(
    @CurrentUser() user: JwtPayloadDecoded,
    @Param('connectionId') connectionId: string,
  ) {
    return await this.connectionsService.delete(user.userId, connectionId);
  }
}
