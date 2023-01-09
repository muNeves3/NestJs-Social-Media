import { User } from '@application/entities/User';
import { UserRepository } from '@application/repositories/user-repository';

export class InMemoryUserRepository implements UserRepository {
  cancel(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  public users: User[] = [];

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((item) => item.email === email);

    if (!user) {
      return null;
    }

    return user;
  }

  async save(user: User): Promise<void> {
    const index = this.users.findIndex((u) => u.id === user.id);

    if (index >= 0) {
      this.users[index] = user;
    }
  }

  async create(user: User) {
    this.users.push(user);
  }
}
