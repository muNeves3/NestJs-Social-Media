import { CreateComment } from '@application/use-cases/comment/create-comment';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateCommentBodyDTO } from '../DTOs/create-comment-body-DTO';
import { CommentViewModel } from '../view-models/comment-view-model';

@Controller('/comment')
export class CommentController {
  constructor(private readonly createComment: CreateComment) {}

  @Post()
  async create(@Body() body: CreateCommentBodyDTO) {
    const { postId, text, userId } = body;

    try {
      const { comment } = await this.createComment.execute({
        text,
        userId,
        postId,
      });

      const commentViewModel = CommentViewModel.toHttp(comment);

      return commentViewModel;
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
