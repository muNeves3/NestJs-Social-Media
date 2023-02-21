import { IsNotEmpty } from 'class-validator';

export class CreateLikeBodyDTO {
  @IsNotEmpty()
  userId: string;
  postId?: string | null;
  commentId?: string | null;
}
