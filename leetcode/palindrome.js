// convert to array
// check if negative
// if yes, times * -1, put in array

// if number < 10, put in array, return
// get last digit with remainder, put in array
// get next number by dividing by 10 and floor

// compare index from both ends - if n >= m, return true

// compare from both ends

// if same, compare next number and second last number

// if different, return false

function convertNumberToArray(number) {
    const array = [];
    let cNumber = number;
    if (cNumber < 0) {
        cNumber *= -1;
        array.unshift("-");
    }
    while (cNumber >= 10) {
        const remainder = cNumber % 10;
        array.unshift(remainder);
        cNumber = Math.floor(cNumber / 10);
    }
    array.unshift(cNumber);
    return array;
}

function isArrayPalindrome(array) {
    for (let n = 0, m = array.length - 1; n < m; n++, m--) {
        if (array[n] !== array[m]) {
            return false;
        }
    }
    return true;
}

function isNumberPalindrome(number) {
    return isArrayPalindrome(convertNumberToArray(number));
}

// console.log(isNumberPalindrome(4329389859));
// console.log(isNumberPalindrome(-343));
// console.log(isNumberPalindrome(123464321));
// console.log(isNumberPalindrome(10));

console.log(isArrayPalindrome([1, 0]));
// console.log(isPalindrome([0, 8, 3, 0]));
// console.log(isPalindrome([1, 4, 8, 3, 6, 3, 8, 4, 1]));
// console.log(isPalindrome([2, 2]));
