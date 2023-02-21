import { Like } from '@application/entities/Like';
import { PostRepository } from '@application/repositories/post-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
class LikePost {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(postId: string, userId: string): Promise<void> {
    const post = await this.postRepository.findById(postId);

    if (!post) {
      throw new Error('Post not found');
    }

    const like = new Like({ postId, userId });

    await this.postRepository.like(like);
  }
}

export { LikePost };
