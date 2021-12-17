import { Controller, Get } from '@nestjs/common';

// Guards

// Custom Decorators
import { CurrentUser } from './decorators/current-user.decorator';

// Interceptors
import { Serialize } from '../interceptors/serialize.interceptor';

// Services
import { UsersService } from './users.service';

// DTOs
import { UserDto } from './dtos/user.dto';

// Schema

@Controller('/api/user')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private usersService: UsersService, // private authService: AuthService,
  ) {}

  @Get('/whoami')
  async whoami(@CurrentUser() user: any) {
    return await this.usersService.findByEmail(user.email);
  }
}
