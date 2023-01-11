import { Post } from './Post';
import { Text } from './Text';
import { Title } from './Title';

describe('Post', () => {
  it('Should be able to create a post', async () => {
    const post = new Post({
      text: new Text('Post text'),
      title: new Title('Post Title'),
      userId: 'adaskjhdasjkhdasjk',
    });

    expect(post).toBeTruthy();
  });
});
