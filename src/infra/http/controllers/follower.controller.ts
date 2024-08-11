import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreateFollowerBodyDTO } from '../DTOs/create-follower-body-DTO';
import { CreateFollower } from '@application/use-cases/follower/create-follower';

@Controller('/follower')
export class FollowerController {
  constructor(private readonly createFollower: CreateFollower) {}

  @Post()
  async create(@Body() body: CreateFollowerBodyDTO) {
    const { followerId, userId } = body;
    try {
      const { follower } = await this.createFollower.execute({
        followerId,
        userId,
      });

      return { follower };
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
