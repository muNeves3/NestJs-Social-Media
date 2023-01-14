import { InMemoryPostRepository } from '@test/repositories/in-memory-post-repository';
import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { CreatePost } from '../post/create-post';
import { CreateUser } from './create-user';

describe('User', () => {
  it('Should be able to find a user posts by its id', async () => {
    const userRepository = new InMemoryUserRepository(); //in-memory repository to not depend on database
    const createUser = new CreateUser(userRepository);
    const postRepository = new InMemoryPostRepository(); //in-memory repository to not depend on database
    const createPost = new CreatePost(postRepository);

    const { user } = await createUser.execute({
      email: 'johndoe@example.com',
      password: '123456',
      username: 'John Doe',
    });

    await createPost.execute({
      title: 'post title',
      text: 'post text',
      userId: user.id,
    });

    const userPosts = await userRepository.getUserPostsTest(
      user.id,
      postRepository.posts,
    );

    expect(postRepository.posts).toHaveLength(1);
    expect(postRepository.posts[0].id).toEqual(userPosts[0].id);

    //const { user: foundUser } = await findUserById.execute({ id: user.id });

    //expect(foundUser).toBeTruthy();
  });
});
