import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConfigModule } from '@nestjs/config';
// import { DatabaseModule } from './db.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { ActionModule } from './action/action.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import ormconfig from '../orm.config';
import * as ormconfig from "../orm.config"
// import connectionOptions from '../orm.config';
import { User } from './user/entities/user.entity';
import { Post } from './post/entities/post.entity';
import { Action } from './action/entities/action.entity';
import { Comment } from './comment/entities/comment.entity';

// import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormconfig, //db config
      entities: [User, Post, Action, Comment],
    }),
    // TypeOrmModule.forRoot(ormconfig),
    //   TypeOrmModule.forRoot({
    //     type: 'postgres',
    //     port: 5432,
    //     database: 'news_s7d3',
    //     username: 'news_s7d3_user',
    //     password: 'BaMc2VyTTuqhuNKYraIn1sOttJfhTTda',
    //     url: 'jdbc:postgresql://dpg-co05rru3e1ms73algmp0-a.oregon-postgres.render.com:5432/news_s7d3',
    //     host: 'dpg-co05rru3e1ms73algmp0-a.oregon-postgres.render.com',
    //     entities: [User, Post, Action, Comment],
    //     synchronize: true,
    //     ssl: true,
    //   }),
    // DatabaseModule,
    UserModule,
    PostModule,
    CommentModule,
    ActionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
