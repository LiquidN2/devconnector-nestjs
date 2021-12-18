import { resolve, join } from 'path';
import { Module, ValidationPipe, MiddlewareConsumer } from '@nestjs/common';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import {
  ConfigModule,
  ConfigService,
  ConfigModuleOptions,
} from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
const cookieSession = require('cookie-session');

import config from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { LikesModule } from './likes/likes.module';
import { ConnectionsModule } from './connections/connections.module';

const env = process.env.NODE_ENV;

const configOptions: ConfigModuleOptions = {
  isGlobal: true,
  ignoreEnvFile: env === 'production', // ignore env file in production
};

// Load .env file if not in production
if (env !== 'production') {
  configOptions.envFilePath = `.env.${env}`;
}

// Load the environment vars if in production
if (env === 'production') {
  configOptions.load = [config];
}

@Module({
  imports: [
    // Setup global env variables
    ConfigModule.forRoot(configOptions),

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

    // Static Files Module
    // ServeStaticModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => {
    //     const rootPath =
    //       configService.get<string>('NODE_ENV') === 'production'
    //         ? resolve(__dirname, '..', 'client', 'build')
    //         : './';
    //
    //     return [{ rootPath, exclude: ['/api*'] }];
    //   },
    // }),

    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, '..', 'client', 'build'),
      exclude: ['/api*'],
    }),

    ConnectionsModule,
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
