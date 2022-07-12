// 1480. Running Sum of 1d Array - leetCode

var runningSum = function (nums) {
  let length = nums.length;
  let answer = [];
  for (let i = 0; i < length; i++) {
    let sum = 0;
    for (let j = 0; j <= i; j++) {
      sum += nums[j];
    }
    answer.push(sum);
  }
  return answer;
};

let x = runningSum([1, 2, 3, 4]);
console.log(x);
