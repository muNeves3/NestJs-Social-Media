import { User } from '../entities/User';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract save(user: User): Promise<void>;
  abstract cancel(id: string): Promise<void>;
  abstract findById(id: string): Promise<User | null>;
}
