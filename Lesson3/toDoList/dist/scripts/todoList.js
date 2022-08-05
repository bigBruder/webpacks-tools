"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initTodoListHandlers = void 0;

var _updateTask = require("./updateTask.js");

var _createTask = require("./createTask.js");

var initTodoListHandlers = function initTodoListHandlers() {
  var createBtn = document.querySelector(".create-task-btn");
  createBtn.addEventListener("click", _createTask.onCreateTask);
  var todoListElem = document.querySelector(".list");
  todoListElem.addEventListener("click", _updateTask.onToggleTask);
};

exports.initTodoListHandlers = initTodoListHandlers;