import { Controller } from "./controller";

export class App {
  public initialize(aDocument: Document): void {
    const controller = new Controller()
    controller.subscribeToEvents(
        aDocument, {
          columnWidthId:'column-width',
          editorId: 'editor',
          resultId:  'result',
          applyId: 'do-word-wrap'})
  }
}