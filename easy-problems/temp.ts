function getPascalTriangle(n) {
    if (n === 1) return [[1]];
    const result = getPascalTriangle(n - 1);
    result.push(joinArray(result[n - 2]));
    return result;
}
