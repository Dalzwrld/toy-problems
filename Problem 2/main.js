// 8/4/2026

// 1. GIVEN AN ARRAY OF INTEGERS, FIND THE LARGEST ELEMENT.

const numbers = [3, 7, 2, 9, 5];

const max = Math.max(...numbers);

const largestNumber = numbers.filter(num => num === max);

console.log(largestNumber[0]);