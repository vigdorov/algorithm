// 1. Дано целое число в диапазоне 1–7. Вывести строку— название дня
//    недели, соответствующее данному числу (1— « понедельник», 2—
//    « вторник» и т. д.).

let task01 = function(n) {
  switch (n) {
    case 1:
      console.log('понедельник');
      break;
    case 2:
      console.log('вторник');
      break;
    case 3:
      console.log('среда');
      break;
    case 4:
      console.log('четверг');
      break;
    case 5:
      console.log('пятница');
      break;
    case 6:
      console.log('суббота');
      break;
    case 7:
      console.log('воскресенье');
      break;
  }
};

// 2. Дано целое число K. Вывести строку-описание оценки, соответствующей
//    числу K (1— « плохо», 2 — « неудовлетворительно», 3—
//    «удовлетворительно», 4— « хорошо», 5— « отлично»). Если K не лежит
//    в диапазоне 1–5, то вывести строку «ошибка».

let task02 = function(n) {
  switch (n) {
    case 1:
      console.log('плохо');
      break;
    case 2:
      console.log('неудовлетворительно');
      break;
    case 3:
      console.log('удовлетворительно');
      break;
    case 4:
      console.log('хорошо');
      break;
    case 5:
      console.log('отлично');
      break;
    default:
      console.log('ошибка');
  }
};

// 3. Дан номер месяца— целое число в диапазоне 1–12 (1 — январь,
//    2 — февраль и т. д.). Вывести название соответствующего времени года
//    (« зима», «весна», «лето», «осень»).

let task03 = function(n) {
  switch (n) {
    case 1: case 2:
      console.log('зима');
      break;
    case 3: case 4: case 5:
      console.log('весна');
      break;
    case 6: case 7: case 8:
      console.log('лето');
      break;
    case 9: case 10: case 11:
      console.log('осень');
      break;
    case 12:
      console.log('зима');
  }
};

// 4. Дан номер месяца— целое число в диапазоне 1–12 (1— январь,
//    2 — февраль и т. д.). Определить количество дней в этом месяце
//    для невисокосного года.

let task04 = function(n) {
  switch (n) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      console.log(31);
      break;
    case 4: case 6: case 9: case 11:
      console.log(30);
      break;
    case 2:
      console.log(28);
      break;
  }
};

// 5. Арифметические действия над числами пронумерованы следующим образом:
//    1— сложение, 2— вычитание, 3— умножение, 4— деление. Дан номер
//    действия N (целое число в диапазоне 1–4) и вещественные числа A и B
//    (В не равно 0). Выполнить над числами указанное действие и
//    вывести результат.

let task05 = function(n, a, b) {
  switch (n) {
    case 1:
      n = a + b;
      break;
    case 2:
      n = a - b;
      break;
    case 3:
      n = a * b;
      break;
    case 4:
      n = a / b;
      break;
  }
  console.log(n);
};

// 6. Единицы длины пронумерованы следующим образом: 1 — дециметр,
//    2 — километр, 3— метр, 4— миллиметр, 5— сантиметр. Дан номер
//    единицы длины (целое число в диапазоне 1–5) и длина отрезка в этих
//    единицах (вещественное число). Найти длину отрезка в метрах.

let task06 = function(unit, length) {
  let multiplier = 1;
  switch (unit) {
    case 1:
      multiplier = 0.1;
      break;
    case 2:
      multiplier = 1000;
      break;
    case 4:
      multiplier = 0.001;
      break;
    case 5:
      multiplier = 0.01;
      break;
  }
  console.log(length * multiplier);
};

// 7. Единицы массы пронумерованы следующим образом: 1— килограмм,
//    2 — миллиграмм, 3— грамм, 4— тонна, 5— центнер. Дан номер единицы
//    массы (целое число в диапазоне 1–5) и масса тела в этих единицах
//    (вещественное число). Найти массу тела в килограммах.

let task07 = function(unit, weight) {
  let multiplier = 1;
  switch (unit) {
    case 2:
      multiplier = 0.000001;
      break;
    case 3:
      multiplier = 0.001;
      break;
    case 4:
      multiplier = 1000;
      break;
    case 5:
      multiplier = 100;
      break;
  }
  console.log(weight * multiplier);
};

// 8. Даны два целых числа: D (день) и M (месяц), определяющие правильную
//    дату невисокосного года. Вывести значения D и M для даты,
//    предшествующей указанной.

let task08 = function(day, month) {
  let newDay = day - 1;
  let newMonth = month;
  switch (day) {
    case 1:
      newMonth = month - 1;
      switch (month) {
        case 2: case 4: case 6: case 8: case 9: case 11:
          newDay = 31;
          break;
        case 1:
          newDay   = 31;
          newMonth = 12;
          break;
        case 5: case 7: case 10: case 12:
          newDay = 30;
          break;
        case 3:
          newDay = 28;
          break;
      }
  }
  console.log('day:', newDay, 'month:', newMonth);
};

// 9. Даны два целых числа: D (день) и M (месяц), определяющие правильную
//    дату невисокосного года. Вывести значения D и M для даты, следующей
//    за указанной.

let task09 = function(day, month) {
  let newDay = day + 1;
  let newMonth = month;
  switch (day) {
    case 30:
      switch (month) {
        case 4: case 6: case 9: case 11:
          newDay = 1;
          newMonth = month + 1;
          break;
      }
      break;
    case 31:
      switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10:
          newDay = 1;
          newMonth = month + 1;
          break;
        case 12:
          newDay = 1;
          newMonth = 1;
          break;
      }
      break;
    case 28:
      switch (month) {
        case 2:
          newDay = 1;
          newMonth = month + 1;
          break;
      }
      break;
  }
  console.log('day:', newDay, 'month:', newMonth);
};

// 10. Робот может перемещаться в четырех направлениях (« С» — север,
//     «З» — запад, «Ю»— юг, «В» — восток) и принимать три цифровые
//     команды: 0 — продолжать движение, 1— поворот налево, –1 — поворот
//     направо. Дан символ C— исходное направление робота и целое число
//     N—посланная ему команда. Вывести направление робота после выполнения
//     полученной команды.

let task10 = function(direction, command) {
  let newDirection = direction;
  switch (command) {
    case 1:
      switch (direction) {
        case 'С':
          newDirection = 'В';
          break;
        case 'З':
          newDirection = 'С';
          break;
        case 'Ю':
          newDirection = 'З';
          break;
        case 'В':
          newDirection = 'Ю';
          break;
      }
      break;
    case -1:
      switch (direction) {
        case 'С':
          newDirection = 'З';
          break;
        case 'З':
          newDirection = 'Ю';
          break;
        case 'Ю':
          newDirection = 'В';
          break;
        case 'В':
          newDirection = 'С';
          break;
      }
      break;
  }
  console.log('Vector:', newDirection);
};

// 11. Локатор ориентирован на одну из сторон света («С» — север,
//     «З» — запад, «Ю»— юг, «В»— восток) и может принимать три цифровые
//     команды поворота: 1— поворот налево, –1 — поворот направо, 2— поворот
//     на 180°. Дан символ C— исходная ориентация локатора и целые числа N1
//     и N2 — две посланные команды. Вывести ориентацию локатора после
//     выполнения этих команд.

let task11 = function(direction, commandOne, commandTwo) {
  let newCommand = commandOne + commandTwo;
  let newDirection = direction;
  switch (newCommand) {
    case 2: case -2:
      switch (direction) {
        case 'С':
          newDirection = 'Ю';
          break;
        case 'З':
          newDirection = 'В';
          break;
        case 'Ю':
          newDirection = 'С';
          break;
        case 'В':
          newDirection = 'З';
          break;
      }
      break;
    case 3:
      switch (direction) {
        case 'С':
          newDirection = 'З';
          break;
        case 'З':
          newDirection = 'Ю';
          break;
        case 'Ю':
          newDirection = 'В';
          break;
        case 'В':
          newDirection = 'С';
          break;
      }
      break;
    case -3:
      switch (direction) {
        case 'С':
          newDirection = 'В';
          break;
        case 'З':
          newDirection = 'С';
          break;
        case 'Ю':
          newDirection = 'З';
          break;
        case 'В':
          newDirection = 'Ю';
          break;
      }
      break;
  }
};

// 12. Элементы окружности пронумерованы следующим образом: 1— радиус R,
//     2— диаметр D = 2·R, 3— длина L = 2·π·R, 4— площадь круга
//     S = π·R2. Дан номер одного из этих элементов и его значение. Вывести
//     значения остальных элементов данной окружности (в том же порядке).

let task12 = function(number, value) {
  let radius = value;
  switch (number) {
    case 2:
      radius = value / 2;
      break;
    case 3:
      radius = value / (2 * Math.PI);
      break;
    case 4:
      radius = value / Math.PI;
      break;
  }
  console.log('R =', radius, 'D =', radius * 2, 'L =', 2 * Math.PI * radius,
              'S =', Math.PI * radius);
};

// 13. Элементы равнобедренного прямоугольного треугольника пронумерованы
//     следующим образом: 1 — катет a, 2— гипотенуза c = a 2 , 3— высота h,
//     опущенная на гипотенузу (h = c/2), 4 — площадь S = c·h/2. Дан номер
//     одного из этих элементов и его значение. Вывести значения остальных
//     элементов данного треугольника (в том же порядке).

let task13 = function(number, value) {
  let a = value;
  switch (number) {
    case 2:
      a = value / Math.sqrt(2);
      break;
    case 3:
      a = value * 2 / Math.sqrt(2);
      break;
    case 4:
      a = Math.sqrt( value * 2 );
      break;
  }
  console.log('a =', a, 'c =', a * Math.sqrt(2), 'h =', a * Math.sqrt(2) / 2,
              'S =', a ** 2 / 2);
};

// 14. Элементы равностороннего треугольника пронумерованы следующим образом:
//     1 — сторона a, 2 — радиус R1 вписанной окружности ( R1 = a 3/ 6 ),
//     3 — радиус R2 описанной окружности (R2 = 2·R1), 4— площадь
//     S = a2 3/ 4 . Дан номер одного из этих элементов и его значение.
//     Вывести значения остальных элементов данного треугольника
//     (в том же порядке).

let task14 = function(number, value) {
  let a = value;
  switch (number) {
    case 2:
      a = value * 6 / Math.sqrt(3);
      break;
    case 3:
      a = value * 3 / Math.sqrt(3);
      break;
    case 4:
      a = Math.sqrt( value * 4 / Math.sqrt(3) );
      break;
  }
  console.log('a =', a, 'R1 =', a * Math.sqrt(3) / 6,
              'R2 =', a * Math.sqrt(3) / 3, 'S =', a ** 2 * Math.sqrt(3) / 4);
};

// 15. Мастям игральных карт присвоены порядковые номера: 1 — пики,
//     2 — трефы, 3 — бубны, 4 — червы. Достоинству карт, старших десятки,
//     присвоены номера: 11 — валет, 12— дама, 13— король, 14— туз. Даны
//     два целых числа: N— достоинство (6 ≤ N ≤ 14) и M— масть карты
//     (1 ≤ M ≤ 4). Вывести название соответствующей карты вида «шестерка
//     бубен», «дама червей», «туз треф» и т. п.

let task15 = function(value, suit) {
  let msg = '';
  switch (value) {
    case 6:
      msg += 'Шестрека';
      break;
    case 7:
      msg += 'Семерка';
      break;
    case 8:
      msg += 'Восьмерка';
      break;
    case 9:
      msg += 'Девятка';
      break;
    case 10:
      msg += 'Десятка';
      break;
    case 11:
      msg += 'Валет';
      break;
    case 12:
      msg += 'Дама';
      break;
    case 13:
      msg += 'Король';
      break;
    case 14:
      msg += 'Туз';
      break;
  }
  switch (suit) {
    case 1:
      msg += ' пики';
      break;
    case 2:
      msg += ' трефы';
      break;
    case 3:
      msg += ' бубны';
      break;
    case 4:
      msg += ' червы';
      break;
  }
  console.log( msg );
};

// 16. Дано целое число в диапазоне 20–69, определяющее возраст (в годах).
//     Вывести строку-описание указанного возраста, обеспечив правильное
//     согласование числа со словом «год», например: 20 — « двадцать лет»,
//     32 - «тридцать два года», 41 — «сорок один год».

let task16 = function(n) {
  let firstNumber = Math.floor(n / 10);
  let lastNumber = n % 10;
  let msg = 'Двадцать ';
  switch (firstNumber) {
    case 3:
      msg = 'Тридцать ';
      break;
    case 4:
      msg = 'Сорок ';
      break;
    case 5:
      msg = 'Пятьдесят ';
      break;
    case 6:
      msg = 'Шестьдесят ';
      break;
  }
  switch (lastNumber) {
    case 0:
      msg += 'лет';
      break;
    case 1:
      msg += 'один год';
      break;
    case 2:
      msg += 'два года';
      break;
    case 3:
      msg += 'три года';
      break;
    case 4:
      msg += 'четыре года';
      break;
    case 5:
      msg += 'пять лет';
      break;
    case 6:
      msg += 'шесть лет';
      break;
    case 7:
      msg += 'семь лет';
      break;
    case 8:
      msg += 'восемь лет';
      break;
    case 9:
      msg += 'девять лет';
      break;
  }
  console.log(n + ' - ' + msg);
};

// 17. Дано целое число в диапазоне 10–40, определяющее количество учебных
//     заданий по некоторой теме. Вывести строку-описание указанного
//     количества заданий, обеспечив правильное согласование числа со словами
//     «учебное задание», например: 18 — « восемнадцать учебных заданий»,
//     23 — « двадцать три учебных задания», 31— « тридцать одно
//     учебное задание».

let task17 = function(n) {
  let firstNumber = Math.floor(n / 10);
  let lastNumber  = n % 10;
  let msg = '';
  switch (firstNumber) {
    case 1:
      msg = 'Десять';
      break;
    case 2:
      msg = 'Двадцать';
      break;
    case 3:
      msg = 'Тридцать';
      break;
    case 4:
      msg = 'Сорок';
      break;
  }
  switch (lastNumber) {
    case 0:
      msg += ' учебных заданий';
      break;
    case 1:
      msg += ' одно учебное задание';
      break;
    case 2:
      msg += ' два учебных задания';
      break;
    case 3:
      msg += ' три учебных задания';
      break;
    case 4:
      msg += ' четыре учебных задания';
      break;
    case 5:
      msg += ' пять учебных заданий';
      break;
    case 6:
      msg += ' шесть учебных заданий';
      break;
    case 7:
      msg += ' семь учебных заданий';
      break;
    case 8:
      msg += ' восемь учебных заданий';
      break;
    case 9:
      msg += ' девять учебных заданий';
      break;
  }
  switch (n) {
    case 11:
      msg = 'Одиннадцать учебных заданий';
      break;
    case 12:
      msg = 'Двенадцать учебных заданий';
      break;
    case 13:
      msg = 'Тринадцать учебных заданий';
      break;
    case 14:
      msg = 'Четырнадцать учебных заданий';
      break;
    case 15:
      msg = 'Пятнадцать учебных заданий';
      break;
    case 16:
      msg = 'Шестнадцать учебных заданий';
      break;
    case 17:
      msg = 'Семьнадцать учебных заданий';
      break;
    case 18:
      msg = 'Восемьнадцать учебных заданий';
      break;
    case 19:
      msg = 'Девятнадцать учебных заданий';
      break;
  }
  console.log(n + ' - ' + msg);
};

// 18. Дано целое число в диапазоне 100–999. Вывести строку-описание данного
//     числа, например: 256— « двести пятьдесят шесть», 814— « восемьсот
//     четырнадцать».

let task18 = function(n) {
  let firstNumber  = Math.floor(n / 100);
  let secondNumber = Math.floor(n / 10) % 10;
  let thirdNumber  = n % 10;
  let msg = '';
  switch (firstNumber) {
    case 1:
      msg += 'Сто';
      break;
    case 2:
      msg += 'Двести';
      break;
    case 3:
      msg += 'Триста';
      break;
    case 4:
      msg += 'Четыреста';
      break;
    case 5:
      msg += 'Пятьсот';
      break;
    case 6:
      msg += 'Шестьсот';
      break;
    case 7:
      msg += 'Семьсот';
      break;
    case 8:
      msg += 'Восемьсот';
      break;
    case 9:
      msg += 'Девятьсот';
      break;
  }
  switch (secondNumber) {
    case 1:
      switch (thirdNumber) {
        case 0:
          msg += ' десять';
          break;
        case 1:
          msg += ' одиннадцать';
          break;
        case 2:
          msg += ' двенадцать';
          break;
        case 3:
          msg += ' тринадцать';
          break;
        case 4:
          msg += ' четырнадцать';
          break;
        case 5:
          msg += ' пятнадцать';
          break;
        case 6:
          msg += ' шестнадцать';
          break;
        case 7:
          msg += ' семнадцать';
          break;
        case 8:
          msg += ' восемнадцать';
          break;
        case 9:
          msg += ' девятнадцать';
          break;
      }
      break;
    case 2:
      msg += ' двадцать';
      break;
    case 3:
      msg += ' тридцать';
      break;
    case 4:
      msg += ' сорок';
      break;
    case 5:
      msg += ' пятьдесят';
      break;
    case 6:
      msg += ' шестьдесят';
      break;
    case 7:
      msg += ' семьдесят';
      break;
    case 8:
      msg += ' восемьдесят';
      break;
    case 9:
      msg += ' девяносто';
      break;
  }
  switch (secondNumber) {
    case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
      switch (thirdNumber) {
        case 1:
          msg += ' одни';
          break;
        case 2:
          msg += ' два';
          break;
        case 3:
          msg += ' три';
          break;
        case 4:
          msg += ' четыре';
          break;
        case 5:
          msg += ' пять';
          break;
        case 6:
          msg += ' шесть';
          break;
        case 7:
          msg += ' семь';
          break;
        case 8:
          msg += ' восемь';
          break;
        case 9:
          msg += ' девять';
          break;
      }
      break;
  }
  console.log(n + ' - ' + msg);
};

// 19. В восточном календаре принят 60-летний цикл, состоящий из 12-летних
//     подциклов, обозначаемых названиями цвета: зеленый, красный, желтый,
//     белый и черный. В каждом подцикле годы носят названия животных:
//     крысы, коровы, тигра, зайца, дракона, змеи, лошади, овцы, обезьяны,
//     курицы, собаки и свиньи. По номеру года определить его название, если
//     1984 год — начало цикла: «год зеленой крысы».

let task19 = function(year) {
  // 4 год + 33 цикла по 60 (1980).
  let difference = year - 4;
  let color = Math.floor(difference / 12) % 5;
  let animal = difference % 12;
  let msg = '';
  switch (color) {
    case 0:
      msg += 'год зелен';
      break;
    case 1:
      msg += 'год красн';
      break;
    case 2:
      msg += 'год желт';
      break;
    case 3:
      msg += 'год бел';
      break;
    case 4:
      msg += 'год черн';
      break;
  }
  switch (animal) {
    case 0:
      msg += 'ой крысы';
      break;
    case 1:
      msg += 'ой коровы';
      break;
    case 2:
      msg += 'ого тигра';
      break;
    case 3:
      msg += 'ого зайца';
      break;
    case 4:
      msg += 'ого дракона';
      break;
    case 5:
      msg += 'ой змеи';
      break;
    case 6:
      msg += 'ой лошади';
      break;
    case 7:
      msg += 'ой овцы';
      break;
    case 8:
      msg += 'ой обезьяны';
      break;
    case 9:
      msg += 'ой курицы';
      break;
    case 10:
      msg += 'ой собаки';
      break;
    case 11:
      msg += 'ой свиньи';
      break;
  }
  console.log(year + ' - ' + msg);
};

// 20. Даны два целых числа: D (день) и M (месяц), определяющие правильную
//     дату. Вывести знак Зодиака, соответствующий этой дате: «Водолей»
//     (20.1–18.2), « Рыбы» (19.2–20.3), « Овен» (21.3–19.4), « Телец»
//     (20.4–20.5), «Близнецы» (21.5–21.6), « Рак» (22.6–22.7), « Лев»
//     (23.7–22.8), « Дева» (23.8–22.9), « Весы» (23.9–22.10), « Скорпион»
//     (23.10–22.11), « Стрелец» (23.11–21.12), «Козерог» (22.12–19.1).

let task20 = function(day, month) {
  let msg = '';
  switch (month) {
    case 1:
      msg = day < 20 ? 'Козерог' : 'Водолей';
      break;
    case 2:
      msg = day < 19 ? 'Водолей' : 'Рыбы';
      break;
    case 3:
      msg = day < 21 ? 'Рыбы' : 'Овен';
      break;
    case 4:
      msg = day < 20 ? 'Овен' : 'Телец';
      break;
    case 5:
      msg = day < 21 ? 'Телец' : 'Близнецы';
      break;
    case 6:
      msg = day < 22 ? 'Близнецы' : 'Рак';
      break;
    case 7:
      msg = day < 23 ? 'Рак' : 'Лев';
      break;
    case 8:
      msg = day < 23 ? 'Лев' : 'Дева';
      break;
    case 9:
      msg = day < 23 ? 'Дева' : 'Весы';
      break;
    case 10:
      msg = day < 23 ? 'Весы' : 'Скорпион';
      break;
    case 11:
      msg = day < 23 ? 'Скорпион' : 'Стрелец';
      break;
    case 12:
      msg = day < 22 ? 'Стрелец' : 'Козерог';
      break;
  }
  console.log(day + ' ' + month + ' - ' + msg);
};
