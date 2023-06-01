import { IsNotEmpty } from 'class-validator';

export class CreateCommentBodyDTO {
  @IsNotEmpty()
  text: string;

  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  postId: string;
}
