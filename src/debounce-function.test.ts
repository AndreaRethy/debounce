import { addNewItem, debounce } from './debounce-function.ts';

// Test 1 - Push item 1x
test('Adding new items to existing array', () => {
    let array: string[] = [];

    addNewItem(array, 'done');

    expect(array).toEqual(['done']);
});

// Test 2 - Testing debounce
jest.useFakeTimers();

test('Calling debounce 3x rapidly, should execute inner function 1x', () => {
    let array: string[] = [];

    const runDebounce = debounce(() => addNewItem(array, 'done'));
    
    runDebounce();
    runDebounce();
    runDebounce();

    jest.advanceTimersByTime(300);

    expect(array).toEqual(['done']);
});