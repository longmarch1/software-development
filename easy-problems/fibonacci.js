let count = 0;
const array = [];
function f(n) {
    if (n < 0) {
        return 0;
    }
    if (n < array.length) {
        return array[n];
    }
    if (n === 0) {
        array.push(0);
        return 0;
    }
    if (n === 1) {
        array.push(1);
        return 1;
    }
    const result = f(n - 2) + f(n - 1);
    array.push(result);
    return result;
}
function printFibonacci(n) {
    for (let i = 0; i < n; i++) {
        console.log(f(i));
    }
}
function getFib(n) {
    count++;

    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [1];
    }
    if (n === 2) {
        return [...getFib(1), 1];
    }
    const previousResult = getFib(n - 1);
    const newNumber =
        previousResult[previousResult.length - 1] +
        previousResult[previousResult.length - 2];
    return [...previousResult, newNumber];
}

// printFibonacci(11);
// console.log(f(11));
// console.log(JSON.stringify(array));
console.log(getFib(11));
console.log("count:", count);
