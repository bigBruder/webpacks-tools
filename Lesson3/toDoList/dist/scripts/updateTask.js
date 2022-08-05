"use strict";

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onToggleTask = void 0;

require("core-js/modules/es.array.map.js");

var _renderer = require("./renderer.js");

var _storage = require("./storage.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var onToggleTask = function onToggleTask(e) {
  var isCheckBox = e.target.classList.contains("list__item-checkbox");

  if (!isCheckBox) {
    return;
  }

  var taskslist = (0, _storage.getItem)("tasksList");
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
  (0, _storage.setItem)("tasksList", newTasksList);
  (0, _renderer.renderTasks)();
};

exports.onToggleTask = onToggleTask;