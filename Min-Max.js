function findMinMax(num) {
    let min = num[0];
    let max = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] < min) {
            min = num[i];
        }
        if (num[i] > max) {
            max = num[i];
        }
    }
    return { min, max };
}

// Test cases
console.log(findMinMax([1, 2, 4, 10, 9]));      
console.log(findMinMax([5, 2, 1, 4]));       
console.log(findMinMax([150]));              

