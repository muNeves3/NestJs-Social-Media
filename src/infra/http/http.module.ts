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
import { CommentController } from './controllers/comment.controller';
import { CreateComment } from '@application/use-cases/comment/create-comment';
import { GetAll } from '@application/use-cases/post/getAll';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController, PostController, CommentController],
  providers: [
    CreateUser,
    CancelUser,
    CreatePost,
    GetUserPosts,
    FindPostById,
    GetAll,
    LikePost,
    CreateComment,
  ],
})
export class HttpModule {}
