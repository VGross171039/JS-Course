'use strict';

//  Пример функции сложения двух чисел

function sumNumber(a, b) {
  return a + b;
}

let result = sumNumber(5, 7);
console.log(result);

//  Вызовов return может быть несколько

function checkAge(age) {
  if (age >= 18) {
    return console.log('Доступ получен')
  } else {
    return console.log('А родители разрешили?');
  }
}

checkAge(12);
checkAge(22);

//  Использование return без значения

function showMovie(age) {
  if(!checkAge(age)) {
    return;
  }
  //  В коде, если checkAge(age) вернёт false, showMovie не выполнит console.log
  console.log('Вам показывается кино');
}

// Если функция не возвращает значения, это всё равно, как если бы она возвращала undefined

function doNothing() { /* пусто */ }
console.log( doNothing() === undefined ); // true

//  Пустой return аналогичен return undefined

function doNothing() {
  return;
}
console.log( doNothing() === undefined ); // true