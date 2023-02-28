import { Comment } from '@application/entities/Comment';
import { PrismaCommentMapper } from '../mappers/prisma-comment-mapper';
import { PrismaService } from '../prisma.service';

export class PrismaCommentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(comment: Comment) {
    const commentData = PrismaCommentMapper.toPrisma(comment);

    await this.prismaService.comment.create({
      data: commentData,
    });

    return commentData;
  }
}
