import { Comment } from '../comment/comment.interface';
import { Post } from '../post/post.interface';
import { Action } from '../action/action.interface';

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  submittedPosts?: Post[];
  submittedComments?: Comment[];
  submittedActions?: Action[];
}
