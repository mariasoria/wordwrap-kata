export class ColumnWidth {
    private readonly value: number;

    constructor(value: number) {
        this.value = value;
    }

    static createColumnWitdh(value: number | null): ColumnWidth {
        if (value === null || value <= 0) {
            throw new Error('Column width must be greater than 0');
        }
        return new ColumnWidth(value);
    }

    public getValue(): number {
        return this.value;
    }
}