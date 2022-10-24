function betterFactorial(n) {
    let m = 1;
    for (let i = 1; i <= n; i++) {
        m *= i;
    }
    return m;
}
console.log(betterFactorial(10));

function otherFactorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * otherFactorial(n - 1);
}
console.log(otherFactorial(10));
