import { Follower as FollowerEntity } from '@application/entities/Follower';
import { GetUserDTO } from '@infra/http/DTOs/get-user-DTO';
import { Follower as PrismaFollowerEntity } from '@prisma/client';

export class PrismaFollowerMapper {
  static toPrisma(follower: PrismaFollowerEntity) {
    return {
      id: follower.id,
      followerId: follower.followerId,
      userId: follower.userId,
      createdAt: follower.createdAt,
    };
  }
  static toDTO(follower: FollowerEntity | PrismaFollowerEntity) {
    const data = {
      followerId: follower.followerId,
      userId: follower.userId,
      createdAt: follower.createdAt,
    };
    return data;
  }
}
