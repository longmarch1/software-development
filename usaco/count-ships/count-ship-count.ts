/**
 * @param {character[][]} board
 * @return {number}
 */
const countBattleships = function (board) {
    const height = board.length;
    const width = board[0].length;
    const start = [0, 0];
    const end = [height - 1, width - 1];

    return countShipV2(start, end, board);
};

function checkShip(p1, p2, board) {
    for (let x = p1[0]; x <= p2[0]; x++) {
        for (let y = p1[1]; y <= p2[1]; y++) {
            if (board[x][y] === "X") {
                return true;
            }
        }
    }
    return false;
}

function countShipV1(p1, p2, board) {
    let count = 0;
    for (let x = p1[0]; x <= p2[0]; x++) {
        for (let y = p1[1]; y <= p2[1]; y++) {
            if (board[x][y] === "X") {
                count++;
            }
        }
    }
    return count;
}

function countShipV2(p1, p2, board) {
    if (!checkShip(p1, p2, board)) {
        return 0;
    }
    if (p1[0] === p2[0]) {
        return 1;
    }

    const x1 = p1[0];
    const y1 = p1[1];
    const x2 = p2[0];
    const y2 = p2[1];
    const h1p1 = [x1, y1];
    const h1p2 = [Math.floor((x1 + x2) / 2), y2];
    const h2p1 = [Math.floor((x1 + x2) / 2) + 1, y1];
    const h2p2 = [x2, y2];

    const h1Count = countShipV2(h1p1, h1p2, board);
    const h2Count = countShipV2(h2p1, h2p2, board);
    console.log(h1p1, h1p2);
    console.log("h1Count", h1Count);
    console.log(h2p1, h2p2);
    console.log("h2Count", h2Count);
    return h1Count + h2Count;
}
