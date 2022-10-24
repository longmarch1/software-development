function loopSum(n) {
    let m = 0;
    for (let i = 1; i <= n; i++) {
        m += i;
    }
    return m;
}
function gaussSum(n) {
    return ((1 + n) * n) / 2;
}
function recursiveSum(n, interval) {
    if (n <= 1) {
        return n;
    }
    return n + recursiveSum(n - interval, interval);
}

function isOdd(n) {
    return n % 2 === 1;
}

function oddSum(n) {
    let m = 0;
    for (let i = 1; i <= n; i += 2) {
        m += i;
    }
    return m;
}

function evenSum(n) {
    let m = 0;
    for (let i = 0; i <= n; i += 2) {
        m += i;
    }
    return m;
}

function evenSum2(n) {
    if (isOdd(n)) {
        return recursiveSum(n - 1, 2);
    }
    return recursiveSum(n, 2);
}

function threeSum(n) {
    let m = 0;
    for (let i = 0; i <= n; i += 3) {
        m += i;
    }
    return m;
}

function anySum(n, interval) {
    let m = 0;
    for (let i = 0; i <= n; i += interval) {
        m += i;
    }
    return m;
}

// console.log(gaussSum(101));
// console.log(recursiveSum(101, 2));
// console.log(oddSum(101));
// console.log(evenSum(101));
// console.log(evenSum2(101));
console.log(threeSum(10));
console.log(anySum(10, 1));
