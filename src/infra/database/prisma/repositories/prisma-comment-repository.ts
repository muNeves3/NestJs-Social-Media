import { Comment } from '@application/entities/Comment';
import { CommentRepository } from '@application/repositories/comment-repository';
import { PrismaCommentMapper } from '../mappers/prisma-comment-mapper';
import { PrismaService } from '../prisma.service';

export class PrismaCommentRepository implements CommentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(comment: Comment): Promise<void> {
    const commentData = PrismaCommentMapper.toPrisma(comment);

    await this.prismaService.comment.create({
      data: commentData,
    });
  }
}
