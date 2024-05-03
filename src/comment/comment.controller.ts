import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';

@ApiBearerAuth()
@ApiTags('comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  @ApiOperation({ summary: 'Get all comments' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Returns all comments.' })
  getAllComments() {
    return this.commentService.getAllComments();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a comment by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Comment ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Returns the comment.' })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Comment not found.',
  })
  getComment(@Param('id') commentId: number) {
    return this.commentService.getComment(commentId);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a comment by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Comment ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The comment has been successfully updated.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Comment not found.',
  })
  async updateComment(
    @Param('id') commentId: number,
    @Body() commentDto: UpdateCommentDto,
  ) {
    return await this.commentService.updateComment(commentId, commentDto);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new comment' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The comment has been successfully created.',
  })
  async createComment(@Body() commentDto: CreateCommentDto) {
    return await this.commentService.createComment(commentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a comment by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Comment ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The comment has been successfully deleted.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Comment not found.',
  })
  async deleteComment(@Param('id') commentId: number) {
    return await this.commentService.deleteComment(commentId);
  }
}
