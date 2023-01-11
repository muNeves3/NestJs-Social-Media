import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { CancelUser } from './cancel-user';
import { CreateUser } from './create-user';
import { FindUserById } from './find-user-by-id';

describe('User', () => {
  it('Should be able to cancel a user', async () => {
    const userRepository = new InMemoryUserRepository(); //in-memory repository to not depend on database
    const createUser = new CreateUser(userRepository);
    const findUserById = new FindUserById(userRepository);
    const cancelUser = new CancelUser(userRepository);

    const { user } = await createUser.execute({
      email: 'johndoe@example.com',
      password: '123456',
      username: 'John Doe',
    });

    await cancelUser.execute({ id: user.id });

    const { user: foundUser } = await findUserById.execute({ id: user.id });

    expect(foundUser?.deactivateDate).toBeTruthy();
  });
});
