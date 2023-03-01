'use strict';

//  Напишите "if", аналогичный "switch"

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

//  Мое решение

let browser = 'Chrome';
let group = 'Okay we support these browsers too';

if(browser === 'Edge') {
  console.log( "You've got the Edge!" );
} else if(browser === 'Chrome') {
  console.log(group);
} else if(browser === 'Firefox') {
  console.log(group);
} else if(browser === 'Safari') {
  console.log(group);
} else if(browser === 'Opera') {
  console.log(group);
} else {
   console.log( 'We hope that this page looks ok!' );
}

//  Решение по учебнику

// if(browser == 'Edge') {
//   console.log("You've got the Edge!");
// } else if (browser == 'Chrome'
//  || browser == 'Firefox'
//  || browser == 'Safari'
//  || browser == 'Opera') {
//   console.log( 'Okay we support these browsers too' );
// } else {
//   console.log( 'We hope that this page looks ok!' );
// }

//  Конструкция browser == 'Chrome' || browser == 'Firefox' ... разбита на несколько строк для лучшей читаемости
//  Запись через switch нагляднее

//  Переписать условия "if" на "switch"

// const number = +prompt('Введите число между 0 и 3', '');
// if (number === 0) {
//   alert('Вы ввели число 0');
// }
// if (number === 1) {
//   alert('Вы ввели число 1');
// }
// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

const number = +prompt('Введите число между 0 и 3', '');
//  Внимание: prompt в любом случае преобразует значение в строку, а вот + это значение уже преобразует в числовой тип
switch(number) {
  case 0:
    alert('Вы ввели число 0');
    break;
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
  default:
    alert('Неизвестное значение');
}

//  Внимание: break внизу не обязателен, но ставится по «правилам хорошего тона»
//  Допустим, он не стоит. Есть шанс, что в будущем нам понадобится добавить в конец ещё один case, например case 4, и мы, вполне вероятно, забудем этот break поставить. В результате выполнение case 2/case 3 продолжится на case 4 и будет ошибка