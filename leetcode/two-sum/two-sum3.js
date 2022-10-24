function twoSum1(nums, target) {
    const result = nums;
    console.log(result);
    const map = new Map();
    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        const cp = target - element;
        // check if cp is inside map
        if (map.has(cp)) {
            // if exist, return
            const index1 = map.get(cp);
            const index2 = i;
            return [index1, index2];
        } else {
            // if not, put in map
            map.set(element, i);
        }
    }
    return undefined;
}

const nums = [5, 40, -1, 15, -5];
const target = 0;

console.log(twoSum1(nums, target));
