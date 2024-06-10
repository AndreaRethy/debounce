let itemArray = [];

// Get elements from DOM
let list = document.getElementById('list-of-items');
let input = document.getElementById('text');
let button = document.getElementById('button');

const debouncedAddNewItem = debounce(addNewItem);

// Listeners
button.addEventListener('click', () => {
    itemToAdd = text.value;
    debouncedAddNewItem(itemArray, itemToAdd);
});

// Functions
let timer;
function debounce(func) {
    let timeout = 300
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func(...args); updateList();}, timeout);
    };
}

function addNewItem(array, item) {
    console.log(item);
    array.push(item);
}

function updateList() {
    list.innerHTML = "";
    itemArray.forEach(item => {
        list.innerHTML += `<li>${item}</li>`
    });
}