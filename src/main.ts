import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';

function exceptionFactory(errors: ValidationError[]) {
  const errorMessages = errors.reduce((acc, error) => {
    Object.values(error.constraints).forEach((message) => {
      acc.push(message);
    });
    return acc;
  }, []);

  return new BadRequestException({ error: errorMessages.join(', ') });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
  });
  app.useGlobalGuards(new AuthGuard());
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => exceptionFactory(errors),
    }),
  );
  await app.listen(8080);
}
bootstrap();
