let timer: NodeJS.Timeout;

function debounce(func: (...args: any[]) => void) {
    let timeout: number = 300
    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func(...args);}, timeout);
    };
}

function addNewItem(array: string[], item: string) {
    array.push(item);
}

export { addNewItem, debounce };