import { Post as PostEntity } from '@application/entities/Post';
import { GetPostDTO } from '@infra/http/DTOs/get-post-DTO';
import { Post as PostPrismaEntity } from '@prisma/client';

// Mapper to convert from domain entity to Prisma entity
export class PrismaPostMapper {
  static toPrisma(post: PostEntity) {
    const data = {
      id: post.id,
      title: post.title.value,
      text: post.text.value,
      publishedAt: post.publishedAt,
      userId: post.userId,
    };

    return data;
  }

  static toDTO(post: PostPrismaEntity | PostEntity) {
    const data = {
      id: post.id,
      publishedAt: post.publishedAt,
      text: post.text,
      title: post.title,
      userId: post.userId,
    } as GetPostDTO;

    return data;
  }
}
