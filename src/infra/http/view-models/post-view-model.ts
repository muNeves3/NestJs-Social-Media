import { Post } from '@application/entities/Post';

export class PostViewModel {
  static toHttp(post: Post) {
    return {
      id: post.id,
      title: post.title.value,
      text: post.text.value,
      userId: post.publishedAt,
      publishedAt: post.publishedAt,
    };
  }
}
