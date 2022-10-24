// There is a 1 million by 1 million grid on an XY-plane, and the coordinates of each grid square are (x, y).

// We start at the source = [sx, sy] square and want to reach the target = [tx, ty] square. There is also an array of blocked squares, where each blocked[i] = [xi, yi] represents a blocked square with coordinates (xi, yi).

// Each move, we can walk one square north, east, south, or west if the square is not in the array of blocked squares. We are also not allowed to walk outside of the grid.

// Return true if and only if it is possible to reach the target square from the source square through a sequence of valid moves.

// Example 1:

// Input: blocked = [[0,1],[1,0]], source = [0,0], target = [0,2]
// Output: false
// Explanation: The target square is inaccessible starting from the source square because we cannot move.
// We cannot move north or east because those squares are blocked.
// We cannot move south or west because we cannot go outside of the grid.
// Example 2:

// Input: blocked = [], source = [0,0], target = [999999,999999]
// Output: true
// Explanation: Because there are no blocked cells, it is possible to reach the target square.

// util function
function isTheSamePosition(point1: number[], point2: number[]) {
    return point1[0] === point2[0] && point1[1] === point2[1];
}

function isPointOutOfBound(point: number[], max: number) {
    return point[0] < 0 || point[0] >= max || point[1] < 0 || point[1] >= max;
}

function isPointOnBoard(point: number[], board: number[][]) {
    return (
        board.findIndex((value) => {
            return isTheSamePosition(value, point);
        }) !== -1
    );
}

/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
function isEscapePossible(
    blocked: number[][],
    source: number[],
    target: number[]
): boolean {
    const visitedBoard = [[]];
    // Set max for 2 points
    const max = blocked.length ** 2 / 2;
    console.log(max);
    return findPath(source, target, blocked, visitedBoard, max);
}

function findPath(
    current: number[],
    target: number[],
    blockBoard: number[][],
    visitedBoard: number[][],
    max: number
): boolean {
    if (
        isPointOutOfBound(current, max) ||
        isPointOnBoard(current, blockBoard) ||
        isPointOnBoard(current, visitedBoard)
    ) {
        return false;
    }

    // console.log(current);
    visitedBoard.push(current);

    if (isTheSamePosition(current, target)) return true;

    const up = [current[0], current[1] - 1];
    const down = [current[0], current[1] + 1];
    const left = [current[0] - 1, current[1]];
    const right = [current[0] + 1, current[1]];

    return (
        findPath(right, target, blockBoard, visitedBoard, max) ||
        findPath(down, target, blockBoard, visitedBoard, max) ||
        findPath(left, target, blockBoard, visitedBoard, max) ||
        findPath(up, target, blockBoard, visitedBoard, max)
    );
}

const blocked = [
        [1, 1],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [0, 5],
        [0, 6],
        [0, 7],
        [0, 8],
        [0, 9],
    ],
    source = [0, 0],
    target = [49, 49];
console.log(isEscapePossible(blocked, source, target));
