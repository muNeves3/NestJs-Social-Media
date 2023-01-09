import { User } from '@application/entities/User';

export class UserViewModel {
  static toHttp(user: User) {
    return {
      id: user.id,
      email: user.email,
      password: user.password.value,
      username: user.username,
      createdAt: user.createdAt,
    };
  }
}
