import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user-repository';

interface CancelUserRequest {
  id: string;
}

@Injectable()
export class CancelUser {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(request: CancelUserRequest): Promise<void> {
    const { id } = request;

    await this.userRepository.cancel(id); // will trigger the create method on infra layer
  }
}
