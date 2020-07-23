import * as vscode from "vscode";
import { findCssInJsLineNumbers } from "./utils";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("css-in-js-fold.foldAll", () => {
      if (!vscode.window.activeTextEditor) {
        return;
      }
      const { document } = vscode.window.activeTextEditor;
      const cssInJsLineNumbers = findCssInJsLineNumbers(document);

      if (cssInJsLineNumbers.length > 0) {
        vscode.commands.executeCommand("editor.fold", {
          levels: 1,
          selectionLines: cssInJsLineNumbers,
        });
      }
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("css-in-js-fold.unfoldAll", () => {
      if (!vscode.window.activeTextEditor) {
        return;
      }
      const { document } = vscode.window.activeTextEditor;
      const cssInJsLineNumbers = findCssInJsLineNumbers(document);

      if (cssInJsLineNumbers.length > 0) {
        vscode.commands.executeCommand("editor.unfold", {
          levels: 1,
          selectionLines: cssInJsLineNumbers,
        });
      }
    })
  );
}

export function deactivate() {}
