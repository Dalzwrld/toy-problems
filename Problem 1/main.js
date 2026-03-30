// 30/03/2026

// 1. A function that takes a positive integer and returns the next smaller positive integer containing the same digits.

function nextSmaller(num) {
    let numStr = num.toString();

    for (let i = 0; i < numStr.length; i++) {
        const element = numStr[i];
        
    }
}


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