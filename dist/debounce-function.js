"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = exports.addNewItem = void 0;
var timer;
function debounce(func) {
    var timeout = 300;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout(function () { func.apply(void 0, args); }, timeout);
    };
}
exports.debounce = debounce;
function addNewItem(array, item) {
    array.push(item);
}
exports.addNewItem = addNewItem;
