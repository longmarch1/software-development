const B1 = [
    ["X", ".", ".", "X"],
    [".", ".", ".", "X"],
    [".", ".", ".", "X"],
    [".", ".", ".", "."],
];

function expandBoard(board: string[][]): number[][] {
    const boardWidth = board[0].length;
    const supportBoard: number[][] = [new Array(boardWidth + 1).fill(0)];
    board.forEach((row) => {
        const newRow: number[] = [0];
        row.forEach((cell) => {
            newRow.push(cell === "X" ? 1 : 0);
        });
        supportBoard.push(newRow);
    });
    console.log(supportBoard);
    return supportBoard;
}

function prepareBoard(board: number[][]): number[][] {
    const supportBoard: number[][] = [];
    board.forEach((row, rowIndex) => {
        const currentRow: number[] = [];
        row.forEach((cell, colIndex) => {
            if (rowIndex === 0 || colIndex === 0) {
                currentRow.push(cell);
            } else {
                const previousRow = supportBoard[rowIndex - 1];
                currentRow.push(
                    cell +
                        previousRow[colIndex] +
                        currentRow[colIndex - 1] -
                        previousRow[colIndex - 1]
                );
            }
        });
        supportBoard.push(currentRow);
    });
    console.log(supportBoard);
    return supportBoard;
}

function buildSupportBoard(board: string[][]): number[][] {
    console.log(board);
    return prepareBoard(expandBoard(board));
}

function countShips(p1: number[], p2: number[], board: string[][]): number {
    const supportBoard = buildSupportBoard(board);

    const x1 = p1[0] + 1;
    const y1 = p1[1] + 1;
    const x2 = p2[0] + 1;
    const y2 = p2[1] + 1;

    return (
        supportBoard[x2][y2] -
        supportBoard[x1 - 1][y2] -
        supportBoard[x2][y1 - 1] +
        supportBoard[x1 - 1][y1 - 1]
    );
}

console.log(countShips([0, 1], [2, 2], B1));
console.log(countShips([0, 0], [2, 3], B1));
console.log(countShips([0, 0], [1, 1], B1));
