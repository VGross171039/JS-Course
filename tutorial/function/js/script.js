'use strict';

//  Объявление функции с параметром
function hello(name) {
  console.log('Hello, ' + name + '!')
}

//  Вывод функции
hello('Vladlen');

//  Локальные переменные

function showMessage() {
  let message = 'Привет, я JavaScript!';
  console.log(message);
}

showMessage(); // Привет, я JavaScript!

//  Переменная видна только внутри функции
//  console.log(message); //  Неперехваченная ошибка ссылки: сообщение не определено
//  Внимание! Код на странице после ошибки не выполняется!

//  Внешние переменные

let userName = 'Vladlen';

function helloUser() {
  let message = 'Hello, ' + userName + '!';
  console.log(message);
}

helloUser();
