import { InMemoryPostRepository } from '@test/repositories/in-memory-post-repository';
import { CreatePost } from './create-post';

describe('Create post', () => {
  it('Should be able to create a user', async () => {
    const postRepository = new InMemoryPostRepository(); //in-memory repository to not depend on database
    const createPost = new CreatePost(postRepository);

    const { post } = await createPost.execute({
      title: 'post title',
      text: 'post text',
      userId: 'hasdgjkas',
    });

    expect(postRepository.posts).toHaveLength(1);
    expect(postRepository.posts[0]).toEqual(post);
  });
});
