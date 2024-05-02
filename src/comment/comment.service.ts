// comment.service.ts
import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';
import { dataSource } from '../data.source';
// import { Post } from "../post/entities/post.entity";

@Injectable()
export class CommentService {
  // constructor(
  //   @InjectRepository(Comment)
  //   private readonly commentRepository: Repository<Comment>,
  // ) {}

  async getAllComments(): Promise<Comment[]> {
    return await dataSource.getRepository(Comment).find();
  }

  async getComment(id: number): Promise<Comment> {
    return await dataSource.getRepository(Comment).findOneBy({ id });
  }

  async createComment(commentDto: CreateCommentDto): Promise<Comment> {
    const newComment = dataSource.getRepository(Comment).create(commentDto);
    return await dataSource.getRepository(Comment).save(newComment);
  }

  async updateComment(
    id: number,
    commentDto: UpdateCommentDto,
  ): Promise<Comment> {
    const commentToUpdate = await dataSource
      .getRepository(Comment)
      .findOneBy({ id });
    if (!commentToUpdate) {
      throw new Error('Comment not found');
    }
    const updatedComment = Object.assign(commentToUpdate, commentDto);
    return await dataSource.getRepository(Comment).save(updatedComment);
  }

  async deleteComment(commentId: number): Promise<void> {
    await dataSource.getRepository(Comment).delete(commentId);
  }
}
