import { Replace } from '@helpers/Replace';
import { randomUUID } from 'crypto';

export interface FollowerProps {
  followerId: string;
  userId: string;
  createdAt: Date;
}

export class Follower {
  private _id: string;
  private props: FollowerProps;

  constructor(props: Replace<FollowerProps, { createdAt?: Date }>) {
    this._id = randomUUID();
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
    return this.props.followerId;
  }

  public set userId(userId: string) {
    this.props.followerId = userId;
  }

  public get followerId(): string {
    return this.props.followerId;
  }

  public set followerId(followerId: string) {
    this.props.followerId = followerId;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }
}
