import { CreatePost } from '@application/use-cases/post/create-post';
import { FindPostById } from '@application/use-cases/post/find-post-by-id';
import { LikePost } from '@application/use-cases/post/like-post';
import { GetAll } from '@application/use-cases/post/getAll';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateLikeBodyDTO } from '../DTOs/create-like-body-DTO';
import { CreatePostBodyDTO } from '../DTOs/create-post-body-DTO';
import { PostViewModel } from '../view-models/post-view-model';
import { GetPostDTO } from '../DTOs/get-post-DTO';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('/post')
export class PostController {
  constructor(
    private readonly createPost: CreatePost,
    private readonly findPostById: FindPostById,
    private readonly likePost: LikePost,
    private readonly getAllPosts: GetAll,
  ) {}

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

  @Get('/:id')
  @ApiOkResponse({
    type: GetPostDTO,
    isArray: true,
  })
  async findById(@Param('id') id: string) {
    try {
      const { post } = await this.findPostById.execute({ id });
      return { post };
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('/')
  @ApiOkResponse({
    type: GetPostDTO,
    isArray: true,
  })
  async getAll() {
    try {
      const posts = await this.getAllPosts.execute();
      return { posts: posts.posts };
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('/like')
  async like(@Body() body: CreateLikeBodyDTO) {
    const { userId, commentId, postId } = body;

    try {
      if (postId) {
        await this.likePost.execute(postId, userId);

        return;
      }
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
