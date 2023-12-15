import { ColumnWidth } from "./ColumnWidth";
import { Text } from "./Text";


/**
 * Main Class
 */
export class Wrapper {

    static wrap(aText: string | null, aColumnWidth: number | null): string {
        const text = Text.createText(aText);
        const columnWidth = ColumnWidth.createColumnWidth(aColumnWidth);
        return Wrapper.wrapText(text, columnWidth).value();
    }

    static wrapText(aText: Text, aColumnWidth: ColumnWidth): Text {
        if (aText.fitsIn(aColumnWidth)) {
            return aText;
        }
        const wrappedLine = aText.wrapLine(aColumnWidth);
        const newColumnWidth = Wrapper.getColumnWidthFrom(wrappedLine);
        const remainingText = aText.remainingText(newColumnWidth);
        return wrappedLine.concat(Wrapper.wrapText(remainingText, aColumnWidth));
    }

    private static getColumnWidthFrom(wrappedLine: Text) {
        return ColumnWidth.createColumnWidth(wrappedLine.value().length - 2);
    }
}
