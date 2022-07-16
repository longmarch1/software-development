// there are n brands of cereal each only have one box, and m cows
// each cows has 2 unique preference of cereal, as first choice and second choice
// if both choices are taken, cow will stay hungry.
// you can decide the order of cow
// question is what's the minimal number of hungry cows
// what the order cows should go to keep number of hungry cows minimal
// http://www.usaco.org/index.php?page=viewproblem2&cpid=1184

import { readFile } from "../utils/file_utils";

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
  // [3, 1],
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

let visitedCycle: Record<number, boolean> = {};
var ignoreEdge = -1;
const order: number[] = [];
const cowsTakenCereal: Record<number, boolean> = {};
const visisted: Record<number, boolean> = {};
var firstCereal = -1;

function findCycle(
  cerealMap: Record<number, Edge[]>,
  currentCerealId: number,
  previous = -1
): void {
  console.log("find cycle cereal id", currentCerealId);

  if (!cerealMap[currentCerealId]) return;
  visitedCycle[currentCerealId] = true;
  cerealMap[currentCerealId].forEach((edge, index) => {
    console.log("edge", edge);
    if (cowsTakenCereal[edge.cowId]) return;
    if (visitedCycle[edge.cerealChoice]) {
      if (firstCereal === -1 && edge.cerealChoice !== previous) {
        console.log("found circle, remove edge", edge, previous);

        if (edge.isFirstChoice) {
          firstCereal = edge.cerealChoice;
        } else {
          firstCereal = currentCerealId;
        }
        ignoreEdge = edge.cowId;
        order.push(edge.cowId);
        cowsTakenCereal[edge.cowId] = true;
      }
    } else {
      findCycle(cerealMap, edge.cerealChoice, currentCerealId);
    }
  });
}

function depthFirstSearch(
  cerealMap: Record<number, Edge[]>,
  currentCerealId: number,
  ignoreEdge: number
): void {
  if (!cerealMap[currentCerealId]) return;
  visisted[currentCerealId] = true;
  cerealMap[currentCerealId].forEach((edge) => {
    if (cowsTakenCereal[edge.cowId]) return;
    if (visisted[edge.cerealChoice]) return;
    if (edge.cowId === ignoreEdge) return;

    cowsTakenCereal[edge.cowId] = true;
    order.push(edge.cowId);
    depthFirstSearch(cerealMap, edge.cerealChoice, ignoreEdge);
  });
}

// Answer
// step 1: find loop,
// step 2: depth first search the tree
function getOrder(
  input: number[][],
  cerealCount: number,
  cowCount: number
): number[] {
  const cerealMap = new Array<Edge[]>(cerealCount);
  // build graph
  input.forEach((value: number[], cowId: number) => {
    const [c0, c1] = value;
    cerealMap[c0] = [
      ...(cerealMap[c0] || []),
      { cowId, cerealChoice: c1, isFirstChoice: false },
    ];
    cerealMap[c1] = [
      ...(cerealMap[c1] || []),
      { cowId, cerealChoice: c0, isFirstChoice: true },
    ];
  });
  console.log(JSON.stringify(cerealMap));
  for (let i = 0; i < cerealCount; i++) {
    const cerealId = i + 1;
    firstCereal = -1;
    ignoreEdge = -1;
    visitedCycle = {};
    if (!visisted[cerealId]) {
      console.log("=== cerealId ===", cerealId);
      // find loop

      findCycle(cerealMap, cerealId);
      console.log("order after findCycle", order);
      console.log("firstCereal", firstCereal);
      console.log("ignoreEdge", ignoreEdge);
      console.log("=== end of cerealId ===", cerealId);

      // dfs
      if (firstCereal !== -1) {
        depthFirstSearch(cerealMap, firstCereal, ignoreEdge);
      } else {
        depthFirstSearch(cerealMap, cerealId, ignoreEdge);
      }
      console.log("order after dfs", order);
    }
  }

  let hungryCount = 0;
  // fill missing cow
  for (let i = 0; i < cowCount; i++) {
    if (!cowsTakenCereal[i]) {
      order.push(i);
      hungryCount++;
    }
  }

  console.log("hungry count: ", hungryCount);
  console.log("Final order ", order);
  return order;
}
function verifyTestingCases(input: string, output: string): boolean {
  const inputData = readFile(input);
  const [cowCount, cerealCount] = inputData[0]
    .split(" ")
    .map((value) => parseInt(value));
  console.log("cow count", cowCount);
  let index = 0;
  const inputChoice: number[][] = [];
  let cowCounter = cowCount;
  while (cowCounter > 0) {
    cowCounter--;
    index++;
    const [a, b] = inputData[index].split(" ").map((value) => parseInt(value));
    inputChoice.push([a, b]);
  }
  // getOrder(inputChoice, cerealCount);
  const outputData = readFile(output);
  const count = parseInt(outputData[0]);
  // return true;
  return (
    getHungryCount(
      inputChoice,
      getOrder(inputChoice, cerealCount, cowCount)
    ) === count
  );
}

function getHungryCount(selection: number[][], sequence: number[]): number {
  const takenMap: Record<number, boolean> = {};
  let hungryCount = 0;
  sequence.forEach((value) => {
    const [v0, v1] = selection[value];
    if (!takenMap[v0]) {
      takenMap[v0] = true;
      return;
    } else if (!takenMap[v1]) {
      takenMap[v1] = true;
      return;
    }
    hungryCount++;
  });
  //   console.log("order", sequence);
  console.log("hungryCount", hungryCount);
  return hungryCount;
}

function main() {
  // const order = getOrder(choices, n, choices.length);
  // console.log("hungry count", getHungryCount(choices, order));
  let pass = true;
  const caseCount = 2;
  for (let i = 0; i < caseCount; i++) {
    console.log(`=== case ${i} ===`);
    pass =
      pass &&
      verifyTestingCases(`test_data/${i + 1}.in`, `test_data/${i + 1}.out`);
    console.log("pass", pass);
  }
  console.log(`=== final total ${caseCount} ===`);
  console.log("fianl pass", pass);
}

main();
