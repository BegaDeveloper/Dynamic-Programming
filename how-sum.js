const howSum = (target, nums, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of nums) {
    const remainder = target - num;
    const remainderResult = howSum(remainder, nums, memo);
    if (remainderResult !== null) {
      memo[target] = [...remainderResult, num];
      return memo[target];
    }
  }
  memo[target] = null;
  return null;
};

console.log(howSum(7, [2, 3])); /// [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4,3]
