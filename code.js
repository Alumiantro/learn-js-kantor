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

// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

/*Цикл do..while повторяется, пока верны две проверки:

Проверка num <= 100 – то есть, введённое число всё ещё меньше 100.
Проверка && num вычисляется в false, когда num имеет значение null или пустая строка ''. В этом случае цикл while тоже нужно прекратить.
Кстати, сравнение num <= 100 при вводе null даст true, так что вторая проверка необходима.*/


//* Конструкция switch
// Если соответствие установлено – switch начинает выполняться от соответствующей директивы case и далее, до ближайшего break (или до конца switch).
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
// Если ни один case не совпал – выполняется (если есть) вариант default.
// let a = +prompt('Введите значение')
// switch (a) {
//   case 3:
//     alert('Маловато')
//     break;
//   case 4:
//     alert('Хватит')
//     break;
//   case 5:
//     alert('Уже многовато')
//     break;
//   default:
//     alert('Таких значений нет')
// }
// Если break нет, то выполнение пойдёт ниже по следующим case, при этом остальные проверки игнорируются.

//* Любое выражение может быть аругментом для switch/case
// let a = '1'
// let b = 0
// switch (+a) {
//   case b + 1:
//     alert('Выполнится, тк а = 1')
//     break;
//   default:
//   alert('это не работает');
// }

//* Группировка Case
// let a = 2 + 2
// switch (a) {
//   case 4:
//     alert('Верно');
//     break;
//   case 5:
//   case 3:
//     alert('Может вам посетить математику?');
//   default:
//     alert('Результат странный')
// }
// Возможность группировать case – это побочный эффект того, как switch/case работает без break.

//* Тип имеет значение
// Нужно отметить, что проверка на равенство всегда строгая. Значения должны быть одного типа, чтобы выполнялось равенство.
// let arg = prompt('Введите число');
// switch (arg) {
//   case '0':
//   case '1':
//     alert('1 или 0')
//     break;
//   case 3:
//     alert('Никогда не выполнится')
//     break;
//   default:
//     alert('Неизвестно')
// }

//* Задачи
// let browser = prompt('Введите значение')
// if (browser == 'edge') {
//   alert('yes, edge');
// } else if (browser == 'chrome'||'firefox'||'safari'||'opera') {
//   alert(`yes, ${browser}`);
// } else {
//   alert('Ничего не найдено');
// }
// const number = +prompt('Введите число');
// switch (number) {
//   case 0:
//     alert('Вы ввели число 0')
//     break;
//   case 1:
//     alert('Вы ввели число 1')
//     break;
//   case 2:
//   case 3:
//     alert('Вы ввели число 2 или 3')
//     break; // если в дальнейшем будем добавлять-лучше добавить break в конце
// }

//* Функции
// Одно из главных предназначений функций: избавление от дублирования кода
//* Локальные переменные видны только внутри функции
// function showMessage() {
//   let message = 'Привет, я жс'
//   alert(message)
// }
// showMessage ()
// есть полный доступ к внешним переменным, можно изменять их значение
// let name = 'Adelya';
// function showMessage() {
//   name = 'Sega' // изменяем значение внешней переменной
//   let message = 'Hello, ' + name
//   alert(message)
// }
// alert(name) // перед вызовом функции будет Adelya
// showMessage()
// alert(name) // после вызова функции имзенится на Sega

//* Внешняя переменная используется, только если внутри функции нет такой локальной
// let name = 'Adelya' // глоабльная переменная, стоит сводить к минимуму
// function showMessage() {
//   let name = 'Sega'
//   let message = 'Hello, ' + name
//   alert(message)
// }
// функция будет использовать локальную переменную

//* Параметры/аргументы
// function showMessage(from, text) { // аргументы
// alert(from + ':' + text);
// }
// showMessage('Adelya', 'Hello')
// когда функция вызывается, переданные значения копируются в локальные переменные from text, затем используются в теле функции
// function showMessage(from, text) {
// from = '*' + from + '*'; // немного украсим "from"
// alert( from + ': ' + text );
// }
// let from = "Аня";
// showMessage(from, "Привет"); // Аня*: Привет
// значение "from" осталось прежним, функция изменила значение локальной переменной
// alert( from ); // Аня

//* Если параметр не указан, значение становится undefined
// function agm(from, text = 'значение по умолчанию') {
// alert(from + ':' + text)
// }
// agm('Adelya') // Adelya: значение по умолчанию
// function showAgm(from, text = anotherFunction())
//anotherFunction()

//* В ранних версиях js не поддерживались значения по умолчанию, использовалась проверка
// function showMessage(from, text) {
// if(from === undefined) {
// alert('текст не добавлен')
// }
// }

// function showMessage(from, text) {
// text = text || 'текст не добавлен'
// }

//* Возврат значения
// function sum(a, b) {
//   return a + b
// }

// let result = sum(1, 2)
// alert(result)
// return возвращает значение в вызвавший ее код (присваивается переменной result)

//* Возовов return может быть несколько
// function checkAge(age) {
//   if(age > 18) {
//     return true
//   } else { // можно убрать else
//     return confirm ('А родители разрешили?')
//   }
// }

// let age = prompt('Сколько вам лет?', 18)

//   if(checkAge(age)) {
//     alert('Доступ разрешен')
//   } else {
//     alert('Доступ запрещен')
//   }

//* Можно использовать return без значения, это приведет к выходу из функции
// function showMovie(age) {
//   if(!checkAge) {
//     return
//   }
//   alert('Вам можно смотреть кино')
// }

//* Пустой return = undefined
// function doNothingReturn(){
//   return
// }
// alert(doNothingReturn() === undefined) // true

//* Если функция ничего не возвращает = undefined
// function doNothing(){}
// alert(doNothing() === undefined) // true

//* Не переносить на новую строку значения return

//return
//  (some + long + expression + or + whatever * f(a) + f(b)) //* Жс поставит ; перед return
//* Нужно хотя бы открыть кавычку () и начать переносить


//* Названия функций
// showMessage(..)     // показывает сообщение
// getAge(..)          // возвращает возраст (в каком-либо значении)
// calcSum(..)         // вычисляет сумму и возвращает результат
// createForm(..)      // создаёт форму (и обычно возвращает её)
// checkPermission(..) // проверяет доступ, возвращая true/false

//* Одна функция - одно действие
// getAge – будет плохим выбором, если функция будет выводить alert с возрастом (должна только возвращать его).
// createForm – будет плохим выбором, если функция будет изменять документ, добавляя форму в него (должна только создавать форму и возвращать её).
// checkPermission – будет плохим выбором, если функция будет отображать сообщение с текстом доступ разрешён/запрещён (должна только выполнять проверку и возвращать её результат).

//* Lопустимо создавать функции, даже если мы не планируем повторно использовать их


//* Задачи
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAge(age) {
//   return (age > 18) ? true:confirm ('А родители разрешили?')
// }
// function checkAge(age) {
//   return (age > 18) || confirm ('А родители разрешили?')
// }


// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// function min(a,b) {
//   if (a < b) {
//     return a
//   } else {
//     return b
//   }
// }

// function min(a,b) {
//   return(a < b) ? a : b
// }

// function getValue(x,n) {
// return x ** n
// }
// 
// let pow = getValue(prompt('Введите число'), prompt('Введите 2 число'))
// alert(pow)


//* Function Expression

// function sayHi() {
// alert( "Привет" );
// } // синтаксис function declaration (объявление функции)

// let sayHi = function() {
// alert('Привет')
// }; // синтаксис function expression (функциональное выражение)

//* Можно скопировать функцию в другую переменную
// function sayHi() {
//   alert('Hello')
// }

// let func = sayHi // если бы тут были скодки после sayHi, то выражение записало бы резульатт вызова sayHi, а не саму функцию
// func()
// sayHi()

//* Точка с запятой в конце

//* Функции-колбэки
// function ask(question, yes, no) {// текст вопроса, функция(которая будет вызываться на ответ yes), функция(на ответ no)
// if(confirm(question)) yes()
// else no()
// }
// function showOk() { // колбэк-функция, вернется, когда будет необходимо
//   alert('Вы согласны')
// }
// function showCancel() { // колбэк-функция
//   alert('Вы отменили выполнение')
// }
// ask('Вы согласны?', showOk, showCancel)
// передача функции как значения

//* Можно переписать так
// function ask(question, yes, no) {// текст вопроса, функция(которая будет вызываться на ответ yes), функция(на ответ no)
//   if (confirm(question)) yes()
//   else no()
// }
// ask('Вы согласны?',
//   function () { alert('Вы согласны') }, // анонимная функция
//   function () { alert('Вы не согласны') })


//* Отличие друг от друга
// Декларативная создается в общем потоке кода отдельной конструкцией, может использоваться во всем скрипте (когда движок JavaScript готовится выполнять скрипт или блок кода, прежде всего он ищет в нём Function Declaration и создаёт все такие функции)
// Экспрессивная внутри другой синтаксической конструкции, создается, когда выполнение доходит до нее, после используется (После того, как поток выполнения достигнет правой части выражения присваивания let sum = function)

//* Функции, созданные как Declaration, могут быть вызваны до своих определений
//* FD - блочная область видимости
// В строгом режиме, когда Function Declaration находится в блоке {...}, функция доступна везде внутри блока. Но не снаружи нег

// let age = +prompt('Сколько вам лет?', 18)

// if (age < 18) {
// если вызвать welcome() тут, например, то сработает (тк внутри созданного блока)
//   function welcome() {
//     alert('Hello')
//   }
// }
// else {
//   function welcome() {
//     alert('Bye')
//   }
// }

// welcome() // не сработает, тк объявление Function Declaration видимо только внутри блока кода, в котором располагается


//* переписать с помощью Function Expression
// let age = +prompt('Сколько вам лет?', 18)

// let welcome

// if (age < 18) {
//   welcome = function() {
//     alert('Hello')
//   }
// } else {
//   welcome = function() {
//     alert('Bye')
//   }
// }

//* Улучшить код с помощью оператора ?
// let age = +prompt('Сколько вам лет?', 18)

// let welcome = (age < 18) ?
//   function () { alert('Hello') } :
//   function () { alert('Bye') }

// welcome()

//* Когда выбирать FD и FE
// сначал рассматривать FD, тк они дают больше свободы и облегчают читаемость кода (+можно использовать до объявления)




//* Стрелочные функции
// краткий вариант FE
//let func = (arg1, arg2, ...argN) => expression


//* Длинная запись
// let sum = function (a, b) {
//   return a + b;
// };

//* Короткая запись
// let sum = (a, b) => a + b
// alert(sum(1, 3))

//* Если аргумент один, круглые скобки можно опустить
// let double = n => n * 2
// alert(double(1))

//* Если аргументов нет, то скобки пустые
// let sayHi = () => alert('Hello')
// sayHi()

//* Так же, как и FE, можно создавать динамические функции
// let age = prompt('Сколько вам лет?', 18)

// let welcome = (age < 18) ?
// () => alert('Hello') :
// () => alert('Bye')

// welcome()

//* Многострочные стрелочные функции
// let sum = (a,b) => { // фигурная скобка, открывающая тело многострочной функции
//   let result = a + b
//   return result // при фиг.ск. нужно явно вызвать return для возврата
// }
// alert(sum(1,4))

//* Задачи (Замените код Function Expression стрелочной функцией)
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

// function ask (question, yes, no) {
//   if (confirm(question)) yes()
//   else no()
// }

// ask(
//   'Вы согласны?',
//   () => alert('Вы согласились'),
//   () => alert('Вы отменили выполнение')
// )

// let ask = (question, yes, no) => confirm(question) ? yes():no()
// ask(
//   'Вы согласны?',
//   () => alert('Вы согласились'),
//   () => alert('Вы отменили выполнение')
// )




//* Объекты

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// let schedule = {}

// function isEmpty(obj) {
//   for(let key in obj) {
//     return false
//   }
//   return true
// }
// console.log(isEmpty(schedule))


// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum = 0
// function getSum (obj) {
//   for (let key in obj) {
//     sum += obj[key]
//   }
//   return sum
// }
// console.log(getSum(salaries))


// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// multiplyNumeric(menu);

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2
//     }
//   }
//   return(obj)
// }

// console.log(multiplyNumeric(menu))


let user = {
  name: "Иван",
  age: 30
};

let clone = {}; // новый пустой объект

// скопируем все свойства user в него
for (let key in user) {
  console.log(user[key])
//   clone[key] = user[key];
}

console.log(clone)