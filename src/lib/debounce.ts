export function debounce<T extends any[]>(func: (...args: T) => void, wait: number) {
    let timeout: any;
    return function(...args: T) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}
