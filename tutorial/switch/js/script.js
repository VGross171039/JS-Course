'use strict';

//  Конструкция "switch" синтаксис

// switch(x) {
//   case 'value1':  // if (x === 'value1')
//     ...
//     [break]

//   case 'value2':  // if (x === 'value2')
//     ...
//     [break]

//   default:
//     ...
//     [break]
// }

//  Переменная x проверяется на строгое равенство первому значению value1, затем второму value2 и так далее

//  Если соответствие установлено – switch начинает выполняться от соответствующей директивы case и далее, до ближайшего break (или до конца switch)

//  Если ни один case не совпал – выполняется (если есть) вариант default

//  Пример работы
console.log('==== Пример работы switch ====');

let a = 2 + 2;
switch(a) {
  case 3: 
    console.log('Маловато');
    break;
  case 4:
    console.log('То, что надо!');
    break;
  case 5:
    console.log('Это много');
    break;
  default:
    console.log('Нет таких значений');
}

//  Пример без break
console.log('==== Пример без break ====');

let b = 2 + 5;
switch(b) {
  case 5:
    console.log('Не то');
  case 6: 
    console.log('Опять не то');
  case 7:
    console.log('То, что надо');
  case 8: 
    console.log('Много');
  default:
    console.log('Ничего не могу найти');
}

//  И switch и case допускают любое выражение в качестве аргумента
console.log('Дополнительный пример');

a = "1";
b = 0;
switch (+a) {
  case b + 1:
    console.log("Выполнится, т.к. значением +a будет 1, что в точности равно b+1");
    break;
  default:
    console.log("Это не выполнится");
}

//  Группировка «case»
console.log('==== Группировка ====');

a = 3;
switch (a) {
  case 4:
    console.log('Правильно!');
    break;
  case 3: // (*) группируем оба case
  case 5:
    console.log('Неправильно!');
    console.log("Может вам посетить урок математики?");
    break;
  default:
    console.log('Результат выглядит странновато. Честно.');
}

//  Тип имеет значение
console.log('== Тип имеет значение ==');

let arg = prompt('Введите число');
switch(arg) {
  case '0':
  case '1':
    alert('Один или ноль');
    break;
  case '2': 
    alert('Два');
    break;
  case 3:
    alert('Никогда не выполнится');
    break;
  default:
    alert('Неизвестное значение');
}

//  Так как promt возвращает строку, введение числа невозможно, и вызовет неизвестное значение
//  Это произойдет из-за несовпадения типа данных