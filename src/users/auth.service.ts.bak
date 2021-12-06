import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { randomBytes, scrypt as _script } from 'crypto';
import { promisify } from 'util';

import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

const script = promisify(_script);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup({ email, password, name }: CreateUserDto) {
    // Check if email is existing
    const user = await this.usersService.findByEmail(email);
    if (user) {
      throw new BadRequestException('email in use');
    }

    // Generate salt
    const salt = randomBytes(8).toString('hex');

    // Hash the entered password with the salt
    const hash = (await script(password, salt, 32)) as Buffer;

    // Join the hash with the salt to create new password
    const passwordToBeStored = salt + '.' + hash.toString('hex');

    // Create the new user
    return await this.usersService.create({
      email,
      name,
      password: passwordToBeStored,
    });
  }

  async signin(email: string, password: string) {
    // Verify if email exists
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('invalid email');
    }

    // Get the salt
    const { password: storedPassword } = user;
    const [salt, storedHash] = storedPassword.split('.');

    // Hash the entered Password
    const enteredHash = (await script(password, salt, 32)) as Buffer;

    // Compare the entered hash with the stored hash
    if (storedHash !== enteredHash.toString('hex')) {
      throw new BadRequestException('invalid password');
    }

    return user;
  }
}
