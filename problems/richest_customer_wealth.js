// leetCode challenge 1672

var maximumWealth = function (accounts) {
  let amount = 0;
  accounts.forEach((account) => {
    let sum = account.reduce((total, current) => {
      return total + current;
    }, 0);
    if (sum > amount) {
      amount = sum;
    }
  });
  return amount;
};

let x = maximumWealth([
  [1, 2, 3],
  [3, 2, 1],
]);

console.log(x);
