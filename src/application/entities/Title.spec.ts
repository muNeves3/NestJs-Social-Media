import { Title } from './Title';

describe('Title', () => {
  it('Should be able to create a post Title', async () => {
    const title = new Title('Post Title');

    expect(title).toBeTruthy();
  });

  it('Should not be able to create a title with more then 30 characters', async () => {
    expect(() => {
      new Title('3'.repeat(31));
    }).toThrow();
  });

  it('Should not be able to create a Title with less then 1 character', async () => {
    expect(() => {
      new Title('');
    }).toThrow();
  });
});
