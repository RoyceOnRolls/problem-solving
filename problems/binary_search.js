// leetCode 704
var search = function (nums, target) {
  let answer = -1;
  let first = 0;
  let last = nums.length - 1;
  let mid;
  while (first <= last) {
    mid = Math.floor((last + first) / 2);
    if (nums[mid] < target) {
      first = mid + 1;
    } else if (nums[mid] > target) {
      last = mid - 1;
    } else if (nums[mid] == target) {
      return mid;
    }
  }
  return answer;
};

let x = search([-1, 0, 3, 5, 9, 12], -1);
console.log(x);
