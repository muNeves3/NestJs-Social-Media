import { User } from '@application/entities/User';

// Mapper to convert from domain entity to Prisma entity
export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      email: user.email,
      password: user.password.value,
      username: user.username,
      createdAt: user.createdAt,
      deactivateDate: user.deactivateDate,
    };
  }
}
