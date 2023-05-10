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

    remainingText(aColumnWidth: ColumnWidth) {
        const remainingText = this.text.substring(aColumnWidth.value());
        return Text.createText(remainingText.trim());
    }

    wrapLine(aColumnWidth: ColumnWidth) {
        let index = 0;
        const words = this.text.split(' ');
        const wordHasToBeSplit = words[index].length > aColumnWidth.value();
        if(wordHasToBeSplit) {
            const newText = this.text.substring(0, aColumnWidth.value()) + '\\n'
            return Text.createText(newText);
        }

        let line = words[index];
        while (line.length <= aColumnWidth.value() && this.thereAreMoreWords(words, index)) {
            index++;
            const nextWord = words[index];
            const nextWordFits = nextWord.length + line.length + 1 <= aColumnWidth.value();
            if(nextWordFits) {
                line += ' ' + words[index];
            } else {
                break;
            }
        }
        const newText = this.text.substring(0, line.length) + '\\n'
        return Text.createText(newText);
    }

    concat(otherText: Text): Text {
        const text = this.text + otherText.value();
        return Text.createText(text);
    }

    private thereAreMoreWords(words: string[], index: number) {
        return words.length > index + 1;
    }
}