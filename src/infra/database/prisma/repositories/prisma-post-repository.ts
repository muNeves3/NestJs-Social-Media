import { Post } from '@application/entities/Post';
import { PostRepository } from '@application/repositories/post-repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrismaPostMapper } from '../mappers/prisma-post-mapper';
import { GetPostDTO } from '@infra/http/DTOs/get-post-DTO';
import { PrismaLikeMapper } from '../mappers/prisma-like-mapper';
import { Like } from '@application/entities/Like';

@Injectable()
export class PrismaPostRepository implements PostRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(post: Post): Promise<void> {
    const postData = PrismaPostMapper.toPrisma(post);

    await this.prismaService.post.create({
      data: postData,
    });
  }

  async getAll(): Promise<GetPostDTO[]> {
    const data = await this.prismaService.post.findMany();

    return data.map((x) => PrismaPostMapper.toDTO(x));
  }

  delete(id: string): Promise<Post> {
    throw new Error('Method not implemented.');
  }

  async findById(id: string): Promise<GetPostDTO | null> {
    console.log(id);
    const postData = await this.prismaService.post.findUnique({
      where: {
        id,
      },
    });

    const likes = await this.getPostLikesCount(id);

    if (!postData) {
      return null;
    }

    return PrismaPostMapper.toDTO(postData, likes);
  }

  async like(like: Like): Promise<void> {
    const likeData = PrismaLikeMapper.toPrisma(like);
    if (like.postId) {
      const userAlreadyLikedPost = await this.getIfUserLikedPost(
        like.postId,
        like.userId,
      );

      if (userAlreadyLikedPost) {
        throw new HttpException(
          'This user already liked this post',
          HttpStatus.BAD_REQUEST,
        );
      }

      const data = await this.prismaService.like.create({
        data: likeData,
      });
    }
  }

  async getIfUserLikedPost(postId: string, userId: string): Promise<boolean> {
    const data = await this.prismaService.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        Like: true,
      },
    });

    if (data?.Like.find((x) => x.userId === userId) != undefined) {
      return true;
    }

    return false;
  }

  async getPostLikesCount(postId: string): Promise<number> {
    const likes = await this.prismaService.like.count({
      where: {
        postId: postId,
      },
    });

    return likes ?? 0;
  }
}
