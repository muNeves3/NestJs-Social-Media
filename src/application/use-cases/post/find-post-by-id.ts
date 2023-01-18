import { PostRepository } from '@application/repositories/post-repository';
import { GetPostDTO } from '@infra/http/DTOs/get-post-DTO';
import { Injectable } from '@nestjs/common';
import { Post } from '../../entities/Post';
import { UserRepository } from '../../repositories/user-repository';

interface FindPostByIdRequest {
  id: string;
}

interface FindPostByIdResponse {
  post: GetPostDTO | null;
}

@Injectable()
export class FindPostById {
  constructor(private readonly postRepository: PostRepository) {}
  async execute(request: FindPostByIdRequest): Promise<FindPostByIdResponse> {
    const { id } = request;

    const post = await this.postRepository.findById(id); // will trigger the create method on infra layer

    if (!post) {
      return { post: null };
    }

    return { post };
  }
}
