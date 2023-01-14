import { GetPostDTO } from '@infra/http/DTOs/get-post-DTO';
import { GetUserDTO } from '@infra/http/DTOs/get-user-DTO';
import { User } from '../entities/User';
// Repository to be used on infra layer and on tests
export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findByEmail(email: string): Promise<GetUserDTO | null>;
  abstract save(user: User): Promise<void>;
  abstract cancel(id: string): Promise<GetUserDTO>;
  abstract findById(id: string): Promise<GetUserDTO | null>;
  abstract getUserPosts(id: string): Promise<GetPostDTO[]>;
}
