import { Comment } from '@application/entities/Comment';
import { CommentRepository } from '@application/repositories/comment-repository';

export class InMemoryCommentRepository implements CommentRepository {
  public comments: Comment[] = [];

  async create(comment: Comment): Promise<Comment> {
    this.comments.push(comment);

    return comment;
  }
}
