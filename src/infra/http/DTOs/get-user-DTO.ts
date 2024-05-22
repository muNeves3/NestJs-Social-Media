import { ApiProperty } from '@nestjs/swagger';

export class GetUserDTO {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string; // Using Value Object
  @ApiProperty()
  username: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  deactivateDate?: Date | null;
}
