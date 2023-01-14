import { User } from '@application/entities/User';
import { UserRepository } from '@application/repositories/user-repository';
import { User as UserPrismaEntity } from '@prisma/client';
import { GetUserDTO } from '@infra/http/DTOs/get-user-DTO';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { PrismaService } from '../prisma.service';
import { UserNotFoundError } from '@application/use-cases/errors/user-not-found-error';
import { GetPostDTO } from '@infra/http/DTOs/get-post-DTO';
import { PrismaPostMapper } from '../mappers/prisma-post-mapper';

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

  async getUserPosts(id: string): Promise<GetPostDTO[]> {
    const userPosts = await this.prismaService.user.findUnique({
      where: {
        id,
      },
      include: {
        Post: true,
      },
    });

    if (!userPosts?.Post) {
      return [] as GetPostDTO[];
    }

    userPosts?.Post.map((post) => {
      post = PrismaPostMapper.toDTO(post);
    });

    return userPosts.Post;
  }

  async cancel(id: string): Promise<GetUserDTO> {
    const user = await this._getUserPrismaEntity(id);
    const deactivateNewDate = new Date();

    if (!user) {
      throw new UserNotFoundError();
    } else {
      await this.prismaService.user.update({
        where: {
          id,
        },
        data: {
          deactivateDate: deactivateNewDate,
        },
      });

      return PrismaUserMapper.toDTO({
        ...user,
        deactivateDate: deactivateNewDate,
      });
    }
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

    const userCreated = await this.findByEmail(user.email);

    if (userCreated) {
      throw new HttpException(
        'This user already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.prismaService.user.create({
      data: userData,
    });
  }
  async findByEmail(email: string): Promise<GetUserDTO | null> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDTO(user);
  }

  async save(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
