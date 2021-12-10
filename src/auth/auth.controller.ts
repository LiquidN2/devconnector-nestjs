import {
  Controller,
  Get,
  Post,
  Body,
  Session,
  UseGuards,
  Request,
} from '@nestjs/common';

// SERVICES
import { AuthService } from './auth.service';

// DTOS
import { SigninDto } from './dtos/signin.dto';
import { SignupDto } from './dtos/signup.dto';

// GUARDS
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

enum AuthPath {
  Root = '/api/auth',
  WhoAmI = '/whoami',
  SignIn = '/signin',
  SignUp = '/signup',
}

@Controller(AuthPath.Root)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get(AuthPath.WhoAmI)
  async whoami(@Request() request: any) {
    return request.user;
  }

  @Post(AuthPath.SignIn)
  async signin(@Body() body: SigninDto) {
    return await this.authService.signin(body.email, body.password);
  }

  @Post(AuthPath.SignUp)
  async signup(@Body() body: SignupDto) {
    return await this.authService.signup(body);
  }
}
