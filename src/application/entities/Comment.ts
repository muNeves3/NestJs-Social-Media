import { Replace } from '@helpers/Replace';
import { randomUUID } from 'crypto';
import { Text } from './Text';

export interface CommentProps {
  text: Text;
  userId: string;
  publishedAt: Date;
  postId: string;
}

export class Comment {
  private _id: string;
  private props: CommentProps;

  constructor(props: Replace<CommentProps, { publishedAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      publishedAt: props.publishedAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get userId(): string {
    return this.props.userId;
  }

  public set userId(userId: string) {
    this.userId = userId;
  }

  public get text(): Text {
    return this.props.text;
  }

  public set text(text: Text) {
    this.props.text = text;
  }

  public get postId(): string {
    return this.props.postId;
  }

  public set postId(postId: string) {
    this.props.postId = postId;
  }

  public get publishedAt(): Date {
    return this.props.publishedAt;
  }
}
