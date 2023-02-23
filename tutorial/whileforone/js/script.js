'use strict';

// Базовая конструкция While

let i = 0;
while(i < 4){
  console.log(i);
  i++;
}

i = 5;
while(i){   // while (i) – более краткий вариант while (i != 0)
  console.log(i);  // когда i будет равно 0, условие станет ложным, и цикл остановится
  i--;
}

// Базовая конструкция do ... While

// do {
//   // тело цикла
// } while (condition);

i = 7;
do {
  console.log(i);  
  i--;
} while(i);

// Цикл «for»

// Синтаксис

// for (начало; условие; шаг) {
//   // ... тело цикла ...
// }

// Базовая конструкция

for(i = 0; i < 5; i++){
  console.log(i);
}

// Внимание! Разобраться!
i = 0;

for (i = 0; i < 3; i++) { // используем существующую переменную
  console.log(i); 
}

console.log(34 * i);  // Подхватывает значение i из цикла и добавляет 1 (?)

//  Пропуск частей «for». Пропуск начала

i = 0; // мы уже имеем объявленную i с присвоенным значением

for(; i < 3; i++) { // нет необходимости в "начале"
  console.log(i);
}

for(; i <= 5;) { // убираем шаг. Это сделает цикл аналогичным while (i <= 5)
  console.log(i++);
}