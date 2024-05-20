import { PostRepository } from '@application/repositories/post-repository';
import { GetPostDTO } from '@infra/http/DTOs/get-post-DTO';
import { Injectable } from '@nestjs/common';
import { Post } from '../../entities/Post';
import { UserRepository } from '../../repositories/user-repository';

interface GetAllResponse {
  posts: GetPostDTO[];
}

@Injectable()
export class GetAll {
  constructor(private readonly postRepository: PostRepository) {}
  async execute(): Promise<GetAllResponse> {
    const posts = await this.postRepository.getAll(); // will trigger the create method on infra layer

    return { posts };
  }
}
