import {ColumnWidth} from "./ColumnWidth";
import {Text} from "./Text";


/**
 * Main Class
 */
export class Wrapper {

    static wrap(aText: string | null, aColumnWidth: number | null): string {
        const text = Text.createText(aText);
        const columnWidth = ColumnWidth.createColumnWitdh(aColumnWidth);
        return Wrapper.wrapText(text, columnWidth).text();
    }

    static wrapText(aText: Text, aColumnWidth: ColumnWidth): Text {
        if (aText.fitsIn(aColumnWidth)) {
            return aText;
        }
        let wrappedLine = aText.wrapLine(aColumnWidth);
        let remainingText = aText.remainingText(aColumnWidth);
        return wrappedLine.concat(Wrapper.wrapText(remainingText, aColumnWidth));
    }
}
