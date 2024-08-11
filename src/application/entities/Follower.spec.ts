import { Follower } from './Follower';

describe('Follower', () => {
  it('Should be able to create a follower', async () => {
    const follower = new Follower({
      followerId: '1',
      followingId: '2',
      createdAt: new Date(),
    });

    expect(follower).toBeTruthy();
  });
});
