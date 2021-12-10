import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { randomBytes, scrypt as _script } from 'crypto';
import { promisify } from 'util';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';
import { SignupDto } from './dtos/signup.dto';

import { UserDocument } from '../users/schemas/user.schema';
import { JwtPayload } from './strategies/jwt.strategy';

const script = promisify(_script);

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  createJwtToken(user: UserDocument): { access_token: string } {
    const payload: JwtPayload = { username: user.email, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }

  async signup({ email, password, passwordConfirm, name }: SignupDto) {
    // check if password confirm matches
    if (password !== passwordConfirm) {
      throw new BadRequestException('confirm password must match password');
    }

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
    const newUser = await this.usersService.create({
      email,
      name,
      password: passwordToBeStored,
    });

    // return JWT token
    return this.createJwtToken(newUser);
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

    // return jwt token
    return this.createJwtToken(user);
  }
}
