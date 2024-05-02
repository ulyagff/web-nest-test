import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  Unique,
} from 'typeorm';
// import { User } from '../../user/entities/user.entity';
import { Post } from '../../post/entities/post.entity';
import { ActionType } from '../action.interface';
@Entity()
@Unique(['post', 'user'])
export class Action {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => Post, (post) => post.actions)
  // post: Post;

  // @ManyToOne(() => User, (user) => user.submittedActions)
  // author: User;

  @Column({ type: 'enum', enum: ActionType })
  type: ActionType;
}
