import { DataSourceOptions } from 'typeorm';
import { User } from './src/user/entities/user.entity';
import { Post } from './src/post/entities/post.entity';
import { Action } from './src/action/entities/action.entity';
import { Comment } from './src/comment/entities/comment.entity';

const config: DataSourceOptions = {
  type: 'postgres',
  port: 5432,
  database: 'news_s7d3',
  username: 'news_s7d3_user',
  password: 'BaMc2VyTTuqhuNKYraIn1sOttJfhTTda',
  url: 'jdbc:postgresql://dpg-co05rru3e1ms73algmp0-a.oregon-postgres.render.com:5432/news_s7d3',
  host: 'dpg-co05rru3e1ms73algmp0-a.oregon-postgres.render.com',
  entities: [User, Post, Action, Comment],
  synchronize: true,
  ssl: true,
};
export default config;
