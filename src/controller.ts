import { Wrapper } from "./Wrapper";

export class Controller {

    public subscribeToEvents(aDocument: Document, {columnWidthId, editorId, resultId, applyId}:
        {
            columnWidthId: string,
            editorId: string,
            resultId: string,
            applyId: string
        }): void {
        const columnWidthInput = aDocument.getElementById(columnWidthId) as HTMLInputElement
        if (columnWidthInput == null) {
            console.log(`Wrong id for widgets: ${columnWidthId}`)
        }
        const editorWidget = aDocument.getElementById(editorId) as HTMLTextAreaElement
        if (editorWidget == null) {
            console.log(`Wrong id for widgets: ${editorId}`)
        }
        const applyButton = aDocument.getElementById(applyId) as HTMLButtonElement
        if (applyButton == null) {
            console.log(`Wrong id for widgets: ${applyId}`)
        }
        console.log('Subscribing events...')

        applyButton!.onclick = () => {
            console.log('Button apply clicked');
            console.log('ColumnWidth provided: ', columnWidthInput!.value);
            console.log('Text provided: ', editorWidget!.value);
            const result = Wrapper.wrap(editorWidget!.value, parseInt(columnWidthInput!.value));
            const resultTextArea = aDocument.getElementById(resultId) as HTMLTextAreaElement
            resultTextArea.value = result;
        }
    }
}