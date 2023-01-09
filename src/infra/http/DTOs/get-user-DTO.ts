export class GetUserDTO {
  email: string;
  password: string; // Using Value Object
  username: string;
  createdAt: Date;
  deactivateDate?: Date | null;
}
