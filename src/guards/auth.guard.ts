import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];

    if (apiKey && apiKey === 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf') {
      return true;
    } else {
      throw new ForbiddenException({error: 'x-api-key header missing'});
    }
  }
}
