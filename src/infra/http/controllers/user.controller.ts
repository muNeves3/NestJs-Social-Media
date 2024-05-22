import { CancelUser } from '@application/use-cases/user/cancel-user';
import { CreateUser } from '@application/use-cases/user/create-user';
import { GetUserPosts } from '@application/use-cases/user/get-user-posts';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUserBodyDTO } from '../DTOs/create-user-body-DTO';
import { UserViewModel } from '../view-models/user-view-model';
import { ApiOkResponse } from '@nestjs/swagger';
import { GetPostDTO } from '../DTOs/get-post-DTO';

@Controller('/user')
export class UserController {
  constructor(
    private readonly createUser: CreateUser,
    private readonly cancelUser: CancelUser,
    private readonly getUserPosts: GetUserPosts,
  ) {}

  @Post()
  async create(@Body() body: CreateUserBodyDTO) {
    const { email, password, username } = body;
    try {
      const { user } = await this.createUser.execute({
        email,
        password,
        username,
      });

      return { user: UserViewModel.toHttp(user) };
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('/cancel')
  async cancel(@Body() body: { id: string }) {
    const { id } = body;

    try {
      const user = await this.cancelUser.execute({ id });

      return { user };
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('/posts')
  @ApiOkResponse({
    type: GetPostDTO,
    isArray: true,
  })
  async getUserPostsRoute(@Body() body: { id: string }) {
    const { id } = body;

    try {
      const userPosts = await this.getUserPosts.execute({ id });

      return { userPosts };
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
