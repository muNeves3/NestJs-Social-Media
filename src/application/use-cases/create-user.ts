import { Password } from '@application/entities/Password';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/user-repository';

interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
}

interface CreateUserResponse {
  user: User;
}

@Injectable()
export class CreateUser {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { username, email, password } = request;

    const user = new User({
      email,
      password: new Password(password),
      username,
    });

    await this.userRepository.create(user); // will trigger the create method on infra layer

    return { user };
  }
}
