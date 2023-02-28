import { CreateComment } from '@application/use-cases/comment/create-comment';
import { Controller } from '@nestjs/common';

@Controller('/comment')
export class CommentController {
  constructor(private readonly createComment: CreateComment) {}
}
