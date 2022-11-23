function smallestTwo(nums) {
    return nums.sort((a, b) => a - b).slice(0, 2).join(' ');
}

console.log(smallestTwo([30, 15, 50, 5, 0, 1, 4, 7, 3,]));