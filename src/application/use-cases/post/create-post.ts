import { Post } from '@application/entities/Post';
import { Text } from '@application/entities/Text';
import { Title } from '@application/entities/Title';
import { PostRepository } from '@application/repositories/post-repository';
import { Injectable } from '@nestjs/common';

interface CreatePostRequest {
  title: string;
  text: string;
  userId: string;
}

interface CreatePostResponse {
  post: Post;
}

@Injectable()
export class CreatePost {
  constructor(private readonly postRepository: PostRepository) {}
  async execute(request: CreatePostRequest): Promise<CreatePostResponse> {
    const { text, title, userId } = request;

    const post = new Post({
      text: new Text(text),
      title: new Title(title),
      userId,
    });

    await this.postRepository.create(post); // will trigger the create method on infra layer

    return { post };
  }
}
