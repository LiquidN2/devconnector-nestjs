import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { JwtPayloadDecoded } from '../../auth/strategies/jwt.strategy';

interface AuthenticatedRequest extends Request {
  user: JwtPayloadDecoded;
}

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest() as AuthenticatedRequest;
    return request.user;
  },
);
