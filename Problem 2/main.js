// 8/4/2026

// 1. GIVEN AN ARRAY OF INTEGERS, FIND THE LARGEST ELEMENT.

const numbers = [3, 7, 2, 9, 5];

const max = Math.max(...numbers);

const largestNumber = numbers.filter(num => num === max);

console.log(largestNumber[0]);


// 2. GIVEN AN ARRAY, CHECK WHETHER IT'S SORTED IN A NON-DECREASING MANNER

const array = [1, 2, 3, 4, 5];

function sortedArray(array) {
    for (let i = 0; i < array.length -1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    } return true;
}

console.log();