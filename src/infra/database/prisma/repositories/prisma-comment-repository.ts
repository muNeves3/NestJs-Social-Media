import { Comment } from '@application/entities/Comment';
import { CommentRepository } from '@application/repositories/comment-repository';
import { PrismaCommentMapper } from '../mappers/prisma-comment-mapper';
import { PrismaService } from '../prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCommentRepository implements CommentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(comment: Comment): Promise<void> {
    const commentData = PrismaCommentMapper.toPrisma(comment);
    try {
      await this.prismaService.comment.create({
        data: {
          id: commentData.id,
          text: commentData.text,
          postId: commentData.postId,
          userId: commentData.userId,
        },
      });
    } catch (error: any) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
