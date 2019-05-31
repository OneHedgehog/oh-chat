import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import {UserResolver} from "./user/user.resolver";
import {join} from 'path';

@Module({
  imports: [ GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
    definitions: {
      path: join(process.cwd(), 'src/graphql.ts'),
    },
  }), UserResolver],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
