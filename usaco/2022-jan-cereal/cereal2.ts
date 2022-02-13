// there are n brands of cereal each only have one box, and m cows
// each cows has 2 unique preference of cereal, as first choice and second choice
// if both choices are taken, cow will stay hungry.
// you can decide the order of cow
// question is what's the minimal number of hungry cows
// what the order cows should go to keep number of hungry cows minimal
// http://www.usaco.org/index.php?page=viewproblem2&cpid=1184

import { readFile } from "../utils/file_utils";
import { arrayEqual } from "../utils/object_utils";

const n = 10;
const choices = [
    // [1, 2],
    // [2, 3],
    // [3, 1],
    // [5, 4],
    // [3, 6],
    // [9, 1],
    [2, 1],
    [3, 4],
    [2, 3],
    [6, 5],
    [7, 8],
    [6, 7],
    [7, 5],
    [5, 8],
];

interface Edge {
    cowId: number;
    cerealChoice: number;
    isFirstChoice: boolean;
}

const visitedCycle = {};
let ignoreEdge = -1;
const order = [];

function findCycle(
    cerealMap: Record<number, Edge[]>,
    current: number,
    previous = -1,
    firstCereal = -1
): void {
    visitedCycle[current] = true;
    const edges = cerealMap[current];
    edges.forEach((edge) => {
        if (visitedCycle[edge.cerealChoice]) {
            if (firstCereal === -1 && edge.cerealChoice !== previous) {
                if (edge.isFirstChoice) {
                    firstCereal = edge.cerealChoice;
                } else {
                    firstCereal = current;
                }
            }
            ignoreEdge = edge.cowId;
            order;
        }
    });
}

// Answer
// step 1: find loop,
// step 2: depth first search the tree
function getOrder(input: number[][], cerealCount: number): number[] {
    const cerealMap = new Array<Edge[]>(cerealCount);
    // build graph
    input.forEach((value: number[], cowId: number) => {
        const [c0, c1] = value;
        cerealMap[c0].push({ cowId, cerealChoice: c0, isFirstChoice: true });
        cerealMap[c1].push({ cowId, cerealChoice: c1, isFirstChoice: false });
    });
    // find loop

    return [];
}
function verifyTestingCases(input: string, output: string): boolean {
    const inputData = readFile(input);
    let [cowCount, cerealCount] = inputData[0]
        .split(" ")
        .map((value) => parseInt(value));
    console.log("cow count", cowCount);
    let index = 0;
    const inputChoice: number[][] = [];
    while (cowCount > 0) {
        cowCount--;
        index++;
        const [a, b] = inputData[index]
            .split(" ")
            .map((value) => parseInt(value));
        inputChoice.push([a, b]);
    }
    getOrder(inputChoice, cerealCount);
    const outputData = readFile(output);
    const count = parseInt(outputData[0]);
    return true;
    //return getHungryCount(inputChoice, getOrder(inputChoice)) === count;
}

function main() {
    // const order = getOrder(choices);
    // console.log("hungry count", getHungryCount(choices, order));
    let pass = true;
    const caseCount = 4;
    for (let i = 0; i < caseCount; i++) {
        console.log(`=== case ${i} ===`);
        pass =
            pass &&
            verifyTestingCases(
                `test_data/${i + 1}.in`,
                `test_data/${i + 1}.out`
            );
        console.log("pass", pass);
    }
    console.log(`=== final total ${caseCount} ===`);
    console.log("fianl pass", pass);
}

main();
