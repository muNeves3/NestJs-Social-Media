import { Module } from '@nestjs/common';
import { UserRepository } from '@application/repositories/user-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUserRepository } from './prisma/repositories/prisma-user-repository';
import { PostRepository } from '@application/repositories/post-repository';
import { PrismaPostRepository } from './prisma/repositories/prisma-post-repository';
import { CommentRepository } from '@application/repositories/comment-repository';
import { PrismaCommentRepository } from './prisma/repositories/prisma-comment-repository';
import { FollowerRepository } from '@application/repositories/follower-repository';
import { PrismaFollowerRepository } from './prisma/repositories/prisma-follower-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: PostRepository,
      useClass: PrismaPostRepository,
    },
    {
      provide: CommentRepository,
      useClass: PrismaCommentRepository,
    },
    {
      provide: FollowerRepository,
      useClass: PrismaFollowerRepository,
    },
  ],
  exports: [
    UserRepository,
    PostRepository,
    CommentRepository,
    FollowerRepository,
  ],
})
export class DatabaseModule {}
