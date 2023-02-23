'use strict';

console.log(2 > 1);  // true
console.log(2 == 1);  // false
console.log(2 != 1);  // true

let result = 5 > 4;
console.log(result);  // true

// Сравнение разных типов

console.log('2' > 1);  // true
console.log('01' == 1);  // true

// Логическое значение при сравнении

console.log(true == 0);  // false
console.log(false == 0);  // true
console.log(true == 1);  // true

//  Нестандарт

let a = 0;
let b = "0";

console.log( Boolean(a) ); // false
console.log( Boolean(b) ); // true
console.log(a == b); // true!

// Строгое сравнение

console.log(0 == false);  // true
console.log('' == false);  // true

console.log(0 === false);  // false
console.log(0 !== false);  // true
console.log('1' !== 1);  // true

// Сравнение с null и undefined

console.log(null === undefined);  // false
console.log(null == undefined);  // true

// Сравнения с нулем

// Операторы сравнения преобразуют null в число, рассматривая его как 0. Исходя из этого:
console.log(null > 0);  // false
console.log(null >= 0); // true

// Для нестрогого равенства == значений undefined и null действует особое правило: 
// Эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому
console.log(null == 0); // false

// Значение undefined несравнимо с другими значениями:

// Сравнения возвращают false, потому что undefined преобразуется в NaN, а NaN – это специальное числовое значение, которое возвращает false при любых сравнениях
console.log(undefined > 0); // false 
console.log(undefined < 0); // false 

// Нестрогое равенство возвращает false, потому что undefined равно только null, undefined и ничему больше
console.log(undefined == 0); // false 