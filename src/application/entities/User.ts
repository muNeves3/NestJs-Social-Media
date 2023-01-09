import { Replace } from '@helpers/Replace';
import { randomUUID } from 'crypto';
import { Password } from './Password';

export interface UserProps {
  email: string;
  password: Password; // Using Value Object
  username: string;
  createdAt: Date;
  deactivateDate?: Date;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(props: Replace<UserProps, { createdAt?: Date }>) {
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

  public get email(): string {
    return this.props.email;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get password(): Password {
    return this.props.password;
  }

  public set password(password: Password) {
    this.props.password = password;
  }

  public get username(): string {
    return this.props.username;
  }

  public set username(username: string) {
    this.props.username = username;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public deactivate() {
    this.props.deactivateDate = new Date();
  }

  public get deactivateDate() {
    return this.props.deactivateDate;
  }
}
