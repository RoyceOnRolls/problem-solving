// function check(string) {
//   let re = /^([aeiou]).*\1$/;
//   return re.test(string);
// }

function check(string) {
  let re = /^[Mr|Mrs|Dr|Er][a-zA-z]+/g;
  return re.test(string);
}

let x = check("Mws.Y");
console.log(x);
