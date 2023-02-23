'use strict';

// Функция интерфейса Alert
// alert("Hello");

// Функция интерфейса Prompt
// result = prompt(title, [default]);

// Применение prompt
// let title = 'Какой иностранный язык ты изучаешь сейчас?';
// let lang = prompt(`${title}`, 'Суахили');
// alert(`Ты изучаешь ${lang} язык! Молодец!`);
// <-- для IE
// let test = prompt("Test", ''); 

// Функция интерфейса Confirm
// result = confirm(question);

// Применение Confirm
// let isBoss = confirm("Ты здесь главный?");
// alert (isBoss);

let title = 'Как твое имя, пользователь?';
let userName = prompt(`${title}`, 'Vladlen');
alert(`Приветствуем тебя, ${userName}!`);