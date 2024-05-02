import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Controller,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';

@ApiBearerAuth()
@ApiTags('post')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Get(':id')
  getPost(@Param('id') postId: number) {
    return this.postService.getPost(postId);
  }

  @Put(':id')
  async updatePost(
    @Param('id') postId: number,
    @Body() postDto: UpdatePostDto,
  ) {
    return await this.postService.updatePost(postId, postDto);
  }

  @Post()
  async createPost(@Body() postDto: CreatePostDto) {
    return await this.postService.createPost(postDto);
  }

  @Delete(':id')
  async deletePost(@Param('id') postId: number) {
    return await this.postService.deletePost(postId);
  }
}
