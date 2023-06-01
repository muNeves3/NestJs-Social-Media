import { Comment } from '@application/entities/Comment';

export class CommentViewModel {
  static toHttp(comment: Comment) {
    return {
      id: comment.id,
      text: comment.text.value,
      userId: comment.userId,
    };
  }
}
