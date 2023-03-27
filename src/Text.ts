import {ColumnWidth} from "./ColumnWidth";

export class Text {
    private readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    static createText(value: string | null): Text {
        if (value === null || value === '') {
            return new Text('');
        }
        return new Text(value);
    }

    fitsIn(columnWidth: ColumnWidth) {
        return this.value.length <= columnWidth.getValue();
    }

    public text(): string {
        return this.value;
    }

    wrapLine(aColumnWidth: ColumnWidth) {
        const newText = this.value.substring(0, aColumnWidth.getValue()) + '\\n'
        return Text.createText(newText);
    }

    remainingText(aColumnWidth: ColumnWidth) {
        const remainingText = this.value.substring(aColumnWidth.getValue());
        return Text.createText(remainingText);
    }

    concat(otherText: Text): Text {
        let text = this.value + otherText.text();
        return Text.createText(text);
    }
}