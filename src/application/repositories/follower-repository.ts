import { Follower } from '@prisma/client';

export abstract class FollowerRepository {
  abstract create(follower: Follower): Promise<Follower>;
  abstract getAllFolowers(userId: string): Promise<Follower[]>;
  abstract delete(follower: Follower): Promise<void>;
  abstract getFollowerById(id: string): Promise<Follower>;
}
