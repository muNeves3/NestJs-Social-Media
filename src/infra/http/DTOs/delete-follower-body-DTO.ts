import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DeleteFollowerDTO {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
}
