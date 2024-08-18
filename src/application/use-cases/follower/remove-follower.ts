import { Follower } from '@application/entities/Follower';
import { FollowerRepository } from '@application/repositories/follower-repository';
import { Injectable } from '@nestjs/common';

interface RemoveFollowerRequest {
  follower: Follower;
}

@Injectable()
export class RemoveFollower {
  constructor(private readonly followerRepository: FollowerRepository) {}
  async execute(request: RemoveFollowerRequest): Promise<void> {
    const { follower } = request;

    await this.followerRepository.delete(follower); // will trigger the delete method on infra layer
  }
}
