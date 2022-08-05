import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.to-string.js";
import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
export var onCreateTask = function onCreateTask() {
  var taskTitleInputElem = document.querySelector(".task-input");
  var text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = "";
  var tasksList = getItem("tasksList") || [];
  var newTasksList = tasksList.concat({
    text: text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString()
  });
  setItem("tasksList", newTasksList);
  renderTasks();
};