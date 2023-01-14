import { Module } from '@nestjs/common';
import { UserRepository } from '@application/repositories/user-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUserRepository } from './prisma/repositories/prisma-user-repository';
import { PostRepository } from '@application/repositories/post-repository';
import { PrismaPostRepository } from './prisma/repositories/prisma-post-repository';

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
  ],
  exports: [UserRepository, PostRepository],
})
export class DatabaseModule {}
