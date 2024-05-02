import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  postId: number;

  @IsNotEmpty()
  userId: number;
}
export class UpdateCommentDto extends PartialType(CreateCommentDto) {}
