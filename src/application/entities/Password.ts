export class Password {
  private readonly password: string;

  private containsNumbers(str): boolean {
    return /\d/.test(str);
  }

  private validatePasswordLength(password: string) {
    return password.length >= 6;
  }

  private validatePasswordHasNumber(password: string) {
    return this.containsNumbers(password);
  }

  constructor(password: string) {
    if (!this.validatePasswordLength(password)) {
      throw new Error('The password length must be at least 6 characters');
    }
    if (!this.validatePasswordHasNumber(password)) {
      throw new Error('The password must contain at least one number');
    }

    this.password = password;
  }

  get value(): string {
    return this.password;
  }
}
