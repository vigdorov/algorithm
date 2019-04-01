// Quadratic sorting
// Insert sort

let insertSort = function(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        let tmp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = tmp;
      } else {
        break;
      }
    }
  }
  return array;
};

// Choice sort

let choiceSort = function(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    }
  }
  return array;
};

// Bubble sort

let bubbleSort = function(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
};

// Counting sort

let countingSort = function (array) {
  let positiveArray = [];
  let negativeArray = [];

  let count = function(element, countArray) {
    if (countArray[element]) {
      countArray[element] += 1;
    } else {
      countArray[element] = 1;
    }
  };

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      count( array[i], positiveArray);
    } else {
      count(-array[i], negativeArray);
    }
  }

  let result = [];
  for (let key in negativeArray) {
    for (let i = 0; i < negativeArray[key]; i++) {
      result.unshift(-key);
    }
  }
  for (let key in positiveArray) {
    for (let i = 0; i < positiveArray[key]; i++) {
      result.push(+key);
    }
  }
  return result;
};

// Recursive sorting
// Tony Hoare sorting

let tonyHoareSort = function(array) {
  if (array.length <= 1) return array;

  let lessCurrent  = [];
  let equalCurrent = [];
  let moreCurrent  = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]  <  array[0]) lessCurrent.push(  array[i] );
    if (array[i]  >  array[0]) moreCurrent.push(  array[i] );
    if (array[i] === array[0]) equalCurrent.push( array[i] );
  }

  lessCurrent = tonyHoareSort(lessCurrent);
  moreCurrent = tonyHoareSort(moreCurrent);

  return lessCurrent.concat(equalCurrent, moreCurrent);
};

// Merge sorting

let mergeSort = function(array, leftIndex = 0, rightIndex = array.length - 1) {
  if (rightIndex - leftIndex <= 1) return [ array[leftIndex] ];

  let middle = Math.floor((rightIndex - leftIndex) / 2) + leftIndex;
  let leftSort = mergeSort(array, leftIndex, middle);
  let rightSort = mergeSort(array, middle, rightIndex);

  let left = 0;
  let right = 0;
  let result = [];

  while (left < leftSort.length && right < rightSort.length) {
    if (leftSort[left] < rightSort[right]) {
      result.push(leftSort[left]);
      left++;
    } else {
      result.push(rightSort[right]);
      right++;
    }
  }
  while (left < leftSort.length) {
    result.push(leftSort[left]);
    left++;
  }
  while (right < rightSort.length) {
    result.push(rightSort[right]);
    right++;
  }

  return result;
};

// Check and copy the array to sort for testing

let checkArraySort = function(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) return false;
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

let sortFuncObj = {
  insertSort: insertSort,
  choiceSort: choiceSort,
  bubbleSort: bubbleSort,
  countingSort: countingSort,
  tonyHoareSort: tonyHoareSort,
  mergeSort: mergeSort,
};

let testingSortFunction = function(sortFuncObj) {
  let inputArrays  = [
    [2, 4, 0, -1001, 245, 0, 0, 1, 23, -40, -0, 18],
    [34, 33, 31, 0, 1, -90, -4, 3, 39, 70, 5, 0, 0],
    [-90, -18829, 849920, -2341, 234194, 342, 2223],
    [7, -8, 0, 34, 1, 3, -6, 4, 0, -1, 90, -10],
  ];

  for (let key in sortFuncObj) {
    console.log('Testing ' + key + '.');
    for (let i = 0; i < inputArrays.length; i++) {
      let copyInputArray = copyArray(inputArrays[i]);
      let result = sortFuncObj[key](copyInputArray);
      console.log('Test #' + (i + 1), checkArraySort(result));
    }
  }
};

testingSortFunction(sortFuncObj);