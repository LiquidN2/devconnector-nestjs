import {
  Controller,
  Get,
  Post,
  Body,
  Session,
  UseGuards,
} from '@nestjs/common';

// Guards
import { AuthGuard } from '../guards/auth.guard';

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
export class UsersController {
  constructor(
    private usersService: UsersService, // private authService: AuthService,
  ) {}

  @Get('/whoami')
  @UseGuards(AuthGuard)
  whoAmI(@CurrentUser() currentUser: User) {
    return currentUser;
  }

  // @Post('/signup')
  // async signup(@Body() body: CreateUserDto, @Session() session: any) {
  //   const user = await this.authService.signup(body);
  //   session.userId = user.id;
  //   return user;
  // }
  //
  // @Post('/signin')
  // async signin(@Body() body: SigninDto, @Session() session: any) {
  //   const user = await this.authService.signin(body.email, body.password);
  //   session.userId = user.id;
  //   return user;
  // }

  @Post('/signout')
  signout(@Session() session: any) {
    session.userId = null;
  }
}
