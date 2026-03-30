// 30/03/2026

// 1. A function that takes a positive integer and returns the immediate smaller positive integer containing the same digits.

function nextSmaller(num) {
    let numStr = num.toString().split("");

    for (let i = numStr.length - 2; i >= 0; i--) {
        if (numStr[i] > numStr[i + 1]) {
            let j = numStr.length - 1;
            while (numStr[j] >= numStr[i]) {
                j--;
            }
            
            [numStr[i], numStr[j]] = [numStr[j], numStr[i]];

            let leftNum = numStr.slice(0, i + 1);
            let rightNum = numStr.slice(i + 1).reverse();

            return parseInt(leftNum.concat(rightNum).join(""));
        } else {
            return -1; // Returns this if no smaller number can be formed
        }
    }
}

console.log(nextSmaller(123));
console.log(nextSmaller(321));
console.log(nextSmaller(21));
console.log(nextSmaller(531));
console.log(nextSmaller(2071));


// 2. A function that returns the largest of three given variables.

function largestOfThree(x, y, z) {
    if (x > y && x > z) {
        return `${x} is the largest`;
    } else if (y > x && y > z) {
        return `${y} is the largest`;
    } else {
        return `${z} is the largest`;
    }
}

console.log(largestOfThree(20, 30, 40));
console.log(largestOfThree(20, 50, 40));
console.log(largestOfThree(100, 30, 40));
