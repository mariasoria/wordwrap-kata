import {Text} from "../src/Text";
import {ColumnWidth} from "../src/ColumnWidth";

describe('Text', () => {
    it('should not make any changes when the text with only 1 word is shorter than the column width', () => {
        const text = Text.createText("Hello");
        const columnWidth = ColumnWidth.createColumnWidth(6);

        expect(text.wrapLine(columnWidth).value()).toBe("Hello\\n");
    });

    it('should break lines when the text with only 1 word is longer than the column width', () => {
        const text = Text.createText("Hello");
        const columnWidth = ColumnWidth.createColumnWidth(3);

        expect(text.wrapLine(columnWidth).value()).toBe("Hel\\n");
    });

});
