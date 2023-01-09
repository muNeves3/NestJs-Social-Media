import { Password } from '@application/entities/Password';
import { User as UserEntity } from '@application/entities/User';
import { GetUserDTO } from '@infra/http/DTOs/get-user-DTO';
import { User as UserPrismaEntity } from '@prisma/client';

// Mapper to convert from domain entity to Prisma entity
export class PrismaUserMapper {
  static toPrisma(user: UserEntity) {
    return {
      id: user.id,
      email: user.email,
      password: user.password.value,
      username: user.username,
      createdAt: user.createdAt,
      deactivateDate: user.deactivateDate,
    };
  }

  static toDTO(user: UserPrismaEntity | UserEntity) {
    const data = {
      email: user.email,
      password: user.password,
      username: user.username,
      createdAt: user.createdAt,
      deactivateDate: user.deactivateDate,
    } as GetUserDTO;

    return data;
  }
}
