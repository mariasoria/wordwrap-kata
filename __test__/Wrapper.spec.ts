import {Wrapper} from '../src/Wrapper';


/*
  * "", 1 -> ""
  * null, 1 -> ""
  * "hello", 7 -> "hello"
  * "hello", 3 -> "hel\lo"
  * "hello", 1 -> "h\ne\nl\l\no"
  * "hello world", 7 -> "hello w\norld"
  *
  * Corner cases:
  * "hello", -1 -> Exception
  * "hello", null -> Exception
  * */

describe('Wrapper', () => {
    it('should not make any changes when there is no text to break in lines', () => {
        expect(Wrapper.wrap('', 1)).toBe('');
        expect(Wrapper.wrap(null, 1)).toBe('');
    });

    it('should not make any changes when the text is shorter than the column width', () => {
        expect(Wrapper.wrap('Hello', 5)).toBe('Hello');
        expect(Wrapper.wrap('Hello world', 11)).toBe('Hello world');
    });

    it('should break a word if it is longer than the column width ', () => {
        expect(Wrapper.wrap("Hello", 2)).toBe('He\\nll\\no');
        expect(Wrapper.wrap("Hello world", 6)).toBe('Hello\\nworld');
        expect(Wrapper.wrap("Hello, how are you doing?", 7))
            .toBe('Hello,\\nhow are\\nyou\\ndoing?');
    });

    it('should display an error when the user introduces a negative columnWidth value', () => {
        expect(() => Wrapper.wrap('Hello', -1))
            .toThrowError('Column width must be greater than 0');
    });

    it('should display an error when the user has not introduced columnWidth', () => {
        expect(() => Wrapper.wrap('Hello', null))
            .toThrowError('Column width must be greater than 0');
    });
});
