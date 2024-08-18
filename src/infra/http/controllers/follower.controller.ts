import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreateFollowerBodyDTO } from '../DTOs/create-follower-body-DTO';
import { CreateFollower } from '@application/use-cases/follower/create-follower';
import { RemoveFollower } from '@application/use-cases/follower/remove-follower';
import {
  findFollowerByIdRequest,
  findFollwoerByIdResponse,
  findFollowerById,
} from '@application/use-cases/follower/find-follower-by-id';
//import { GetAll } from '@application/use-cases/follower/get-all';

@Controller('/follower')
export class FollowerController {
  constructor(
    private readonly createFollower: CreateFollower,
    private readonly deleteFollower: RemoveFollower,
    private readonly findFollowerById: findFollowerById, //private readonly getAllFollowers: GetAll
  ) {}

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

  @Get()
  @ApiOkResponse({ description: 'List of followers' })
  async list(@Body() body: { userId: string }) {
    return [];
  }

  @Get('/follower/:id')
  async getFollowerById(
    @Param('id') id: string,
  ): Promise<findFollwoerByIdResponse> {
    try {
      const follower = await this.findFollowerById.execute({ id });
      return { follower: follower.follower };
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('/delete')
  async delete(@Body() body: { id: string }) {
    try {
      const follower = await this.findFollowerById.execute({ id: body.id });

      try {
        await this.deleteFollower.execute({ follower: follower.follower });
        return { message: 'Follower deleted' };
      } catch (error: any) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
