import { Post } from '@application/entities/Post';
import { User } from '@application/entities/User';
import { PostRepository } from '@application/repositories/post-repository';
import { UserNotFoundError } from '@application/use-cases/errors/user-not-found-error';
import { PrismaPostMapper } from '@infra/database/prisma/mappers/prisma-post-mapper';
import { PrismaUserMapper } from '@infra/database/prisma/mappers/prisma-user-mapper';
import { GetPostDTO } from '@infra/http/DTOs/get-post-DTO';
import { GetUserDTO } from '@infra/http/DTOs/get-user-DTO';

// implementing in-memory repository to not depend on database
export class InMemoryPostRepository implements PostRepository {
  public posts: Post[] = [];

  _getPostEntity(id: string): Post | null {
    const post = this.posts.find((item) => item.id === id);

    if (!post) {
      return null;
    }

    return post;
  }

  delete(id: string): Promise<Post> {
    throw new Error('Method not implemented.');
  }

  async findById(id: string): Promise<GetPostDTO | null> {
    const post = this.posts.find((item) => item.id === id);

    if (!post) {
      return null;
    }

    return PrismaPostMapper.toDTO(post);
  }
  //   _getUserEntity(id: string): User | null {
  //     const user = this.users.find((item) => item.id === id);

  //     if (!user) {
  //       return null;
  //     }

  //     return user;
  //   }

  //   async cancel(id: string): Promise<GetUserDTO> {
  //     const user = this._getUserEntity(id);

  //     if (!user) {
  //       throw new UserNotFoundError();
  //     }

  //     user.deactivate();
  //     return PrismaUserMapper.toDTO(user);
  //   }
  //   async findById(id: string): Promise<GetUserDTO | null> {
  //     const user = this.users.find((item) => item.id === id);

  //     if (!user) {
  //       return null;
  //     }

  //     return PrismaUserMapper.toDTO(user);
  //   }

  //   async findByEmail(email: string): Promise<GetUserDTO | null> {
  //     const user = this.users.find((item) => item.email === email);

  //     if (!user) {
  //       return null;
  //     }

  //     return PrismaUserMapper.toDTO(user);
  //   }

  //   async save(user: User): Promise<void> {
  //     const index = this.users.findIndex((u) => u.id === user.id);

  //     if (index >= 0) {
  //       this.users[index] = user;
  //     }
  //   }

  async create(post: Post) {
    this.posts.push(post);
  }
}
