import { Text } from './Text';

describe('Text', () => {
  it('Should be able to create a post text', async () => {
    const text = new Text('Post text');

    expect(text).toBeTruthy();
  });

  it('Should not be able to create a text with more then 300 characters', async () => {
    expect(() => {
      new Text('3'.repeat(301));
    }).toThrow();
  });

  it('Should not be able to create a text with less then 1 character', async () => {
    expect(() => {
      new Text('');
    }).toThrow();
  });
});
