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
import { User } from './user/entities/user.entity';
import { Post } from './post/entities/post.entity';
import { Comment } from './comment/entities/comment.entity';

// import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'news_s7d3',
      username: 'news_s7d3_user',
      password: 'BaMc2VyTTuqhuNKYraIn1sOttJfhTTda',
      host: 'dpg-co05rru3e1ms73algmp0-a.oregon-postgres.render.com',
      entities: [
        User, Post, Comment
      ],
      synchronize: true,
      ssl: true,
    }),
    UserModule,
    PostModule,
    CommentModule,
    ActionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}