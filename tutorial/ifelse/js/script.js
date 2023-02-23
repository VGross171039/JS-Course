'use strict';

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year == 2015) {
//   alert( "Правильно!" );
//   alert( "Вы такой умный!" );
// }

// Можно передать заранее вычисленное в переменной логическое значение в if

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
// let condition = (year == 2015);
// if(condition){
//   alert( "Правильно!" );
// }

// Возможность альтернативного ответа

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
// if(year == 2015){
//   alert( 'Да вы знаток!' );
// } else {
//   alert( 'А вот и неправильно!' ); // При любом значении, кроме 2015
// }

// Проверка по нескольким условиям

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
// if(year < 2015){
//   alert('Это слишком рано!');
// } else if (year > 2015){
//   alert('Это поздновато...');
// } else {
//   alert('Верно!');
// }

// Определение значения переменной в зависимости от условий

let accessAllowed; 
let age = prompt('Сколько вам лет?', '');

// if(age > 18){
//   accessAllowed = 'Ok!';
// } else {
//   accessAllowed = 'Fack!';
// }

// То же, через оператор «вопросительный знак»

accessAllowed = (age > 18) ? 'Ok!' : 'Fack!';
// Возможно опустить круглые скобки вокруг age > 18. 
// Оператор вопросительного знака имеет низкий приоритет, поэтому он выполняется после сравнения >
// Скобки делают код более простым для восприятия, поэтому рекомендуется их использовать

alert(accessAllowed);

// ===================== Проверка нескольких условий ===========

let salaryValue;
let salary = prompt('Какая зарплата у вас на новом месте?', 1200);

// if(salary > 1200){
//   salaryValue = 'Совсем неплохо!';
// } else if(salary == 1200){
//   salaryValue = 'Более-менее...';
// } else {
//   salaryValue = 'Нищебродам не подаем!';
// }

salaryValue = (salary > 1200) ? 'Совсем неплохо!' : 
              (salary == 1200) ? 'Более-менее...' :
              'Нищебродам не подаем!';

alert(salaryValue);

//  Нетрадиционное использование „?“

let company = prompt('Какая компания создала JavaScript?', '');

// (company == 'Netscape') ?
//    alert('Верно!') : alert('Неправильно.');

if (company == 'Netscape') {
  alert('Верно!');
} else {
  alert('Неправильно.');
}
