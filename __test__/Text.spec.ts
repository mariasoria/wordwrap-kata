import {Text} from "../src/Text";
import {ColumnWidth} from "../src/ColumnWidth";

describe('Text', () => {
    it('should not make any changes when the text with only 1 word is shorter than the column width', () => {
        const text = Text.createText("Hello");
        const columnWidth = ColumnWidth.createColumnWidth(6);

        expect(text.wrapLineParallel(columnWidth).value()).toBe("Hello\\n");
    });

    it('should not make any changes when the text with more than 1 word is shorter than the column width', () => {
        const text = Text.createText("Hola cosita");
        const columnWidth = ColumnWidth.createColumnWidth(12);

        expect(text.wrapLineParallel(columnWidth).value()).toBe("Holacosita\\n");
    });
    it('should break lines when the words in the text are longer than the column width', () => {
        const text = Text.createText("Hola cosita");
        const columnWidth = ColumnWidth.createColumnWidth(3);

        expect(text.wrapLineParallel(columnWidth).value()).toBe("Hol\\na c\\nosi\\nta\\n");
    });

});
