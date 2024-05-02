import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { dataSource } from '../data.source';
// import { User } from "../user/entities/user.entity";

@Injectable()
export class PostService {
  // constructor(
  //   @InjectRepository(Post)
  //   private readonly postRepository: Repository<Post>,
  // ) {}

  async getAllPosts(): Promise<Post[]> {
    return await dataSource.getRepository(Post).find();
  }

  async getPost(id: number): Promise<Post> {
    return await dataSource.getRepository(Post).findOneBy({ id });
  }

  async createPost(postDto: CreatePostDto): Promise<Post> {
    const newPost = dataSource.getRepository(Post).create(postDto);
    return await dataSource.getRepository(Post).save(newPost);
  }

  async updatePost(id: number, postDto: UpdatePostDto): Promise<Post> {
    const postToUpdate = await dataSource.getRepository(Post).findOneBy({ id });
    if (!postToUpdate) {
      throw new Error('Post not found');
    }
    const updatedPost = Object.assign(postToUpdate, postDto);
    return await dataSource.getRepository(Post).save(updatedPost);
  }

  async deletePost(postId: number): Promise<void> {
    const result = await dataSource.getRepository(Post).delete(postId);
    if (!result.affected) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
  }
}
