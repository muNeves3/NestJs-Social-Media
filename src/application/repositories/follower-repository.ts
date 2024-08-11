import { Follower } from '@prisma/client';

export abstract class FollowerRepository {
  abstract create(follower: Follower): Promise<Follower>;
  abstract getAllFolowers(userId: number): Promise<Follower[]>;
  abstract delete(follower: Follower): Promise<void>;
}
