import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateFollowerBodyDTO {
  @ApiProperty()
  @IsNotEmpty()
  followerId: string;

  @ApiProperty()
  @IsNotEmpty()
  userId: string;
}
