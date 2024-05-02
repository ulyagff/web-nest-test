import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Post } from '../../post/entities/post.entity';
import { Action } from '../../action/entities/action.entity';
import { Comment } from '../../comment/entities/comment.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Post, (post) => post.author)
  submittedPosts: Post[];

  @OneToMany(() => Comment, (comment) => comment.author)
  submittedComments: Comment[];

  @OneToMany(() => Action, (action) => action.author)
  submittedActions: Action[];
}
