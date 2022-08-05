import { renderTasks } from "./renderer.js";
import { initTodoListHandlers } from "./todoList.js";
document.addEventListener("DOMContentLoaded", function () {
  renderTasks();
  initTodoListHandlers();
});

var onStorageChange = function onStorageChange(e) {
  if (e.key === "tasksList") {
    renderTasks();
  }
};

window.addEventListener("storage", onStorageChange);