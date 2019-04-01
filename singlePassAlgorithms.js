// Counting

let counting = function(array, func) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if ( func(array[i]) ) count++;
  }
  return count;
};

let inputArray = [1, 2, 5, 8, 13, 4, -9, 8, -20];

let resultCount = counting(inputArray, function(element) {
  return element > 8;
});

console.log('Testing "Counting algorithm":', resultCount === 1);


// Amount

let amount = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

let expectedAmount = 12;
let resultAmount = amount(inputArray);

console.log('Testing "Amount algorithm:', expectedAmount === resultAmount);


// Multiplication numbers

let multiplication = function(array) {
  let multi = 1;
  for (let i = 0; i < array.length; i++) {
    multi *= array[i];
  }
  return multi;
};

let expectedMulti = 5990400;
let resultMulti = multiplication(inputArray);

console.log('Testing "Multiplication numbers":', expectedMulti === resultMulti);


// Maximum, minimum

let max = function(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    max = max > array[i] ? max : array[i];
  }
  return max;
};

let min = function(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    min = min < array[i] ? min : array[i];
  }
  return min;
};

let expectedMax =  13;
let expectedMin = -20;

console.log('Testing "max":', max(inputArray) === expectedMax);
console.log('Testing "min":', min(inputArray) === expectedMin);


// Search number

let searchNumber = function(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) return i;
  }
  return -1;
};

console.log('Testing search', searchNumber(inputArray, 8) === 3);