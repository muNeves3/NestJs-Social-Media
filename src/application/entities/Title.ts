export class Title {
  private readonly title: string;

  private validateTitleLength(title: string) {
    return title.length <= 30 && title.length >= 1;
  }

  constructor(title: string) {
    if (!this.validateTitleLength(title)) {
      throw new Error('The title length must be at most 300 characters');
    }

    this.title = title;
  }

  get value(): string {
    return this.title;
  }
}
