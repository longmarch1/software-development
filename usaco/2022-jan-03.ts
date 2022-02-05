// there are n brands of cereal each only have one box, and m cows
// each cows has 2 unique preference of cereal, as first choice and second choice
// if both choices are taken, cow will stay hungry.
// you can decide the order of cow
// question is what's the minimal number of hungry cows
// what the order cows should go to keep number of hungry cows minimal

const n = 10;
const choices = [
    [1, 2],
    [2, 3],
    [3, 1],
    [5, 4],
    [3, 6],
    [9, 1],
];

// Answer
// rule 1: leave unique choice last,
// rule 2: if not duplicate in first choice, use 2nd choice order to solve
interface Collision {
    indexArray: number[];
    valueMap: Record<number, number>;
}

function getCollisions(input: number[]): Collision {
    const indexArray: number[] = [];
    const valueMap = {};
    input.forEach((value: number, index: number) => {
        if (valueMap[value]) {
            valueMap[value]++;
            indexArray.push(index);
        } else {
            valueMap[value] = 1;
        }
    });
    return { indexArray: indexArray, valueMap: valueMap };
}
function main() {
    const firstChoice = choices.map((value: number[]) => value[0]);
    const firstCollision = getCollisions(firstChoice);
    const secondChoice = choices.map((value: number[]) => value[1]);
    const secondCollision: Collision = { indexArray: [], valueMap: {} };
    secondChoice.forEach((value: number, index: number) => {
        if (firstCollision.indexArray.indexOf(index) !== -1) {
            secondCollision.in;
        }
    });
}
