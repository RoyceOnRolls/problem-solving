// leetCode 14
var longestCommonPrefix = function (strs) {
  let arr = [];
  let maxLength = 0;
  strs.forEach((Element) => {
    if (Element.length > maxLength) {
      maxLength = Element.length;
    }
  });
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (j == strs.length - 1) {
        arr.push(strs[j][i]);
      } else of(strs[i] !== strs);
    }
  }
};

let x = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(x);
