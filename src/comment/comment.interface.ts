import { Post } from '../post/post.interface';
import { User } from '../user/user.interface';

export interface Comment {
  id: number;
  content: string;
  author: User;
  post: Post;
  publishedDate: Date;
}
