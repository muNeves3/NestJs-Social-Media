import { CreatePost } from '@application/use-cases/post/create-post';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreatePostBodyDTO } from '../DTOs/create-post-body-DTO';
import { PostViewModel } from '../view-models/post-view-model';

@Controller('/post')
export class PostController {
  constructor(private readonly createPost: CreatePost) {}

  @Post()
  async create(@Body() body: CreatePostBodyDTO) {
    const { text, title, userId } = body;
    try {
      const { post } = await this.createPost.execute({
        text,
        title,
        userId,
      });

      const postViewModel = PostViewModel.toHttp(post);

      return { postViewModel };
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  //   @Post('/cancel')
  //   async cancel(@Body() body: { id: string }) {
  //     const { id } = body;

  //     try {
  //       const user = await this.cancelUser.execute({ id });

  //       return { user };
  //     } catch (error: any) {
  //       throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
  //     }
  //  }
}
