import { InMemoryPostRepository } from '@test/repositories/in-memory-post-repository';
import { CreatePost } from './create-post';
import { FindPostById } from './find-post-by-id';

describe('Create post', () => {
  it('Should be able to create a user', async () => {
    const postRepository = new InMemoryPostRepository(); //in-memory repository to not depend on database
    const createPost = new CreatePost(postRepository);
    const findPost = new FindPostById(postRepository);

    const { post } = await createPost.execute({
      title: 'post title',
      text: 'post text',
      userId: 'hasdgjkas',
    });

    const { post: postFound } = await findPost.execute({ id: post.id });

    expect(postRepository.posts).toHaveLength(1);
    expect(postFound?.id).toEqual(post.id);
  });
});
