import { Comment } from '@application/entities/Comment';
import { Text } from '@application/entities/Text';
import { CommentRepository } from '@application/repositories/comment-repository';
import { Injectable } from '@nestjs/common';

interface CreateCommentRequest {
  text: string;
  userId: string;
  postId: string;
}

@Injectable()
export class CreateComment {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(request: CreateCommentRequest) {
    const { text, userId, postId } = request;

    const comment = new Comment({
      text: new Text(text),
      userId,
      postId,
    });

    await this.commentRepository.create(comment);

    return { comment };
  }
}
