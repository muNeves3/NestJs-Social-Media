import { Replace } from '@helpers/Replace';
import { randomUUID } from 'crypto';
import { Text } from './Text';
import { Title } from './Title';

export interface PostProps {
  title: Title;
  text: Text;
  userId: string;
  publishedAt: Date;
}

export class Post {
  private _id: string;
  private props: PostProps;

  constructor(props: Replace<PostProps, { publishedAt?: Date }>) {
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

  public get publishedAt(): Date {
    return this.props.publishedAt;
  }
}
