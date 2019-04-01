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

// testing function

let numbers = [2, 89, -13, 52, 40, 103, 180, 463, -701];
let expectedResult = [true, true, true, false, false, true, false, true, true];

let finalResult = true;
numbers.forEach( function(current, i) {
  let result = isSimpleNumber(current);
  console.log( 'Expected/result:', expectedResult[i], '/', result );
  if (expectedResult[i] !== result) finalResult = false;
});

console.log( 'Final result:', finalResult );