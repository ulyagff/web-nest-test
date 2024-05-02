import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';

@ApiBearerAuth()
@ApiTags('comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  getAllComments() {
    return this.commentService.getAllComments();
  }

  @Get(':id')
  getComment(@Param('id') commentId: number) {
    return this.commentService.getComment(commentId);
  }

  @Put(':id')
  async updateComment(
    @Param('id') commentId: number,
    @Body() commentDto: UpdateCommentDto,
  ) {
    return await this.commentService.updateComment(commentId, commentDto);
  }

  @Post()
  async createComment(@Body() commentDto: CreateCommentDto) {
    return await this.commentService.createComment(commentDto);
  }

  @Delete(':id')
  async deleteComment(@Param('id') commentId: number) {
    return await this.commentService.deleteComment(commentId);
  }
}
