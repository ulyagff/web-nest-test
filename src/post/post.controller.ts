import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Controller,
  HttpStatus, Render
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';

@ApiBearerAuth()
@ApiTags('post')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('all')
  @Render('index.hbs')
  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Returns all posts.' })
  getAllPosts() {
    const posts = this.postService.getAllPosts();
    return {
      page: 'posts',
      posts: posts,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a post by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Post ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Returns the post.' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Post not found.' })
  getPost(@Param('id') postId: number) {
    return this.postService.getPost(postId);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a post by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Post ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been successfully updated.',
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Post not found.' })
  async updatePost(
    @Param('id') postId: number,
    @Body() postDto: UpdatePostDto,
  ) {
    return await this.postService.updatePost(postId, postDto);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new post' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The post has been successfully created.',
  })
  async createPost(@Body() postDto: CreatePostDto) {
    return await this.postService.createPost(postDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a post by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Post ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been successfully deleted.',
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Post not found.' })
  async deletePost(@Param('id') postId: number) {
    return await this.postService.deletePost(postId);
  }
}
