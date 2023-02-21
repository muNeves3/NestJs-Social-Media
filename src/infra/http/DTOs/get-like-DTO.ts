export class GetLikeDTO {
  userId: string;
  postId?: string | null;
  commentId?: string | null;
  id: string;
  createdAt: Date;
}
