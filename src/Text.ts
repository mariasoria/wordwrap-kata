import {ColumnWidth} from "./ColumnWidth";

export class Text {
    private readonly text: string;

    constructor(value: string) {
        this.text = value;
    }

    static createText(value: string | null): Text {
        if (value === null || value === '') {
            return new Text('');
        }
        return new Text(value);
    }

    fitsIn(columnWidth: ColumnWidth) {
        return this.text.length <= columnWidth.value();
    }

    public value(): string {
        return this.text;
    }

    wrapLine(aColumnWidth: ColumnWidth) {
        const newText = this.text.substring(0, aColumnWidth.value()) + '\\n'
        return Text.createText(newText);
    }

    remainingText(aColumnWidth: ColumnWidth) {
        const remainingText = this.text.substring(aColumnWidth.value());
        return Text.createText(remainingText);
    }

    concat(otherText: Text): Text {
        const text = this.text + otherText.value();
        return Text.createText(text);
    }
}