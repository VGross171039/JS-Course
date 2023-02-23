"use strict";

// Унарный оператор
let x = 1;
x = -x;
console.log(x);  // Выведет -1

// Бинарный оператор
let as = 7;
let bs = 5;
console.log(as - bs);  // Бинарный оператор минус

// Взятие остатка
console.log(8 % 3); // 2, остаток от деления 8 на 3
console.log(5 % 2); // 1, остаток от деления 5 на 2
console.log(12 % 4); // 0, остаток от деления 12 на 4

// Возведение в степень
console.log(2 ** 2);  // 4
console.log(2 ** 3);  // 8
console.log(2 ** 4);  // 16
console.log(4 ** (1/2));  // 2
console.log(8 ** (1/3));  // 2

// Бинарный +

// Обьединение строк
let myString = 'Моя' + ' строка';
console.log(myString);

// Обьединение строки и чисел
let myDate = 'Мой год рождения ' + 19 + 65;
console.log(myDate);  // Преобразуется полностью в строку

let myNewDate = 19 + 65 + ' Чей-то год рождения ';
console.log(myNewDate);  // Складывает числа т затем преобразуется полностью в строку
// Здесь операторы работают один за другим. Первый + складывает два числа и возвращает значение, затем следующий + объединяет результат со строкой

console.log(2 - '1'); // Приводит строку к числовому значению
console.log('6' / '2'); // Приводит строку к числовому значению

// Унарный +

let xvalue = 1;
console.log(+xvalue);  // 1

let yvalue = -2;
console.log(+yvalue);  // -2

// Присваивание

let newValue = 2 * 2 + 1;
console.log(newValue);  // Выведет 5

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
console.log( a ); // 3
console.log( c ); // 0
// Писать самим в таком стиле не рекомендуется. Снижается читабельность кода

// Присваивание по цепочке

let an, bn, cn;

// an = bn = cn = 2 + 2;

cn = 2 + 2;
bn = cn;
an = bn;

console.log( an ); // 4
console.log( bn ); // 4
console.log( cn ); // 4