import { addNewItem, debounce } from './debounce-function';
import { program } from 'commander';

// Define CLI commands and options
program
    .command('add')
    .description('Test debounce function')
    .action(() => {
        // Initialize array
        let array: string[] = [];

        // Define debounced function
        const debouncedAddItem = debounce(() => {
            addNewItem(array, 'done');
            console.log(array);
        });

        // Simulate rapid calls to debounce function
        debouncedAddItem();
        debouncedAddItem();
        debouncedAddItem();

    });

// Parse command line arguments
program.parse(process.argv);
