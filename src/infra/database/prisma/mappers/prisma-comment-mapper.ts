import { Comment as CommentEntity } from '@application/entities/Comment';

export class PrismaCommentMapper {
  static toPrisma(comment: CommentEntity) {
    const data = {
      id: comment.id,
      publishedAt: comment.publishedAt,
      text: comment.text.value,
      userId: comment.userId,
      postId: comment.postId,
    };

    return data;
  }
}
