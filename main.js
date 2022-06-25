import * as monaco from "monaco-editor";
import "./style.css";

import "./runPreview.js";
import "./saveContent.js";
import "./loadContent.js";

export const jsEditor = monaco.editor.create(document.getElementById("js"), {
  value: 'console.log("Hello, world")',
  language: "javascript",
});

export const cssEditor = monaco.editor.create(document.getElementById("css"), {
  language: "css",
  value: "h1 { color: red; }",
});

export const htmlEditor = monaco.editor.create(
  document.getElementById("html"),
  {
    value: "<h1>Hello, world</h1>",
    language: "html",
  }
);
