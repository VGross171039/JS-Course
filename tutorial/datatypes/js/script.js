'use strict';

// Изменение типа данных в переменной
let message = "hello";
message = 123456;
console.log(message);

// Пример числового значения переменной
let n = 123;
n = 12.345;
console.log(n);

// Infinity
console.log(1 / 0);
console.log(Infinity);
console.log(-1 / 0);
console.log(-Infinity);

// NaN 
console.log('No number' / 2);
// Любая математическая операция с NaN возвращает NaN
console.log(NaN + 1);
console.log(3 * NaN);
console.log("не число" / 2 - 1);

// BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

// String
let str = "Привет"; // Двойные кавычки
let strtwo = 'Одинарные кавычки тоже подойдут'; // Одинарные кавычки
// String с обратными кавычками
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
console.log(phrase);

// Примеры с типом strig
let myName = 'Vladlen';
// Вставим переменную
console.log(`Привет, ${myName}!`);
// Вставим выражение
console.log(`Result: ${23 + 7}`);
// Пример с обычными кавычками
console.log('Result: ${23 + 7}');

// Boolean
let nameFileChecked = true;
console.log(nameFileChecked);
let ageFileChecked = false;
console.log(ageFileChecked);
// Пример со сравнением
let isGreater = 7 > 9;
console.log(isGreater);

// Null
let age = null;  // В приведённом выше коде указано, что значение переменной age неизвестно
console.log(age);

// Undefined
let ageUser;  // Значение не присваиваем
console.log(ageUser);  // Выведет undefined
let nameUser = undefined;
console.log(nameUser);  // Выведет undefined

// Оператор typeof
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)