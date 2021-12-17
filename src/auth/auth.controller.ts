import { Controller, Get, Post, Body, Request } from '@nestjs/common';

// SERVICES
import { AuthService } from './auth.service';

// DTOS
import { SigninDto } from './dtos/signin.dto';
import { SignupDto } from './dtos/signup.dto';

// GUARDS

// Decorators
import { Public } from '../decorators/public.decorator';

enum AuthPath {
  Root = '/api/auth',
  WhoAmI = '/whoami',
  SignIn = '/signin',
  SignUp = '/signup',
}

@Controller(AuthPath.Root)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get(AuthPath.WhoAmI)
  async whoami(@Request() request: any) {
    return request.user;
  }

  @Public()
  @Post(AuthPath.SignIn)
  async signin(@Body() body: SigninDto) {
    return await this.authService.signin(body.email, body.password);
  }

  @Public()
  @Post(AuthPath.SignUp)
  async signup(@Body() body: SignupDto) {
    return await this.authService.signup(body);
  }
}
