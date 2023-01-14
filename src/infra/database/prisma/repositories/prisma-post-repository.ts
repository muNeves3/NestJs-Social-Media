import { Post } from '@application/entities/Post';
import { PostRepository } from '@application/repositories/post-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrismaPostMapper } from '../mappers/prisma-post-mapper';

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
  findById(id: string): Promise<Post | null> {
    throw new Error('Method not implemented.');
  }
}
