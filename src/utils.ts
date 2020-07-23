import * as vscode from "vscode";

const CSS_IN_JS_REGEX = new RegExp("\\b(css|styled(\\..+?|\\(.+?\\)))`", "g");

const SUPPORTED_LANGUAGES = [
  "typescriptreact",
  "typescript",
  "javascript",
  "javascriptreact",
];

export function findCssInJs(document: vscode.TextDocument): number[] {
  if (!SUPPORTED_LANGUAGES.includes(document.languageId)) {
    return [];
  }

  const text = document.getText();
  const results = [];
  let match;
  while ((match = CSS_IN_JS_REGEX.exec(text))) {
    const offset = match.index;
    const line = document.positionAt(offset).line;
    results.push(line);
  }

  return results;
}
