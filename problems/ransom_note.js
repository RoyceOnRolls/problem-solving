// LeetCode 383

var canConstruct = function (ransomNote, magazine) {
  let noteArr = ransomNote.split("");
  let magArr = magazine.split("");
  noteArr.forEach((letter) => {
    magArr.forEach((magLetter) => {
      if (letter == magLetter) {
        console.log("sayHi");
        delete noteArr.indexOf(letter);
        delete magArr.indexOf(letter);
      }
    });
  });
  console.log(noteArr);
  console.log(magArr);
};

let x = canConstruct("aa", "aab");

console.log(x);
