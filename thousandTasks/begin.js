// 01. Дана сторона квадрата а. Найти его периметр P=4*a

let perimeter = function (a) {
  return 4 * a;
};

// 02. Дана сторона квадрата a. Найти его площадь S=a^2

let area = function (a) {
  return a ** 2;
};

// 03. Дата сторона прямоугольника a и b.
//     Найти его площадь S=a*b и периметр P=2(a+b)

let perimeterAndArea = function(a, b) {
  return { perimeter: a * b, area: 2 * (a + b) };
};

// 04. Дан периметр окружности d. Найти ее длину L=pi*d.

let perimeterCircle = function (d) {
  return Math.PI * d;
};

// 05. Дана длина ребра куба a. Найти объем куба V=a^3 и площадь
//     его поверхности S=6*a^2

let cubeVolumeAndAreaSurface = function(a) {
  return { volume: a ** 3, area: 6 * a ** 2};
};

// 06. Даны длины ребер a, b, c прямоугольного параллелепипеда. Найти
//     его объем V=a*b*c и площади поверхности S=2(a*b+b*c+a*c)

let parallelepipedVolumeAndAreaSurface = function(a, b, c) {
  return { volume: a * b * c, area: 2 * (a * b + b * c + c * a) };
};


// 07. Найти длину окружности L и площадь круга S заданного радиуса R:
//     L=2pi*R, S=pi*R^2

let circleLengthAndArea = function(r) {
  return { length: 2 * Math.PI * r, area: Math.PI * r * 2 };
};

// 08. Даны два числа a и b. Найти среднее арифметическое (a+b)/2

let averageArithmetic = function(a, b) {
  return (a + b) / 2;
};

// 09. Даны два неотрицательных числа a и b. Найти их среднее геометрическое,
//     то есть квадратный корень из их произведения: ,/a*b

let averageGeometrical = function(a, b) {
  return Math.sqrt(a * b);
};

// 10. Даны два ненулевых числа Найти сумму, разность, произведение и
//     частное их квадратов.

let actionsOverSquares = function (a, b) {
  let squareA = a ** 2;
  let squareB = b ** 2;
  return {
    sum: squareA + squareB,
    difference: squareA - squareB,
    multiplication: squareA * squareB,
    division: squareA / squareB,
  };
};

// 11. Даны два ненулевых числа. Найти сумму, разность, произведение и
//     частное их модулей.

let actionsOverNumbersModule = function(a, b) {
  let moduleA = Math.abs(a);
  let moduleB = Math.abs(b);
  return {
    sum: moduleA + moduleB,
    difference: moduleA - moduleB,
    multiplication: moduleA * moduleB,
    division: moduleA / moduleB,
  };
};

// 12. Даны катеты прямоугольного треугольника a и b. Найти его гипотенузу c
//     и периметр: c=,/a^2+b^2, P=a+b+c

let hypotenuseAndPerimeterTriangle = function(a, b) {
  let c = Math.sqrt(a ** 2 + b ** 2);
  return { hypotenuse: c, perimeter: a + b + c };
};

// 13. Даны два круга с общим центром и радиусами R1 и R2 (R1>R2). Найти
//     площади этих кругов S1 и S2, а также площадь S3 кольца, внешний радиус
//     которого равен R1, а внутренний радиус равен R2. S=pi*R^2

let areasCircleAndAreaRing = function(rOne, rTwo) {
  let circleArea = (r) => Math.PI * r * 2;
  let firstArea  = circleArea(rOne);
  let secondArea = circleArea(rTwo);
  return {
    firstArea:  firstArea,
    secondArea: secondArea,
    ringArea:   Math.abs(firstArea - secondArea),
  };
};

// 14. Дана длина L окружности. Найти ее радиус R и площадь S круга,
//     ограниченного этой окружностью, учитывая что L=2pi*R S=pi*R^2

let radiusAndAreaCircle = function (lengthCircle) {
  let radius = 2 * Math.PI / lengthCircle;
  return { radius: radius, area: Math.PI * radius ** 2}
};

// 15. Дана площадь S круга. Найти его диаметр D и длину L окружности,
//     ограничивающей этот круг, учитывая, что L=pi*D, S=pi*(D/2)^2.

let diameterAndLengthCircle = function(areaCircle) {
  let diameter = 4 * Math.sqrt(areaCircle / Math.PI);
  return { diameter: diameter, length: Math.PI * diameter };
};

// 16. Найти расстояние между двумя точками с заданными координатами
//     x1 и x2 на числовой оси: |x2 - x1|

let distanceBetweenPoints = function (x1, x2) {
  return Math.abs(x1 - x2);
};

// 17. Даны три точки A, B, C на числовой оси. Найти длины отрезков
//     AC и BC и их сумму.

let lengthPieceAndSum = function(a, b, c) {
  let ab = distanceBetweenPoints(a, b);
  let bc = distanceBetweenPoints(b, c);
  return { ab: ab, bc: bc, sum: ab + bc };
};

// 18. Даны три точки A, B, C на числовой оси. Точка C расположена между
//     точками A и B. Найти произведение длин отрезков AC и BC.

let productLengthsSeqments = function(a, b, c) {
  let ac = distanceBetweenPoints(a, c);
  let bc = distanceBetweenPoints(b, c);
  return ac * bc;
};

// 19. Даны координаты двух противоположных вершин прямоугольника: (x1, y1),
//     (x2, y2). Стороны прямоугольника параллельны осям координат. Найти
//     периметр и площадь данного прямоугольника.

let perimeterAndAreaRectangle = function(x1, y1, x2, y2) {
  let width = distanceBetweenPoints(x1, x2);
  let height = distanceBetweenPoints(y1, y2);
  return perimeterAndArea(width, height);
};

// 20. Найти расстояние между двумя точками с заданными координатами (x1, y1)
//     и (x2, y2) на плоскости. Расстояние вычисляется по формуле:
//     ,/(x2 - x1)^2 + (y2 - y1)^2

let distanceBetweenPointsOnPlane = function(x1, y1, x2, y2) {
  let width = distanceBetweenPoints(x1, x2);
  let height = distanceBetweenPoints(y1, y2);
  return Math.sqrt(width ** 2 + height ** 2);
};

// 21. Даны координаты трех вершин треугольника: (x1, y1), (x2, y2), (x3, y3)
//     Найти его периметр и площадь, используя формулу для расстояния между
//     двумя точками на плоскости (см. задание №20). Для нахождения площади
//     треугольника со сторонаями a, b, c использовать формулу Герона:
//     S = ,/p(p-a)*(p-b)*(p-c)

let perimeterAndAreaTriangle = function(x1, y1, x2, y2, x3, y3) {
  let a = distanceBetweenPointsOnPlane(x1, y1, x2, y2);
  let b = distanceBetweenPointsOnPlane(x2, y2, x3, y3);
  let c = distanceBetweenPointsOnPlane(x3, y3, x1, y1);
  let p = a + b + c;
  let area = Math.sqrt( p * (p - a) * (p - b) * (p - c) );
  return { perimeter: p, area: area };
};

// 22. Поменять местами содержимле переменных A и B и вывести
//     новые значения A и B

let changeValuesTwoVariables = function(a, b) {
  let temp = a;
  a = b;
  b = temp;
  console.log('A:', a, 'B:', b);
};

// 23. Даны переменные A, B, C. Изменить их значения, переместив содержимое
//     A в B, B в C, C в A, и вывести новые значения переменных.

let changeValuesThreeVariables = function(a, b, c) {
  let temp = b;
  b = a; a = c; c = temp;
  console.log('A:', a, 'B:', b, 'C:', c);
};

// 24. Даны переменные A, B, C. Изменить их значения, переместив содержимое
//     A в C, C в B, B в A, и вывести новые значения переменных.

let changeValuesThreeVariables2 = function(a, b, c) {
  let temp = c;
  c = a; a = b; b = temp;
  console.log('A:', a, 'B:', b, 'C:', c);
};

// 25. Найти значения функции y = 3*x^6 - 6*x^2 - 7 при данном значении x.

let task25 = function(x) {
  return 3 * x ** 6 - 6 * x ** 2 - 7;
};

// 26. Найти значение функции y = 4*(x-3)^6 - 7*(x-3)^3 + 2 при данном x.

let task26 = function(x) {
  return 4 * (x - 3) ** 6 - 7 * (x - 3) ** 3 + 2;
};

// 27. Дано число А. Вычислить А^8, используя вспомогательную переменную
//     и три операции умножения. Для этого последовательно выводить A^2,
//     A^4, A^8. Вывести все найденные степени числа A.

let task27 = function(a) {
  let temp = a * a;
  console.log('A^2:', temp);
  console.log('A^4:', temp *= temp);
  console.log('A^8:', temp *= temp);
};

// 28. Дано число A. Вычислить A^15, используя две вспомогательные переменные
//     и пять операций умножения. Для этого последовательно находить A^2,
//     A^3, A^5, A^10, A^15. Вывести все найденные степени числа A.

let task28 = function(a) {
  let temp  = a * a;
  let temp2 = temp * a;
  console.log('A^2:', temp); // a * a
  console.log('A^3:', temp2); //a^2 * a
  console.log('A^5:', temp = temp * temp2); // a^2 * a^3
  console.log('A^10:', temp2 = temp * temp); // a^5 * a^5
  console.log('A^15:', temp * temp2); // a^5 * a^10
};

// 29. Дано значения угла a в градусах (0 < a < 360). Определить значение
//     этого же угла в радиантах, учитывая, что 180 = pi радиантов.

let degreeToRadiant = function(degree) {
  return degree * Math.PI / 180;
};

// 30. Дано значение угла a в радиантах (0 < a < 2*pi). Определить значение
//     этого же угла в градусах, учитывая, что 180 = pi радиантов.

let radianToDegree = function(radiant) {
  return 180 / Math.PI * radiant;
};

// 31. Дано значение температуры T в градусах Фаренгейта. Определить
//     значение этой же температуры в градусах Цельсия.

let fahrenheitsToCelsius = function(t) {
  return (t - 32) / 1.8;
};

// 32. Дано значение температуры T в градусах Цельсия. Определить
//     значение этой же температуры в градусах Фаренгейта

let celsiusToFahrenheits = function(t) {
  return t * 1.8 + 32;
};

// 33. Известно, что X кг конфет стоит A рублей. Определить, сколько
//     стоит 1 кг и Y кг этих же конфет.

let task33 = function(weight, costThisWeight, anotherWeight) {
  let costOneKilogram = costThisWeight / weight;
  console.log('Cost 1 kg:', costOneKilogram);
  console.log('Cost', anotherWeight, 'kg:', costOneKilogram * anotherWeight);
};

// 34. Известно, что X кг шоколадных конфет стоит A рублей, а Y кг ирисок
//     стоит B рублей. Определить, сколько стоит 1 кг шоколадных конфет,
//     1 кг ирисок, а также во сколько раз шоколадные конфеты дороже ирисок.

let task34 = function(weightCandy, costCandy, weightToffee, costToffee) {
  let costOneKgCandy = costCandy / weightCandy;
  let costOneKgToffee = costToffee / weightToffee;
  let difference = Math.abs(costOneKgCandy - costOneKgToffee);
  console.log('Cost 1kg candy:', costOneKgCandy);
  console.log('Cost 1kg toffee:', costOneKgToffee);
  console.log('Difference of prices:', difference);
};

// 35. Скорость лодки в стоячей воде V км/ч, скорость течении реки U км/ч.
//     Время движения лодки по озеру T1 ч, а по реке (против течения) -
//     T2 ч. Определить путь S, пройденный лодкой (путь = время * скорость).
//     Учесть, что движение против течения скорость лодки уменьшается
//     на величину скорости течения.

let task35 = function(boatSpeed, flowSpeed, timeOnLake, timeUpRiver) {
  let distanceOnLake = timeOnLake * boatSpeed;
  let distanceUpRiver = timeUpRiver * (boatSpeed - flowSpeed);
  console.log('Passable distance:', distanceOnLake + distanceUpRiver);
};

// 36. Скорость первого автомобиля V1 км/ч, второго V2 км/ч, расстояние между
//     ними S км. Определить расстояние между ними через T часов, если
//     автомобили удаляються друг от друга. Данное расстояние равно сумме
//     начального расстояния и общего пути, проделанного автомобилями;
//     общий путь = время * суммарная скорость.

let task36 = function(firstSpeed, secondSpeed, distance, hours) {
  let firstDistance = firstSpeed * hours;
  let secondDistance = secondSpeed * hours;
  console.log('Distance in', hours, 'hours:',
               firstDistance + secondDistance + distance);
};

// 37. Скорость первого автомобиля V1 км/ч, второго V2 км/ч, расстояние между
//     ними S км. Определить расстояние между ними через T часов, если
//     автомобили первоначально движутся навстречу друг другу. Данное
//     расстояние равно модулю разности начального расстояния и общего пути,
//     проделанного автомобилями; общий путь = время * суммарная скорость.

let task37 = function(firstSpeed, secondSpeed, distance, hours) {
  let firstDistance = firstSpeed * hours;
  let secondDistance = secondSpeed * hours;
  console.log('Distance in', hours, 'hours:',
               Math.abs(distance - (firstDistance + secondDistance)));
};

// 38. Решить линейное уравнение A*x+B=0, заданное своими коэффициентами
//     A и B (коэффициент A не равен 0).

let task38 = function(a, b) {
  return -b / a;
};

// 39. Найти корни квадратного уравнения A*x^2+B*x+C=0, заданного своими
//     коэффициентами A, B, C (коэффициент A не равен 0), если известно
//     что дискриминант уравнения положителен. Вывести вначале меньший,
//     а затем больший из найденных корней. Корни квадратного уравнения
//     находятся по формуле:
//     x1,2 = (-B+\-./D)/(2*A), где D - дискриминант, раный B^2-4*A*C.

let task39 = function(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  let x1 = ( -b + Math.sqrt(d) ) / 2 * a;
  let x2 = ( -b - Math.sqrt(d) ) / 2 * a;
  console.log('Root x1 =', x1, 'Root x2 =', x2);
};

// 40. Найти решение системы линейных уравнений вида:
//                { A1*x + B1*y = C1,
//                { A2*x + B2*y = C2,
//     заданной своими коэффициентами A1, B1, C1, A2, B2, C2, если известно,
//     что данная система имеет единственное решение.
//     Воспользоваться формулами:
//     x=(C1*B2-C2*B1)/D, y=(A1*C2-A2*C1)/D, где D=A1*B2-A2*B1

let task40first = function(a1, b1, c1, a2, b2, c2) {
  let d = a1 * b2 - a2 * b1;
  let x = (c1 * b2 - c2 * b1) / d;
  let y = (a1 * c2 - a2 * c1) / d;
  console.log('x =', x, 'y =', y);
};

let task40second = function(a1, b1, c1, a2, b2, c2) {
  let y = (c2 - a2 * c1 / a1) / (b2 - b1 * a2 / a1);
  let x = (c1 - b1 * y) / a1;
  console.log('x =', x, 'y =', y);
};