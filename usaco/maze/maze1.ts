function isEscapePossible2(b: number[][], s: number[], t: number[]) {
    // Set max for 2 points
    const max = b.length ** 2 / 2;
    // 4 Types
    const dir = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    // Set as Hash Result
    const spc = b.reduce((a, c) => a.add(hash(c[0], c[1])), new Set());
    console.log(spc);

    // s and t as x, y
    const [xs, ys] = s;
    const [xt, yt] = t;
    return dfs(xs, ys, max, new Set(), t) && dfs(xt, yt, max, new Set(), s);

    // Get Hash
    function hash(x, y) {
        return 1123 * x + y;
    }

    // DFS Handler
    function dfs(x: number, y: number, max: number, v: any, t: number[]) {
        console.log(x, y, t);
        if (
            x < 0 ||
            x >= 1e6 ||
            y < 0 ||
            y >= 1e6 ||
            spc.has(hash(x, y)) ||
            v.has(hash(x, y))
        ) {
            return false;
        }
        if (--max <= 0 || (x === t[0] && y === t[1])) {
            return true;
        }
        // Add Hash into Set
        v.add(hash(x, y));

        // Recursion
        return dir.reduce(
            (a, c) => a || dfs(x + c[0], y + c[1], max, v, t),
            false
        );
    }
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
    target = [9, 9];
console.log(isEscapePossible2(blocked, source, target));
