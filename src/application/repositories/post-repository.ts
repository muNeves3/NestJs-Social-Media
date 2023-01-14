import { Post } from '@application/entities/Post';
// Repository to be used on infra layer and on tests
export abstract class PostRepository {
  abstract create(post: Post): Promise<void>;
  abstract delete(id: string): Promise<Post>;
  abstract findById(id: string): Promise<Post | null>;
}
