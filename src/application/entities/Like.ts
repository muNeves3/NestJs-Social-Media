import { Replace } from '@helpers/Replace';
import { randomUUID } from 'crypto';

export interface LikeProps {
  userId: string;
  postId?: string | null;
  commentId?: string | null;
  createdAt: Date;
}

export class Like {
  private _id: string;
  private props: LikeProps;

  constructor(props: Replace<LikeProps, { createdAt?: Date }>) {
    this._id = randomUUID();

    if (props.postId && props.commentId) {
      throw new Error(
        'The like cannot be on a post and a comment at the same time',
      );
    }

    if (!props.postId && !props.commentId) {
      throw new Error('The like must be on a post or a comment');
    }

    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  // Getters and setters to do not depend on ORM
  public get id(): string {
    return this._id;
  }

  public get userId(): string {
    return this.props.userId;
  }

  public set userId(userId: string) {
    this.props.userId = userId;
  }

  public get postId(): string | null | undefined {
    return this.props.postId;
  }

  public set postId(postId: string | null | undefined) {
    this.props.postId = postId;
  }

  public get commentId(): string | null | undefined {
    return this.props.commentId;
  }

  public set commentId(commentId: string | null | undefined) {
    this.props.commentId = commentId;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
