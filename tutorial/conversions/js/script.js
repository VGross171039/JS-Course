'use strict';

// Строковое преобразование

let value = true; // boolean
console.log(typeof value); 

value = String(value); // теперь value это строка "true"
console.log(typeof value);

// Численное преобразование

console.log("6" / "2");  // Автоматическое преобразование строки в число

let str = "12345";  // string
console.log(typeof str); 
// Преобразуем в число
let num = Number(str);  // number
console.log(typeof num);

let age = Number("Любая строка вместо числа");
console.log(age);  // NaN, преобразование не удалось

// Примеры
console.log(Number(" 123 "));  // 123
console.log(Number("1234z"));  // NaN (ошибка чтения числа на месте символа "z")
console.log(Number(true));  // 1
console.log(Number(false));  // 0
console.log(Number(null));  // 0
console.log(Number(undefined));  // NaN

// Логические преобразования
console.log(Boolean(1));  // true
console.log(Boolean(0));  // false
console.log(Boolean("Hello!"));  // true
console.log(Boolean(""));  // false
console.log(Boolean("0"));  // true
console.log(Boolean(" "));  // false
