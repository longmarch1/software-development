// http://www.usaco.org/index.php?page=viewproblem2&cpid=1182

import { readFile } from "../utils/file_utils";
import { isOdd } from "../utils/number_utils";
import { arrayEqual } from "../utils/object_utils";

const InputCase = [
    [31, 13],
    [12, 8],
    [25, 6],
    [10, 24],
    [1, 1],
    [997, 120],
];

function getOperationCount(a: number, b: number): number {
    let count = 0;
    let s = a;
    let t = b;
    while (s !== t) {
        if (t > s) {
            if (isOdd(t)) {
                t = t - 1;
            } else if (t / s === 2) {
                t = t / 2;
            } else if (t - s <= 3) {
                t = t - 1;
            } else {
                t = t / 2;
            }
        } else {
            if (isOdd(s)) {
                s = s + 1;
            } else {
                s = s / 2;
            }
        }
        // console.log(s, t);
        count++;
    }
    return count;
}

// InputCase.forEach((value) => {
//     console.log(getOperationCount(value[0], value[1]));
// });

function verifyTestingCases(input: string, output: string): boolean {
    const inputData = readFile(input);
    let dataCount = parseInt(inputData[0]);
    let index = 0;
    const result: number[] = [];
    while (dataCount > 0) {
        dataCount--;
        index++;
        const [a, b] = inputData[index]
            .split(" ")
            .map((value) => parseInt(value, 10));
        console.log(a, b);
        result.push(getOperationCount(a, b));
    }
    const outputData = readFile(output).map((value) => parseInt(value, 10));
    console.log(outputData.length);
    console.log(result, outputData);
    return arrayEqual(result, outputData);
}

let pass = true;
for (let i = 0; i < 10; i++) {
    pass =
        pass &&
        verifyTestingCases(`test_data/${i + 1}.in`, `test_data/${i + 1}.out`);
}

console.log("pass", pass);
