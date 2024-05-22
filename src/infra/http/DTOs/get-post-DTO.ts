import { ApiProperty } from '@nestjs/swagger';

export class GetPostDTO {
  @ApiProperty()
  title: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  text: string;
  @ApiProperty()
  publishedAt: Date;
  @ApiProperty()
  id: string;
  @ApiProperty()
  likes: number;
}
