import { FollowerRepository } from '@application/repositories/follower-repository';
import { Injectable } from '@nestjs/common';
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
  getAllFolowers(userId: number): Promise<Follower[]> {
    throw new Error('Method not implemented.');
  }
  delete(follower: Follower): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
