'use strict';

//  Переписать функцию, используя оператор '?' или '||'

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return console.log('Родители разрешили?');
  }
}

checkAge(12);

function checkAge(age) {
  return (age > 18) ? true : console.log('Родители разрешили?');
}

checkAge(22);

function checkAge(age) {
  return (age > 18) || console.log('Родители разрешили?');
}

checkAge(22);

//  Обратите внимание, что круглые скобки вокруг age > 18 не обязательны. Они здесь для лучшей читаемости кода
