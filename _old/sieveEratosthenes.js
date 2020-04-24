let isSimpleNumber = function(number) {
  if (number < 0) number = -number;
  let divider = 2;
  while (divider < number) {
    if (number % divider === 0) {
      return false;
    }
    divider++;
  }
  return true;
};

let sieve = function(n) {
  let naturalNumbers = [];
  for (let i = 0; i <= n; i++) {
    naturalNumbers.push(true);
  }

  for (let i = 2; i <= n; i++) {
    if (isSimpleNumber(i)) {
      for (let j = i * 2; j <= n; j += i) {
        naturalNumbers[j] = false;
      }
    }
  }

  for (let i = 0; i < naturalNumbers.length; i++) {
      if (naturalNumbers[i]) console.log(i);
  }
};

sieve(120);
