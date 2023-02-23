"use strict";

let a;
a = 23;
console.log(a);

// Вызов с присваиванием 

a += 10;
console.log(a);

a -= 12;
console.log(a);

a *= 3;
console.log(a);

a /= 5.12;
console.log(a);

a *= 7 + 12;
console.log(a);

// Инкремент/декремент

let counter = 5;
counter++;  // работает как counter = counter + 1, просто запись короче
console.log(counter);  // 6

counter = 2;
counter--;  // 1
console.log(counter);  // работает как counter = counter - 1, просто запись короче

counter++;
++counter;
console.log(counter); // 3, обе строки сделали одно и то же

counter = 0;
console.log(++counter);  // 1

counter = 0;
console.log(counter++);  // 0

counter = 1;
console.log( 2 * counter );
counter++;

