import { InMemoryCommentRepository } from '@test/repositories/in-memory-comment-repository';
import { CreateComment } from './create-comment';

describe('Create comment', () => {
  it('Should be able to create a comment', async () => {
    const commentRepository = new InMemoryCommentRepository(); //in-memory repository to not depend on database
    const createcomment = new CreateComment(commentRepository);

    const { comment } = await createcomment.execute({
      text: 'comment text',
      userId: 'hasdgjkas',
      postId: 'asdasdasd',
    });

    expect(commentRepository.comments).toHaveLength(1);
    expect(commentRepository.comments[0]).toEqual(comment);
  });
});
