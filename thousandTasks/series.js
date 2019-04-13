// В данной части заданий умышленно использовал методы перебора массивов.

// 1. Даны десять вещественных чисел. Найти их сумму.

let task01 = function(array) {
  console.log( array.reduce( function(acc, element) {
    return acc + element;
  }));
};

// 2. Даны десять вещественных чисел. Найти их произведение.

let task02 = function(array) {
  console.log( array.reduce( function(acc, element) {
    return acc * element;
  }));
};

// 3. Даны десять вещественных чисел. Найти их среднее арифметическое.

let task03 = function(array) {
  let sum = array.reduce( function(acc, element) {
    return acc + element;
  });
  console.log( sum / array.length );
};

// 4. Дано целое число N и набор из N вещественных чисел. Вывести сумму
//    и произведение чисел из данного набора.

let task04 = function(array) {
  let sum = 0;
  let multiplication = 1;
  array.forEach( function(element) {
    sum += element;
    multiplication *= element;
  });
  console.log(sum, multiplication);
};

// 5. Дано целое число N и набор из N положительных вещественных чисел.
//    Вывести в том же порядке целые части всех чисел из данного набора
//    (как вещественные числа с нулевой дробной частью), а также сумму
//    всех целых частей.

let task05 = function(array) {
  let sum = 0;
  array.forEach( function(element) {
    console.log( Math.floor(element) );
    sum += Math.floor(element);
  });
  console.log('Sum =', sum );
};

// 6. Дано целое число N и набор из N положительных вещественных чисел.
//    Вывести в том же порядке дробные части всех чисел из данного набора
//    (как вещественные числа с нулевой целой частью), а также произведение
//    всех дробных частей.

let task06 = function(array) {
  let sum = 0;
  array.forEach( function(element) {
    let current  = element - Math.floor(element);
    let rounding = Math.round( current * 10000 ) / 10000;
    console.log( rounding );
    sum += rounding;
  });
  console.log('Sum =', sum );
};

// 7. Дано целое число N и набор из N вещественных чисел. Вывести
//    в том же порядке округленные значения всех чисел из данного набора
//    (как целые числа), а также сумму всех округленных значений.

let task07 = function(array) {
  let sum = 0;
  array.forEach( function(element) {
    let current = Math.round(element);
    console.log( current );
    sum += current;
  });
  console.log('Sum =', sum );
};

// 8. Дано целое число N и набор из N целых чисел. Вывести в том же
//    порядке все четные числа из данного набора и количество K таких чисел.

let task08 = function(array) {
  let count = 0;
  array.forEach( function(element) {
    if (element % 2 === 0) {
      console.log(element);
      count++;
    }
  });
  console.log('Count =', count );
};

// 9. Дано целое число N и набор из N целых чисел. Вывести в том же
//    порядке номера всех нечетных чисел из данного набора и
//    количество K таких чисел.

let task09 = function(array) {
  let count = 0;
  array.forEach( function(element) {
    if (element % 2 === 1) {
      console.log(element);
      count++;
    }
  });
  console.log('Count =', count);
};

// 10. Дано целое число N и набор из N целых чисел. Если в наборе имеются
//     положительные числа, то вывести True; в противном случае
//     вывести False.

let task10 = function(array) {
  console.log( array.some( function(element) {
    return element > 0;
  }));
};

// 11. Даны целые числа K, N и набор из N целых чисел. Если в наборе
//     имеются числа, меньшие K, то вывести True; в противном случае
//     вывести False.

let task11 = function(array, k) {
  console.log( array.some( function(element) {
    return element < k;
  }))
};

// 12. Дан набор ненулевых целых чисел; Вывести количество чисел в наборе.

let task12 = function(array) {
  let count = 0;
  array.forEach( function(element) {
    count++;
  });
  console.log(count);
};

// 13. Дан набор ненулевых целых чисел; Вывести сумму всех положительных
//     четных чисел из данного набора. Если требуемые числа в наборе
//     отсутствуют, то вывести 0.

let task13 = function(array) {
  let sum = 0;
  array.forEach( function(element) {
    if (element % 2 === 0 && element > 0) {
      sum += element;
    }
  });
  console.log(sum);
};

// 14. Дано целое число K и набор ненулевых целых чисел. Вывести количество
//     чисел в наборе, меньших K.

let task14 = function(array, k) {
  let count = 0;
  array.forEach( function(element) {
    if (element < k) count++;
  });
  console.log(count);
};

// 15. Дано целое число K и набор ненулевых целых чисел. Вывести номер
//     первого числа в наборе, большего K. Если таких чисел нет, то вывести 0.

let task15 = function(array, k) {
  let index = 0;
  array.some( function(element) {
    index++;
    return element > k;
  });
  console.log( index );
};

// 16. Дано целое число K и набор ненулевых целых чисел. Вывести номер
//     последнего числа в наборе, большего K. Если таких чисел нет,
//     то вывести 0.

let task16 = function(array, k) {
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > k) index = i + 1;
  }
  console.log( index );
};

// 17. Дано вещественное число B, целое число N и набор из N
//     вещественных чисел, упорядоченных по возрастанию. Вывести
//     элементы набора вместе с числом B, сохраняя упорядоченность
//     выводимых чисел.

let task17 = function (array, b) {
  let result = [];
  let insert = true;
  for (let i = 0; i < array.length; i++) {
    if (insert && array[i] > b) {
      result.push(b);
      insert = false;
    }
    result.push(array[i]);
  }
  if (insert) result.push(b);
  console.log(result);
};

// 18. Дано целое число N и набор из N целых чисел, упорядоченный по
//     возрастанию. Данный набор может содержать одинаковые элементы.
//     Вывести в том же порядке все различные элементы данного набора.

let task18 = function(array) {
  let result = [];
  array.forEach( function(element) {
    if (result.length > 0) {
      if (result[result.length - 1] !== element) {
        result.push(element);
      }
    } else {
      result.push(element);
    }
  });
  console.log( result );
};

// 19. Дано целое число N (> 1) и набор из N целых чисел. Вывести те
//     элементы в наборе, которые меньше своего левого соседа, и количество
//     K таких элементов.

let task19 = function(array) {
  let result = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      result.push(array[i]);
    }
  }
  console.log('array:', result, 'count =', result.length);
};

// 20. Дано целое число N (> 1) и набор из N целых чисел. Вывести те
//     элементы в наборе, которые меньше своего правого соседа, и количество
//     K таких элементов.

let task20 = function(array) {
  let result = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      result.push(array[i]);
    }
  }
  console.log('array:', result, 'count =', result.length);
};

// 21. Дано целое число N (> 1) и набор из N вещественных чисел. Проверить,
//     образует ли данный набор возрастающую последовательность. Если
//     образует, то вывести True, если нет — вывести False.

let task21 = function(array) {
  let isIncreasing = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      isIncreasing = false;
      break;
    }
  }
  console.log(isIncreasing);
};

// 22. Дано целое число N (> 1) и набор из N вещественных чисел. Если данный
//     набор образует убывающую последовательность, то вывести 0;
//     в противном случае вывести номер первого числа,
//     нарушающего закономерность.

let task22 = function(array) {
  let isDecreasing = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      isDecreasing = i + 1;
      break;
    }
  }
  console.log(isDecreasing);
};

// 23. Дано целое число N (> 2) и набор из N вещественных чисел. Набор
//     называется пилообразным, если каждый его внутренний элемент либо
//     больше, либо меньше обоих своих соседей ( то есть является « зубцом»).
//     Если данный набор является пилообразным, то вывести 0; в противном
//     случае вывести номер первого элемента, не являющегося зубцом.

let task23 = function(array) {
  let isProng = 0;
  for (let i = 1; i < array.length - 1; i++) {
    let min = array[i - 1] > array[i] && array[i + 1] > array[i];
    let max = array[i - 1] < array[i] && array[i + 1] < array[i];
    if (!min && !max) {
      isProng = i;
      break;
    }
  }
  console.log(isProng);
};

// 24. Дано целое число N и набор из N целых чисел, содержащий по крайней
//     мере два нуля. Вывести сумму чисел из данного набора, расположенных
//     между последними двумя нулями (если последние нули идут подряд,
//     то вывести 0).

let task24 = function(array) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      result.push(sum);
      sum = 0;
    } else {
      sum += array[i];
    }
  }
  console.log(result[result.length - 1]);
};


// 25. Дано целое число N и набор из N целых чисел, содержащий по крайней
//     мере два нуля. Вывести сумму чисел из данного набора, расположенных
//     между первым и последним нулем ( если первый и последний нули идут
//     подряд, то вывести 0).

let task25 = function(array) {
  let result = 0;
  let currentSum = 0;
  let firstZero = false;
  for (let i = 0; i < array.length; i++) {
    if (firstZero && array[i] === 0) {
      result += currentSum;
      currentSum = 0;
    } else if (firstZero && array[i] !== 0) {
      currentSum += array[i];
    }
    if (array[i] === 0) firstZero = true;
  }
  console.log(result);
};

// Вложенные циклы
// 26. Даны целые числа K, N и набор из N вещественных чисел:
//     A1, A2, …, AN. Вывести K-e степени чисел из данного набора:
//     (A1)^K, (A2)^K, …, (AN)^K.

let task26 = function(array, k) {
  let result = [];
  array.forEach( function(element) {
    result.push( element ** k );
  });
  console.log( result );
};

// 27. Дано целое число N и набор из N вещественных чисел: A1, A2, …, AN.
//     Вывести следующие числа: A1, (A2)^2, …, (AN–1)^N–1, (AN)^N.

let task27 = function(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] ** (i + 1);
  }
  console.log(array);
};

// 28. Дано целое число N и набор из N вещественных чисел: A1, A2, …, AN.
//     Вывести следующие числа: (A1)^N, (A2)^N–1, …, (AN–1)^2, AN.

let task28 = function(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] ** (array.length - i);
  }
  console.log(array);
};

// 29. Даны целые числа K, N, а также K наборов целых чисел по N элементов
//     в каждом наборе. Вывести общую сумму всех элементов, входящих
//     в данные наборы.

let task29 = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }
  console.log( sum );
};

// 30. Даны целые числа K, N, а также K наборов целых чисел по N элементов
//     в каждом наборе. Для каждого набора вывести сумму его элементов.

let task30 = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
    result.push(sum);
  }
  console.log(result);
};

// 31. Даны целые числа K, N, а также K наборов целых чисел по N элементов
//     в каждом наборе. Найти количество наборов, содержащих число 2.
//     Если таких наборов нет, то вывести 0.

let task31 = function(array) {
  let checkTwo = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 2) {
        checkTwo++;
        break;
      }
    }
  }
  console.log(checkTwo);
};

// 32. Даны целые числа K, N, а также K наборов целых чисел по N элементов
//     в каждом наборе. Для каждого набора вывести номер его первого
//     элемента, равного 2, или число 0, если в данном наборе нет двоек.

let task32 = function(array) {
  for (let i = 0; i < array.length; i++) {
    let index = 0;
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 2) {
        index = j;
        break;
      }
    }
    console.log(index);
  }
};

// 33. Даны целые числа K, N, а также K наборов целых чисел по N элементов
//     в каждом наборе. Для каждого набора вывести номер его последнего
//     элемента, равного 2, или число 0, если в данном наборе нет двоек.

let task33 = function(array) {
  for (let i = 0; i < array.length; i++) {
    let index = 0;
    for (let j = 0; j < array[i].length; j++) {
      if(array[i][j] === 2) {
        index = j;
      }
    }
    console.log(index);
  }
};

// 34. Даны целые числа K, N, а также K наборов целых чисел по N элементов
//     в каждом наборе. Для каждого набора выполнить следующее действие:
//     если в наборе содержится число 2, то вывести сумму его элементов;
//     если в наборе нет двоек, то вывести 0.

let task34 = function(array) {
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    let checkTwo = false;
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 2) checkTwo = true;
      sum += array[i][j];
    }
    console.log( checkTwo ? sum : 0)
  }
};

// 35. Дано целое число K, а также K наборов ненулевых целых чисел.
//     Для каждого набора вывести количество его элементов. Вывести
//     также общее количество элементов во всех наборах.

let task35 = function(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let currentCount = 0;
    for (let j = 0; j < array[i].length; j++) {
      currentCount++;
    }
    console.log(currentCount);
    count += currentCount;
  }
  console.log('Count =', count);
};

// 36. Дано целое число K, а также K наборов ненулевых целых чисел.
//     Каждый набор содержит не менее двух элементов. Найти количество
//     наборов, элементы которых возрастают.

let task36 = function(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let isIncreasing = true;
    for (let j = 0; j < array[i].length - 1; j++) {
      if (array[i][j] > array[i][j + 1]) {
        isIncreasing = false;
        break;
      }
    }
    if (isIncreasing) count++;
  }
  console.log(count);
};

// 37. Дано целое число K, а также K наборов ненулевых целых чисел.
//     Каждый набор содержит не менее двух элементов. Найти количество
//     наборов, элементы которых возрастают или убывают.

let task37 = function(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let isIncreasing = true;
    for (let j = 0; j < array[i].length - 1; j++) {
      if (array[i][j] > array[i][j + 1]) {
        isIncreasing = false;
        break;
      }
    }
    let isDecreasing = true;
    for (let j = 0; j < array[i].length - 1; j++) {
      if (array[i][j] < array[i][j + 1]) {
        isDecreasing = false;
        break;
      }
    }
    if (isIncreasing || isDecreasing) count++;
  }
  console.log( count );
};

// 38. Дано целое число K, а также K наборов ненулевых целых чисел.
//     Каждый набор содержит не менее двух элементов. Для каждого набора
//     выполнить следующее действие: если элементы набора возрастают,
//     то вывести 1; если элементы набора убывают, то вывести –1;
//     если элементы набора не возрастают и не убывают, то вывести 0.

let task38 = function(array) {
  for (let i = 0; i < array.length; i++) {
    let sequence = 0;
    for (let j = 0; j < array[i].length - 1; j++) {
      if (j === 0) {
        sequence = array[i][j] < array[i][j + 1] ? 1 : -1;
      } else {
        if (sequence === 1) {
          if (array[i][j] > array[i][j + 1]) {
            sequence = 0;
            break;
          }
        }
        if (sequence === -1) {
          if (array[i][j] < array[i][j + 1]) {
            sequence = 0;
            break;
          }
        }
      }
    }
    console.log(sequence);
  }
};

// 39. Дано целое число K, а также K наборов ненулевых целых чисел. Каждый
//     набор содержит не менее трех элементов. Найти количество
//     пилообразных наборов.

let task39 = function(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let isProng = true;
    for (let j = 1; j < array[i].length - 1; j++) {
      let min = array[i][j] < array[i][j - 1] && array[i][j] < array[i][j + 1];
      let max = array[i][j] > array[i][j - 1] && array[i][j] > array[i][j + 1];
      if (!min && !max) {
        isProng = false;
        break;
      }
    }
    if (isProng) count++;
  }
  console.log(count);
};
let array = [
  [1, 0, 3, 4, 5],
  [1, 2, 1, 2, 1, 2],
  [1, 4, 2, 3, 4, 2, 10],
  [0, 1, 3],
];

// 40. Дано целое число K, а также K наборов ненулевых целых чисел. Каждый
//     набор содержит не менее трех элементов. Для каждого набора выполнить
//     следующее действие: если набор является пилообразным, то вывести
//     количество его элементов; в противном случае вывести номер первого
//     элемента, который не является зубцом.

let task40 = function(array) {
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 1; j < array[i].length - 1; j++) {
      let min = array[i][j] < array[i][j - 1] && array[i][j] < array[i][j + 1];
      let max = array[i][j] > array[i][j - 1] && array[i][j] > array[i][j + 1];
      if(!min && !max) {
        count = 'index = ' + j;
        break;
      } else {
        count++;
      }
    }
    console.log(count);
  }
};