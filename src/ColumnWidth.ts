export class ColumnWidth {
    private readonly width: number;

    constructor(value: number) {
        this.width = value;
    }

    static createColumnWitdh(value: number | null): ColumnWidth {
        if (value === null || value <= 0) {
            throw new Error('Column width must be greater than 0');
        }
        return new ColumnWidth(value);
    }

    public value(): number {
        return this.width;
    }
}