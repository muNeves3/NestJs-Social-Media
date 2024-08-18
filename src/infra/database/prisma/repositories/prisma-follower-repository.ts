import { FollowerRepository } from '@application/repositories/follower-repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Follower } from '@application/entities/Follower';
import { PrismaFollowerMapper } from '../mappers/prisma-follower-mapper';
import { Follower as PrismaFollowerEntity } from '@prisma/client';

@Injectable()
export class PrismaFollowerRepository implements FollowerRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(follower: Follower): Promise<Follower> {
    const followerData = PrismaFollowerMapper.toPrisma(follower);

    const followerReturn = await this.prismaService.follower.create({
      data: followerData,
    });

    return followerReturn as Follower;
  }
  getAllFolowers(userId: string): Promise<Follower[]> {
    throw new Error('Method not implemented.');
  }

  async getFollowerById(id: string): Promise<Follower> {
    const follower = await this.prismaService.follower.findUnique({
      where: {
        id,
      },
    });

    return PrismaFollowerMapper.toDomain(follower as PrismaFollowerEntity);
  }

  async delete(follower: Follower): Promise<void> {
    const followerData = PrismaFollowerMapper.toPrisma(follower);

    if (followerData.id) {
      this.prismaService.follower.delete({
        where: {
          id: followerData.id,
        },
      });
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Follower id not found',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
