let joinArrayCount = 0;

function joinArray(array) {
    joinArrayCount++;

    const result = [1];
    for (let i = 0; i < array.length - 1; i++) {
        const sum = array[i] + array[i + 1];
        result.push(sum);
    }
    result.push(1);
    return result;
}

function p(n) {
    if (n === 1) {
        return [1];
    }
    return joinArray(p(n - 1));
}

function printPascalTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log(JSON.stringify(p(i)));
    }
}

function getPascalTriangle(n) {
    if (n === 1) {
        return [[1]];
    }
    const previousTriangle = getPascalTriangle(n - 1);
    const lastRow = previousTriangle[previousTriangle.length - 1];
    const newRow = joinArray(lastRow);
    // const result = previousTriangle.concat([newRow]);
    const result = [...previousTriangle, newRow];
    return result;
}

printPascalTriangle(15);
// console.log(JSON.stringify(getPascalTriangle(15), null, ""));
console.log(joinArrayCount);
// console.log(joinArray([1, 2, 1]));
// console.log(joinArray([1, 4, 6, 4, 1]));
// console.log(joinArray([1, 4, 6, 4, 1]));
