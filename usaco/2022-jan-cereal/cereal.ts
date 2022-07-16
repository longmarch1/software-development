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

// Answer
// rule 1: leave unique choice last,
// rule 2: if not duplicate in first choice, use 2nd choice order to solve

function getCerealMap(input: number[][]): Record<number, number[]> {
  const valueMap: Record<number, number[]> = {};
  input.forEach((value: number[], index: number) => {
    value.forEach((v) => {
      if (valueMap[v]) {
        valueMap[v].push(index);
      } else {
        valueMap[v] = [index];
      }
    });
  });
  return valueMap;
}

function getCerealSecondChoiceMap(input: number[][]): Record<number, number[]> {
  const valueMap: Record<number, any> = {};
  input.forEach((value: number[], index: number) => {
    const [v0, v1] = value;
    if (valueMap[v1]) {
      valueMap[v1].push(index);
    } else {
      valueMap[v1] = [index];
    }
  });
  return valueMap;
}

function trimMap(
  inputMap: Record<number, number[]>,
  secondMap: Record<string, number[]>,
  cowCount: number
): number[] {
  // console.log(inputMap);
  let order: number[] = [];
  const orderMap: Record<number, boolean> = {};
  let beforeMap: Record<string, number[]> = { ...inputMap };

  while (order.length < cowCount) {
    const newMap: Record<string, any> = {};
    let reduced = false;
    let randomIndex = -1;
    Object.keys(beforeMap).forEach((key) => {
      if (beforeMap[key].length === 1) {
        const index = beforeMap[key][0];
        if (!orderMap[index]) {
          orderMap[index] = true;
          order.unshift(index);
        }
        reduced = true;
      } else {
        const newList = beforeMap[key].filter(
          (value: number) => !orderMap[value]
        );
        if (newList.length) {
          newMap[key] = newList;
          randomIndex = newList[0];
          const secondList =
            secondMap[key]?.filter((value: number) => !orderMap[value]) || [];
          if (arrayEqual(secondList, newList)) {
            if (!orderMap[randomIndex]) {
              orderMap[randomIndex] = true;
              order.unshift(randomIndex);
            }
            reduced = true;
          }
        }
      }
    });

    if (!reduced) {
      console.log("randomIndex selected", randomIndex);
      if (!orderMap[randomIndex]) {
        orderMap[randomIndex] = true;
        order.unshift(randomIndex);
      }
    }
    beforeMap = { ...newMap };
  }

  // console.log("order", order);
  return order;
}

function getHungryCount(selection: number[][], sequence: number[]): number {
  const takenMap: Record<number, any> = {};
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
  console.log("order", sequence);
  console.log("hungryCount", hungryCount);
  return hungryCount;
}

function getOrder(inputChoice: number[][]): number[] {
  const cerealMap = getCerealMap(inputChoice);
  const cerealSecondChoice = getCerealSecondChoiceMap(inputChoice);
  const order = trimMap(cerealMap, cerealSecondChoice, inputChoice.length);
  return order;
}

function verifyTestingCases(input: string, output: string): boolean {
  const inputData = readFile(input);
  let dataCount = parseInt(inputData[0].split(" ")[0]);
  console.log("cow count", dataCount);
  let index = 0;
  const inputChoice: number[][] = [];
  while (dataCount > 0) {
    dataCount--;
    index++;
    const [a, b] = inputData[index].split(" ").map((value) => parseInt(value));
    inputChoice.push([a, b]);
  }
  const outputData = readFile(output);
  const count = parseInt(outputData[0]);
  return getHungryCount(inputChoice, getOrder(inputChoice)) === count;
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
      verifyTestingCases(`test_data/${i + 1}.in`, `test_data/${i + 1}.out`);
    console.log("pass", pass);
  }
  console.log(`=== final total ${caseCount} ===`);
  console.log("fianl pass", pass);
}

main();
