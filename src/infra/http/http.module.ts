import { Module } from '@nestjs/common';
import { CreateUser } from '@application/use-cases/create-user';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './controllers/user.controller';
import { CancelUser } from '@application/use-cases/cancel-user';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUser, CancelUser],
})
export class HttpModule {}
