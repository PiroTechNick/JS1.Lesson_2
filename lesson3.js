// Задание 1

// var number = 0;
// while (number <= 100) {
//     i = 1;
//     counter = 0;
//     while (i <= (number / 2)) {
//         if (number % i == 0) {
//             counter++
//         };
//         i++
//     }
//     if (counter == 1) {
//         console.log(number)
//     };
//     number++;
// }

// Задание 2 + 3


// var basket = [
//     {
//         product: "Пиво \"Жигулевское\" ",
//         price: 75,
//         count: 3
//     },
//     {
//         product: "Пиво пшеничное светлое нефильтрованное",
//         price: 80,
//         count: 2
//     },
//     {
//         product: "Пиво темное фильтрованное",
//         price: 79,
//         count: 1
//     },
//     {
//         product: "Пиво светлое \"Will-Brau Helles\"",
//         price: 145,
//         count: 3
//     },
//     {
//         product: "Пиво светлое \"Will-Brau Weisse\"",
//         price: 140,
//         count: 2
//     },
// ];

// function countBasketPrice(basket) {
//     var BasketPrice = 0;
//     for (var item of basket) {
//         BasketPrice += (item.price * item.count);
//     }
//     return BasketPrice;
// }

// console.log("Стоимость корзины: " + countBasketPrice(basket) + " рублей");


// Задание 4

// for (var i = 0; i < 10; alert(i++)) { }

// Задание 5

// let row = 'x';
// for (let i = 0; i < 20; i++) {
//     console.log(row);
//     row += 'x';
// }