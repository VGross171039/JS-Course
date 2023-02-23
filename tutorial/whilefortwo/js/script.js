'use strict';

// Прерывание цикла: «break»

let sum = 0;

while (true) {
  let value = +prompt('Введите число', '');
  // Если новое значение не вводится:
  if(!value) break; // Директива break в строке (*) полностью прекращает выполнение цикла и передаёт управление на строку за его телом, то есть на alert
  sum += value; // Суммирует ранее введенные значения
}

alert('Сумма: ' + sum);

// Переход к следующей итерации: continue

for (let i = 0; i < 10; i++) {
  if(i % 2 == 0) continue;
  console.log(i);
}

// Метки для break/continue

