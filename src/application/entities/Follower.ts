import { Replace } from '@helpers/Replace';
import { randomUUID } from 'crypto';

export interface FollowerProps {
  followerId: string;
  userId: string;
  createdAt: Date;
  id: string;
}

export class Follower {
  private _id: string;
  private props: FollowerProps;

  constructor(
    props: Replace<FollowerProps, { createdAt?: Date; id?: string }>,
  ) {
    this._id = randomUUID();
    if ('id' in props) {
      if (props.id !== undefined) {
        this.props = {
          id: props.id,
          createdAt: props.createdAt ?? new Date(),
          followerId: props.followerId,
          userId: props.userId,
        };
      }
    } else {
      this.props = {
        id: this._id,
        followerId: props.followerId,
        userId: props.userId,
        createdAt: props.createdAt ?? new Date(),
      };
    }
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
