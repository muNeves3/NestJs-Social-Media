import { Follower } from '@application/entities/Follower';
import { FollowerRepository } from '@application/repositories/follower-repository';
import { Injectable } from '@nestjs/common';

interface CreateFollowerRequest {
  followerId: string;
  userId: string;
}

interface CreateFollowerResponse {
  follower: Follower;
}

@Injectable()
export class CreateFollower {
  constructor(private readonly followerRepository: FollowerRepository) {}
  async execute(
    request: CreateFollowerRequest,
  ): Promise<CreateFollowerResponse> {
    const { followerId, userId } = request;

    const follower = new Follower({
      followerId,
      userId,
      createdAt: new Date(),
    });

    await this.followerRepository.create(follower); // will trigger the create method on infra layer

    return { follower };
  }
}
