import { Like } from '@application/entities/Like';
import { Post } from '@application/entities/Post';
import { GetPostDTO } from '@infra/http/DTOs/get-post-DTO';
// Repository to be used on infra layer and on tests
export abstract class PostRepository {
  abstract create(post: Post): Promise<void>;
  abstract delete(id: string): Promise<Post>;
  abstract findById(id: string): Promise<GetPostDTO | null>;
  abstract like(like: Like): Promise<void>;
  abstract getPostLikesCount(postId: string): Promise<number>;
}
