// Задание 1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 - "К c прибавили значение a, при этом a записалось как 2"
// d = b++; alert(d);              // 1 - "Выводится 1 потому что присваивается текущее значение b = 1, если бы было ++b то ответ был бы 2, при этом b записалось как 2"
// c = (2 + ++a); alert(с);      // 5 - " 2 + 2 (значение a здесь равно 2) и + с, которое равно 1, при этом a записалось как 3"
// d = (2 + b++); alert(b);      // 4 - " 2 + 1 и + значение b из var, которое равно 1, при этом b записалось как 3"
// alert(a);                    // 3 - "На данном этапе a равно 3"
// alert(b);                    // 3 - "На данном этапе b равно 3"

// Задание 2
// var a = 2;
// var x = 1 + (a *= 2)
// alert(x);                    // 5 - "Выполнятеся действие в скобках, потом добавляется 1. Можно записать как 1 + (a = a * 2 )"

// Задание 3
// var a = 0, b = -2;
// if (a >= 0 && b >= 0) {
//     x = a - b;
//     alert(x);
// } else if (a < 0 && b < 0) {
//     x = a * b;
//     alert(x);
// }
// else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
//     x = a + b;
//     alert(x);
// }

// Задание 4
// a = +prompt('Введите число от 1 до 15');
// switch (a) {
//     case 1:
//         alert('Ваше число 1');
//         break;
//     case 2:
//         alert('Ваше число 2');
//         break;
//     case 3:
//         alert('Ваше число 3');
//         break;
//     case 4:
//         alert('Ваше число 4');
//         break;
//     case 5:
//         alert('Ваше число 5');
//         break;
//     case 6:
//         alert('Ваше число 6');
//         break;
//     case 7:
//         alert('Ваше число 7');
//         break;
//     case 8:
//         alert('Ваше число 8');
//         break;
//     case 9:
//         alert('Ваше число 9');
//         break;
//     case 10:
//         alert('Ваше число 10');
//         break;
//     case 11:
//         alert('Ваше число 11');
//         break;
//     case 12:
//         alert('Ваше число 12');
//         break;
//     case 13:
//         alert('Ваше число 13');
//         break;
//     case 14:
//         alert('Ваше число 14');
//         break;
//     case 15:
//         alert('Ваше число 15');
//         break;
// }	

// Задание 5

// function plus(a, b) {
//     return a + b;
// }

// p = plus(1, 3);
// alert(p);

// function minus(a, b) {
//     return a - b;
// }

// m = minus(1, 3);
// alert(m);

// function div(a, b) {
//     return a / b;
// }

// d = div(1, 3);
// alert(d);

// function mult(a, b) {
//     return a * b;
// }

// m = mult(1, 3);
// alert(m);

// Задание 6

// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         default:
//             return NaN;
//             break;
//         case 'plus':
//             return arg1 + arg2;
//             break;
//         case 'minus':
//             return arg1 - arg2;
//             break;
//         case 'div':
//             return arg1 / arg2;
//             break;
//         case 'mult':
//             return arg1 * arg2;
//             break;
//     }
// }
// var a = parseFloat(prompt("Введите число a"));
// var b = parseFloat(prompt("Введите число b"));
// var enterOperation = prompt("Введите операцию над числами: plus, minus, mult, div");

// alert("Результат: " + mathOperation(a, b, enterOperation));

// Задание 7

// var Null = null, Zero = 0;
// if (Null == Zero) {
//     document.write("null = zero <br>");
// }
// if (Null <= Zero) {
//     document.write("null < zero <br>");
// }
// if (Null != Zero) {
//     document.write("null != zero <br>");
// }
// if (Null > Zero) {
//     document.write("null > zero <br>");
// }
