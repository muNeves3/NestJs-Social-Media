import { Comment } from '@application/entities/Comment';

// Repository to be used on infra layer and on tests
export abstract class CommentRepository {
  abstract create(comment: Comment): Promise<void>;
}
