import { GetPostDTO } from '@infra/http/DTOs/get-post-DTO';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/user-repository';

interface GetUserPostsRequest {
  id: string;
}

@Injectable()
export class GetUserPosts {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(request: GetUserPostsRequest): Promise<GetPostDTO[]> {
    const { id } = request;

    const posts = await this.userRepository.getUserPosts(id); // will trigger the create method on infra layer

    return posts;
  }
}
