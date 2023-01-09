import { Password } from './Password';

describe('Password', () => {
  it('Should be able to create a user password', async () => {
    const password = new Password('123456');

    expect(password).toBeTruthy();
  });

  it('Should not be able to create a user password with less than 6 characters', async () => {
    expect(() => {
      new Password('12345');
    }).toThrow();
  });

  it('Should not be able to create a user password without numbers', async () => {
    expect(() => {
      new Password('abcdef');
    }).toThrow();
  });
});
