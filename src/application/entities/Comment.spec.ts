import { Comment } from './Comment';
import { Text } from './Text';

describe('Comment', () => {
  it('Should be able to create a comment', async () => {
    const comment = new Comment({
      text: new Text('Comment text'),
      userId: 'adaskjhdasjkhdasjk',
      postId: 'sadjhkasdj',
    });

    expect(comment).toBeTruthy();
  });
});
