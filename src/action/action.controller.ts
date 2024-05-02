// action.controller.ts
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ActionService } from './action.service';
import { CreateActionDto } from './dto/action.dto';

@ApiBearerAuth()
@ApiTags('action')
@Controller('action')
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @Post()
  async createAction(@Body() createActionDto: CreateActionDto) {
    return await this.actionService.createAction(createActionDto);
  }

  @Get(':id')
  getActionsByPostId(@Param('id') postId: number) {
    return this.actionService.getActionsByPostId(postId);
  }

  @Delete(':id')
  async deleteAction(@Param('id') actionId: number) {
    return await this.actionService.deleteAction(actionId);
  }
}
