import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConfigModule } from '@nestjs/config';
// import { DatabaseModule } from './db.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { ActionModule } from './action/action.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import ormconfig from '../orm.config';

// import { join } from 'path';

@Module({
  imports: [
    // TypeOrmModule.forRoot(ormconfig),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   port: 5432,
    //   url: 'jdbc:postgresql://dpg-co05rru3e1ms73algmp0-a.oregon-postgres.render.com:5432/news_s7d3',
    //   host: 'dpg-co05rru3e1ms73algmp0-a.oregon-postgres.render.com',
    //   entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    //   synchronize: true,
    // }),
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
