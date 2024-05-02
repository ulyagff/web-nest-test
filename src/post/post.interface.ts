import { Comment } from '../comment/comment.interface';
import { User } from '../user/user.interface';
import { Action } from '../action/action.interface';
export interface Post {
  id: number;
  title: string;
  content: string;
  author: User;
  publishedDate: Date;
  likes: number;
  dislikes: number;
  comments: Comment[];
  actions: Action[];
}
