import { GetUserDTO } from '@infra/http/DTOs/get-user-DTO';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/user-repository';

interface FindUserByIdRequest {
  id: string;
}

interface FindUserByIdResponse {
  user: GetUserDTO | null;
}

@Injectable()
export class FindUserById {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(request: FindUserByIdRequest): Promise<FindUserByIdResponse> {
    const { id } = request;

    const user = await this.userRepository.findById(id); // will trigger the create method on infra layer

    if (!user) {
      return { user: null };
    }

    return { user };
  }
}
