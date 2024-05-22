import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateLikeBodyDTO {
  @ApiProperty()
  @IsNotEmpty()
  userId: string;
  @ApiProperty()
  postId?: string | null;
  @ApiProperty()
  commentId?: string | null;
}
