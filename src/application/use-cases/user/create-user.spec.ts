import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { CreateUser } from './create-user';

describe('Create user', () => {
  it('Should be able to create a user', async () => {
    const userRepository = new InMemoryUserRepository(); //in-memory repository to not depend on database
    const createUser = new CreateUser(userRepository);

    const { user } = await createUser.execute({
      email: 'johndoe@example.com',
      password: '123456',
      username: 'John Doe',
    });

    expect(userRepository.users).toHaveLength(1);
    expect(userRepository.users[0]).toEqual(user);
  });
});
