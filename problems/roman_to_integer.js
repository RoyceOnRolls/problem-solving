// leetCode 13

var romanToInt = function (s) {
  let reg = /IV|IX|XL|XC|CD|CM|I|V|X|L|C|D|M/g;
  let arr = s.split(reg);
  return arr;
};

let x = romanToInt("LVIII");
console.log(x);
