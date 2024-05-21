import { Like } from '@application/entities/Like';
import { Post } from '@application/entities/Post';
import { PostRepository } from '@application/repositories/post-repository';
import { PrismaPostMapper } from '@infra/database/prisma/mappers/prisma-post-mapper';
import { GetPostDTO } from '@infra/http/DTOs/get-post-DTO';

// implementing in-memory repository to not depend on database
export class InMemoryPostRepository implements PostRepository {
  public posts: Post[] = [];

  like(like: Like): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getPostLikesCount(postId: string): Promise<number> {
    throw new Error('Method not implemented.');
  }
  
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

  async getAll(): Promise<GetPostDTO[]> {
    let postsDto: GetPostDTO[] = [];
    this.posts.map(post => postsDto.push(PrismaPostMapper.toDTO(post, 0)));
    return postsDto;
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
