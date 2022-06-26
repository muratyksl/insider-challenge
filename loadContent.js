import { cssEditor, htmlEditor, jsEditor } from "./main";

window.addEventListener("DOMContentLoaded", (event) => {
  loadHistory();
  loadContent();
});

//save editor's content to local storage when the page is closed
window.addEventListener("beforeunload", () => {
  saveContent();
});

export function loadHistory() {
  const LSHistory = JSON.parse(localStorage.getItem("history"));
  if (LSHistory !== null) {
    const historyList = document.querySelector("#history-dropdown");
    LSHistory.forEach((history) => {
      const option = document.createElement("option");
      option.value = history.name;
      option.textContent = history.name;
      historyList.appendChild(option);
    });
  }
}

function saveContent() {
  const js = jsEditor.getValue();
  const css = cssEditor.getValue();
  const html = htmlEditor.getValue();
  localStorage.setItem("js", js);
  localStorage.setItem("css", css);
  localStorage.setItem("html", html);
}

function loadContent() {
  const js = localStorage.getItem("js");
  const css = localStorage.getItem("css");
  const html = localStorage.getItem("html");
  jsEditor.setValue(js);
  cssEditor.setValue(css);
  htmlEditor.setValue(html);
}
