import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserBodyDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6)
  password: string;

  @IsNotEmpty()
  username: string;
}
