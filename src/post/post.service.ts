import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async getAllPosts(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async getPost(id: number): Promise<Post> {
    return await this.postRepository.findOneBy({ id });
  }

  async createPost(postDto: CreatePostDto): Promise<Post> {
    const newPost = this.postRepository.create(postDto);
    return await this.postRepository.save(newPost);
  }

  async updatePost(id: number, postDto: UpdatePostDto): Promise<Post> {
    const postToUpdate = await this.postRepository.findOneBy({ id });
    if (!postToUpdate) {
      throw new Error('Post not found');
    }
    const updatedPost = Object.assign(postToUpdate, postDto);
    return await this.postRepository.save(updatedPost);
  }

  async deletePost(postId: number): Promise<void> {
    const result = await this.postRepository.delete(postId);
    if (!result.affected) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
  }
}
