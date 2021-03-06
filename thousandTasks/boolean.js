// 1. Дано целое число A. Проверить истинность высказывания:
//    Число A является положительным.

let task01 = function(a) {
  console.log(a > 0);
};

// 2. Дано целое число A. Проверить истинность высказывания:
//    Число A является нечетным.

let task02 = function(a) {
  console.log( a % 2 === 1);
};

// 3. Дано целое число A. Проверить истинность высказывания:
//    Число A является четным.

let task03 = function(a) {
  console.log( a % 2 === 0);
};

// 4. Даны два целых числа A и B. Проверить истинность высказывания:
//    Справедливы неравенства A > 2 и B <= 3

let task04 = function(a, b) {
  console.log(a > 2 && b <= 3);
};

// 5. Даны два целых числа A и B. Проверить истинность высказывания:
//    Справедливы неравенства A >= 0 и B < -3

let task05 = function(a, b) {
  console.log(a >= 0 && b <= -3);
};

// 6. Даны три целых числа: A, B, C. Проверить истинность высказывания:
//    Справедливо двойственное неравенство A < B < C

let task06 = function(a, b, c) {
  console.log(a < b && b < c);
};

// 7. Даны три целых числа: A, B, C. Проверить истинность высказывания:
//    Число B находится между числами A и C

let task07 = function(a, b, c) {
  console.log(
    (a > c && b < a && b > c) ||
    (a < c && b > a && b < c)
  );
};

// 8. Даны два целых числа A, B. Проверить истинность высказывания:
//    Каждое из чисел A и B нечетное

let task08 = function(a, b) {
  console.log(a % 2 === 1 && b % 2 === 1);
};

// 9. Даны два целых числа A, B. Проверить истинность высказывания:
//    Хотя бы одно из чисел A и B нечетное

let task09 = function(a, b) {
  console.log(a % 2 === 1 || b % 2 === 1);
};

// 10. Даны два целых числа A, B. Проверить истинность высказывания:
//     Только одно из чисел A и B нечетное

let task10 = function(a, b) {
  console.log(
    (a % 2 === 1 && b % 2 === 0) ||
    (a % 2 === 0 && b % 2 === 1)
  );
};

// 11. Даны два целых числа A, B. Проверить истинность высказывания:
//     Числа A и B имеют одинаковую четность

let task11 = function(a, b) {
  console.log(
    (a % 2 === 1 && b % 2 === 1) ||
    (a % 2 === 0 && b % 2 === 0)
  );
};

// 12. Даны три целых числа: A, B, C. Проверить истинность высказывания:
//     «Каждое из чисел A, B, C положительное».

let task12 = function(a, b, c) {
  console.log(a > 0 && b > 0 && c > 0);
};

// 13. Даны три целых числа: A, B, C. Проверить истинность высказывания:
//     «Хотя бы одно из чисел A, B, C положительное».

let task13 = function(a, b, c) {
  console.log(a > 0 || b > 0 || c > 0);
};

// 14. Даны три целых числа: A, B, C. Проверить истинность высказывания:
//     «Ровно одно из чисел A, B, C положительное».

let task14 = function(a, b, c) {
  console.log(
    (a >  0 && b <= 0 && c <= 0) ||
    (a <= 0 && b >  0 && c <= 0) ||
    (a <= 0 && b <= 0 && c >  0)
  );
};

// 15. Даны три целых числа: A, B, C. Проверить истинность высказывания:
//     «Ровно два из чисел A, B, C являются положительными».

let task15 = function(a, b, c) {
  console.log(
    (a >  0 && b >  0 && c <= 0) ||
    (a <= 0 && b >  0 && c >  0) ||
    (a >  0 && b <= 0 && c >  0)
  );
};

// 16. Дано целое положительное число. Проверить истинность высказывания:
//     «Данное число является четным двузначным».

let task16 = function(n) {
  console.log(n < 100 && n > 9 && n % 2 === 0);
};

// 17. Дано целое положительное число. Проверить истинность высказывания:
//     «Данное число является нечетным трехзначным».

let task17 = function(n) {
  console.log(n < 1000 && n > 99 && n % 2 === 1);
};

// 18. Проверить истинность высказывания: « Среди трех данных целых
//     чисел есть хотя бы одна пара совпадающих».

let task18 = function(a, b, c) {
  console.log(a === b || b === c || c === a);
};

// 19. Проверить истинность высказывания: « Среди трех данных целых
//     чисел есть хотя бы одна пара взаимно противоположных».

let task19 = function(a, b, c) {
  console.log(a === -b || b === -c || c === -a);
};

// 20. Дано трехзначное число. Проверить истинность высказывания:
//     «Все цифры данного числа различны».

let task20 = function(n) {
  let a = Math.floor(n / 100);
  let b = Math.floor(n / 10) % 10;
  let c = n % 10;
  console.log(a !== b && b !== c && c !== a);
};

// 21. Дано трехзначное число. Проверить истинность высказывания:
//     «Цифры данного числа образуют возрастающую последовательность».

let task21 = function(n) {
  let a = Math.floor(n / 100);
  let b = Math.floor(n / 10) % 10;
  let c = n % 10;
  console.log(a < b && b < c);
};

// 22. Дано трехзначное число. Проверить истинность высказывания:
//     «Цифры данного числа образуют возрастающую или убывающую
//     последовательность».

let task22 = function(n) {
  let a = Math.floor(n / 100);
  let b = Math.floor(n / 10) % 10;
  let c = n % 10;
  console.log(
    (a < b && b < c) ||
    (a > b && b > c)
  );
};

// 23. Дано четырехзначное число. Проверить истинность высказывания:
//     «Данное число читается одинаково слева направо и справа налево».

let task23 = function(n) {
  let a = Math.floor(n / 1000);
  let b = Math.floor(n / 100) % 10;
  let c = Math.floor(n / 10) % 10;
  let d = n % 10;
  console.log(a === d && b === c);
};

// 24. Даны числа A, B, C (число A не равно 0). Рассмотрев дискриминант
//     D = B2 – 4·A·C, проверить истинность высказывания:
//     «Квадратное уравнение A·x2 + B·x + C = 0 имеет вещественные корни»

let task24 = function(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  console.log(d >= 0);
};

// 25. Даны числа x, y. Проверить истинность высказывания: «Точка с
//     координатами (x, y) лежит во второй координатной четверти».

let task25 = function(x, y) {
  console.log(x < 0 && y > 0);
};

// 26. Даны числа x, y. Проверить истинность высказывания: «Точка с
//     координатами (x, y) лежит в четвертой координатной четверти».

let task26 = function(x, y) {
  console.log(x > 0 && y < 0);
};

// 27. Даны числа x, y. Проверить истинность высказывания: «Точка с
//     координатами (x, y) лежит во второй или третьей координатной
//     четверти».

let task27 = function(x, y) {
  console.log(x < 0);
};

// 28. Даны числа x, y. Проверить истинность высказывания: «Точка с
//     координатами (x, y) лежит в первой или третьей координатной четверти».

let task28 = function(x, y) {
  console.log(
    (x > 0 && y > 0) ||
    (x < 0 && y < 0)
  )
};

// 29. Даны числа x, y, x1, y1, x2, y2. Проверить истинность высказывания:
//     «Точка с координатами (x, y) лежит внутри прямоугольника, левая верхняя
//     вершина которого имеет координаты ( x1, y1), правая нижняя— ( x2, y2),
//     а стороны параллельны координатным осям».

let task29 = function(x, y, x1, y1, x2, y2) {
  console.log(
    (x > x1 && x < x2) &&
    (y < y1 && y > y2)
  );
};

// 30. Даны целые числа a, b, c, являющиеся сторонами некоторого
//     треугольника. Проверить истинность высказывания: « Треугольник
//     со сторонами a, b, c является равносторонним».

let task30 = function(a, b, c) {
  console.log(a === b && b === c);
};

// 31. Даны целые числа a, b, c, являющиеся сторонами некоторого треугольника.
//     Проверить истинность высказывания: « Треугольник со сторонами a, b, c
//     является равнобедренным».

let task31 = function(a, b, c) {
  console.log(a === b || b === c || c === a);
};

// 32. Даны целые числа a, b, c, являющиеся сторонами некоторого треугольника.
//     Проверить истинность высказывания: « Треугольник со сторонами a, b, c
//     является прямоугольным».

let task32 = function(a, b, c) {
  console.log(
    (a * a + b * b === c * c) ||
    (a * a + c * c === b * b) ||
    (b * b + c * c === a * a)
  );
};

// 33. Даны целые числа a, b, c. Проверить истинность высказывания:
//     «Существует треугольник со сторонами a, b, c».

let task33 = function(a, b, c) {
  console.log(
    (a + b < c) &&
    (a + c < b) &&
    (b + c < a)
  );
};

// 34. Даны координаты поля шахматной доски x, y (целые числа, лежащие
//     в диапазоне 1–8). Учитывая, что левое нижнее поле доски (1, 1)
//     является черным, проверить истинность высказывания:
//     «Данное поле является белым».

let task34 = function(x, y) {
  console.log(
    (x % 2 === 0 && y % 2 === 0) ||
    (x % 2 === 1 && y % 2 === 1)
  );
};

// 35. Даны координаты двух различных полей шахматной доски
//     x1, y1, x2, y2 (целые числа, лежащие в диапазоне 1–8). Проверить
//     истинность высказывания: «Данные поля имеют одинаковый цвет».

let task35 = function(x1, y1, x2, y2) {
  let one = (x1 % 2 === 0 && y1 % 2 === 0) ||
            (x1 % 2 === 1 && y1 % 2 === 1);
  let two = (x2 % 2 === 0 && y2 % 2 === 0) ||
            (x2 % 2 === 1 && y2 % 2 === 1);
  console.log(one === two);
};

// 36. Даны координаты двух различных полей шахматной доски
//     x1, y1, x2, y2 (целые числа, лежащие в диапазоне 1–8). Проверить
//     истинность высказывания: «Ладья за один ход может перейти
//     с одного поля на другое».

let task36 = function(x1, y1, x2, y2) {
  console.log(x1 === x2 || y1 === y2);
};

// 37. Даны координаты двух различных полей шахматной доски
//     x1, y1, x2, y2 (целые числа, лежащие в диапазоне 1–8). Проверить
//     истинность высказывания: «Король за один ход может
//     перейти с одного поля на другое».

let task37 = function(x1, y1, x2, y2) {
  console.log(
    (Math.abs(x1 - x2) <= 1) &&
    (Math.abs(y1 - y2) <= 1)
  );
};

// 38. Даны координаты двух различных полей шахматной доски
//     x1, y1, x2, y2 (целые числа, лежащие в диапазоне 1–8). Проверить
//     истинность высказывания: «Слон за один ход может перейти
//     с одного поля на другое».

let task38 = function(x1, y1, x2, y2) {
  console.log( Math.abs(x1 - x2) === Math.abs(y1 - y2) );
};

// 39. Даны координаты двух различных полей шахматной доски
//     x1, y1, x2, y2 (целые числа, лежащие в диапазоне 1–8). Проверить
//     истинность высказывания: «Ферзь за один ход может перейти
//     с одного поля на другое».

let task39 = function(x1, y1, x2, y2) {
  console.log(
    (Math.abs(x1 - x2) === Math.abs(y1 - y2)) ||
    (x1 === x2 || y1 === y2)
  )
};

// 40. Даны координаты двух различных полей шахматной доски
//     x1, y1, x2, y2 (целые числа, лежащие в диапазоне 1-8). Проверить
//     истинность высказывания: «Конь за один ход может перейти
//     с одного поля на другое».

let task40 = function(x1, y1, x2, y2) {
  console.log(
    (Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 2) ||
    (Math.abs(x1 - x2) === 2 && Math.abs(y1 - y2) === 1)
  );
};