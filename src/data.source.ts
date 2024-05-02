import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';
import { Post } from './post/entities/post.entity';
import { Action } from './action/entities/action.entity';
import { Comment } from './comment/entities/comment.entity';

export const dataSource = new DataSource({
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
});

dataSource
  .initialize()
  .then(() => {})
  .catch((error) => console.log(error));
