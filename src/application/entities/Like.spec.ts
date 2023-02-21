import { Like } from './Like';

describe('Like', () => {
  it('Should be able to create a like', async () => {
    const like = new Like({
      userId: 'asjhdkasjhdkas=2yu32',
      commentId: 'asudiasudioasduasio',
    });

    expect(like).toBeTruthy();
  });

  it('Should not be able to create a like on a post and a comment at the same time', async () => {
    expect(() => {
      new Like({
        userId: 'asjhdkasjhdkas=2yu32',
        postId: 'asudiasudioasduasio',
        commentId: 'asudiasudioasduasio',
      });
    }).toThrow();
  });
});
