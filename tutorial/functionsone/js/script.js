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

//  Параметры

function showMessage(from, next) {
  console.log(from + ': ' + next);
}

showMessage('Vladlen', 'Hello!');
showMessage('Vladlen', 'How are you?');

let from = 'Anna';  //  Используем переменную в качестве параметра

showMessage(from, 'Hello!');
console.log(from);

//  Значения по умолчанию

showMessage('Vladlen');  //  Vladlen: undefined
//  В вызове не указан параметр text, поэтому предполагается, что text === undefined

function showMessage(from, text = 'Текст не указан') {  //  Значение по умолчанию
  console.log(from + ': ' + text);
}

showMessage('Vladlen');  //  Vladlen: Текст не указан

//  Подстановка вычисляемого параметра
function testText(userNames, messageUser = testing()) {
  console.log(userNames + ' ' + messageUser);
}
function testing() {
  return 'Are you from Moscow?';
}
testText('Vladlen');
testText('Vladlen', 'How are you?');

//  Альтернативные параметры по умолчанию

//  Проверка передан ли параметр
function showMessage(text) {
  if(text === undefined) {  
    text = 'Пустой параметр';
  }
  console.log(text);
}
showMessage(); // Пустой параметр

//  Использование оператора ||
function showMessage(text) {
  // если значение text ложно или равняется undefined, тогда присвоить text значение 'пусто'
  text = text || 'Пустой параметр';
  console.log(text);
}
showMessage(); // Пустой параметр

// Применение оператора нулевого слияния

function showCount(count) {
  // если count равен undefined или null, показать "неизвестно"
  console.log(count ?? 'Неизвестно');
}

showCount(0);  //  0
showCount(null);  //  Неизвестно
showCount();  //  Неизвестно