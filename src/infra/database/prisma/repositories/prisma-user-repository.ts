import { User } from '@application/entities/User';
import { UserRepository } from '@application/repositories/user-repository';
import { Injectable } from '@nestjs/common';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaService) {}
  cancel(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }

  async create(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async findByEmail(email: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }

  async save(user: User): Promise<void> {
    const userData = PrismaUserMapper.toPrisma(user);

    await this.prismaService.user.create({
      data: userData,
    });
  }
}
