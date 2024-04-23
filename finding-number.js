function findMissingNumber(num) {
    const n = num.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return totalSum - sum;
}

// Test case
console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20])); // 17
