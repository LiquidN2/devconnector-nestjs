import {
  Controller,
  Get,
  Post,
  Body,
  Session,
  UseGuards,
} from '@nestjs/common';

// Guards
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

// Custom Decorators
import { CurrentUser } from './decorators/current-user.decorator';

// Interceptors
import { Serialize } from '../interceptors/serialize.interceptor';

// Services
// import { AuthService } from './auth.service.ts.bak';
import { UsersService } from './users.service';

// DTOs
import { CreateUserDto } from './dtos/create-user.dto';
import { SigninDto } from '../auth/dtos/signin.dto';
import { UserDto } from './dtos/user.dto';

// Schema
import { User } from './schemas/user.schema';

@Controller('/api/user')
@Serialize(UserDto)
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(
    private usersService: UsersService, // private authService: AuthService,
  ) {}

  @Get('/whoami')
  async whoami(@CurrentUser() user: any) {
    return await this.usersService.findByEmail(user.email);
  }
}
