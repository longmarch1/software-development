function twoSum1(nums, target) {
    const result = nums;
    console.log(result);
    let num1;
    let num2;
    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        const cp = target - element;
        let found = false;
        for (let k = i + 1; k < result.length; k++) {
            const element2 = result[k];
            if (element2 === cp) {
                found = true;
                break;
            }
        }
        if (found) {
            num1 = element;
            num2 = cp;
            break;
        }
    }
    if (num1 !== undefined && num2 !== undefined) {
        console.log(num1, num2);
        let index1;
        let index2;
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            if (element === num1 && index1 === undefined) {
                index1 = i;
            } else if (element === num2) {
                index2 = i;
            }
        }
        return [index1, index2];
    }
    return undefined;
}

function twoSum2(nums, target) {
    const sortedArray = nums.slice().sort((a, b) => a - b);
    // console.log(sortedArray);
    let headIndex = 0;
    let tailIndex = sortedArray.length - 1;
    let num1, num2;
    while (headIndex < tailIndex) {
        const head = sortedArray[headIndex];
        const tail = sortedArray[tailIndex];
        const sum = head + tail;
        if (sum === target) {
            num1 = head;
            num2 = tail;
            break;
        }
        if (sum < target) headIndex++;
        else tailIndex--;
    }
    if (num1 !== undefined && num2 !== undefined) {
        console.log(num1, num2);
        let index1;
        let index2;
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            if (element === num1 && index1 === undefined) {
                index1 = i;
            } else if (element === num2) {
                index2 = i;
            }
        }
        return [index1, index2].sort();
    }
}

function twoSum3(nums, target) {
    let index1, index2;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            index1 = map.get(diff);
            index2 = i;
            break;
        }
        map.set(nums[i], i);
    }
    return [index1, index2];
}

const nums = [5, 40, -1, 15, -5];
const target = 0;

console.log(twoSum3(nums, target));
