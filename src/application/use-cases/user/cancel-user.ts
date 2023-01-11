import { GetUserDTO } from '@infra/http/DTOs/get-user-DTO';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/user-repository';

interface CancelUserRequest {
  id: string;
}

@Injectable()
export class CancelUser {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(request: CancelUserRequest): Promise<GetUserDTO> {
    const { id } = request;

    const canceledUser = await this.userRepository.cancel(id); // will trigger the create method on infra layer

    return canceledUser;
  }
}
