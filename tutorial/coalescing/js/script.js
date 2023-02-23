'use strict';

let user;

console.log(user ?? 'Anonim');  // Anonim (user не существует)

user = 'Vladlen';
console.log(user ?? 'Anonim');  // Vladlen (user существует)

// Последовательность из операторов ??
// Получить первое значение из списка, которое не является null/undefined

let firstName = null;
let lastName = null;
let nickName = 'Supercoder';

let userName = (firstName ?? lastName ?? nickName ?? 'Anonim');

console.log(userName);  // Supercoder

// Сравнение с ||

userName = (firstName || lastName || nickName || 'Anonim');
console.log(userName);  // Supercoder

let height = 0;

console.log(height || 100);  // 100
// height || 100 проверяет height на ложное значение, оно равно 0, да, ложное
// поэтому результатом || является второй аргумент, т.е. 100
console.log(height ?? 100);  // 0
// height ?? 100 проверяет, что переменная height содержит null/undefined, а поскольку это не так,
// то результатом является сама переменная height, т.е. 0

// Приоритет

height = null;
let width = null;

// Если опустить скобки, оператор * выполнится первым, так как у него приоритет выше, 
// чем у ??, и это приведёт к неправильным результатам
let area = (height ?? 100) * (width ?? 50);

console.log(area);  // 5000

// Использование ?? вместе с && или ||


