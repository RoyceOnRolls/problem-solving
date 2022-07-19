//

// var addTwoNumbers = function (l1, l2) {
//   let num1 = l1.reverse().join("");
//   let num2 = l2.reverse().join("");
//   let sum = parseInt(num1) + parseInt(num2);
//   return sum.toString().split("").reverse();
// };

var addTwoNumbers = function (l1, l2) {
  let num1 = "";
  let num2 = "";
  let len1 = l1.length - 1;
  let len2 = l2.length - 1;
  for (let i = len1; i >= 0; i--) {
    num1 += `${l1[i]}`;
  }
  for (let j = len2; j >= 0; j--) {
    num2 += `${l2[j]}`;
  }
  let s = parseInt(num1) + parseInt(num2);
  s = String(s);
  let answer = [];
  for (let k = s.length - 1; k >= 0; k--) {
    answer.push(s[k]);
  }
  return answer;
};

let x = addTwoNumbers([2, 4, 3], [5, 6, 4]);

console.log(x);
