// leetCode 876
var middleNode = function (head) {
  let length = head.length;
  let middle = length % 2 == 0 ? length / 2 : (length - 1) / 2;
  //   return head.splice(middle);
  //   return head.slice(middle);
  let arr = [];
  for (let i = middle; i < length; i++) {
    arr.push(head[i]);
  }
  // return arr;
  return arr;
};

let x = middleNode([1, 2, 3, 4, 5, 6]);
console.log(x);
