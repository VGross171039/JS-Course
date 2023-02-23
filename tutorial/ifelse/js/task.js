'use strict';

// If (строка с нулём)

if("0"){
  console.log('Hello!');
}

// Название JavaScript

// let nameLang = prompt('Какое «официальное» название JavaScript?', '');

// if(nameLang == 'ECMAScript'){
//   alert('Верно!')
// } else {
//   alert('Не знаете? ECMAScript!');
// }

// Покажите знак числа

// let signNumber = prompt('Введите число', '');

// if(signNumber > 0){
//   alert('1');
// } else if (signNumber < 0){
//   alert('-1');
// } else {
//   alert('0');
// }

// Перепишите 'if' в '?'

let result;
let a = 1;
let b = 2;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';s
// }

result = (a + b < 4) ? 'Мало' : 'Много';
console.log(result);

// Перепишите 'if..else' в '?'

let message;
let login = 'Директор';

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

message = (login == 'Сотрудник') ? 'Привет' :
      (login == 'Директор') ? 'Здравствуйте' :
      (login == '') ? 'Нет логина' :
      '';

console.log(message);

// Комментарии

// let getAge = +prompt("Set value:","");
// let setLock = (getAge >= 18) ? 
//   (alert("Проходи!") , true) :
//   (alert("Нельзя!") , false);
// alert(setLock);