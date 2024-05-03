import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { ActionService } from './action.service';
import { CreateActionDto } from './dto/action.dto';

@ApiBearerAuth()
@ApiTags('action')
@Controller('action')
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @Post()
  @ApiOperation({ summary: 'Create an action' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The action has been successfully created.',
  })
  async createAction(@Body() createActionDto: CreateActionDto) {
    return await this.actionService.createAction(createActionDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get actions by post ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Post ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Returns actions by post ID.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Actions not found for this post ID.',
  })
  getActionsByPostId(@Param('id') postId: number) {
    return this.actionService.getActionsByPostId(postId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an action by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Action ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The action has been successfully deleted.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Action not found.',
  })
  async deleteAction(@Param('id') actionId: number) {
    return await this.actionService.deleteAction(actionId);
  }
}
