import { User } from '@application/entities/User';
import { UserRepository } from '@application/repositories/user-repository';
import { User as UserPrismaEntity } from '@prisma/client';
import { GetUserDTO } from '@infra/http/DTOs/get-user-DTO';
import { Injectable } from '@nestjs/common';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async _getUserPrismaEntity(id: string): Promise<UserPrismaEntity | null> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return null;
    }

    return user;
  }

  async cancel(id: string): Promise<GetUserDTO> {
    const user = await this._getUserPrismaEntity(id);

    if (!user) {
      throw new Error('User not found');
    }

    await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        deactivateDate: new Date(),
      },
    });

    return PrismaUserMapper.toDTO(user);
  }

  async findById(id: string): Promise<GetUserDTO | null> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return null;
    }
    return PrismaUserMapper.toDTO(user);
  }

  async create(user: User): Promise<void> {
    const userData = PrismaUserMapper.toPrisma(user);

    await this.prismaService.user.create({
      data: userData,
    });
  }
  async findByEmail(email: string): Promise<GetUserDTO | null> {
    throw new Error('Method not implemented.');
  }

  async save(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
