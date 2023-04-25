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

    wrapLineParallel(aColumnWidth: ColumnWidth) {
        const textSplitBySpaces = this.text.split(" ");
        let newText = "";
        let word = 0;
        const lineWithNextWordLength = textSplitBySpaces[word].length + newText.length;
        while ((word <= textSplitBySpaces.length -1) && // there are more words
        (lineWithNextWordLength <= aColumnWidth.value())){
            newText = newText.concat(textSplitBySpaces[word]);
            word++;
        }
        newText = newText.concat("\\n");
        return Text.createText(newText);
    }

    concat(otherText: Text): Text {
        const text = this.text + otherText.value();
        return Text.createText(text);
    }
}