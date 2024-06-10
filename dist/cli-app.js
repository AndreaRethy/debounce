"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debounce_function_1 = require("./debounce-function");
var commander_1 = require("commander");
// Define CLI commands and options
commander_1.program
    .command('add <item>')
    .action(function (item) {
    // Initialize array
    var array = [];
    // Define debounced function
    var debouncedAddItem = (0, debounce_function_1.debounce)(function () {
        (0, debounce_function_1.addNewItem)(array, item);
        console.log(array);
    });
    // Simulate rapid calls to debounce function
    debouncedAddItem();
    debouncedAddItem();
    debouncedAddItem();
});
// Parse command line arguments
commander_1.program.parse(process.argv);
