import { cssEditor, htmlEditor, jsEditor } from "./main";

const runButton = document.getElementById("run-btn");

runButton.addEventListener("click", runPreview);

function runPreview() {
  const js = jsEditor.getValue();
  const css = cssEditor.getValue();
  const html = htmlEditor.getValue();
  const preview = document.querySelector(".preview-window");
  preview.innerHTML = `<style>${css}</style>${html}`;
  const script = document.createElement("script");
  script.textContent = js;
  preview.appendChild(script);
  console.log(preview);
}
