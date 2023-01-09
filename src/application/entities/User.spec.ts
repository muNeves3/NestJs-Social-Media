import { Password } from './Password';
import { User } from './User';

describe('User', () => {
  it('Should be able to create a user', async () => {
    const user = new User({
      email: 'johndoe@example.com',
      password: new Password('123456'),
      username: 'johndoe',
    });

    expect(user).toBeTruthy();
  });
});
