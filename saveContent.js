import { cssEditor, htmlEditor, jsEditor } from "./main";

const saveBtn = document.querySelector("#save-btn");
const dialog = document.querySelector("#save-dialog");
const confirmBtn = document.querySelector("#confirm-btn");

saveBtn.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("close", () => {
  dialog.close();
});

confirmBtn.addEventListener("click", () => {
  const historyInput = document.querySelector("#history-name");
  const historyName = historyInput.value;

  let oldHistory = JSON.parse(localStorage.getItem("history"));

  if (oldHistory === null) {
    oldHistory = [];
  }

  const newOption = {
    js: jsEditor.getValue(),
    css: cssEditor.getValue(),
    html: htmlEditor.getValue(),
    name: historyName,
  };

  oldHistory.push(newOption);
  localStorage.setItem("history", JSON.stringify(oldHistory));
});
