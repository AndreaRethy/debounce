import { addNewItem } from './debounce-function.ts';

// Test 1 - console.log only 1x if executed 2x rapidly
test('Adding new items to existing array', () => {
    let array: string[] = [];

    addNewItem(array, 'done');

    expect(array).toEqual(['done']);
});