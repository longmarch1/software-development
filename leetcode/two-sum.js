function twoSum(nums, target) {
    const numsCopy = [...nums];
    numsCopy.sort((a, b) => a - b);
    let num1;
    let num2;
    for (let i = 0, j = numsCopy.length - 1; i < j; ) {
        const sum = numsCopy[i] + numsCopy[j];
        if (sum > target) {
            j--;
        } else if (sum < target) {
            i++;
        } else {
            num1 = numsCopy[i];
            num2 = numsCopy[j];
            break;
        }
    }
    return [nums.indexOf(num1), nums.lastIndexOf(num2)];
}
console.log(twoSum([5, 40, 9, 3, -1, 7], 10000));
