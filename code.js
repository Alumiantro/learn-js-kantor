// let str = "123";
// alert(typeof str); // string
// let num = Number(str); // становится числом 123
// alert(typeof num); // number


// let checkstring = ' \t \n' // специальный символ, который переносит на новую строку
// let num = Number(checkstring)
// alert(num)


"" + 1 + 0 // 1
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // nan
7 / 0 // infinity
"  -9  " + 5 //  -9  5
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // nan
" \t \n" - 2 // -2


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


let login = prompt('Кто вы?', '')
let message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' :
'Вы необычный';
alert(message)