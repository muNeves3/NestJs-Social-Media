import { Post } from '@application/entities/Post';
import { PostRepository } from '@application/repositories/post-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrismaPostMapper } from '../mappers/prisma-post-mapper';
import { GetPostDTO } from '@infra/http/DTOs/get-post-DTO';

@Injectable()
export class PrismaPostRepository implements PostRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(post: Post): Promise<void> {
    const postData = PrismaPostMapper.toPrisma(post);

    await this.prismaService.post.create({
      data: postData,
    });
  }
  delete(id: string): Promise<Post> {
    throw new Error('Method not implemented.');
  }
  async findById(id: string): Promise<GetPostDTO | null> {
    const postData = await this.prismaService.post.findUnique({
      where: {
        id,
      },
    });

    if (!postData) {
      return null;
    }

    return PrismaPostMapper.toDTO(postData);
  }
}
