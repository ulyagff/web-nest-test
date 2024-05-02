// comment.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async getAllComments(): Promise<Comment[]> {
    return await this.commentRepository.find();
  }

  async getComment(id: number): Promise<Comment> {
    return await this.commentRepository.findOneBy({ id });
  }

  async createComment(commentDto: CreateCommentDto): Promise<Comment> {
    const newComment = this.commentRepository.create(commentDto);
    return await this.commentRepository.save(newComment);
  }

  async updateComment(
    id: number,
    commentDto: UpdateCommentDto,
  ): Promise<Comment> {
    const commentToUpdate = await this.commentRepository.findOneBy({ id });
    if (!commentToUpdate) {
      throw new Error('Comment not found');
    }
    const updatedComment = Object.assign(commentToUpdate, commentDto);
    return await this.commentRepository.save(updatedComment);
  }

  async deleteComment(commentId: number): Promise<void> {
    await this.commentRepository.delete(commentId);
  }
}
