"use strict";

var _renderer = require("./renderer.js");

var _todoList = require("./todoList.js");

document.addEventListener("DOMContentLoaded", function () {
  (0, _renderer.renderTasks)();
  (0, _todoList.initTodoListHandlers)();
});

var onStorageChange = function onStorageChange(e) {
  if (e.key === "tasksList") {
    (0, _renderer.renderTasks)();
  }
};

window.addEventListener("storage", onStorageChange);