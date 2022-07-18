const B1 = [
    ["X", ".", ".", "X"],
    [".", "X", ".", "X"],
    ["X", ".", ".", "X"],
    [".", "X", ".", "."],
];

function checkShip(board) {
    const rowCount = board.length;
    const columnCount = board[0].length;
    const val = false;

    const supportBoard = Array.from({ length: rowCount }, () =>
        Array.from({ length: columnCount }, () => val)
    );

    console.log(supportBoard);

    let shipCount = 0;

    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < columnCount; col++) {
            // check visited or not
            if (supportBoard[row][col] === true) {
                continue;
            }

            // mark support board
            supportBoard[row][col] = true;

            // self check
            if (board[row][col] !== "X") {
                continue;
            }
            shipCount++;

            // right side check
            for (let next = 1; next < columnCount - col; next++) {
                const newCol = col + next;
                const right = board[row][newCol];
                supportBoard[row][newCol] = true;
                if (right !== "X") {
                    break;
                }
            }

            // bottom side check
            for (let next = 1; next < rowCount - row; next++) {
                const newRow = row + next;
                const bottom = board[newRow][col];
                supportBoard[newRow][col] = true;
                if (bottom !== "X") {
                    break;
                }
            }
        }
    }
    return shipCount;
}

console.log(checkShip(B1));
