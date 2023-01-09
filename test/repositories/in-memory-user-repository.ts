import { User } from '@application/entities/User';
import { UserRepository } from '@application/repositories/user-repository';
import { UserNotFoundError } from '@application/use-cases/errors/user-not-found-error';
import { PrismaUserMapper } from '@infra/database/prisma/mappers/prisma-user-mapper';
import { GetUserDTO } from '@infra/http/DTOs/get-user-DTO';

// implementing in-memory repository to not depend on database
export class InMemoryUserRepository implements UserRepository {
  _getUserEntity(id: string): User | null {
    const user = this.users.find((item) => item.id === id);

    if (!user) {
      return null;
    }

    return user;
  }

  async cancel(id: string): Promise<GetUserDTO> {
    const user = this._getUserEntity(id);

    if (!user) {
      throw new UserNotFoundError();
    }

    user.deactivate();
    return PrismaUserMapper.toDTO(user);
  }
  async findById(id: string): Promise<GetUserDTO | null> {
    const user = this.users.find((item) => item.id === id);

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDTO(user);
  }
  public users: User[] = [];

  async findByEmail(email: string): Promise<GetUserDTO | null> {
    const user = this.users.find((item) => item.email === email);

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDTO(user);
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
