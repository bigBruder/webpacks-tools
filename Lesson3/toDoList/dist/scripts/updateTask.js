function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import "core-js/modules/es.array.map.js";
import "core-js/modules/es.object.keys.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.object.get-own-property-descriptor.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.object.get-own-property-descriptors.js";
import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
export var onToggleTask = function onToggleTask(e) {
  var isCheckBox = e.target.classList.contains("list__item-checkbox");

  if (!isCheckBox) {
    return;
  }

  var taskslist = getItem("tasksList");
  var newTasksList = taskslist.map(function (task) {
    if (task.id === e.target.dataset.id) {
      var done = e.target.checked;
      return _objectSpread(_objectSpread({}, task), {}, {
        done: done,
        finishDate: done ? new Date().toISOString() : null
      });
    }

    return task;
  });
  setItem("tasksList", newTasksList);
  renderTasks();
};