// let str = "123";
// alert(typeof str); // string
// let num = Number(str); // становится числом 123
// alert(typeof num); // number


// let checkstring = ' \t \n' // специальный символ, который переносит на новую строку
// let num = Number(checkstring)
// alert(num)


// "" + 1 + 0 // 1
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // 9px
// "$" + 4 + 5 // $45
// "4" - 2 // 2
// "4px" - 2 // nan
// 7 / 0 // infinity
// "  -9  " + 5 //  -9  5
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // nan
// " \t \n" - 2 // -2


// let a = 1, b = 1;
// let c = ++a; // c = 2, а = 2
// let d = b++; // d = 1, b = 2 // d = 1, тк постфиксная форма возвращает старое значение
// let a = 2;
// let x = 1 + (a *= 2); // x = 5, a = 4


// Использование Number()
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(Number(a) + Number(b))

// Использование унарного плюса перед prompt
// let c = +prompt("Первое число?", 4);
// let d = +prompt("Второе число?", 4);
// alert(c + d)

// Использование унарного плюса перед в alert
// let e = prompt("Первое число?", 4);
// let m = prompt("Второе число?", 4);
// alert(+e + +m)

// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // rtue, тк строки не приводятся к числам

// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false, null равен только undefined
// null === +"\n0\n" // false строгое сравнение равных типов

// let accessAllowed;
// let age = prompt('Сколько вам лет?');
// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }
// alert(accessAllowed);


// let answer = prompt('Какое «официальное» название JavaScript?', '')
// if (answer == 'ECMAScript') {
//     alert('Верно!')
// } else {
//     alert('Не знаете? ECMAScript!')
// }


// let num = prompt('Введите число', '')
// if (num > 0) {
//     alert(1)
// } else if (num < 0) {
//     alert(-1)
// } else {
//     alert(0)
// }


// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }


// let result = (a + b < 4) ? 'Мало' : 'Много'
// let message;
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }


// let login = prompt('Кто вы?', '')
// let message = (login == 'Сотрудник') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина' :
// 'Вы необычный';
// alert(message)

// alert( null || 2 && 3 || 4) // сначала выполняется &&, true && true, результат = 3. null || 3 || 4, результат = 3

// let age = +prompt ('Сколько вам лет?', '14')
// if (age >= 14 && age <= 90) {
//     alert('Вы подходите!')
// } else {
//     alert ('Вы не подходите!')
// }


// if (age > 90 || age < 14)
// if (!(age > 90 && age < 14))

// Выполнится.
// Результат -1 || 0 = -1, в логическом контексте true
// if (-1 || 0) alert( 'first' );

// Не выполнится
// -1 && 0 = 0,  в логическом контексте false
// if (-1 && 0) alert( 'second' );

// Выполнится
// оператор && имеет больший приоритет, чем ||
// так что -1 && 1 выполнится раньше
// вычисления: null || -1 && 1  ->  null || 1  ->  1
// if (null || -1 && 1) alert( 'third' );


// let currentUser = prompt ('Кто вы?', '')
// if (currentUser == 'Admin') {
//    let pass = prompt ('Введите логин', '')
//    if (pass == 'Я главный') {
//     alert ('Здравствуйте!')
//     }
//     else if (pass == '' || pass == null) {
//     alert ('Неверный пароль')
//     }
//     else {
//     alert ('Отменено')
//     }
// }else if (currentUser == '' || currentUser == null) {
//     alert ('Отменено')
// }
// else {
//     alert ('Я вас не знаю')
// }``


// let i = 0;
// while (i++ < 5) alert ( i );
// let i = 0;         // i = 0
// while (i++ < 5) {  // i = 0 сравнивают с 5. Меньше. Ок. 
                      // После этого i стало = 1
//   alert( i );      // вывели 1
// }
                      // следующая итерация
// while (i++ < 5) {  // i = 1 сравнивают с 5. Меньше. Ок. 
                      // После этого i стало = 2
//   alert( i );      // вывели 2
                      // следующие итерации
                      // i = 2 -> 3
                      // i = 3 -> 4
                      // i = 4 -> 5
                      // следующая итерация
// while (i++ < 5) {  // i = 5 сравнивают с 5. Не меньше. Равно. Не ок!
                     // вышли из цикла



// for (let i = 0; i < 5; i++) alert( i );
// 0, 1, 2, 3, 4

// for (let i = 0; i < 5; ++i) alert( i );
// 0, 1, 2, 3, 4

/* Такой результат обусловлен алгоритмом работы for:
Выполнить единожды присваивание i = 0 перед чем-либо (начало).
Проверить условие i < 5
Если true – выполнить тело цикла alert(i), и затем i++
Увеличение i++ выполняется отдельно от проверки условия (2), значение i при этом не используется, поэтому нет никакой разницы между i++ и ++i. */

// for (let num = 2; num < 10; num++) {
//     if (num % 2) {
//         console.log (num)
//     }
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0
// while (i < 3) {
//     alert ( `number ${i}!`);
//     i++;
// }

// for (let value = prompt ('Введите число от 100', '100')) {
//     if (value <= 100) {
//         alert ('Все получилось!')
//     }
// }

let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

/*Цикл do..while повторяется, пока верны две проверки:

Проверка num <= 100 – то есть, введённое число всё ещё меньше 100.
Проверка && num вычисляется в false, когда num имеет значение null или пустая строка ''. В этом случае цикл while тоже нужно прекратить.
Кстати, сравнение num <= 100 при вводе null даст true, так что вторая проверка необходима.*/