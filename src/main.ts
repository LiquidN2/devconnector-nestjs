import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 5000;

  await app.listen(port);

  return port;
}

bootstrap().then(port => {
  console.log(`🚀🚀🚀🚀🚀🚀🚀 ${process.env.NODE_ENV}️ 🚀🚀🚀🚀🚀🚀🚀`);
  console.log(`✅✅✅ App is listening on port ${port} ✅✅✅`);
});
