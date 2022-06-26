import { cssEditor, htmlEditor, jsEditor } from "./main";

const historyDropdown = document.getElementById("history-dropdown");

historyDropdown.addEventListener("change", (event) => {
  const selectedHistory = event.target.value;
  loadSelectedHistory(selectedHistory);
});

export function loadSelectedHistory(selectedHistory) {
  const history = JSON.parse(localStorage.getItem("history"));
  const selectedHistoryObject = history.find(
    (history) => history.name === selectedHistory
  );
  jsEditor.setValue(selectedHistoryObject.js);
  cssEditor.setValue(selectedHistoryObject.css);
  htmlEditor.setValue(selectedHistoryObject.html);
}
