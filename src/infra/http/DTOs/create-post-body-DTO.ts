import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreatePostBodyDTO {
  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 30)
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 300)
  text: string;

  @ApiProperty()
  @IsNotEmpty()
  userId: string;
}
