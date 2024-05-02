import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { Action } from './entities/action.entity';
import { CreateActionDto } from './dto/action.dto';
import { dataSource } from '../data.source';

@Injectable()
export class ActionService {
  // constructor(
  //   @InjectRepository(Action)
  //   private readonly actionRepository: Repository<Action>,
  // ) {}

  async createAction(createActionDto: CreateActionDto): Promise<Action> {
    const newAction = dataSource.getRepository(Action).create(createActionDto);
    return await dataSource.getRepository(Action).save(newAction);
  }

  async getActionsByPostId(id: number): Promise<Action[]> {
    return await dataSource.getRepository(Action).find({ where: { id } });
  }

  async deleteAction(actionId: number): Promise<void> {
    await dataSource.getRepository(Action).delete(actionId);
  }
}
