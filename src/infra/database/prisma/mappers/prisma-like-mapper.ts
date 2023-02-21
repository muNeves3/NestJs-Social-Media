import { Like as LikeEntity } from '@application/entities/Like';
import { GetLikeDTO } from '@infra/http/DTOs/get-like-DTO';
import { Like as LikePrismaEntity } from '@prisma/client';

// Mapper to convert from domain entity to Prisma entity
export class PrismaLikeMapper {
  static toPrisma(like: LikeEntity) {
    const data = {
      id: like.id,
      commentId: like.commentId,
      createdAt: like.createdAt,
      postId: like.postId,
      userId: like.userId,
    };

    return data;
  }

  static toDTO(like: LikePrismaEntity | LikeEntity) {
    const data = {
      id: like.id,
      commentId: like.commentId,
      createdAt: like.createdAt,
      postId: like.postId,
      userId: like.userId,
    } as GetLikeDTO;

    return data;
  }
}
