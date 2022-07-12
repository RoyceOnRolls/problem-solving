// Day 8 of HackerRank 30 days of code

function processData(input) {
  //Enter your code here
  let answer = [];
  let data = input.split("\n");
  let phoneBook = {};
  for (let i = 1; i <= data[0]; i++) {
    let info = data[i].split(" ");
    phoneBook[info[0]] = info[1];
  }
  for (let j = parseInt(data[0]) + 1; j < data.length; j++) {
    if (phoneBook.hasOwnProperty(data[j])) {
      answer.push(`${data[j]}=${phoneBook[data[j]]}`);
    } else {
      answer.push("Not found");
    }
  }
  return answer.join("\n");
}

let string =
  "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry";

let x = processData(string);

console.log(x);
