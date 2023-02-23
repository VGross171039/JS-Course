'use strict';

// Оператор ИЛИ

console.log('Оператор ИЛИ ========================');

// Существует всего четыре возможные логические комбинации

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

// Обычно оператор || используется в if для проверки истинности любого из заданных условий

let hour = 12;
let isWeekend = true;

// if(hour < 10 || hour > 18){
//   console.log('Офис закрыт');
// }

if(hour < 10 || hour > 18 || isWeekend){  // Выходные
  console.log('Офис закрыт');
} else {
  console.log('Офис открыт');
}

// Расширенный алгоритм

console.log( 1 || 0 );  // 1
console.log( true || 'no matter what' );  // true
console.log( null || 1 );  // 1 (первое истинное значение)
console.log( null || 0 || 1 );  // 1 (первое истинное значение)
console.log( undefined || null || 0 );  // 0 (поскольку все ложно, возвращается последнее значение)

// Получение первого истинного значения из списка переменных или выражений

let currentUser = null;
let defaultUser = 'Vladlen';

let userName = currentUser || defaultUser || "unnamed";

console.log(userName);

// Если бы и currentUser, и defaultUser были ложными, 
// в качестве результата мы бы наблюдали "unnamed"

let x;

true || (x = 1);
console.log(x);  // undefined, потому что (x = 1) не вычисляется

false || (x = 1);
console.log(x);  // 1

(5 > 7) || (x = 1);
console.log(x);  // 1

(5 < 7) || (x = 1);
console.log(x);  // undefined, потому что (x = 1) не вычисляется

// Этот вариант использования || является "аналогом if". 
// Первый операнд преобразуется в логический. Если он оказывается ложным, начинается вычисление второго

// ========================================================

// Оператор И &&

console.log('Оператор И ========================');

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

// Пример с if

let hourTime = 12;
let minuteTime = 30;

if(hourTime == 12 && minuteTime == 30){
  console.log('The time is 12:30');
}

if(1 && 0){  // вычисляется как true && false
  console.log('Не сработает, ложный результат');
}

// Если первый операнд истинный,
// И возвращает второй:
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
console.log( null && 5 ); // null
console.log( 0 && "no matter what" ); // 0

// Несколько значений подряд

console.log( 1 && 2 && null && 3 );  // null
console.log( 1 && 2 && (5 < 7) );  // true

// Замена if

x = 1;

if(x > 0){
  console.log( 'Greater than zero!' );
}

(x > 0) && console.log( 'Greater than zero!' );

// Как правило, вариант с if лучше читается и воспринимается
// Он более очевиден, поэтому лучше использовать его

// ===============================================

// Оператор НЕ ( ! )

console.log('Оператор НЕ ========================');

console.log( !true ); // false
console.log( !0 ); // true

// Двойное НЕ !! используют для преобразования значений к логическому типу

console.log(!'non-empty string');  // false
console.log(!!'non-empty string');  // true

console.log(!null);  // true
console.log(!!null);  // false

//  1. Первое НЕ преобразует значение в логическое значение и возвращает обратное
//  2. Второе НЕ снова инвертирует его
//  3. В конце мы имеем простое преобразование значения в логическое

//  Встроенная функция Boolean позволяет сделать фналогичное

console.log(Boolean('non-empty string'));  // true
console.log(Boolean(null));  // false
