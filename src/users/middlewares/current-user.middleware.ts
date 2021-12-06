import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from '../users.service';
import { User } from '../schemas/user.schema';

declare global {
  namespace Express {
    interface Request {
      currentUser?: User;
    }
  }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UsersService) {}

  // async use(req: Request, res: Response, next: NextFunction) {
  //   const { userId } = req.session || {};
  //
  //   if (userId) {
  //     req.currentUser = await this.usersService.findById(userId);
  //   }
  //
  //   next();
  // }

  async use(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.session || {};

    if (userId) {
      req.currentUser = await this.usersService.findById(userId);
    }

    next();
  }
}
