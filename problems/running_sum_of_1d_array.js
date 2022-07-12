// 1480. Running Sum of 1d Array - leetCode

// First solution - Took 69ms to run

// var runningSum = function (nums) {
//   let length = nums.length;
//   let answer = [];
//   for (let i = 0; i < length; i++) {
//     let sum = 0;
//     for (let j = 0; j <= i; j++) {
//       sum += nums[j];
//     }
//     answer.push(sum);
//   }
//   return answer;
// };

// Optimized solution
// I don't why, but this code although looks optimized, it actually slower than the code above. - It took 113ms to run

// var runningSum = function (nums) {
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] += nums[i - 1];
//   }
//   return nums;
// };

//  3rd solution

var runningSum = function (nums) {
  let answer = [];
  answer.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    answer.push(answer[i - 1] + nums[i]);
  }
  return answer;
};

let x = runningSum([1, 2, 3, 4]);
console.log(x);
