import { IsEnum, IsNotEmpty } from 'class-validator';
import { ActionType } from '../action.interface';

export class CreateActionDto {
  @IsNotEmpty()
  postId: number;

  @IsNotEmpty()
  userId: number;

  @IsEnum(ActionType)
  type: ActionType;
}
