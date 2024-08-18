import { Follower } from '@application/entities/Follower';
import { FollowerRepository } from '@application/repositories/follower-repository';
import { Injectable } from '@nestjs/common';

export interface findFollowerByIdRequest {
  id: string;
}

export interface findFollwoerByIdResponse {
  follower: Follower;
}

@Injectable()
export class findFollowerById {
  constructor(private readonly followerRepository: FollowerRepository) {}
  async execute(
    request: findFollowerByIdRequest,
  ): Promise<findFollwoerByIdResponse> {
    const { id } = request;

    const follower = await this.followerRepository.getFollowerById(id); // will trigger the delete method on infra layer

    return { follower: follower as Follower };
  }
}
