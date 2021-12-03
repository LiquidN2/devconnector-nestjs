import { Controller, Get, Post, Body, Session } from '@nestjs/common';

// Interceptors
import { Serialize } from '../interceptors/serialize.interceptor';

// Services
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

// DTOs
import { CreateUserDto } from './dtos/create-user.dto';
import { SigninDto } from './dtos/signin.dto';
import { UserDto } from './dtos/user.dto';

@Controller('/api/auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get()
  findUsers() {
    return 'List of users';
  }

  @Get('/whoami')
  whoAmI() {
    return 'whoami';
  }

  @Post('/signup')
  async signup(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(body);
    session.userId = user.id;
    return user;
  }

  @Post('/signin')
  async signin(@Body() body: SigninDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.userId = user.id;
    return user;
  }
}
