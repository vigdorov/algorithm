let reverseCurrentArray = function(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let tmp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = tmp;
  }
};

let returnReverseArray = function(array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push( array[i] );
  }
  return result;
};

// Testing function

let inputArray = [2, 3, 1, 45, true, 2, 'fine'];
let expectedResult = ['fine', 2, true, 45, 1, 3, 2];

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

let copyInputArray = copyArray(inputArray);

// Test first function

reverseCurrentArray(copyInputArray);
let testOne = arraysEqual(expectedResult, copyInputArray) ? 'OK!' : 'False!';

console.log( 'Testing function "reverseCurrentArray":', testOne);

// Test second function

let reverseArray = returnReverseArray(inputArray)
let testTwo = arraysEqual(reverseArray, expectedResult) ? 'OK!' : 'False!';

console.log( 'Testing function "returnReverseArray":', testTwo);

