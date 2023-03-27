import {Wrapper} from '../src/Wrapper';
import {ColumnWidth} from "../src/ColumnWidth";
import {Text} from "../src/Text";


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
        //  should give an error ?? Exception?
        expect(Wrapper.wrap('', 1)).toBe('');
        expect(Wrapper.wrap(null, 1)).toBe('');
    });

    it('should not make any changes when the text is shorter than the column width', () => {
        expect(Wrapper.wrap('Hello', 5)).toBe('Hello');
        expect(Wrapper.wrap('Hello world', 11)).toBe('Hello world');
    });

    it('should break a word if it is longer than the column width ', () => {
        expect(Wrapper.wrap("Hello", 2)).toBe('He\\nll\\no');
        expect(Wrapper.wrap("Hello world", 6)).toBe('Hello \\nworld');
        expect(Wrapper.wrap("Hello, how are you doing?", 7))
            .toBe('Hello, \\nhow are\\n you do\\ning?');
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

describe('Wrapper version 2', () => {
    it('should not make any changes when there is no text to break in lines', () => {
        //  should give an error ?? Exception?
        expect(Wrapper.wrapText(Text.createText(''), ColumnWidth.createColumnWitdh(1)).text())
            .toBe('');
        expect(Wrapper.wrapText(Text.createText(null), ColumnWidth.createColumnWitdh(1)).text())
            .toBe('');
    });

    it('should not make any changes when the text is shorter than the column width', () => {
        expect(Wrapper.wrapText(Text.createText('Hello'), ColumnWidth.createColumnWitdh(5)).text())
            .toBe('Hello');
        expect(Wrapper.wrapText(Text.createText('Hello world'), ColumnWidth.createColumnWitdh(11)).text())
            .toBe('Hello world');
    });

    it('should break a word if it is longer than the column width ', () => {
        expect(Wrapper.wrapText(Text.createText("Hello"), ColumnWidth.createColumnWitdh(2)).text())
            .toBe('He\\nll\\no');
        expect(Wrapper.wrapText(Text.createText("Hello world"), ColumnWidth.createColumnWitdh(6)).text())
            .toBe('Hello \\nworld');
        expect(Wrapper.wrapText(Text.createText("Hello, how are you doing?"), ColumnWidth.createColumnWitdh(7)).text())
            .toBe('Hello, \\nhow are\\n you do\\ning?');
    });

    it('should display an error when the user introduces a negative columnWidth value', () => {
        expect(() => Wrapper.wrapText(Text.createText('Hello'), ColumnWidth.createColumnWitdh(-1)))
            .toThrowError('Column width must be greater than 0');
    });

    it('should display an error when the user has not introduced columnWidth', () => {
        expect(() => Wrapper.wrapText(Text.createText('Hello'), ColumnWidth.createColumnWitdh(null)))
            .toThrowError('Column width must be greater than 0');
    });
});