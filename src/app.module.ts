import { resolve } from 'path';
import { Module, ValidationPipe, MiddlewareConsumer } from '@nestjs/common';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
const cookieSession = require('cookie-session');

import config from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { LikesModule } from './likes/likes.module';
import { ConnectionsModule } from './connections/connections.module';

const env = process.env.NODE_ENV;

@Module({
  imports: [
    // Setup global env variables
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: env === 'production',
      envFilePath: env !== 'production' ? `.env.${env}` : undefined,
      load: env === 'production' ? [config] : undefined,
    }),

    // Connect to DB
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),

    // API Modules
    AuthModule,
    UsersModule,
    ProfilesModule,
    PostsModule,
    CommentsModule,
    LikesModule,
    ConnectionsModule,

    // Static Files Module
    ServeStaticModule.forRoot({
      rootPath:
        env === 'production'
          ? resolve(__dirname, '..', 'client', 'build')
          : './',
      exclude: ['/api*'],
    }),
  ],

  providers: [
    AppService,

    // Global Validation
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ whitelist: true, transform: true }),
    },

    // Global Guard
    { provide: APP_GUARD, useClass: JwtAuthGuard },
  ],

  controllers: [AppController],
})
export class AppModule {
  constructor(private readonly configService: ConfigService) {}

  // Configure Cookie Session
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cookieSession({
          keys: [this.configService.get<string>('COOKIE_KEY')],
        }),
      )
      .forRoutes('*');
  }
}
