/**
 * Main Class
 */
export class Wrapper {

    static wrap(text: string | null, columnWitdh: number | null): string {
        if (text === null || text === '') {
            return '';
        }
        if(columnWitdh === null || columnWitdh <= 0) {
            throw new Error('Column width must be greater than 0');
        }
        if (text.length <= columnWitdh) {
            return text;
        }
        return text.substring(0, columnWitdh) + '\\n' + Wrapper.wrap(text.substring(columnWitdh), columnWitdh);
    }

}
