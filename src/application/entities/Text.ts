export class Text {
  private readonly text: string;

  private validateTextLength(text: string) {
    return text.length <= 300 && text.length >= 1;
  }

  constructor(text: string) {
    if (!this.validateTextLength(text)) {
      throw new Error('The text length must be at most 300 characters');
    }

    this.text = text;
  }

  get value(): string {
    return this.text;
  }
}
