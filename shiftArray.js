let shiftArrayLeft = function(array) {
  let tmp = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array[array.length - 1] = tmp;
  return array;
};

let shiftArrayRight = function(array) {
  let tmp = array[array.length - 1];
  for (let i = array.length - 1; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = tmp;
  return array;
};

// Testing function

let inputArray = [23, 4, 12, true, 'go', 3, '', -1];
let expectedLeftShift = [4, 12, true, 'go', 3, '', -1, 23];
let expectedRightShift = [-1, 23, 4, 12, true, 'go', 3, ''];

let arraysEqual = function(first, second) {
  if (first.length !== second.length) return false;
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) return false;
  }
  return true;
};

let copyArray = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
};

// Test shiftArrayLeft

let resultOne = shiftArrayLeft( copyArray(inputArray) );
let testOne = arraysEqual(resultOne, expectedLeftShift) ? 'OK!' : 'False!';
console.log( 'Testing function "shiftArrayLeft":', testOne );

// Test shiftArrayRight

let resultTwo = shiftArrayRight( copyArray(inputArray) );
let testTwo = arraysEqual(resultTwo, expectedRightShift) ? 'OK!' : 'False!';
console.log( 'Testing function "shiftArrayRight":', testTwo );
