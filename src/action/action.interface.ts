import { User } from '../user/user.interface';
import { Post } from '../post/post.interface';

export interface Action {
  id: number;
  post: Post;
  user: User;
  type: ActionType;
}

export enum ActionType {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
}
