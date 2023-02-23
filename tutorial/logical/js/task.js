'use strict';

// Что выведет alert (ИЛИ)?

console.log( null || 2 || undefined );

// console.log( alert(1) || 2 || alert(3) );

// Что выведет alert (И)?

console.log( 1 && null && 2 );

// alert( alert(1) && alert(2) );

console.log(2 && 3 && 4); // 4
console.log(null && 2 && 3 && 4);  // null

console.log( null || 2 && 3 || 4 );  // 3

// Проверка значения в диапазоне

let age = 17;
if(age >= 14 && age <= 90){
  console.log(true);
} else {
  console.log(false);
}

// Проверка значения вне диапазона

if (!(age >= 14 && age <= 90)){
  console.log(true);
} else {
  console.log(false);
}

if(age < 14 || age > 90){
  console.log(true);
} else {
  console.log(false);
}

console.log('if==============');

if (-1 || 0) console.log( 'first' );
if (-1 && 0) console.log( 'second' );
if (null || -1 && 1) console.log( 'third' );

console.log('if / Boolean ==============');

console.log(Boolean(-1 || 0));
console.log(Boolean(-1 && 0));
console.log(Boolean(null || -1 && 1));

// Выполнится.
// Результат -1 || 0 = -1, в логическом контексте true
if (-1 || 0) console.log( 'first' );

// Не выполнится
// -1 && 0 = 0,  в логическом контексте false
if (-1 && 0) console.log( 'second' );

// Выполнится
// оператор && имеет больший приоритет, чем ||
// так что -1 && 1 выполнится раньше
// вычисления: null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) console.log( 'third' );

// Проверка логина

let userName = prompt('Кто там?', '');
let resultEntry;

if(userName === 'Admin'){
  let pass = prompt('Введите пароль', '');
  if(pass === 'Я главный'){
    resultEntry = 'Hello, Admin!';
  } else if(pass === '' || pass === null){
    resultEntry = 'Отменено';
  } else {
    resultEntry = 'Неверный пароль';
  }
} else if(userName === '' || userName === null){
  resultEntry = 'Отменено';
} else {
  resultEntry = 'Я вас не знаю';
}

alert(resultEntry);


