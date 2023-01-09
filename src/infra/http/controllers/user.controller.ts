import { CreateUser } from '@application/use-cases/create-user';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserBodyDTO } from '../DTOs/create-user-body-DTO';
import { UserViewModel } from '../view-models/user-view-model';

@Controller('/user')
export class UserController {
  constructor(private readonly createUser: CreateUser) {}

  @Post()
  async create(@Body() body: CreateUserBodyDTO) {
    const { email, password, username } = body;

    const { user } = await this.createUser.execute({
      email,
      password,
      username,
    });

    return { user: UserViewModel.toHttp(user) };
  }
}
