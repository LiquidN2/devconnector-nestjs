import { Controller, Get, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UsersService } from './users.service';

import { CreateUserDto } from './dtos/create-user.dto';

@Controller('/api/auth')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get()
  findUsers() {
    return 'List of users';
  }

  @Post('signup')
  async signup(@Body() body: CreateUserDto) {
    return await this.authService.signup(body);
  }

  @Post('signin')
  async signin(@Body() body: CreateUserDto) {
    return await this.authService.signin(body.email, body.password);
  }
}
