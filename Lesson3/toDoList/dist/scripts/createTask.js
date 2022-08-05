"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onCreateTask = void 0;

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

var _renderer = require("./renderer.js");

var _storage = require("./storage.js");

var onCreateTask = function onCreateTask() {
  var taskTitleInputElem = document.querySelector(".task-input");
  var text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = "";
  var tasksList = (0, _storage.getItem)("tasksList") || [];
  var newTasksList = tasksList.concat({
    text: text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString()
  });
  (0, _storage.setItem)("tasksList", newTasksList);
  (0, _renderer.renderTasks)();
};

exports.onCreateTask = onCreateTask;