import { Module } from '@nestjs/common';
import { CreateUser } from '@application/use-cases/user/create-user';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './controllers/user.controller';
import { CancelUser } from '@application/use-cases/user/cancel-user';
import { CreatePost } from '@application/use-cases/post/create-post';
import { PostController } from './controllers/post.controller';
import { GetUserPosts } from '@application/use-cases/user/get-user-posts';
import { FindPostById } from '@application/use-cases/post/find-post-by-id';
import { LikePost } from '@application/use-cases/post/like-post';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController, PostController],
  providers: [
    CreateUser,
    CancelUser,
    CreatePost,
    GetUserPosts,
    FindPostById,
    LikePost,
  ],
})
export class HttpModule {}
