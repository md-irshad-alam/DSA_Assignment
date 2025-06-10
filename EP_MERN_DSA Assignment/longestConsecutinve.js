const numSet = new Set(nums);
let longest = 0;

for (let num of numSet) {
  // Check if it's the start of a sequence
  if (!numSet.has(num - 1)) {
    let currentNum = num;
    let currentStreak = 1;

    while (numSet.has(currentNum + 1)) {
      currentNum += 1;
      currentStreak += 1;
    }

    longest = Math.max(longest, currentStreak);
  }
}

return longest;
