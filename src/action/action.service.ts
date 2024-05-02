import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Action } from './entities/action.entity';
import { CreateActionDto } from './dto/action.dto';

@Injectable()
export class ActionService {
  constructor(
    @InjectRepository(Action)
    private readonly actionRepository: Repository<Action>,
  ) {}

  async createAction(createActionDto: CreateActionDto): Promise<Action> {
    const newAction = this.actionRepository.create(createActionDto);
    return await this.actionRepository.save(newAction);
  }

  async getActionsByPostId(id: number): Promise<Action[]> {
    return await this.actionRepository.find({ where: { id } });
  }

  async deleteAction(actionId: number): Promise<void> {
    await this.actionRepository.delete(actionId);
  }
}
