import { WordWrap } from '../src/wordWrap';

describe('Default test', () => {
  it('should work', () => {
    const main = new WordWrap('Hello world');
    expect(main.getParam()).toBe('Hello world');
  });
});
