import { IsNotEmpty, Length } from 'class-validator';

export class CreatePostBodyDTO {
  @IsNotEmpty()
  @Length(1, 30)
  title: string;

  @IsNotEmpty()
  @Length(1, 300)
  text: string;

  @IsNotEmpty()
  userId: string;
}
