import * as vscode from "vscode";
import { findCssInJs } from "./utils";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("css-in-js-fold.foldAll", () => {
      if (!vscode.window.activeTextEditor) {
        return;
      }
      const { document } = vscode.window.activeTextEditor;
      const cssTemplateLines = findCssInJs(document);

      if (cssTemplateLines.length > 0) {
        vscode.commands.executeCommand("editor.fold", {
          levels: 1,
          selectionLines: cssTemplateLines,
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
      const cssTemplateLines = findCssInJs(document);

      if (cssTemplateLines.length > 0) {
        vscode.commands.executeCommand("editor.unfold", {
          levels: 1,
          selectionLines: cssTemplateLines,
        });
      }
    })
  );
}

export function deactivate() {}
