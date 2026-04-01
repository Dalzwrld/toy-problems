// 30/03/2026

// 1. A FUNCTION THAT TAKES A POSITIVE INTEGER AND RETURNS THE IMMEDIATE SMALLER POSITIVE INTEGER CONTAINING THE SAME DIGITS.

function nextSmaller(num) {
    // Convert the number to an array of its digits
    let numStr = num.toString().split("");

    // Define the first digit to swap
    let i = numStr.length - 2;
    while (i >= 0 && numStr[i] <= numStr[i + 1]) { 
        i--;
    }
    if (i < 0) { // If no such digit is found, return -1
        return -1;
    }

    // Define the second digit to swap with the first one
    let j = numStr.length - 1;
    while (numStr[j] >= numStr[i]) {
        j--;
    }
    
    // Swap the two digits
    [numStr[i], numStr[j]] = [numStr[j], numStr[i]];

    // Reverse the digits to the right of the first digit
    let leftNum = numStr.slice(0, i + 1);
    let rightNum = numStr.slice(i + 1).reverse();

    // Combine the left and right parts to form the final result, and join the values back into a string
    let result = leftNum.concat(rightNum).join("");

    if (result[0] === "0") { // Check if the result starts with a zero, which is not valid for a positive integer
        return -1;
    }

    // Convert the result back to an integer and return it
    return parseInt(result);
}

console.log(nextSmaller(123));
console.log(nextSmaller(321));
console.log(nextSmaller(21));
console.log(nextSmaller(531));
console.log(nextSmaller(2071));


// 2. A FUNCTION THAT RETURNS THE LARGEST OF THREE GIVEN VARIABLES.

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
