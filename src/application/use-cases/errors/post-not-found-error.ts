import { HttpException, HttpStatus } from '@nestjs/common';

export class PostNotFoundError extends HttpException {
  constructor() {
    super('Post not found', HttpStatus.NOT_FOUND);
  }
}
