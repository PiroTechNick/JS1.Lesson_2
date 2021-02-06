// Задание 1

// var max = 999;
// var digit = {
//     number: Math.round(Math.random() * max), //запрос у пользователя +prompt('Введите число от 0 до 999')
//     units: 0,
//     tens: 0,
//     hundreds: 0
// };
// if (digit.number <= 9) {
//     digit.units = digit.number;
// } else if (digit.number <= 999) {
//     digit.units = Math.floor(digit.number % 10);
//     digit.tens = Math.floor(digit.number / 10 % 10);
//     digit.hundreds = Math.floor(digit.number / 100 % 10);
// } else {
//     digit.number = 0;
//     console.log('Вы ввели число за диапазоном 0 - 999');
// }
// console.log(digit);

//Задание 2

// var works = {
//     a00: 'Вы живёте в тихой и уютной деревеньке на окрайне страны.\n' +
//         'Здесь есть практчески всё: речка, лес, горы, озеро, луга и поля, есть даже школа в соседнем селе.\n' +
//         'Сейчас начало лета, воскресенье, раннее утро, Вы просыпаетесь и собираетесь ...\n',
//     a0: 2,
//     a1: '1 - Поспать до обеда\n',
//     a2: '2 - Пойти прогуляться\n',
//     b00: 'Вы решили поспать до обеда.\n' +
//         'После того как Вы проснулись первое, что вы ощутили, это приятный запах, который шёл с кухни.\n' +
//         'После Вы замечаете, какая за окном прекрасная погода, и Вы думаете ...\n',
//     b0: 2,
//     b1: '1 - Пойти прогуляться\n',
//     b2: '2 - Пойти пообедать\n',
//     c00: 'Вы решили пойти прогуляться.\n' +
//         'Вы выходите из своего дома и видите прекрасный рассвет, блики солнца так и играют на озёрной глади.\n' +
//         'Вы решаете дойти до озера, полюбоваться его красотойю\n' +
//         'С одной стороны тропинки Вы видите пшеничное поле, за которым веднеется лес.\n' +
//         'С другой стороны течёт речка, а в далеке виднеются горы.\n' +
//         'Вы наслаждаетесь пейзажами и не замечаете как летит время.\n' +
//         'Домой Вы приходите только к обеду, но до обеда ещё есть время и Вы решаете ...\n',
//     c0: 2,
//     c1: '1 - Подождать обед в столовой\n',
//     c2: '2 - Поколоть дров перед обедом\n',
//     d00: 'Здесь пишем текст повествования.\n' +
//         'Потом пишем несколько действий, например, два\n',
//     d0: 2, // кол-во ответов
//     d1: '1 - 1-й ответ\n',
//     d2: '2 - 2-й ответ\n',
// };


// var event, ok;
// var save_answers = true;
// var answers = [];

// function Answer(text, answer) {
//     this.text = text;
//     this.answer = answer;
// }

// function ScreenView(text, count_answer) {
//     do {
//         ok = false;
//         event = +prompt(text + '"-1" - Выход из игры');

//         if (event == -1) {
//             break;
//         }
//         else {
//             ok = isAnswer(count_answer, event);
//         }
//     } while (!ok);

//     if (save_answers) {
//         var answer = new Answer(text, event);
//         answers.push(answer);
//     }
// }

// ScreenView(works.a00 + works.a1 + works.a2, works.a0);
// switch (event) {
//     case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
//         ScreenView(works.b00 + works.b1 + works.b2, works.b0);
//         switch (event) {
//             case 1:
//             case 2:
//                 ScreenView(works.d00 + works.d1 + works.d2, works.d0);
//                 break;
//             case -1:
//                 break;
//             default:
//                 alert('Ошибка');
//         }
//         break;
//     case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
//         ScreenView(works.c00 + works.c1 + works.c2, works.c0);
//         switch (event) {
//             case 1: // Второе действие
//             case 2: // Второе действие
//                 ScreenView(works.d00 + works.d1 + works.d2, works.d0);
//                 break;
//             case -1: // Второе действие
//                 break;
//             default:
//                 alert('Ошибка');
//         }
//         break;
//     case -1: // Первое действие
//         break;
//     default:
//         alert('Ошибка');
// }
// alert('Спасибо за игру');

// save_answers = false;
// do {
//     ScreenView("Для просмотра истории ходов введите номер хода.\n ");
//     if (event != -1) {
//         alert(answers[event - 1].text + '\nВы выбрали ответ: № ' + answers[event - 1].answer);
//     }
// } while (event != -1);
// alert('До свидания');

// //------------------------------------------
// function isAnswer(q, event) {
//     if (isNaN(event) || !isFinite(event)) {
//         alert('Вы ввели недопустимый символ');
//         return false;
//     }
//     else if (event < 1 || event > q) {
//         alert('Ваше число выходит из допустимого диапазона');
//         return false;
//     }

//     return true;
// }