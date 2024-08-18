import { Follower as FollowerEntity } from '@application/entities/Follower';
import { GetUserDTO } from '@infra/http/DTOs/get-user-DTO';
import { Follower, Follower as PrismaFollowerEntity } from '@prisma/client';

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

  static toDomain({ createdAt, followerId, id, userId }: PrismaFollowerEntity) {
    const follower = new FollowerEntity({
      id,
      followerId,
      userId,
      createdAt: new Date(),
    });

    return follower;
  }
}
