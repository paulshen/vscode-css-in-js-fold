import * as vscode from "vscode";
import { findCssTemplates } from "./utils";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("css-template-fold.foldAll", () => {
      if (!vscode.window.activeTextEditor) {
        return;
      }
      const { document } = vscode.window.activeTextEditor;
      const cssTemplateLines = findCssTemplates(document);

      if (cssTemplateLines.length > 0) {
        vscode.commands.executeCommand("editor.fold", {
          levels: 1,
          selectionLines: cssTemplateLines,
        });
      }
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("css-template-fold.unfoldAll", () => {
      if (!vscode.window.activeTextEditor) {
        return;
      }
      const { document } = vscode.window.activeTextEditor;
      const cssTemplateLines = findCssTemplates(document);

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
